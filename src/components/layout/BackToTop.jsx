import { useEffect, useState } from "react";
import Icon from "../common/Icon.jsx";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <a
      href="#"
      className={`btn btn-dark back-to-top${isVisible ? " show" : ""}`}
      aria-label="Kembali ke atas"
      onClick={handleClick}
    >
      <Icon name="arrow-up" />
    </a>
  );
}
