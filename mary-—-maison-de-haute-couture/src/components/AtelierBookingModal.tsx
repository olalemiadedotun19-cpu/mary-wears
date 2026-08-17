import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, Check, Phone, Mail, User, ShieldCheck } from 'lucide-react';

interface AtelierBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote?: string;
  initialLocation?: string;
}

export const AtelierBookingModal: React.FC<AtelierBookingModalProps> = ({
  isOpen,
  onClose,
  initialNote = '',
  initialLocation = ''
}) => {
  if (!isOpen) return null;

  const focuses = [
    'Gowns & Eveningwear',
    'Tailored Suits & Blazers',
    'Bridal & Occasion Regalia',
    'Runway Pre-Order'
  ];

  const [selectedFocus, setSelectedFocus] = useState(focuses[0]);
  const [selectedService, setSelectedService] = useState('Bespoke Haute Couture Commission');
  const [date, setDate] = useState('2026-09-15');
  const [timeSlot, setTimeSlot] = useState('14:30 — 16:30');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(initialNote);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const services = [
    { title: 'Bespoke Gown Commission', desc: 'Couture gowns and eveningwear draped entirely to your measurements.' },
    { title: 'Tailored Suit Commission', desc: 'Italian wool suits and blazers cut for immaculate posture and drape.' },
    { title: 'Bridal & Gala Regalia', desc: 'One-of-one ensembles designed for weddings and red-carpet moments.' },
    { title: 'Runway Look Pre-Order', desc: 'Priority allocation of the newest couture collection pieces.' }
  ];

  const timeSlots = [
    '10:30 — 12:30 (Morning Session)',
    '14:30 — 16:30 (Afternoon Session)',
    '17:00 — 19:00 (Evening Session)',
    '20:00 — 22:00 (Private VIP Session)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `MARY-${selectedFocus.slice(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(generatedCode);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#101015] border border-[#c8a97e]/40 rounded-sm shadow-2xl z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#14141c]">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#c8a97e]" />
            <span className="font-serif text-base font-bold text-white">
              REQUEST A PRIVATE STYLING CONSULTATION
            </span>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#c8a97e]/20 border border-[#c8a97e] text-[#c8a97e] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs text-[#c8a97e] uppercase font-bold block mb-1">
                CONSULTATION CODE: {refCode}
              </span>
              <h3 className="text-2xl font-serif text-white font-bold">
                Consultation Requested!
              </h3>
              <p className="text-xs text-neutral-300 font-normal max-w-md mx-auto mt-2 font-sans-clean">
                Thank you, <span className="text-white font-bold">{fullName || 'Dear Customer'}</span>. Our stylist will contact you within 2 hours to curate your commission.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 p-4 rounded-lg text-left text-xs text-neutral-300 max-w-md mx-auto space-y-1.5 font-sans">
              <div className="flex justify-between">
                <span className="text-neutral-400">Focus:</span>
                <span className="text-[#c8a97e] font-semibold">{selectedFocus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Service:</span>
                <span className="text-white">{selectedService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Date & Time:</span>
                <span className="text-white">{date} ({timeSlot})</span>
              </div>
            </div>

            <button
              id="booking-finish-btn"
              onClick={onClose}
              className="px-8 py-3 bg-[#c8a97e] text-[#0b0b0d] text-xs font-bold rounded uppercase hover:bg-[#dfc49c]"
            >
              Back to Collections
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Select Garment Focus */}
            <div>
              <label className="text-xs text-[#c8a97e] uppercase font-bold block mb-2">
                1. Choose Garment Focus:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {focuses.map((focus) => (
                  <button
                    type="button"
                    key={focus}
                    id={`booking-focus-${focus.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setSelectedFocus(focus)}
                    className={`py-2 px-3 rounded text-xs font-bold transition-all border ${
                      selectedFocus === focus
                        ? 'bg-[#c8a97e] text-[#0b0b0d] border-[#c8a97e]'
                        : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {focus}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Service */}
            <div>
              <label className="text-xs text-[#c8a97e] uppercase font-bold block mb-2">
                2. Select Service Needed:
              </label>
              <div className="space-y-2">
                 {[
                   { title: 'Bespoke Gown Commission', desc: 'Couture gowns and eveningwear draped entirely to your measurements.' },
                   { title: 'Tailored Suit Commission', desc: 'Italian wool suits and blazers cut for immaculate posture and drape.' },
                   { title: 'Bridal & Gala Regalia', desc: 'One-of-one ensembles designed for weddings and red-carpet moments.' },
                   { title: 'Runway Look Pre-Order', desc: 'Priority allocation of the newest couture collection pieces.' }
                 ].map((s) => (
                  <div
                    key={s.title}
                    onClick={() => setSelectedService(s.title)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedService === s.title
                        ? 'bg-[#c8a97e]/20 border-[#c8a97e]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xs font-bold text-white block">{s.title}</span>
                    <span className="text-xs text-neutral-300 font-normal">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Date & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-neutral-300 uppercase block mb-1 font-semibold">
                  Preferred Date:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#16161d] border border-white/15 px-3 py-2 text-xs text-white rounded focus:outline-none focus:border-[#c8a97e]"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-neutral-300 uppercase block mb-1 font-semibold">
                  Preferred Time Slot:
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#16161d] border border-white/15 px-3 py-2 text-xs text-white rounded focus:outline-none focus:border-[#c8a97e]"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts} className="bg-[#101015]">
                      {ts}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Client Contact */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <label className="text-xs text-[#c8a97e] uppercase font-bold block">
                 3. Your Contact Information:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Full Name (e.g. James Morrison)"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-[#16161d] border border-white/15 px-3 py-2 text-xs text-white rounded focus:outline-none focus:border-[#c8a97e]"
                  required
                />

                <input
                  type="tel"
                   placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#16161d] border border-white/15 px-3 py-2 text-xs text-white rounded focus:outline-none focus:border-[#c8a97e]"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#16161d] border border-white/15 px-3 py-2 text-xs text-white rounded focus:outline-none focus:border-[#c8a97e]"
                required
              />

              <textarea
                placeholder="Any special notes or garments you wish to commission (optional)..."
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#16161d] border border-white/15 px-3 py-2 text-xs text-white rounded focus:outline-none focus:border-[#c8a97e]"
              />
            </div>

            <button
              type="submit"
              id="submit-booking-btn"
              className="w-full py-3.5 bg-[#c8a97e] text-[#0b0b0d] font-bold text-xs tracking-wider rounded hover:bg-[#dfc49c] transition-all uppercase shadow-lg shadow-[#c8a97e]/20 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>REQUEST CONSULTATION</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
