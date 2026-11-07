import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Icon from "../common/Icon.jsx";
import { homePage } from "../../data/home.js";

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const instanceRef = useRef(null);
  const { hero } = homePage;

  useEffect(() => {
    const element = swiperRef.current;

    if (!element) {
      return undefined;
    }

    const instance = new Swiper(element, {
      modules: [Autoplay, EffectFade, Navigation, Pagination],
      loop: true,
      speed: 900,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      pagination: {
        el: element.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: element.querySelector(".icon-arrow-right"),
        prevEl: element.querySelector(".icon-arrow-left"),
      },
    });

    instanceRef.current = instance;

    return () => {
      instance.destroy(true, true);
      instanceRef.current = null;
    };
  }, []);

  function handleKeyNavigation(direction, event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();

    if (!instanceRef.current) {
      return;
    }

    if (direction === "prev") {
      instanceRef.current.slidePrev();
    } else {
      instanceRef.current.slideNext();
    }
  }

  return (
    <section
      className="hero-swiper swiper"
      aria-label={hero.ariaLabel}
      ref={swiperRef}
    >
      <div className="swiper-wrapper">
        {hero.slides.map((slide) => (
          <div className="swiper-slide hero-slide" key={slide.title}>
            <img
              className="hero-slide-image"
              src={slide.image}
              alt=""
              aria-hidden="true"
            />
            <div className="container">
              <div className="hero-caption">
                <p className="hero-kicker">{slide.kicker}</p>
                <p className="hero-title">{slide.title}</p>
                <p>{slide.description}</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  {hero.actions.map((action) => (
                    <Link
                      key={action.label}
                      to={action.to}
                      className={action.className}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div
        className="icon-arrow icon-arrow-left"
        role="button"
        tabIndex="0"
        aria-label="Slide sebelumnya"
        onKeyDown={(event) => handleKeyNavigation("prev", event)}
      >
        <Icon name="arrow-left" size={50} />
      </div>
      <div
        className="icon-arrow icon-arrow-right"
        role="button"
        tabIndex="0"
        aria-label="Slide berikutnya"
        onKeyDown={(event) => handleKeyNavigation("next", event)}
      >
        <Icon name="arrow-right" size={50} />
      </div>
    </section>
  );
}
