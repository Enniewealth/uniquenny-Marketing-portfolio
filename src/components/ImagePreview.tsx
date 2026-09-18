import { useState } from "react";
import { Expand, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ImagePreviewProps = {
  src: string;
  title: string;
  caption?: string;
  aspect?: "square" | "wide";
};

export default function ImagePreview({ src, title, caption, aspect = "wide" }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" aria-label={`View ${title}`} className={`group relative block w-full overflow-hidden bg-primary/5 text-left ${aspect === "square" ? "aspect-square" : "aspect-[16/10]"}`}>
          <img src={src} alt={title} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-hero/95 px-3 py-2 text-xs font-semibold text-hero-foreground shadow-lg">
            <Expand size={14} aria-hidden="true" /> View image
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl flex-col overflow-y-auto rounded-xl p-4 sm:p-6">
        <DialogTitle className="pr-8 text-left leading-6">{title}</DialogTitle>
        <DialogDescription className="text-left">{caption || "View the complete work sample below."}</DialogDescription>
        <div className="min-h-0 rounded-lg bg-white">
          {open && <img src={src} alt={title} className="max-h-[60dvh] w-full object-contain" />}
        </div>
        <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-semibold text-accent">
          Open full-size image <ExternalLink size={16} aria-hidden="true" />
        </a>
      </DialogContent>
    </Dialog>
  );
}
