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
    description: "Sustainability-focused detailing with fresh greens.",
    containerClass: "bg-emerald-50 text-emerald-900 border-emerald-200",
    buttonClass: "bg-emerald-600 text-white",
    accentColor: "#059669",
    strategy: "This palette uses 'Safety Green' to signal chemical-free steam cleaning. It builds immediate trust with families and eco-conscious daily drivers."
  },
  "night-vision-armour": {
    id: "night-vision-armour",
    name: "Night Vision Armour",
    description: "Tactical cyan for ceramic coating specialists.",
    containerClass: "bg-slate-950 text-cyan-400 border-cyan-500/20",
    buttonClass: "bg-cyan-500 text-black font-bold",
    accentColor: "#22d3ee",
    strategy: "The neon cyan glow mimics a high-tech paint protection lab. It visually reinforces the idea of a 'technological shield' being applied to the vehicle."
  },
  "the-vantage-collective": {
    id: "the-vantage-collective",
    name: "The Vantage Collective",
    description: "Luxury gold tones for exotic car concierge services.",
    containerClass: "bg-[#fcfaf7] text-stone-800 border-stone-200",
    buttonClass: "bg-stone-900 text-white",
    accentColor: "#c5a059",
    strategy: "Luxury gold and serif fonts shift the focus to 'concierge-level' care. Perfect for justifying premium pricing for exotic and collector vehicle detailing."
  },
  "mud-sweat-gears": {
    id: "mud-sweat-gears",
    name: "Mud, Sweat & Gears",
    description: "Rugged orange for off-road and truck specialists.",
    containerClass: "bg-orange-50 text-black border-4 border-black",
    buttonClass: "bg-yellow-400 text-black border-4 border-black",
    accentColor: "#fbbf24",
    strategy: "Aggressive lines and construction-orange signal durability. It appeals to truck owners who want a detailer who isn't afraid of real Edmonton mud."
  },
  "prism-auto-works": {
    id: "prism-auto-works",
    name: "Prism Auto-Works",
    description: "Vaporwave aesthetics for custom show-car detailing.",
    containerClass: "bg-black text-white border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    buttonClass: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
    accentColor: "#ec4899",
    strategy: "The synthwave 'glitch' vibe targets the custom show-car crowd. It signals that your shop specializes in aesthetic perfection and head-turning finishes."
  },
  // Add other themes following this pattern...
};
