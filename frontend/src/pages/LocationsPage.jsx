import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, CheckCircle2, Star, Navigation, Quote } from 'lucide-react';
import { allLocations } from '../data/clinicContent';

export const LocationsPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            REGIONAL PATIENT REACH &amp; OUTREACH CLINICS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Consultation Centres Across<br />
            <span className="text-[#f37021]">Eastern UP &amp; Western Bihar.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Patients from Deoria, Basti, Kushinagar, Maharajganj, Bettiah, and Siwan no longer need to travel to Delhi or Lucknow. Dr. Vatsal Khetan offers world-class robotic joint replacement and sports orthopaedics at Khetan Hospital, Gorakhpur.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        
        {allLocations.map((loc, idx) => (
          <div 
            key={idx}
            className={`rounded-3xl p-6 sm:p-8 border transition-all ${
              loc.isMain 
                ? 'bg-white border-[#f37021] shadow-lg ring-2 ring-[#f37021]/20' 
                : 'bg-white border-slate-200/80 shadow-xs hover:shadow-md'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="flex items-start gap-3.5">
                <div className={`p-3 rounded-2xl flex-shrink-0 ${loc.isMain ? 'bg-orange-100 text-[#f37021]' : 'bg-blue-50 text-[#00458b]'}`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
                      {loc.title}
                    </h3>
                    {loc.isMain ? (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#f37021]">
                        MAIN SURGICAL HOSPITAL
                      </span>
                    ) : loc.distance ? (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#00458b]">
                        {loc.distance}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{loc.address}</p>
                </div>
              </div>

              <button 
                onClick={onBookClick}
                className={loc.isMain ? 'button-orange !min-h-[44px] text-xs flex-shrink-0' : 'button-navy !min-h-[44px] text-xs flex-shrink-0'}
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Timings, Phone, Catchment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Clock className="w-4 h-4 text-[#00458b] flex-shrink-0" />
                <span><strong>Hours:</strong> {loc.timings}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Phone className="w-4 h-4 text-[#f37021] flex-shrink-0" />
                <span><strong>Helpline:</strong> {loc.phone}</span>
              </div>
              {loc.catchment && (
                <div className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100 sm:col-span-2 md:col-span-1">
                  <Navigation className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Areas Served:</strong> {loc.catchment}</span>
                </div>
              )}
            </div>

            {/* Travel note or facilities */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Services:</strong> {loc.servicesAvailable}</span>
            </div>

            {/* Local Patient Stories for this city */}
            {loc.patientStories && loc.patientStories.length > 0 && (
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-[#f37021]" />
                  What {loc.city} Patients Say:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {loc.patientStories.map((story, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 text-xs space-y-2 flex flex-col justify-between">
                      <p className="text-slate-600 italic leading-relaxed">
                        "{story.quote}"
                      </p>
                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="font-bold text-[#08284d]">{story.name}</span>
                        <span className="text-[10px] text-[#f37021] font-semibold">{story.location}</span>
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
