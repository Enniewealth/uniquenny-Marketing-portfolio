import { motion } from "framer-motion";

const experiences = [
  {
    role: "Content Strategist, Community Manager & Social Media Manager",
    company: "Attention Factory",
    location: "Remote",
    period: "2026 – 31 Aug 2026",
    highlights: [
      "Authored a 3-week production-ready content calendar running 3 posts per day across consulting, AI education, and conversion pillars",
      "Built the thematic architecture pairing Attention Factory spotlights with AI tool education (Make.com, advanced prompting, CrewAI) and conversion events",
      "Built a daily community tracker; July records show 124 joins, 25 exits, 76 reactions, 22 posts and 9 questions",
      "Turned webinar and bootcamp launches into structured promotional sequences from pain-point trigger through registration push",
    ],
  },
  {
    role: "Social Media Manager — X & LinkedIn",
    company: "Codevant",
    location: "Lagos, Nigeria · Remote",
    period: "2026 – Present",
    highlights: [
      "Grew X performance to 80.8K impressions from 17–30 August 2026, a 257% increase",
      "Generated 11,628 LinkedIn impressions from 3 June–31 August 2026, alongside 535 reactions and 52 comments",
      "Positioned founder expertise in Shopify and technical leadership into consistent, platform-native narratives",
      "Ran ongoing performance reporting to feed insight back into the content roadmap",
    ],
  },
  {

    role: "Content Strategy Lead & Social Media Manager",
    company: "TechCrier",
    location: "Lagos, Nigeria · Remote",
    period: "Dec 2025 – Mar 2026",
    highlights: [
      "Owned the marketing roadmap end-to-end across AI, Fintech, Startups, Innovation, and Telecoms verticals",
      "Engineered a LinkedIn growth strategy delivering 988% month-over-month impressions surge",
      "Built a content funnel generating 120 qualified leads across the audience journey",
      "Developed SEO content strategy contributing to 2,081+ view performance on top articles",
      "Directed brand storytelling across Instagram, X, and Facebook with consistent narrative identity",
    ],
  },
  {
    role: "Social Media Strategist",
    company: "720Degree Hub",
    location: "Lagos, Nigeria · Onsite",
    period: "Sept 2024 – Jan 2025",
    highlights: [
      "Designed Facebook campaign frameworks and content calendars aligned to business objectives",
      "Translated emerging trend signals into timely, audience-relevant content",
      "Advised cross-functional stakeholders on brand messaging alignment",
      "Applied data-driven recommendations to optimise reach, engagement, and conversion",
    ],
  },
  {
    role: "Creative Content Writer & Social Media Strategist",
    company: "Grouby",
    location: "Lagos, Nigeria · Remote",
    period: "Dec 2023 – Oct 2024",
    highlights: [
      "Grew brand awareness by 25% through multi-platform social strategy across Instagram and LinkedIn",
      "Drove 40% audience growth through trend analysis and audience insight",
      "Improved conversion rate by 18% through strategic CTAs and audience segmentation",
      "Redesigned content production workflow achieving 30% efficiency gain",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-hero pt-8 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 border-t border-border pt-10"
        >
          <span className="text-accent font-body text-xs tracking-[0.25em] uppercase font-semibold">
            Career
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Professional Experience
          </h2>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-7 border-l-2 border-accent/20"
            >
              <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-accent" />

              <div className="mb-3 flex flex-col gap-2 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-body text-sm font-semibold">{exp.company}</p>
                </div>
                <p className="text-muted-foreground font-body text-xs leading-5 lg:max-w-[15rem] lg:shrink-0 lg:text-right">
                  {exp.period} · {exp.location}
                </p>
              </div>

              <ul className="space-y-2 mt-3">
                {exp.highlights.slice(0, 3).map((h, j) => (
                  <li key={j} className="text-muted-foreground font-body text-sm leading-relaxed flex gap-2.5">
                    <span className="text-accent/60 mt-[3px] shrink-0 text-[10px]">●</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
