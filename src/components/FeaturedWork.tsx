import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { index: "01", client: "Codevant", role: "Founder-led social strategy", result: "100K X impressions", detail: "Positioning technical Shopify expertise for X and LinkedIn." },
  { index: "02", client: "Attention Factory", role: "Content & community systems", result: "16.6K LinkedIn impressions", detail: "Strategy, calendars, campaigns and community reporting for an AI brand." },
  { index: "03", client: "TechCrier", role: "Editorial & social content", result: "988% impression growth", detail: "Technology reporting, social content and organic audience growth." },
];

export default function FeaturedWork() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="bg-background py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-8 border-b border-foreground/20 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow text-accent">Selected work</p><h2 className="mt-4 max-w-3xl font-display text-5xl leading-[.98] md:text-7xl">Good content should leave <span className="italic text-accent">evidence.</span></h2></div>
          <Link to="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">View all work <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div>{projects.map((project, index) => <motion.article key={project.client} initial={reducedMotion ? false : { opacity: 0, x: index % 2 ? 28 : -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65, delay: index * 0.08 }} className="group relative grid gap-4 overflow-hidden border-b border-foreground/20 py-9 md:grid-cols-[4rem_1fr_1fr] md:items-center md:gap-8"><span className="relative z-10 text-xs font-bold tracking-[0.2em] text-muted-foreground">{project.index}</span><div className="relative z-10"><h3 className="font-display text-4xl transition-transform duration-300 group-hover:translate-x-2">{project.client}</h3><p className="mt-1 text-sm font-bold text-accent">{project.role}</p></div><div className="relative z-10 md:text-right"><p className="font-display text-3xl">{project.result}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{project.detail}</p></div><span aria-hidden="true" className="absolute inset-y-0 left-0 w-0 bg-secondary/70 transition-all duration-500 ease-out group-hover:w-full" /></motion.article>)}</div>
      </div>
    </section>
  );
}
