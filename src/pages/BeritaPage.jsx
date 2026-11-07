import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { articles, newsPage } from "../data/berita.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SectionIntro from "../components/common/SectionIntro.jsx";
import NewsCard from "../components/common/NewsCard.jsx";
import CTABand from "../components/common/CTABand.jsx";

function matchesKeyword(article, keyword) {
  if (!keyword) {
    return true;
  }

  return [article.title, article.category, article.date, article.excerpt]
    .join(" ")
    .toLowerCase()
    .includes(keyword);
}

export default function BeritaPage() {
  usePageMeta(newsPage.meta.title, newsPage.meta.description);

  const { header, intro, search, announcements, agenda, cta } = newsPage;
  const [query, setQuery] = useState("");
  const keyword = query.toLowerCase().trim();
  const visibleCount = articles.filter((article) =>
    matchesKeyword(article, keyword)
  ).length;
  const isEmpty = keyword !== "" && visibleCount === 0;

  return (
    <>
      <PageHeader {...header} />

      <section className="py-5">
        <div className="container">
          <SectionIntro {...intro} />

          <div
            className="row justify-content-center mb-5"
            data-aos="fade-up"
          >
            <div className="col-lg-6">
              <label htmlFor="news-search" className="visually-hidden">
                {search.label}
              </label>
              <input
                type="search"
                id="news-search"
                className="form-control form-control-lg"
                placeholder={search.placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <p
            id="news-empty"
            className={`text-center text-secondary${
              isEmpty ? "" : " d-none"
            }`}
            role="status"
          >
            {search.empty}
          </p>

          <div className="row g-4">
            {articles.map((article, index) => (
              <NewsCard
                article={article}
                delay={index * 100}
                hidden={!matchesKeyword(article, keyword)}
                key={article.slug}
              />
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="section-title mb-3">{announcements.title}</h2>
              <ul className="list-unstyled fs-6">
                {announcements.items.map((item) => (
                  <li className="border-bottom py-3" key={item.date}>
                    <span className="text-secondary text-uppercase fs-6">
                      {item.date} /
                    </span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-light p-4">
                <h2 className="fs-5 text-uppercase mb-3">{agenda.title}</h2>
                <ul className="list-unstyled fs-6 mb-0">
                  {agenda.items.map((item, index) => (
                    <li
                      className={
                        index === agenda.items.length - 1 ? "" : "mb-3"
                      }
                      key={item.date}
                    >
                      <span className="text-dark">{item.date}</span>
                      <br />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand {...cta} />
    </>
  );
}
