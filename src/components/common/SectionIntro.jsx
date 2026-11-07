export default function SectionIntro({ kicker, title, description }) {
  return (
    <div
      className="row justify-content-center text-center mb-4"
      data-aos="fade-up"
    >
      <div className="col-lg-8">
        <p className="text-uppercase fs-6 text-secondary mb-2">{kicker}</p>
        <h2 className="section-title mb-3">{title}</h2>
        {description ? <p className="mb-0">{description}</p> : null}
      </div>
    </div>
  );
}
