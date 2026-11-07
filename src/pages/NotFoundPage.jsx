import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { notFoundPage } from "../data/notFound.js";

export default function NotFoundPage() {
  usePageMeta(notFoundPage.meta.title, notFoundPage.meta.description);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center text-center py-5">
          <div className="col-lg-7">
            <p className="text-uppercase fs-6 text-secondary mb-2">
              {notFoundPage.kicker}
            </p>
            <h1
              className="section-title"
              style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}
            >
              {notFoundPage.code}
            </h1>
            <p className="mb-4">{notFoundPage.description}</p>
            <Link
              to={notFoundPage.button.to}
              className="btn btn-dark btn-lg text-uppercase px-4"
            >
              {notFoundPage.button.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
