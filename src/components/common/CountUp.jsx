import { useEffect, useRef, useState } from "react";

function formatNumber(value) {
  return value.toLocaleString("id-ID");
}

export default function CountUp({ value }) {
  const elementRef = useRef(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplay(formatNumber(value));
      return undefined;
    }

    let frame = null;

    function animate() {
      const duration = 1400;
      let start = null;

      function step(timestamp) {
        if (start === null) {
          start = timestamp;
        }

        const progress = Math.min((timestamp - start) / duration, 1);
        setDisplay(formatNumber(Math.floor(progress * value)));

        if (progress < 1) {
          frame = window.requestAnimationFrame(step);
        }
      }

      frame = window.requestAnimationFrame(step);
    }

    setDisplay(formatNumber(0));

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            observer.disconnect();
            animate();
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
        if (frame !== null) {
          window.cancelAnimationFrame(frame);
        }
      };
    }

    animate();

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [value]);

  return (
    <span ref={elementRef} data-count={value}>
      {display}
    </span>
  );
}
