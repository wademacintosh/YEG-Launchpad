import { useRouter } from 'next/router';
import Link from 'next/link';

// This matches the style variants from your StyleCard
const STYLE_DATA = {
  'obsidian-eco': {
    name: 'Obsidian Eco-Clean',
    tagline: 'Minimal monochrome layout for waterless detailing.',
    bgColor: '#eef2ec',
    textColor: '#1f2a22',
    accentColor: '#7A8C7E',
    font: "'Cormorant Garamond', serif"
  },
  'night-vision': {
    name: 'Night Vision Armor',
    tagline: 'High-contrast dark UI built for ceramic coatings & PPF.',
    bgColor: '#1a1a1a',
    textColor: '#22d3ee',
    accentColor: '#22d3ee',
    font: "'JetBrains Mono', monospace"
  },
  'vantage': {
    name: 'The Vantage Collective',
    tagline: 'Editorial luxury aesthetic for boutique exotic-car studios.',
    bgColor: '#f5f1ea',
    textColor: '#0a1628',
    accentColor: '#B89766',
    font: "'Playfair Display', serif"
  },
  'mud-sweat-gears': {
    name: 'Mud, Sweat & Gears',
    tagline: 'Bold rugged branding for off-road & truck wash specialists.',
    bgColor: '#FFD400',
    textColor: '#000000',
    accentColor: '#000000',
    font: "'Archivo Black', sans-serif"
  },
  'detailflow': {
    name: 'DetailFlow Pro',
    tagline: 'Clean SaaS-style layout focused on online booking conversions.',
    bgColor: '#0f172a',
    textColor: '#ffffff',
    accentColor: '#60a5fa',
    font: "sans-serif"
  },
  'aero-shine': {
    name: 'Aero Shine Labs',
    tagline: 'Tech-lab vibe with motion accents for paint correction pros.',
    bgColor: '#000000',
    textColor: '#ffffff',
    accentColor: '#e10600',
    font: "'Space Grotesk', sans-serif"
  },
  'route66': {
    name: 'Route 66 Revive',
    tagline: 'Retro Americana branding for classic & restoration shops.',
    bgColor: '#f7eed7',
    textColor: '#7C1D1D',
    accentColor: '#0d8a8a',
    font: "'Pacifico', cursive"
  },
  'prism': {
    name: 'Prism Auto-Works',
    tagline: 'Vibrant gradient design for vinyl wraps & custom finishes.',
    bgColor: '#0a0014',
    textColor: '#ffffff',
    accentColor: '#c026d3',
    font: "'Space Grotesk', sans-serif"
  }
};

export default function StylePreviewPage() {
  const router = useRouter();
  const { id } = router.query;

  // Type safety check
  const style = STYLE_DATA[id as keyof typeof STYLE_DATA];

  if (!style) {
    return <div className="flex h-screen items-center justify-center font-mono">Style not found...</div>;
  }

  return (
    <div 
      className="min-h-screen transition-all duration-700" 
      style={{ backgroundColor: style.bgColor, color: style.textColor, fontFamily: style.font }}
    >
      {/* Dynamic Header */}
      <nav className="flex justify-between items-center p-8 border-b border-black/10">
        <Link href="/" className="uppercase text-xs tracking-widest hover:opacity-50 transition-opacity">
          ← Back to Studio
        </Link>
        <span className="uppercase text-[10px] tracking-[0.5em] opacity-60">
          Design Concept: {style.name}
        </span>
      </nav>

      {/* Hero Content Section */}
      <main className="max-w-5xl mx-auto py-32 px-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span 
            className="inline-block px-4 py-1 border text-[10px] uppercase tracking-widest"
            style={{ borderColor: style.accentColor, color: style.accentColor }}
          >
            Live Preview Mode
          </span>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-tight uppercase">
            {style.name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "italic font-normal" : ""}>{word} </span>
            ))}
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl opacity-80 leading-relaxed">
            {style.tagline} This preview demonstrates how your brand's DNA translates to a high-conversion landing page.
          </p>

          <div className="pt-10">
            <button 
              className="px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: style.accentColor, color: style.bgColor === '#000000' || style.bgColor === '#0a0014' || style.bgColor === '#0f172a' ? '#fff' : style.bgColor }}
            >
              Contact Specialist
            </button>
          </div>
        </div>
      </main>

      {/* Style Details Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
        {['Typography', 'Color Palette', 'Brand Voice'].map((item) => (
          <div key={item} className="p-10 border-r border-black/10 last:border-r-0">
            <h4 className="text-xs uppercase tracking-widest opacity-50 mb-4">{item}</h4>
            <div className="h-1 w-8 mb-4" style={{ backgroundColor: style.accentColor }} />
            <p className="text-sm">Technical breakdown for the {style.name} visual identity system.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
