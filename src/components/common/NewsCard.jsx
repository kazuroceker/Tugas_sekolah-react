import { Link } from "react-router-dom";

export default function NewsCard({ article, delay = 0, hidden = false }) {
  return (
    <div
      className={`col-md-4${hidden ? " d-none" : ""}`}
      data-news-item
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <article className="post-item">
        <div className="post-image">
          <Link to={article.path}>
            <img
              src={article.image}
              alt={article.imageAlt}
              className="post-grid-image img-fluid"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="post-content d-flex flex-wrap gap-2 my-3">
          <div className="post-meta text-uppercase fs-6 text-secondary">
            <span className="post-category">{article.category} /</span>
            <span className="meta-day">{article.date}</span>
          </div>
          <h3 className="post-title text-uppercase fs-5">
            <Link to={article.path}>{article.title}</Link>
          </h3>
          <p>{article.excerpt}</p>
          <Link to={article.path} className="btn-link">
            Baca Selengkapnya &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}
