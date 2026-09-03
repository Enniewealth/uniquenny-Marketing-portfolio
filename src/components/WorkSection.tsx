import { Badge } from "@/components/ui/badge";
import { BarChart3, Eye } from "lucide-react";
import workMpesa from "@/assets/work-mpesa.png";
import workAi from "@/assets/work-ai.png";
import workMoniepoint from "@/assets/work-moniepoint.png";
import workUberBolt from "@/assets/work-uberbolt.png";
import workTaxstreem from "@/assets/work-taxstreem.png";
import workBlogList from "@/assets/work-blog-list.jpg";

type Work = {
  src: string;
  title: string;
  category: string;
  type: "Carousel" | "Instagram Post" | "Blog Writing";
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
];

const WorkSection = () => {
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3 text-accent">
            Content gallery
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
            Selected editorial work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Social content, carousels and editorial writing created for TechCrier&apos;s audience across Africa&apos;s technology landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <article
              key={work.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                <img
                  src={work.src}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {work.metric && (
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                    <Eye className="w-4 h-4" strokeWidth={2.5} />
                    <div className="leading-tight">
                      <div className="text-base font-bold font-display">{work.metric.value}</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-90">Views</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <Badge className="self-start mb-2 bg-accent text-accent-foreground hover:bg-accent">
                  {work.type}
                </Badge>
                <h3 className="text-primary-foreground font-semibold text-lg leading-snug">
                  {work.title}
                </h3>
                <p className="text-primary-foreground/80 text-xs uppercase tracking-wider mt-1">
                  {work.category}
                </p>
                {work.metric && (
                  <div className="mt-3 flex items-center gap-2 text-primary-foreground/95 text-sm">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span className="font-semibold">{work.metric.value}</span>
                    <span className="opacity-80">{work.metric.label}</span>
                  </div>
                )}
              </div>
              <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center justify-between mb-1">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
