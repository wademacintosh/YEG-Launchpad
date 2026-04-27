import { useState } from "react";
import { StyleGallery } from "./components/StyleGallery";
import { StyleItem } from "./components/StyleCard";

/* -------------------------------------------------------------------------- */
/* 1. UNIQUE LAYOUT COMPONENTS                                                */
/* -------------------------------------------------------------------------- */

// OBSIDIAN: Minimal, Centered, Serif
const ObsidianLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#eef2ec] text-[#1f2a22] font-serif p-8">
    <nav className="flex justify-between border-b border-black/10 pb-4 mb-20 font-sans text-[10px] tracking-widest uppercase">
      <button onClick={onBack}>← Back</button>
      <span>Ceramic Concept / 01</span>
    </nav>
    <main className="max-w-3xl mx-auto text-center space-y-12">
      <h1 className="text-8xl font-medium leading-none tracking-tighter italic">Pure Detail.</h1>
      <p className="text-2xl leading-relaxed opacity-80 max-w-xl mx-auto">{item.tagline}</p>
      <div className="pt-10">
        <button className="px-12 py-4 border border-[#1f2a22] rounded-full hover:bg-[#1f2a22] hover:text-white transition-all uppercase text-xs tracking-[0.3em]">Request Quote</button>
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
        <span className="animate-pulse text-cyan-400">● COATING_ACTIVE</span>
      </nav>
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-12 lg:col-span-7 p-12 border-b lg:border-b-0 lg:border-r border-[#22d3ee]/30">
          <h1 className="text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">{item.title}</h1>
          <p className="text-lg opacity-80 max-w-md italic">{item.tagline}</p>
        </div>
        <div className="col-span-12 lg:col-span-5 p-12 bg-[#22d3ee]/5">
          <div className="space-y-6">
            <div className="h-1 bg-[#22d3ee] w-full" />
            <p className="text-[10px] uppercase tracking-widest">Nano-Ceramic Surface Shield Installed</p>
            <button className="w-full py-4 bg-[#22d3ee] text-black font-bold uppercase text-xs shadow-[0_0_20px_rgba(34,211,238,0.5)]">Initiate Shield</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// KINETIC COATINGS: High-Velocity Animation
const KineticLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-white text-black font-black overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute h-px bg-blue-600 animate-speed-streak" 
          style={{ top: `${Math.random() * 100}%`, left: '-100%', width: `${Math.random() * 300 + 100}px`, animationDelay: `${Math.random() * 2}s`, animationDuration: `${Math.random() * 0.5 + 0.3}s` }} />
      ))}
    </div>
    <nav className="relative z-10 flex justify-between p-6 bg-blue-600 text-white">
      <button onClick={onBack} className="italic text-xs tracking-tighter hover:underline">← BACK</button>
      <span className="italic text-xs tracking-tighter font-bold uppercase">Polymer Bonding: Live</span>
    </nav>
    <main className="relative z-10 p-10 md:p-20">
      <h1 className="text-[12vw] italic leading-[0.8] tracking-tighter uppercase mb-10 transform -skew-x-12">Kinetic <br/> <span className="text-blue-600">Coatings.</span></h1>
      <div className="max-w-xl bg-black text-white p-8 transform -skew-x-12">
        <p className="text-xl italic font-bold leading-tight transform skew-x-12">{item.tagline}</p>
      </div>
      <button className="mt-12 group flex items-center gap-4 text-3xl italic uppercase hover:text-blue-600 transition-colors">Start Detail <span className="group-hover:translate-x-4 transition-transform">→</span></button>
    </main>
    <div className="absolute bottom-0 w-full bg-blue-600 py-4 border-t-4 border-black whitespace-nowrap overflow-hidden">
      <div className="inline-block animate-marquee uppercase italic text-sm text-white tracking-[0.5em]">
        POLYMER SEALANT • CERAMIC BOOST • RAPID APPLICATION • INSTANT BOND • 
      </div>
    </div>
    <style>{`
      @keyframes speed-streak { 0% { transform: translateX(0); } 100% { transform: translateX(400vw); } }
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .animate-speed-streak { animation: speed-streak linear infinite; }
      .animate-marquee { animation: marquee 20s linear infinite; }
    `}</style>
  </div>
);

// VANGUARD ARMOR: Heavy tactical protection
const VanguardLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#111] text-[#eee] font-mono p-4 md:p-10">
    <div className="border-4 border-stone-800 min-h-[90vh] flex flex-col">
      <nav className="p-6 border-b-4 border-stone-800 flex justify-between bg-stone-900">
        <button onClick={onBack} className="bg-stone-800 px-4 py-1 text-[10px] hover:bg-white hover:text-black tracking-widest">RETURN_TO_STUDIO</button>
        <span className="text-red-600 animate-pulse font-bold tracking-widest uppercase">[ Armor Shield Active ]</span>
      </nav>
      <main className="flex-1 flex flex-col justify-center p-10 md:p-20">
        <span className="text-stone-500 mb-4 tracking-[0.3em] uppercase text-xs font-bold">10-MIL BALLISTIC PPF</span>
        <h1 className="text-6xl md:text-8xl font-black uppercase mb-10 tracking-tighter leading-none text-white italic">Vanguard <br/> Armor.</h1>
        <p className="text-lg md:text-xl text-stone-400 max-w-xl leading-relaxed border-l-4 border-red-600 pl-8 mb-12 italic font-bold">{item.tagline}</p>
        <button className="bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white self-start">Protect Build</button>
      </main>
    </div>
  </div>
);

// PRISM: Vibrant, Neon Gradient
const PrismLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#0a0014] text-white overflow-hidden relative font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-[#c026d3]/20 via-transparent to-[#ec4899]/20" />
    <nav className="relative z-10 p-8 flex justify-between">
      <button onClick={onBack} className="text-[10px] uppercase tracking-[0.4em] text-fuchsia-400">← Back</button>
      <span className="text-[10px] uppercase tracking-[0.4em] text-cyan-400">Prism_OS_v2</span>
    </nav>
    <main className="relative z-10 max-w-5xl mx-auto py-32 px-10">
      <h1 className="text-8xl font-black uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400">Prism <br/> Auto-Works</h1>
      <p className="text-2xl text-fuchsia-100/60 max-w-xl mb-12 italic leading-relaxed">{item.tagline}</p>
      <button className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-fuchsia-500 hover:text-white transition-all shadow-[0_0_40px_rgba(192,38,211,0.5)]">Explore Wraps</button>
    </main>
  </div>
);

// AERO SHINE: Technical, Carbon-Fiber Vibe
const AeroLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-black text-white font-sans">
    <div className="h-2 bg-[#e10600] w-full" />
    <nav className="p-8 flex justify-between border-b border-white/10">
      <button onClick={onBack} className="text-xs uppercase italic tracking-widest">← Lab_Index</button>
      <span className="text-xs uppercase italic tracking-widest text-[#e10600]">Velocity: 100%</span>
    </nav>
    <main className="max-w-6xl mx-auto py-40 px-10 flex flex-col md:flex-row items-end gap-12">
      <h1 className="text-9xl font-black italic uppercase leading-[0.8] tracking-tighter">Aero <br/> <span className="text-[#e10600]">Shine</span></h1>
      <div className="max-w-md border-l-4 border-white pl-8 py-4">
        <p className="text-xl uppercase italic font-bold mb-8 leading-tight">{item.tagline}</p>
        <button className="bg-[#e10600] px-10 py-4 text-xs font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all">Request Correction</button>
      </div>
    </main>
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
      case "obsidian-eco": return <ObsidianLayout item={activeStyle} onBack={goBack} />;
      case "night-vision": return <NightVisionLayout item={activeStyle} onBack={goBack} />;
      case "kinetic-coatings": return <KineticLayout item={activeStyle} onBack={goBack} />;
      case "vanguard-armor": return <VanguardLayout item={activeStyle} onBack={goBack} />;
      case "prism": return <PrismLayout item={activeStyle} onBack={goBack} />;
      case "aero-shine": return <AeroLayout item={activeStyle} onBack={goBack} />;
      case "mud-sweat-gears": return <MudLayout item={activeStyle} onBack={goBack} />;
      case "vantage": return <VantageLayout item={activeStyle} onBack={goBack} />;
      default:
        // Combined Fallback for all other styles
        return (
          <div className="min-h-screen bg-white p-20 flex flex-col items-center justify-center text-center font-sans">
             <nav className="absolute top-8 left-8"><button onClick={goBack} className="text-xs uppercase tracking-widest underline">← Back to Gallery</button></nav>
             <h1 className="text-6xl font-black uppercase mb-6 tracking-tighter">{activeStyle.title}</h1>
             <p className="text-xl max-w-lg mb-12 text-gray-400 italic font-medium leading-relaxed">{activeStyle.tagline}</p>
             <button className="px-12 py-5 bg-black text-white uppercase text-xs font-bold tracking-widest hover:scale-105 transition-transform">Inquire about Identity</button>
          </div>
        );
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="py-20 text-center px-6">
        <h1 className="text-xs uppercase tracking-[0.5em] mb-4 text-slate-400 font-bold">YEG Launchpad Studio</h1>
        <h2 className="text-5xl font-black tracking-tighter uppercase mb-6 text-slate-900 italic">The 2026 Collection</h2>
        <div className="h-1 w-20 bg-black mx-auto" />
      </header>
      <main className="pb-32">
        <StyleGallery onPreview={handlePreview} />
      </main>
    </div>
  );
}

export default App;
