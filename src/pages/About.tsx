import ScrollProgress from "@/components/ScrollProgress";
import SiteHeader from "@/components/SiteHeader";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

export default function About() {
  return <><ScrollProgress /><SiteHeader /><main className="overflow-x-hidden pt-16"><AboutSection /><ExperienceSection /><ProcessSection /><ContactSection /></main></>;
}
