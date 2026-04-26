import { Button } from "@/components/ui/button";

export type StyleCategory = "Luxury" | "Rugged" | "Modern";

export interface StyleItem {
  title: string;
  tagline: string;
  category: StyleCategory;
  palette: [string, string, string];
}

interface StyleCardProps {
  item: StyleItem;
}

export function StyleCard({ item }: StyleCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-accent/70 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/60 hover:shadow-[var(--shadow-card-hover)]">
      {/* Visual / palette preview */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 flex">
          <div className="flex-1 transition-transform duration-500 group-hover:scale-105" style={{ background: item.palette[0] }} />
          <div className="flex-1 transition-transform duration-500 delay-75 group-hover:scale-105" style={{ background: item.palette[1] }} />
          <div className="flex-1 transition-transform duration-500 delay-150 group-hover:scale-105" style={{ background: item.palette[2] }} />
        </div>
        {/* dark gradient + label */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary backdrop-blur">
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
            Theme Preview
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex-1">
          <h3 className="text-lg font-bold leading-tight tracking-tight text-secondary">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {item.tagline}
          </p>
        </div>

        <Button className="h-10 w-full rounded-md bg-primary font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          Preview Style
        </Button>
      </div>
    </article>
  );
}
