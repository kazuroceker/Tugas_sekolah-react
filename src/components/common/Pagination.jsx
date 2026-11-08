export default function Pagination({
  currentPage,
  totalPages,
  onChange,
  ariaLabel,
  previousLabel,
  nextLabel,
  className = "",
}) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <nav
      className={`school-pagination${className ? ` ${className}` : ""}`}
      aria-label={ariaLabel}
    >
      <ul className="pagination justify-content-center mb-0">
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <button
            type="button"
            className="page-link"
            aria-label={previousLabel}
            onClick={() => onChange(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {pages.map((page) => (
          <li
            className={`page-item${page === currentPage ? " active" : ""}`}
            key={page}
          >
            <button
              type="button"
              className="page-link"
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => onChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`page-item${isLast ? " disabled" : ""}`}>
          <button
            type="button"
            className="page-link"
            aria-label={nextLabel}
            onClick={() => onChange(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}
