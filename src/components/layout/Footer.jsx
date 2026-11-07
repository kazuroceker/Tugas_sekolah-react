import { Link } from "react-router-dom";
import BrandMark from "../common/BrandMark.jsx";
import Icon from "../common/Icon.jsx";
import { footerInfoLinks, footerQuickLinks } from "../../data/navigation.js";
import { site } from "../../data/site.js";

export default function Footer() {
  return (
    <footer id="footer" className="mt-5">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between py-5">
          <div className="col-md-3 col-sm-6">
            <div className="footer-menu footer-menu-001">
              <div className="footer-intro mb-4">
                <Link
                  to="/"
                  className="d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  <BrandMark />
                  <span className="brand-text">{site.name}</span>
                </Link>
              </div>
              <p>{site.footerIntro}</p>
              <div className="social-links">
                <ul className="list-unstyled d-flex flex-wrap gap-3">
                  {site.socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary"
                        aria-label={social.label}
                      >
                        <Icon name={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="footer-menu footer-menu-002">
              <h5 className="widget-title text-uppercase mb-4">Menu Cepat</h5>
              <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                {footerQuickLinks.map((link) => (
                  <li className="menu-item" key={link.label}>
                    <Link to={link.to} className="item-anchor">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="footer-menu footer-menu-003">
              <h5 className="widget-title text-uppercase mb-4">Informasi</h5>
              <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                {footerInfoLinks.map((link) => (
                  <li className="menu-item" key={link.label}>
                    <Link to={link.to} className="item-anchor">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="footer-menu footer-menu-004 border-animation-left">
              <h5 className="widget-title text-uppercase mb-4">Kontak</h5>
              <p className="mb-2">{site.address}</p>
              <p className="mb-2">
                <a href={site.phone.href} className="item-anchor">
                  {site.phone.display}
                </a>
              </p>
              <p className="mb-2">
                <a href={site.email.href} className="item-anchor">
                  {site.email.display}
                </a>
              </p>
              <p className="mb-0">{site.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">{site.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
