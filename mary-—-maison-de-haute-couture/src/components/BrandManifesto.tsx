import React from 'react';
import { Scissors, Award, Sparkles, Compass, ShieldCheck, Heart, Truck, Users } from 'lucide-react';

interface BrandManifestoProps {
  onOpenBooking: () => void;
}

export const BrandManifesto: React.FC<BrandManifestoProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      icon: Scissors,
      title: 'HANDCRAFTED TAILORING',
      description: 'Every dress, suit, and blazer is crafted by skilled tailors to give you a sharp, comfortable fit.'
    },
    {
      icon: Heart,
      title: 'AUTHENTIC AMERICAN FABRICS',
      description: 'We use genuine handwoven silk, premium Italian wool, and fine cashmere sourced from sustainable American and global suppliers.'
    },
    {
      icon: Users,
      title: 'AMERICAN ARTISANS & CRAFTSMEN',
      description: 'Every order directly supports traditional hand-loom weavers and fashion artisans across America.'
    },
    {
      icon: Truck,
      title: 'FAST DOORSTEP DELIVERY',
      description: 'Reliable, insured delivery straight to your doorstep anywhere in the US and worldwide.'
    }
  ];

  return (
    <section id="atelier-mary" className="py-20 bg-[#080808] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#c8a97e] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE DESIGNER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight font-bold leading-tight">
              Mary’s Vision for <span className="italic text-[#c8a97e]">American Luxury</span>
            </h2>

            <p className="text-neutral-200 text-sm sm:text-base font-normal leading-relaxed font-sans-clean border-l-2 border-[#c8a97e] pl-4">
               “American fashion is bold, architectural, and timeless. My goal is to make sure every person wears outfits that make them feel powerful, confident, and rooted in beautiful craftsmanship.”
            </p>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-serif italic text-2xl font-bold text-white block">
                  MARY
                </span>
                <span className="text-xs text-[#c8a97e] font-semibold">
                  Founder & Head Designer
                </span>
              </div>

              <button
                id="manifesto-private-consult-btn"
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#c8a97e] text-[#080808] text-xs font-bold tracking-wider rounded hover:bg-[#d6b575] transition-all uppercase shadow-md shadow-[#c8a97e]/20"
              >
                 Book a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Image Collage / Atelier Stills */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] bg-[#111111] rounded-lg overflow-hidden border border-white/15">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=85"
                 alt="Mary Atelier Drafting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               <span className="absolute bottom-3 left-3 text-xs font-medium text-[#c8a97e]">
                  Maison Mary Atelier
               </span>
            </div>

            <div className="relative aspect-[3/4] bg-[#111111] rounded-lg overflow-hidden border border-white/15 mt-4">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
                 alt="Mary Couture Atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-[#c8a97e]">
                Custom Sizing & Made-to-Measure
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-6 border-t border-white/10">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#13131a] border border-white/15 hover:border-[#c8a97e]/60 rounded-lg transition-all flex flex-col justify-between"
            >
              <div>
                <p.icon className="w-5 h-5 text-[#c8a97e] mb-3" />
                <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
              <span className="text-xs text-[#c8a97e]/80 font-bold mt-3 block">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
