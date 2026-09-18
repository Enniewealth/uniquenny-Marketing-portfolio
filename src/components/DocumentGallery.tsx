import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Download, FileText, Sheet } from "lucide-react";
type DocumentItem = {
  title: string;
  description: string;
  preview: string;
  download: string;
  format: string;
  category?: string;
};

type DocumentGalleryProps = {
  documents: readonly DocumentItem[];
  description: string;
};

export default function DocumentGallery({ documents, description }: DocumentGalleryProps) {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-10 border-t border-border pt-8">
      <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} className="group flex min-h-12 w-full items-center justify-between gap-6 text-left">
        <span>
          <span className="block font-display text-2xl font-bold">Explore the work</span>
          <span className="mt-1 block text-sm text-muted-foreground">{documents.length} supporting documents · Browser preview and original file</span>
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-colors group-hover:border-accent">
          <ChevronDown size={18} aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && <motion.div initial={reducedMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reducedMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
      <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
      <div className="mt-5 divide-y divide-border border-y border-border">
        {documents.map((document, index) => (
          <motion.article key={document.preview} initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="grid min-w-0 gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2 text-accent">
              {document.format === "XLSX" ? <Sheet size={20} aria-hidden="true" /> : <FileText size={20} aria-hidden="true" />}
              <span className="text-xs font-semibold uppercase tracking-wider">{document.category || (document.format === "XLSX" ? "Community reporting" : "Strategy & planning")}</span>
            </div>
            <h5 className="font-display text-lg font-bold leading-6"><a href={document.preview} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{document.title}</a></h5>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{document.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:justify-end">
              <a href={document.preview} target="_blank" rel="noopener noreferrer" aria-label={`View ${document.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform motion-safe:hover:-translate-y-0.5">View document <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href={document.download} download aria-label={`Download ${document.title}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><Download size={15} aria-hidden="true" /> {document.format}</a>
            </div>
          </motion.article>
        ))}
      </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}
