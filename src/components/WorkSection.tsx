import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import ImagePreview from "@/components/ImagePreview";
import workMpesa from "@/assets/work-mpesa.png";
import workAi from "@/assets/work-ai.png";
import workMoniepoint from "@/assets/work-moniepoint.png";
import workUberBolt from "@/assets/work-uberbolt.png";
import workTaxstreem from "@/assets/work-taxstreem.png";
import workBlogList from "@/assets/work-blog-list.jpg";
import techcrierGrowth from "@/assets/techcrier-linkedin-growth.jpeg";

type Work = {
  src: string;
  title: string;
  category: string;
  type: "Carousel" | "Instagram Post" | "Blog Writing" | "Analytics";
  metric?: { value: string; label: string };
};

const works: Work[] = [
  {
    src: workMpesa,
    title: "M-Pesa Ethiopia Expands Into Tax Payments",
    category: "Telecoms",
    type: "Instagram Post",
  },
  {
    src: workAi,
    title: "AI Is No Longer Science Fiction — It's Infrastructure",
    category: "AI Tech",
    type: "Carousel",
  },
  {
    src: workMoniepoint,
    title: "Moniepoint Acquires Orda, Rebrands as Moniebook",
    category: "Fintech",
    type: "Instagram Post",
  },
  {
    src: workUberBolt,
    title: "Uber & Bolt Drivers in Benin Announce Strike",
    category: "Logistics",
    type: "Carousel",
  },
  {
    src: workTaxstreem,
    title: "TaxStreem Launches Tax Compliance Automation",
    category: "Creator Tech",
    type: "Instagram Post",
  },
  {
    src: workBlogList,
    title: "Published Articles on TechCrier Blog",
    category: "Editorial",
    type: "Blog Writing",
    metric: { value: "2.8K+", label: "Reader Views Generated" },
  },
  {
    src: techcrierGrowth,
    title: "TechCrier LinkedIn organic impression growth",
    category: "Performance",
    type: "Analytics",
    metric: { value: "988%", label: "Growth over the previous month" },
  },
];

const articles = [
  { title: "How to find and quietly unlink phone numbers tied to your NIN", href: "https://www.techcrier.com/2025/12/how-to-find-and-quietly-unlink-phone.html", category: "Telecoms" },
  { title: "10 African startups that folded in 2025", href: "https://www.techcrier.com/2025/12/10-african-startups-that-folded-in-2025.html", category: "Startups" },
  { title: "Bolaji Yusuf’s Mission to Build World-Class Tech With WebuildX", href: "https://www.techcrier.com/2025/12/bolaji-yusufs-mission-to-build-world.html", category: "Founder profile" },
];

const WorkSection = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section id="work" className="bg-secondary/30 py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl border-t border-border pt-12 md:mb-20">
          <p className="eyebrow mb-3 text-accent">
            TechCrier · Content gallery
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Selected editorial work
          </h2>
          <p className="text-muted-foreground text-sm leading-6 md:text-base">
            Social content, carousels and editorial writing created for TechCrier&apos;s audience across Africa&apos;s technology landscape.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 lg:gap-8">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reducedMotion ? undefined : { y: -9, rotate: index % 2 ? 0.4 : -0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className="work-gallery-card w-[86%] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-2xl sm:w-auto"
            >
              <ImagePreview src={work.src} title={work.title} caption={`TechCrier · ${work.type} · ${work.category}`} aspect="square" />
              <div className="p-5">
                <div className="mb-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                    {work.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {work.category}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground line-clamp-2">
                  {work.title}
                </h3>
                {work.metric && (
                  <p className="mt-2 text-xs text-accent font-semibold flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5" />
                    {work.metric.value} {work.metric.label}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 md:mt-28">
          <h3 className="font-display text-2xl font-bold">Read the published articles</h3>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {articles.map(article => <a key={article.href} href={article.href} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl"><span className="text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</span><span className="my-4 font-display text-xl font-bold leading-7">{article.title}</span><span className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">Read on TechCrier <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></span></a>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
