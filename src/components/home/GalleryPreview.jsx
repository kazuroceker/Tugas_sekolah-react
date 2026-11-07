import { Link } from "react-router-dom";
import Icon from "../common/Icon.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { homePage } from "../../data/home.js";

export default function GalleryPreview() {
  const { gallery } = homePage;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <SectionHeading
          kicker={gallery.kicker}
          title={gallery.title}
          link={gallery.link}
        />
        <div className="row g-3">
          {gallery.items.map((item, index) => (
            <div
              className="col-6 col-md-4 col-lg-2"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              key={item.image}
            >
              <Link to="/galeri" className="gallery-item">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gallery-overlay">
                  <Icon name="plus" size={28} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
