import { motion } from "framer-motion";

const services = [
  {
    title: "Content strategy",
    description: "Give your content a clear direction with audience research, brand messaging and a publishing plan aligned to your goals.",
    deliverables: ["Audience research", "Brand messaging", "Content calendars"],
  },
  {
    title: "Editorial & SEO writing",
    description: "Turn complex subjects into useful articles, thought leadership and search-focused content your audience can understand.",
    deliverables: ["SEO articles", "Thought leadership", "Tech journalism"],
  },
  {
    title: "Social media & community",
    description: "Build a consistent presence through platform-specific content, publishing and day-to-day community management.",
    deliverables: ["Social publishing", "Community management", "Platform strategy"],
  },
  {
    title: "Performance reporting",
    description: "Understand what is working with channel reporting, audience insights and practical recommendations for your next content cycle.",
    deliverables: ["Channel analytics", "KPI tracking", "Content recommendations"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-card py-20 text-foreground sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Services & process
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none text-foreground md:text-7xl">
            From idea to impact.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">From shaping the story to publishing and measuring it, I help technology brands and founders communicate with clarity.</p>
        </motion.div>

        <div className="grid border-l border-t border-border sm:grid-cols-2">
          {services.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group min-w-0 border-b border-r border-border p-7 transition-colors duration-500 hover:bg-secondary/50 md:p-9"
            >
              <div className="mb-8 flex items-start justify-between"><span className="text-xs font-bold tracking-[0.2em] text-accent">0{i + 1}</span><span className="h-2 w-2 rounded-full bg-accent transition-transform duration-500 group-hover:scale-[2]" /></div>
              <h3 className="mb-4 font-display text-3xl text-foreground md:text-4xl">{group.title}</h3>
              <p className="mb-6 text-sm leading-6 text-muted-foreground">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="rounded-full border border-border px-3 py-1.5 font-body text-xs font-medium text-foreground/75"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
