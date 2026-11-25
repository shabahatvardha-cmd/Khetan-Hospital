import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Award, Sparkles, Activity, Clock } from 'lucide-react';
import { doctorImages } from '../../data/imageConfig';

export const HeroSection = ({ onBookClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    department: 'Robotic Knee Replacement'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*Appointment Request - Khetan Hospital*%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `👤 *Patient:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Mobile:* ${encodeURIComponent(formData.phone)}%0A` +
      `📅 *Preferred Date:* ${encodeURIComponent(formData.date)}%0A` +
      `🏥 *Specialty:* ${encodeURIComponent(formData.department)}%0A` +
      `👨‍⚕️ *Consultant:* Dr. Vatsal Khetan (FRCS Edinburgh)`;

    window.open(`https://wa.me/919662365917?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="relative bg-[#07182e] text-white pt-10 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
      
      {/* Ambient Radial Glow & Architectural Depth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00458b]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#0ea5e9]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Prestigious Editorial Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-0">
            
            {/* Prestige Kicker Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-200">
                Centre of Surgical Excellence &bull; UK NHS &amp; FRCS Standards
              </span>
            </div>

            {/* Cinematic Editorial Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.12]">
                Sub-Millimeter Robotic Surgery &amp; <br className="hidden sm:inline" />
                <span className="font-editorial italic font-normal text-sky-300">
                  Painless Lifelong Mobility.
                </span>
              </h1>
            </div>

            {/* Verified Clinical Narrative */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
              Led by <strong className="text-white font-bold">Dr. Vatsal Khetan</strong> (FRCS Edinburgh, M.Ch UK), Khetan Hospital provides Eastern UP with world-class robotic joint arthroplasty, Wrightington-protocol hip reconstructions, and keyhole sports medicine.
            </p>

            {/* 4 Surgical Trust Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Credential</div>
                <div className="text-xs font-bold text-white mt-0.5">FRCS (Edinburgh)</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Experience</div>
                <div className="text-xs font-bold text-white mt-0.5">10,000+ Surgeries</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Recovery</div>
                <div className="text-xs font-bold text-white mt-0.5">24-Hr Walking</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Insurance</div>
                <div className="text-xs font-bold text-emerald-300 mt-0.5">100% Cashless TPA</div>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0ea5e9] to-[#00458b] hover:from-[#38bdf8] hover:to-[#003366] text-white shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer border border-sky-300/30"
              >
                Book OPD Consultation
              </button>

              <Link
                to="/services"
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 group"
              >
                <span>Explore Specialties</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:9662365917"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors pl-1"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>Helpline: 9662365917</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Impact Dr. Vatsal Khetan Cutout */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Surgeon Aura Lighting */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-tr from-[#0ea5e9]/25 via-sky-400/20 to-transparent blur-3xl animate-pulse-subtle"></div>
            </div>

            {/* Dr. Vatsal Khetan Transparent Portrait */}
            <div className="relative z-10 flex flex-col items-center">
              <img 
                src={doctorImages.hero} 
                alt="Dr. Vatsal Khetan - Senior Consultant Orthopaedic & Joint Replacement Surgeon" 
                className="w-auto max-h-[480px] sm:max-h-[540px] lg:max-h-[580px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] select-none"
                loading="eager"
              />

              {/* Floating Verified Royal College Accreditation Card */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-4 bg-[#081c3b]/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl border border-sky-400/25 flex items-center gap-3 w-[92%] sm:w-auto">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#00458b] flex items-center justify-center text-white font-black text-xs shadow-md shrink-0 border border-sky-300/30">
                  FRCS
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">Dr. Vatsal Khetan</div>
                  <div className="text-[10px] text-sky-300 font-medium">FRCS (Edinburgh) &bull; M.Ch Orth (UK)</div>
                  <div className="text-[9px] text-slate-400">Chief Joint Replacement &amp; Robotic Surgeon</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Modern Fast-Track Appointment Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 sm:p-6 text-slate-800">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00458b]"></span>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Quick OPD Consultation Booking
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                Direct WhatsApp Confirmation
              </span>
            </div>
            <div className="text-xs text-slate-500">
              Consultation Desk: Vikas Nagar, Bargadawa, Gorakhpur
            </div>
          </div>

          {submitted ? (
            <div className="p-4 mt-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Appointment request prepared! Forwarded directly to hospital coordinator.</span>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-xs underline font-bold text-emerald-900 cursor-pointer"
              >
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Patient Name</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#00458b] focus:bg-white text-slate-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">WhatsApp / Phone</label>
                <input 
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#00458b] focus:bg-white text-slate-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Surgical Specialty</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#00458b] focus:bg-white text-slate-800 transition-colors"
                >
                  <option value="Robotic Knee Replacement">Robotic Knee Replacement</option>
                  <option value="Total Knee Replacement (TKR)">Total Knee Replacement (TKR)</option>
                  <option value="Hip Replacement (THA / MIS)">Hip Replacement (THA / MIS)</option>
                  <option value="Shoulder Surgery & Arthroscopy">Shoulder Surgery &amp; Arthroscopy</option>
                  <option value="ACL & Sports Ligament">ACL &amp; Sports Ligament</option>
                  <option value="Complex Trauma & Fractures">Complex Trauma &amp; Fractures</option>
                  <option value="Spine & Lumbar Surgery">Spine &amp; Lumbar Surgery</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#08284d] hover:bg-[#00458b] text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Confirm Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>

    </div>
  );
};
