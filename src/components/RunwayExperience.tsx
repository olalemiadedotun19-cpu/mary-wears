import React, { useState } from 'react';
import { Play, Pause, ChevronRight, ChevronLeft, Volume2, VolumeX, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { LOOKBOOK_LOOKS, PRODUCTS } from '../data/products';
import { Currency, Product } from '../types';
import { formatPrice } from '../utils/formatters';

interface RunwayExperienceProps {
  currentCurrency: Currency;
  onSelectProduct: (p: Product) => void;
  onOpenBooking: (msg?: string) => void;
}

export const RunwayExperience: React.FC<RunwayExperienceProps> = ({
  currentCurrency,
  onSelectProduct,
  onOpenBooking
}) => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [activePerspectiveTab, setActivePerspectiveTab] = useState<'front' | 'side' | 'back' | 'macro'>('front');

  const currentLook = LOOKBOOK_LOOKS[activeLookIndex];

  const taggedProducts = PRODUCTS.filter((p) => currentLook.productsIncluded.includes(p.id));
  const totalEnsembleCost = taggedProducts.reduce((sum, item) => sum + item.priceUSD, 0);

  const perspectiveImages: Record<'front' | 'side' | 'back' | 'macro', { img: string; label: string }> = {
    front: { img: currentLook.frontImage, label: 'Front Walk' },
    side: { img: currentLook.sideImage, label: 'Side View' },
    back: { img: currentLook.backImage, label: 'Back View' },
    macro: { img: currentLook.macroImage, label: 'Fabric Close-Up' }
  };

  const handleNextLook = () => {
    setActiveLookIndex((prev) => (prev + 1) % LOOKBOOK_LOOKS.length);
  };

  const handlePrevLook = () => {
    setActiveLookIndex((prev) => (prev - 1 + LOOKBOOK_LOOKS.length) % LOOKBOOK_LOOKS.length);
  };

  return (
    <section id="runway" className="py-20 bg-[#08080a] border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#c8a97e] uppercase mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Fashion Show Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight font-bold">
              Runway Looks & <span className="text-[#c8a97e] italic">Live Presentation</span>
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm font-normal max-w-xl mt-2 font-sans-clean">
              See the latest outfits on the runway. Switch between front, side, and back views to see every angle in action.
            </p>
          </div>

          {/* Look Selector Scrubbers */}
          <div className="flex items-center space-x-3">
            <span className="text-xs text-neutral-300 font-semibold mr-1">
              Look {activeLookIndex + 1} of {LOOKBOOK_LOOKS.length}
            </span>
            <button
              id="runway-prev-btn"
              onClick={handlePrevLook}
              className="p-2.5 bg-white/10 hover:bg-[#c8a97e] hover:text-[#0b0b0d] text-white rounded-full border border-white/15 transition-all"
              aria-label="Previous Outfit"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="runway-next-btn"
              onClick={handleNextLook}
              className="p-2.5 bg-white/10 hover:bg-[#c8a97e] hover:text-[#0b0b0d] text-white rounded-full border border-white/15 transition-all"
              aria-label="Next Outfit"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Runway Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Dynamic Multi-Angle Runway Stage */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative aspect-[3/4] sm:aspect-[16/11] w-full bg-[#050507] border border-white/15 rounded-lg overflow-hidden shadow-2xl">
              <img
                key={`${currentLook.id}-${activePerspectiveTab}`}
                src={perspectiveImages[activePerspectiveTab].img}
                alt={`${currentLook.title} - ${activePerspectiveTab}`}
                className="w-full h-full object-cover object-top sm:object-center transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              {/* Look Meta Top Left */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/15">
                <span className="text-xs font-serif font-bold text-[#c8a97e]">
                  Look #{currentLook.lookNumber}: {currentLook.title}
                </span>
                <p className="text-[10px] text-neutral-300 mt-0.5">
                  Model: {currentLook.model}
                </p>
              </div>

              {/* Perspective Angle Tag Top Right */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/15 text-xs text-white font-medium">
                {perspectiveImages[activePerspectiveTab].label}
              </div>

              {/* Bottom Look Switcher Buttons */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex space-x-1.5 bg-black/80 backdrop-blur-md p-1 rounded border border-white/15">
                  {(['front', 'side', 'back', 'macro'] as const).map((tab) => (
                    <button
                      key={tab}
                      id={`runway-tab-${tab}`}
                      onClick={() => setActivePerspectiveTab(tab)}
                      className={`px-3 py-1 text-xs uppercase rounded transition-all font-semibold ${
                        activePerspectiveTab === tab
                          ? 'bg-[#c8a97e] text-[#0b0b0d] font-bold'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Look Scrubber Dots */}
            <div className="flex items-center justify-center space-x-2 pt-2">
              {LOOKBOOK_LOOKS.map((lk, idx) => (
                <button
                  key={lk.id}
                  id={`scrubber-look-${idx}`}
                  onClick={() => setActiveLookIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeLookIndex === idx ? 'w-8 bg-[#c8a97e]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to look ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Tagged Ensemble Pieces & Acquisition */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#13131a] border border-white/15 p-6 rounded-lg shadow-2xl">
            <div>
              <div className="text-xs tracking-wider text-[#c8a97e] uppercase font-bold mb-1">
                OUTFIT DETAILS
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                {currentLook.title}
              </h3>
              <p className="text-xs text-neutral-300 font-normal mt-2 leading-relaxed font-sans-clean">
                {currentLook.description}
              </p>

              {/* Tagged Items in this Runway Silhouette */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-semibold text-neutral-300 uppercase">
                  Items in this Outfit ({taggedProducts.length}):
                </div>

                {taggedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    id={`runway-item-${prod.id}`}
                    onClick={() => onSelectProduct(prod)}
                    className="p-2.5 bg-[#1a1a24] hover:bg-[#232330] border border-white/10 hover:border-[#c8a97e]/60 rounded-lg transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={prod.colors[0].views.front}
                        alt={prod.name}
                        className="w-12 h-14 object-cover rounded border border-white/15"
                      />
                      <div>
                        <h4 className="text-xs font-serif text-white group-hover:text-[#c8a97e] transition-colors font-bold">
                          {prod.name}
                        </h4>
                        <span className="text-[11px] text-neutral-400 block font-sans">
                          {prod.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-[#c8a97e] block">
                        {formatPrice(prod.priceUSD, currentCurrency)}
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        View Item →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Ensemble Investment & Actions */}
            <div className="pt-5 border-t border-white/10 mt-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-neutral-400 tracking-wider block">
                    Full Outfit Total
                  </span>
                  <span className="text-2xl font-serif font-bold text-[#c8a97e]">
                    {formatPrice(totalEnsembleCost, currentCurrency)}
                  </span>
                </div>
                <span className="text-xs text-[#c8a97e] bg-[#c8a97e]/15 px-2.5 py-1 rounded border border-[#c8a97e]/30 font-semibold">
                  Complete Look
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  id="runway-book-fitting-btn"
                  onClick={() => onOpenBooking(`Runway Look ${currentLook.lookNumber}: ${currentLook.title}`)}
                  className="py-3 bg-[#c8a97e] text-[#0b0b0d] text-xs font-bold rounded hover:bg-[#dfc49c] transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-[#c8a97e]/20"
                >
                  <span>Pre-Order Look</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id="runway-consult-advisor-btn"
                  onClick={() => onOpenBooking('Private Runway Consultation')}
                  className="py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded border border-white/20 transition-colors text-center"
                >
                  Talk to Stylist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
