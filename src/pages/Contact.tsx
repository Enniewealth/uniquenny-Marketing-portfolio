import ScrollProgress from "@/components/ScrollProgress";
import SiteHeader from "@/components/SiteHeader";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return <><ScrollProgress /><SiteHeader /><main className="flex min-h-screen items-center bg-hero pt-16"><div className="w-full"><ContactSection /></div></main></>;
}
