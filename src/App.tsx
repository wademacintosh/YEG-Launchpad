import { useState } from "react";
import { StyleGallery } from "./components/StyleGallery";
import { StyleItem } from "./components/StyleCard";

/* -------------------------------------------------------------------------- */
/* 1. UNIQUE LAYOUT COMPONENTS                        */
/* -------------------------------------------------------------------------- */

// OBSIDIAN: Minimal, Centered, Serif
const ObsidianLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#eef2ec] text-[#1f2a22] font-serif p-8">
    <nav className="flex justify-between border-b border-black/10 pb-4 mb-20 font-sans text-[10px] tracking-widest uppercase">
      <button onClick={onBack}>← Back</button>
      <span>Studio Concept / 01</span>
    </nav>
    <main className="max-w-3xl mx-auto text-center space-y-12">
      <h1 className="text-8xl font-medium leading-none tracking-tighter italic">Pure Detail.</h1>
      <p className="text-2xl leading-relaxed opacity-80 max-w-xl mx-auto">{item.tagline}</p>
      <div className="pt-10">
        <button className="px-12 py-4 border border-[#1f2a22] rounded-full hover:bg-[#1f2a22] hover:text-white transition-all uppercase text-xs tracking-[0.3em]">
          Book Detail
        </button>
      </div>
    </main>
  </div>
);

// NIGHT VISION: Grid-based, Cyber, Monospace
const NightVisionLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#22d3ee] font-mono p-4">
    <div className="border border-[#22d3ee]/30 min-h-[95vh] relative overflow-hidden">
      <nav className="p-6 border-b border-[#22d3ee]/30 flex justify-between text-[10px]">
        <button onClick={onBack} className="hover:bg-[#22d3ee] hover:text-black px-2 uppercase underline">Back_to_Studio</button>
        <span className="animate-pulse">● SYSTEM_ACTIVE</span>
      </nav>
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-12 lg:col-span-7 p-12 border-b lg:border-b-0 lg:border-r border-[#22d3ee]/30">
          <h1 className="text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
            {item.title} <span className="block text-2xl mt-4 opacity-50">Status: Protected</span>
          </h1>
          <p className="text-lg opacity-80 max-w-md">{item.tagline}</p>
        </div>
        <div className="col-span-12 lg:col-span-5 p-12 bg-[#22d3ee]/5">
          <div className="space-y-6">
            <div className="h-1 bg-[#22d3ee] w-full" />
            <p className="text-[10px] uppercase tracking-widest">Armor-Clad Protection Systems Installed Here</p>
            <button className="w-full py-4 bg-[#22d3ee] text-black font-bold uppercase text-xs shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              Initiate Scan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// VANTAGE: Asymmetrical, Luxury, Sans/Serif mix
const VantageLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#f5f1ea] text-[#0a1628] p-0">
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-1/3 p-12 flex flex-col justify-between border-r border-black/5">
        <button onClick={onBack} className="text-xs uppercase tracking-widest text-left">← Gallery</button>
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#B89766] mb-4 block">The Collective</span>
          <h1 className="text-5xl font-bold font-serif leading-tight">Refined <br/> Aesthetic.</h1>
        </div>
      </aside>
      <main className="flex-1 p-12 md:p-24 flex flex-col justify-center">
        <p className="text-3xl font-serif italic mb-12 max-w-lg leading-snug">{item.tagline}</p>
        <div className="flex gap-8 items-center border-t border-black/10 pt-12">
          <button className="px-10 py-4 bg-[#0a1628] text-white text-[10px] uppercase tracking-widest">Reserve Session</button>
          <span className="text-[10px] uppercase tracking-widest opacity-40">Edmonton, AB</span>
        </div>
      </main>
    </div>
  </div>
);

// MUD, SWEAT & GEARS: Brutalist, Heavy, Bright
const MudLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#FFD400] text-black font-black p-0 border-[16px] border-black">
    <nav className="p-8 border-b-8 border-black flex justify-between items-center bg-white">
      <button onClick={onBack} className="bg-black text-[#FFD400] px-6 py-2 uppercase transform -rotate-2">Back</button>
      <span className="text-2xl">RUGGED_LAB</span>
    </nav>
    <div className="p-12">
      <h1 className="text-[10vw] leading-[0.8] uppercase mb-12 italic transform -rotate-1">{item.title}</h1>
      <div className="bg-black text-white p-8 max-w-2xl transform rotate-1">
        <p className="text-2xl uppercase tracking-tighter">{item.tagline}</p>
      </div>
      <button className="mt-12 text-4xl uppercase underline decoration-8 underline-offset-8 hover:text-white transition-colors">
        GET A QUOTE NOW →
      </button>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* 2. MAIN APP CONTROLLER                            */
/* -------------------------------------------------------------------------- */

function App() {
  const [view, setView] = useState<"gallery" | "preview">("gallery");
  const [activeStyle, setActiveStyle] = useState<StyleItem | null>(null);

  const handlePreview = (item: StyleItem) => {
    setActiveStyle(item);
    setView("preview");
    window.scrollTo(0, 0);
  };

  const goBack = () => setView("gallery");

  if (view === "preview" && activeStyle) {
    // Choose the layout based on the variant
    switch (activeStyle.variant) {
      case "obsidian-eco": return <ObsidianLayout item={activeStyle} onBack={goBack} />;
      case "night-vision": return <NightVisionLayout item={activeStyle} onBack={goBack} />;
      case "vantage": return <VantageLayout item={activeStyle} onBack={goBack} />;
      case "mud-sweat-gears": return <MudLayout item={activeStyle} onBack={goBack} />;
      default:
        // Fallback for other styles (Prism, DetailFlow, etc.)
        return (
          <div className="min-h-screen bg-white p-20">
             <button onClick={goBack} className="mb-10 underline">← Back</button>
             <h1 className="text-6xl font-bold uppercase">{activeStyle.title}</h1>
             <p className="text-2xl mt-4">{activeStyle.tagline}</p>
          </div>
        );
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="py-20 text-center px-6">
        <h1 className="text-sm uppercase tracking-[0.5em] mb-4 text-muted-foreground">YEG Launchpad</h1>
        <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">Launch Your Brand</h2>
      </header>
      <main className="pb-32">
        <StyleGallery onPreview={handlePreview} />
      </main>
    </div>
  );
}

export default App;
