import { Link } from 'react-router-dom';
import { themes } from '../lib/themes';

export default function StyleGallery() {
  // Find specific themes to ensure we have data before rendering
  const obsidianTheme = themes.find(t => t.slug === 'obsidian-eco');
  const nightVisionTheme = themes.find(t => t.slug === 'night-vision');
  
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <div className="mb-16">
        <h2 className="text-5xl font-black mb-4">Browse the lineup</h2>
        <p className="text-xl text-gray-600">Eight distinct directions. Click any card to open its full demo site.</p>
        
        {/* Filter Tags */}
        <div className="flex gap-4 mt-8 border border-gray-200 rounded-lg p-1 w-max">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md font-medium text-sm">All</button>
          <button className="text-gray-600 px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-50">Luxury</button>
          <button className="text-gray-600 px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-50">Rugged</button>
          <button className="text-gray-600 px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-50">Modern</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CARD 01: Obsidian Eco-Clean */}
        {obsidianTheme && (
          <Link to={`/theme/${obsidianTheme.slug}`} className="group block">
            <div className="h-[500px] rounded-2xl p-10 flex flex-col items-center justify-between transition-transform duration-500 hover:-translate-y-2 border border-gray-100 shadow-sm hover:shadow-xl relative" style={{ backgroundColor: '#F6F7F2' }}>
              <div className="w-full flex justify-between items-start">
                <span className="bg-white px-4 py-1 rounded-full text-xs font-bold tracking-widest text-gray-500 uppercase">Modern</span>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              </div>
              
              <div className="text-center">
                <span className="text-xs tracking-[0.2em] text-gray-500 mb-6 block">01 — ECO</span>
                <h3 className="text-4xl font-serif mb-2 text-gray-900">Obsidian</h3>
                <h4 className="text-3xl font-serif italic text-gray-800 mb-8">Eco-Clean</h4>
                <p className="text-sm text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                  Minimal monochrome layout for waterless, eco-conscious detailing.
                </p>
              </div>

              <div className="w-full mt-auto">
                <button className="w-full border border-gray-300 rounded-full py-4 text-xs font-bold tracking-[0.2em] text-gray-700 uppercase group-hover:bg-white transition-colors">
                  Preview Style
                </button>
              </div>
            </div>
          </Link>
        )}

        {/* CARD 02: Night Vision Armor */}
        {nightVisionTheme && (
          <Link to={`/theme/${nightVisionTheme.slug}`} className="group block">
            <div className="h-[500px] rounded-xl p-10 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 relative" style={{ backgroundColor: '#1A1D20', border: '1px solid #2C3539' }}>
              <div className="w-full flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#4ECDC4] tracking-widest">// 02_NIGHT_VISION</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse"></div>
                  <span className="text-[10px] font-mono text-[#4ECDC4] tracking-widest">ONLINE</span>
                </div>
              </div>
              
              {/* Radar Graphic */}
              <div className="flex justify-center my-8">
                <div className="w-32 h-32 rounded-full border border-[#4ECDC4]/30 relative flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-[#4ECDC4]/20 absolute"></div>
                  <div className="w-16 h-16 rounded-full border border-[#4ECDC4]/10 absolute"></div>
                  <div className="w-full h-[1px] bg-[#4ECDC4]/30 absolute"></div>
                  <div className="h-full w-[1px] bg-[#4ECDC4]/30 absolute"></div>
                  <div className="w-2 h-2 rounded-full bg-[#4ECDC4] absolute z-10"></div>
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-xl font-mono text-[#4ECDC4] mb-3 font-bold">NIGHT VISION ARMOR_</h3>
                <p className="text-xs font-mono text-gray-400 mb-8">
                  &gt; High-contrast dark UI built for ceramic coatings & PPF.
                </p>
                <button className="w-full border border-[#4ECDC4]/30 py-4 text-[10px] font-mono text-[#4ECDC4] tracking-[0.3em] uppercase group-hover:bg-[#4ECDC4]/10 transition-colors">
                  [ PREVIEW STYLE ]
                </button>
              </div>
            </div>
          </Link>
        )}
        
        {/* Placeholder for the remaining cards */}
        <div className="bg-yellow-400 h-[500px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <span className="font-black text-2xl uppercase">Mud, Sweat & Gears Layout Pending...</span>
        </div>
        
      </div>
    </section>
  );
}
