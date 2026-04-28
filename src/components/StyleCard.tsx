import { type ReactNode, type MouseEvent } from "react";

export type StyleCategory = "Luxury" | "Rugged" | "Modern";

export type StyleVariant =
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
  | "vanguard-armor";

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

/* ---------- 9. Lumina Ceramic (Pure Gloss & Correction) ---------- */
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

/* ---------- 10. Kinetic Coatings (High-Speed Detail) ---------- */
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

/* ---------- 11. Vanguard Armor (Ultimate PPF Defense) ---------- */
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

/* ---------- Dispatcher ---------- */
export function StyleCard({ item, onPreview }: StyleCardProps) {
  switch (item.variant) {
    case "obsidian-eco": return <ObsidianEcoCard item={item} onPreview={onPreview} />;
    case "night-vision": return <NightVisionCard item={item} onPreview={onPreview} />;
    case "vantage": return <VantageCard item={item} onPreview={onPreview} />;
    case "mud-sweat-gears": return <MudSweatGearsCard item={item} onPreview={onPreview} />;
    case "prism": return <PrismCard item={item} onPreview={onPreview} />;
    case "detailflow": return <DetailFlowCard item={item} onPreview={onPreview} />;
    case "route66": return <Route66Card item={item} onPreview={onPreview} />;
    case "aero-shine": return <AeroShineCard item={item} onPreview={onPreview} />;
    case "lumina-ceramic": return <LuminaCeramicCard item={item} onPreview={onPreview} />;
    case "kinetic-coatings": return <KineticCoatingsCard item={item} onPreview={onPreview} />;
    case "vanguard-armor": return <VanguardArmorCard item={item} onPreview={onPreview} />;
    default: return null;
  }
}
