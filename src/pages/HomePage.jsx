import usePageMeta from "../hooks/usePageMeta.js";
import { homePage } from "../data/home.js";
import HeroSlider from "../components/home/HeroSlider.jsx";
import WelcomeSection from "../components/home/WelcomeSection.jsx";
import StatsSection from "../components/home/StatsSection.jsx";
import ProgramsSection from "../components/home/ProgramsSection.jsx";
import ExtracurricularPreview from "../components/home/ExtracurricularPreview.jsx";
import NewsPreview from "../components/home/NewsPreview.jsx";
import GalleryPreview from "../components/home/GalleryPreview.jsx";
import PartnersSection from "../components/home/PartnersSection.jsx";
import CTABand from "../components/common/CTABand.jsx";

export default function HomePage() {
  usePageMeta(homePage.meta.title, homePage.meta.description);

  return (
    <>
      <h1 className="visually-hidden">{homePage.hiddenTitle}</h1>
      <HeroSlider />
      <WelcomeSection />
      <StatsSection />
      <ProgramsSection />
      <ExtracurricularPreview />
      <NewsPreview />
      <GalleryPreview />
      <PartnersSection />
      <CTABand {...homePage.cta} />
    </>
  );
}
