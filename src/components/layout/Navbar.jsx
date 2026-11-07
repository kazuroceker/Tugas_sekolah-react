import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import BrandMark from "../common/BrandMark.jsx";
import { primaryNav, ppdbLink } from "../../data/navigation.js";
import { site } from "../../data/site.js";

function splitTarget(to) {
  const [path, hash = ""] = to.split("#");
  return { path, hash: hash ? `#${hash}` : "" };
}

function isSectionActive(to, pathname) {
  const { path } = splitTarget(to);

  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

function isLinkActive(to, pathname, hash) {
  const target = splitTarget(to);
  return pathname === target.path && hash === target.hash;
}

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const offcanvasRef = useRef(null);

  function closeOffcanvas() {
    if (!offcanvasRef.current) {
      return;
    }

    const instance = Offcanvas.getInstance(offcanvasRef.current);

    if (instance) {
      instance.hide();
    }
  }

  useEffect(() => {
    closeOffcanvas();
  }, [pathname]);

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-xl bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
            to="/"
          >
            <BrandMark />
            <span className="brand-text">
              {site.name}
              <span>{site.tagline}</span>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Buka menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            ref={offcanvasRef}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Tutup"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto align-items-xl-center gap-1 gap-xl-3 d-none d-xl-flex">
                {primaryNav.map((item) => {
                  if (!item.children) {
                    const active = pathname === item.to;

                    return (
                      <li className="nav-item" key={item.to}>
                        <Link
                          className={`nav-link${active ? " active" : ""}`}
                          to={item.to}
                          aria-current={active ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  const sectionActive = isSectionActive(item.to, pathname);

                  return (
                    <li className="nav-item dropdown" key={item.id}>
                      <Link
                        className={`nav-link dropdown-toggle${
                          sectionActive ? " active" : ""
                        }`}
                        to={item.to}
                        id={`menu-${item.id}`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.label}
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`menu-${item.id}`}
                      >
                        {item.children.map((child) => {
                          const childActive = isLinkActive(
                            child.to,
                            pathname,
                            hash
                          );

                          return (
                            <li key={child.to}>
                              <Link
                                className={`dropdown-item item-anchor${
                                  childActive ? " active" : ""
                                }`}
                                to={child.to}
                                aria-current={
                                  childActive
                                    ? splitTarget(child.to).hash
                                      ? "location"
                                      : "page"
                                    : undefined
                                }
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
                <li className="nav-item ms-xl-3">
                  <Link
                    className="btn btn-dark btn-sm px-4 text-uppercase"
                    to={ppdbLink.to}
                  >
                    {ppdbLink.label}
                  </Link>
                </li>
              </ul>

              <div className="d-xl-none w-100">
                <ul className="navbar-nav gap-1">
                  <li className="nav-item">
                    <Link
                      className={`nav-link${
                        pathname === "/" ? " active" : ""
                      }`}
                      to="/"
                      aria-current={pathname === "/" ? "page" : undefined}
                      onClick={closeOffcanvas}
                    >
                      Beranda
                    </Link>
                  </li>
                  {primaryNav
                    .filter((item) => item.children)
                    .map((item) => {
                      const sectionActive = isSectionActive(item.to, pathname);
                      const panelId = `mobile-menu-${item.id}`;

                      return (
                        <li className="nav-item" key={item.id}>
                          <button
                            className="nav-link mobile-menu-toggle"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${panelId}`}
                            aria-expanded={sectionActive ? "true" : "false"}
                            aria-controls={panelId}
                          >
                            {item.label}
                            <span className="menu-caret" aria-hidden="true"></span>
                          </button>
                          <div
                            className={`collapse mobile-submenu${
                              sectionActive ? " show" : ""
                            }`}
                            id={panelId}
                          >
                            <ul className="list-unstyled mb-0">
                              {item.children.map((child) => {
                                const childActive = isLinkActive(
                                  child.to,
                                  pathname,
                                  hash
                                );

                                return (
                                  <li key={child.to}>
                                    <Link
                                      className={`mobile-submenu-link${
                                        childActive ? " active" : ""
                                      }`}
                                      to={child.to}
                                      aria-current={
                                        childActive
                                          ? splitTarget(child.to).hash
                                            ? "location"
                                            : "page"
                                          : undefined
                                      }
                                      onClick={closeOffcanvas}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  <li className="nav-item mt-2">
                    <Link
                      className="btn btn-dark btn-sm px-4 text-uppercase w-100"
                      to={ppdbLink.to}
                      onClick={closeOffcanvas}
                    >
                      {ppdbLink.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
