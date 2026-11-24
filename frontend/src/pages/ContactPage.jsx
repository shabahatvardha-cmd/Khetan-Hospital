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
  ChevronRight
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

    window.open(`https://wa.me/${clinicInfo.phone.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Oreo Interior Breadcrumb Banner */}
      <section className="bg-[#edf1f5] border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Contact <span className="font-normal text-slate-600">Khetan Hospital</span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-3.5">
              Priority hospital desk &bull; Betiahata Road, Gorakhpur
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hospital Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
                <h3 className="text-lg font-bold text-slate-800">
                  Hospital Information
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-orange-50 text-[#ff5722] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Hospital Address</strong>
                    {clinicInfo.location}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-[#00bcd4] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Priority Phone / Helpline</strong>
                    <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="font-bold text-[#ff5722] hover:underline">
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">OPD Consultation Hours</strong>
                    {clinicInfo.timings}
                    <span className="block text-[11px] text-slate-400 mt-0.5">Sunday by prior appointment only</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-[#8c79b2] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">Official Email</strong>
                    <span>{clinicInfo.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${clinicInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-5 bg-[#00bcd4] inline-block rounded-full"></span>
                <h3 className="text-lg font-bold text-slate-800">
                  Send an Online Inquiry
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-6 pl-3.5">
                Fill in your details below and Khetan Hospital's coordinator will confirm your appointment slot promptly.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Inquiry Dispatched!</h4>
                  <p className="text-xs text-slate-600">
                    Your consultation request has been forwarded directly to Khetan Hospital desk. We will respond promptly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-full text-xs font-bold uppercase bg-[#ff5722] text-white hover:bg-[#e64a19] transition-all cursor-pointer mt-2"
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
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs focus:border-[#00bcd4] focus:outline-hidden"
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
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs focus:border-[#00bcd4] focus:outline-hidden"
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
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs focus:border-[#00bcd4] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service / Treatment Required</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs focus:border-[#00bcd4] focus:outline-hidden bg-white"
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
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs focus:border-[#00bcd4] focus:outline-hidden resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry to Hospital</span>
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
