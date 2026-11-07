import usePageMeta from "../hooks/usePageMeta.js";
import { profilePage } from "../data/profil.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import CTABand from "../components/common/CTABand.jsx";
import Icon from "../components/common/Icon.jsx";

export default function ProfilPage() {
  usePageMeta(profilePage.meta.title, profilePage.meta.description);

  const {
    header,
    welcome,
    history,
    advantages,
    visionMissions,
    structure,
    profileTable,
    facilities,
    cta,
  } = profilePage;

  return (
    <>
      <PageHeader {...header} />

      <section id="sambutan" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-up">
              <img
                src={welcome.image}
                alt={welcome.imageAlt}
                className="img-fluid w-100"
                style={{ maxHeight: "520px", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <p className="text-uppercase fs-6 text-secondary mb-2">
                {welcome.kicker}
              </p>
              <h2 className="section-title mb-3">{welcome.title}</h2>
              {welcome.paragraphs.map((paragraph, index) => (
                <p
                  className={index === welcome.paragraphs.length - 1 ? "mb-0" : ""}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sejarah" className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up">
              <p className="text-uppercase fs-6 text-secondary mb-2">
                {history.kicker}
              </p>
              <h2 className="section-title mb-3">{history.title}</h2>
              {history.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <p className="text-uppercase fs-6 text-secondary mb-2">
                {advantages.kicker}
              </p>
              <h2 className="section-title mb-3">{advantages.title}</h2>
              <div className="row g-3">
                {advantages.items.map((item, index) => (
                  <div
                    className="col-md-6 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    key={item.title}
                  >
                    <div className="text-center py-4">
                      <span className="d-inline-flex text-dark mb-3">
                        <Icon name={item.icon} size={34} />
                      </span>
                      <h3 className="fs-5 text-uppercase mb-2">{item.title}</h3>
                      <p className="fs-6 mb-0">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visi-misi" className="py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5" data-aos="fade-up">
              <p className="text-uppercase fs-6 text-secondary mb-2">
                {visionMissions.kicker}
              </p>
              <h2 className="section-title mb-3">{visionMissions.title}</h2>
              <div className="bg-light p-4 p-lg-5">
                <h3 className="fs-5 text-uppercase mb-3">
                  {visionMissions.visionTitle}
                </h3>
                <p className="mb-0">{visionMissions.vision}</p>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <h3 className="fs-5 text-uppercase mb-3">
                {visionMissions.missionTitle}
              </h3>
              <ol className="fs-6">
                {visionMissions.missions.map((mission) => (
                  <li key={mission}>{mission}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="struktur" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <p className="text-uppercase fs-6 text-secondary mb-2">
              {structure.kicker}
            </p>
            <h2 className="section-title mb-0">{structure.title}</h2>
          </div>
          <div className="row g-4">
            {structure.items.map((item, index) => (
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={item.role}
              >
                <div className="bg-white h-100 p-4 text-center">
                  <h3 className="fs-5 mb-1">{item.role}</h3>
                  <p className="fs-6 mb-0">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tabel-profil" className="py-5">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-lg-8" data-aos="fade-up">
              <p className="text-uppercase fs-6 text-secondary mb-2">
                {profileTable.kicker}
              </p>
              <h2 className="section-title mb-0">{profileTable.title}</h2>
            </div>
          </div>
          <div
            className="table-responsive"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <table className="table table-bordered align-middle profile-table mb-0">
              <tbody>
                {profileTable.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fs-6 text-secondary mt-3 mb-0">{profileTable.note}</p>
        </div>
      </section>

      <section id="fasilitas" className="py-5 bg-light">
        <div className="container">
          <SectionHeading
            kicker={facilities.kicker}
            title={facilities.title}
            link={facilities.link}
          />
          <div className="row g-4">
            {facilities.items.map((item, index) => (
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={item.title}
              >
                <div className="post-item">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="card-img-school img-fluid"
                    loading="lazy"
                  />
                  <h3 className="fs-5 mt-3 mb-1">{item.title}</h3>
                  <p className="fs-6 mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand {...cta} />
    </>
  );
}
