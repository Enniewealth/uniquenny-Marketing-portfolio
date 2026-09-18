import SiteHeader from "@/components/SiteHeader";
import ClientWorkSection from "@/components/ClientWorkSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";

export default function Work() {
  return <><SiteHeader /><main className="overflow-x-hidden pt-16"><ClientWorkSection /><WorkSection /><ContactSection /></main></>;
}
