import { Link } from "react-router-dom";

export default function CTABand({ title, text, button }) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-lg-8">
            <h2 className="section-title">{title}</h2>
            <p className="mb-0">{text}</p>
          </div>
          <div className="col-lg-auto">
            <Link
              to={button.to}
              className="btn btn-dark btn-lg text-uppercase px-4"
            >
              {button.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
