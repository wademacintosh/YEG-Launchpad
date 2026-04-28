export interface Theme {
  id: string;
  name: string;
  description: string;
  containerClass: string;
  buttonClass: string;
  accentColor: string;
}

export const themes: Record<string, Theme> = {
  "eco-clean": {
    id: "eco-clean",
    name: "Eco-Clean",
    description: "Sustainable, fresh, and organic aesthetics for green businesses.",
    containerClass: "bg-emerald-50 text-emerald-900 border-emerald-200",
    buttonClass: "bg-emerald-600 text-white",
    accentColor: "#059669"
  },
  "night-vision-armour": {
    id: "night-vision-armour",
    name: "Night Vision Armour",
    description: "High-contrast, tactical neon for security and tech firms.",
    containerClass: "bg-slate-950 text-cyan-400 shadow-night-vision",
    buttonClass: "bg-cyan-500 text-black font-bold",
    accentColor: "#22d3ee"
  },
  "the-vantage-collective": {
    id: "the-vantage-collective",
    name: "The Vantage Collective",
    description: "Minimalist luxury with a focus on typography and space.",
    containerClass: "bg-[#fcfaf7] text-stone-800 vantage-border",
    buttonClass: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white",
    accentColor: "#c5a059"
  },
  "mud-sweat-gears": {
    id: "mud-sweat-gears",
    name: "Mud, Sweat & Gears",
    description: "Raw, neobrutalist energy for the rugged and adventurous.",
    containerClass: "bg-orange-50 text-black shadow-brutal border-4 border-black",
    buttonClass: "bg-yellow-400 text-black border-4 border-black shadow-brutal",
    accentColor: "#fbbf24"
  },
  "detailflow-pro": {
    id: "detailflow-pro",
    name: "DetailFlow Pro",
    description: "Corporate precision with smooth gradients and professional lines.",
    containerClass: "detail-gradient text-white rounded-2xl",
    buttonClass: "bg-blue-600 text-white rounded-lg",
    accentColor: "#2563eb"
  },
  "aero-shine-labs": {
    id: "aero-shine-labs",
    name: "Aero Shine Labs",
    description: "Speed-inspired carbon fiber textures for the automotive industry.",
    containerClass: "bg-carbon-fiber text-white",
    buttonClass: "bg-white text-black font-black italic",
    accentColor: "#ffffff"
  },
  "route-66-review": {
    id: "route-66-review",
    name: "Route 66 Review",
    description: "Retro Americana with a sticker-book aesthetic and bold colors.",
    containerClass: "bg-red-50 text-red-600 shadow-sticker rotate-1",
    buttonClass: "bg-red-600 text-white shadow-sticker",
    accentColor: "#dc2626"
  },
  "prism-auto-works": {
    id: "prism-auto-works",
    name: "Prism Auto-Works",
    description: "Vaporwave synthwave vibes with glitch effects and deep blacks.",
    containerClass: "bg-black text-white border-2 border-pink-500",
    buttonClass: "glitch-text-target border-2 border-cyan-400 text-cyan-400",
    accentColor: "#ec4899"
  }
};
