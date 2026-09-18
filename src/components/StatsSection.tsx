const stats = [
  { value: "988%", label: "LinkedIn impression growth", source: "TechCrier" },
  { value: "100K", label: "X impressions · latest supplied snapshot", source: "Codevant" },
  { value: "2,081+", label: "Views on a top organic article", source: "Editorial work" },
  { value: "16.6K", label: "LinkedIn impressions · 20 Jul–25 Aug 2026", source: "Attention Factory" },
];

const StatSet = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="flex shrink-0" aria-hidden={hidden || undefined}>
    {stats.map((stat) => (
      <div key={stat.label} className="w-[17rem] shrink-0 border-l border-white/10 px-7 py-2 sm:w-[20rem] sm:px-10 lg:w-[23rem]">
        <p className="font-display text-4xl text-stat-accent md:text-5xl">{stat.value}</p>
        <p className="mt-1 text-sm font-medium leading-5 text-stat-foreground/80">{stat.label}</p>
        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stat-accent/65">{stat.source}</p>
      </div>
    ))}
  </div>
);

const StatsSection = () => (
  <section aria-label="Selected results" className="overflow-hidden border-y border-white/10 bg-stat py-12 text-stat-foreground md:py-16">
    <div className="metrics-marquee flex w-max will-change-transform">
      <StatSet />
      <StatSet hidden />
    </div>
  </section>
);

export default StatsSection;
