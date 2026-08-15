import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  RotateCw, 
  Layers, 
  ShoppingBag, 
  Calendar, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  HelpCircle,
  Eye,
  Shirt,
  Sparkle
} from 'lucide-react';

interface MiniTutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const MiniTutorialModal: React.FC<MiniTutorialModalProps> = ({
  isOpen,
  onClose,
  onNavigateToSection
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (!isOpen) return null;

  const steps = [
    {
      badge: 'Step 1 of 4: Welcome',
      title: 'Welcome to Maison Mary!',
      subtitle: 'American Luxury & Tailored Designer Wears',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85',
      points: [
        {
          label: 'Handcrafted American & Global Pieces',
          desc: 'Explore authentic American silk gowns, Italian wool suits, luxury coats, and sculpted handbags.'
        },
        {
          label: 'Prices in US Dollars ($) & Global Currencies',
          desc: 'Use the currency button at the top to see instant prices in US Dollars ($), Pounds (£), or Euros (€).'
        },
        {
          label: 'Fast Worldwide Delivery',
          desc: 'Enjoy direct doorstep delivery worldwide.'
        }
      ],
      actionLabel: 'Next: How Multi-Angle Views Work',
      quickNavTarget: 'collections',
      quickNavLabel: 'Browse All Clothes'
    },
    {
      badge: 'Step 2 of 4: Multi-Angle Viewing',
      title: 'See Outfits From Every Angle',
      subtitle: 'No more guessing how an outfit looks from the back!',
      icon: RotateCw,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
      points: [
        {
          label: 'Front, Side, Back & Walking Views',
          desc: 'Click on any angle tab (Front, Side, Back, Fabric Zoom, or Motion) to see the exact cut and flow.'
        },
        {
          label: 'Angle Selector',
          desc: 'Click on any angle tab (Front, Side, Back, Fabric Zoom, or Motion) to see the exact cut and flow.'
        },
        {
          label: 'Fabric Zoom Inspection',
          desc: 'Click the close-up view to examine the fine hand-woven texture, thread quality, and brass embellishments.'
        }
      ],
      actionLabel: 'Next: Outfit Mix & Match',
      quickNavTarget: 'perspective-salon',
      quickNavLabel: 'Try Multi-Angle View'
    },
    {
      badge: 'Step 3 of 4: Stylist Studio',
      title: 'Mix & Match Your Full Look',
      subtitle: 'Build complete matching outfits in seconds',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85',
      points: [
        {
          label: 'Combine Tops, Gowns, Shoes & Bags',
          desc: 'Select a tailored blazer or silk suit jacket, pick a gown or shirt, and match with designer bags and shoes.'
        },
        {
          label: 'Live Preview on Model',
          desc: 'Watch the complete ensemble update instantly on screen from multiple angles.'
        },
        {
          label: '1-Click Add Full Outfit to Bag',
          desc: 'See the total price calculated in US Dollars ($) and add the whole matching set to your bag at once.'
        }
      ],
      actionLabel: 'Next: Easy Ordering & Consultation',
      quickNavTarget: 'stylist-studio',
      quickNavLabel: 'Open Mix & Match Studio'
    },
    {
      badge: 'Step 4 of 4: Ordering & Consultation',
      title: 'Simple Ordering & Private Consultation',
      subtitle: 'Custom tailored to your exact measurements',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=85',
      points: [
        {
          label: 'Order Online with Custom Size',
          desc: 'Select standard sizes (XS to XXL) or choose "Custom Measurements" for tailored-to-fit sewing.'
        },
        {
          label: 'Request a Private Styling Consultation',
          desc: 'Want expert guidance? Click "Book Consultation" to reserve a private styling session.'
        },
        {
          label: 'Free Monogram Personalization',
          desc: 'Add your initials or custom name embroidered on any jacket, shirt, or gown.'
        }
      ],
      actionLabel: 'Got It! Start Exploring',
      quickNavTarget: 'hero',
      quickNavLabel: 'Start Shopping Now'
    }
  ];

  const current = steps[currentStep];

  const handleFinish = (targetSection?: string) => {
    try {
      localStorage.setItem('maison_mary_tutorial_seen', 'true');
    } catch {
      // safe fallback
    }
    onClose();
    if (targetSection) {
      setTimeout(() => onNavigateToSection(targetSection), 100);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const IconComponent = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={() => handleFinish()} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#111116] border border-[#c8a97e]/40 rounded-lg shadow-2xl z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#161620]">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-[#c8a97e]/20 text-[#c8a97e] rounded-md border border-[#c8a97e]/30">
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#c8a97e] uppercase font-bold block">
                {current.badge}
              </span>
              <span className="text-xs text-neutral-400 font-medium">Quick Guide & Tips</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Step progress dots */}
            <div className="flex items-center space-x-1.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentStep === idx 
                      ? 'w-6 bg-[#c8a97e]' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="tutorial-close-btn"
              onClick={() => handleFinish()}
              className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-white/10 transition-colors ml-2"
              title="Close Tutorial"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left/Top Image Preview */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-md overflow-hidden border border-white/15 shadow-xl bg-[#08080a]">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md p-2.5 rounded border border-white/10">
                  <div className="flex items-center space-x-1.5 text-[#c8a97e] text-[10px] font-bold tracking-wider uppercase">
                    <Sparkles className="w-3 h-3" />
                      <span>Maison Mary • Haute Couture</span>
                  </div>
                  <div className="text-xs text-white font-medium mt-0.5 truncate">{current.title}</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-semibold leading-snug">
                  {current.title}
                </h3>
                <p className="text-sm text-[#c8a97e] font-medium mt-1">
                  {current.subtitle}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 pt-1">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-white/5 p-3 rounded-md border border-white/5">
                    <div className="w-5 h-5 rounded-full bg-[#c8a97e]/20 text-[#c8a97e] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wide">
                        {pt.label}
                      </h4>
                      <p className="text-xs text-neutral-300 font-light mt-0.5 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Jump Button to try the feature */}
              <div className="pt-2">
                <button
                  id={`tutorial-jump-${current.quickNavTarget}`}
                  onClick={() => handleFinish(current.quickNavTarget)}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/15 border border-[#c8a97e]/40 text-[#c8a97e] text-xs font-bold tracking-wider rounded-md flex items-center justify-center space-x-2 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>{current.quickNavLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-white/10 bg-[#14141b] gap-3">
          <div className="flex items-center space-x-2 text-xs text-neutral-400">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>•</span>
            <button
              onClick={() => handleFinish()}
              className="text-neutral-400 hover:text-white underline underline-offset-4"
            >
              Skip guide
            </button>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            {currentStep > 0 && (
              <button
                id="tutorial-prev-btn"
                onClick={handlePrev}
                className="flex-1 sm:flex-initial px-4 py-2 bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-medium rounded-md flex items-center justify-center space-x-1 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}

            <button
              id="tutorial-next-btn"
              onClick={handleNext}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#c8a97e] hover:bg-[#d6b575] text-[#08080a] text-xs font-bold tracking-wider rounded-md flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-[#c8a97e]/20"
            >
              <span>{currentStep === steps.length - 1 ? 'Start Shopping' : 'Next Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
