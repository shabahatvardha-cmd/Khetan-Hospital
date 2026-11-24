import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { clinicInfo, treatmentsData } from '../data/navigationData';

export const ContactPage = ({ onBookClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Gorakhpur',
    service: treatmentsData[0]?.name || 'Robotic Knee Surgery',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    const msg = `*New Inquiry - Dr. Vatsal Khetan Clinic*%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📍 *City:* ${encodeURIComponent(formData.city)}%0A` +
      `🩺 *Inquiry For:* ${encodeURIComponent(formData.service)}%0A` +
      `📝 *Message:* ${encodeURIComponent(formData.message || 'General consultation request')}`;

    window.open(`https://wa.me/${clinicInfo.phone.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            GET IN TOUCH · CLINIC VISITS & INQUIRIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Dr. Vatsal Khetan<br />
            <span className="text-[#f37021]">Khetan Knee N Shoulder Clinic.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Located centrally at Betiahata Chowk, Gorakhpur. Reach our priority clinic desk directly for OPD consultations, second opinions, and emergency joint care.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Clinic Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-extrabold text-[#08284d]">
                Clinic Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-orange-50 text-[#f37021] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="block text-[#08284d] text-sm">Main Clinic Address</strong>
                    {clinicInfo.location}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#00458b] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="block text-[#08284d] text-sm">Priority Phone / WhatsApp</strong>
                    <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="font-bold text-[#f37021] hover:underline">
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="block text-[#08284d] text-sm">OPD Consultation Hours</strong>
                    {clinicInfo.timings}
                    <span className="block text-[11px] text-slate-400 mt-1">Sunday by prior appointment only</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="block text-[#08284d] text-sm">Official Email</strong>
                    <span>{clinicInfo.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${clinicInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full button-navy !justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#f37021]" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <span className="eyebrow text-[#f37021]">SCHEDULE YOUR CONSULTATION</span>
              <h3 className="text-2xl font-extrabold text-[#08284d] mt-2 mb-2">
                Send an Online Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details below and Dr. Vatsal Khetan’s clinic coordinator will confirm your appointment slot promptly.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Inquiry Dispatched!</h4>
                  <p className="text-xs text-slate-600">
                    Your consultation request has been forwarded directly to our clinic desk. We will respond promptly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="button-navy text-xs !min-h-[38px] mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Patient Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#08284d] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#08284d] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">City / Location</label>
                      <input 
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        placeholder="e.g. Gorakhpur, Deoria, Basti..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#08284d] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service / Treatment Required</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#08284d] focus:outline-none bg-white"
                      >
                        {treatmentsData.map((t, i) => (
                          <option key={i} value={t.name}>{t.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Brief Symptoms or Notes</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="e.g. Severe knee pain when walking, previous X-ray shows osteoarthritis..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#08284d] focus:outline-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full button-orange !justify-center"
                  >
                    <span>Send Inquiry to Clinic</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
