import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import usePageMeta from "../hooks/usePageMeta.js";
import { galleryPage } from "../data/galeri.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SectionIntro from "../components/common/SectionIntro.jsx";
import FilterGroup from "../components/common/FilterGroup.jsx";
import Icon from "../components/common/Icon.jsx";
import CTABand from "../components/common/CTABand.jsx";

export default function GaleriPage() {
  usePageMeta(galleryPage.meta.title, galleryPage.meta.description);

  const { header, intro, filters, items, defaultImage, cta } = galleryPage;
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);

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

  return (
    <>
      <PageHeader {...header} />

      <section className="py-5">
        <div className="container">
          <SectionIntro {...intro} />

          <FilterGroup
            options={filters}
            active={activeFilter}
            onChange={setActiveFilter}
            targetId="galeri-grid"
          />

          <div className="row g-3" id="galeri-grid">
            {items.map((item, index) => {
              const matches =
                activeFilter === "all" || item.category === activeFilter;

              return (
                <div
                  className={`col-6 col-md-4 col-lg-3${
                    matches ? "" : " d-none"
                  }`}
                  data-category={item.category}
                  data-aos="fade-up"
                  data-aos-delay={(index * 50) % 600}
                  key={item.id}
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
              );
            })}
          </div>
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

      <CTABand {...cta} />
    </>
  );
}
