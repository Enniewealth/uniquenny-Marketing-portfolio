import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-accent py-20 text-accent-foreground sm:py-28">
      <div className="container mx-auto max-w-5xl px-6 text-center lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em]">
            Connect
          </span>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[.95] md:text-7xl">
            Have something valuable to say but need a clearer way to say it?
          </h2>
          <div className="mx-auto my-8 h-px w-16 bg-foreground/40" />
          <p className="mx-auto mb-12 max-w-2xl font-body text-base leading-relaxed text-foreground/75">
            Tell me about your brand, audience and what you&apos;re trying to change. I&apos;ll tell you where content can help.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:eniolamiseyi62@gmail.com"
              className="flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-body text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 sm:w-auto sm:px-7"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="min-w-0 [overflow-wrap:anywhere]">eniolamiseyi62@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/eniolami-saheed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 py-3 font-body text-sm font-bold transition-colors hover:bg-foreground hover:text-background sm:w-auto"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/uniquEnny20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit @uniquEnny20 on X (opens in a new tab)"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 py-3 font-body text-sm font-bold transition-colors hover:bg-foreground hover:text-background sm:w-auto"
            >
              X (Twitter) <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/Eniolami-Saheed-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 py-3 font-body text-sm font-bold transition-colors hover:bg-foreground hover:text-background sm:w-auto"
            >
              View CV <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/Eniolami-Saheed-CV.pdf"
              download
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 py-3 font-body text-sm font-bold transition-colors hover:bg-foreground hover:text-background sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="mt-16 border-t border-foreground/20 pt-6">
            <p className="font-body text-xs text-foreground/60">
              © {new Date().getFullYear()} Eniolami Saheed · Lagos, Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
