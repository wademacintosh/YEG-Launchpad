export interface Theme {
  id: string;
  name: string;
  description: string;
  containerClass: string;
  buttonClass: string;
  accentColor: string;
  strategy: string; // New field for unique client messaging
}

export const themes: Record<string, Theme> = {
  "eco-clean": {
    id: "eco-clean",
    name: "Eco-Clean",
    description: "Sustainable, fresh, and organic aesthetics for green businesses.",
    containerClass: "bg-emerald-50 text-emerald-900 border-emerald-200",
    buttonClass: "bg-emerald-600 text-white hover:bg-emerald-700",
    accentColor: "#059669",
    strategy: "Perfect for health, wellness, and environmental brands in Edmonton. This layout emphasizes purity and organic growth, building immediate trust with eco-conscious consumers."
  },
  "night-vision-armour": {
    id: "night-vision-armour",
    name: "Night Vision Armour",
    description: "High-contrast, tactical neon for security and tech firms.",
    containerClass: "bg-slate-950 text-cyan-400 shadow-night-vision",
    buttonClass: "bg-cyan-500 text-black font-bold",
    accentColor: "#22d3ee",
    strategy: "Designed for 24/7 service industries and tech security. The high-contrast 'always-on' aesthetic signals reliability, precision, and tactical superiority in the local market."
  },
  "the-vantage-collective": {
    id: "the-vantage-collective",
    name: "The Vantage Collective",
    description: "Minimalist luxury with a focus on typography and space.",
    containerClass: "bg-[#fcfaf7] text-stone-800 vantage-border",
    buttonClass: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white",
    accentColor: "#c5a059",
    strategy: "Tailored for law firms, real estate, and high-end consultancies. This minimalist 'Vantage' approach strips away noise to highlight your brand's authority and attention to detail."
  },
  "mud-sweat-gears": {
    id: "mud-sweat-gears",
    name: "Mud, Sweat & Gears",
    description: "Raw, neobrutalist energy for the rugged and adventurous.",
    containerClass: "bg-orange-50 text-black shadow-brutal border-4 border-black",
    buttonClass: "bg-yellow-400 text-black border-4 border-black shadow-brutal",
    accentColor: "#fbbf24",
    strategy: "Built for Edmonton's industrial and outdoor adventure sectors. The 'Brutal' design language screams durability and no-nonsense performance, perfect for trade-based businesses."
  },
  "detailflow-pro": {
    id: "detailflow-pro",
    name: "DetailFlow Pro",
    description: "Corporate precision with smooth gradients and professional lines.",
    containerClass: "bg-slate-50 text-blue-900 border-blue-100",
    buttonClass: "bg-blue-600 text-white rounded-lg",
    accentColor: "#2563eb",
    strategy: "Ideal for SaaS, fintech, and professional service providers. It uses modern gradients to project a 'Future-Ready' image while maintaining the strict structure required for corporate trust."
  },
  "aero-shine-labs": {
    id: "aero-shine-labs",
    name: "Aero Shine Labs",
    description: "Speed-inspired carbon fiber textures for the automotive industry.",
    containerClass: "bg-carbon-fiber text-white",
    buttonClass: "bg-white text-black font-black italic",
    accentColor: "#ffffff",
    strategy: "Specifically engineered for the high-performance automotive and detailing world. The carbon-fiber texture and 'Aero' accents imply speed, quality, and premium craftsmanship."
  },
  "route-66-review": {
    id: "route-66-review",
    name: "Route 66 Review",
    description: "Retro Americana with a sticker-book aesthetic and bold colors.",
    containerClass: "bg-red-50 text-red-600 shadow-sticker rotate-1",
    buttonClass: "bg-red-600 text-white shadow-sticker",
    accentColor: "#dc2626",
    strategy: "Perfect for local diners, community-focused hubs, and lifestyle brands. The retro 'Americana' vibe builds immediate nostalgic warmth and makes your brand feel like a local staple."
  },
  "prism-auto-works": {
    id: "prism-auto-works",
    name: "Prism Auto-Works",
    description: "Vaporwave synthwave vibes with glitch effects and deep blacks.",
    containerClass: "bg-black text-white border-2 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    buttonClass: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
    accentColor: "#ec4899",
    strategy: "A bold choice for after-dark businesses, gaming, or modern custom shops. This 'Synthwave' identity uses neon contrast to ensure your brand is impossible to ignore in a digital-first world."
  }
};
