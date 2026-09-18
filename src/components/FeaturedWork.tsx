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
    <section className="bg-secondary/30 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow text-accent">Selected work</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">Strategy that ends in visible results.</h2></div>
          <Link to="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">View all work <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div>{projects.map((project, index) => <motion.article key={project.client} initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group grid gap-4 border-b border-border py-8 md:grid-cols-[4rem_1fr_1fr] md:items-center md:gap-8"><span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">{project.index}</span><div><h3 className="font-display text-3xl transition-colors group-hover:text-accent">{project.client}</h3><p className="mt-1 text-sm font-semibold text-accent">{project.role}</p></div><div className="md:text-right"><p className="font-display text-2xl">{project.result}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{project.detail}</p></div></motion.article>)}</div>
      </div>
    </section>
  );
}
