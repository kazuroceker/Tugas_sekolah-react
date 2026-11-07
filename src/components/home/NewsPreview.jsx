import NewsCard from "../common/NewsCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { homePage } from "../../data/home.js";

export default function NewsPreview() {
  const { news } = homePage;

  return (
    <section className="py-5">
      <div className="container">
        <SectionHeading
          kicker={news.kicker}
          title={news.title}
          link={news.link}
        />
        <div className="row g-4">
          {news.items.map((article, index) => (
            <NewsCard
              article={article}
              delay={index * 100}
              key={article.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
