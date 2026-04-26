import { type ReactNode } from "react";
import Link from "next/link"; // Added for page navigation

export type StyleCategory = "Luxury" | "Rugged" | "Modern";

export type StyleVariant =
  | "obsidian-eco"
  | "night-vision"
  | "vantage"
  | "mud-sweat-gears"
  | "detailflow"
  | "aero-shine"
  | "route66"
  | "prism";

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

/* ---------- Shared building blocks ---------- */
function CategoryBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </span>
  );
}

function CardShell({
  children,
  className = "",
  hoverClassName = "hover:-translate-y-1 hover:scale-[1.02]",
}: {
  children: ReactNode;
  className?: string;
  hoverClassName?: string;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden transition-all duration-300 ${hoverClassName} ${className}`}
    >
      {children}
    </article>
  );
}

/* ---------- 1. Obsidian Eco-Clean ---------- */
function ObsidianEcoCard({ item }: StyleCardProps) {
  return (
    <CardShell
      className="rounded-2xl border border-[#cfd8cf] shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_-12px_rgb(0_0_0/0.12)] hover:shadow-[0_24px_48px_-20px_rgb(122_140_126/0.45)]"
      hoverClassName="hover:-translate-y-1"
    >
      <div className="flex flex-1 flex-col p-7" style={{ backgroundColor: "#eef2ec" }}>
        <div className="flex items-center justify-between">
          <CategoryBadge className="bg-white/80 text-[#3a4a3d]">Modern</CategoryBadge>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#7A8C7E" }} />
        </div>
        <div className="my-10 flex flex-1 flex-col items-center justify-center text-center">
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: "#7A8C7E" }}>
            01 — Eco
          </span>
          <h3
            className="mt-4 text-2xl font-medium leading-tight text-[#1f2a22]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Obsidian <br /> <em className="font-normal italic">Eco-Clean</em>
          </h3>
          <div className="mt-5 h-px w-12" style={{ backgroundColor: "#7A8C7E" }} />
          <p
            className="mt-5 max-w-[14rem] text-sm leading-relaxed text-[#4a5a4d]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {item.tagline}
          </p>
        </div>
        <Link
          href={`/preview/${item.variant}`}
          className="mt-auto w-full rounded-full border py-3 text-center text-xs font-medium uppercase tracking-[0.3em] transition-colors hover:bg-[#7A8C7E] hover:text-white"
          style={{
            borderColor: "#7A8C7E",
            color: "#3a4a3d",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Preview Style
        </Link>
      </div>
    </CardShell>
  );
}

/* ---------- 2. Night Vision Armor ---------- */
function NightVisionCard({ item }: StyleCardProps) {
  return (
    <CardShell
      className="shadow-neon-cyan shadow-neon-cyan-hover rounded-md"
      hoverClassName="hover:-translate-y-1"
    >
      <div
        className="flex flex-1 flex-col p-6"
        style={{ backgroundColor: "#1a1a1a", fontFamily: "'JetBrains Mono', monospace" }}
      >
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-cyan-300/80">
          <span>// 02_NIGHT_VISION</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgb(34_211_238/0.9)]" />
            ONLINE
          </span>
        </div>
        <div className="my-6 flex flex-1 items-center justify-center">
          <div className="relative aspect-square w-32">
            <div className="absolute inset-0 rounded-full border border-cyan-400/40" />
            <div className="absolute inset-3 rounded-full border border-cyan-400/30" />
            <div className="absolute inset-7 rounded-full border border-cyan-400/20" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-400/40" />
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-cyan-400/40" />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgb(34_211_238/0.9)]" />
          </div>
        </div>
        <h3 className="text-base font-bold uppercase tracking-wider text-cyan-300">
          {item.title} <span className="animate-pulse text-cyan-400">_</span>
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">&gt; {item.tagline}</p>
        <Link
          href={`/preview/${item.variant}`}
          className="mt-6 w-full rounded-sm border border-cyan-400/60 bg-cyan-400/5 py-3 text-center text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 transition-all hover:bg-cyan-400/15 hover:text-cyan-200 hover:shadow-[0_0_16px_rgb(34_211_238/0.5)]"
        >
          [ Preview Style ]
        </Link>
      </div>
    </CardShell>
  );
}

/* ---------- 3. The Vantage Collective ---------- */
function VantageCard({ item }: StyleCardProps) {
  return (
    <CardShell
      className="rounded-none border border-[#0a1628]/15 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_12px_30px_-16px_rgb(10_22_40/0.4)] hover:shadow-[0_24px_60px_-24px_rgb(184_151_102/0.45)]"
      hoverClassName="hover:-translate-y-1"
    >
      <div className="flex flex-1 flex-col px-8 py-9" style={{ backgroundColor: "#f5f1ea" }}>
        <div
          className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em]"
          style={{ color: "#0a1628" }}
        >
          <span style={{ fontFamily: "'Playfair Display', serif" }}>Vol. III</span>
          <span style={{ color: "#B89766" }}>— Luxury —</span>
        </div>
        <div className="my-10 flex-1">
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: "#B89766" }}>
            The Collection
          </span>
          <h3
            className="mt-3 text-3xl font-bold leading-[1] tracking-tight"
            style={{ color: "#0a1628", fontFamily: "'Playfair Display', serif" }}
          >
            The <br /> <span style={{ color: "#B89766" }}>Vantage</span> <br /> Collective.
          </h3>
        </div>
        <p
          className="mb-8 border-t pt-5 text-xs leading-relaxed"
          style={{
            borderColor: "#B89766",
            color: "#3a4555",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {item.tagline}
        </p>
        <Link
          href={`/preview/${item.variant}`}
          className="group/btn flex items-center justify-between border-t pt-4 text-[11px] uppercase tracking-[0.3em] transition-colors"
          style={{
            borderColor: "#0a1628",
            color: "#0a1628",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Preview Style
          <span className="transition-transform group-hover/btn:translate-x-1" style={{ color: "#B89766" }}>
            →
          </span>
        </Link>
      </div>
    </CardShell>
  );
}

/* ---------- 4. Mud, Sweat & Gears ---------- */
function MudSweatGearsCard({ item }: StyleCardProps) {
  return (
    <CardShell className="shadow-brutal shadow-brutal-hover rounded-none border-4 border-black" hoverClassName="">
      <div
        className="flex flex-1 flex-col p-5"
        style={{ backgroundColor: "#FFD400", fontFamily: "'Archivo Black', 'Space Grotesk', sans-serif" }}
      >
        <div className="flex items-center justify-between">
          <span className="border-2 border-black bg-black px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#FFD400]">
            ★ RUGGED
          </span>
          <span className="text-[10px] font-black uppercase text-black">NO. 04</span>
        </div>
        <h3 className="mt-6 text-[2rem] font-black uppercase leading-[0.92] tracking-tight text-black">
          MUD, <br /> SWEAT <br /> &amp; GEARS.
        </h3>
        <div className="my-5 h-1 w-full bg-black" />
        <p className="flex-1 text-sm font-bold leading-snug text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {item.tagline}
        </p>
        <Link
          href={`/preview/${item.variant}`}
          className="mt-5 w-full border-4 border-black bg-black py-3 text-center text-sm font-black uppercase tracking-widest text-[#FFD400] transition-colors hover:bg-[#FFD400] hover:text-black"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          → PREVIEW STYLE
        </Link>
      </div>
    </CardShell>
  );
}

/* ---------- 5. DetailFlow Pro ---------- */
function DetailFlowCard({ item }: StyleCardProps) {
  return (
    <CardShell className="rounded-3xl" hoverClassName="hover:-translate-y-1 hover:scale-[1.02]">
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 0% 0%, #60a5fa 0%, transparent 55%), radial-gradient(120% 80% at 100% 100%, #c084fc 0%, transparent 55%), linear-gradient(135deg, #1e3a8a, #0f172a)",
          }}
        />
        <div aria-hidden="true" className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
        <div className="relative m-3 flex flex-1 flex-col rounded-2xl border border-white/30 bg-white/15 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.4)] backdrop-blur-md">
          <div className="flex items-center justify-between">
            <CategoryBadge className="border border-white/40 bg-white/20 text-white backdrop-blur">
              Modern · SaaS
            </CategoryBadge>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div className="my-8 flex-1 space-y-2">
            <div className="h-2 w-2/3 rounded-full bg-white/40" />
            <div className="h-2 w-1/2 rounded-full bg-white/25" />
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-xl border border-white/30 bg-white/15 backdrop-blur" />
              <div className="h-12 rounded-xl border border-white/30 bg-white/25 backdrop-blur" />
              <div className="h-12 rounded-xl border border-white/30 bg-white/15 backdrop-blur" />
            </div>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white drop-shadow">{item.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-white/80">{item.tagline}</p>
          <Link
            href={`/preview/${item.variant}`}
            className="mt-5 w-full rounded-full border border-white/40 bg-white/25 py-2.5 text-center text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/35 hover:shadow-[0_8px_24px_-8px_rgb(255_255_255/0.4)]"
          >
            Preview Style
          </Link>
        </div>
      </div>
    </CardShell>
  );
}

/* ---------- 6. Aero Shine Labs ---------- */
function AeroShineCard({ item }: StyleCardProps) {
  return (
    <CardShell
      className="rounded-xl border border-[#e10600]/40 shadow-[0_8px_30px_-12px_rgb(225_6_0/0.3)] hover:shadow-[0_20px_40px_-12px_rgb(225_6_0/0.6)]"
      hoverClassName="hover:-translate-y-1"
    >
      <div className="bg-carbon-fiber relative flex flex-1 flex-col p-6 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
          style={{
            background: "linear-gradient(110deg, transparent 40%, rgb(225 6 0 / 0.18) 60%, transparent 80%)",
          }}
        />
        <div className="relative flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#e10600] px-2 py-1 text-[10px] font-bold uppercase italic tracking-wider">
            ⚡ AERO LAB
          </span>
          <span className="text-[10px] font-mono italic text-white/60">v6.0 / RPM</span>
        </div>
        <div className="relative my-8 flex flex-1 flex-col justify-center">
          <span
            className="text-[10px] uppercase italic tracking-[0.3em] text-[#e10600]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            // velocity
          </span>
          <h3
            className="mt-2 text-3xl font-black italic leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AERO <br /> <span className="text-[#e10600]">SHINE</span> <br /> LABS<span className="text-[#e10600]">.</span>
          </h3>
        </div>
        <p className="relative text-xs italic leading-relaxed text-white/75" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {item.tagline}
        </p>
        <Link
          href={`/preview/${item.variant}`}
          className="relative mt-5 w-full overflow-hidden rounded-sm border-l-4 border-[#e10600] bg-white/5 py-3 text-center text-xs font-bold uppercase italic tracking-[0.25em] text-white backdrop-blur transition-all hover:bg-[#e10600] hover:border-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Preview Style →
        </Link>
      </div>
    </CardShell>
  );
}

/* ---------- 7. Route 66 Revive ---------- */
function Route66Card({ item }: StyleCardProps) {
  return (
    <CardShell
      className="rounded-xl border-2 border-[#1f1f1f] shadow-[4px_4px_0_0_#1f1f1f] hover:shadow-[6px_6px_0_0_#1f1f1f]"
      hoverClassName="hover:-translate-y-1 hover:-translate-x-0.5"
    >
      <div className="relative flex flex-1 flex-col p-6" style={{ backgroundColor: "#f7eed7" }}>
        <div
          aria-hidden="true"
          className="absolute inset-3 rounded-lg border-2 border-dashed"
          style={{ borderColor: "#0d8a8a" }}
        />
        <div className="relative flex items-center justify-between">
          <span
            className="rounded-full border-2 border-[#7C1D1D] bg-[#f7eed7] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#7C1D1D]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ★ EST. 1955
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-widest text-[#7C1D1D]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            RTE 66
          </span>
        </div>
        <div className="relative my-6 flex-1 text-center">
          <span
            className="block text-[11px] uppercase tracking-[0.35em] text-[#7C1D1D]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Welcome to
          </span>
          <h3 className="mt-2 text-5xl leading-none" style={{ fontFamily: "'Pacifico', cursive", color: "#0d8a8a" }}>
            Route 66
          </h3>
          <span
            className="mt-1 block text-2xl font-black uppercase tracking-tight text-[#1f1f1f]"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            REVIVE
          </span>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2 text-[#7C1D1D]">
            <span className="h-px w-8 bg-current" />
            <span className="text-xs">✦</span>
            <span className="h-px w-8 bg-current" />
          </div>
          <p className="mx-auto mt-3 max-w-[15rem] text-xs leading-relaxed text-[#3a2a2a]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {item.tagline}
          </p>
        </div>
        <Link
          href={`/preview/${item.variant}`}
          className="shadow-sticker shadow-sticker-hover relative w-full rounded-full border-2 border-[#1f1f1f] bg-[#7C1D1D] py-3 text-center text-sm font-black uppercase tracking-wider text-[#f7eed7] transition-all"
        >
          Preview Style
        </Link>
      </div>
    </CardShell>
  );
}

/* ---------- 8. Prism Auto-Works ---------- */
function PrismCard({ item }: StyleCardProps) {
  return (
    <CardShell
      className="rounded-xl border border-fuchsia-500/40 shadow-[0_8px_30px_-8px_rgb(217_70_239/0.5)] hover:shadow-[0_20px_50px_-10px_rgb(217_70_239/0.8)]"
      hoverClassName="hover:-translate-y-1"
    >
      <div
        className="relative flex flex-1 flex-col overflow-hidden p-6"
        style={{
          backgroundColor: "#0a0014",
          backgroundImage:
            "radial-gradient(120% 80% at 0% 0%, rgba(217,70,239,0.45) 0%, transparent 55%), radial-gradient(120% 80% at 100% 100%, rgba(124,58,237,0.55) 0%, transparent 55%), linear-gradient(180deg, #1a0030 0%, #0a0014 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(236,72,153,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(236,72,153,0.4) 1px, transparent 1px)",
            backgroundSize: "100% 18px, 22px 100%",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            transform: "perspective(220px) rotateX(55deg)",
            transformOrigin: "bottom",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-12 h-24 w-24 -translate-x-1/2 rounded-full"
          style={{
            background: "linear-gradient(180deg, #fef08a 0%, #f472b6 50%, #c026d3 100%)",
            boxShadow: "0 0 60px rgba(236,72,153,0.6)",
          }}
        />
        <div className="relative flex items-center justify-between">
          <span
            className="rounded-sm border border-fuchsia-400/60 bg-black/40 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-fuchsia-300"
            style={{ fontFamily: "'VT323', monospace", letterSpacing: "0.2em" }}
          >
            ▲ PRISM_OS
          </span>
          <span className="text-[11px] uppercase tracking-widest text-cyan-300" style={{ fontFamily: "'VT323', monospace" }}>
            ニューレトロ
          </span>
        </div>
        <div className="relative mt-32 flex-1">
          <h3
            className="glitch-text glitch-text-target text-2xl font-black uppercase leading-[0.95] tracking-tight text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PRISM <br /> AUTO-WORKS
          </h3>
          <p
            className="mt-3 text-xs leading-relaxed text-fuchsia-200/85"
            style={{ fontFamily: "'VT323', monospace", fontSize: "14px" }}
          >
            {item.tagline}
          </p>
        </div>
        <Link
          href={`/preview/${item.variant}`}
          className="relative mt-5 w-full overflow-hidden rounded-md py-3 text-center text-sm font-bold uppercase tracking-[0.25em] text-white transition-all hover:tracking-[0.3em]"
          style={{
            background: "linear-gradient(90deg, #c026d3 0%, #7c3aed 50%, #ec4899 100%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 8px 24px -8px rgba(217,70_239,0.6)",
          }}
        >
          ▸ Preview Style
        </Link>
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
    case "detailflow":
      return <DetailFlowCard item={item} onPreview={onPreview} />;
    case "aero-shine":
      return <AeroShineCard item={item} onPreview={onPreview} />;
    case "route66":
      return <Route66Card item={item} onPreview={onPreview} />;
    case "prism":
      return <PrismCard item={item} onPreview={onPreview} />;
  }
}
