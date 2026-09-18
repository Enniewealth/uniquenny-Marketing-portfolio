import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.png";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const reducedMotion = useReducedMotion();
  const initial = reducedMotion ? false : "hidden";

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-hero pt-16 text-hero-foreground">
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent/20 blur-[100px] md:h-[32rem] md:w-[32rem]"
        animate={reducedMotion ? undefined : { scale: [1, 1.18, 1], x: [0, -35, 0], y: [0, 24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,.65fr)] lg:px-10 lg:py-20">
        <motion.div initial={initial} animate="visible" transition={{ staggerChildren: 0.11 }} className="relative z-10">
          <motion.div variants={reveal} transition={{ duration: 0.65 }} className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_hsl(var(--accent)/.13)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-hero-muted">Content strategy · Social media · Editorial</span>
          </motion.div>

          <h1 className="max-w-4xl text-[clamp(3.25rem,7.7vw,7.2rem)] leading-[0.88] tracking-[-0.055em]">
            <motion.span variants={reveal} transition={{ duration: 0.7 }} className="block">Clear thinking.</motion.span>
            <motion.span variants={reveal} transition={{ duration: 0.7 }} className="block text-accent">Content that</motion.span>
            <motion.span variants={reveal} transition={{ duration: 0.7 }} className="block italic text-hero-foreground">moves people.</motion.span>
          </h1>

          <motion.div variants={reveal} transition={{ duration: 0.7 }} className="mt-9 grid max-w-3xl gap-7 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-base leading-7 text-hero-muted md:text-lg">I&apos;m Eniolami Saheed. I help technology brands turn difficult ideas into useful stories, active communities and measurable growth.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/work" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground transition-transform duration-300 hover:-translate-y-1">Explore my work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
              <Link to="/contact" aria-label="Contact Eniolami" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-accent hover:text-accent"><ArrowDownRight className="h-5 w-5" /></Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-accent/50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-secondary">
            <img src={profileImg} alt="Eniolami Saheed" className="h-full w-full object-cover object-top saturate-[.85]" width={440} height={550} />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-hero/80 to-transparent" />
          </div>
          <motion.div animate={reducedMotion ? undefined : { y: [0, -9, 0], rotate: [-2, 1, -2] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-5 -left-5 rounded-2xl bg-background px-5 py-4 text-foreground shadow-xl sm:-left-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Selected result</p>
            <p className="mt-1 font-display text-3xl">100K <span className="font-body text-xs font-semibold">impressions</span></p>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 hidden -translate-x-5 text-[9rem] font-bold leading-none text-white/[0.025] xl:block">STRATEGY</div>
    </section>
  );
};

export default HeroSection;
