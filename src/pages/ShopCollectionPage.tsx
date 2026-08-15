import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Eye, 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Grid, 
  List, 
  Check, 
  RotateCw,
  Truck,
  ShieldCheck,
  Tag,
  Filter,
  X,
  SlidersHorizontal,
  Crown,
  Layers,
  Cloud,
  Scissors,
  Shirt,
  Footprints,
  Dumbbell,
  type LucideIcon
} from 'lucide-react';
import { Product, Currency, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/formatters';

interface ShopCollectionPageProps {
  currentCurrency: Currency;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, colorName: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

const CATEGORIES: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'All', label: 'All Luxury Pieces', icon: Sparkles },
  { id: "Women's Dresses & Gowns", label: "Dresses & Gowns", icon: Crown },
  { id: "Women's Tops & Blouses", label: "Tops & Blouses", icon: Layers },
  { id: "Women's Coats & Outerwear", label: "Coats & Outerwear", icon: Cloud },
  { id: "Men's Suits & Blazers", label: "Suits & Blazers", icon: Scissors },
  { id: "Men's Shirts & Tees", label: "Shirts & Tees", icon: Shirt },
  { id: 'Handbags & Accessories', label: 'Handbags & Bags', icon: ShoppingBag },
  { id: 'Footwear', label: 'Footwear', icon: Footprints },
  { id: 'Activewear & Loungewear', label: 'Activewear & Loungewear', icon: Dumbbell },
];

const GENDER_OPTIONS = ['All', 'Women', 'Men', 'Unisex'];
const TAG_OPTIONS = ['All', 'Best Seller', 'Red Carpet', 'Heirloom', 'Runway', 'New In', 'Handcrafted'];

const QUICK_TAGS = ['Silk', 'Wool', 'Velvet', 'Denim', 'Leather', 'Cashmere', 'Handbag', 'Shoes', 'Gown', 'Blazer'];

export const ShopCollectionPage: React.FC<ShopCollectionPageProps> = ({
  currentCurrency,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [layoutMode, setLayoutMode] = useState<'grid-4' | 'grid-2' | 'list'>('grid-4');
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 24;

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchGender = selectedGender === 'All' || !p.gender || p.gender === selectedGender || p.gender === 'Unisex';
      const matchTag = selectedTag === 'All' || p.tag === selectedTag;
      
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.fabricProvenance.toLowerCase().includes(query) ||
        p.composition.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);

      return matchCat && matchGender && matchTag && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedGender, selectedTag, searchQuery, sortBy]);

  // Paginated Slice
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(0, currentPage * itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handleQuickAdd = (p: Product) => {
    onAddToCart(p, p.colors[0].name, p.availableSizes[0] || 'Bespoke');
    setAddedItemMap((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [p.id]: false }));
    }, 2000);
  };

  const handleSelectQuickTag = (tag: string) => {
    setSearchQuery(tag);
    setCurrentPage(1);
  };

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedGender('All');
    setSelectedTag('All');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#c8a97e] uppercase tracking-widest mb-2">
            <span>MAISON MARY HAUTE COUTURE • AMERICAN LUXURY</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                Authentic American <span className="text-[#c8a97e] italic">Contemporary Collection</span>
               </h1>
               <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl mt-2 leading-relaxed">
                 Discover over <strong className="text-white">200+ masterfully crafted luxury garments</strong> across American silk gowns, Italian wool suits, artisanal handbags, designer footwear, and architectural outerwear.
               </p>
            </div>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300">
              <div className="flex items-center space-x-1.5 bg-[#12121a] px-3 py-1.5 rounded-lg border border-white/10">
                <Truck className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>Worldwide Express Delivery</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-[#12121a] px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>100% Authentic American Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Carousel / Tabs */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-bold uppercase tracking-wider">
            <span>SELECT COUTURE CATEGORY</span>
            <span className="text-[#c8a97e]">{PRODUCTS.length} Total Pieces Registered</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-btn-${cat.id.replace(/[^a-z0-9]/gi, '-')}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between group ${
                    isActive
                      ? 'bg-[#c8a97e] text-[#08080a] border-[#c8a97e] shadow-lg shadow-[#c8a97e]/20 font-bold scale-[1.02]'
                      : 'bg-[#12121a] border-white/10 text-neutral-300 hover:border-[#c8a97e]/50 hover:bg-white/5'
                  }`}
                >
                  <cat.icon className={`w-5 h-5 mb-1 transition-transform group-hover:scale-110 ${isActive ? 'text-[#08080a]' : 'text-[#c8a97e]'}`} />
                  <div>
                    <span className="text-[11px] font-bold block leading-tight line-clamp-2">
                      {cat.label}
                    </span>
                    <span className={`text-[10px] block mt-1 ${isActive ? 'text-black/80 font-mono font-bold' : 'text-[#c8a97e]'}`}>
                      {count} items
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Toolbar (Search + Quick Tags + Gender + Tag + Sort + Layout) */}
        <div className="bg-[#12121c] p-4 rounded-xl border border-white/10 space-y-4 shadow-xl">
          
          {/* Row 1: Search & Sort & Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                 placeholder="Search Silk, Wool, Gowns, Suits, Denim, Leather..."
                className="w-full pl-10 pr-10 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8a97e]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Tag Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
              <span className="text-[10px] text-neutral-500 uppercase font-mono mr-1">Popular:</span>
              {QUICK_TAGS.map((t) => (
                <button
                  key={t}
                  onClick={() => handleSelectQuickTag(t)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all whitespace-nowrap ${
                    searchQuery.toLowerCase() === t.toLowerCase()
                      ? 'bg-[#c8a97e] text-black border-[#c8a97e] font-bold'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:border-[#c8a97e]/60 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Sort & Layout */}
            <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
              <div className="flex items-center space-x-1.5 text-xs text-neutral-400">
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black/60 border border-white/15 text-xs text-neutral-200 py-2 px-3 rounded-lg focus:outline-none focus:border-[#c8a97e]"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>

              <div className="flex items-center space-x-1 bg-black/50 p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setLayoutMode('grid-4')}
                  className={`p-1.5 rounded ${layoutMode === 'grid-4' ? 'bg-[#c8a97e] text-black' : 'text-neutral-400 hover:text-white'}`}
                    title="3-Column Standard"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLayoutMode('grid-2')}
                  className={`p-1.5 rounded ${layoutMode === 'grid-2' ? 'bg-[#c8a97e] text-black' : 'text-neutral-400 hover:text-white'}`}
                  title="2-Column Large Editorial"
                >
                  <Grid className="w-4 h-4 rotate-45" />
                </button>
                <button
                  onClick={() => setLayoutMode('list')}
                  className={`p-1.5 rounded ${layoutMode === 'list' ? 'bg-[#c8a97e] text-black' : 'text-neutral-400 hover:text-white'}`}
                  title="List Detailed"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Secondary Filter Bars (Gender + Tag filter) */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Gender Switch */}
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 font-semibold">Gender:</span>
              <div className="flex items-center space-x-1 bg-black/40 p-1 rounded-lg border border-white/10">
                {GENDER_OPTIONS.map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      setSelectedGender(g);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      selectedGender === g
                        ? 'bg-[#c8a97e] text-black shadow'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion / Curated Tags */}
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 font-semibold">Occasion:</span>
              <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar">
                {TAG_OPTIONS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag);
                      setCurrentPage(1);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all ${
                      selectedTag === tag
                        ? 'bg-[#c8a97e] text-black border-[#c8a97e] font-bold'
                        : 'bg-black/30 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== 'All' || selectedGender !== 'All' || selectedTag !== 'All' || searchQuery) && (
              <button
                onClick={resetAllFilters}
                className="text-xs text-[#c8a97e] hover:underline flex items-center space-x-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Currency Indicator */}
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <div>
            Showing <strong className="text-white">{paginatedProducts.length}</strong> of{' '}
             <strong className="text-[#c8a97e]">{filteredProducts.length}</strong> matching luxury garments
          </div>
          <div>
            Base Currency: <strong className="text-white">{currentCurrency}</strong>
          </div>
        </div>

        {/* Garments Listing */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center bg-[#12121a] rounded-2xl border border-white/10 space-y-4">
            <Sparkles className="w-10 h-10 text-[#c8a97e] mx-auto animate-bounce" />
            <h3 className="text-xl font-serif font-bold text-white">No Matching Garments Found</h3>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
               We couldn't find any luxury pieces matching your active search & filters. Try broadening your keywords.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-5 py-2.5 bg-[#c8a97e] text-black text-xs font-bold rounded uppercase tracking-wider hover:bg-[#dfc49c] transition-colors"
            >
              Reset Filters & Show All 200+ Outfits
            </button>
          </div>
        ) : layoutMode === 'list' ? (
          /* List View */
          <div className="space-y-4">
            {paginatedProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const isAdded = addedItemMap[product.id];
              return (
                <div
                  key={product.id}
                  className="bg-[#12121a] border border-white/10 hover:border-[#c8a97e]/60 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-6 transition-all shadow-lg"
                >
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="relative w-full sm:w-52 aspect-[3/4] rounded-lg overflow-hidden cursor-pointer flex-shrink-0 bg-[#0d0d12]"
                  >
                    <img
                      src={product.colors[0].views.front}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {product.tag && (
                      <div className="absolute top-2 left-2 bg-[#c8a97e] text-black px-2 py-0.5 rounded text-[10px] font-bold uppercase shadow">
                        {product.tag}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2 text-left w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#c8a97e] uppercase font-bold tracking-wider">
                        {product.category} {product.gender ? `• ${product.gender}` : ''}
                      </span>
                      <button
                        onClick={() => onToggleWishlist(product)}
                        className={`p-2 rounded-full border transition-all ${
                          isWishlisted 
                            ? 'bg-red-500/20 border-red-500 text-red-400' 
                            : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-xl font-serif font-bold text-white hover:text-[#c8a97e] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">{product.description}</p>
                    
                    <div className="text-xs text-neutral-400 pt-1 space-y-1">
                      <div><strong className="text-neutral-300">Fabric & Provenance:</strong> {product.composition} • {product.fabricProvenance}</div>
                      <div><strong className="text-neutral-300">Available Sizes:</strong> {product.availableSizes.join(', ')}</div>
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                      <div className="text-2xl font-serif font-bold text-[#c8a97e]">
                        {formatPrice(product.priceUSD, currentCurrency)}
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded uppercase flex items-center space-x-1.5"
                        >
                          <RotateCw className="w-3.5 h-3.5 text-[#c8a97e]" />
                          <span>Full Inspection</span>
                        </button>

                        <button
                          onClick={() => handleQuickAdd(product)}
                          className="px-6 py-2.5 bg-[#c8a97e] text-black text-xs font-bold rounded uppercase hover:bg-[#dfc49c] transition-colors flex items-center space-x-1.5"
                        >
                          {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                          <span>{isAdded ? 'Added to Bag' : 'Add to Bag'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Grid View (3-col or 2-col) */
           <div className={`grid gap-5 ${layoutMode === 'grid-2' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
             {paginatedProducts.map((product, index) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const isAdded = addedItemMap[product.id];
              return (
                <div
                  key={product.id}
                   className="group bg-[#12121a] border border-white/10 hover:border-[#c8a97e]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#0d0d12]">
                    <img
                      src={product.colors[0].views.front}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.tag && (
                        <div className="bg-[#c8a97e] text-[#08080a] px-2 py-0.5 rounded text-[10px] font-bold uppercase shadow">
                          {product.tag}
                        </div>
                      )}
                      <div className="bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-neutral-300 border border-white/10">
                        {product.gender || 'Unisex'}
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleWishlist(product)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                        isWishlisted 
                          ? 'bg-red-500 text-white' 
                          : 'bg-black/70 text-neutral-300 hover:text-white border border-white/15'
                      }`}
                      title="Save to Wishlist"
                    >
                      <Heart className="w-3.5 h-3.5" />
                    </button>

                    {/* Hover Inspect Overlay */}
                    <div 
                      onClick={() => onSelectProduct(product)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center cursor-pointer space-y-2"
                    >
                      <span className="px-4 py-2 bg-[#c8a97e] text-[#08080a] text-xs font-bold rounded uppercase tracking-wider flex items-center space-x-1.5 shadow-xl">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Inspect Details</span>
                      </span>
                      <span className="text-[11px] text-neutral-300 font-normal">
                        6 Studio Angles & Macro Fabric
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-[#c8a97e] uppercase font-bold tracking-wider line-clamp-1">
                          {product.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          {product.colors.map((c) => (
                            <span
                              key={c.name}
                              className="w-2.5 h-2.5 rounded-full border border-white/30"
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>

                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-base font-serif font-bold text-white group-hover:text-[#c8a97e] transition-colors cursor-pointer line-clamp-2"
                      >
                        {product.name}
                      </h3>
                      
                      <p className="text-xs text-neutral-400 line-clamp-2 mt-1">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-serif font-bold text-[#c8a97e]">
                          {formatPrice(product.priceUSD, currentCurrency)}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {product.availableSizes.length} Sizes
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuickAdd(product)}
                          className="flex-1 py-2.5 bg-[#c8a97e] text-[#08080a] text-xs font-bold rounded uppercase hover:bg-[#dfc49c] transition-colors flex items-center justify-center space-x-1.5"
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onSelectProduct(product)}
                          className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination & Load More */}
        {paginatedProducts.length < filteredProducts.length && (
          <div className="pt-8 pb-12 text-center space-y-3">
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-8 py-3.5 bg-[#161622] hover:bg-[#1f1f2e] border border-[#c8a97e]/40 hover:border-[#c8a97e] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-xl"
            >
              Load Next {Math.min(itemsPerPage, filteredProducts.length - paginatedProducts.length)} Outfits ({filteredProducts.length - paginatedProducts.length} Remaining)
            </button>
            <div className="text-xs text-neutral-500 font-mono">
               Page {currentPage} of {totalPages} • Total of {filteredProducts.length} Curated Luxury Looks
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
