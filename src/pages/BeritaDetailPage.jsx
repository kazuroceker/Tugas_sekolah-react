import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { site } from "../data/site.js";
import { articleBySlug, articlePage } from "../data/berita.js";
import CTABand from "../components/common/CTABand.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

function ArticleView({ article }) {
  usePageMeta(
    `${article.title} | ${site.name}`,
    article.excerpt
  );

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p className="text-uppercase fs-6 text-secondary mb-2">
                <Fragment>
                  <Link
                    to="/berita"
                    className="text-secondary text-decoration-none"
                  >
                    Berita
                  </Link>
                  {" / "}
                  <Link
                    to="/berita"
                    className="text-secondary text-decoration-none"
                  >
                    {article.category}
                  </Link>
                  {" / "}
                  {article.date}
                </Fragment>
              </p>
              <h1 className="section-title mb-3">{article.title}</h1>
              <p className="fs-6 text-secondary mb-4">
                Ditulis oleh {article.author}
              </p>
              <img
                src={article.image}
                alt={article.imageAlt}
                className="article-hero img-fluid mb-4"
                loading="lazy"
              />
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <h2 className="fs-4 text-uppercase mt-4 mb-3">
                {articlePage.pointsTitle}
              </h2>
              <ul className="fs-6">
                {article.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/berita"
                  className="btn btn-dark text-uppercase px-4"
                >
                  {articlePage.backLabel}
                </Link>
                <Link
                  to="/kontak"
                  className="btn btn-outline-dark text-uppercase px-4"
                >
                  {articlePage.contactLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand {...articlePage.cta} />
    </>
  );
}

export default function BeritaDetailPage() {
  const { slug } = useParams();
  const article = articleBySlug[slug];

  if (!article) {
    return <NotFoundPage />;
  }

  return <ArticleView article={article} />;
}
