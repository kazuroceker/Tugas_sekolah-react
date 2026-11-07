export default function FilterGroup({
  options,
  active,
  onChange,
  targetId,
}) {
  return (
    <div
      className="d-flex justify-content-center mb-5"
      data-filter-group
      data-filter-target={`#${targetId}`}
    >
      <div className="filter-group">
        {options.map((option) => (
          <a
            key={option.value}
            href="#"
            className={`btn-link${active === option.value ? " is-checked" : ""}`}
            data-filter={option.value}
            aria-pressed={active === option.value}
            onClick={(event) => {
              event.preventDefault();
              onChange(option.value);
            }}
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
}
