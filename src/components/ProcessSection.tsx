import { BarChart3, CheckCircle2, FileCheck2, Search, ShieldCheck, Users } from "lucide-react";

const steps = [
  { icon: Users, number: "01", title: "Understand the brief", text: "Clarify the audience, business objective, required action, channel and definition of success before content production begins." },
  { icon: Search, number: "02", title: "Research before writing", text: "Check the subject, audience language, current conversation and supporting sources—especially when the topic is technical or reputation-sensitive." },
  { icon: ShieldCheck, number: "03", title: "Build a controlled plan", text: "Translate the brief into content pillars, formats, publishing priorities and clear responsibilities instead of posting disconnected ideas." },
  { icon: FileCheck2, number: "04", title: "Review for accuracy", text: "Check names, figures, claims, tone and brand alignment. Route sensitive or high-visibility content through the appropriate approval process." },
  { icon: CheckCircle2, number: "05", title: "Publish with context", text: "Adapt the message to each platform, keep the call to action clear and coordinate timing with campaigns, events and wider business activity." },
  { icon: BarChart3, number: "06", title: "Report and improve", text: "Track reach, engagement, audience actions and relevant business outcomes, then use the findings to improve the next publishing cycle." },
];

const ProcessSection = () => (
  <section id="process" className="bg-card pt-8 pb-16 text-foreground sm:pb-24">
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-stat-accent">How I work</p>
          <h2 className="mt-4 max-w-md font-display text-3xl font-bold leading-tight">From the brief to better content.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-hero-muted">My process is designed for teams that need good content without losing accuracy, accountability or brand consistency.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="bg-card p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-stat-accent" />
                  <span className="text-xs font-bold tracking-[0.18em] text-hero-muted/60">{step.number}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-hero-muted">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
