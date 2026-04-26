import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeDefinition } from '../lib/themes';

interface ThemeDemoProps {
  theme: ThemeDefinition;
}

export default function ThemeDemo({ theme }: ThemeDemoProps) {
  
  // ==========================================
  // 01: OBSIDIAN ECO-CLEAN
  // ==========================================
  if (theme.slug === 'obsidian-eco') {
    return (
      <div className="min-h-screen bg-[#F5F5F1] text-[#2A2C2B] selection:bg-[#7C8982] selection:text-white font-sans relative overflow-hidden flex flex-col">
        <nav className="border-b border-[#D1D4CD] px-8 py-6 flex justify-between items-center relative z-10">
          <Link to="/" className="text-sm font-bold tracking-widest hover:text-[#7C8982] transition-colors flex items-center gap-3">
            <span className="text-lg">&larr;</span> All Styles
          </Link>
          <span className="text-sm font-bold tracking-widest uppercase text-[#1A1D20]">Obsidian</span>
          <button className="bg-[#7C8982] text-white px-8 py-3 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#5C6661] transition-colors">
            Contact
          </button>
        </nav>

        <main className="max-w-6xl mx-auto px-8 pt-24 pb-20 relative z-10 flex-grow w-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7C8982]"></div>
            <span className="text-[#7C8982] text-xs font-bold tracking-[0.2em] uppercase">01 — ECO · WATERLESS</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Detailing in harmony with the planet.
          </h1>

          <p className="text-[#5C6661] text-lg md:text-xl max-w-2xl mb-14 leading-relaxed font-medium">
            A quiet, monochrome studio for waterless and steam detailing — every surface treated with intention, every drop accounted for.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <button className="bg-[#7C8982] text-white font-bold px-8 py-4 rounded-full hover:bg-[#5C6661] transition-colors flex items-center gap-3">
              Book a Quiet Detail <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="border border-[#D1D4CD] text-[#2A2C2B] font-bold px-8 py-4 rounded-full hover:bg-white transition-colors bg-[#F5F5F1]">
              See Results
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#7C8982] mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>12+</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#5C6661] uppercase">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#7C8982] mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>2.4k</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#5C6661] uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#7C8982] mb-3 flex items-start" style={{ fontFamily: '"Playfair Display", serif' }}>
                4.9<span className="text-2xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#5C6661] uppercase">Rating</div>
            </div>
          </div>
        </main>

        <div className="w-full px-8 relative z-0 mt-auto">
          <div className="w-full h-48 bg-gradient-to-t from-[#B0B6B1] to-[#D5D8D4] rounded-t-[32px] border-t border-x border-white/20"></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 02: NIGHT VISION ARMOR
  // ==========================================
  if (theme.slug === 'night-vision') {
    return (
      <div className="min-h-screen bg-[#111315] text-white selection:bg-[#4ECDC4] selection:text-[#111315] font-sans relative overflow-hidden">
        <nav className="border-b border-[#2C3539] px-8 py-6 flex justify-between items-center relative z-10">
          <Link to="/" className="text-xs font-bold tracking-[0.2em] hover:text-[#4ECDC4] transition-colors flex items-center gap-3 uppercase">
            <span className="text-lg">&larr;</span> All Styles
          </Link>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-300">Night Vision</span>
          <button className="bg-[#4ECDC4] text-[#111315] px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">Contact</button>
        </nav>

        <main className="max-w-6xl mx-auto px-8 pt-24 pb-32 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse"></div>
            <span className="text-[#4ECDC4] font-mono text-[11px] tracking-[0.3em] uppercase">// 02_NIGHT_VISION_ARMOR</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.05] uppercase tracking-tighter">
            Armor your paint. <br /> Run silent. <br className="md:hidden" /> Run dark.
          </h1>

          <p className="font-mono text-gray-400 text-sm md:text-base max-w-2xl mb-14 leading-relaxed">
            Nano-ceramic coatings and self-healing paint <br className="hidden md:block" />
            protection film, calibrated by certified installers.
          </p>

          <div className="flex flex-wrap gap-4 mb-32">
            <button className="bg-[#4ECDC4] text-[#111315] font-mono font-bold px-8 py-5 tracking-[0.2em] text-[11px] hover:bg-[#3dbdb4] transition-colors flex items-center gap-4">
              [ INITIALIZE QUOTE ] <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="border border-[#2C3539] text-white font-mono font-bold px-10 py-5 tracking-[0.2em] text-[11px] hover:border-[#4ECDC4] hover:text-[#4ECDC4] transition-colors">
              See Results
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl border-t border-[#2C3539] pt-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-3">12+</div>
              <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-3">2.4k</div>
              <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-3 flex items-start">
                4.9<span className="text-2xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Rating</div>
            </div>
          </div>
        </main>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#4ECDC4]/10 to-transparent pointer-events-none blur-2xl"></div>
      </div>
    );
  }

  // ==========================================
  // 03: DETAILFLOW
  // ==========================================
  if (theme.slug === 'detail-flow' || theme.slug === 'detailflow') {
    return (
      <div className="min-h-screen bg-[#0B1221] text-white selection:bg-[#8BB0F9] selection:text-[#0B1221] font-sans relative overflow-hidden flex flex-col">
        <nav className="border-b border-white/10 px-8 py-5 flex justify-between items-center relative z-10">
          <Link to="/" className="text-sm font-medium hover:text-[#8BB0F9] transition-colors flex items-center gap-2">
            <span>&larr;</span> All Styles
          </Link>
          <span className="text-base font-bold tracking-tight">DetailFlow</span>
          <button className="bg-[#8BB0F9] text-[#0B1221] px-6 py-2 text-sm font-semibold rounded-full hover:bg-white transition-colors">Contact</button>
        </nav>

        <main className="max-w-5xl px-8 pt-24 pb-20 relative z-10 flex-grow">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#8BB0F9]"></div>
            <span className="text-[#8BB0F9] text-xs font-bold tracking-[0.2em] uppercase">Online Booking · 24/7</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Book your detail in 30 seconds.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
            Live availability, transparent pricing and SMS confirmations. Built for shops that ship work, not paperwork.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <button className="bg-[#8BB0F9] text-[#0B1221] font-semibold px-8 py-4 rounded-full hover:bg-[#a1c0fa] transition-colors flex items-center gap-2">
              Check Availability <span>&rarr;</span>
            </button>
            <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              See Results
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#8BB0F9] mb-2">12+</div>
              <div className="text-[11px] font-semibold tracking-[0.1em] text-gray-500 uppercase">Years</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#8BB0F9] mb-2">2.4k</div>
              <div className="text-[11px] font-semibold tracking-[0.1em] text-gray-500 uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#8BB0F9] mb-2 flex items-start">
                4.9<span className="text-xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[11px] font-semibold tracking-[0.1em] text-gray-500 uppercase">Rating</div>
            </div>
          </div>
        </main>

        <div className="w-full px-8 relative z-0 mt-auto">
          <div className="w-full h-64 bg-gradient-to-t from-[#8BB0F9]/40 to-[#8BB0F9]/10 rounded-t-[40px] border-t border-x border-white/10 backdrop-blur-md"></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 04: AERO SHINE
  // ==========================================
  if (theme.slug === 'aero-shine' || theme.slug === 'aeroshine') {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E53935] selection:text-white font-sans relative overflow-hidden flex flex-col">
        <nav className="border-b border-white/10 px-8 py-6 flex justify-between items-center relative z-10">
          <Link to="/" className="text-xs font-bold tracking-[0.2em] hover:text-[#E53935] transition-colors flex items-center gap-3 uppercase">
            <span className="text-lg">&larr;</span> All Styles
          </Link>
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-white">Aero Shine</span>
          <button className="bg-[#E53935] text-white px-8 py-3 text-xs font-bold tracking-[0.1em] uppercase rounded hover:bg-[#C62828] transition-colors">Contact</button>
        </nav>

        <main className="max-w-6xl mx-auto px-8 pt-24 pb-20 relative z-10 flex-grow w-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#E53935]"></div>
            <span className="text-[#E53935] text-xs font-bold tracking-[0.3em] uppercase">// VELOCITY · V6.0</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter uppercase">
            Paint correction at <br className="hidden md:block"/> race-team precision.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Multi-stage cutting, polishing and finishing — measured with paint-depth gauges and finished under controlled lighting.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <button className="bg-[#E53935] text-white font-bold px-8 py-4 tracking-[0.1em] rounded hover:bg-[#C62828] transition-colors flex items-center gap-3 uppercase text-sm">
              Start Correction <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="border border-[#2C3539] text-white font-bold px-8 py-4 tracking-[0.1em] rounded hover:border-[#4ECDC4] hover:text-[#E53935] transition-colors uppercase text-sm">
              See Results
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E53935] mb-2">12+</div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E53935] mb-2">2.4k</div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E53935] mb-2 flex items-start">
                4.9<span className="text-2xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Rating</div>
            </div>
          </div>
        </main>

        <div className="w-full px-8 relative z-0 mt-auto">
          <div className="w-full h-32 bg-gradient-to-t from-[#E53935]/60 to-[#E53935]/10 rounded-t-[16px] border-t border-x border-[#E53935]/30"></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 05: PRISM
  // ==========================================
  if (theme.slug === 'prism') {
    return (
      <div className="min-h-screen bg-[#0A0510] text-white selection:bg-[#FF5A9F] selection:text-white font-sans relative overflow-hidden flex flex-col">
        <nav className="border-b border-[#FF5A9F]/20 px-8 py-6 flex justify-between items-center relative z-10">
          <Link to="/" className="text-xs font-bold tracking-widest hover:text-[#FF5A9F] transition-colors flex items-center gap-3 uppercase">
            <span className="text-lg">&larr;</span> All Styles
          </Link>
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-white">Prism</span>
          <button className="bg-[#FF5A9F] text-[#0A0510] px-8 py-3 text-xs font-bold tracking-widest uppercase rounded-md hover:bg-[#FF7BB3] transition-colors">Contact</button>
        </nav>

        <main className="max-w-6xl mx-auto px-8 pt-24 pb-20 relative z-10 flex-grow w-full">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#FF5A9F] text-[10px] font-mono tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(255,90,159,0.5)]">
              ● ▲ PRISM_OS · ニューレトロ
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight uppercase">
            Wrap it. Light it. <br className="hidden md:block"/> Make it loud.
          </h1>

          <p className="text-[#FF5A9F]/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-mono">
            Full-vehicle vinyl wraps, color-shift films and custom finishes. Your car, broadcast in technicolor.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <button className="bg-[#FF5A9F] text-[#0A0510] font-bold px-8 py-4 tracking-[0.1em] rounded-md hover:bg-[#FF7BB3] transition-colors flex items-center gap-3 uppercase text-sm drop-shadow-[0_0_12px_rgba(255,90,159,0.3)]">
              <span className="text-[10px]">▸</span> Configure Wrap <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="border border-[#FF5A9F]/40 text-white font-bold px-8 py-4 tracking-[0.1em] rounded-md hover:border-[#FF5A9F] hover:text-[#FF5A9F] transition-colors uppercase text-sm bg-[#0A0510]">
              See Results
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF5A9F] mb-2 drop-shadow-[0_0_8px_rgba(255,90,159,0.4)]">12+</div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF5A9F] mb-2 drop-shadow-[0_0_8px_rgba(255,90,159,0.4)]">2.4k</div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF5A9F] mb-2 flex items-start drop-shadow-[0_0_8px_rgba(255,90,159,0.4)]">
                4.9<span className="text-2xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Rating</div>
            </div>
          </div>
        </main>

        <div className="w-full px-8 relative z-0 mt-auto">
          <div className="w-full h-48 bg-gradient-to-t from-[#B02868] to-[#FF5A9F] rounded-t-[16px] border-t border-x border-[#FF5A9F]/50 opacity-90 backdrop-blur-sm shadow-[0_0_40px_rgba(255,90,159,0.15)]"></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 06: VANTAGE
  // ==========================================
  if (theme.slug === 'vantage') {
    return (
      <div className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A] selection:bg-[#C2A476] selection:text-white font-sans relative overflow-hidden flex flex-col">
        <nav className="border-b border-[#E8E4D9] px-8 py-6 flex justify-between items-center relative z-10">
          <Link to="/" className="text-sm font-bold tracking-widest hover:text-[#C2A476] transition-colors flex items-center gap-3">
            <span className="text-lg">&larr;</span> All Styles
          </Link>
          <span className="text-base font-bold tracking-widest text-[#1A1A1A]" style={{ fontFamily: '"Playfair Display", serif' }}>
            Vantage
          </span>
          <button className="bg-[#C2A476] text-[#1A1A1A] px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#A88C5E] transition-colors">
            Contact
          </button>
        </nav>

        <main className="max-w-6xl mx-auto px-8 pt-24 pb-20 relative z-10 flex-grow w-full">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#C2A476] text-[10px] font-bold tracking-[0.3em] uppercase">
              <span className="mr-2">●</span> VOL. III · MEMBERS ONLY
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            An atelier for cars that deserve more than a wash.
          </h1>

          <p className="text-[#4A4A4A] text-lg md:text-xl max-w-2xl mb-14 leading-relaxed font-medium">
            By appointment only. White-glove detailing and concours-level preparation for collectors across Alberta.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <button className="bg-[#C2A476] text-[#1A1A1A] font-bold px-8 py-4 hover:bg-[#A88C5E] transition-colors flex items-center gap-3">
              Request Membership <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="border border-[#D1CDBF] text-[#1A1A1A] font-bold px-8 py-4 hover:border-[#C2A476] transition-colors bg-white/50 backdrop-blur-sm">
              See Results
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C2A476] mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>12+</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#6B6B6B] uppercase">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C2A476] mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>2.4k</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#6B6B6B] uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C2A476] mb-3 flex items-start" style={{ fontFamily: '"Playfair Display", serif' }}>
                4.9<span className="text-2xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#6B6B6B] uppercase">Rating</div>
            </div>
          </div>
        </main>

        <div className="w-full px-8 relative z-0 mt-auto">
          <div className="w-full h-32 bg-[#D4C3A3] border-t border-x border-[#C2A476]/30"></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 07: MUD, SWEAT & GEARS - CUSTOM LAYOUT
  // ==========================================
  if (theme.slug === 'mud-sweat-gears') {
    return (
      <div className="min-h-screen bg-[#FFD600] text-black selection:bg-black selection:text-[#FFD600] font-sans relative overflow-hidden flex flex-col">
        
        {/* Custom Theme Navigation */}
        <nav className="border-b-[3px] border-black px-8 py-6 flex justify-between items-center relative z-10">
          <Link 
            to="/" 
            className="text-sm font-black tracking-[0.2em] hover:opacity-70 transition-opacity flex items-center gap-3 uppercase"
          >
            <span className="text-lg">&larr;</span> All Styles
          </Link>
          <span className="text-sm font-black tracking-[0.3em] uppercase">
            Mud · Sweat · Gears
          </span>
          <button className="bg-black text-[#FFD600] px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-gray-800 transition-colors">
            Contact
          </button>
        </nav>

        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-8 pt-24 pb-20 relative z-10 flex-grow w-full">
          
          {/* Status Tag */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-black text-xs font-black tracking-[0.3em] uppercase">
              ● ★ EST. 2018 · YEG ALBERTA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-[5.5rem] font-black mb-10 leading-[1.05] tracking-tighter uppercase">
            We eat mud <br className="hidden md:block"/> for breakfast.
          </h1>

          {/* Body Copy */}
          <p className="text-gray-900 text-lg md:text-xl max-w-2xl mb-14 leading-relaxed font-semibold">
            Heavy-duty wash bays for trucks, lifted rigs and overland builds. No appointments. No nonsense.
          </p>

          {/* CTA Buttons - Brutalist Style */}
          <div className="flex flex-wrap gap-6 mb-24">
            <button className="bg-black text-[#FFD600] font-black px-8 py-4 uppercase tracking-widest text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-3 border-2 border-black">
              Get It Cleaned <span className="text-lg leading-none">&rarr;</span>
            </button>
            <button className="bg-[#FFD600] text-black border-4 border-black font-black px-8 py-4 uppercase tracking-widest text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              See Results
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">12+</div>
              <div className="text-[11px] font-black tracking-[0.2em] text-gray-800 uppercase">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">2.4k</div>
              <div className="text-[11px] font-black tracking-[0.2em] text-gray-800 uppercase">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2 flex items-start">
                4.9<span className="text-2xl mt-1 ml-1">★</span>
              </div>
              <div className="text-[11px] font-black tracking-[0.2em] text-gray-800 uppercase">Rating</div>
            </div>
          </div>
        </main>

        {/* Ambient Bottom Card Graphic (Matches mockup) */}
        <div className="w-full px-8 relative z-0 mt-auto">
          <div className="w-full h-40 bg-gradient-to-t from-black via-gray-800 to-gray-700 border-t-4 border-x-4 border-black"></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // DEFAULT / FALLBACK LAYOUT
  // ==========================================
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: theme.tokens.bg, color: theme.tokens.fg }}>
      <Link to="/" className="mb-8 opacity-50 hover:opacity-100 uppercase tracking-widest text-xs font-bold transition-opacity">
        &larr; Back to Gallery
      </Link>
      <h1 className="text-5xl font-black mb-4 uppercase" style={{ fontFamily: theme.tokens.fontHeading }}>
        {theme.title}
      </h1>
      <p className="text-xl opacity-70">Custom layout pending construction...</p>
    </div>
  );
}
