import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Award, Zap, HeartHandshake } from 'lucide-react';
import { surgeryImages, backgroundTextures } from '../../data/imageConfig';

export const WhyChooseUsSection = ({ onBookClick }) => {
  return (
    <div className="w-full">
      
      {/* 1. Surgical Technology & Safety Section */}
      <section className="bg-[#07182e] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-white/10">
        
        {/* Background Modular OT Overlay */}
        <img 
          src={backgroundTextures.modularOt} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none select-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07182e]/98 via-[#07182e]/92 to-[#07182e]/98 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="mb-14 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-[10px] font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Evidence-Based Clinical Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Why Patients Choose <span className="font-editorial italic font-normal text-sky-200">Khetan Hospital.</span>
            </h2>
          </div>

          {/* 2-Column Split: Content on Left, Photo on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Sub-Millimeter Navigation, Zero-Infection Sterility &amp; Rapid Ambulation.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                At Khetan Hospital, every surgery is performed under the direct leadership of Dr. Vatsal Khetan (FRCS Edinburgh). We integrate high-precision 3D CT mapping and real-time computer navigation to position implants with sub-millimeter accuracy, preserving healthy bone and ligaments to ensure your new joint functions naturally for 20+ years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Sub-Millimeter Accuracy</strong>
                    <span className="text-[11px] text-slate-400">Protects collateral ligaments for 20+ year joint survivorship.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Class-100 Modular OT</strong>
                    <span className="text-[11px] text-slate-400">Positive pressure laminar flow virtually eliminates infection.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">24-Hour Walking Protocol</strong>
                    <span className="text-[11px] text-slate-400">Multimodal pain management encourages Day-1 bedside mobilization.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">100% Cashless TPA Network</strong>
                    <span className="text-[11px] text-slate-400">Direct pre-authorization across Star, Care, HDFC, Bajaj &amp; TPAs.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/services/robotic-knee-surgery"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0ea5e9] to-[#00458b] hover:from-[#38bdf8] hover:to-[#003366] text-white shadow-xl hover:scale-[1.02] transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Explore Robotic Surgery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={onBookClick}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 cursor-pointer"
                >
                  Book OPD
                </button>
              </div>

            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-sky-400/20 max-w-md w-full bg-[#0a2347] relative group">
                <img 
                  src={surgeryImages["robotic-knee-surgery"].image} 
                  alt="Sub-Millimeter Robotic Surgery Technology at Khetan Hospital"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                    Surgical Navigation Suite
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    3D Optical Tracking &amp; Haptic Boundaries
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Ensuring real-time sub-millimeter surgical accuracy inside our sterile laminar flow operating theatre.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Emergency Trauma & Acute Care Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              <span>24/7 Immediate Emergency Trauma Admission</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              Emergency Fractures &bull; Pelvic Trauma &bull; Acute Dislocation Care
            </h3>
            <p className="text-xs text-slate-400">
              Direct emergency helpline: <strong className="text-white">+91 96623 65917</strong> &bull; Vikas Nagar, Bargadawa, Gorakhpur
            </p>
          </div>

          <a
            href="tel:9662365917"
            className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-700 text-white shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Emergency Desk</span>
          </a>
        </div>
      </section>

    </div>
  );
};
