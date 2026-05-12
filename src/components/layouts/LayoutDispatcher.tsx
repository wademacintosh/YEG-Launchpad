import React from 'react';
import { StyleItem } from './StyleCard'; // Adjust path if needed

// Import your original layouts
import ObsidianLayout from './ObsidianLayout';
import NightVisionLayout from './NightVisionLayout';
import PrismLayout from './PrismLayout';
import VanguardLayout from './VanguardLayout';
import KineticLayout from './KineticLayout';

// Import our 5 NEW custom layouts
import TrackSpecLayout from './TrackSpecLayout';
import ApexFleetLayout from './ApexFleetLayout';
import MidnightSyndicateLayout from './MidnightSyndicateLayout';
import AquaFlowMobileLayout from './AquaFlowMobileLayout';
import JDMTokyoLayout from './JDMTokyoLayout';

interface LayoutDispatcherProps {
  item: StyleItem;
  onBack: () => void;
}

export default function LayoutDispatcher({ item, onBack }: LayoutDispatcherProps) {
  switch (item.variant) {
    // --- Original Styles ---
    case "obsidian-eco": return <ObsidianLayout item={item} onBack={onBack} />;
    case "night-vision": return <NightVisionLayout item={item} onBack={onBack} />;
    case "prism": return <PrismLayout item={item} onBack={onBack} />;
    case "vanguard-armor": return <VanguardLayout item={item} onBack={onBack} />;
    case "kinetic-coatings": return <KineticLayout item={item} onBack={onBack} />;
    
    // --- New Styles ---
    case "track-spec": return <TrackSpecLayout item={item} onBack={onBack} />;
    case "apex-fleet": return <ApexFleetLayout item={item} onBack={onBack} />;
    case "midnight-syndicate": return <MidnightSyndicateLayout item={item} onBack={onBack} />;
    case "aquaflow-mobile": return <AquaFlowMobileLayout item={item} onBack={onBack} />;
    case "jdm-tokyo": return <JDMTokyoLayout item={item} onBack={onBack} />;
    
    // Fallback if a layout isn't built yet
    default: 
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-10">
          <h2 className="text-3xl font-black uppercase mb-4">Layout in Progress</h2>
          <p className="text-gray-500 mb-8">The immersive layout for {item.title} is currently under construction.</p>
          <button onClick={onBack} className="px-6 py-3 bg-black text-white font-bold uppercase text-xs tracking-widest">
            Go Back
          </button>
        </div>
      );
  }
}
