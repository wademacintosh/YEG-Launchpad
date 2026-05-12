import { type ReactNode, type MouseEvent } from "react";

export type StyleCategory = "Luxury" | "Rugged" | "Modern" | "Commercial" | "Performance" | "Mobile";

export type StyleVariant =
  // Original 1-11
  | "obsidian-eco"
  | "night-vision"
  | "vantage"
  | "mud-sweat-gears"
  | "detailflow"
  | "aero-shine"
  | "route66"
  | "prism"
  | "lumina-ceramic"
  | "kinetic-coatings"
  | "vanguard-armor"
  // New 12-16
  | "apex-fleet"
  | "midnight-syndicate"
  | "track-spec"
  | "aquaflow-mobile"
  | "jdm-tokyo";

export interface StyleItem {
  title: string;
  tagline: string;
  category: StyleCategory;
  variant: StyleVariant;
}

interface StyleCardProps {
  item: StyleItem;
  onPreview?: (item: StyleItem) => void;
}

/* ---------- Shared Building Blocks ---------- */
function CategoryBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${className}`}>
      {children}
    </span>
  );
}

function CardShell({ children, className = "", hoverClassName = "hover:-translate-y-1 hover:scale-[1.02]" }: { children: ReactNode; className?: string; hoverClassName?: string }) {
  return (
    <article className={`group relative flex h-full flex-col overflow-hidden transition-all duration-300 ${hoverClassName} ${className}`}>
      {children}
    </article>
  );
}

/* ---------- 1-8: Existing Styles (Kept for consistency) ---------- */
// ... (Obsidian, Night Vision, Vantage, Mud, Prism, DetailFlow, Route 66, Aero Shine) ...
// Note: Ensure your local file keeps the code for these 8 styles!

/* ---------- 9. Lumina Ceramic ---------- */
function LuminaCeramicCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-3xl border border-blue-100 shadow-[0_10px_40px_-15px_rgba(186,230,253,0.5)]">
      <div className="flex flex-1 flex-col p-8 bg-gradient-to-b from-[#fdfcfb] to-[#e2ebf0]">
        <div className="flex justify-between items-start">
          <CategoryBadge className="bg-white text-blue-500 border border-blue-100 font-bold text-[9px]">9H CERAMIC</CategoryBadge>
          <span className="text-[10px] text-blue-300 font-mono tracking-tighter">SIO2_ULTRA</span>
        </div>
        <div className="my-10 flex-1 text-center">
          <h3 className="text-2xl font-light tracking-widest text-slate-800 uppercase" style={{ fontFamily: "serif" }}>Lumina <span className="block italic text-blue-500 text-3xl mt-1">Ceramic</span></h3>
          <div className="h-px w-12 bg-blue-200 mx-auto my-6" />
          <p className="text-xs leading-relaxed text-slate-500 max-w-[15rem] mx-auto italic">
            Multi-stage paint correction and liquid-glass finishing for a permanent showroom shine.
          </p>
        </div>
        <a href="#" onClick={handleClick} className="w-full rounded-full bg-white py-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 border border-blue-100 shadow-sm transition-all hover:bg-blue-500 hover:text-white">
          Preview Gloss Mode
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 10. Kinetic Coatings ---------- */
function KineticCoatingsCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-none border-t-4 border-blue-600 shadow-xl">
      <div className="flex flex-1 flex-col p-6 bg-slate-50 relative">
        <span className="text-[9px] font-black italic text-blue-600 tracking-tighter uppercase mb-4">// RAPID_APPLICATION</span>
        <h3 className="text-3xl font-black italic uppercase leading-[0.8] text-slate-900 mb-4">Kinetic <span className="text-blue-600">Coatings.</span></h3>
        <p className="text-xs font-bold leading-tight text-slate-400 flex-1 border-l-2 border-slate-200 pl-4 mb-8">
          Express high-velocity detailing and polymer sealant systems for daily drivers on the move.
        </p>
        <a href="#" onClick={handleClick} className="w-full bg-blue-600 py-4 text-center text-xs font-black italic uppercase tracking-widest text-white transform skew-x-[-12deg] hover:bg-slate-900 transition-colors">
          Initiate Detail →
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 11. Vanguard Armor ---------- */
function VanguardArmorCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-xl border-2 border-stone-800 shadow-2xl">
      <div className="flex flex-1 flex-col p-6 bg-stone-900 text-stone-200">
        <div className="flex justify-between items-center mb-6 border-b border-stone-700 pb-4">
          <CategoryBadge className="bg-stone-800 text-stone-400 border border-stone-700">Paint Defense</CategoryBadge>
          <div className="flex gap-1"><div className="h-1 w-1 bg-red-600" /><div className="h-1 w-1 bg-stone-600" /><div className="h-1 w-1 bg-stone-600" /></div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold tracking-tighter uppercase text-white mb-2 font-mono">[ VANGUARD_ARMOR ]</h3>
          <p className="text-xs text-stone-500 font-mono leading-relaxed mb-8 italic">
            Heavy-duty Paint Protection Film (PPF) and 10-mil ballistic-grade defense for off-road fleet builds.
          </p>
        </div>
        <a href="#" onClick={handleClick} className="group flex items-center justify-center gap-4 bg-stone-100 py-4 text-black text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all">
          <span className="opacity-30">|</span> Preview Armor Protection <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 12. Apex Fleet Solutions (Corporate / Serious) ---------- */
function ApexFleetCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-sm border-t-4 border-t-[#265077] border-x border-b border-[#022140]/10 shadow-lg">
      <div className="flex flex-1 flex-col p-6 bg-[#022140] text-[#D1D7E0] bg-apex-corporate">
        <div className="flex justify-between items-center mb-6">
          <CategoryBadge className="bg-[#265077] text-white">Commercial</CategoryBadge>
          <span className="text-[10px] text-[#2D5F5D] font-serif uppercase tracking-[0.2em]">B2B Contract</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">Apex Fleet</h3>
          <div className="h-[1px] w-full bg-[#265077] mb-4" />
          <p className="text-xs text-[#D1D7E0]/80 leading-relaxed font-sans mb-8">
            Executive-class maintenance and marine/fleet detailing. Scalable, reliable, and insured for high-volume accounts.
          </p>
        </div>
        <a href="#" onClick={handleClick} className="group flex justify-center items-center bg-[#265077] px-6 py-3 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#2D5F5D] transition-colors rounded-sm">
          Review Contract <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 13. Midnight Syndicate (Accent Colors That Pop) ---------- */
function MidnightSyndicateCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-2xl border border-[#564F6F] bg-[#2D283E] shadow-midnight-neon">
      <div className="flex flex-1 flex-col p-6 text-[#D1D7E0]">
        <div className="flex justify-end mb-4">
          <div className="w-8 h-1 bg-[#802BB1] rounded-full shadow-[0_0_10px_rgba(128,43,177,0.8)]" />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold uppercase text-white mb-2 tracking-tight" style={{ fontFamily: "sans-serif" }}>
            Midnight <br/><span className="text-[#802BB1]">Syndicate</span>
          </h3>
          <p className="text-[11px] text-[#D1D7E0]/70 leading-relaxed mt-4 font-medium max-w-[90%]">
            Exotic color-change vinyl wraps, starlight headliners, and exclusive aesthetics for the elite.
          </p>
        </div>
        <a href="#" onClick={handleClick} className="mt-8 group w-full flex items-center justify-between bg-[#802BB1] text-white px-5 py-4 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#2D283E] transition-all">
          Enter Studio <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 14. Track-Spec Auto (Gorgeous Contrast) ---------- */
function TrackSpecCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-sm border-l-4 border-l-[#86C232] border-t border-r border-b border-[#474B4F] shadow-2xl relative overflow-hidden bg-track-grid bg-[#222629]">
      <div className="absolute inset-0 bg-[#222629]/90 z-0 pointer-events-none" />
      <div className="flex flex-1 flex-col p-6 text-white relative z-10">
        <div className="flex justify-between items-center mb-6">
          <CategoryBadge className="bg-[#474B4F] text-[#86C232] rounded-none">Track Prep</CategoryBadge>
          <span className="text-[#86C232] font-mono text-[10px] tracking-widest uppercase animate-pulse">
            Sys_Active
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-black tracking-tighter uppercase text-white mb-2 transform -skew-x-6" style={{ fontFamily: "sans-serif" }}>
            Track-Spec
          </h3>
          <p className="text-[11px] text-[#6B6E70] font-mono leading-relaxed mb-8 border-l border-[#86C232]/30 pl-3">
            High-tolerance decontamination and aero-slick coatings for track days and performance EV builds.
          </p>
        </div>
        <a href="#" onClick={handleClick} className="group flex items-center justify-between bg-[#86C232] px-6 py-3 text-[#222629] text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all rounded-sm transform -skew-x-6">
          Initialize <span className="group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 15. AquaFlow Mobile (Clean and Energetic) ---------- */
function AquaFlowMobileCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-[2rem] border border-white/60 shadow-xl bg-gradient-to-br from-[#C1C8E4] to-[#84CEEB]/30">
      <div className="flex flex-1 flex-col p-6 text-[#5680E9] backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-[#5680E9] flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5680E9]/80">Mobile App</span>
        </div>
        <div className="flex-1 text-center mt-2">
          <h3 className="text-3xl font-extrabold tracking-tight mb-3" style={{ fontFamily: "sans-serif" }}>
            AquaFlow
          </h3>
          <p className="text-xs text-[#5680E9]/70 font-medium leading-relaxed max-w-[200px] mx-auto">
            Waterless eco-washes and interior resets brought directly to your driveway. Tap to book.
          </p>
        </div>
        <a href="#" onClick={handleClick} className="mt-8 block w-full text-center bg-[#5680E9] text-white px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#84CEEB] hover:text-[#5680E9] transition-all shadow-[0_8px_20px_rgba(86,128,233,0.3)]">
          Open App
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 16. JDM Tokyo Nights (Vivid and Sharp) ---------- */
function JDMTokyoCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-none border-2 border-[#D83F87] shadow-jdm-glow bg-[#2A1B3D]">
      <div className="flex flex-1 flex-col p-6 text-white relative overflow-hidden">
        {/* Decorative Grid Graphic */}
        <div className="absolute -right-6 -top-6 w-24 h-24 border border-[#E98074]/30 rotate-45 pointer-events-none" />
        <div className="absolute -right-8 -top-8 w-24 h-24 border border-[#D83F87]/20 rotate-45 pointer-events-none" />
        
        <div className="flex justify-between items-start mb-8 relative z-10">
          <CategoryBadge className="bg-[#D83F87] text-white rounded-none border border-[#E98074]">Tuner</CategoryBadge>
          <span className="text-[10px] text-[#E98074] font-black tracking-widest uppercase">
            // DRIFT_SPEC
          </span>
        </div>
        <div className="flex-1 relative z-10">
          <h3 className="text-3xl font-black uppercase text-white mb-2 leading-none text-jdm-glow" style={{ fontFamily: "sans-serif" }}>
            Tokyo<br/>Nights.
          </h3>
          <p className="text-[10px] text-[#D1D7E0] mt-4 leading-relaxed uppercase tracking-widest font-mono border-l-2 border-[#D83F87] pl-3">
            Show-car prep, vibrant paint correction, and aesthetic tuning for the import scene.
          </p>
        </div>
        <a href="#" onClick={handleClick} className="mt-6 relative z-10 group flex items-center justify-center bg-transparent border-2 border-[#D83F87] text-[#D83F87] px-6 py-3 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#D83F87] hover:text-white transition-all shadow-jdm-glow">
          Launch Build
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- Dispatcher ---------- */
export function StyleCard({ item, onPreview }: StyleCardProps) {
  switch (item.variant) {
    // case "obsidian-eco": return <ObsidianEcoCard item={item} onPreview={onPreview} />;
    // case "night-vision": return <NightVisionCard item={item} onPreview={onPreview} />;
    // case "vantage": return <VantageCard item={item} onPreview={onPreview} />;
    // case "mud-sweat-gears": return <MudSweatGearsCard item={item} onPreview={onPreview} />;
    // case "prism": return <PrismCard item={item} onPreview={onPreview} />;
    // case "detailflow": return <DetailFlowCard item={item} onPreview={onPreview} />;
    // case "route66": return <Route66Card item={item} onPreview={onPreview} />;
    // case "aero-shine": return <AeroShineCard item={item} onPreview={onPreview} />;
    case "lumina-ceramic": return <LuminaCeramicCard item={item} onPreview={onPreview} />;
    case "kinetic-coatings": return <KineticCoatingsCard item={item} onPreview={onPreview} />;
    case "vanguard-armor": return <VanguardArmorCard item={item} onPreview={onPreview} />;
    case "apex-fleet": return <ApexFleetCard item={item} onPreview={onPreview} />;
    case "midnight-syndicate": return <MidnightSyndicateCard item={item} onPreview={onPreview} />;
    case "track-spec": return <TrackSpecCard item={item} onPreview={onPreview} />;
    case "aquaflow-mobile": return <AquaFlowMobileCard item={item} onPreview={onPreview} />;
    case "jdm-tokyo": return <JDMTokyoCard item={item} onPreview={onPreview} />;
    default: return null;
  }
}
