import { Link } from "react-router-dom";
import { homePage } from "../../data/home.js";

export default function WelcomeSection() {
  const { welcome } = homePage;

  return (
    <section className="py-5">
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
            {welcome.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link to={welcome.link.to} className="btn-link">
              {welcome.link.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
