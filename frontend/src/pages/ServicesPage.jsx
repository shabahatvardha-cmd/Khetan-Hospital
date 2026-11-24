import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Bot, ShieldCheck, Stethoscope } from 'lucide-react';
import { allServices } from '../data/clinicContent';
import { surgeryImages } from '../data/imageConfig';

export const ServicesPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Interior Breadcrumb Banner */}
      <section className="bg-[#edf1f5] border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Orthopedic <span className="font-normal text-slate-600">Specialties &amp; Surgeries</span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-3.5">
              Comprehensive surgical portfolio &bull; Khetan Hospital, Gorakhpur
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => {
            const imgData = surgeryImages[service.slug];
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Procedural Photo Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={imgData?.image} 
                      alt={imgData?.alt || service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20"></div>

                    {/* Category & Tag Pills */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center">
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#00bcd4] shadow-sm">
                        {service.category}
                      </span>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#ff5722] shadow-sm">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#00bcd4] transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mb-5">
                      {service.summary}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Key Clinical Highlights:
                      </span>
                      {service.benefits.slice(0, 2).map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
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
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ff5722] hover:text-[#e64a19] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onBookClick}
                    className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase bg-[#00bcd4] hover:bg-[#00acc1] text-white shadow-xs transition-colors cursor-pointer"
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
