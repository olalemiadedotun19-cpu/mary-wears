import React, { useState } from 'react';
import { Layers, Sparkles, ShoppingBag, Calendar, Check, RotateCw, Plus, Compass } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, Currency, PerspectiveType } from '../types';
import { formatPrice } from '../utils/formatters';

interface StylistStudioProps {
  currentCurrency: Currency;
  onAddToCart: (p: Product, color: string, size: string) => void;
  onOpenBooking: (notes?: string) => void;
}

export const StylistStudio: React.FC<StylistStudioProps> = ({
  currentCurrency,
  onAddToCart,
  onOpenBooking
}) => {
  // Categorized selection
  const outerwearPieces = PRODUCTS.filter((p) => p.category === "Women's Coats & Outerwear" || p.category === "Men's Suits & Blazers");
  const eveningOrBasePieces = PRODUCTS.filter((p) => p.category === "Women's Dresses & Gowns" || p.category === "Women's Tops & Blouses" || p.category === "Men's Shirts & Tees");
  const bagPieces = PRODUCTS.filter((p) => p.category === 'Handbags & Accessories');
  const shoePieces = PRODUCTS.filter((p) => p.category === 'Footwear');

  const [selectedOuterwear, setSelectedOuterwear] = useState<Product>(outerwearPieces[0]);
  const [selectedBase, setSelectedBase] = useState<Product>(eveningOrBasePieces[0]);
  const [selectedBag, setSelectedBag] = useState<Product | null>(bagPieces[0] || null);
  const [selectedShoe, setSelectedShoe] = useState<Product | null>(shoePieces[0] || null);

  const [stylistAngle, setStylistAngle] = useState<PerspectiveType>('front');
  const [addedAllSuccess, setAddedAllSuccess] = useState(false);

  const currentEnsemble = [
    selectedOuterwear,
    selectedBase,
    selectedBag,
    selectedShoe
  ].filter(Boolean) as Product[];

  // Deduplicate products in case same was selected
  const uniqueEnsemble = Array.from(new Set(currentEnsemble));
  const totalEnsemblePrice = uniqueEnsemble.reduce((sum, item) => sum + item.priceUSD, 0);

  const handleAddAllToBag = () => {
    uniqueEnsemble.forEach((item) => {
      onAddToCart(item, item.colors[0].name, item.availableSizes[0] || 'FR 36');
    });
    setAddedAllSuccess(true);
    setTimeout(() => setAddedAllSuccess(false), 2500);
  };

  return (
    <section id="stylist-studio" className="py-24 bg-[#0a0a0d] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#c8a97e] uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Outfit Builder</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight font-bold">
            Mix & Match <span className="text-[#c8a97e] italic">Stylist Studio</span>
          </h2>
          <p className="text-neutral-300 text-xs sm:text-base font-normal mt-2 font-sans-clean">
            Combine handcrafted American silk gowns, tailored suits, luxury handbags, and shoes to create your personalized full outfit.
          </p>
        </div>

        {/* Studio Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 5 Columns: Interactive Selection Matrix */}
          <div className="lg:col-span-5 space-y-5">
            {/* Category 1: Outerwear & Coats */}
            <div className="bg-[#13131a] border border-white/15 p-4 rounded-lg">
              <span className="text-xs text-[#c8a97e] font-bold uppercase block mb-2">
                1. Choose Jacket, Blazer or Native Wear
              </span>
              <div className="grid grid-cols-2 gap-2">
                {outerwearPieces.map((item) => (
                  <button
                    key={item.id}
                    id={`stylist-outer-${item.id}`}
                    onClick={() => setSelectedOuterwear(item)}
                    className={`p-2 rounded text-left transition-all border ${
                      selectedOuterwear.id === item.id
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-serif block font-bold truncate">{item.name}</span>
                    <span className="text-[11px] text-[#c8a97e] font-semibold">{formatPrice(item.priceUSD, currentCurrency)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category 2: Evening Gown / Silhouette Base */}
            <div className="bg-[#13131a] border border-white/15 p-4 rounded-lg">
              <span className="text-xs text-[#c8a97e] font-bold uppercase block mb-2">
                2. Choose Dress, Shirt or Gown
              </span>
              <div className="grid grid-cols-2 gap-2">
                {eveningOrBasePieces.map((item) => (
                  <button
                    key={item.id}
                    id={`stylist-base-${item.id}`}
                    onClick={() => setSelectedBase(item)}
                    className={`p-2 rounded text-left transition-all border ${
                      selectedBase.id === item.id
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-serif block font-bold truncate">{item.name}</span>
                    <span className="text-[11px] text-[#c8a97e] font-semibold">{formatPrice(item.priceUSD, currentCurrency)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category 3: Leather Goods & Footwear */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bag */}
              <div className="bg-[#13131a] border border-white/15 p-4 rounded-lg">
                <span className="text-xs text-[#c8a97e] font-bold uppercase block mb-2">
                  3. Pick a Handbag
                </span>
                {bagPieces.map((item) => (
                  <button
                    key={item.id}
                    id={`stylist-bag-${item.id}`}
                    onClick={() => setSelectedBag(selectedBag?.id === item.id ? null : item)}
                    className={`w-full p-2 rounded text-left transition-all border mb-1.5 ${
                      selectedBag?.id === item.id
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-serif block font-bold truncate">{item.name}</span>
                    <span className="text-[11px] text-[#c8a97e] font-semibold">{formatPrice(item.priceUSD, currentCurrency)}</span>
                  </button>
                ))}
              </div>

              {/* Shoes */}
              <div className="bg-[#13131a] border border-white/15 p-4 rounded-lg">
                <span className="text-xs text-[#c8a97e] font-bold uppercase block mb-2">
                  4. Pick Matching Shoes
                </span>
                {shoePieces.map((item) => (
                  <button
                    key={item.id}
                    id={`stylist-shoe-${item.id}`}
                    onClick={() => setSelectedShoe(selectedShoe?.id === item.id ? null : item)}
                    className={`w-full p-2 rounded text-left transition-all border mb-1.5 ${
                      selectedShoe?.id === item.id
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-serif block font-bold truncate">{item.name}</span>
                    <span className="text-[11px] text-[#c8a97e] font-semibold">{formatPrice(item.priceUSD, currentCurrency)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Real-Time Layered Ensemble Visualizer */}
          <div className="lg:col-span-7 bg-[#13131a] border border-white/15 p-5 sm:p-6 rounded-lg shadow-2xl flex flex-col justify-between">
            <div>
              {/* Perspective Angle Switcher for the Ensemble */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-[#c8a97e]" />
                  <span className="text-xs font-bold text-white uppercase">
                    VIEW OUTFIT ANGLE:
                  </span>
                </div>

                <div className="flex space-x-1 bg-black/60 p-1 rounded border border-white/15">
                  {(['front', 'side', 'back', 'macro'] as PerspectiveType[]).map((angle) => (
                    <button
                      key={angle}
                      id={`stylist-angle-${angle}`}
                      onClick={() => setStylistAngle(angle)}
                      className={`px-2.5 py-1 text-xs uppercase font-semibold rounded transition-all ${
                        stylistAngle === angle
                          ? 'bg-[#c8a97e] text-[#0b0b0d] font-bold'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                    >
                      {angle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Multi-Tile Presentation */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {/* Hero Layer */}
                <div className="col-span-2 relative aspect-[4/3] sm:aspect-[16/10] bg-[#070709] rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={selectedOuterwear.colors[0].views[stylistAngle] || selectedOuterwear.colors[0].views.front}
                    alt={selectedOuterwear.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/15 text-xs text-[#c8a97e] font-semibold">
                    Top: {selectedOuterwear.name}
                  </div>
                </div>

                {/* Base Gown Layer */}
                <div className="relative aspect-square sm:aspect-auto bg-[#070709] rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={selectedBase.colors[0].views[stylistAngle] || selectedBase.colors[0].views.front}
                    alt={selectedBase.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/15 text-[10px] text-white font-medium truncate max-w-[90%]">
                    {selectedBase.name}
                  </div>
                </div>

                {/* Bag Layer */}
                {selectedBag && (
                  <div className="relative aspect-square bg-[#070709] rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={selectedBag.colors[0].views.front}
                      alt={selectedBag.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/15 text-[10px] text-white font-medium truncate max-w-[90%]">
                      {selectedBag.name}
                    </div>
                  </div>
                )}

                {/* Shoe Layer */}
                {selectedShoe && (
                  <div className="relative aspect-square bg-[#070709] rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={selectedShoe.colors[0].views.side || selectedShoe.colors[0].views.front}
                      alt={selectedShoe.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/15 text-[10px] text-white font-medium truncate max-w-[90%]">
                      {selectedShoe.name}
                    </div>
                  </div>
                )}
              </div>

              {/* Ensemble Specification Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-300 font-sans-clean bg-black/50 p-3.5 rounded-lg border border-white/10">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-neutral-400">Total Items in Look:</span>
                  <span className="text-white font-semibold">{uniqueEnsemble.length} Outfits & Accessories</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-neutral-400">Fabrics:</span>
                  <span className="text-[#c8a97e]">{selectedOuterwear.fabricProvenance} + {selectedBase.composition.split(',')[0]}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-400">Packaging:</span>
                  <span className="text-neutral-200">Luxury Gift Box & Garment Bag Included</span>
                </div>
              </div>
            </div>

            {/* Total Ensemble Price & Commission Buttons */}
            <div className="pt-5 border-t border-white/10 mt-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider block">
                    Combined Look Total Price
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#c8a97e]">
                    {formatPrice(totalEnsemblePrice, currentCurrency)}
                  </span>
                </div>

                <span className="text-xs text-white bg-white/10 px-3 py-1 rounded border border-white/20 font-semibold">
                  Custom Styled Look
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="stylist-acquire-all-btn"
                  onClick={handleAddAllToBag}
                  className="py-3.5 bg-[#c8a97e] text-[#0b0b0d] font-bold text-xs tracking-wider rounded hover:bg-[#dfc49c] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#c8a97e]/20"
                >
                  {addedAllSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{uniqueEnsemble.length} ITEMS ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD ENTIRE LOOK TO BAG</span>
                    </>
                  )}
                </button>

                <button
                  id="stylist-book-fitting-btn"
                  onClick={() => onOpenBooking(`Custom Stylist Ensemble: ${uniqueEnsemble.map(u => u.name).join(' + ')}`)}
                  className="py-3.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded border border-white/20 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#c8a97e]" />
                  <span>Request Styling Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
