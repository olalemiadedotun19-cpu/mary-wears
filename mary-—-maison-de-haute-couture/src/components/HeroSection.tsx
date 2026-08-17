import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, Play, Compass, ShieldCheck, Layers, RotateCw, CheckCircle2 } from 'lucide-react';
import { PerspectiveType, LightingMode, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface HeroSectionProps {
  onExplorePerspective: () => void;
  onViewCollection: () => void;
  onOpenBooking: () => void;
  currency: Currency;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePerspective,
  onViewCollection,
  onOpenBooking,
  currency
}) => {
  const [heroPerspective, setHeroPerspective] = useState<PerspectiveType>('front');
  const [lighting, setLighting] = useState<LightingMode>('runway');

  const heroPerspectivesMap: Record<PerspectiveType, { label: string; image: string; tag: string; subtitle: string }> = {
    front: {
      label: 'FRONT VIEW',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1600&q=90',
      tag: 'Front View (0°)',
      subtitle: 'Crisp collar and tailored chest silhouette'
    },
    side: {
      label: 'SIDE PROFILE',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=90',
      tag: 'Side View (90°)',
      subtitle: 'Sleeve curve and waistline posture'
    },
    back: {
      label: 'BACK VIEW',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=90',
      tag: 'Back View (180°)',
      subtitle: 'Clean pleats, back seams & flowing hemline'
    },
    macro: {
      label: 'FABRIC ZOOM',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1600&q=90',
      tag: 'Close-Up Texture',
      subtitle: 'Fine virgin wool and hand-stitched detailing'
    },
    motion: {
      label: 'WALKING & FLOW',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=90',
      tag: 'Walking Movement',
      subtitle: 'See how the fabric moves naturally as you walk'
    },
    drape: {
      label: 'MANNEQUIN FIT',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=90',
      tag: 'Dress Form',
      subtitle: 'Tailored drape on dress mannequin'
    }
  };

  const lightingFilters: Record<LightingMode, string> = {
    atelier: 'brightness-105 contrast-100 sepia-[0.08]',
    midnight: 'brightness-90 contrast-125 saturate-90 hue-rotate-[-10deg]',
    runway: 'brightness-100 contrast-110'
  };

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-[#080808]">
      {/* Background Image with Multi-Perspective Crossfade */}
      <div className="absolute inset-0 z-0 bg-[#080808]">
        <img
          key={heroPerspective}
          src={heroPerspectivesMap[heroPerspective].image}
          alt="Maison Mary Fashion Collection"
          className={`w-full h-full object-cover object-top sm:object-center transition-all duration-700 ease-out transform scale-100 ${lightingFilters[lighting]}`}
        />
        {/* Dark & Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-[#080808]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-transparent to-[#080808]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between py-4 min-h-[82vh]">
        {/* Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#c8a97e]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEW LUXURY COLLECTION • AUTUMN / WINTER</span>
          </div>

          <div className="flex items-center space-x-3 text-xs text-neutral-300 font-medium">
             <span className="text-white/60">Haute Couture • Bespoke Tailoring • Hand-Finished Silk</span>
            <span className="text-white/30">•</span>
            <span className="text-[#c8a97e] font-semibold">Prices in US Dollars ($) & Global Currencies</span>
          </div>
        </div>

        {/* Center Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-6 items-center">
          {/* Left Column: Hero Intro */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-[#c8a97e] mb-2 uppercase">
                 Haute Couture & American Luxury Fashion
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.05] mb-4 font-bold">
                Elegance in<br />
                Every Single<br />
                <span className="text-[#c8a97e] italic font-normal">Dimension.</span>
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-200 max-w-lg border-l-2 border-[#c8a97e] pl-4 font-sans-clean">
                 Discover handcrafted American silk gowns, Italian wool suits, artisanal handbags, and architecturally tailored outerwear tailored to fit you perfectly.
              </p>
            </div>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-neutral-300">
              <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>Multi-Angle Views</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>Custom Body Sizing</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>Doorstep Delivery</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                id="hero-explore-perspective-btn"
                onClick={onExplorePerspective}
                className="px-6 py-3.5 bg-[#c8a97e] text-[#080808] font-bold text-xs tracking-wider rounded hover:bg-[#d6b575] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#c8a97e]/20 flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4" />
                <span>SEE ALL ANGLES</span>
              </button>

              <button
                id="hero-view-collection-btn"
                onClick={onViewCollection}
                className="px-6 py-3.5 bg-black/60 backdrop-blur-md text-white border border-white/20 font-semibold text-xs tracking-wider rounded hover:bg-white/15 transition-all flex items-center justify-center space-x-2"
              >
                <span>SHOP ALL CLOTHES</span>
                <ArrowRight className="w-4 h-4 text-[#c8a97e]" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Preview Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Multi-Angle Viewing Highlight */}
            <div 
              onClick={onExplorePerspective}
              className="bg-[#131318] border border-white/15 hover:border-[#c8a97e]/60 p-5 flex flex-col justify-between min-h-[200px] rounded-lg shadow-xl cursor-pointer transition-all group"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-[#c8a97e] uppercase tracking-wider flex items-center space-x-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Multi-Angle Inspector</span>
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">Rotate</span>
              </div>

              <div>
                <h3 className="text-lg font-serif text-white font-semibold group-hover:text-[#c8a97e] transition-colors mb-1">
                  See Front, Side & Back
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Turn clothes around on the model and zoom in on pure silk, wool, and handwoven stitches before buying.
                </p>
              </div>
            </div>

            {/* Right Column 2: Mix & Match Studio + Order Card */}
            <div className="grid grid-rows-2 gap-4">
              <div 
                onClick={onViewCollection}
                className="bg-[#16161d] border border-white/15 hover:border-[#c8a97e]/60 p-4 rounded-lg flex flex-col justify-between cursor-pointer transition-all group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#c8a97e] uppercase">American & Global Styles</span>
                  <span className="text-[10px] text-neutral-400">Pure Fabrics</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#c8a97e] transition-colors">
                     Silk, Wool & Leather Wears
                  </h3>
                   <p className="text-xs text-neutral-300">Artisan American craftsmanship and modern design</p>
                 </div>
              </div>

              {/* Card 3: Styling Consultation */}
              <div className="bg-[#f4f2ee] text-[#111] p-4 flex flex-col justify-between rounded-lg shadow-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-600 uppercase block">
                      Custom Tailoring
                    </span>
                    <h3 className="text-base font-serif font-bold text-black">
                      Book a Free Consultation
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black/60" />
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/10">
                   <span className="text-[11px] text-neutral-700 font-medium">By Appointment • Worldwide</span>
                  <button
                    id="hero-book-fitting-quick-btn"
                    onClick={onOpenBooking}
                    className="bg-black text-white text-[11px] font-bold py-1.5 px-3 rounded hover:bg-neutral-800 transition-colors"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Angle Switcher Bar */}
        <div className="bg-[#121217]/95 backdrop-blur-xl border border-white/15 rounded-lg p-3 sm:p-4 mt-auto shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Angle Switcher */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
              <div className="flex items-center space-x-1.5 pr-2 border-r border-white/15 text-xs text-[#c8a97e] font-bold whitespace-nowrap">
                <RotateCw className="w-3.5 h-3.5" />
                <span>CHOOSE ANGLE:</span>
              </div>
              {(['front', 'side', 'back', 'macro', 'motion'] as PerspectiveType[]).map((p) => (
                <button
                  key={p}
                  id={`hero-persp-${p}`}
                  onClick={() => setHeroPerspective(p)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap ${
                    heroPerspective === p
                      ? 'bg-[#c8a97e] text-[#080808] shadow-md shadow-[#c8a97e]/20'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {heroPerspectivesMap[p].label}
                </button>
              ))}
            </div>

            {/* Right: Lighting Atmosphere Controls */}
            <div className="flex items-center justify-between lg:justify-end space-x-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
              <div className="text-xs text-neutral-300 font-medium hidden sm:block">
                Lighting:
              </div>
              <div className="flex items-center space-x-1 bg-black/60 p-1 rounded border border-white/10">
                {(['runway', 'atelier', 'midnight'] as LightingMode[]).map((mode) => (
                  <button
                    key={mode}
                    id={`hero-light-${mode}`}
                    onClick={() => setLighting(mode)}
                    className={`px-2.5 py-1 text-xs font-medium rounded capitalize transition-colors ${
                      lighting === mode
                        ? 'bg-white/25 text-[#c8a97e] font-bold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {mode === 'atelier' ? 'Atelier Light' : mode === 'runway' ? 'Bright Light' : 'Night Light'}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#c8a97e] font-medium px-2.5 py-1 bg-[#c8a97e]/15 rounded border border-[#c8a97e]/30">
                {heroPerspectivesMap[heroPerspective].tag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

