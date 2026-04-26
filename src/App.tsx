import { useState } from "react";
import { StyleGallery } from "./components/StyleGallery";
import { StyleItem } from "./components/StyleCard";

/* -------------------------------------------------------------------------- */
/* 1. UNIQUE LAYOUT COMPONENTS                                                */
/* -------------------------------------------------------------------------- */

// OBSIDIAN: Minimal, Centered, Serif - Vibe: High-End Boutique Detailing
const ObsidianLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#eef2ec] text-[#1f2a22] font-serif p-8">
    <nav className="flex justify-between border-b border-black/10 pb-4 mb-20 font-sans text-[10px] tracking-widest uppercase">
      <button onClick={onBack} className="hover:opacity-60 transition-opacity">← Gallery</button>
      <span>Bespoke Correction & Coating</span>
    </nav>
    <main className="max-w-4xl mx-auto text-center space-y-16">
      <h1 className="text-7xl md:text-8xl font-medium leading-none tracking-tighter italic">Flawless Reflection.</h1>
      <p className="text-xl md:text-2xl leading-relaxed opacity-80 max-w-2xl mx-auto">
        {item.tagline} Our multi-stage paint correction process removes 95%+ of clear coat defects, permanently restoring your vehicle's factory brilliance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-sans text-sm mt-20 pt-16 border-t border-black/10">
        <div>
          <h3 className="font-serif italic text-2xl mb-4">Stage I</h3>
          <p className="opacity-70 mb-4">Enhancement polish paired with a 1-year silica sealant. Ideal for well-maintained vehicles.</p>
          <span className="tracking-widest uppercase text-[10px]">From $450</span>
        </div>
        <div>
          <h3 className="font-serif italic text-2xl mb-4">Stage II</h3>
          <p className="opacity-70 mb-4">Heavy defect removal followed by a finishing polish and 5-year 9H Ceramic Coating.</p>
          <span className="tracking-widest uppercase text-[10px]">From $900</span>
        </div>
        <div>
          <h3 className="font-serif italic text-2xl mb-4">Concierge</h3>
          <p className="opacity-70 mb-4">Wheels-off detail, interior restoration, glass polishing, and lifetime self-healing coating.</p>
          <span className="tracking-widest uppercase text-[10px]">From $2,200</span>
        </div>
      </div>

      <div className="pt-16 pb-10">
        <button className="px-12 py-4 border border-[#1f2a22] rounded-full hover:bg-[#1f2a22] hover:text-[#eef2ec] transition-all uppercase text-xs tracking-[0.3em] font-sans">
          Request Consultation
        </button>
      </div>
    </main>
  </div>
);

// NIGHT VISION: Grid-based, Cyber, Monospace - Vibe: High-Tech PPF & Nano-Coatings
const NightVisionLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#22d3ee] font-mono p-4">
    <div className="border border-[#22d3ee]/30 min-h-[95vh] relative overflow-hidden flex flex-col">
      <nav className="p-6 border-b border-[#22d3ee]/30 flex justify-between text-[10px]">
        <button onClick={onBack} className="hover:bg-[#22d3ee] hover:text-black px-2 uppercase underline">Abort_Process</button>
        <span className="animate-pulse">● NANOTECH_SYSTEMS_ONLINE</span>
      </nav>
      <div className="grid grid-cols-12 flex-1">
        <div className="col-span-12 lg:col-span-8 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#22d3ee]/30">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
            {item.title} 
            <span className="block text-xl mt-4 text-[#22d3ee]/60 font-normal">Active Armor / Paint Protection Film</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mb-12">
            {item.tagline} Deploying 8-mil, self-healing aliphatic polyurethane elastomers to shield vulnerable impact zones from kinetic debris and chemical etching.
          </p>
          
          <table className="w-full text-sm text-left border-collapse border border-[#22d3ee]/20">
            <thead>
              <tr className="bg-[#22d3ee]/10 text-[#22d3ee]">
                <th className="p-3 border border-[#22d3ee]/20 uppercase">Module</th>
                <th className="p-3 border border-[#22d3ee]/20 uppercase">Coverage</th>
                <th className="p-3 border border-[#22d3ee]/20 uppercase">Spec</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#22d3ee]/20">Track Pack</td>
                <td className="p-3 border border-[#22d3ee]/20">Bumper, Hood, Fenders, Mirrors</td>
                <td className="p-3 border border-[#22d3ee]/20">10-Year Warranty</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#22d3ee]/20">Full Stealth</td>
                <td className="p-3 border border-[#22d3ee]/20">100% Exterior Surfaces</td>
                <td className="p-3 border border-[#22d3ee]/20">Satin/Matte Conversion</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-12 lg:col-span-4 p-8 md:p-12 bg-[#22d3ee]/5 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="h-1 bg-[#22d3ee] w-full" />
            <div>
              <p className="text-[10px] uppercase tracking-widest mb-2">System Diagnostics</p>
              <ul className="text-xs space-y-2 opacity-80">
                <li>[ OK ] Hydrophobic Topcoat</li>
                <li>[ OK ] UV Resistance</li>
                <li>[ OK ] Laser-Cut Templates</li>
              </ul>
            </div>
            <button className="w-full py-4 bg-[#22d3ee] text-black font-bold uppercase text-xs shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all">
              Initialize Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// VANTAGE: Asymmetrical, Luxury, Sans/Serif mix - Vibe: Exotics & Vintage Concourse Prep
const VantageLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#f5f1ea] text-[#0a1628] p-0">
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-1/3 p-12 flex flex-col justify-between border-r border-black/5 bg-white">
        <button onClick={onBack} className="text-xs uppercase tracking-widest text-left hover:text-[#B89766] transition-colors">← Collections</button>
        <div className="mt-20 md:mt-0">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#B89766] mb-4 block">The Exotics Division</span>
          <h1 className="text-5xl font-bold font-serif leading-tight">Concourse <br/> Preparation.</h1>
          <p className="mt-8 text-sm opacity-60 leading-relaxed">
            Specializing in vintage restorations, hypercar maintenance, and pre-auction detailing. Swissvax authorized facility.
          </p>
        </div>
      </aside>
      <main className="flex-1 p-12 md:p-24 flex flex-col justify-center bg-[#f5f1ea]">
        <p className="text-3xl md:text-4xl font-serif italic mb-16 max-w-xl leading-snug">
          "{item.tagline} We preserve automotive heritage through meticulous, non-invasive detailing methodologies."
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="border-l border-[#B89766] pl-6">
            <h4 className="uppercase tracking-widest text-xs font-bold mb-2">Heritage Care</h4>
            <p className="text-sm opacity-70">Single-stage paint preservation, leather feeding, and dry-ice engine bay cleaning.</p>
          </div>
          <div className="border-l border-[#B89766] pl-6">
            <h4 className="uppercase tracking-widest text-xs font-bold mb-2">Executive Protocol</h4>
            <p className="text-sm opacity-70">Monthly maintenance washes, interior sanitization, and priority scheduling for your daily driver.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 items-center border-t border-black/10 pt-12">
          <button className="px-10 py-4 bg-[#0a1628] text-white text-[10px] uppercase tracking-widest hover:bg-[#B89766] transition-colors">
            Reserve a Bay
          </button>
          <span className="text-[10px] uppercase tracking-widest opacity-40">Climate-Controlled Studio • Edmonton</span>
        </div>
      </main>
    </div>
  </div>
);

// MUD, SWEAT & GEARS: Brutalist, Heavy, Bright - Vibe: Off-road, Trucks, Heavy Duty Washes
const MudLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#FFD400] text-black font-black p-0 border-[16px] border-black flex flex-col">
    <nav className="p-6 md:p-8 border-b-8 border-black flex justify-between items-center bg-white">
      <button onClick={onBack} className="bg-black text-[#FFD400] px-6 py-2 uppercase transform -rotate-2 hover:rotate-0 transition-transform">Back</button>
      <span className="text-xl md:text-2xl tracking-tighter">DEGREASE_LAB</span>
    </nav>
    <div className="p-6 md:p-12 flex-1 flex flex-col justify-center overflow-hidden">
      <h1 className="text-[12vw] leading-[0.8] uppercase mb-8 italic transform -rotate-1 break-words">
        {item.title || "DIRT DESTROYED."}
      </h1>
      <div className="bg-black text-white p-6 md:p-8 max-w-3xl transform rotate-1 shadow-[10px_10px_0px_#fff]">
        <p className="text-xl md:text-3xl uppercase tracking-tighter">{item.tagline} WE CLEAN THE RIGS THAT ACTUALLY WORK FOR A LIVING.</p>
      </div>
      
      <div className="mt-16 flex flex-wrap gap-4 uppercase text-xl md:text-2xl transform -rotate-1">
        <span className="bg-white px-4 py-2 border-4 border-black">Mud Extraction</span>
        <span className="bg-white px-4 py-2 border-4 border-black">Undercarriage Blast</span>
        <span className="bg-white px-4 py-2 border-4 border-black">Lift-Kit Detailing</span>
        <span className="bg-white px-4 py-2 border-4 border-black">Fleet Wash</span>
      </div>

      <button className="mt-16 text-3xl md:text-5xl uppercase underline decoration-8 underline-offset-8 hover:text-white transition-colors text-left self-start">
        BOOK THE HEAVY WASH →
      </button>
    </div>
  </div>
);

// PRISM: Colorful, Gradient, Modern - Vibe: Vinyl Wraps, Color Change, Gloss Enhancement
const PrismLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans overflow-hidden relative">
    {/* Background Gradients */}
    <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-fuchsia-600/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-500/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
    
    <nav className="relative z-10 flex justify-between items-center mb-24">
      <button onClick={onBack} className="text-sm font-semibold tracking-wide hover:text-cyan-400 transition-colors flex items-center gap-2">
        <span>←</span> Studio
      </button>
      <div className="text-xs uppercase tracking-[0.2em] font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
        Aesthetics & Styling
      </div>
    </nav>
    
    <main className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 space-y-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400">
          {item.title}
        </h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-300">
          {item.tagline} Transform your vehicle's aesthetic with premium color-change vinyl wraps, chrome deletes, and extreme gloss enhancement polishing.
        </p>
        <div className="flex gap-4 pt-8">
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors">
            Explore Colors
          </button>
          <button className="px-8 py-4 bg-white/10 rounded-full font-bold backdrop-blur-md hover:bg-white/20 transition-colors">
            Gloss Packages
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-1/3 space-y-4">
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
          <h3 className="font-bold text-xl mb-2 text-fuchsia-400">Full Vehicle Wraps</h3>
          <p className="text-sm text-slate-400">Over 300+ colors from 3M, Avery, and Inozetek. Protect original paint while standing out.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
          <h3 className="font-bold text-xl mb-2 text-cyan-400">Ceramic Washes</h3>
          <p className="text-sm text-slate-400">PH-neutral foam cannons with Si02 infused sealants to boost gloss and maintain your wrap.</p>
        </div>
      </div>
    </main>
  </div>
);

// DETAILFLOW: Smooth, UI-focused, Corporate - Vibe: Mobile Detailing SaaS / Subscription App
const DetailFlowLayout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => {
  const [billingCycle, setBillingCycle] = useState<"one-time" | "monthly">("monthly");

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-200">
      {/* APP HEADER */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack} 
            className="text-slate-400 hover:text-slate-800 transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Detail<span className="text-blue-600">Flow</span>
            </span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Fleet API</a>
          <a href="#" className="text-slate-900">Pricing</a>
        </nav>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 shadow-sm transition-all active:scale-95">
          Sign In
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Now Serving Edmonton & Area
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            {item?.title || "Car care on auto-pilot."}
          </h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            {item?.tagline || "Book a top-tier mobile detailer in 60 seconds."} We bring the water, power, and perfection directly to your driveway.
          </p>
          
          {/* BILLING TOGGLE */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === "one-time" ? "text-slate-900" : "text-slate-400"}`}>One-Time Wash</span>
            <button 
              onClick={() => setBillingCycle(prev => prev === "one-time" ? "monthly" : "one-time")}
              className="w-14 h-8 bg-blue-600 rounded-full relative p-1 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${billingCycle === "monthly" ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${billingCycle === "monthly" ? "text-slate-900" : "text-slate-400"}`}>
              WashClub Sub 
              <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        {/* PRICING / BOOKING CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: The Standard */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
            <h3 className="text-2xl font-bold mb-2">The Standard</h3>
            <p className="text-slate-500 text-sm mb-6">Perfect for bi-weekly maintenance and a spotless daily driver.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900">
                ${billingCycle === "monthly" ? "120" : "150"}
              </span>
              <span className="text-slate-500 font-medium">/wash</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Ph-Neutral Foam Wash
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Wheel & Tire Decontamination
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Interior Vacuum & Wipe Down
              </li>
            </ul>
            <button className="w-full py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">
              Book Standard
            </button>
          </div>

          {/* Card 2: The Reset (Highlighted) */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden flex flex-col text-white">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-xl">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">The Reset</h3>
            <p className="text-slate-400 text-sm mb-6">A complete deep-clean inside and out. Makes it look factory fresh.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">
                ${billingCycle === "monthly" ? "260" : "325"}
              </span>
              <span className="text-slate-400 font-medium">/wash</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Everything in Standard
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Clay Bar & Iron Decontamination
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Hot Water Extraction (Seats/Carpets)
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                6-Month Ceramic Sealant
              </li>
            </ul>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
              Book The Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// ROUTE 66: Classic Americana, Vintage Garage, Retro - Vibe: Hot Rods, Classics, Hand Wax
const Route66Layout = ({ item, onBack }: { item: StyleItem; onBack: () => void }) => (
  <div className="min-h-screen bg-[#FDF8E7] text-[#1a1a1a] font-sans border-t-[12px] border-[#D9381E]">
    <div className="border-b-4 border-[#1a1a1a] px-8 py-4 flex justify-between items-center bg-white">
      <button onClick={onBack} className="text-sm font-bold uppercase tracking-widest hover:text-[#D9381E] transition-colors">
        ← Exit Highway
      </button>
      <div className="flex items-center gap-2">
        <span className="text-2xl text-[#D9381E]">★</span>
        <span className="font-black text-xl tracking-tighter uppercase hidden md:inline-block">Classic Wash & Lube</span>
        <span className="text-2xl text-[#D9381E]">★</span>
      </div>
    </div>

    <main className="max-w-5xl mx-auto px-6 py-16 text-center">
      <div className="inline-block border-4 border-[#1a1a1a] px-6 py-2 mb-8 bg-white shadow-[6px_6px_0px_#D9381E] transform -rotate-2">
        <span className="font-black uppercase tracking-widest text-[#1a1a1a]">Established 1954</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#1a1a1a] mb-6 drop-shadow-sm">
        {item.title || "Old School Shine."}
      </h1>
      
      <p className="text-xl md:text-2xl font-serif italic text-gray-700 max-w-2xl mx-auto mb-16 leading-relaxed">
        {item.tagline || "We don't do ceramic coatings here. Just elbow grease, heavy compound, and hand-rubbed Carnauba wax."}
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="bg-white border-4 border-[#1a1a1a] p-8 shadow-[8px_8px_0px_#1a2a3a] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#1a2a3a] transition-all">
          <h3 className="text-2xl font-black uppercase mb-4 text-[#D9381E]">The Sunday Cruiser</h3>
          <p className="font-medium text-sm mb-6 text-gray-600">Hand wash, chamois dry, white-wall tire scrub, and a fresh coat of Brazilian Carnauba.</p>
          <span className="font-black text-2xl">$150</span>
        </div>
        
        <div className="bg-white border-4 border-[#1a1a1a] p-8 shadow-[8px_8px_0px_#1a2a3a] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#1a2a3a] transition-all">
          <h3 className="text-2xl font-black uppercase mb-4 text-[#D9381E]">Chrome & Metal</h3>
          <p className="font-medium text-sm mb-6 text-gray-600">Machine polishing for vintage bumpers, grilles, and exhaust tips to a flawless mirror finish.</p>
          <span className="font-black text-2xl">$85 <span className="text-sm">/ hr</span></span>
        </div>
        
        <div className="bg-[#1a2a3a] text-white border-4 border-[#1a1a1a] p-8 shadow-[8px_8px_0px_#D9381E] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#D9381E] transition-all">
          <h3 className="text-2xl font-black uppercase mb-4 text-[#FDF8E7]">Full Restoration</h3>
          <p className="font-medium text-sm mb-6 text-gray-300">Heavy oxidation removal, multi-stage cutting, and vintage interior conditioning.</p>
          <span className="font-black text-xl text-[#D9381E] bg-white px-3 py-1 border-2 border-[#D9381E]">Quote Only</span>
        </div>
      </div>

      <div className="mt-20">
         <button className="bg-[#D9381E] text-white font-black text-xl md:text-2xl uppercase tracking-wider px-10 py-5 border-4 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a] hover:translate-y-1 hover:shadow-[4px_4px_0px_#1a1a1a] transition-all active:translate-y-2 active:shadow-none">
           Pull Into The Bay
         </button>
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
    // Choose the layout based on the variant
    switch (activeStyle.variant) {
      case "obsidian-eco": 
        return <ObsidianLayout item={activeStyle} onBack={goBack} />;
      case "night-vision": 
        return <NightVisionLayout item={activeStyle} onBack={goBack} />;
      case "vantage": 
        return <VantageLayout item={activeStyle} onBack={goBack} />;
      case "mud-sweat-gears": 
        return <MudLayout item={activeStyle} onBack={goBack} />;
      case "prism":
        return <PrismLayout item={activeStyle} onBack={goBack} />;
      case "detail-flow":
        return <DetailFlowLayout item={activeStyle} onBack={goBack} />;
      case "route-66":
      case "route66":
        return <Route66Layout item={activeStyle} onBack={goBack} />;
      default:
        // Expanded fallback to catch any unhandled variants with a clean detailing layout
        return <DetailFlowLayout item={activeStyle} onBack={goBack} />;
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
