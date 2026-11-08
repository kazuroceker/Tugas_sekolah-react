import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import usePageMeta from "../hooks/usePageMeta.js";
import { galleryPage } from "../data/galeri.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SectionIntro from "../components/common/SectionIntro.jsx";
import FilterGroup from "../components/common/FilterGroup.jsx";
import Pagination from "../components/common/Pagination.jsx";
import Icon from "../components/common/Icon.jsx";

export default function GaleriPage() {
  usePageMeta(galleryPage.meta.title, galleryPage.meta.description);

  const { header, intro, filters, items, defaultImage, pagination } =
    galleryPage;
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const element = modalRef.current;

    if (!element) {
      return undefined;
    }

    const instance = new Modal(element);
    modalInstanceRef.current = instance;

    function handleHidden() {
      setSelected(null);
    }

    element.addEventListener("hidden.bs.modal", handleHidden);

    return () => {
      element.removeEventListener("hidden.bs.modal", handleHidden);
      instance.dispose();
      modalInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (selected && modalInstanceRef.current) {
      modalInstanceRef.current.show();
    }
  }, [selected]);

  const filteredItems = items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / pagination.perPage)
  );
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * pagination.perPage;
  const visibleItems = filteredItems.slice(
    startIndex,
    startIndex + pagination.perPage
  );

  function handleFilterChange(value) {
    setActiveFilter(value);
    setCurrentPage(1);
  }

  function handlePageChange(page) {
    const nextPage = Math.min(Math.max(page, 1), totalPages);

    if (nextPage === activePage) {
      return;
    }

    setCurrentPage(nextPage);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <PageHeader {...header} />

      <section className="py-5">
        <div className="container">
          <SectionIntro {...intro} />

          <FilterGroup
            options={filters}
            active={activeFilter}
            onChange={handleFilterChange}
            targetId="galeri-grid"
          />

          <div className="row g-3 galeri-list" id="galeri-grid" ref={gridRef}>
            {visibleItems.map((item, index) => (
              <div
                className="col-6 col-md-4 col-lg-3"
                data-category={item.category}
                data-aos="fade-up"
                data-aos-delay={(index * 50) % 600}
                key={`${item.id}-${index}`}
              >
                <a
                  href={item.image}
                  className="gallery-item"
                  data-gallery
                  data-img={item.image}
                  data-title={item.title}
                  aria-label={`Perbesar foto: ${item.title}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelected(item);
                  }}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="gallery-overlay" aria-hidden="true">
                    <Icon name="plus" size={28} />
                  </span>
                </a>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={activePage}
            totalPages={totalPages}
            onChange={handlePageChange}
            ariaLabel={pagination.ariaLabel}
            previousLabel={pagination.previous}
            nextLabel={pagination.next}
            className="mt-4"
          />
        </div>
      </section>

      <div
        className="modal fade"
        id="galleryModal"
        tabIndex="-1"
        aria-labelledby="galleryModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="galleryModalLabel">
                {selected ? selected.title : ""}
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Tutup"
              ></button>
            </div>
            <div className="modal-body p-0">
              <img
                src={selected ? selected.image : defaultImage}
                alt={selected ? selected.alt : "Foto kegiatan sekolah"}
                className="w-100"
                data-gallery-image
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
