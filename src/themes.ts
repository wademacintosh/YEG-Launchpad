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
    description: "Sustainable, fresh, and organic aesthetics for green businesses and environmental consultants.",
    containerClass: "bg-emerald-50 text-emerald-900 border-emerald-200",
    buttonClass: "bg-emerald-600 text-white rounded-full",
    accentColor: "#10b981"
  },
  "night-vision-armour": {
    id: "night-vision-armour",
    name: "Night Vision Armour",
    description: "High-contrast, tactical neon for security firms, night-time logistics, and tech startups.",
    containerClass: "bg-slate-950 text-cyan-400 shadow-night-vision",
    buttonClass: "bg-cyan-500 text-black font-bold rounded-none",
    accentColor: "#22d3ee"
  },
  "the-vantage-collective": {
    id: "the-vantage-collective",
    name: "The Vantage Collective",
    description: "Minimalist luxury and editorial design for law firms, architects, and high-end real estate.",
    containerClass: "bg-[#fcfaf7] text-stone-800 vantage-border",
    buttonClass: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white rounded-none",
    accentColor: "#c5a059"
  },
  "mud-sweat-gears": {
    id: "mud-sweat-gears",
    name: "Mud, Sweat & Gears",
    description: "Raw, neobrutalist energy for bike shops, fitness centers, and outdoor adventure brands.",
    containerClass: "bg-orange-50 text-black shadow-brutal border-4 border-black",
    buttonClass: "bg-yellow-400 text-black border-4 border-black shadow-brutal font-black",
    accentColor: "#facc15"
  },
  "detailflow-pro": {
    id: "detailflow-pro",
    name: "DetailFlow Pro",
    description: "Corporate precision and modern SaaS vibes with smooth gradients and professional layouts.",
    containerClass: "detail-gradient text-white shadow-2xl",
    buttonClass: "bg-blue-600 text-white rounded-lg",
    accentColor: "#3b82f6"
  },
  "aero-shine-labs": {
    id: "aero-shine-labs",
    name: "Aero Shine Labs",
    description: "Speed-inspired carbon fiber textures and metallic accents for the automotive and aerospace sector.",
    containerClass: "bg-carbon-fiber text-white",
    buttonClass: "bg-white text-black font-black italic rounded-sm",
    accentColor: "#f8fafc"
  },
  "route-66-review": {
    id: "route-66-review",
    name: "Route 66 Review",
    description: "Retro Americana and sticker-book aesthetics for diners, vintage shops, and lifestyle blogs.",
    containerClass: "bg-red-50 text-red-600 shadow-sticker",
    buttonClass: "bg-red-600 text-white shadow-sticker font-retro",
    accentColor: "#ef4444"
  },
  "prism-auto-works": {
    id: "prism-auto-works",
    name: "Prism Auto-Works",
    description: "Vaporwave synthwave aesthetics with glitch effects for creative studios and modern workshops.",
    containerClass: "bg-black text-white border-2 border-pink-500 shadow-neon-cyan",
    buttonClass: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
    accentColor: "#ec4899"
  }
};
