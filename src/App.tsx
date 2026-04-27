import { useState } from "react";
import { StyleGallery } from "./components/StyleGallery";
import { StyleItem } from "./components/StyleCard";

/* -------------------------------------------------------------------------- */
/* 1. UNIQUE LAYOUT COMPONENTS                                                */
/* -------------------------------------------------------------------------- */

// LUMINA CERAMIC: Ultra-clean, Soft Glow, Luxury Focus
const LuminaLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#fdfcfb] text-slate-800 font-serif overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
    <nav className="relative z-10 flex justify-between p-8 items-center border-b border-blue-100 bg-white/50 backdrop-blur-md">
      <button onClick={onBack} className="font-sans text-[10px] uppercase tracking-[0.3em] hover:text-blue-500 transition-colors">← Exit Gallery</button>
      <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-blue-400">9H Ceramic Shield Active</span>
    </nav>
    <main className="relative z-10 max-w-4xl mx-auto py-32 px-10 text-center">
      <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-blue-400 block mb-6">Paint Correction & Coating</span>
      <h1 className="text-7xl md:text-9xl font-light leading-none mb-8">Lumina <br/><span className="italic">Ceramic</span></h1>
      <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-12">{item.tagline}</p>
      <button className="px-12 py-5 rounded-full bg-white border border-blue-200 text-blue-500 uppercase text-[10px] tracking-[0.3em] shadow-xl shadow-blue-100 hover:bg-blue-500 hover:text-white transition-all">
        Request Concierge Detail
      </button>
    </main>
  </div>
);

// KINETIC COATINGS: High-Velocity, Streaks, Slanted Marquee
const KineticLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-white text-black font-black overflow-hidden relative">
    {/* Speed Streaks Animation */}
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="absolute h-px bg-blue-600 animate-speed-streak" 
          style={{
            top: `${Math.random() * 100}%`,
            left: '-100%',
            width: `${Math.random() * 300 + 100}px`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 0.5 + 0.3}s`
          }} 
        />
      ))}
    </div>

    <nav className="relative z-10 flex justify-between p-6 bg-blue-600 text-white">
      <button onClick={onBack} className="italic text-xs tracking-tighter hover:underline">← BACK_TO_STUDIO</button>
      <span className="italic text-xs tracking-tighter">PHASE_03: KINETIC_BONDING</span>
    </nav>

    <main className="relative z-10 p-10 md:p-20">
      <h1 className="text-[12vw] italic leading-[0.8] tracking-tighter uppercase mb-10 transform -skew-x-12">
        Kinetic <br/> <span className="text-blue-600">Coatings.</span>
      </h1>
      <div className="max-w-xl bg-black text-white p-8 transform -skew-x-12">
        <p className="text-xl italic font-bold leading-tight transform skew-x-12">{item.tagline}</p>
      </div>
      <button className="mt-12 group flex items-center gap-4 text-3xl italic uppercase hover:text-blue-600 transition-colors">
        Initiate Rapid Build <span className="group-hover:translate-x-4 transition-transform">→</span>
      </button>
    </main>

    {/* Scrolling Marquee */}
    <div className="absolute bottom-0 w-full bg-blue-600 py-4 border-t-4 border-black whitespace-nowrap overflow-hidden">
      <div className="inline-block animate-marquee uppercase italic text-sm text-white tracking-[0.5em]">
        FAST APPLICATION • POLYMER SEALANT • HIGH VELOCITY SHINE • INSTANT BOND • 
        FAST APPLICATION • POLYMER SEALANT • HIGH VELOCITY SHINE • INSTANT BOND • 
      </div>
    </div>

    <style>{`
      @keyframes speed-streak {
        0% { transform: translateX(0); }
        100% { transform: translateX(400vw); }
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-speed-streak { animation: speed-streak linear infinite; }
      .animate-marquee { animation: marquee 20s linear infinite; }
    `}</style>
  </div>
);

// VANGUARD ARMOR: Heavy Duty, Tactical, Industrial Defense
const VanguardLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#111] text-[#eee] font-mono p-4 md:p-10">
    <div className="border-4 border-stone-800 min-h-[90vh] flex flex-col">
      <nav className="p-6 border-b-4 border-stone-800 flex justify-between bg-stone-900">
        <button onClick={onBack} className="bg-stone-800 px-4 py-1 text-[10px] hover:bg-white hover:text-black">REVERT_GALLERY</button>
        <span className="text-red-600 animate-pulse font-bold">[ ARMOR_LOCK_ENGAGED ]</span>
      </nav>
      <main className="flex-1 flex flex-col justify-center p-10 md:p-20">
        <span className="text-stone-500 mb-4 tracking-[0.3em] uppercase text-xs">Tactical Paint Defense</span>
        <h1 className="text-6xl md:text-8xl font-black uppercase mb-10 tracking-tighter leading-none text-white">Vanguard <br/> Armor.</h1>
        <p className="text-lg md:text-xl text-stone-400 max-w-xl leading-relaxed border-l-4 border-red-600 pl-8 mb-12 italic">
          {item.tagline}
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white transition-colors">Deploy Defense</button>
          <button className="border-2 border-stone-700 px-10 py-5 font-black uppercase tracking-widest text-xs hover:border-white transition-colors">Spec Sheet</button>
        </div>
      </main>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* 2. MAIN APP CONTROLLER                                                     */
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
    switch (activeStyle.variant) {
      case "lumina-ceramic": return <LuminaLayout item={activeStyle} onBack={goBack} />;
      case "kinetic-coatings": return <KineticLayout item={activeStyle} onBack={goBack} />;
      case "vanguard-armor": return <VanguardLayout item={activeStyle} onBack={goBack} />;
      // ... Add your other cases (vantage, obsidian-eco, etc.) here as well!
      default:
        return (
          <div className="min-h-screen bg-white p-20 flex flex-col items-center justify-center text-center">
             <h1 className="text-5xl font-black uppercase mb-4">{activeStyle.title}</h1>
             <p className="text-xl max-w-lg mb-12 text-gray-500">{activeStyle.tagline}</p>
             <button onClick={goBack} className="px-10 py-4 bg-black text-white uppercase text-xs font-bold tracking-widest">Back to Studio</button>
          </div>
        );
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="py-20 text-center px-6">
        <h1 className="text-xs uppercase tracking-[0.5em] mb-4 text-slate-400">YEG Launchpad Studio</h1>
        <h2 className="text-5xl font-black tracking-tighter uppercase mb-6 text-slate-900">The 2026 Lineup</h2>
        <div className="h-1 w-20 bg-black mx-auto" />
      </header>
      <main className="pb-32">
        <StyleGallery onPreview={handlePreview} />
      </main>
    </div>
  );
}

export default App;
