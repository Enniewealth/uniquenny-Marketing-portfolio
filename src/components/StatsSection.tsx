import { motion } from "framer-motion";

const stats = [
  { value: "988%", label: "LinkedIn impression growth", source: "TechCrier" },
  { value: "100K", label: "X impressions · latest supplied snapshot", source: "Codevant" },
  { value: "2,081+", label: "Views on a top organic article", source: "Editorial work" },
  { value: "16.6K", label: "LinkedIn impressions · 20 Jul–25 Aug 2026", source: "Attention Factory" },
];

const StatsSection = () => (
  <section aria-label="Selected results" className="border-b border-foreground/10 bg-accent py-12 text-accent-foreground md:py-14">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 min-[360px]:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
        {stats.map((stat, i) => <motion.div key={stat.label} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.09, duration: 0.55 }} className="border-l border-foreground/20 pl-4 text-left md:pl-6"><p className="mb-1 font-display text-4xl md:text-5xl">{stat.value}</p><p className="max-w-[15rem] text-sm font-medium leading-5 text-foreground/80">{stat.label}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">{stat.source}</p></motion.div>)}
      </div>
    </div>
  </section>
);
export default StatsSection;
