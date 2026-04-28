export interface Theme {
  id: string;
  name: string;
  description: string;
  containerClass: string;
  buttonClass: string;
  accentColor: string;
  strategy: string;
}

export const themes: Record<string, Theme> = {
  "eco-clean": {
    id: "eco-clean",
    name: "Eco-Clean",
    description: "Sustainability-focused detailing with fresh greens and organic tones.",
    containerClass: "bg-emerald-50 text-emerald-900 border-emerald-200",
    buttonClass: "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20",
    accentColor: "#059669",
    strategy: "This palette uses 'Safety Green' to signal chemical-free steam cleaning and interior sanitization. It builds immediate trust with families and eco-conscious daily drivers who prioritize a non-toxic cabin environment."
  },
  "night-vision-armour": {
    id: "night-vision-armour",
    name: "Night Vision Armour",
    description: "Tactical cyan and deep slate for ceramic coating specialists.",
    containerClass: "bg-slate-950 text-cyan-400 border-cyan-500/20 shadow-night-vision",
    buttonClass: "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    accentColor: "#22d3ee",
    strategy: "The neon cyan glow mimics a high-tech paint protection lab. It visually reinforces the idea of a 'technological shield' being applied to the clear coat, making it the go-to choice for ceramic coating and PPF experts."
  },
  "the-vantage-collective": {
    id: "the-vantage-collective",
    name: "The Vantage Collective",
    description: "Luxury gold and stone tones for exotic car concierge services.",
    containerClass: "bg-[#fcfaf7] text-stone-800 border-stone-200",
    buttonClass: "bg-stone-900 text-white font-serif italic",
    accentColor: "#c5a059",
    strategy: "Luxury gold and serif typography shift the focus to 'concierge-level' care. This style justifies premium pricing by making the detailing process feel like a high-end spa treatment for exotic and collector vehicles."
  },
  "mud-sweat-gears": {
    id: "mud-sweat-gears",
    name: "Mud, Sweat & Gears",
    description: "Rugged orange and heavy black for off-road and truck specialists.",
    containerClass: "bg-orange-50 text-black border-4 border-black shadow-brutal",
    buttonClass: "bg-yellow-400 text-black border-4 border-black shadow-brutal hover:translate-x-1 hover:translate-y-1",
    accentColor: "#fbbf24",
    strategy: "Aggressive lines and construction-orange signal durability and power. It appeals directly to truck owners and off-roaders who want a detailer that isn't afraid of real Edmonton mud and heavy-duty clay barring."
  },
  "detailflow-pro": {
    id: "detailflow-pro",
    name: "DetailFlow Pro",
    description: "Professional blue and clinical white for high-volume precision shops.",
    containerClass: "bg-blue-50 text-blue-900 border-blue-100",
    buttonClass: "bg-blue-600 text-white rounded-lg shadow-md",
    accentColor: "#2563eb",
    strategy: "Blue is the international color of reliability. This clinical, systematic look tells the customer that their vehicle will be handled with professional, standardized precision and a checklist-driven workflow."
  },
  "aero-shine-labs": {
    id: "aero-shine-labs",
    name: "Aero Shine Labs",
    description: "Carbon textures and silver accents for performance-first aero shops.",
    containerClass: "bg-carbon-fiber text-white border-white/10",
    buttonClass: "bg-white text-black font-black italic hover:bg-silver transition-colors",
    accentColor: "#f8fafc",
    strategy: "Carbon fiber textures and mono-spaced fonts lean into the 'Race-Prep' aesthetic. It visually promises a finish that looks fast even when standing still, targeting performance enthusiasts and track-day regulars."
  },
  "route-66-review": {
    id: "route-66-review",
    name: "Route 66 Review",
    description: "Retro red and cream for classic car restoration and detailing.",
    containerClass: "bg-red-50 text-red-600 shadow-sticker rotate-1 border-2 border-red-100",
    buttonClass: "bg-red-600 text-white shadow-sticker font-retro",
    accentColor: "#dc2626",
    strategy: "Nostalgic reds and 'sticker-style' shadows evoke the golden age of the American garage. It targets classic car owners who value heritage, hand-waxing, and 'old-school' attention to detail."
  },
  "prism-auto-works": {
    id: "prism-auto-works",
    name: "Prism Auto-Works",
    description: "Vaporwave pinks and glitch effects for custom show-car detailing.",
    containerClass: "bg-black text-white border-2 border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.3)]",
    buttonClass: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all",
    accentColor: "#ec4899",
    strategy: "Synthwave pinks and glitch textures appeal to the custom 'show-car' and tuner crowd. This identity suggests your shop specializes in aesthetic perfection, neon underglow cleaning, and head-turning finishes."
  }
};
