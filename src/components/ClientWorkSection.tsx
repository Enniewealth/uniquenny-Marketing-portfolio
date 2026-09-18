import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, FileText } from "lucide-react";
import codevantX80 from "@/assets/codevant-x-80k.jpeg";
import codevantLinkedIn from "@/assets/codevant-linkedin-11k.jpeg";
import codevantLinkedInMonthly from "@/assets/codevant-linkedin-3k.jpeg";
import attentionInsights from "@/assets/attention-linkedin-insights.jpeg";
import attentionGrowth from "@/assets/attention-audience-growth.jpeg";
import afCommunity from "@/assets/af-community-3.png";
import codevantX100 from "@/assets/codevant-x-100k.jpeg";
import codevantLinkedInWeekly from "@/assets/daniel-linkedin.jpg";
import ImagePreview from "@/components/ImagePreview";
import DocumentGallery from "@/components/DocumentGallery";
import { attentionFactoryDocuments } from "@/data/portfolioDocuments";
import { groubyDocuments } from "@/data/groubyDocuments";

type Proof = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

const ProofGrid = ({ items }: { items: Proof[] }) => (
  <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
    {items.map((item, index) => (
      <motion.figure key={item.alt} initial={{ opacity: 0, y: 28, rotate: index % 2 ? 1 : -1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} whileHover={{ y: -8 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.07 }} className="w-[86%] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-2xl sm:w-[62%] md:w-auto">
        <ImagePreview src={item.src} title={item.alt} caption={item.caption} />
        <figcaption className="border-t border-border px-4 py-3 text-sm leading-5 text-muted-foreground">{item.caption}</figcaption>
      </motion.figure>
    ))}
  </div>
);

const DetailGrid = ({ items }: { items: { label: string; text: string }[] }) => (
  <div className="mb-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, index) => (
      <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="bg-card p-6 transition-colors duration-300 hover:bg-secondary/70 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{item.label}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
      </motion.div>
    ))}
  </div>
);

const ClientWorkSection = () => (
  <section id="case-studies" className="border-t border-border bg-secondary/30 py-20 sm:py-28 md:py-36">
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <div className="mb-20 max-w-3xl md:mb-28">
        <p className="eyebrow text-accent">Selected work · Case studies</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">Strategy, execution and proof</h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">The work behind the numbers—how I approached content, managed distribution and turned ideas into measurable audience activity.</p>
      </div>

      <div className="space-y-28 md:space-y-40">
        <motion.article initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.75 }}>
          <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">Founder brand</Badge>
              <h3 className="font-display text-3xl font-bold text-foreground">Codevant</h3>
              <p className="mt-2 font-semibold text-accent">Social Media Manager · X & LinkedIn</p>
            </div>
            <div>
              <p className="text-base leading-7 text-muted-foreground">I turned the founder&apos;s Shopify and technical expertise into platform-native content, then used performance reporting to refine topics, formats and distribution across X and LinkedIn.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {["100K X impressions · +632%", "11,628 LinkedIn impressions · +88.8%", "535 reactions · 52 comments"].map((metric) => <span key={metric} className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold text-foreground">{metric}</span>)}
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
            { src: codevantX100, alt: "Codevant X analytics showing 100K impressions", caption: "X analytics snapshot: 100K impressions (+632%) and 313 engagements. Reporting period not shown in the screenshot." },
            { src: codevantX80, alt: "Codevant X analytics showing 80.8 thousand impressions", caption: "X · 17–30 August 2026: 80.8K impressions, up 257%." },
            { src: codevantLinkedIn, alt: "Codevant LinkedIn analytics showing 11,628 impressions", caption: "LinkedIn · 3 June–31 August 2026: 11,628 impressions, 535 reactions and 52 comments." },
            { src: codevantLinkedInMonthly, alt: "Codevant LinkedIn monthly analytics showing 3,496 impressions", caption: "LinkedIn · 2–31 August 2026: 3,496 impressions, up 43.3%." },
            { src: codevantLinkedInWeekly, alt: "Codevant LinkedIn analytics showing 2,056 impressions", caption: "LinkedIn · 24–30 July: 2,056 impressions, up 324% over the previous seven days." },
          ]} />
        </motion.article>

        <motion.article id="attention-factory" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.75 }}>
          <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
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
          <DocumentGallery documents={attentionFactoryDocuments} description="Read the strategy, planning and community documents behind the work. Every sample opens in your browser." />
        </motion.article>

        <motion.article id="grouby" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.75 }}>
          <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
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
            ].map((sample, index) => <motion.div key={sample.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -7 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.09 }} className="rounded-xl border border-border bg-card p-7 shadow-sm"><FileText className="mb-6 h-5 w-5 text-accent" /><h4 className="font-display text-xl font-bold text-foreground">{sample.title}</h4><p className="mt-4 text-sm leading-7 text-muted-foreground">{sample.excerpt}</p></motion.div>)}
          </div>
          <DocumentGallery documents={groubyDocuments} description="Open each original Grouby copywriting sample in a clean browser reading view, or download the source Word document." />
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
