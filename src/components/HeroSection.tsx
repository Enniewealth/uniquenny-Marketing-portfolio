import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const HeroSection = () => (
  <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-hero pt-16">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-8 inline-block rounded-full border border-stat-accent/40 px-4 py-1.5"><span className="text-xs font-medium uppercase tracking-[0.2em] text-stat-accent">Content Strategist · Social Media Manager</span></div>
          <h1 className="mb-7 max-w-3xl font-display text-5xl font-bold leading-[0.98] text-hero-foreground md:text-6xl lg:text-[4.6rem]">I turn complex ideas into content people <span className="italic font-normal text-stat-accent">understand and act on.</span></h1>
          <p className="mb-10 max-w-2xl text-base leading-7 text-hero-muted md:text-lg">I&apos;m Eniolami, a content strategist and social media manager helping tech brands and founders build clearer stories, stronger communities and content systems that can grow with them.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#case-studies" className="rounded-lg bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-110">See My Work</a>
            <a href="#contact" className="rounded-lg border border-hero-muted/40 px-7 py-3 text-sm font-semibold tracking-wide text-hero-foreground transition-colors hover:border-hero-foreground/60">Start a Conversation</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="h-[25rem] w-[19rem] overflow-hidden rounded-[2rem] border border-stat-accent/20 shadow-2xl shadow-stat-accent/10 md:h-[31rem] md:w-[23rem]"><img src={profileImg} alt="Eniolami Saheed" className="h-full w-full object-cover object-top grayscale" width={400} height={520} /></div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] border border-stat-accent/15" />
          </div>
        </motion.div>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(210 85% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 85% 50%) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
  </section>
);
export default HeroSection;
