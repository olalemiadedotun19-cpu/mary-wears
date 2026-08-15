import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Compass,
  ArrowRight
} from 'lucide-react';
import { AtelierBookingData } from '../types';

interface SalonsBookingPageProps {
  initialLocation?: string;
  initialNote?: string;
}

export const SalonsBookingPage: React.FC<SalonsBookingPageProps> = ({
  initialLocation = '',
  initialNote = ''
}) => {
  const focuses = [
    {
      id: 'GOWNS',
      name: 'Bespoke Gowns & Eveningwear',
      desc: 'Couture gowns, illusion mermaid dresses, and architectural eveningwear crafted entirely to your measure.',
      features: ['Couture Silk & Tulle Curation', 'Made-to-Measure Patterning']
    },
    {
      id: 'SUITS',
      name: 'Tailored Suits & Blazers',
      desc: 'Bespoke Italian wool suits and hand-woven blazers cut for immaculate posture and drape.',
      features: ['Bespoke Canvas Construction', 'Personal Shoulder Sculpting']
    },
    {
      id: 'BRIDAL',
      name: 'Bridal & Occasion Regalia',
      desc: 'One-of-one wedding ensembles and gala regalia designed in close private consultation.',
      features: ['Private Design Consultation', 'Heirloom Finishing']
    }
  ];

  const [selectedFocusId, setSelectedFocusId] = useState<string>(initialLocation);
  const [formData, setFormData] = useState<AtelierBookingData>({
    fullName: '',
    email: '',
    phone: '',
    focus: initialLocation,
    serviceType: 'Bespoke Haute Couture Commission',
    preferredDate: '',
    timeSlot: '14:00 - 15:30',
    notes: initialNote
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const selectedFocus = focuses.find((f) => f.id === selectedFocusId) || focuses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `MM-${selectedFocusId}-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#08080c] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-black/60 border border-[#c8a97e]/40 px-4 py-1.5 rounded-full mb-3 backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span className="text-xs font-bold tracking-widest text-[#c8a97e] uppercase">
              BESPOKE STYLING & PRIVATE COMMISSIONS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Request a Private <span className="text-[#c8a97e] italic">Styling Consultation</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-sans-clean">
            Begin your bespoke commission with private measurements, fabric curation, and one-on-one styling devoted entirely to your garments.
          </p>
        </div>

        {/* Commission Focus Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focuses.map((f) => (
            <div
              key={f.id}
              onClick={() => {
                setSelectedFocusId(f.id);
                setFormData((prev) => ({ ...prev, focus: f.id }));
              }}
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all p-5 flex flex-col justify-between space-y-4 ${
                selectedFocusId === f.id
                  ? 'border-[#c8a97e] bg-[#161624] ring-2 ring-[#c8a97e]/30 shadow-xl'
                  : 'border-white/10 bg-[#101018] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-[#c8a97e] font-bold uppercase tracking-wider">Bespoke Commission</span>
                  {selectedFocusId === f.id && (
                    <span className="text-[10px] bg-[#c8a97e] text-black px-2 py-0.5 rounded font-bold">Selected</span>
                  )}
                </div>
                <h3 className="text-lg font-serif font-bold text-white">{f.name}</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs text-neutral-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-[#c8a97e]" />
                  <span>Made-to-measure, by private appointment</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: The Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#12121a] border border-white/10 p-6 sm:p-8 rounded-xl shadow-2xl space-y-6">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Consultation Confirmed</h3>
                <div className="inline-block bg-white/5 border border-white/10 px-4 py-2 rounded-lg font-mono text-sm text-[#c8a97e]">
                  Booking Reference: <strong>{bookingRef}</strong>
                </div>
                <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. A dedicated couture concierge will contact you to curate your commission.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#c8a97e] text-black font-bold text-xs rounded uppercase hover:bg-[#dfc49c]"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs text-[#c8a97e] font-bold uppercase tracking-wider block">
                    RESERVATION DETAILS
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    Commission: {selectedFocus.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Chief Adeleke Johnson"
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8a97e]"
                    />
                  </div>

                  <div>
                     <label className="block text-xs font-semibold text-neutral-300 mb-1">Phone Number *</label>
                     <input
                       type="tel"
                       required
                       value={formData.phone}
                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                       placeholder="Enter your phone number"
                       className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8a97e]"
                     />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="adeleke@example.com"
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8a97e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Service Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white focus:outline-none focus:border-[#c8a97e]"
                    >
                       <option value="Bespoke Haute Couture Commission">Bespoke Haute Couture Commission</option>
                       <option value="American Wedding / Bridal Commission">American Wedding / Bridal Commission</option>
                      <option value="Custom Tailoring & Suit Commission">Custom Tailoring & Suit Commission</option>
                        <option value="Runway Look Pre-Order Commission">Runway Look Pre-Order Commission</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white focus:outline-none focus:border-[#c8a97e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Preferred Time Slot</label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white focus:outline-none focus:border-[#c8a97e]"
                    >
                      <option value="11:00 - 12:30">Morning (11:00 - 12:30)</option>
                      <option value="14:00 - 15:30">Afternoon (14:00 - 15:30)</option>
                      <option value="16:30 - 18:00">Evening (16:30 - 18:00)</option>
                      <option value="18:30 - 20:00">VIP Twilight (18:30 - 20:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Garment Notes & Special Requests</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide any specific garment names, wedding color themes, or fabric preferences..."
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8a97e]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c8a97e] text-black font-bold text-xs tracking-wider uppercase rounded hover:bg-[#dfc49c] transition-all shadow-xl shadow-[#c8a97e]/20 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Private Consultation</span>
                </button>
              </form>
            )}
          </div>

          {/* Right 5 Columns: Commission Details & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12121a] border border-white/10 p-6 rounded-xl space-y-4 shadow-xl">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#0d0d12] border border-white/10 flex items-center justify-center p-6 text-center">
                <p className="text-sm font-serif italic text-[#c8a97e]">"Architectural artistry, made entirely to your measure."</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#c8a97e] uppercase tracking-wider mb-2">
                  Your Commission Includes:
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {selectedFocus.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a97e] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a97e] flex-shrink-0" />
                     <span>Private Fabric & Colour Curation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a97e] flex-shrink-0" />
                    <span>One-on-One Styling with a Master Draper</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#181824] p-5 rounded-xl border border-white/10 space-y-2 text-xs text-neutral-300">
              <div className="text-white font-bold flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#c8a97e]" />
                <span>Strict Discretion & Privacy</span>
              </div>
              <p>
                Every commission is handled as a strictly private, one-on-one consultation with absolute discretion for each client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
