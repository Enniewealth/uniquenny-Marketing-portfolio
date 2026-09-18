import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import SiteHeader from "@/components/SiteHeader";
import FeaturedWork from "@/components/FeaturedWork";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <FeaturedWork />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
