import CategoryCard from "../common/CategoryCard.jsx";
import ExtracurricularCard from "../common/ExtracurricularCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { homePage } from "../../data/home.js";

export default function ExtracurricularPreview() {
  const { extracurricularPreview } = homePage;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <SectionHeading
          kicker={extracurricularPreview.kicker}
          title={extracurricularPreview.title}
          link={extracurricularPreview.link}
        />
        <div className="row g-4">
          {extracurricularPreview.posts.map((item, index) => (
            <div
              className="col-md-6 col-lg-4"
              data-category={item.category}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={item.title}
            >
              <ExtracurricularCard {...item} />
            </div>
          ))}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <CategoryCard
              title={extracurricularPreview.featured.title}
              description={extracurricularPreview.featured.description}
              image={extracurricularPreview.featured.image}
              imageAlt={extracurricularPreview.featured.imageAlt}
              to={extracurricularPreview.featured.to}
              linkLabel={extracurricularPreview.featured.linkLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
