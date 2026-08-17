import React from 'react';
import { Quote, Sparkles, ArrowRight } from 'lucide-react';
import { PRESS_REVIEWS } from '../data/products';

interface PressAndEditorialProps {
  onOpenBooking: (focus?: string) => void;
}

export const PressAndEditorial: React.FC<PressAndEditorialProps> = ({ onOpenBooking }) => {
  const BESPOKE_SERVICES = [
    {
      title: 'Couture Gowns',
      desc: 'Architectural eveningwear and illusion gowns draped entirely to your measure.'
    },
    {
      title: 'Tailored Suiting',
      desc: 'Bespoke Italian wool suits and blazers cut for immaculate posture.'
    },
    {
      title: 'Bridal Regalia',
      desc: 'One-of-one wedding and gala ensembles designed in private consultation.'
    },
    {
      title: 'Handbags & Leather',
      desc: 'Handcrafted leather goods and sculptural accessories made to order.'
    }
  ];

  return (
    <section id="press" className="py-24 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Press Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#c8a97e] uppercase mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Fashion Reviews & Praise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight font-bold">
              What People Say About <span className="text-[#c8a97e] italic">Maison Mary</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRESS_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#13131a] border border-white/15 rounded-lg flex flex-col justify-between hover:border-[#c8a97e]/60 transition-colors"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#c8a97e] opacity-50 mb-2" />
                  <p className="text-xs text-neutral-200 italic leading-relaxed font-sans">
                    “{rev.quote}”
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10">
                  <span className="text-xs font-bold text-[#c8a97e] block">
                    {rev.publication}
                  </span>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">
                    {rev.author} • {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bespoke Commissions */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[#c8a97e] uppercase mb-1">
                BESPOKE COMMISSIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight font-bold">
                Commission Your <span className="text-[#c8a97e] italic">Heirloom Piece</span>
              </h2>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm font-normal max-w-md font-sans-clean">
              Each silhouette is hand-built to your exact measure — from couture gowns to tailored suiting and bridal regalia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BESPOKE_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="p-5 bg-[#13131a] border border-white/15 rounded-lg flex flex-col justify-between hover:border-[#c8a97e]/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-xl font-bold text-white group-hover:text-[#c8a97e] transition-colors">
                      {svc.title}
                    </span>
                    <span className="text-[10px] text-[#c8a97e] uppercase font-bold px-2 py-0.5 bg-[#c8a97e]/15 rounded border border-[#c8a97e]/30">
                      COMMISSION
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 font-medium mb-3">
                    {svc.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking(svc.title)}
                  className="mt-5 w-full py-2.5 bg-white/10 hover:bg-[#c8a97e] hover:text-[#0b0b0d] text-neutral-200 text-xs font-bold rounded transition-all border border-white/15 flex items-center justify-center space-x-1.5"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
