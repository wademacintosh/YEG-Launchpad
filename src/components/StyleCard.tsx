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
  | "lumina-spa"
  | "kinetic-street"
  | "vanguard-tactical";

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

/* ---------- 0. Generic Card (For New Styles) ---------- */
function GenericCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    onPreview?.(item);
  };

  return (
    <CardShell className="rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center justify-between mb-8">
          <CategoryBadge className="bg-gray-50 text-gray-500 border border-gray-100">{item.category}</CategoryBadge>
          <div className="h-1.5 w-1.5 rounded-full bg-black/20" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold tracking-tighter text-black uppercase">{item.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 font-medium">{item.tagline}</p>
        </div>
        <a
          href="#"
          onClick={handleClick}
          className="mt-10 block w-full rounded-xl border border-black py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white"
        >
          Preview Style
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 1. Obsidian Eco-Clean ---------- */
function ObsidianEcoCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-2xl border border-[#cfd8cf] shadow-sm" hoverClassName="hover:-translate-y-1">
      <div className="flex flex-1 flex-col p-7" style={{ backgroundColor: "#eef2ec" }}>
        <div className="flex items-center justify-between">
          <CategoryBadge className="bg-white/80 text-[#3a4a3d]">Modern</CategoryBadge>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#7A8C7E" }} />
        </div>
        <div className="my-10 flex flex-1 flex-col items-center justify-center text-center">
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: "#7A8C7E" }}>01 — Eco</span>
          <h3 className="mt-4 text-2xl font-medium leading-tight text-[#1f2a22]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Obsidian <br /> <em className="font-normal italic">Eco-Clean</em>
          </h3>
          <p className="mt-5 max-w-[14rem] text-sm leading-relaxed text-[#4a5a4d]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.tagline}</p>
        </div>
        <a href="#" onClick={handleClick} className="mt-auto w-full rounded-full border py-3 text-center text-xs font-medium uppercase tracking-[0.3em] transition-colors hover:bg-[#7A8C7E] hover:text-white" style={{ borderColor: "#7A8C7E", color: "#3a4a3d", fontFamily: "'Cormorant Garamond', serif" }}>
          Preview Style
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 2. Night Vision Armor ---------- */
function NightVisionCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="shadow-neon-cyan shadow-neon-cyan-hover rounded-md">
      <div className="flex flex-1 flex-col p-6" style={{ backgroundColor: "#1a1a1a", fontFamily: "'JetBrains Mono', monospace" }}>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-cyan-300/80">
          <span>// 02_NIGHT_VISION</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgb(34_211_238/0.9)]" />ONLINE</span>
        </div>
        <div className="my-6 flex flex-1 items-center justify-center">
           <div className="relative aspect-square w-32 border border-cyan-400/20 rounded-full flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgb(34_211_238/0.9)]" />
           </div>
        </div>
        <h3 className="text-base font-bold uppercase tracking-wider text-cyan-300">{item.title} <span className="animate-pulse text-cyan-400">_</span></h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">&gt; {item.tagline}</p>
        <a href="#" onClick={handleClick} className="mt-6 w-full rounded-sm border border-cyan-400/60 bg-cyan-400/5 py-3 text-center text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 transition-all hover:bg-cyan-400/15 hover:shadow-[0_0_16px_rgb(34_211_238/0.5)]">
          [ Preview Style ]
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 3. The Vantage Collective ---------- */
function VantageCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="rounded-none border border-[#0a1628]/15 shadow-sm">
      <div className="flex flex-1 flex-col px-8 py-9" style={{ backgroundColor: "#f5f1ea" }}>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em]" style={{ color: "#0a1628" }}>
          <span style={{ fontFamily: "'Playfair Display', serif" }}>Vol. III</span>
          <span style={{ color: "#B89766" }}>— Luxury —</span>
        </div>
        <div className="my-10 flex-1">
          <h3 className="mt-3 text-3xl font-bold leading-[1] tracking-tight" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
            The <br /> <span style={{ color: "#B89766" }}>Vantage</span> <br /> Collective.
          </h3>
        </div>
        <p className="mb-8 border-t pt-5 text-xs leading-relaxed border-[#B89766]" style={{ color: "#3a4555", fontFamily: "'Playfair Display', serif" }}>{item.tagline}</p>
        <a href="#" onClick={handleClick} className="group/btn flex items-center justify-between border-t pt-4 text-[11px] uppercase tracking-[0.3em] border-[#0a1628]" style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
          Preview Style <span className="transition-transform group-hover/btn:translate-x-1" style={{ color: "#B89766" }}>→</span>
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- 4. Mud, Sweat & Gears ---------- */
function MudSweatGearsCard({ item, onPreview }: StyleCardProps) {
  const handleClick = (e: MouseEvent) => { e.preventDefault(); onPreview?.(item); };
  return (
    <CardShell className="shadow-brutal shadow-brutal-hover rounded-none border-4 border-black">
      <div className="flex flex-1 flex-col p-5" style={{ backgroundColor: "#FFD400", fontFamily: "'Archivo Black', sans-serif" }}>
        <div className="flex items-center justify-between">
          <span className="bg-black px-2 py-1 text-[10px] font-black uppercase text-[#FFD400]">★ RUGGED</span>
        </div>
        <h3 className="mt-6 text-[2rem] font-black uppercase leading-[0.92] text-black">MUD, <br /> SWEAT <br /> & GEARS.</h3>
        <p className="mt-5 flex-1 text-sm font-bold leading-snug text-black">{item.tagline}</p>
        <a href="#" onClick={handleClick} className="mt-5 w-full border-4 border-black bg-black py-3 text-center text-sm font-black uppercase text-[#FFD400] hover:bg-[#FFD400] hover:text-black">
          → PREVIEW STYLE
        </a>
      </div>
    </CardShell>
  );
}

/* ---------- Dispatcher ---------- */
export function StyleCard({ item, onPreview }: StyleCardProps) {
  switch (item.variant) {
    case "obsidian-eco":
      return <ObsidianEcoCard item={item} onPreview={onPreview} />;
    case "night-vision":
      return <NightVisionCard item={item} onPreview={onPreview} />;
    case "vantage":
      return <VantageCard item={item} onPreview={onPreview} />;
    case "mud-sweat-gears":
      return <MudSweatGearsCard item={item} onPreview={onPreview} />;
    // New and other styles use the GenericCard until specific UI is built
    case "prism":
    case "detailflow":
    case "route66":
    case "aero-shine":
    case "lumina-spa":
    case "kinetic-street":
    case "vanguard-tactical":
      return <GenericCard item={item} onPreview={onPreview} />;
    default:
      return <GenericCard item={item} onPreview={onPreview} />;
  }
}
