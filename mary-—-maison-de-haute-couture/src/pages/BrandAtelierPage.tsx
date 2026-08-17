import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Scissors, 
  Award, 
  Compass, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Globe
} from 'lucide-react';
import { AppPage } from '../types';
import { 
  imgUsf05,
  imgUsf16,
  imgUsf25,
  imgUsf23
} from '../data/products';

interface BrandAtelierPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigate: (page: AppPage) => void;
}

export const BrandAtelierPage: React.FC<BrandAtelierPageProps> = ({
  onOpenBooking,
  onNavigate
}) => {
  const craftPillars = [
    {
      title: 'American Silk Hand-Weaving',
      region: 'American Silk Loom House',
      desc: 'Master generational weavers operate traditional narrow wooden strip-looms, intertwining raw Mulberry silk with pure metallic threads to produce heirloom architectural fabrics.',
      image: imgUsf05
    },
    {
      title: 'Natural Indigo Dye House',
      region: 'Natural Indigo Dye Works',
      desc: 'Using organic plant-based dyes and traditional resist techniques, artisans hand-paint intricate patterns onto continuous 4-ply silk sourced from American sustainable farms.',
      image: imgUsf16
    },
    {
      title: 'Lost-Wax Bronze Casting',
      region: 'Lost-Wax Bronze Foundry',
      desc: 'Our metal hardware, buckles, and sovereign collar clasps are hand-sculpted in beeswax and cast in solid brass and bronze by master American artisans.',
      image: imgUsf25
    },
    {
      title: 'Couture Moulage Tailoring',
      region: 'Couture Moulage Atelier',
      desc: 'Every garment is draped directly on the dress form without flat pattern shortcuts. We build internal 4-layer horsehair chest canvases to grant eternal drape and immaculate posture.',
      image: imgUsf23
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090d] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Manifesto */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-black/60 border border-[#c8a97e]/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span className="text-xs font-bold tracking-widest text-[#c8a97e] uppercase">
              MAISON MARY ATELIER PHILOSOPHY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
             The Sovereign Intersection of <br />
             <span className="text-[#c8a97e] italic">American Craft & Haute Couture</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed font-sans-clean">
              "Maison Mary was born out of a refusal to treat American heritage textiles as mere regional folklore. We craft our clothes with the mathematical precision of true haute couture, honoring the master weavers and metal artisans who shape every heirloom by hand."
          </p>
           <div className="text-xs text-[#c8a97e] font-serif italic">— Mary Halbert, Founder & Creative Director</div>
           <div className="flex items-center justify-center gap-3 pt-2">
             <img src="https://i.ibb.co/CsWQyyz4/jawadmd.jpg" alt="Mary Halbert" className="h-16 w-16 object-cover rounded-full border border-white/10" />
             <img src="https://i.ibb.co/r2r2WXWF/jawadmd.jpg" alt="Mary Halbert" className="h-16 w-16 object-cover rounded-full border border-white/10" />
           </div>
        </div>

        {/* 4 Artisanal Craft Pillars Grid */}
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-white">
              The Four Sacred Guilds of Maison Mary
            </h2>
            <span className="text-xs text-[#c8a97e] font-mono uppercase">100% Ethical Artisanal Provenance</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {craftPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-[#12121a] border border-white/10 rounded-xl overflow-hidden shadow-xl flex flex-col group hover:border-[#c8a97e]/60 transition-all"
              >
                <div className="relative h-64 overflow-hidden bg-[#0d0d12]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-[#c8a97e]/40 text-xs font-bold text-[#c8a97e]">
                    Guild 0{idx + 1}
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-white flex items-center space-x-1.5 bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm">
                    <Globe className="w-3.5 h-3.5 text-[#c8a97e]" />
                    <span>{pillar.region}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#c8a97e] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-2 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center text-xs text-[#c8a97e] font-semibold">
                    <span>Authentic Guild Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability & Bespoke Commission Callout */}
        <div className="bg-[#161622] border border-[#c8a97e]/30 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8a97e]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs text-[#c8a97e] font-bold uppercase tracking-widest block">
              BESPOKE PRIVATE COMMISSIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Commission an Original One-of-One Heirloom
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans-clean">
               Mary personally consults on private wedding regalia, couture ensembles, and red carpet bespoke pieces. Every silhouette is crafted over 120 hours of hand-moulage, made entirely to your measure.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
               <button
                 onClick={() => onOpenBooking('Private Bespoke Haute Couture Commission')}
                 className="w-full sm:w-auto px-8 py-4 bg-[#c8a97e] text-black font-bold text-xs tracking-wider uppercase rounded hover:bg-[#dfc49c] transition-all shadow-xl shadow-[#c8a97e]/20 flex items-center justify-center space-x-2"
               >
                 <Calendar className="w-4 h-4" />
                  <span>Book a Private Styling Consultation</span>
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
