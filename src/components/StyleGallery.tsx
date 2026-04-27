import { useState } from "react";
import { StyleCard, type StyleItem, type StyleCategory } from "./StyleCard";

interface StyleGalleryProps {
  onPreview: (item: StyleItem) => void;
}

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
    category: "Luxury",
    variant: "route66",
  },
  {
    title: "Prism Auto-Works",
    tagline: "Vibrant gradient design for vinyl wraps & custom finishes.",
    category: "Modern",
    variant: "prism",
  },
];

const CATEGORIES: (StyleCategory | "All")[] = ["All", "Luxury", "Rugged", "Modern"];

export function StyleGallery({ onPreview }: StyleGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<StyleCategory | "All">("All");

  const filteredStyles = STYLES.filter(
    (style) => activeCategory === "All" || style.category === activeCategory
  );

  return (
    <section className="px-6 max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-transparent text-muted-foreground border-silver/40 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStyles.map((item) => (
          <StyleCard 
            key={item.variant} 
            item={item} 
            onPreview={onPreview} 
          />
        ))}
      </div>

      {filteredStyles.length === 0 && (
        <p className="text-center py-20 text-muted-foreground italic">
          No styles found in this category.
        </p>
      )}
    </section>
  );
}
