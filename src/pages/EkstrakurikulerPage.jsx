import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { extracurricularPage } from "../data/ekstrakurikuler.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SectionIntro from "../components/common/SectionIntro.jsx";
import FilterGroup from "../components/common/FilterGroup.jsx";
import ExtracurricularCard from "../components/common/ExtracurricularCard.jsx";
import CTABand from "../components/common/CTABand.jsx";

export default function EkstrakurikulerPage() {
  usePageMeta(
    extracurricularPage.meta.title,
    extracurricularPage.meta.description
  );

  const { header, intro, filters, items, cta } = extracurricularPage;
  const [activeFilter, setActiveFilter] = useState("all");

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
            targetId="ekskul-grid"
          />

          <div className="row g-4" id="ekskul-grid">
            {items.map((item, index) => {
              const matches =
                activeFilter === "all" || item.category === activeFilter;

              return (
                <div
                  className={`col-md-6 col-lg-4${matches ? "" : " d-none"}`}
                  data-category={item.category}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  key={item.title}
                >
                  <ExtracurricularCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand {...cta} />
    </>
  );
}
