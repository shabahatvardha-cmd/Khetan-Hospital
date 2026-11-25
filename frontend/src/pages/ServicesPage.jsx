import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Bot, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { allServices } from '../data/clinicContent';
import { surgeryImages } from '../data/imageConfig';

export const ServicesPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#cbb387] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>Surgical Portfolio &bull; Class-100 Modular OT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Orthopedic Specialties &amp; <span className="italic font-normal text-slate-300">Advanced Procedures</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-sans-clean leading-relaxed">
            World-class surgical care by Dr. Vatsal Khetan (FRCS Edinburgh, M.Ch UK). Sub-millimeter robotic precision, muscle-sparing approaches, and rapid 24-hour mobility protocols.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => {
            const imgData = surgeryImages[service.slug];
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Procedural Photo Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900/5">
                    <img 
                      src={imgData?.image} 
                      alt={imgData?.alt || service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-black/20"></div>

                    {/* Category & Tag Pills */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center">
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[#cbb387] border border-white/10 shadow-sm">
                        {service.category}
                      </span>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#06152b] shadow-sm">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-editorial text-xl font-bold text-slate-900 group-hover:text-[#00458b] transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-sans-clean">
                      {service.summary}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100 mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        CLINICAL HIGHLIGHTS:
                      </span>
                      {service.benefits.slice(0, 2).map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00458b] hover:text-[#0ea5e9] transition-colors"
                  >
                    <span>View Surgical Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={onBookClick}
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#06152b] hover:bg-[#0b2447] text-white shadow-xs transition-colors cursor-pointer"
                  >
                    Book OPD
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
};
