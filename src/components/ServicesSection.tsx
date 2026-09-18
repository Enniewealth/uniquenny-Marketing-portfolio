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
    <section id="services" className="bg-card pt-16 pb-10 sm:pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl"
        >
          <span className="text-accent font-body text-xs tracking-[0.25em] uppercase font-semibold">
            Services & process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            How I can help your brand
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">From shaping the story to publishing and measuring it, I help technology brands and founders communicate with clarity.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-0 rounded-xl border border-border bg-background/40 p-6"
            >
              <h3 className="font-body text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <p className="mb-5 text-sm leading-6 text-muted-foreground">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md font-body text-xs font-medium border border-border"
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
