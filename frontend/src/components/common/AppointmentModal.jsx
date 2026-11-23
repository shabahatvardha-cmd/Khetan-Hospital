import React, { useState } from 'react';
import { X, Calendar, User, Phone, Stethoscope, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { treatmentsData, clinicInfo } from '../../data/navigationData';

export const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: treatmentsData[0]?.name || 'Robotic Knee Surgery',
    date: new Date().toISOString().split('T')[0],
    slot: 'Morning (10:30 AM - 02:00 PM)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*Appointment Request - Dr. Vatsal Khetan Clinic*%0A` +
      `👤 *Patient:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `🩺 *Service:* ${encodeURIComponent(formData.treatment)}%0A` +
      `📅 *Date:* ${encodeURIComponent(formData.date)}%0A` +
      `⏰ *Slot:* ${encodeURIComponent(formData.slot)}%0A` +
      `📝 *Notes:* ${encodeURIComponent(formData.notes || 'None')}`;

    window.open(`https://wa.me/${clinicInfo.phone.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0b2545] text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Book An Appointment</h3>
            <p className="text-xs text-cyan-300">{clinicInfo.clinicName} &bull; Betiahata, Gorakhpur</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Request Sent to Clinic!</h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              We have forwarded your consultation request to Dr. Vatsal Khetan's team on WhatsApp.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="bg-[#0b2545] text-white text-xs font-bold py-2 px-6 rounded-xl hover:bg-[#133966]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Patient Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Treatment / Concern</label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full text-xs p-2.5 border border-slate-200 rounded-xl bg-white focus:outline-hidden focus:ring-1 focus:ring-blue-600"
              >
                {treatmentsData.map(proc => (
                  <option key={proc.name} value={proc.name}>
                    {proc.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">OPD Slot</label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl bg-white focus:outline-hidden"
                >
                  <option value="Morning (10:30 AM - 02:00 PM)">Morning (10:30 AM - 2:00 PM)</option>
                  <option value="Evening (05:30 PM - 08:30 PM)">Evening (05:30 PM - 8:30 PM)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[#0077b6] hover:bg-[#00529b] text-white text-xs font-bold py-3 rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Appointment via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
