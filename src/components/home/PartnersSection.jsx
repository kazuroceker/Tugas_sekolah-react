import { homePage } from "../../data/home.js";

export default function PartnersSection() {
  const { partners } = homePage;

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-3">
            <p className="text-uppercase fs-6 text-secondary mb-2">
              {partners.kicker}
            </p>
            <h2 className="section-title mb-0">{partners.title}</h2>
          </div>
          <div className="col-lg-9">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-4">
              {partners.items.map((partner) => (
                <span className="partner-name" key={partner}>
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
