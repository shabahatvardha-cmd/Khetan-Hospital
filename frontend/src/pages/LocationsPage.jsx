import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, CheckCircle2, Navigation, Quote, ChevronRight, Sparkles } from 'lucide-react';
import { allLocations } from '../data/clinicContent';

export const LocationsPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#cbb387] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>Regional Outreach &bull; Eastern UP &amp; Western Bihar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Consultation Centres &amp; <span className="italic font-normal text-slate-300">Outreach Network</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-sans-clean leading-relaxed">
            Main surgical hospital located at Vikas Nagar, Bargadawa, Gorakhpur, with specialized consultation access for patients across Eastern UP &amp; Western Bihar.
          </p>
        </div>
      </section>

      {/* 2. Locations List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        {allLocations.map((loc, idx) => (
          <div 
            key={idx}
            className={`rounded-3xl p-6 sm:p-10 border transition-all ${
              loc.isMain 
                ? 'bg-white border-[#00458b] shadow-xl ring-2 ring-[#00458b]/15' 
                : 'bg-white border-slate-200/80 shadow-sm hover:shadow-md'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-2xl flex-shrink-0 ${loc.isMain ? 'bg-[#06152b] text-[#cbb387]' : 'bg-slate-100 text-slate-600'}`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-2xl font-editorial font-bold text-slate-900">
                      {loc.title}
                    </h3>
                    {loc.isMain ? (
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-900 text-[#cbb387] uppercase tracking-wider">
                        MAIN SURGICAL CENTRE
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wider">
                        REGIONAL OUTREACH
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl font-sans-clean">
                    {loc.desc}
                  </p>
                </div>
              </div>

              <button 
                onClick={onBookClick}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#06152b] hover:bg-[#0b2447] text-white shadow-md transition-all shrink-0 cursor-pointer"
              >
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Timings, Phone, Catchment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 text-xs font-sans-clean">
              <div className="flex items-center gap-2.5 text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                <Clock className="w-4 h-4 text-[#00458b] flex-shrink-0" />
                <span><strong>Hours:</strong> {loc.timings}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                <Phone className="w-4 h-4 text-[#00458b] flex-shrink-0" />
                <span><strong>Helpline:</strong> {loc.phone}</span>
              </div>
              {loc.catchment && (
                <div className="flex items-center gap-2.5 text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200/60 sm:col-span-2 md:col-span-1">
                  <Navigation className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Areas Served:</strong> {loc.catchment}</span>
                </div>
              )}
            </div>

            {/* Facilities Note */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600 font-sans-clean">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Services Available:</strong> {loc.servicesAvailable}</span>
            </div>

            {/* Local Patient Stories for this city */}
            {loc.patientStories && loc.patientStories.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#00458b] flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-[#00458b]" />
                  What {loc.city} Patients Say:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {loc.patientStories.map((story, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs space-y-3 flex flex-col justify-between">
                      <p className="text-slate-600 italic leading-relaxed font-sans-clean">
                        "{story.quote}"
                      </p>
                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                        <span className="font-bold text-slate-900">{story.name}</span>
                        <span className="text-[10px] text-[#00458b] font-semibold">{story.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}

      </section>

    </div>
  );
};
