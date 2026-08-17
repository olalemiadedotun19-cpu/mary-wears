import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currentCurrency: Currency;
  onRemoveWishlist: (p: Product) => void;
  onMoveToCart: (p: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  currentCurrency,
  onRemoveWishlist,
  onMoveToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Slide Drawer */}
      <div className="relative w-full max-w-md bg-[#101015] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="font-serif text-xl text-white font-bold block">
              Saved Favorites
            </span>
            <span className="text-xs text-[#c8a97e] font-medium">
              {products.length} Saved Item{products.length !== 1 ? 's' : ''}
            </span>
          </div>

          <button
            id="close-wishlist-btn"
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close saved items"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {products.length === 0 ? (
          <div className="my-auto text-center py-12 space-y-4">
            <Heart className="w-12 h-12 text-neutral-500 mx-auto" />
            <h4 className="text-lg font-serif text-white font-bold">No Saved Outfits Yet</h4>
            <p className="text-xs text-neutral-300 font-normal max-w-xs mx-auto">
              Tap the heart icon on any outfit or shirt you like to save it here for later.
            </p>
          </div>
        ) : (
          <div className="py-4 space-y-3 flex-1 overflow-y-auto">
            {products.map((p) => (
              <div
                key={p.id}
                className="p-3 bg-[#121217] border border-white/10 rounded-lg flex space-x-3 relative group"
              >
                <img
                  src={p.colors[0].views.front}
                  alt={p.name}
                  className="w-16 h-20 object-cover rounded border border-white/10 flex-shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-serif text-white font-bold pr-4">
                        {p.name}
                      </h4>
                      <button
                        onClick={() => onRemoveWishlist(p)}
                        className="text-neutral-400 hover:text-red-400 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-neutral-400 mt-0.5">
                      {p.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                    <span className="text-xs font-bold text-[#c8a97e]">
                      {formatPrice(p.priceUSD, currentCurrency)}
                    </span>

                    <button
                      onClick={() => onMoveToCart(p)}
                      className="px-3 py-1.5 bg-[#c8a97e] text-[#0b0b0d] text-xs font-bold rounded hover:bg-[#dfc49c] uppercase flex items-center space-x-1"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full py-3 bg-white/10 hover:bg-white/15 text-white text-xs font-bold rounded uppercase transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
