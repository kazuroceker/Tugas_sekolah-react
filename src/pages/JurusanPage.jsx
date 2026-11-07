import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { jurusanPage } from "../data/jurusan.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SectionIntro from "../components/common/SectionIntro.jsx";
import CTABand from "../components/common/CTABand.jsx";

function getTabFromHash(tabs, hash) {
  const id = hash.replace(/^#/, "");
  return tabs.some((tab) => tab.id === id) ? id : tabs[0].id;
}

export default function JurusanPage() {
  usePageMeta(jurusanPage.meta.title, jurusanPage.meta.description);

  const { tabs } = jurusanPage;
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState(() =>
    getTabFromHash(tabs, hash)
  );

  useEffect(() => {
    setActiveTab(getTabFromHash(tabs, hash));
  }, [tabs, hash]);

  function selectTab(id) {
    setActiveTab(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      <PageHeader {...jurusanPage.header} />

      <section className="py-5">
        <div className="container">
          <SectionIntro {...jurusanPage.intro} />

          <ul
            className="nav nav-tabs jurusan-tabs justify-content-center mb-5"
            id="jurusanTab"
            role="tablist"
          >
            {tabs.map((tab) => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button
                  className={`nav-link${activeTab === tab.id ? " active" : ""}`}
                  id={`${tab.id}-tab`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => selectTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content" id="jurusanTabContent">
            {tabs.map((tab) => (
              <div
                className={`tab-pane fade${
                  activeTab === tab.id ? " active show" : ""
                }`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
                tabIndex="0"
                key={tab.id}
              >
                <div className="row align-items-center g-5">
                  <div className="col-lg-5">
                    <img
                      src={tab.image}
                      alt={tab.imageAlt}
                      className="img-fluid w-100 jurusan-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-7">
                    <p className="text-uppercase fs-6 text-secondary mb-2">
                      Kompetensi Keahlian
                    </p>
                    <h2 className="section-title mb-3">{tab.title}</h2>
                    <p>{tab.description}</p>
                    <div className="row g-4 mt-1">
                      <div className="col-md-6">
                        <h3 className="fs-5 text-uppercase mb-2">
                          Prospek Karier
                        </h3>
                        <ul className="fs-6">
                          {tab.careers.map((career) => (
                            <li key={career}>{career}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h3 className="fs-5 text-uppercase mb-2">
                          Fasilitas Praktik
                        </h3>
                        <ul className="fs-6">
                          {tab.facilities.map((facility) => (
                            <li key={facility}>{facility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      to="/kontak"
                      className="btn btn-dark text-uppercase px-4 mt-2"
                    >
                      Tanya Jurusan Ini
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand {...jurusanPage.cta} />
    </>
  );
}
