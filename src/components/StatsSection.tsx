import { motion } from "framer-motion";

const stats = [
  { value: "988%", label: "LinkedIn impression growth", source: "TechCrier" },
  { value: "100K", label: "X impressions · latest supplied snapshot", source: "Codevant" },
  { value: "2,081+", label: "Views on a top organic article", source: "Editorial work" },
  { value: "16.6K", label: "LinkedIn impressions · 20 Jul–25 Aug 2026", source: "Attention Factory" },
];

const StatsSection = () => (
  <section aria-label="Selected results" className="border-t border-stat-accent/10 bg-stat py-14 md:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 min-[360px]:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
        {stats.map((stat, i) => <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="border-l border-white/10 pl-4 text-left md:pl-6"><p className="mb-1 font-display text-3xl font-bold text-stat-accent md:text-4xl">{stat.value}</p><p className="max-w-[15rem] text-sm leading-5 text-stat-foreground/80">{stat.label}</p><p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stat-accent/70">{stat.source}</p></motion.div>)}
      </div>
    </div>
  </section>
);
export default StatsSection;
