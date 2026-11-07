import { Link } from "react-router-dom";

export default function CategoryCard({
  title,
  description,
  image,
  imageAlt,
  to,
  linkLabel,
}) {
  return (
    <div className="cat-item image-zoom-effect">
      <div className="image-holder">
        <Link to={to}>
          <img
            src={image}
            alt={imageAlt}
            className="jurusan-img img-fluid"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="category-content">
        <h3 className="element-title text-uppercase fs-5 mt-3">
          <Link to={to}>{title}</Link>
        </h3>
        <p className="fs-6">{description}</p>
        <Link to={to} className="btn-link">
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}
