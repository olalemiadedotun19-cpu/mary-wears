import React from 'react';
import {
  Compass,
  Sparkles,
  ArrowRight,
  Layers,
  ShieldCheck,
  Truck,
  Eye,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';
import { Product, Currency, AppPage } from '../types';
import { 
  PRODUCTS,
  imgUsf01,
  imgUsf06,
  imgUsf10,
  imgUsf13,
  imgUsf16,
  imgUsf20,
  imgUsf25,
  imgUsf23,
  imgUsf35
} from '../data/products';
import { formatPrice } from '../utils/formatters';

interface HomePageProps {
  currentCurrency: Currency;
  onNavigate: (page: AppPage) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, colorName: string, size: string) => void;
  onOpenBooking: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentCurrency,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onOpenBooking
}) => {
  const featuredPieces = PRODUCTS.filter((p) => p.featured || p.runwayLookNumber).slice(0, 6);

  const categoryCards = [
    {
      id: "Women's Dresses & Gowns",
      title: 'Silk Gowns & Evening Dresses',
      desc: 'Hand-finished American silk ball gowns, illusion mermaid dresses, and architectural evening wear designed for red carpets and formal galas.',
      image: imgUsf01,
      tag: 'Evening'
    },
    {
      id: "Women's Tops & Blouses",
      title: 'Silk Blouses & Designer Tops',
      desc: 'Luxury silk camp-collar shirts, hand-embroidered silk blouses, and modern American luxury tops for day-to-night elegance.',
      image: imgUsf06,
      tag: 'New Arrivals'
    },
    {
      id: "Men's Suits & Blazers",
      title: 'Tailored Suits & Blazers',
      desc: 'Bespoke Italian wool two-button suits, velvet smoking jackets, and hand-woven silk-blend blazers cut in our master ateliers.',
      image: imgUsf10,
      tag: 'Bespoke'
    },
    {
      id: "Men's Shirts & Tees",
      title: 'Shirts & Casual Tees',
      desc: 'Premium silk and cotton shirts with signature embroidery, plus heavyweight organic American heritage tees for relaxed luxury.',
      image: imgUsf16,
      tag: 'Casual Luxury'
    },
    {
      id: 'Handbags & Accessories',
      title: 'Handbags & Leather Accessories',
      desc: 'Handcrafted American leather handbags, sculptural accessories, and solid brass hardware pieces from our artisans.',
      image: imgUsf20,
      tag: 'Artisan'
    },
    {
      id: 'Footwear',
      title: 'American Luxury Footwear',
      desc: 'Hand-crafted Italian leather oxfords, silk-embroidered ballet flats, and architectural heel boots for every occasion.',
      image: imgUsf25,
      tag: 'Heirloom'
    },
    {
      id: 'Women\'s Coats & Outerwear',
      title: 'Coats & Outerwear',
       desc: 'Structured wool cape coats, leather-trimmed denim jackets, and metallic puffer coats tailored for American climates.',
      image: imgUsf23,
      tag: 'Outerwear'
    },
    {
      id: 'Activewear & Loungewear',
      title: 'Activewear & Loungewear',
      desc: 'Premium cashmere lounge sets, technical fleece jackets, and performance wear blending comfort with contemporary American style.',
      image: imgUsf35,
      tag: 'Lifestyle'
    }
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      {/* 1. Cinematic Hero Banner */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Editorial Visuals */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/SD50mgwx/jawadmd.jpg"
            alt="Maison Mary American Luxury Fashion Campaign"
            className="w-full h-full object-cover object-top sm:object-center opacity-45 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/65 to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,126,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-6 sm:py-10">
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-black/70 border border-[#c8a97e]/40 px-3 py-1 rounded-full mb-3 backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Sparkles className="w-3 h-3 text-[#c8a97e]" />
             <span className="text-[10px] font-bold tracking-widest text-[#c8a97e] uppercase">
               HAND-FINISHED AMERICAN LUXURY SILHOUETTES • MADE TO YOUR MEASURE
             </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-3 font-bold animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              American Luxury Couture, <br />
             <span className="text-[#c8a97e] italic">Architectural Artistry</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-normal max-w-md mx-auto mb-3 leading-relaxed font-sans-clean animate-fade-in-up" style={{ animationDelay: '300ms' }}>
             Hand-finished American silk gowns, Italian wool suits, and artisan handbags. Inspect every detail from every angle before buying.
           </p>

           {/* Call to Action */}
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
             <button
               id="hero-go-to-shop-btn"
               onClick={() => onNavigate('shop')}
               className="w-full sm:w-auto px-8 py-3.5 bg-[#c8a97e] text-[#07070a] font-bold text-xs tracking-wider uppercase rounded hover:bg-[#dfc49c] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#c8a97e]/20 flex items-center justify-center space-x-2"
             >
                <span>Shop All Luxury Pieces</span>
               <ArrowRight className="w-4 h-4" />
             </button>
           </div>

          {/* Highlights & Guarantees */}
          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
            <div className="flex items-center space-x-1.5 p-2 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <Compass className="w-4 h-4 text-[#c8a97e] flex-shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Multi-Angle Studio</div>
                <div className="text-[9px] text-neutral-400">Front, side, back & macro</div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 p-2 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Layers className="w-4 h-4 text-[#c8a97e] flex-shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Custom Body Sizing</div>
                <div className="text-[9px] text-neutral-400">Made to your measurements</div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 p-2 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <ShieldCheck className="w-4 h-4 text-[#c8a97e] flex-shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Secure Checkout</div>
                <div className="text-[9px] text-neutral-400">Encrypted & trusted</div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 p-2 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Truck className="w-4 h-4 text-[#c8a97e] flex-shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Worldwide Delivery</div>
                <div className="text-[9px] text-neutral-400">Insured shipping</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. American Collection Portals */}
      <section className="py-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-3">
          <div>
            <span className="text-[10px] text-[#c8a97e] font-bold uppercase tracking-wider block mb-0.5">
              AMERICAN LUXURY PORTALS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">
              Explore by Iconic Attire Categories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-[11px] font-bold text-[#c8a97e] hover:underline flex items-center"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {categoryCards.map((cat, index) => (
             <div 
               key={cat.id}
               onClick={() => onNavigate('shop')}
               className="group cursor-pointer bg-[#12121c] border border-white/10 hover:border-[#c8a97e] rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#c8a97e]/10 animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}
             >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d12]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121c] via-transparent to-black/30" />
                <div className="absolute top-1 left-1 bg-[#c8a97e] text-black px-1.5 py-0.5 rounded text-[8px] font-bold uppercase shadow">
                  {cat.tag}
                </div>
              </div>

                <div className="p-2.5 flex flex-col">
                 <h3 className="text-sm sm:text-lg font-serif font-bold text-white group-hover:text-[#c8a97e] transition-colors mb-1 line-clamp-1">
                   {cat.title}
                 </h3>
                 <p className="text-[9px] text-neutral-400 leading-tight line-clamp-2">
                   {cat.desc}
                 </p>
                 <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#c8a97e] mt-auto">
                   <span className="text-[10px]">Explore</span>
                   <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* 3. Featured Outfits Spotlight */}
      <section className="py-10 bg-[#0e0e14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-3">
            <div>
              <span className="text-[10px] text-[#c8a97e] font-bold uppercase tracking-wider">
                CURATED SPOTLIGHT
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mt-1">
                 Editor's Choice Luxury Pieces
              </h2>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="text-[11px] font-bold text-[#c8a97e] hover:underline flex items-center"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
           {featuredPieces.map((product, index) => (
               <div
                 key={product.id}
                 className="group bg-[#14141c] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#c8a97e]/60 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${100 + index * 100}ms` }}
               >
                 <div 
                   onClick={() => onSelectProduct(product)}
                   className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#0d0d12]"
                 >
                   <img
                     src={product.colors[0].views.front}
                     alt={product.name}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-1 left-1 bg-[#c8a97e] text-black px-1.5 py-0.5 rounded text-[8px] font-bold uppercase shadow">
                     {product.tag || product.edition}
                   </div>
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-1 p-2">
                     <span className="px-3 py-1.5 bg-[#c8a97e] text-[#08080a] text-[10px] font-bold rounded uppercase flex items-center space-x-1 shadow-lg">
                       <Eye className="w-3 h-3" />
                       <span>Inspect Details</span>
                     </span>
                     <span className="text-[8px] text-neutral-300">6 Studio Angles</span>
                   </div>
                </div>

                 <div className="p-2.5 flex flex-col flex-1">
                   <div>
                     <span className="text-[9px] text-[#c8a97e] uppercase font-bold tracking-wider">{product.category}</span>
                     <h4 
                       onClick={() => onSelectProduct(product)}
                       className="text-sm font-bold text-white font-serif group-hover:text-[#c8a97e] transition-colors truncate cursor-pointer mt-0.5"
                     >
                       {product.name}
                     </h4>
                   </div>

                   <div className="pt-2 border-t border-white/10 mt-auto">
                     <div className="text-sm font-serif font-bold text-[#c8a97e] mb-1.5">
                       {formatPrice(product.priceUSD, currentCurrency)}
                     </div>

                     <div className="flex items-center space-x-1.5">
                       <button
                         onClick={() => onAddToCart(product, product.colors[0].name, product.availableSizes[0] || 'Bespoke')}
                         className="flex-1 py-2 bg-[#c8a97e] text-[#08080a] text-[10px] font-bold rounded uppercase hover:bg-[#dfc49c] transition-colors flex items-center justify-center space-x-1"
                       >
                         <ShoppingBag className="w-3 h-3" />
                         <span>Add</span>
                       </button>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
