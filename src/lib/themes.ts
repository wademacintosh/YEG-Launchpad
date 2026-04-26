/**
 * Per-theme content & visual tokens that drive both the gallery cards
 * and the full /theme/$slug demo pages.
 *
 * Each theme defines its OWN palette + font stack so its dedicated page
 * truly looks like a different brand.
 */

export type ThemeSlug =
  | "obsidian"
  | "night-vision"
  | "vantage"
  | "mud-sweat-gears"
  | "detailflow"
  | "aero-shine"
  | "route-66"
  | "prism";

export type ThemeCategory = "Luxury" | "Rugged" | "Modern";

export interface ServiceItem {
  title: string;
  description: string;
  /** Lucide icon name (resolved via the icon map in components) */
  icon:
    | "Sparkles"
    | "ShieldCheck"
    | "Droplets"
    | "Wrench"
    | "Gauge"
    | "Car"
    | "PaintBucket"
    | "Zap"
    | "Diamond"
    | "Mountain"
    | "Wind"
    | "Star"
    | "Flame";
}

export interface ResultItem {
  label: string;
  caption: string;
  /** Two-color CSS gradient used for the placeholder image tile */
  gradient: string;
}

export interface ThemeTokens {
  /** Colors */
  bg: string;
  surface: string;
  fg: string;
  fgMuted: string;
  accent: string;
  accentFg: string;
  border: string;

  /** Typography (full CSS font-family stacks) */
  fontHeading: string;
  fontBody: string;

  /** Style flags */
  radius: string; // e.g. "1rem", "0px"
  buttonShape: "pill" | "square" | "sticker" | "brutal";
  uppercaseHeadings: boolean;
}

export interface ThemeDefinition {
  slug: ThemeSlug;
  /** Used by the gallery card variant dispatcher */
  variant:
    | "obsidian-eco"
    | "night-vision"
    | "vantage"
    | "mud-sweat-gears"
    | "detailflow"
    | "aero-shine"
    | "route66"
    | "prism";
  title: string;
  shortTitle: string;
  tagline: string;
  category: ThemeCategory;
  /** Hero copy */
  heroEyebrow: string;
  heroHeadline: string;
  heroSub: string;
  heroCta: string;
  /** Three services for the Services section */
  services: [ServiceItem, ServiceItem, ServiceItem];
  /** Six tiles for the Results gallery */
  results: ResultItem[];
  /** Contact section copy */
  contactHeadline: string;
  contactSub: string;
  /** Visual tokens that style the whole page */
  tokens: ThemeTokens;
}

const FONT_INTER =
  "'Inter', ui-sans-serif, system-ui, sans-serif";
const FONT_SPACE_GROTESK = "'Space Grotesk', 'Inter', sans-serif";
const FONT_PLAYFAIR = "'Playfair Display', Georgia, serif";
const FONT_CORMORANT = "'Cormorant Garamond', Georgia, serif";
const FONT_JETBRAINS = "'JetBrains Mono', ui-monospace, monospace";
const FONT_ARCHIVO = "'Archivo Black', 'Inter', sans-serif";
const FONT_PACIFICO = "'Pacifico', cursive";
const FONT_VT = "'VT323', ui-monospace, monospace";

export const THEMES: Record<ThemeSlug, ThemeDefinition> = {
  obsidian: {
    slug: "obsidian",
    variant: "obsidian-eco",
    title: "Obsidian Eco-Clean",
    shortTitle: "Obsidian",
    tagline:
      "Minimal monochrome layout for waterless, eco-conscious detailing.",
    category: "Modern",
    heroEyebrow: "01 — Eco · Waterless",
    heroHeadline: "Detailing in harmony with the planet.",
    heroSub:
      "A quiet, monochrome studio for waterless and steam detailing — every surface treated with intention, every drop accounted for.",
    heroCta: "Book a Quiet Detail",
    services: [
      {
        title: "Steam Interior Refresh",
        description:
          "Plant-based steam treatment removes grime without a single litre of waste water.",
        icon: "Droplets",
      },
      {
        title: "Hand-Polish Restoration",
        description:
          "Slow, hand-applied polishing brings back depth without aggressive compounds.",
        icon: "Sparkles",
      },
      {
        title: "Eco Ceramic Sealant",
        description:
          "A low-VOC ceramic sealant that protects paint for up to 18 months.",
        icon: "ShieldCheck",
      },
    ],
    results: [
      { label: "Waterless full detail", caption: "Tesla Model 3", gradient: "linear-gradient(135deg,#cfd8cf,#7A8C7E)" },
      { label: "Hand polish", caption: "Audi A6", gradient: "linear-gradient(135deg,#eef2ec,#1f2a22)" },
      { label: "Steam interior", caption: "Volvo XC60", gradient: "linear-gradient(135deg,#7A8C7E,#3a4a3d)" },
      { label: "Ceramic seal", caption: "BMW i4", gradient: "linear-gradient(135deg,#dfe6dc,#7A8C7E)" },
      { label: "Wheel refresh", caption: "Lexus ES", gradient: "linear-gradient(135deg,#1f2a22,#7A8C7E)" },
      { label: "Glass restore", caption: "Genesis G70", gradient: "linear-gradient(135deg,#eef2ec,#3a4a3d)" },
    ],
    contactHeadline: "Reserve a quiet appointment.",
    contactSub:
      "Tell us about your vehicle. We respond within one business day.",
    tokens: {
      bg: "#eef2ec",
      surface: "#ffffff",
      fg: "#1f2a22",
      fgMuted: "#4a5a4d",
      accent: "#7A8C7E",
      accentFg: "#ffffff",
      border: "rgba(31,42,34,0.15)",
      fontHeading: FONT_CORMORANT,
      fontBody: FONT_CORMORANT,
      radius: "1rem",
      buttonShape: "pill",
      uppercaseHeadings: false,
    },
  },

  "night-vision": {
    slug: "night-vision",
    variant: "night-vision",
    title: "Night Vision Armor",
    shortTitle: "Night Vision",
    tagline: "High-contrast dark UI built for ceramic coatings & PPF.",
    category: "Modern",
    heroEyebrow: "// 02_NIGHT_VISION_ARMOR",
    heroHeadline: "Armor your paint. Run silent. Run dark.",
    heroSub:
      "Nano-ceramic coatings and self-healing paint protection film, calibrated by certified installers.",
    heroCta: "[ Initialize Quote ]",
    services: [
      {
        title: "Ceramic Pro 9H",
        description:
          "Lab-grade nano-coating with up to 7 years of hydrophobic protection.",
        icon: "ShieldCheck",
      },
      {
        title: "PPF Full Front",
        description:
          "Self-healing film engineered to absorb stone chips at highway speed.",
        icon: "Zap",
      },
      {
        title: "Headlight Restore",
        description:
          "Multi-stage UV restoration with sealant for perfect light output.",
        icon: "Gauge",
      },
    ],
    results: [
      { label: "Ceramic 9H", caption: "Porsche 911", gradient: "linear-gradient(135deg,#0b1020,#22d3ee)" },
      { label: "PPF Full Body", caption: "Audi RS6", gradient: "linear-gradient(135deg,#111111,#22d3ee)" },
      { label: "Track Pack", caption: "BMW M3", gradient: "linear-gradient(135deg,#0a0a0a,#06b6d4)" },
      { label: "Night Detail", caption: "C8 Corvette", gradient: "linear-gradient(135deg,#0b1020,#0ea5e9)" },
      { label: "Wheels + Calipers", caption: "Tesla Plaid", gradient: "linear-gradient(135deg,#1a1a1a,#22d3ee)" },
      { label: "Glass Coating", caption: "GR Supra", gradient: "linear-gradient(135deg,#111,#67e8f9)" },
    ],
    contactHeadline: "Request_quote.exe",
    contactSub:
      "Drop your vehicle details — operator on standby 09:00–18:00 MST.",
    tokens: {
      bg: "#1a1a1a",
      surface: "#111111",
      fg: "#e6f9ff",
      fgMuted: "#94a3b8",
      accent: "#22d3ee",
      accentFg: "#001018",
      border: "rgba(34,211,238,0.35)",
      fontHeading: FONT_JETBRAINS,
      fontBody: FONT_JETBRAINS,
      radius: "0.25rem",
      buttonShape: "square",
      uppercaseHeadings: true,
    },
  },

  vantage: {
    slug: "vantage",
    variant: "vantage",
    title: "The Vantage Collective",
    shortTitle: "Vantage",
    tagline: "Editorial luxury aesthetic for boutique exotic-car studios.",
    category: "Luxury",
    heroEyebrow: "Vol. III · Members Only",
    heroHeadline: "An atelier for cars that deserve more than a wash.",
    heroSub:
      "By appointment only. White-glove detailing and concours-level preparation for collectors across Alberta.",
    heroCta: "Request Membership",
    services: [
      {
        title: "Concours Preparation",
        description:
          "Full multi-day correction & detailing for shows, auctions and rallies.",
        icon: "Diamond",
      },
      {
        title: "Heritage Leather Care",
        description:
          "Hand-conditioning of original leather, stitching and trim.",
        icon: "Sparkles",
      },
      {
        title: "Storage Detailing",
        description:
          "Quarterly maintenance for vehicles in private collections.",
        icon: "Star",
      },
    ],
    results: [
      { label: "Concours prep", caption: "Aston Martin DB11", gradient: "linear-gradient(135deg,#f5f1ea,#B89766)" },
      { label: "Hand polish", caption: "Bentley Continental", gradient: "linear-gradient(135deg,#0a1628,#B89766)" },
      { label: "Leather restoration", caption: "Rolls-Royce Ghost", gradient: "linear-gradient(135deg,#f5f1ea,#0a1628)" },
      { label: "Estate maintenance", caption: "Porsche 992 Turbo S", gradient: "linear-gradient(135deg,#B89766,#0a1628)" },
      { label: "Auction prep", caption: "Ferrari 812", gradient: "linear-gradient(135deg,#f5f1ea,#3a4555)" },
      { label: "Heritage refresh", caption: "Mercedes 280SL", gradient: "linear-gradient(135deg,#B89766,#f5f1ea)" },
    ],
    contactHeadline: "Membership Inquiries",
    contactSub:
      "Share a few details about your vehicle. Our concierge will respond personally.",
    tokens: {
      bg: "#f5f1ea",
      surface: "#ffffff",
      fg: "#0a1628",
      fgMuted: "#3a4555",
      accent: "#B89766",
      accentFg: "#0a1628",
      border: "rgba(10,22,40,0.18)",
      fontHeading: FONT_PLAYFAIR,
      fontBody: FONT_PLAYFAIR,
      radius: "0px",
      buttonShape: "square",
      uppercaseHeadings: false,
    },
  },

  "mud-sweat-gears": {
    slug: "mud-sweat-gears",
    variant: "mud-sweat-gears",
    title: "Mud, Sweat & Gears",
    shortTitle: "Mud · Sweat · Gears",
    tagline: "Bold rugged branding for off-road & truck wash specialists.",
    category: "Rugged",
    heroEyebrow: "★ EST. 2018 · YEG ALBERTA",
    heroHeadline: "WE EAT MUD FOR BREAKFAST.",
    heroSub:
      "Heavy-duty wash bays for trucks, lifted rigs and overland builds. No appointments. No nonsense.",
    heroCta: "GET IT CLEANED",
    services: [
      {
        title: "Undercarriage Blast",
        description:
          "200-bar pressure wash strips mud, salt and trail debris from every angle.",
        icon: "Mountain",
      },
      {
        title: "Engine Bay Detail",
        description:
          "Degrease, dress and protect every hose and harness in your bay.",
        icon: "Wrench",
      },
      {
        title: "Off-Road Recovery Wash",
        description:
          "Full clean-up after a weekend in the bush — including interior shake-out.",
        icon: "Car",
      },
    ],
    results: [
      { label: "Trail recovery", caption: "Ford F-250", gradient: "linear-gradient(135deg,#FFD400,#000)" },
      { label: "Lift kit clean", caption: "Jeep Gladiator", gradient: "linear-gradient(135deg,#000,#FFD400)" },
      { label: "Undercarriage blast", caption: "Tacoma TRD", gradient: "linear-gradient(135deg,#FFD400,#3a3a3a)" },
      { label: "Engine bay", caption: "Ram 2500", gradient: "linear-gradient(135deg,#000,#FFD400)" },
      { label: "Overland refresh", caption: "4Runner", gradient: "linear-gradient(135deg,#FFD400,#000)" },
      { label: "Tire & wheel", caption: "Bronco Raptor", gradient: "linear-gradient(135deg,#000,#FFD400)" },
    ],
    contactHeadline: "ROLL IN. WE'LL HANDLE IT.",
    contactSub: "Drop us a message. We answer in plain English.",
    tokens: {
      bg: "#FFD400",
      surface: "#ffffff",
      fg: "#000000",
      fgMuted: "#1a1a1a",
      accent: "#000000",
      accentFg: "#FFD400",
      border: "#000000",
      fontHeading: FONT_ARCHIVO,
      fontBody: FONT_SPACE_GROTESK,
      radius: "0px",
      buttonShape: "brutal",
      uppercaseHeadings: true,
    },
  },

  detailflow: {
    slug: "detailflow",
    variant: "detailflow",
    title: "DetailFlow Pro",
    shortTitle: "DetailFlow",
    tagline: "Clean SaaS-style layout focused on online booking conversions.",
    category: "Modern",
    heroEyebrow: "Online booking · 24/7",
    heroHeadline: "Book your detail in 30 seconds.",
    heroSub:
      "Live availability, transparent pricing and SMS confirmations. Built for shops that ship work, not paperwork.",
    heroCta: "Check Availability",
    services: [
      {
        title: "Express Detail",
        description:
          "Wash, vacuum, interior wipe-down and tire shine in 60 minutes flat.",
        icon: "Zap",
      },
      {
        title: "Signature Detail",
        description:
          "Two-stage exterior decontamination plus full interior reset.",
        icon: "Sparkles",
      },
      {
        title: "Subscription Plan",
        description:
          "Monthly maintenance details with priority booking and member rates.",
        icon: "ShieldCheck",
      },
    ],
    results: [
      { label: "Express", caption: "Honda Civic", gradient: "linear-gradient(135deg,#60a5fa,#0f172a)" },
      { label: "Signature", caption: "Mazda CX-5", gradient: "linear-gradient(135deg,#1e3a8a,#c084fc)" },
      { label: "Member detail", caption: "Hyundai Ioniq 5", gradient: "linear-gradient(135deg,#0f172a,#60a5fa)" },
      { label: "Pet-hair reset", caption: "Subaru Outback", gradient: "linear-gradient(135deg,#c084fc,#1e3a8a)" },
      { label: "Pre-trade detail", caption: "Toyota Camry", gradient: "linear-gradient(135deg,#60a5fa,#1e3a8a)" },
      { label: "Family SUV", caption: "Kia Telluride", gradient: "linear-gradient(135deg,#0f172a,#c084fc)" },
    ],
    contactHeadline: "Have a question first?",
    contactSub: "Send a quick message — we typically reply in under an hour.",
    tokens: {
      bg: "#0f172a",
      surface: "rgba(255,255,255,0.06)",
      fg: "#ffffff",
      fgMuted: "rgba(255,255,255,0.7)",
      accent: "#60a5fa",
      accentFg: "#0b1220",
      border: "rgba(255,255,255,0.18)",
      fontHeading: FONT_INTER,
      fontBody: FONT_INTER,
      radius: "1.25rem",
      buttonShape: "pill",
      uppercaseHeadings: false,
    },
  },

  "aero-shine": {
    slug: "aero-shine",
    variant: "aero-shine",
    title: "Aero Shine Labs",
    shortTitle: "Aero Shine",
    tagline: "Tech-lab vibe with motion accents for paint correction pros.",
    category: "Modern",
    heroEyebrow: "// VELOCITY · v6.0",
    heroHeadline: "Paint correction at race-team precision.",
    heroSub:
      "Multi-stage cutting, polishing and finishing — measured with paint-depth gauges and finished under controlled lighting.",
    heroCta: "Start Correction",
    services: [
      {
        title: "1-Step Enhancement",
        description:
          "Removes 60–70% of light defects for a fast, dramatic refresh.",
        icon: "Zap",
      },
      {
        title: "2-Step Correction",
        description:
          "Cut and polish process restores up to 90% of paint clarity.",
        icon: "Gauge",
      },
      {
        title: "Show-Car Finish",
        description:
          "Multi-stage refinement for shows, builds and feature cars.",
        icon: "Star",
      },
    ],
    results: [
      { label: "2-step correction", caption: "Subaru WRX", gradient: "linear-gradient(135deg,#0d0f12,#e10600)" },
      { label: "Show finish", caption: "Nissan GT-R", gradient: "linear-gradient(135deg,#16191f,#e10600)" },
      { label: "Track car prep", caption: "Civic Type R", gradient: "linear-gradient(135deg,#0d0f12,#fff)" },
      { label: "Pre-coat polish", caption: "Mustang GT", gradient: "linear-gradient(135deg,#e10600,#0d0f12)" },
      { label: "Headlight resurface", caption: "Evo X", gradient: "linear-gradient(135deg,#16191f,#fff)" },
      { label: "Wet sand & finish", caption: "Camaro ZL1", gradient: "linear-gradient(135deg,#0d0f12,#e10600)" },
    ],
    contactHeadline: "Bring your project to the lab.",
    contactSub: "Send paint condition notes — we'll respond with a plan.",
    tokens: {
      bg: "#0d0f12",
      surface: "#16191f",
      fg: "#ffffff",
      fgMuted: "rgba(255,255,255,0.7)",
      accent: "#e10600",
      accentFg: "#ffffff",
      border: "rgba(255,255,255,0.15)",
      fontHeading: FONT_SPACE_GROTESK,
      fontBody: FONT_SPACE_GROTESK,
      radius: "0.25rem",
      buttonShape: "square",
      uppercaseHeadings: true,
    },
  },

  "route-66": {
    slug: "route-66",
    variant: "route66",
    title: "Route 66 Revive",
    shortTitle: "Route 66",
    tagline: "Retro Americana branding for classic & restoration shops.",
    category: "Rugged",
    heroEyebrow: "★ EST. 1955 · STILL ROLLING ★",
    heroHeadline: "Bringing classics back to the open road.",
    heroSub:
      "Restoration-grade detailing for vintage cars, hot rods and Sunday cruisers. Old-school care with modern products.",
    heroCta: "Book the Diner",
    services: [
      {
        title: "Chrome Revival",
        description:
          "Hand-polish for bumpers, trim and grilles — the way it left the factory.",
        icon: "Sparkles",
      },
      {
        title: "Original Paint Care",
        description:
          "Gentle correction techniques that preserve thin, original finishes.",
        icon: "PaintBucket",
      },
      {
        title: "Garage-Kept Wash",
        description:
          "Two-bucket wash and ceramic sealant for show-night ready cruisers.",
        icon: "Car",
      },
    ],
    results: [
      { label: "Chrome polish", caption: "'67 Mustang", gradient: "linear-gradient(135deg,#f7eed7,#7C1D1D)" },
      { label: "Original paint", caption: "'72 Bronco", gradient: "linear-gradient(135deg,#0d8a8a,#f7eed7)" },
      { label: "Show wash", caption: "'69 Camaro", gradient: "linear-gradient(135deg,#7C1D1D,#f7eed7)" },
      { label: "Engine cleanup", caption: "'65 Galaxie", gradient: "linear-gradient(135deg,#1f1f1f,#f7eed7)" },
      { label: "Interior revive", caption: "'74 Charger", gradient: "linear-gradient(135deg,#f7eed7,#0d8a8a)" },
      { label: "Sunday detail", caption: "'70 Chevelle", gradient: "linear-gradient(135deg,#7C1D1D,#1f1f1f)" },
    ],
    contactHeadline: "Pull on up to the shop.",
    contactSub: "Send us your ride's story — we love a good one.",
    tokens: {
      bg: "#f7eed7",
      surface: "#ffffff",
      fg: "#1f1f1f",
      fgMuted: "#3a2a2a",
      accent: "#0d8a8a",
      accentFg: "#ffffff",
      border: "rgba(31,31,31,0.2)",
      fontHeading: FONT_PACIFICO,
      fontBody: FONT_SPACE_GROTESK,
      radius: "9999px",
      buttonShape: "sticker",
      uppercaseHeadings: false,
    },
  },

  prism: {
    slug: "prism",
    variant: "prism",
    title: "Prism Auto-Works",
    shortTitle: "Prism",
    tagline: "Vibrant gradient design for vinyl wraps & custom finishes.",
    category: "Luxury",
    heroEyebrow: "▲ PRISM_OS · ニューレトロ",
    heroHeadline: "Wrap it. Light it. Make it loud.",
    heroSub:
      "Full-vehicle vinyl wraps, color-shift films and custom finishes. Your car, broadcast in technicolor.",
    heroCta: "▸ Configure Wrap",
    services: [
      {
        title: "Color-Shift Wrap",
        description:
          "Premium iridescent and chameleon films from Inozetek and KPMF.",
        icon: "Sparkles",
      },
      {
        title: "Satin Color Change",
        description:
          "Full-vehicle satin wraps in 200+ colors with 5-year warranty.",
        icon: "PaintBucket",
      },
      {
        title: "Accent + Trim",
        description:
          "Roof, mirror, hood and chrome-delete kits installed in a day.",
        icon: "Star",
      },
    ],
    results: [
      { label: "Color-shift wrap", caption: "BMW M4", gradient: "linear-gradient(135deg,#c026d3,#7c3aed)" },
      { label: "Satin wrap", caption: "Audi R8", gradient: "linear-gradient(135deg,#ec4899,#1a0030)" },
      { label: "Chrome delete", caption: "G-Wagen", gradient: "linear-gradient(135deg,#7c3aed,#ec4899)" },
      { label: "Roof wrap", caption: "Lamborghini Urus", gradient: "linear-gradient(135deg,#1a0030,#ec4899)" },
      { label: "Liquid metal", caption: "Tesla Model S", gradient: "linear-gradient(135deg,#ec4899,#7c3aed)" },
      { label: "Custom livery", caption: "Supra MK5", gradient: "linear-gradient(135deg,#fef08a,#ec4899)" },
    ],
    contactHeadline: "▸ Start a wrap project",
    contactSub:
      "Tell us your vehicle and color direction — we'll send mockups.",
    tokens: {
      bg: "#0a0014",
      surface: "rgba(124,58,237,0.15)",
      fg: "#ffffff",
      fgMuted: "rgba(236,72,153,0.85)",
      accent: "#ec4899",
      accentFg: "#0a0014",
      border: "rgba(236,72,153,0.4)",
      fontHeading: FONT_SPACE_GROTESK,
      fontBody: FONT_VT,
      radius: "0.5rem",
      buttonShape: "square",
      uppercaseHeadings: true,
    },
  },
};

export const THEME_LIST: ThemeDefinition[] = [
  THEMES.obsidian,
  THEMES["night-vision"],
  THEMES.vantage,
  THEMES["mud-sweat-gears"],
  THEMES.detailflow,
  THEMES["aero-shine"],
  THEMES["route-66"],
  THEMES.prism,
];
