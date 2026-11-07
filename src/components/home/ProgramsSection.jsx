import CategoryCard from "../common/CategoryCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { homePage } from "../../data/home.js";

export default function ProgramsSection() {
  const { programs } = homePage;

  return (
    <section className="py-5">
      <div className="container">
        <SectionHeading
          kicker={programs.kicker}
          title={programs.title}
          link={programs.link}
        />
        <div className="row g-4">
          {programs.items.map((item, index) => (
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={item.id}
            >
              <CategoryCard
                title={item.title}
                description={item.description}
                image={item.image}
                imageAlt={item.imageAlt}
                to={item.to}
                linkLabel={item.linkLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
