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
    buttonClass: "bg-emerald-600 text-white",
    accentColor: "#059669",
    strategy: "Green signals 'Safety' and 'Health.' This strategy builds immediate trust for interior steam-cleaning services, appealing to families and eco-conscious daily drivers."
  },
  "night-vision-armour": {
    id: "night-vision-armour",
    name: "Night Vision Armour",
    description: "Tactical cyan and deep slate for ceramic coating specialists.",
    containerClass: "bg-slate-950 text-cyan-400 border-cyan-500/20",
    buttonClass: "bg-cyan-500 text-black font-bold",
    accentColor: "#22d3ee",
    strategy: "The cyan glow mimics high-tech lab lighting. It visually justifies the high price of Ceramic Coatings by making the shop look like a technical 'Armour' facility."
  },
  "the-vantage-collective": {
    id: "the-vantage-collective",
    name: "The Vantage Collective",
    description: "Luxury gold and stone tones for exotic car concierge services.",
    containerClass: "bg-[#fcfaf7] text-stone-800 border-stone-200",
    buttonClass: "bg-stone-900 text-white",
    accentColor: "#c5a059",
    strategy: "Luxury gold tones shift the focus to 'Concierge' care. This style targets collector car owners who view detailing as a premium investment rather than a chore."
  },
  "mud-sweat-gears": {
    id: "mud-sweat-gears",
    name: "Mud, Sweat & Gears",
    description: "Rugged orange and heavy black for off-road and truck specialists.",
    containerClass: "bg-orange-50 text-black border-4 border-black shadow-brutal",
    buttonClass: "bg-yellow-400 text-black border-4 border-black shadow-brutal",
    accentColor: "#fbbf24",
    strategy: "The aggressive lines and high-vis orange signal 'Heavy Duty.' It tells truck owners your shop isn't afraid of mud and can handle the toughest Edmonton road grime."
  },
  "detailflow-pro": {
    id: "detailflow-pro",
    name: "DetailFlow Pro",
    description: "Professional blue and clinical white for high-volume precision shops.",
    containerClass: "bg-blue-50 text-blue-900 border-blue-100",
    buttonClass: "bg-blue-600 text-white rounded-lg",
    accentColor: "#2563eb",
    strategy: "Blue is the color of reliability. This clinical look suggests a 'Systematic' approach to detailing, promising the customer a perfect result through standardized precision."
  },
  "aero-shine-labs": {
    id: "aero-shine-labs",
    name: "Aero Shine Labs",
    description: "Carbon textures and silver accents for performance-first shops.",
    containerClass: "bg-carbon-fiber text-white border-white/10",
    buttonClass: "bg-white text-black font-black italic",
    accentColor: "#f8fafc",
    strategy: "Carbon textures and italic fonts lean into 'Speed.' It targets performance enthusiasts who want their car to look fast even when standing perfectly still."
  },
  "route-66-review": {
    id: "route-66-review",
    name: "Route 66 Review",
    description: "Retro red and cream for classic car restoration and detailing.",
    containerClass: "bg-red-50 text-red-600 shadow-sticker rotate-1",
    buttonClass: "bg-red-600 text-white shadow-sticker",
    accentColor: "#dc2626",
    strategy: "Retro reds evoke the 'Golden Age' of the garage. It appeals to classic car owners who value heritage, hand-waxing, and 'old-school' attention to detail."
  },
  "prism-auto-works": {
    id: "prism-auto-works",
    name: "Prism Auto-Works",
    description: "Vaporwave pink and glitch effects for custom show-cars.",
    containerClass: "bg-black text-white border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    buttonClass: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400",
    accentColor: "#ec4899",
    strategy: "Synthwave pinks and glitch textures appeal to the custom 'show-car' crowd. It suggests your shop specializes in aesthetic perfection and head-turning finishes."
  }
};
