import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Compass, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  RotateCw, 
  Globe, 
  Layers, 
  ShoppingBag, 
  X, 
  Award,
  ArrowRight,
  Maximize2,
  HelpCircle,
  Eye
} from 'lucide-react';
import { Currency, AppPage } from '../types';

export interface GuideTask {
  id: string;
  title: string;
  instruction: string;
  targetPage: AppPage;
  targetElementId: string;
  badge: string;
  completed: boolean;
}

interface InteractiveLiveGuideProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: Currency;
  onNavigateToPage: (page: AppPage) => void;
  hasOpenedModal: boolean;
  hasInteractedStylist: boolean;
  hasAddedToBag: boolean;
}

export const InteractiveLiveGuide: React.FC<InteractiveLiveGuideProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  onNavigateToPage,
  hasOpenedModal,
  hasInteractedStylist,
  hasAddedToBag
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const [allCompletedAnnounced, setAllCompletedAnnounced] = useState(false);

  // Dynamic list of interactive real tasks
  const tasks: GuideTask[] = [
    {
      id: 'task-currency',
      title: 'View Prices in US Dollars ($)',
      instruction: 'Check the currency selector at the top header to ensure prices are shown in US Dollars ($).',
      targetPage: 'home',
      targetElementId: 'currency-selector-btn',
      badge: 'USD Ready',
      completed: currentCurrency === 'USD'
    },
    {
      id: 'task-inspect',
      title: 'Inspect a Luxury Outfit',
      instruction: 'Go to the Collection page, click "Inspect Details" or tap any outfit to open the multi-angle zoom inspector.',
      targetPage: 'shop',
      targetElementId: 'cat-btn-all',
      badge: 'Fashion Connoisseur',
      completed: hasOpenedModal
    },
    {
      id: 'task-stylist',
      title: 'Try Mix & Match Studio',
      instruction: 'Visit the Mix & Match page and pick any top or bottom to build your customized matching American outfit.',
      targetPage: 'stylist',
      targetElementId: 'stylist-top-picker',
      badge: 'Master Stylist',
      completed: hasInteractedStylist
    },
    {
      id: 'task-cart',
      title: 'Add an Outfit to Bag',
      instruction: 'Click "ADD TO SHOPPING BAG" on any piece in the Collection to test the US checkout & doorstep delivery.',
      targetPage: 'shop',
      targetElementId: 'cart-header-btn',
      badge: 'VIP Client',
      completed: hasAddedToBag
    }
  ];

  const completedCount = tasks.filter(t => t.completed).length;
  const currentTask = tasks[currentStepIndex] || tasks[0];

  // Auto-advance step when current task completes
  useEffect(() => {
    if (tasks[currentStepIndex]?.completed && currentStepIndex < tasks.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStepIndex(prev => Math.min(tasks.length - 1, prev + 1));
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [currentCurrency, hasOpenedModal, hasInteractedStylist, hasAddedToBag, currentStepIndex]);

  // Celebrate when all completed!
  useEffect(() => {
    if (completedCount === tasks.length && !allCompletedAnnounced) {
      setAllCompletedAnnounced(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // safe
      }
    }
  }, [completedCount, allCompletedAnnounced]);

  if (!isOpen) return null;

  const handleTakeAction = () => {
    onNavigateToPage(currentTask.targetPage);
    // Smooth scroll and highlight target element
    setTimeout(() => {
      const el = document.getElementById(currentTask.targetElementId);
      if (el) {
        el.classList.add('ring-4', 'ring-[#c8a97e]', 'ring-offset-2', 'ring-offset-black', 'animate-pulse');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-[#c8a97e]', 'ring-offset-2', 'ring-offset-black', 'animate-pulse');
        }, 3500);
      }
    }, 400);
  };

  return (
    <aside 
      aria-label="Interactive Website Guide"
      className={`fixed z-50 transition-all duration-300 ${
        minimized 
          ? 'bottom-6 right-6' 
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-md'
      }`}
    >
      {minimized ? (
        <button
          id="guide-expand-bubble-btn"
          onClick={() => setMinimized(false)}
          className="bg-[#181822] border-2 border-[#c8a97e] text-white p-3.5 rounded-full shadow-2xl flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <Sparkles className="w-5 h-5 text-[#c8a97e] animate-spin" />
          <span className="text-xs font-bold font-sans">
            Guide ({completedCount}/{tasks.length})
          </span>
        </button>
      ) : (
        <div className="bg-[#121218]/95 backdrop-blur-xl border-2 border-[#c8a97e]/60 rounded-xl shadow-2xl p-4 sm:p-5 text-white animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#c8a97e]/20 border border-[#c8a97e] text-[#c8a97e] flex items-center justify-center font-bold text-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-[#c8a97e] font-bold uppercase tracking-wider block">
                  Live Interactive Guide
                </span>
                <h4 className="text-sm font-bold font-serif text-white">
                  Learn by Doing ({completedCount}/{tasks.length} Done)
                </h4>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setMinimized(true)}
                className="text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-neutral-300"
                title="Minimize Guide"
              >
                Minimize
              </button>
              <button
                onClick={onClose}
                className="p-1 text-neutral-400 hover:text-white rounded"
                title="Close Guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 h-1.5 rounded-full my-3 overflow-hidden">
            <div 
              className="bg-[#c8a97e] h-full transition-all duration-500 rounded-full"
              style={{ width: `${(completedCount / tasks.length) * 100}%` }}
            />
          </div>

          {/* Current Live Task Card */}
          <div className="bg-[#1a1a24] border border-[#c8a97e]/30 p-3.5 rounded-lg space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#c8a97e] flex items-center space-x-1.5">
                <span>Step {currentStepIndex + 1} of {tasks.length}:</span>
                <span className="text-white">{currentTask.title}</span>
              </span>
              {currentTask.completed ? (
                <span className="text-emerald-400 font-bold flex items-center space-x-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Completed!</span>
                </span>
              ) : (
                <span className="text-amber-400 font-medium text-[11px] animate-pulse">
                  Waiting for your click...
                </span>
              )}
            </div>

            <p className="text-xs text-neutral-200 leading-relaxed font-normal">
              {currentTask.instruction}
            </p>

            {/* Action Trigger Button */}
            <div className="pt-2 flex items-center space-x-2">
              <button
                id="guide-take-me-there-btn"
                onClick={handleTakeAction}
                className="flex-1 py-2 px-3 bg-[#c8a97e] text-[#08080a] text-xs font-bold rounded flex items-center justify-center space-x-1.5 hover:bg-[#dfc49c] transition-all shadow-md"
              >
                <span>Take Me to Step {currentStepIndex + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentStepIndex((prev) => (prev + 1) % tasks.length)}
                className="px-2.5 py-2 bg-white/10 hover:bg-white/15 text-neutral-300 text-xs font-semibold rounded"
                title="Next Task"
              >
                Next
              </button>
            </div>
          </div>

          {/* Checklist of all tasks */}
          <div className="mt-3 space-y-1.5 max-h-36 overflow-y-auto pr-1">
            {tasks.map((task, idx) => (
              <div
                key={task.id}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  onNavigateToPage(task.targetPage);
                }}
                className={`p-2 rounded flex items-center justify-between text-xs cursor-pointer transition-colors ${
                  currentStepIndex === idx
                    ? 'bg-[#c8a97e]/15 border border-[#c8a97e]/50 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {task.completed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border border-neutral-500 flex-shrink-0" />
                  )}
                  <span className={`font-medium ${task.completed ? 'line-through text-neutral-400' : ''}`}>
                    {idx + 1}. {task.title}
                  </span>
                </div>
                <span className="text-[10px] text-[#c8a97e] uppercase font-bold">
                  {task.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Completion Celebration Message */}
          {completedCount === tasks.length && (
            <div className="mt-3 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-center space-y-1">
              <div className="flex items-center justify-center space-x-1.5 text-emerald-400 font-bold text-xs">
                <Award className="w-4 h-4" />
                <span>All Tasks Completed! You are a Fashion Master!</span>
              </div>
               <p className="text-[11px] text-neutral-300">
                 You now know how to inspect clothes from every angle, check USD prices, mix & match styles, and place orders!
               </p>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};
