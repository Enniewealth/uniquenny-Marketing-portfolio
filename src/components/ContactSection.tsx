import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-hero py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-stat-accent font-body text-xs tracking-[0.25em] uppercase font-semibold">
            Connect
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mt-2 mb-4">
            Have something valuable to say but need a clearer way to say it?
          </h2>
          <div className="w-12 h-0.5 bg-stat-accent mx-auto mb-8" />
          <p className="text-hero-muted font-body text-base mb-12 leading-relaxed">
            Tell me about your brand, audience and what you&apos;re trying to change. I&apos;ll tell you where content can help.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:eniolamiseyi62@gmail.com"
              className="flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-body text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-6"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="min-w-0 [overflow-wrap:anywhere]">eniolamiseyi62@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/eniolami-saheed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-body text-sm font-semibold text-hero-foreground transition-colors hover:border-stat-accent hover:text-stat-accent sm:w-auto"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/uniquEnny20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit @uniquEnny20 on X (opens in a new tab)"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-body text-sm font-semibold text-hero-foreground transition-colors hover:border-stat-accent hover:text-stat-accent sm:w-auto"
            >
              X (Twitter) <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/Eniolami-Saheed-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-body text-sm font-semibold text-hero-foreground transition-colors hover:border-stat-accent hover:text-stat-accent sm:w-auto"
            >
              View CV <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/Eniolami-Saheed-CV.pdf"
              download
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-stat-accent/60 px-6 py-3 font-body text-sm font-semibold text-stat-accent transition-colors hover:bg-stat-accent hover:text-hero sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="mt-16 pt-6 border-t border-hero-muted/15">
            <p className="text-hero-muted/60 font-body text-xs">
              © {new Date().getFullYear()} Eniolami Saheed · Lagos, Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
