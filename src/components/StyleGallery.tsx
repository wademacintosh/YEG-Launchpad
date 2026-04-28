import React from 'react';
import { ArrowRight } from 'lucide-react';

const styles = [
  { id: 'corporate', title: 'Corporate Blue', desc: 'Professional and trustworthy.' },
  { id: 'neon', title: 'Cyber YEG', desc: 'Bold, high-contrast, and modern.' },
  { id: 'minimal', title: 'River Valley', desc: 'Clean, airy, and nature-inspired.' }
];

const StyleGallery = () => {
  return (
    <section className="px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Vibe</h2>
        <p className="text-gray-600">Select a design language that fits your brand.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {styles.map((style) => (
          <div 
            key={style.id}
            className="group relative bg-white p-8 rounded-2xl border border-gray-100 
                       transition-all duration-300 ease-out
                       hover:shadow-xl hover:-translate-y-2 cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
              {style.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {style.desc}
            </p>
            <div className="flex items-center text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
              Explore Style <ArrowRight className="ml-2" size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StyleGallery;
