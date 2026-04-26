import { useState } from "react";
import { StyleGallery } from "./components/StyleGallery";
import { StyleItem } from "./components/StyleCard";

// This contains the unique "DNA" for each style
const STYLE_DETAILS = {
  "obsidian-eco": {
    title: "Obsidian Eco-Clean",
    desc: "Minimal monochrome layout for waterless detailing.",
    bg: "#eef2ec",
    text: "#1f2a22",
    accent: "#7A8C7E",
    font: "'Cormorant Garamond', serif"
  },
  "night-vision": {
    title: "Night Vision Armor",
    desc: "High-contrast dark UI built for ceramic coatings & PPF.",
    bg: "#1a1a1a",
    text: "#22d3ee",
    accent: "#22d3ee",
    font: "'JetBrains Mono', monospace"
  },
  "vantage": {
    title: "The Vantage Collective",
    desc: "Editorial luxury aesthetic for boutique exotic-car studios.",
    bg: "#f5f1ea",
    text: "#0a1628",
    accent: "#B89766",
    font: "'Playfair Display', serif"
  },
  "mud-sweat-gears": {
    title: "Mud, Sweat & Gears",
    desc: "Bold rugged branding for off-road & truck wash specialists.",
    bg: "#FFD400",
    text: "#000000",
    accent: "#000000",
    font: "'Archivo Black', sans-serif"
  },
  "detailflow": {
    title: "DetailFlow Pro",
    desc: "Clean SaaS-style layout focused on online booking conversions.",
    bg: "#0f172a",
    text: "#ffffff",
    accent: "#60a5fa",
    font: "sans-serif"
  },
  "aero-shine": {
    title: "Aero Shine Labs",
    desc: "Tech-lab vibe with motion accents for paint correction pros.",
    bg: "#000000",
    text: "#ffffff",
    accent: "#e10600",
    font: "'Space Grotesk', sans-serif"
  },
  "route66": {
    title: "Route 66 Revive",
    desc: "Retro Americana branding for classic & restoration shops.",
    bg: "#f7eed7",
    text: "#7C1D1D",
    accent: "#0d8a8a",
    font: "'Pacifico', cursive"
  },
  "prism": {
    title: "Prism Auto-Works",
    desc: "Vibrant gradient design for vinyl wraps & custom finishes.",
    bg: "#0a0014",
    text: "#ffffff",
    accent: "#c026d3",
    font: "'Space Grotesk', sans-serif"
  }
};

function App() {
  const [view, setView] = useState<"gallery" | "preview">("gallery");
  const [activeStyle, setActiveStyle] = useState<StyleItem | null>(null);

  // Function to enter Preview Mode
  const handlePreview = (item: StyleItem) => {
    setActiveStyle(item);
    setView("preview");
    window.scrollTo(0, 0); // Scroll to top of "new page"
  };

  // If in Preview Mode, show the Style's "Page"
  if (view === "preview" && activeStyle) {
    const details = STYLE_DETAILS[activeStyle.variant];
    
    return (
      <div 
        className="min-h-screen transition-colors duration-700" 
        style={{ backgroundColor: details.bg, color: details.text, fontFamily: details.font }}
      >
        <nav className="flex justify-between items-center p-8 border-b border-black/10">
          <button 
            onClick={() => setView("gallery")}
            className="uppercase text-xs tracking-widest hover:opacity-50 font-sans"
          >
            ← Back to Studio
          </button>
          <span className="uppercase text-[10px] tracking-[0.5em] opacity-60 font-sans">
            Style: {details.title}
          </span>
        </nav>

        <main className="max-w-5xl mx-auto py-32 px-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-tight uppercase">
              {details.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl opacity-80 leading-relaxed">
              {details.desc} This landing page layout is engineered for Edmonton's top-tier automotive professionals.
            </p>
            <div className="pt-10">
              <button 
                className="px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
                style={{ backgroundColor: details.accent, color: details.bg === '#000000' || details.bg === '#0a0014' ? '#fff' : details.bg }}
              >
                Book Your Transformation
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Default View: The Studio Gallery
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="py-20 text-center px-6">
        <h1 className="text-sm uppercase tracking-[0.5em] mb-4 text-muted-foreground">YEG Launchpad</h1>
        <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">Launch Your Brand</h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          Premium detailing visual identities for Edmonton's elite automotive shops.
        </p>
      </header>

      <main className="pb-32">
        {/* Pass our handlePreview function into the gallery */}
        <StyleGallery onPreview={handlePreview} />
      </main>

      <footer className="py-10 border-t border-silver/30 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
        Walterdale · Edmonton · 2026
      </footer>
    </div>
  );
}

export default App;
