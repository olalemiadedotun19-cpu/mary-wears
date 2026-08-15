import React, { useState } from 'react';
import { Eye, ShoppingBag, Compass, Heart, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { Product, Currency, PerspectiveType } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/formatters';

interface CollectionGridProps {
  currentCurrency: Currency;
  onSelectProduct: (p: Product) => void;
  onAddToCart: (p: Product, color: string, size: string) => void;
  onToggleWishlist: (p: Product) => void;
  wishlistIds: string[];
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({
  currentCurrency,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredAngles, setHoveredAngles] = useState<Record<string, PerspectiveType>>({});
  const [viewLayout, setViewLayout] = useState<'editorial' | 'grid'>('editorial');

  const categories = ['All', 'Women\'s Dresses & Gowns', 'Women\'s Tops & Blouses', 'Women\'s Coats & Outerwear', 'Men\'s Suits & Blazers', 'Men\'s Shirts & Tees', 'Handbags & Accessories', 'Footwear', 'Activewear & Loungewear'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const toggleCardAngle = (productId: string, nextAngle: PerspectiveType) => {
    setHoveredAngles((prev) => ({
      ...prev,
      [productId]: nextAngle
    }));
  };

  return (
    <section id="collections" className="py-24 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & View Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/10 pb-6">
          <div>
               <div className="text-xs font-semibold tracking-wider text-[#c8a97e] uppercase mb-1">
               American Luxury Collection
             </div>
             <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight font-bold">
               Shop Clothes, Suits <span className="text-[#c8a97e] italic">& Wears</span>
             </h2>
             <p className="text-neutral-300 text-xs sm:text-sm font-normal max-w-xl mt-2 font-sans-clean border-l-2 border-[#c8a97e] pl-3">
               Explore handcrafted American silk gowns, Italian wool suits, luxury blazers, and designer accessories. Tap any outfit to view front, side, and back.
             </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cat-filter-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-all ${
                  activeCategory === cat
                    ? 'bg-[#c8a97e] text-[#0b0b0d] font-bold shadow-md'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => {
            const currentAngle = hoveredAngles[p.id] || 'front';
            const defaultColor = p.colors[0];
            const currentImage = defaultColor.views[currentAngle] || defaultColor.views.front;
            const isWishlisted = wishlistIds.includes(p.id);

            return (
              <div
                key={p.id}
                id={`product-card-${p.id}`}
                className="group flex flex-col bg-[#13131a] border border-white/15 rounded-lg overflow-hidden hover:border-[#c8a97e]/60 transition-all duration-300 shadow-xl"
              >
                {/* Image Container with Perspective Flip Switchers */}
                <div className="relative aspect-[3/4] w-full bg-[#08080a] overflow-hidden">
                  <img
                    src={currentImage}
                    alt={p.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                    onClick={() => onSelectProduct(p)}
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Wishlist Button */}
                  <button
                    id={`wishlist-toggle-${p.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(p);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                      isWishlisted
                        ? 'bg-[#c8a97e] text-[#0b0b0d]'
                        : 'bg-black/60 text-neutral-300 hover:text-white hover:bg-black/90'
                    }`}
                    aria-label="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#0b0b0d]' : ''}`} />
                  </button>

                  {/* Quick Angle View Switcher Pills directly on card */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                    <div className="flex items-center space-x-1 bg-black/75 backdrop-blur-md p-1 rounded border border-white/20">
                      {(['front', 'side', 'back'] as PerspectiveType[]).map((angle) => (
                        <button
                          key={angle}
                          id={`card-angle-${p.id}-${angle}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardAngle(p.id, angle);
                          }}
                          className={`px-2 py-0.5 text-[10px] uppercase font-semibold rounded transition-colors ${
                            currentAngle === angle
                              ? 'bg-[#c8a97e] text-[#0b0b0d] font-bold'
                              : 'text-neutral-300 hover:text-white'
                          }`}
                        >
                          {angle}
                        </button>
                      ))}
                    </div>

                    <button
                      id={`inspect-btn-${p.id}`}
                      onClick={() => onSelectProduct(p)}
                      className="px-2.5 py-1 bg-white/20 hover:bg-[#c8a97e] hover:text-[#0b0b0d] text-white text-xs font-semibold rounded backdrop-blur-md transition-all flex items-center space-x-1"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#c8a97e] font-semibold mb-1">
                      <span>{p.category}</span>
                      <span className="text-neutral-400 font-normal">{p.season.split(' ')[0]}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(p)}
                      className="text-base font-serif text-white hover:text-[#c8a97e] cursor-pointer transition-colors leading-tight font-bold"
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs text-neutral-400 italic mt-0.5 line-clamp-1">
                      {p.frenchSubtitle}
                    </p>

                    <p className="text-xs text-neutral-300 font-normal mt-1.5 line-clamp-2 leading-relaxed">
                      {p.silhouetteNotes}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                        Price
                      </span>
                      <span className="text-lg font-bold text-[#c8a97e]">
                        {formatPrice(p.priceUSD, currentCurrency)}
                      </span>
                    </div>

                    <button
                      id={`quick-acquire-${p.id}`}
                      onClick={() => onAddToCart(p, p.colors[0].name, p.availableSizes[0] || 'FR 36')}
                      className="px-3.5 py-2 bg-white/10 hover:bg-[#c8a97e] hover:text-[#0b0b0d] text-neutral-200 text-xs font-semibold rounded transition-all border border-white/15 flex items-center space-x-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
