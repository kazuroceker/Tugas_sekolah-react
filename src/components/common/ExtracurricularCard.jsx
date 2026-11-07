export default function ExtracurricularCard({
  category,
  title,
  description,
  coach,
  schedule,
  image,
  imageAlt,
}) {
  return (
    <article className="post-item">
      <div className="post-image">
        <img
          src={image}
          alt={imageAlt}
          className="card-img-school img-fluid"
          loading="lazy"
        />
      </div>
      <div className="post-content my-3">
        <p className="text-uppercase fs-6 text-secondary mb-1">{category}</p>
        <h3 className="fs-4">{title}</h3>
        <p>{description}</p>
        <ul className="list-unstyled fs-6 text-secondary mb-0">
          <li>
            <span className="text-dark">Pembina:</span> {coach}
          </li>
          <li>
            <span className="text-dark">Jadwal:</span> {schedule}
          </li>
        </ul>
      </div>
    </article>
  );
}
