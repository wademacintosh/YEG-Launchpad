import { useMemo, useState } from "react";
import { StyleCard, type StyleCategory, type StyleItem } from "./StyleCard";
import { PreviewModal } from "./PreviewModal";

const STYLES: StyleItem[] = [
  {
    title: "Obsidian Eco-Clean",
    tagline: "Minimal monochrome layout for waterless, eco-conscious detailing.",
    category: "Modern",
    variant: "obsidian-eco",
  },
  {
    title: "Night Vision Armor",
    tagline: "High-contrast dark UI built for ceramic coatings & PPF.",
    category: "Modern",
    variant: "night-vision",
  },
  {
    title: "The Vantage Collective",
    tagline: "Editorial luxury aesthetic for boutique exotic-car studios.",
    category: "Luxury",
    variant: "vantage",
  },
  {
    title: "Mud, Sweat & Gears",
    tagline: "Bold rugged branding for off-road & truck wash specialists.",
    category: "Rugged",
    variant: "mud-sweat-gears",
  },
  {
    title: "DetailFlow Pro",
    tagline: "Clean SaaS-style layout focused on online booking conversions.",
    category: "Modern",
    variant: "detailflow",
  },
  {
    title: "Aero Shine Labs",
    tagline: "Tech-lab vibe with motion accents for paint correction pros.",
    category: "Modern",
    variant: "aero-shine",
  },
  {
    title: "Route 66 Revive",
    tagline: "Retro Americana branding for classic & restoration shops.",
    category: "Rugged",
    variant: "route66",
  },
  {
    title: "Prism Auto-Works",
    tagline: "Vibrant gradient design for vinyl wraps & custom finishes.",
    category: "Luxury",
    variant: "prism",
  },
];

const FILTERS: Array<"All" | StyleCategory> = ["All", "Luxury", "Rugged", "Modern"];

export function StyleGallery() {
  const [active, setActive] = useState<"All" | StyleCategory>("All");
  const [previewItem, setPreviewItem] = useState<StyleItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const items = useMemo(
    () => (active === "All" ? STYLES : STYLES.filter((s) => s.category === active)),
    [active],
  );

  const handlePreview = (item: StyleItem) => {
    setPreviewItem(item);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Showroom
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              Browse the lineup
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Eight distinct directions. Each engineered to convert visitors into booked detailing jobs.
            </p>
          </div>

          {/* Filter toggle */}
          <div
            role="tablist"
            aria-label="Filter styles by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-border bg-muted p-1"
          >
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f)}
                  className={[
                    "rounded-md px-4 py-1.5 text-sm font-semibold transition-all",
                    isActive
                      ? "bg-secondary text-secondary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-secondary",
                  ].join(" ")}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StyleCard key={item.title} item={item} onPreview={handlePreview} />
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No styles match this filter yet.
          </p>
        )}
      </div>

      <PreviewModal
        item={previewItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
