import { Link } from "react-router-dom";

export default function SectionHeading({ kicker, title, link }) {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mt-4 mb-4">
      <div>
        <p className="text-uppercase fs-6 text-secondary mb-2">{kicker}</p>
        <h2 className="section-title mb-0">{title}</h2>
      </div>
      {link ? (
        <Link to={link.to} className="btn-link">
          {link.label}
        </Link>
      ) : null}
    </div>
  );
}
