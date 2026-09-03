import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import ClientWorkSection from "@/components/ClientWorkSection";

import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import SiteHeader from "@/components/SiteHeader";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <ClientWorkSection />
      <ProcessSection />
      <WorkSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
