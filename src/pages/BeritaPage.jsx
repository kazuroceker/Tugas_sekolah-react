import { useRef, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { articles, newsPage } from "../data/berita.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SectionIntro from "../components/common/SectionIntro.jsx";
import NewsCard from "../components/common/NewsCard.jsx";
import Pagination from "../components/common/Pagination.jsx";

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

  const { header, intro, search, pagination, announcements, agenda } = newsPage;
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef(null);

  const keyword = query.toLowerCase().trim();
  const filteredArticles = articles.filter((article) =>
    matchesKeyword(article, keyword)
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / pagination.perPage)
  );
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * pagination.perPage;
  const visibleArticles = filteredArticles.slice(
    startIndex,
    startIndex + pagination.perPage
  );
  const isEmpty = keyword !== "" && filteredArticles.length === 0;

  function handleSearchChange(event) {
    setQuery(event.target.value);
    setCurrentPage(1);
  }

  function goToPage(page) {
    const nextPage = Math.min(Math.max(page, 1), totalPages);

    if (nextPage === activePage) {
      return;
    }

    setCurrentPage(nextPage);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
                onChange={handleSearchChange}
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

          <div className="row g-5">
            <div className="col-lg-8">
              <div className="row g-4 news-list" ref={listRef}>
                {visibleArticles.map((article, index) => (
                  <NewsCard
                    article={article}
                    delay={index * 100}
                    columnClassName="col-12"
                    layout="horizontal"
                    key={article.slug}
                  />
                ))}
              </div>

              <Pagination
                currentPage={activePage}
                totalPages={totalPages}
                onChange={goToPage}
                ariaLabel={pagination.ariaLabel}
                previousLabel={pagination.previous}
                nextLabel={pagination.next}
                className="mt-5"
              />
            </div>

            <aside className="col-lg-4 news-sidebar">
              <div className="bg-light p-4 mb-4" data-aos="fade-up">
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

              <div
                className="bg-light p-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="fs-5 text-uppercase mb-3">
                  {announcements.title}
                </h2>
                <ul className="list-unstyled fs-6 mb-0">
                  {announcements.items.map((item, index) => (
                    <li
                      className={
                        index === announcements.items.length - 1
                          ? ""
                          : "border-bottom pb-3 mb-3"
                      }
                      key={item.date}
                    >
                      <span className="text-secondary text-uppercase fs-6">
                        {item.date} /
                      </span>{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
