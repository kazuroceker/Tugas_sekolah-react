import { Link } from "react-router-dom";

export default function NewsCard({
  article,
  delay = 0,
  hidden = false,
  columnClassName = "col-md-4",
  layout = "vertical",
}) {
  const isHorizontal = layout === "horizontal";

  const image = (
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
  );

  const content = (
    <div
      className={`post-content ${
        isHorizontal ? "mt-3 mt-sm-0 mb-3" : "my-3"
      }`}
    >
      <div className="post-meta text-uppercase fs-6 text-secondary mb-2">
        <span className="post-category">{article.category} /</span>{" "}
        <span className="meta-day">{article.date}</span>
      </div>
      <h3 className="post-title text-uppercase fs-5 mb-2">
        <Link to={article.path}>{article.title}</Link>
      </h3>
      <p className="mb-3">{article.excerpt}</p>
      <Link to={article.path} className="btn-link">
        Baca Selengkapnya &rarr;
      </Link>
    </div>
  );

  return (
    <div
      className={`${columnClassName}${hidden ? " d-none" : ""}`}
      data-news-item
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <article
        className={`post-item${isHorizontal ? " post-item-horizontal" : ""}`}
      >
        {isHorizontal ? (
          <div className="row g-4">
            <div className="col-12 col-sm-5">{image}</div>
            <div className="col-12 col-sm-7">{content}</div>
          </div>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </article>
    </div>
  );
}
