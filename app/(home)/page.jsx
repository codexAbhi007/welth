import HeroSection from "@/components/Hero";
import SectionComponents from "@/components/section-components";
import CTASection from "@/modules/sections/cta-section";

const Home = () => {
  return (
    <>
      <div className="mt-40 container mx-auto">
        <HeroSection />
        <SectionComponents />
      </div>
      <CTASection/>
    </>
  );
};
export default Home;
