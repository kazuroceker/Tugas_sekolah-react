import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function PageHeader({ breadcrumb, title, description }) {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center text-center py-4">
          <div className="col-lg-8">
            <p className="text-uppercase fs-6 text-secondary mb-2">
              {breadcrumb.map((item, index) => (
                <Fragment key={`${item.label}-${index}`}>
                  {index > 0 ? " / " : null}
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-secondary text-decoration-none"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </Fragment>
              ))}
            </p>
            <h1 className="section-title mb-3">{title}</h1>
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
