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
    title: "Prism Auto-Works",
    tagline: "Vibrant gradient design for vinyl wraps & custom finishes.",
    category: "Modern",
    variant: "prism",
  },
  {
    title: "DetailFlow Pro",
    tagline: "Clean SaaS-style layout focused on online booking conversions.",
    category: "Modern",
    variant: "detailflow",
  },
  {
    title: "Route 66 Revive",
    tagline: "Retro Americana branding for classic & restoration shops.",
    category: "Luxury",
    variant: "route66",
  },
  {
    title: "Aero Shine Labs",
    tagline: "Tech-lab vibe with motion accents for paint correction pros.",
    category: "Modern",
    variant: "aero-shine",
  },
  {
    title: "Lumina Ceramic",
    tagline: "Multi-stage paint correction and liquid-glass finishing for a permanent showroom shine.",
    category: "Modern",
    variant: "lumina-ceramic",
  },
  {
    title: "Kinetic Coatings",
    tagline: "Express high-velocity detailing and polymer sealant systems for daily drivers.",
    category: "Modern",
    variant: "kinetic-coatings",
  },
  {
    title: "Vanguard Armor",
    tagline: "Ballistic-grade PPF and extreme surface defense for rugged off-road builds.",
    category: "Rugged",
    variant: "vanguard-armor",
  }
];

const CATEGORIES: (StyleCategory | "All")[] = ["All", "Luxury", "Rugged", "Modern"];

export function StyleGallery({ onPreview }: StyleGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<StyleCategory | "All">("All");

  const filteredStyles = STYLES.filter(
    (style) => activeCategory === "All" || style.category === activeCategory
  );

  return (
    <section className="px-6 max-w-7xl mx-auto">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-black text-white border-black shadow-lg"
                : "bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredStyles.map((item) => (
          <StyleCard 
            key={item.variant} 
            item={item} 
            onPreview={onPreview} 
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredStyles.length === 0 && (
        <div className="text-center py-32 border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-400 font-serif italic text-xl">
            More {activeCategory} concepts coming soon...
          </p>
        </div>
      )}
    </section>
  );
}
