import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-hero/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="font-display text-xl font-bold text-hero-foreground" aria-label="Eniolami Saheed home"><span className="sm:hidden">ES<span className="text-stat-accent">.</span></span><span className="hidden sm:inline">Eniolami Saheed<span className="text-stat-accent">.</span></span></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => <NavLink key={link.href} to={link.href} end={link.href === "/"} className={({ isActive }) => `text-sm font-medium transition-colors hover:text-white ${isActive ? "text-stat-accent" : "text-hero-muted"}`}>{link.label}</NavLink>)}
          <a href="/Eniolami-Saheed-CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-stat-accent transition-colors hover:text-white">View CV</a>
          <Link to="/contact" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Let&apos;s talk</Link>
        </nav>
        <button ref={toggleRef} type="button" className="flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-hero px-6 py-3 lg:hidden" aria-label="Mobile navigation"><div className="flex flex-col">{links.map((link) => <NavLink key={link.href} to={link.href} end={link.href === "/"} onClick={() => setOpen(false)} className={({ isActive }) => `flex min-h-11 items-center py-2 text-base font-medium ${isActive ? "text-stat-accent" : "text-hero-muted"}`}>{link.label}</NavLink>)}<a href="/Eniolami-Saheed-CV.pdf" download onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center gap-2 py-2 text-base font-semibold text-stat-accent"><Download size={17} /> Download CV</a></div></nav>}
    </header>
  );
};

export default SiteHeader;
