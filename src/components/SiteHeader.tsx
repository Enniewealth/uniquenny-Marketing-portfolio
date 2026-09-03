import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-hero/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="font-display text-xl font-bold text-hero-foreground" aria-label="Eniolami Saheed home">ES<span className="text-stat-accent">.</span></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-hero-muted transition-colors hover:text-white">{link.label}</a>)}
          <a href="/Eniolami-Saheed-CV.pdf" download className="inline-flex items-center gap-1.5 text-sm font-semibold text-stat-accent transition-colors hover:text-white"><Download size={15} /> CV</a>
          <a href="#contact" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Let&apos;s talk</a>
        </nav>
        <button type="button" className="text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && <nav className="border-t border-white/10 bg-hero px-6 py-5 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base font-medium text-hero-muted">{link.label}</a>)}<a href="/Eniolami-Saheed-CV.pdf" download onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-base font-semibold text-stat-accent"><Download size={17} /> Download CV</a><a href="#contact" onClick={() => setOpen(false)} className="mt-1 text-base font-semibold text-stat-accent">Contact me →</a></div></nav>}
    </header>
  );
};

export default SiteHeader;
