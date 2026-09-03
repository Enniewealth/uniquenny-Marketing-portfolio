import { ArrowUpRight } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="bg-hero py-24 text-hero-foreground md:py-32">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
      <div>
        <p className="eyebrow text-stat-accent">About me</p>
        <h2 className="mt-4 max-w-sm font-display text-4xl font-bold leading-tight md:text-5xl">I care about the thinking behind the post.</h2>
      </div>
      <div className="space-y-6 text-base leading-8 text-hero-muted md:text-lg">
        <p>I started by writing and creating content for growing brands, but I quickly became more interested in what makes content work—not only how it looks.</p>
        <p>Since then, I&apos;ve worked across tech media, AI communities and founder-led brands, building content plans, managing publishing and turning technical ideas into stories people can actually follow.</p>
        <p>I do my best work with technology and product-led brands that have something valuable to say but need a clearer, more consistent way to communicate it.</p>
        <a href="#contact" className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white hover:text-stat-accent">Tell me what you&apos;re building <ArrowUpRight size={17} /></a>
      </div>
    </div>
  </section>
);

export default AboutSection;
