import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Menu, X, ChevronDown, Sparkles, Globe, Heart, Layers, Home, Info, ChevronRight, type LucideIcon } from 'lucide-react';
import { Currency, AppPage } from '../types';
import { CURRENCY_RATES } from '../data/products';

interface HeaderProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenBooking: () => void;
  onNavigate: (page: AppPage) => void;
  currentPage: AppPage;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenBooking,
  onNavigate,
  currentPage
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: AppPage; label: string; icon: LucideIcon; badge?: string }[] = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'shop', label: 'COLLECTION', icon: ShoppingBag },
    { id: 'runway', label: 'RUNWAY N° 07', icon: Sparkles },
    { id: 'stylist', label: 'MIX & MATCH', icon: Layers },
    { id: 'atelier', label: 'ABOUT MARY', icon: Info },
    { id: 'salons', label: 'BESPOKE STYLING', icon: Calendar },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 py-2.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#080808]/95 via-[#080808]/80 to-transparent py-3.5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Nav (Desktop) */}
            <div className="hidden lg:flex items-center space-x-5">
              <nav className="flex items-center space-x-4 text-xs font-semibold text-neutral-300">
                {navLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.id}
                    id={`nav-${link.id}`}
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative py-1.5 transition-colors uppercase tracking-wider flex items-center space-x-1.5 ${
                      currentPage === link.id ? 'text-[#c8a97e] font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.2 text-[9px] bg-[#c8a97e]/20 text-[#c8a97e] rounded font-bold border border-[#c8a97e]/30">
                        {link.badge}
                      </span>
                    )}
                    {currentPage === link.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c8a97e]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-neutral-200 hover:text-[#c8a97e] transition-colors"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Center Brand Identity: Maison Mary */}
            <div 
              className="flex flex-col items-center cursor-pointer select-none group" 
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="text-[9px] tracking-[0.3em] font-semibold text-[#a0a0a0] uppercase mb-0.5">
                Luxury Fashion House
              </span>
              <span className="text-2xl sm:text-3xl font-serif tracking-tight text-white group-hover:text-[#c8a97e] transition-colors duration-300 font-bold">
                MAISON MARY
              </span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Desktop Nav for Remaining Links */}
              <nav className="hidden xl:flex items-center space-x-4 text-xs font-semibold text-neutral-300 mr-2">
                {navLinks.slice(4).map((link) => (
                  <button
                    key={link.id}
                    id={`nav-${link.id}`}
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative py-1.5 transition-colors uppercase tracking-wider flex items-center space-x-1.5 ${
                      currentPage === link.id ? 'text-[#c8a97e] font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                    {currentPage === link.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c8a97e]" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Currency Selector */}
              <div className="relative">
                <button
                  id="currency-selector-btn"
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center space-x-1.5 text-xs font-semibold text-neutral-200 hover:text-white px-2.5 py-1.5 rounded bg-[#16161a] border border-white/15 hover:border-[#c8a97e]/40 transition-colors"
                  title="Change Currency (USD, EUR, GBP, JPY)"
                >
                  <Globe className="w-3.5 h-3.5 text-[#c8a97e]" />
                  <span>{currentCurrency}</span>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#14141a] border border-[#c8a97e]/30 rounded shadow-2xl py-1 z-50 animate-in fade-in">
                    <div className="px-3 py-1 text-[10px] text-neutral-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                      Select Currency
                    </div>
                    {(Object.keys(CURRENCY_RATES) as Currency[]).map((cur) => (
                      <button
                        key={cur}
                        id={`currency-option-${cur}`}
                        onClick={() => {
                          onCurrencyChange(cur);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                          currentCurrency === cur ? 'text-[#c8a97e] font-bold bg-white/5' : 'text-neutral-200'
                        }`}
                      >
                        <span className="font-medium">{CURRENCY_RATES[cur].label}</span>
                        <span className="text-neutral-400 text-xs font-mono">{CURRENCY_RATES[cur].symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                id="wishlist-header-btn"
                onClick={onOpenWishlist}
                className="relative p-2 text-neutral-300 hover:text-[#c8a97e] transition-colors rounded hover:bg-white/5"
                aria-label="Wishlist"
                title="Saved Items"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c8a97e] text-[#080808] text-[9px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                id="cart-header-btn"
                onClick={onOpenCart}
                className="relative p-2 text-neutral-300 hover:text-[#c8a97e] transition-colors rounded hover:bg-white/5"
                aria-label="Cart"
                title="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c8a97e] text-[#080808] text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Book Appointment CTA */}
              <button
                id="book-atelier-header-btn"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#c8a97e] text-[#080808] text-xs font-bold tracking-wider rounded hover:bg-[#d6b575] transition-all shadow-md shadow-[#c8a97e]/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK CONSULTATION</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
           <div
             className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
             onClick={() => setMobileMenuOpen(false)}
           />
           <div className="relative ml-0 w-4/5 max-w-sm bg-[#111116] h-full border-r border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto animate-slide-in-left">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-[#a0a0a0] uppercase block">Maison de Design</span>
                  <span className="text-2xl font-serif font-bold tracking-tight text-white">MAISON MARY</span>
                </div>
                <button
                  id="close-mobile-menu-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

               {/* Mobile Navigation Links */}
               <div className="py-4 space-y-2">
                 {navLinks.map((link, index) => (
                   <button
                     key={link.id}
                     id={`mobile-nav-${link.id}`}
                     onClick={() => {
                       onNavigate(link.id);
                       setMobileMenuOpen(false);
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                     }}
                     className={`w-full text-left py-3 px-3 text-sm font-semibold flex items-center justify-between rounded-lg transition-all duration-300 animate-fade-in-up ${
                       currentPage === link.id ? 'bg-[#c8a97e]/20 text-[#c8a97e] font-bold' : 'text-neutral-200 hover:bg-white/5 hover:translate-x-1'
                     }`}
                     style={{ animationDelay: `${120 + index * 60}ms` }}
                   >
                     <span className="flex items-center space-x-3">
                       <span className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                         currentPage === link.id ? 'bg-[#c8a97e] text-[#08080a]' : 'bg-white/5 text-[#c8a97e]'
                       }`}>
                         <link.icon className="w-4 h-4" />
                       </span>
                       <span>{link.label}</span>
                     </span>
                     <div className="flex items-center space-x-2">
                       {link.badge && (
                         <span className="px-2 py-0.5 text-[10px] bg-[#c8a97e]/20 text-[#c8a97e] rounded font-bold border border-[#c8a97e]/30">
                           {link.badge}
                         </span>
                       )}
                       <ChevronRight className="w-4 h-4 text-neutral-500" />
                     </div>
                   </button>
                 ))}
               </div>
            </div>

            <div className="pt-5 border-t border-white/10 space-y-3">
              <button
                id="mobile-book-atelier-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#c8a97e] text-[#080808] text-xs font-bold tracking-wider flex items-center justify-center space-x-2 rounded shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK CONSULTATION</span>
              </button>

              <div className="flex items-center justify-between text-xs text-neutral-300 pt-2 bg-white/5 p-2.5 rounded">
                <span className="text-xs font-medium">Currency:</span>
                <div className="flex space-x-1">
                  {(Object.keys(CURRENCY_RATES) as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => onCurrencyChange(c)}
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        currentCurrency === c ? 'bg-[#c8a97e] text-[#080808]' : 'bg-white/10 text-neutral-300'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-[10px] text-neutral-400 text-center font-medium">
                 Couture • Tailoring • Made-to-Measure
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

