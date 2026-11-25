import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { clinicInfo, treatmentsData } from '../data/navigationData';

export const ContactPage = ({ onBookClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: treatmentsData[0]?.name || 'Robotic Knee Surgery',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    const msg = `*New Inquiry - Khetan Hospital (Dr. Vatsal Khetan)*%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📍 *City:* ${encodeURIComponent(formData.city)}%0A` +
      `🩺 *Inquiry For:* ${encodeURIComponent(formData.service)}%0A` +
      `📝 *Message:* ${encodeURIComponent(formData.message || 'General consultation request')}`;

    window.open(`https://wa.me/919662365917?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#cbb387] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>Hospital Contact &amp; OPD Booking Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Connect with <span className="italic font-normal text-slate-300">Khetan Hospital</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-sans-clean leading-relaxed">
            Priority hospital desk, cashless TPA helpdesk, and direct consultation booking with Chief Surgeon Dr. Vatsal Khetan.
          </p>
        </div>
      </section>

      {/* 2. Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hospital Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00458b] block mb-1">
                  OFFICIAL LOCATION &amp; HELPLINE
                </span>
                <h3 className="text-xl font-editorial font-bold text-slate-900">
                  Hospital Information
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-[#00458b] shrink-0 mt-0.5 border border-slate-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600 font-sans-clean">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Official Hospital Address</strong>
                    Vikas Nagar Bargadawa Gorakhpur, Gorakhpur, Uttar Pradesh, 273015
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-[#0ea5e9] shrink-0 mt-0.5 border border-sky-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600 font-sans-clean">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Priority Phone / 24/7 Helpline</strong>
                    <a href="tel:9662365917" className="font-bold text-[#00458b] hover:text-[#0ea5e9] transition-colors text-sm">
                      +91 96623 65917
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600 font-sans-clean">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">OPD Consultation Hours</strong>
                    <span>Mon - Saturday: 9:00 AM - 8:00 PM</span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">Sunday: 24/7 Emergency Trauma Service</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-[#6366f1] shrink-0 mt-0.5 border border-purple-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600 font-sans-clean">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Official Email</strong>
                    <span>drvatsalkhetan@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Cashless TPA Banner */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Cashless Insurance TPA Desk</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  100% cashless pre-authorization available for Star Health, Care Health, HDFC ERGO, ICICI Lombard, and corporate policies.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://wa.me/919662365917?text=Hello%20Khetan%20Hospital,%20I%20would%20like%20to%20inquire%20about%20OPD%20appointment."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00458b] block mb-1">
                  DIRECT CONSULTATION REQUEST
                </span>
                <h3 className="text-2xl font-editorial font-bold text-slate-900">
                  Send an Online Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and Khetan Hospital's surgical coordinator will confirm your appointment slot promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-editorial font-bold text-slate-900">Inquiry Dispatched Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your consultation request has been forwarded directly to Khetan Hospital desk. Our coordinator will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase bg-[#06152b] text-white hover:bg-[#0b2447] transition-all cursor-pointer mt-3"
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:border-[#00458b] focus:outline-hidden bg-slate-50/50"
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:border-[#00458b] focus:outline-hidden bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">City / Region</label>
                      <input 
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        placeholder="e.g. Gorakhpur, Deoria, Basti, Maharajganj..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:border-[#00458b] focus:outline-hidden bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Procedure / Specialty</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:border-[#00458b] focus:outline-hidden bg-white"
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
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="e.g. Chronic knee pain when walking, previous X-ray shows advanced osteoarthritis..."
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs focus:border-[#00458b] focus:outline-hidden resize-none bg-slate-50/50"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#06152b] hover:bg-[#0b2447] text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Consultation Request to Hospital</span>
                    <ArrowRight className="w-4 h-4" />
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
