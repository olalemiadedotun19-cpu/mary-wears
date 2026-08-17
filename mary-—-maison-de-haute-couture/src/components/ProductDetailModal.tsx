import React, { useState } from 'react';
import { 
  X, 
  RotateCw, 
  ZoomIn, 
  ShoppingBag, 
  Calendar, 
  Check, 
  Compass, 
  Scissors, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Product, PerspectiveType, LightingMode, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currentCurrency: Currency;
  onAddToCart: (p: Product, color: string, size: string, monogram?: string) => void;
  onOpenBooking: (notes?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  currentCurrency,
  onAddToCart,
  onOpenBooking
}) => {
  if (!product) return null;

  const [activeAngle, setActiveAngle] = useState<PerspectiveType>('front');
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0] || 'US 6');
  const [customMonogram, setCustomMonogram] = useState('');
  const [added, setAdded] = useState(false);
  const [zoom, setZoom] = useState(false);

  const currentColor = product.colors[selectedColorIdx] || product.colors[0];
  const activeImage = currentColor.views[activeAngle] || currentColor.views.front;

  const handleAdd = () => {
    onAddToCart(product, currentColor.name, selectedSize, customMonogram.trim() || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity" 
        onClick={onClose} 
      />

      {/* Main Dialog Modal */}
      <div className="relative w-full max-w-5xl bg-[#101014] border border-white/15 rounded-sm shadow-2xl z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Bar with Close Button */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#14141a]">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-base sm:text-lg font-bold text-white">
              MAISON MARY
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs tracking-wider text-[#c8a97e] uppercase font-semibold">
              {product.category}
            </span>
          </div>

          <button
            id="close-product-modal-btn"
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 max-h-[80vh] overflow-y-auto">
          {/* Left 7 Columns: Multi-Angle Visual Gallery */}
          <div className="lg:col-span-7 p-4 sm:p-6 bg-[#09090c] flex flex-col justify-between space-y-4 border-b lg:border-b-0 lg:border-r border-white/10">
            {/* Visual Canvas */}
            <div className="relative aspect-[3/4] sm:aspect-[4/3.5] w-full bg-[#050507] rounded-lg overflow-hidden border border-white/10">
              <img
                src={activeImage}
                alt={`${product.name} - ${activeAngle}`}
                className={`w-full h-full object-cover transition-all duration-500 ${zoom ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
                onClick={() => setZoom(!zoom)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-xs text-[#c8a97e] uppercase font-semibold border border-white/10">
                View: {activeAngle.toUpperCase()}
              </div>

              <button
                onClick={() => setZoom(!zoom)}
                className="absolute top-3 right-3 p-1.5 bg-black/80 backdrop-blur-md rounded text-neutral-300 hover:text-white border border-white/10"
                title="Zoom in/out"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Perspective Angle Switcher Buttons */}
            <div className="grid grid-cols-6 gap-1.5 pt-2">
              {(['front', 'side', 'back', 'macro', 'motion', 'drape'] as PerspectiveType[]).map((angle) => {
                const labels: Record<PerspectiveType, string> = {
                  front: 'Front',
                  side: 'Side',
                  back: 'Back',
                  macro: 'Close-Up',
                  motion: 'Motion',
                  drape: 'Fabric'
                };
                return (
                  <button
                    key={angle}
                    id={`modal-angle-${angle}`}
                    onClick={() => {
                      setActiveAngle(angle);
                      setZoom(false);
                    }}
                    className={`py-2 text-xs uppercase rounded transition-all font-semibold ${
                      activeAngle === angle
                        ? 'bg-[#c8a97e] text-[#0b0b0d] font-bold'
                        : 'bg-white/10 text-neutral-300 hover:bg-white/15 hover:text-white border border-white/10'
                    }`}
                  >
                    {labels[angle]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right 5 Columns: Specifications & Direct Acquisition */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-6 bg-[#121217]">
            <div>
              <div className="text-xs tracking-wider text-[#c8a97e] uppercase font-bold mb-1">
                {product.category}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-white leading-tight font-bold">
                {product.name}
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">
                {product.composition}
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline space-x-2">
                <span className="text-2xl font-serif font-bold text-[#c8a97e]">
                  {formatPrice(product.priceUSD, currentCurrency)}
                </span>
                <span className="text-xs text-neutral-400">
                  (Free delivery included)
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-300 font-normal leading-relaxed font-sans-clean mt-4 border-t border-b border-white/10 py-3">
                {product.description}
              </p>

              {/* Color Shade Selection */}
              <div className="mt-4">
                <span className="text-xs text-neutral-300 uppercase block mb-2 font-semibold">
                  Choose Color: <span className="text-[#c8a97e]">{currentColor.name}</span>
                </span>
                <div className="flex items-center space-x-2">
                  {product.colors.map((c, idx) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        selectedColorIdx === idx
                          ? 'border-[#c8a97e] scale-110 ring-2 ring-[#c8a97e]/40'
                          : 'border-white/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-300 uppercase font-semibold">
                    Select Size:
                  </span>
                  <button
                    onClick={() => onOpenBooking(`Private Commission: ${product.name}`)}
                    className="text-xs text-[#c8a97e] hover:underline"
                  >
                    Need Custom Sizing?
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {product.availableSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs rounded transition-all text-center font-medium ${
                        selectedSize === sz
                          ? 'bg-[#c8a97e] text-[#0b0b0d] font-bold'
                          : 'bg-white/10 text-neutral-300 hover:bg-white/15 hover:text-white border border-white/10'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Gold Monogramming */}
              <div className="mt-4 bg-black/40 p-3 rounded-lg border border-white/10">
                <label className="text-xs text-[#c8a97e] uppercase block font-semibold mb-1">
                  Add Your Monogram / Initials (Free):
                </label>
                <input
                  type="text"
                  maxLength={3}
                  placeholder="e.g. M.R. (Up to 3 letters)"
                  value={customMonogram}
                  onChange={(e) => setCustomMonogram(e.target.value.toUpperCase())}
                  className="w-full bg-[#16161c] border border-white/15 px-3 py-2 text-xs text-white uppercase tracking-widest rounded focus:outline-none focus:border-[#c8a97e]"
                />
              </div>
            </div>

            {/* Actions: Add & Book */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                id="modal-add-to-bag-btn"
                onClick={handleAdd}
                className="w-full py-3.5 bg-[#c8a97e] text-[#0b0b0d] font-bold text-xs tracking-wider rounded hover:bg-[#dfc49c] transition-all flex items-center justify-center space-x-2 uppercase shadow-lg shadow-[#c8a97e]/20"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO YOUR BAG!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO SHOPPING BAG</span>
                  </>
                )}
              </button>

              <button
                id="modal-book-fitting-btn"
                onClick={() => onOpenBooking(`Commission: ${product.name}`)}
                className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-neutral-200 text-xs rounded border border-white/15 transition-colors uppercase text-center font-medium"
              >
                 Request a Private Styling Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
