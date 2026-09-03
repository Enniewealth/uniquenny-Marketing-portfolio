import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, FileText } from "lucide-react";
import codevantX80 from "@/assets/codevant-x-80k.jpeg";
import codevantLinkedIn from "@/assets/codevant-linkedin-11k.jpeg";
import codevantLinkedInMonthly from "@/assets/codevant-linkedin-3k.jpeg";
import attentionInsights from "@/assets/attention-linkedin-insights.jpeg";
import attentionGrowth from "@/assets/attention-audience-growth.jpeg";
import afCommunity from "@/assets/af-community-3.png";

type Proof = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

const ProofGrid = ({ items }: { items: Proof[] }) => (
  <div className="grid gap-4 md:grid-cols-3">
    {items.map((item) => (
      <figure key={item.alt} className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="aspect-[16/10] overflow-hidden bg-primary/5">
          <img src={item.src} alt={item.alt} loading="lazy" className={`h-full w-full object-top ${item.fit === "contain" ? "object-contain" : "object-cover"}`} />
        </div>
        <figcaption className="border-t border-border px-4 py-3 text-sm leading-5 text-muted-foreground">{item.caption}</figcaption>
      </figure>
    ))}
  </div>
);

const DetailGrid = ({ items }: { items: { label: string; text: string }[] }) => (
  <div className="mb-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item) => (
      <div key={item.label} className="bg-card p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{item.label}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
      </div>
    ))}
  </div>
);

const ClientWorkSection = () => (
  <section id="case-studies" className="border-t border-border bg-secondary/30 py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <div className="mb-16 max-w-3xl">
        <p className="eyebrow text-accent">Selected case studies</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">Strategy, execution and proof</h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">The work behind the numbers—how I approached content, managed distribution and turned ideas into measurable audience activity.</p>
      </div>

      <div className="space-y-20">
        <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">Founder brand</Badge>
              <h3 className="font-display text-3xl font-bold text-foreground">Codevant</h3>
              <p className="mt-2 font-semibold text-accent">Social Media Manager · X & LinkedIn</p>
            </div>
            <div>
              <p className="text-base leading-7 text-muted-foreground">I turned the founder&apos;s Shopify and technical expertise into platform-native content, then used performance reporting to refine topics, formats and distribution across X and LinkedIn.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {["80.8K X impressions · +257%", "11,628 LinkedIn impressions · +88.8%", "535 reactions · 52 comments"].map((metric) => <span key={metric} className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold text-foreground">{metric}</span>)}
              </div>
            </div>
          </div>
          <DetailGrid items={[
            { label: "Challenge", text: "Turn deep Shopify knowledge into consistent content that merchants, developers and ecommerce operators could follow." },
            { label: "Strategy", text: "Build around Shopify product updates, technical leadership and practical industry commentary instead of disconnected posts." },
            { label: "Execution", text: "Adapt each idea for X and LinkedIn, maintain a publishing rhythm and use reporting to adjust topics and formats." },
            { label: "Business value", text: "Expanded founder visibility, increased profile discovery and created a clearer public record of Codevant's expertise." },
          ]} />
          <ProofGrid items={[
            { src: codevantX80, alt: "Codevant X analytics showing 80.8 thousand impressions", caption: "X · 17–30 August 2026: 80.8K impressions, up 257%." },
            { src: codevantLinkedIn, alt: "Codevant LinkedIn analytics showing 11,628 impressions", caption: "LinkedIn · 3 June–31 August 2026: 11,628 impressions, 535 reactions and 52 comments." },
            { src: codevantLinkedInMonthly, alt: "Codevant LinkedIn monthly analytics showing 3,496 impressions", caption: "LinkedIn · 2–31 August 2026: 3,496 impressions, up 43.3%." },
          ]} />
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">AI brand & community</Badge>
              <h3 className="font-display text-3xl font-bold text-foreground">Attention Factory</h3>
              <p className="mt-2 font-semibold text-accent">Content Strategist · Community & Social Media Manager</p>
            </div>
            <div>
              <p className="text-base leading-7 text-muted-foreground">I led content strategy and social media management across AI education, products and conversion campaigns, while managing the community those campaigns fed into.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {["16.6K LinkedIn impressions", "43 net new followers", "99 net community growth · July"].map((metric) => <span key={metric} className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold text-foreground">{metric}</span>)}
              </div>
            </div>
          </div>
          <DetailGrid items={[
            { label: "Challenge", text: "Connect frequent AI education and product content to an audience spread across social channels and large WhatsApp communities." },
            { label: "Strategy", text: "Organise content around education, consulting, products and conversion campaigns, with each post serving a clear role." },
            { label: "Execution", text: "Planned the calendar, coordinated review and publishing, mobilised members for sessions, and built a daily community tracker." },
            { label: "Business value", text: "Recorded 124 joins and 25 exits—99 net growth—plus 76 reactions, 22 posts and 9 questions across recorded July days." },
          ]} />
          <ProofGrid items={[
            { src: attentionInsights, alt: "Attention Factory LinkedIn performance summary", caption: "LinkedIn · 20 July–25 August 2026: 16.6K impressions, 270 reactions and 49 comments." },
            { src: attentionGrowth, alt: "Attention Factory audience growth chart", caption: "LinkedIn · 3 August–1 September 2026: 43 net new followers." },
            { src: afCommunity, alt: "Attention Factory live community teaching session", caption: "Community education and live-session engagement across the AI groups." },
          ]} />
          <p className="mt-4 text-xs leading-5 text-muted-foreground">Community figures are taken from the daily tracker for recorded activity between 6 and 22 July 2026. Blank dates are excluded rather than treated as zero activity. The LinkedIn follower report runs to 1 September, one day after my role ended on 31 August 2026.</p>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">Consumer copywriting</Badge>
              <h3 className="font-display text-3xl font-bold text-foreground">Grouby</h3>
              <p className="mt-2 font-semibold text-accent">Creative Content Writer & Social Media Strategist</p>
            </div>
            <p className="text-base leading-7 text-muted-foreground">I wrote everyday consumer content for a grocery and food-delivery audience, connecting convenience, affordability and familiar Nigerian meals to clear purchase actions. The samples below have been edited for portfolio presentation.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Convenience-led brand copy", excerpt: "Your kitchen essentials should not require three different market trips. From fresh produce to frozen food and everyday staples, Grouby helps you shop from home without stretching your budget." },
              { title: "Weekend food ideas", excerpt: "Still deciding what to cook this weekend? Start with akara and pap, try yam porridge for lunch, or keep dinner simple with beans and plantain. Familiar meals, less time spent overthinking the menu." },
              { title: "Seasonal sales copy", excerpt: "You do not have to cross Lagos in traffic to find the right ram. Choose your preferred size from home, order within your budget and have it delivered to your doorstep." },
            ].map((sample) => <div key={sample.title} className="rounded-xl border border-border bg-card p-6 shadow-sm"><FileText className="mb-5 h-5 w-5 text-accent" /><h4 className="font-display text-lg font-bold text-foreground">{sample.title}</h4><p className="mt-3 text-sm leading-6 text-muted-foreground">{sample.excerpt}</p></div>)}
          </div>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-hero p-7 text-hero-foreground md:p-10">
          <p className="eyebrow text-stat-accent">Independent writing sample</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-end">
            <h3 className="font-display text-3xl font-bold">Making AI understandable without losing the reader.</h3>
            <div>
              <p className="text-base leading-7 text-hero-muted">Artificial intelligence is a field of computer science focused on building systems that can perform tasks commonly associated with human intelligence—such as recognising patterns, understanding language, making predictions and learning from data. The aim is not to create a human replica; it is to build tools that can solve specific problems using data and computational methods.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-stat-accent">Thought-leadership writing <ArrowUpRight size={16} /></span>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  </section>
);

export default ClientWorkSection;
