import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Sparkles, Globe, Mail } from 'lucide-react';
import { AppPage } from '../types';

interface FooterProps {
  onNavigate?: (page: AppPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const handlePageClick = (page: AppPage) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#060608] text-neutral-400 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & VIP Private Access */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-semibold text-[#c8a97e] uppercase tracking-wider block">
              VIP Fashion Newsletter
            </span>
            <h3 className="text-2xl font-serif text-white font-bold">
              Get Notified for New Drops & Special Sales
            </h3>
            <p className="text-xs text-neutral-300 font-normal leading-relaxed max-w-md font-sans-clean">
               Receive private discounts, early access to new collection releases, and bespoke styling invitations reserved for our inner circle.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-[#121217] border border-white/15 px-4 py-3 text-xs text-white placeholder-neutral-400 rounded focus:outline-none focus:border-[#c8a97e]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#c8a97e] text-[#0b0b0d] font-bold text-xs tracking-wider rounded hover:bg-[#dfc49c] transition-all uppercase flex items-center justify-center space-x-1.5 flex-shrink-0"
              >
                {newsletterSubscribed ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>SUBSCRIBED!</span>
                  </>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs">
          {/* Col 1 */}
          <div className="space-y-3">
            <span className="text-xs text-white font-bold uppercase block">
              MAISON MARY PAGES
            </span>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <button onClick={() => handlePageClick('home')} className="hover:text-[#c8a97e] transition-colors text-left">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">
                  Full Collection
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('runway')} className="hover:text-[#c8a97e] transition-colors text-left">
                  Runway Lookbook N° 07
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('stylist')} className="hover:text-[#c8a97e] transition-colors text-left">
                  Mix & Match Stylist
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('atelier')} className="hover:text-[#c8a97e] transition-colors text-left">
                  Artisanal Craft & Mary Manifesto
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('salons')} className="hover:text-[#c8a97e] transition-colors text-left">
                  Bespoke Styling & Commissions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <span className="text-xs text-white font-bold uppercase block">
              OUR SERVICES
            </span>
            <ul className="space-y-2 text-neutral-300">
              <li><button onClick={() => handlePageClick('salons')} className="hover:text-[#c8a97e] transition-colors text-left">Book a Private Styling Consultation</button></li>
              <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Custom Tailoring to Your Exact Size</button></li>
               <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Wedding & Gala Regalia</button></li>
               <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Worldwide Express Delivery</button></li>
              <li><button onClick={() => handlePageClick('salons')} className="hover:text-[#c8a97e] transition-colors text-left">Worldwide Express Shipping</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
              <span className="text-xs text-white font-bold uppercase block">
                SIGNATURE COLLECTIONS
              </span>
              <ul className="space-y-2 text-neutral-300">
                <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Silk Gowns & Eveningwear</button></li>
                <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Tailored Suits & Blazers</button></li>
                <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Handbags & Leather Goods</button></li>
                <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Outerwear & Coats</button></li>
                <li><button onClick={() => handlePageClick('shop')} className="hover:text-[#c8a97e] transition-colors text-left">Footwear & Accessories</button></li>
              </ul>
          </div>

           {/* Col 4 */}
           <div className="space-y-3">
             <span className="text-xs text-white font-bold uppercase block">
               DIRECT CONCIERGE
             </span>
             <ul className="space-y-2 text-neutral-300">
               <li className="flex items-center space-x-2">
                 <Mail className="w-3.5 h-3.5 text-[#c8a97e]" />
                 <span>Contact via Booking Form</span>
               </li>
               <li className="text-xs text-[#c8a97e] pt-1">
                 VIP Concierge: 24/7 via Website
               </li>
             </ul>
           </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500 font-mono uppercase">
          <div className="flex items-center space-x-3">
            <span className="font-serif italic text-xl tracking-tight font-bold text-white">MAISON MARY</span>
            <span>© 2026 MAISON MARY HAUTE COUTURE. ALL RIGHTS RESERVED.</span>
          </div>

            <div className="flex items-center space-x-3 flex-wrap justify-end">
              <span className="text-[#C5A059]">HAUTE COUTURE</span>
              <span>•</span>
              <span>BESPOKE TAILORING</span>
              <span>•</span>
              <span>HAND-FINISHED SILK</span>
              <span>•</span>
              <span>WORLDWIDE DELIVERY</span>
            </div>
        </div>
      </div>
    </footer>
  );
};
