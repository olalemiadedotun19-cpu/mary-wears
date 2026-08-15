import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ShoppingBag, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2,
  Award,
  Eye,
  Camera,
  Layers,
  RotateCw
} from 'lucide-react';
import { Product, Currency, LookbookLook } from '../types';
import { LOOKBOOK_LOOKS, PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/formatters';

interface RunwayLookbookPageProps {
  currentCurrency: Currency;
  onSelectProduct: (product: Product) => void;
  onOpenBooking: (productName?: string) => void;
  onAddToCart: (product: Product, colorName: string, size: string) => void;
}

export const RunwayLookbookPage: React.FC<RunwayLookbookPageProps> = ({
  currentCurrency,
  onSelectProduct,
  onOpenBooking,
  onAddToCart
}) => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [activeAngle, setActiveAngle] = useState<'front' | 'side' | 'back' | 'macro'>('front');
  const [isPlayingRunway, setIsPlayingRunway] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const look = LOOKBOOK_LOOKS[activeLookIndex] || LOOKBOOK_LOOKS[0];

  // Included products in this look
  const includedProducts = PRODUCTS.filter((p) => look.productsIncluded?.includes(p.id));

  // Auto advance runway looks if playing
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingRunway) {
      timer = setInterval(() => {
        setActiveLookIndex((prev) => (prev + 1) % LOOKBOOK_LOOKS.length);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlayingRunway]);

  const getActiveImage = () => {
    switch (activeAngle) {
      case 'side':
        return look.sideImage;
      case 'back':
        return look.backImage;
      case 'macro':
        return look.macroImage;
      default:
        return look.frontImage;
    }
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-[#c8a97e] uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>RUNWAY PRESENTATION N° 07 • GLOBAL COUTURE SHOWCASE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Autumn / Winter <span className="text-[#c8a97e] italic">Runway Lookbook</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mt-2 leading-relaxed">
              Explore the fusion of American luxury tailoring and timeless haute couture silhouette. Experience movement drapes, master hand-embroidery, and order bespoke runway allocations.
            </p>
          </div>

          {/* Runway Mode Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlayingRunway(!isPlayingRunway)}
              className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center space-x-2 transition-all ${
                isPlayingRunway
                  ? 'bg-[#c8a97e] text-black shadow-lg shadow-[#c8a97e]/30'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              }`}
            >
              {isPlayingRunway ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlayingRunway ? 'Pause Runway' : 'Auto Play Runway'}</span>
            </button>

            <button
              onClick={() => setAudioPlaying(!audioPlaying)}
              className={`p-2 rounded-lg border transition-all ${
                audioPlaying
                  ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-[#c8a97e]'
                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
              }`}
              title={audioPlaying ? 'Mute Runway Score' : 'Play Runway Score'}
            >
              {audioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Look Selector Bar */}
        <div className="bg-[#111118] p-3 rounded-xl border border-white/10 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {LOOKBOOK_LOOKS.map((lk, idx) => (
            <button
              key={lk.id}
              onClick={() => {
                setActiveLookIndex(idx);
                setIsPlayingRunway(false);
              }}
              className={`px-4 py-2.5 rounded-lg whitespace-nowrap text-xs transition-all flex items-center space-x-2 flex-shrink-0 ${
                activeLookIndex === idx
                  ? 'bg-[#c8a97e] text-[#08080a] font-bold shadow-md'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/15 hover:text-white border border-white/5'
              }`}
            >
              <span className="font-mono font-bold">LOOK 0{lk.lookNumber}</span>
              <span className="opacity-75">• {lk.title}</span>
            </button>
          ))}
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center 8 Columns: Runway Visual Stage */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[3/4] sm:aspect-[16/11] w-full bg-[#0a0a0f] rounded-xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src={getActiveImage()}
                alt={look.title}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

              {/* Look Number Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#c8a97e]/40">
                <span className="text-[10px] text-[#c8a97e] font-bold block uppercase tracking-widest">
                  COUTURE RUNWAY SELECTION
                </span>
                <h3 className="text-base font-serif font-bold text-white">
                  Look 0{look.lookNumber}: {look.title}
                </h3>
              </div>

              {/* Angle Switcher Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <div className="flex items-center space-x-2 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-white/15">
                  {(['front', 'side', 'back', 'macro'] as const).map((ang) => (
                    <button
                      key={ang}
                      onClick={() => setActiveAngle(ang)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded uppercase transition-all ${
                        activeAngle === ang
                          ? 'bg-[#c8a97e] text-black font-bold'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                    >
                      {ang === 'front' ? '0° Stride' : ang === 'side' ? '90° Turn' : ang === 'back' ? '180° Drape' : 'Fabric Macro'}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveLookIndex((prev) => (prev > 0 ? prev - 1 : LOOKBOOK_LOOKS.length - 1))}
                    className="p-2 bg-black/80 hover:bg-black text-white rounded-lg border border-white/15"
                    title="Previous Look"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveLookIndex((prev) => (prev + 1) % LOOKBOOK_LOOKS.length)}
                    className="p-2 bg-black/80 hover:bg-black text-white rounded-lg border border-white/15"
                    title="Next Look"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Look Angles Quick Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { key: 'front', label: 'Front Movement', img: look.frontImage },
                { key: 'side', label: 'Side Cut', img: look.sideImage },
                { key: 'back', label: 'Back Flow', img: look.backImage },
                { key: 'macro', label: 'Textile Zoom', img: look.macroImage }
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => setActiveAngle(item.key as any)}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all aspect-[4/3] relative ${
                    activeAngle === item.key ? 'border-[#c8a97e] ring-2 ring-[#c8a97e]/40' : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-bold text-white truncate">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 4 Columns: Editorial Narrative & Garment Breakdown */}
          <div className="lg:col-span-4 bg-[#12121a] border border-white/10 p-6 rounded-xl space-y-6 shadow-2xl">
            <div>
              <span className="text-xs text-[#c8a97e] font-bold uppercase tracking-wider">
                EDITORIAL NOTES BY MARY
              </span>
              <h2 className="text-2xl font-serif font-bold text-white mt-1">
                {look.title}
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Worn on runway by <strong>{look.model}</strong> • {look.season}
              </p>
            </div>

            <p className="text-xs text-neutral-200 leading-relaxed border-t border-b border-white/10 py-3 font-normal">
              "{look.description}"
            </p>

            {/* Garments in this Look */}
            <div>
              <h4 className="text-xs font-bold text-[#c8a97e] uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <Layers className="w-4 h-4" />
                <span>Garments in this Runway Look:</span>
              </h4>

              <div className="space-y-3">
                {includedProducts.length > 0 ? (
                  includedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-[#181824] border border-white/10 p-3 rounded-lg flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <img
                          src={prod.colors[0].views.front}
                          alt={prod.name}
                          className="w-12 h-14 object-cover rounded border border-white/10 flex-shrink-0"
                        />
                        <div className="truncate">
                          <div className="text-xs font-bold text-white truncate">{prod.name}</div>
                          <div className="text-[11px] text-[#c8a97e] font-bold font-serif">
                            {formatPrice(prod.priceUSD, currentCurrency)}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onAddToCart(prod, prod.colors[0].name, prod.availableSizes[0] || 'FR 36')}
                        className="p-2 bg-[#c8a97e] text-black rounded hover:bg-[#dfc49c] transition-colors flex-shrink-0"
                        title="Add to Bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-neutral-400">
                    Bespoke runway one-of-one piece. Custom commission available on request.
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onOpenBooking(`Pre-Order Runway Look 0${look.lookNumber}: ${look.title}`)}
                className="w-full py-4 bg-[#c8a97e] text-black font-bold text-xs tracking-wider uppercase rounded hover:bg-[#dfc49c] transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Pre-Order Runway Allocation</span>
              </button>

              <button
                onClick={() => {
                  if (includedProducts[0]) onSelectProduct(includedProducts[0]);
                }}
                className="w-full py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded border border-white/15 transition-colors flex items-center justify-center space-x-2"
              >
                <RotateCw className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>Inspect in Detail</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
