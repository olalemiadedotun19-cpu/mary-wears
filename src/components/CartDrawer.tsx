import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Check, Gift, Sparkles, CreditCard, Landmark, Truck } from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentCurrency: Currency;
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onOpenBooking: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currentCurrency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [packaging, setPackaging] = useState<'signature' | 'garment-shield'>('signature');
  const [paymentMethod, setPaymentMethod] = useState<'card-payment' | 'bank-transfer' | 'concierge'>('card-payment');

  const subtotalUSD = items.reduce((acc, item) => acc + (item.product.priceUSD * item.quantity), 0);

  const handleAcquisitionSubmit = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Slide Drawer */}
      <div className="relative w-full max-w-md bg-[#080808] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="font-serif text-xl text-white font-bold block">
              Shopping Bag
            </span>
               <span className="text-xs text-[#c8a97e] font-medium">
               {items.length} Item{items.length !== 1 ? 's' : ''} • Free Worldwide Delivery
             </span>
          </div>

          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkoutComplete ? (
          /* Confirmation Screen */
          <div className="my-auto text-center py-10 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#c8a97e]/20 border border-[#c8a97e] text-[#c8a97e] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs text-[#c8a97e] uppercase font-bold block mb-1">
                ORDER SUCCESSFUL!
              </span>
              <h3 className="text-2xl font-serif text-white font-bold">
                Thank You for Your Order
              </h3>
              <p className="text-xs text-neutral-300 font-normal mt-3 leading-relaxed border-l-2 border-[#c8a97e] pl-4 text-left max-w-sm mx-auto">
                  Your order is confirmed and being prepared. Our delivery team will coordinate safe doorstep delivery to your address.
              </p>
            </div>

            <button
              onClick={() => {
                setCheckoutComplete(false);
                onClose();
              }}
              className="px-6 py-3 bg-[#c8a97e] text-[#0b0b0d] text-xs font-bold rounded uppercase hover:bg-[#dfc49c] transition-all"
            >
              Continue Shopping
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty Bag */
          <div className="my-auto text-center py-12 space-y-4">
            <ShoppingBag className="w-12 h-12 text-neutral-500 mx-auto" />
            <h4 className="text-lg font-serif text-white font-bold">Your Bag is Empty</h4>
            <p className="text-xs text-neutral-300 font-normal max-w-xs mx-auto">
               Browse our collection of luxury clothes, tailored shirts, and designer wear to add items.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#c8a97e] text-[#0b0b0d] font-bold text-xs uppercase transition-colors rounded"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          /* Items List & Checkout */
          <>
            <div className="py-4 space-y-3 flex-1 overflow-y-auto">
              {items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.colorName}-${item.size}-${idx}`}
                  className="p-3 bg-[#121217] border border-white/10 rounded-lg flex space-x-3 relative group"
                >
                  <img
                    src={item.product.colors[0].views.front}
                    alt={item.product.name}
                    className="w-16 h-20 object-cover rounded border border-white/10 flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-serif text-white font-bold pr-4">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-neutral-400 hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-neutral-300 space-y-0.5 mt-1">
                        <div>Color: {item.colorName} • Size: {item.size}</div>
                        {item.monogram && (
                          <div className="text-[#c8a97e]">Initials: "{item.monogram}"</div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 bg-white/10 rounded text-xs text-neutral-200 hover:text-white flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="w-6 h-6 bg-white/10 rounded text-xs text-neutral-200 hover:text-white flex items-center justify-center font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#c8a97e]">
                        {formatPrice(item.product.priceUSD * item.quantity, currentCurrency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Payment Preference (US & Global) */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-xs text-[#c8a97e] uppercase font-bold block flex items-center space-x-1.5">
                  <CreditCard className="w-4 h-4" />
                  <span>Choose How to Pay ({currentCurrency}):</span>
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <button
                    type="button"
                     onClick={() => setPaymentMethod('card-payment')}
                     className={`p-2 border rounded transition-all text-left ${
                       paymentMethod === 'card-payment'
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-white text-xs">Card Payment</span>
                     <span className="text-[10px] text-neutral-400">Visa / Mastercard / Amex</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank-transfer')}
                    className={`p-2 border rounded transition-all text-left ${
                      paymentMethod === 'bank-transfer'
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-white text-xs">Bank Transfer</span>
                    <span className="text-[10px] text-neutral-400">Direct Transfer</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('concierge')}
                    className={`p-2 border rounded transition-all text-left ${
                      paymentMethod === 'concierge'
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-white text-xs">Pay On Delivery</span>
                     <span className="text-[10px] text-neutral-400">Available Worldwide by Commission</span>
                  </button>
                </div>
              </div>

              {/* White Glove Packaging Options */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-xs text-[#c8a97e] uppercase font-bold block flex items-center space-x-1.5">
                  <Gift className="w-4 h-4" />
                  <span>Packaging Preference (Free):</span>
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPackaging('signature')}
                    className={`p-2 rounded text-xs border transition-all text-left ${
                      packaging === 'signature'
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-white">Luxury Box</span>
                    <span className="text-[10px] text-neutral-400">Black box with gold ribbon</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPackaging('garment-shield')}
                    className={`p-2 rounded text-xs border transition-all text-left ${
                      packaging === 'garment-shield'
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e] text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-white">Garment Bag</span>
                    <span className="text-[10px] text-neutral-400">Protective suit bag</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Summary & Checkout Action */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-300 uppercase font-semibold">Total Amount ({currentCurrency}):</span>
                <span className="text-xl font-bold text-[#c8a97e]">
                  {formatPrice(subtotalUSD, currentCurrency)}
                </span>
              </div>

              <div className="text-xs text-neutral-300 flex items-center space-x-1.5 font-normal">
                <Truck className="w-4 h-4 text-[#c8a97e] flex-shrink-0" />
                 <span>Worldwide Express Delivery</span>
              </div>

              <button
                id="checkout-acquisition-btn"
                onClick={handleAcquisitionSubmit}
                className="w-full py-3.5 bg-[#c8a97e] text-[#0b0b0d] font-bold text-xs tracking-wider rounded hover:bg-[#dfc49c] transition-all flex items-center justify-center space-x-2 uppercase shadow-lg shadow-[#c8a97e]/20"
              >
                <span>COMPLETE ORDER</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="book-fitting-from-cart-btn"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full py-1 text-center text-xs text-[#c8a97e] hover:underline uppercase font-medium"
              >
                Or Request a Private Styling Consultation First
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
