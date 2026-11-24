import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { allServices } from '../data/clinicContent';

export const ServicesPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            ORTHOPEDIC SPECIALTIES · PROCEDURES & SURGERIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Specialized Joint Surgery &amp;<br />
            <span className="text-[#f37021]">Joint Preservation Care.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            From sub-millimeter robotic knee replacement to minimally invasive keyhole arthroscopy and sports trauma, explore our complete spectrum of orthopedic services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#00458b]">
                    {service.category}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-orange-50 text-[#f37021]">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#08284d] group-hover:text-[#f37021] transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Clinical Highlights:
                  </span>
                  {service.benefits.slice(0, 2).map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <a 
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-[#08284d] group-hover:text-[#f37021] transition-colors"
                >
                  View Details &rarr;
                </a>
                <button 
                  onClick={onBookClick}
                  className="round-link !w-9 !h-9 text-[#08284d] hover:!bg-[#08284d] hover:!text-white"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
