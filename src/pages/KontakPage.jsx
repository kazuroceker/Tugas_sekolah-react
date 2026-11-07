import { useEffect, useRef, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { contactPage } from "../data/kontak.js";
import { site } from "../data/site.js";
import PageHeader from "../components/common/PageHeader.jsx";
import Icon from "../components/common/Icon.jsx";

export default function KontakPage() {
  usePageMeta(contactPage.meta.title, contactPage.meta.description);

  const { header, info, form, map } = contactPage;
  const formRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator === "undefined" ? true : navigator.onLine
  );
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      setMapError(false);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const formElement = formRef.current;

    if (!formElement) {
      return;
    }

    setShowSuccess(false);

    if (!formElement.checkValidity()) {
      formElement.classList.add("was-validated");
      return;
    }

    setShowSuccess(true);
    formElement.reset();
    formElement.classList.remove("was-validated");
  }

  const showMapFallback = !isOnline || mapError;

  return (
    <>
      <PageHeader {...header} />

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-up">
              <p className="text-uppercase fs-6 text-secondary mb-2">
                {info.kicker}
              </p>
              <h2 className="section-title mb-3">{info.title}</h2>
              <p>{info.description}</p>
              <ul className="contact-info-list fs-6">
                {info.items.map((item) => (
                  <li key={item.label}>
                    <Icon name={item.icon} size={22} />
                    <div>
                      <span className="text-dark d-block">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.external
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="col-lg-7"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-uppercase fs-6 text-secondary mb-2">
                {form.kicker}
              </p>
              <h2 className="section-title mb-3">{form.title}</h2>
              <div
                className={`alert alert-success${
                  showSuccess ? "" : " d-none"
                }`}
                id="form-success"
                role="alert"
                aria-live="polite"
              >
                {form.success}
              </div>
              <form
                className="row g-3 needs-validation"
                id="contact-form"
                method="post"
                noValidate
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="col-md-6">
                  <label htmlFor="nama" className="form-label fs-6">
                    {form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama"
                    name="nama"
                    placeholder={form.fields.name.placeholder}
                    required
                  />
                  <div className="invalid-feedback">
                    {form.fields.name.invalid}
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fs-6">
                    {form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder={form.fields.email.placeholder}
                    required
                  />
                  <div className="invalid-feedback">
                    {form.fields.email.invalid}
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="telepon" className="form-label fs-6">
                    {form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telepon"
                    name="telepon"
                    placeholder={form.fields.phone.placeholder}
                    required
                  />
                  <div className="invalid-feedback">
                    {form.fields.phone.invalid}
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="subjek" className="form-label fs-6">
                    {form.fields.subject.label}
                  </label>
                  <select
                    className="form-select"
                    id="subjek"
                    name="subjek"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      {form.fields.subject.placeholder}
                    </option>
                    {form.fields.subject.options.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">
                    {form.fields.subject.invalid}
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="pesan" className="form-label fs-6">
                    {form.fields.message.label}
                  </label>
                  <textarea
                    className="form-control"
                    id="pesan"
                    name="pesan"
                    rows="5"
                    placeholder={form.fields.message.placeholder}
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    {form.fields.message.invalid}
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg text-uppercase px-4"
                  >
                    {form.submitLabel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          {showMapFallback ? (
            <div className="map-fallback" role="status">
              <Icon name="location" size={34} />
              <h2 className="fs-5 text-uppercase mt-2 mb-1">
                {map.offlineTitle}
              </h2>
              <p className="mb-2">{map.offlineText}</p>
              <p className="mb-3">{site.address}</p>
              <a
                href={map.linkHref}
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {map.linkLabel}
              </a>
            </div>
          ) : (
            <div className="ratio ratio-21x9">
              <iframe
                src={site.mapEmbedUrl}
                title={map.title}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                onError={() => setMapError(true)}
              ></iframe>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
