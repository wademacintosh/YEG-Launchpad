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
    description: "Fresh greens and soft whites for eco-conscious detailing.",
    containerClass: "bg-emerald-50 text-emerald-900 border-emerald-200",
    buttonClass: "bg-emerald-600 text-white hover:bg-emerald-700",
    accentColor: "#059669",
    strategy: "This palette uses 'Sustainability Green' to signal chemical-free steam cleaning and interior health. The airy white space suggests a 'breath of fresh air' for the client's vehicle."
  },
  "night-vision-armour": {
    id: "night-vision-armour",
    name: "Night Vision Armour",
    description: "Tactical cyan and deep slate for ceramic coating specialists.",
    containerClass: "bg-slate-950 text-cyan-400 shadow-night-vision",
    buttonClass: "bg-cyan-500 text-black font-bold",
    accentColor: "#22d3ee",
    strategy: "The high-contrast cyan glow mimics high-tech paint protection labs. It visually reinforces the idea of a 'shield' or 'armour' being applied to the vehicle's clear coat."
  },
  "the-vantage-collective": {
    id: "the-vantage-collective",
    name: "The Vantage Collective",
    description: "Warm gold and stone tones for high-end exotic detailing.",
    containerClass: "bg-[#fcfaf7] text-stone-800 vantage-border",
    buttonClass: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white",
    accentColor: "#c5a059",
    strategy: "Luxury-focused gold accents and serif typography shift the focus to 'concierge-level' care. This style justifies premium pricing for exotic and collector vehicle services."
  },
  "mud-sweat-gears": {
    id: "mud-sweat-gears",
    name: "Mud, Sweat & Gears",
    description: "Rugged orange and heavy black for off-road and truck detailing.",
    containerClass: "bg-orange-50 text-black shadow-brutal border-4 border-black",
    buttonClass: "bg-yellow-400 text-black border-4 border-black shadow-brutal",
    accentColor: "#fbbf24",
    strategy: "The aggressive 'Neobrutalist' lines and construction-orange palette signal durability. It appeals to truck owners who want a shop that isn't afraid of real Edmonton mud."
  },
  "detailflow-pro": {
    id: "detailflow-pro",
    name: "DetailFlow Pro",
    description: "Professional blue and clinical white for high-volume shops.",
    containerClass: "bg-blue-50 text-blue-900 border-blue-100",
    buttonClass: "bg-blue-600 text-white rounded-lg",
    accentColor: "#2563eb",
    strategy: "Blue is the color of reliability and systematic efficiency. This clean, corporate look tells the customer that their vehicle will be handled with professional, standardized precision."
  },
  "aero-shine-labs": {
    id: "aero-shine-labs",
    name: "Aero Shine Labs",
    description: "Carbon textures and silver accents for performance-first shops.",
    containerClass: "bg-carbon-fiber text-white",
    buttonClass: "bg-white text-black font-black italic hover:bg-gray-200",
    accentColor: "#f8fafc",
    strategy: "Carbon fiber textures and mono-spaced fonts lean into the 'Race-Prep' aesthetic. It visually promises a finish that looks fast even when the car is standing still."
  },
  "route-66-review": {
    id: "route-66-review",
    name: "Route 66 Review",
    description: "Retro red and cream for classic car restoration and detailing.",
    containerClass: "bg-red-50 text-red-600 shadow-sticker rotate-1",
    buttonClass: "bg-red-600 text-white shadow-sticker",
    accentColor: "#dc2626",
    strategy: "Nostalgic reds and 'sticker-style' shadows evoke the golden age of the garage. It targets classic car owners who value heritage and 'old-school' attention to detail."
  },
  "prism-auto-works": {
    id: "prism-auto-works",
    name: "Prism Auto-Works",
    description: "Vaporwave pink and glitch effects for custom and show cars.",
    containerClass: "bg-black text-white border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.2)]",
    buttonClass: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
    accentColor: "#ec4899",
    strategy: "Synthwave pinks and glitch textures appeal to the custom 'show-car' crowd. It suggests your shop specializes in aesthetic perfection and 'pop-culture' car builds."
  }
};
