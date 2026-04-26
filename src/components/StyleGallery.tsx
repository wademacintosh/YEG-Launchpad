import { useMemo, useState } from "react";
import { StyleCard, type StyleCategory, type StyleItem } from "./StyleCard";

const STYLES: StyleItem[] = [
  {
    title: "Obsidian Eco-Clean",
    tagline: "Minimal monochrome layout for waterless, eco-conscious detailing.",
    category: "Modern",
    palette: ["#0F0F0F", "#2C2C2C", "#7A8C7E"],
  },
  {
    title: "Night Vision Armor",
    tagline: "High-contrast dark UI built for ceramic coatings & PPF.",
    category: "Modern",
    palette: ["#0B1020", "#1E2A44", "#FF6600"],
  },
  {
    title: "The Vantage Collective",
    tagline: "Editorial luxury aesthetic for boutique exotic-car studios.",
    category: "Luxury",
    palette: ["#F4EFE6", "#1B1B1B", "#B89766"],
  },
  {
    title: "Mud, Sweat & Gears",
    tagline: "Bold rugged branding for off-road & truck wash specialists.",
    category: "Rugged",
    palette: ["#2B1D10", "#8B5A2B", "#D9A441"],
  },
  {
    title: "DetailFlow Pro",
    tagline: "Clean SaaS-style layout focused on online booking conversions.",
    category: "Modern",
    palette: ["#FFFFFF", "#2563EB", "#0F172A"],
  },
  {
    title: "Aero Shine Labs",
    tagline: "Tech-lab vibe with motion accents for paint correction pros.",
    category: "Modern",
    palette: ["#0D1117", "#22D3EE", "#E5E7EB"],
  },
  {
    title: "Route 66 Revive",
    tagline: "Retro Americana branding for classic & restoration shops.",
    category: "Rugged",
    palette: ["#7C1D1D", "#F2E2C4", "#1F1F1F"],
  },
  {
    title: "Prism Auto-Works",
    tagline: "Vibrant gradient design for vinyl wraps & custom finishes.",
    category: "Luxury",
    palette: ["#7C3AED", "#EC4899", "#F59E0B"],
  },
];

const FILTERS: Array<"All" | StyleCategory> = ["All", "Luxury", "Rugged", "Modern"];

export function StyleGallery() {
  const [active, setActive] = useState<"All" | StyleCategory>("All");

  const items = useMemo(
    () => (active === "All" ? STYLES : STYLES.filter((s) => s.category === active)),
    [active],
  );

  return (
    <section className="bg-background py-20 sm:py-24">
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
            <StyleCard key={item.title} item={item} />
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No styles match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
