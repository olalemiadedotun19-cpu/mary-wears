import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  Calendar, 
  Check, 
  RotateCw, 
  ArrowRight, 
  Eye, 
  RefreshCw,
  Palette,
  Scissors
} from 'lucide-react';
import { Product, Currency } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/formatters';

interface StylistStudioPageProps {
  currentCurrency: Currency;
  onAddToCart: (product: Product, colorName: string, size: string) => void;
  onOpenBooking: (notes?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const StylistStudioPage: React.FC<StylistStudioPageProps> = ({
  currentCurrency,
  onAddToCart,
  onOpenBooking,
  onSelectProduct
}) => {
  // Preset curated looks
  const presetLooks = [
      {
      name: 'Midnight Black-Tie Ensemble',
      topIndex: 0,
      bottomIndex: 1,
      accessoryIndex: 5,
      note: 'The iconic silk-brocade coat over a velvet evening gown for prestigious galas at Lincoln Center.'
    },
    {
      name: 'LA Resort Lounge Set',
      topIndex: 2,
      bottomIndex: 3,
      accessoryIndex: 5,
      note: 'Asymmetrical tailored blazer matched with silk wide-leg trousers for Beverly Hills soirées.'
    },
    {
      name: 'Winter Layered Look',
      topIndex: 4,
      bottomIndex: 1,
      accessoryIndex: 5,
      note: 'Luxury shearling-lined trench coat draped over a silk slip dress for winter soirées.'
    }
  ];

  const tops = PRODUCTS.filter((p) => p.category === "Women's Coats & Outerwear" || p.category === "Men's Suits & Blazers" || p.category === "Men's Shirts & Tees");
  const bottoms = PRODUCTS.filter((p) => p.category === "Women's Dresses & Gowns" || p.category === "Women's Tops & Blouses" || p.category === "Activewear & Loungewear");
  const accessories = PRODUCTS.filter((p) => p.category === 'Handbags & Accessories' || p.category === 'Footwear');

  const [selectedTop, setSelectedTop] = useState<Product>(tops[0] || PRODUCTS[0]);
  const [selectedBottom, setSelectedBottom] = useState<Product>(bottoms[0] || PRODUCTS[1]);
  const [selectedAccessory, setSelectedAccessory] = useState<Product>(accessories[0] || PRODUCTS[5]);

  const [selectedTopSize, setSelectedTopSize] = useState('FR 36 / US 4');
  const [selectedBottomSize, setSelectedBottomSize] = useState('FR 38 / US 6');
  const [addedAllSuccess, setAddedAllSuccess] = useState(false);

  const totalUSD = (selectedTop?.priceUSD || 0) + (selectedBottom?.priceUSD || 0) + (selectedAccessory?.priceUSD || 0);

  const handleApplyPreset = (preset: typeof presetLooks[0]) => {
    if (PRODUCTS[preset.topIndex]) setSelectedTop(PRODUCTS[preset.topIndex]);
    if (PRODUCTS[preset.bottomIndex]) setSelectedBottom(PRODUCTS[preset.bottomIndex]);
    if (PRODUCTS[preset.accessoryIndex]) setSelectedAccessory(PRODUCTS[preset.accessoryIndex]);
  };

  const handleAddAllToBag = () => {
    if (selectedTop) onAddToCart(selectedTop, selectedTop.colors[0].name, selectedTopSize);
    if (selectedBottom) onAddToCart(selectedBottom, selectedBottom.colors[0].name, selectedBottomSize);
    if (selectedAccessory) onAddToCart(selectedAccessory, selectedAccessory.colors[0].name, 'One Size');
    
    setAddedAllSuccess(true);
    setTimeout(() => setAddedAllSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#09090d] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#c8a97e] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-[#c8a97e]" />
            <span>INTERACTIVE MIX & MATCH STYLING STUDIO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Personal Couture <span className="text-[#c8a97e] italic">Ensemble Builder</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mt-2 leading-relaxed">
            Combine handcrafted American outerwear, tailored suits, and flowing silk gowns. Calculate complete outfit costs in {currentCurrency} and order the full styled ensemble in one click.
          </p>
        </div>

        {/* Preset Quick Combinations */}
        <div className="bg-[#12121a] p-4 rounded-xl border border-white/10 space-y-3">
          <span className="text-xs font-bold text-[#c8a97e] uppercase tracking-wider block">
            Featured Curated Ensembles by Mary:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {presetLooks.map((pr) => (
              <button
                key={pr.name}
                onClick={() => handleApplyPreset(pr)}
                className="p-3 bg-[#181824] hover:bg-[#202030] border border-white/10 hover:border-[#c8a97e] rounded-lg text-left transition-all group"
              >
                <div className="text-xs font-bold text-white group-hover:text-[#c8a97e]">
                  {pr.name}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                  {pr.note}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-Column Mix & Match Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Composite Mannequin Stage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#12121a] border border-white/10 p-5 rounded-xl space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase flex items-center space-x-1.5">
                  <Palette className="w-4 h-4 text-[#c8a97e]" />
                  <span>Ensemble Visual Preview</span>
                </span>
                <span className="text-xs text-[#c8a97e] font-mono">
                  3 Layer Co-Ord
                </span>
              </div>

              {/* Side-by-Side Layer Montage */}
              <div className="grid grid-cols-3 gap-3">
                {/* Top Piece */}
                <div 
                  onClick={() => onSelectProduct(selectedTop)}
                  className="bg-[#0c0c12] rounded-lg overflow-hidden border border-white/10 p-2 text-center cursor-pointer group hover:border-[#c8a97e]"
                >
                  <div className="aspect-[3/4] rounded overflow-hidden mb-2">
                    <img
                      src={selectedTop?.colors[0].views.front}
                      alt={selectedTop?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] text-[#c8a97e] uppercase font-bold block">1. Outerwear</span>
                  <span className="text-xs text-white font-serif font-bold truncate block">{selectedTop?.name}</span>
                  <span className="text-xs text-[#c8a97e] font-bold mt-0.5 block">{formatPrice(selectedTop?.priceUSD || 0, currentCurrency)}</span>
                </div>

                {/* Bottom Piece */}
                <div 
                  onClick={() => onSelectProduct(selectedBottom)}
                  className="bg-[#0c0c12] rounded-lg overflow-hidden border border-white/10 p-2 text-center cursor-pointer group hover:border-[#c8a97e]"
                >
                  <div className="aspect-[3/4] rounded overflow-hidden mb-2">
                    <img
                      src={selectedBottom?.colors[0].views.front}
                      alt={selectedBottom?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] text-[#c8a97e] uppercase font-bold block">2. Trousers / Gown</span>
                  <span className="text-xs text-white font-serif font-bold truncate block">{selectedBottom?.name}</span>
                  <span className="text-xs text-[#c8a97e] font-bold mt-0.5 block">{formatPrice(selectedBottom?.priceUSD || 0, currentCurrency)}</span>
                </div>

                {/* Accessory */}
                <div 
                  onClick={() => onSelectProduct(selectedAccessory)}
                  className="bg-[#0c0c12] rounded-lg overflow-hidden border border-white/10 p-2 text-center cursor-pointer group hover:border-[#c8a97e]"
                >
                  <div className="aspect-[3/4] rounded overflow-hidden mb-2">
                    <img
                      src={selectedAccessory?.colors[0].views.front}
                      alt={selectedAccessory?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] text-[#c8a97e] uppercase font-bold block">3. Accessory</span>
                  <span className="text-xs text-white font-serif font-bold truncate block">{selectedAccessory?.name}</span>
                  <span className="text-xs text-[#c8a97e] font-bold mt-0.5 block">{formatPrice(selectedAccessory?.priceUSD || 0, currentCurrency)}</span>
                </div>
              </div>

              {/* Total Price & Complete Order Bar */}
              <div className="bg-[#181824] p-4 rounded-lg border border-white/10 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-neutral-300">Complete 3-Piece Look Total:</span>
                  <span className="text-2xl font-serif font-bold text-[#c8a97e]">
                    {formatPrice(totalUSD, currentCurrency)}
                  </span>
                </div>

                <button
                  onClick={handleAddAllToBag}
                  className="w-full py-4 bg-[#c8a97e] text-black font-bold text-xs tracking-wider uppercase rounded hover:bg-[#dfc49c] transition-all shadow-xl shadow-[#c8a97e]/20 flex items-center justify-center space-x-2"
                >
                  {addedAllSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added Complete Ensemble to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add Entire 3-Piece Ensemble to Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenBooking(`Custom styling consultation for ${selectedTop?.name} + ${selectedBottom?.name}`)}
                  className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded border border-white/10 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#c8a97e]" />
                  <span>Book a Private Styling Consultation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Wardrobe Pickers */}
          <div className="lg:col-span-6 space-y-5">
            {/* 1. Outerwear / Top Piece Picker */}
            <div className="bg-[#12121a] p-4 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#c8a97e] text-black text-[10px] font-bold flex items-center justify-center">1</span>
                  <span>Select Top / Jacket:</span>
                </span>
                <span className="text-xs font-bold text-[#c8a97e]">{selectedTop?.name}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {tops.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTop(t)}
                    className={`p-1.5 rounded-lg border text-left transition-all ${
                      selectedTop?.id === t.id
                        ? 'border-[#c8a97e] bg-[#c8a97e]/15'
                        : 'border-white/10 bg-black/40 hover:border-white/30'
                    }`}
                  >
                    <img src={t.colors[0].views.front} alt={t.name} className="w-full aspect-square object-cover rounded mb-1" />
                    <div className="text-[11px] font-bold text-white truncate">{t.name}</div>
                    <div className="text-[10px] text-[#c8a97e]">{formatPrice(t.priceUSD, currentCurrency)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Trousers / Gown Picker */}
            <div className="bg-[#12121a] p-4 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#c8a97e] text-black text-[10px] font-bold flex items-center justify-center">2</span>
                  <span>Select Bottom / Gown:</span>
                </span>
                <span className="text-xs font-bold text-[#c8a97e]">{selectedBottom?.name}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {bottoms.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBottom(b)}
                    className={`p-1.5 rounded-lg border text-left transition-all ${
                      selectedBottom?.id === b.id
                        ? 'border-[#c8a97e] bg-[#c8a97e]/15'
                        : 'border-white/10 bg-black/40 hover:border-white/30'
                    }`}
                  >
                    <img src={b.colors[0].views.front} alt={b.name} className="w-full aspect-square object-cover rounded mb-1" />
                    <div className="text-[11px] font-bold text-white truncate">{b.name}</div>
                    <div className="text-[10px] text-[#c8a97e]">{formatPrice(b.priceUSD, currentCurrency)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Accessory Picker */}
            <div className="bg-[#12121a] p-4 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#c8a97e] text-black text-[10px] font-bold flex items-center justify-center">3</span>
                  <span>Select Accessory:</span>
                </span>
                <span className="text-xs font-bold text-[#c8a97e]">{selectedAccessory?.name}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {accessories.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelectedAccessory(a)}
                    className={`p-1.5 rounded-lg border text-left transition-all ${
                      selectedAccessory?.id === a.id
                        ? 'border-[#c8a97e] bg-[#c8a97e]/15'
                        : 'border-white/10 bg-black/40 hover:border-white/30'
                    }`}
                  >
                    <img src={a.colors[0].views.front} alt={a.name} className="w-full aspect-square object-cover rounded mb-1" />
                    <div className="text-[11px] font-bold text-white truncate">{a.name}</div>
                    <div className="text-[10px] text-[#c8a97e]">{formatPrice(a.priceUSD, currentCurrency)}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
