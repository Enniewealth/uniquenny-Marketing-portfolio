import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Strategic",
    skills: ["Marketing Roadmap Ownership", "SEO Strategy", "Brand Narrative", "Content Strategy", "Audience Segmentation", "Lead Generation"],
  },
  {
    title: "Content & SEO",
    skills: ["Keyword Research", "Search-Intent Mapping", "On-Page Optimisation", "Long-Form Articles", "Tech Journalism", "Thought Leadership"],
  },
  {
    title: "Social Media",
    skills: ["Instagram", "LinkedIn", "Facebook", "X (Twitter)", "Community Management", "Growth Strategy"],
  },
  {
    title: "Tools & Analytics",
    skills: ["Google Analytics", "LinkedIn Analytics", "Canva", "Performance Reporting", "KPI Tracking", "Data-Driven Optimisation"],
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent font-body text-xs tracking-[0.25em] uppercase font-semibold">
            What I can help with
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Capabilities, not just tools
          </h2>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="font-body text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md font-body text-xs font-medium border border-border"
                  >
                    {skill}
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

export default SkillsSection;
