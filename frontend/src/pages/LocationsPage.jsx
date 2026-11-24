import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { allLocations } from '../data/clinicContent';

export const LocationsPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            REGIONAL CENTRES & OUTREACH CLINICS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Consultation Centres Across<br />
            <span className="text-[#f37021]">Eastern UP &amp; Bihar.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            While our primary surgical centre and daily OPD is in Betiahata, Gorakhpur, Dr. Vatsal Khetan holds regular outreach consultations in Deoria, Basti, Kushinagar, Bettiah, Siwan, and Patna.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="space-y-6">
          {allLocations.map((loc, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 border transition-all ${
                loc.isMain 
                  ? 'bg-white border-[#f37021] shadow-lg ring-2 ring-[#f37021]/20' 
                  : 'bg-white border-slate-200/80 shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-2xl ${loc.isMain ? 'bg-orange-100 text-[#f37021]' : 'bg-blue-50 text-[#00458b]'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#08284d]">
                        {loc.title}
                      </h3>
                      {loc.isMain && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#f37021]">
                          MAIN CLINIC
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{loc.address}</p>
                  </div>
                </div>

                <button 
                  onClick={onBookClick}
                  className={loc.isMain ? 'button-orange !min-h-[40px] text-xs' : 'button-navy !min-h-[40px] text-xs'}
                >
                  <span>Book at this location</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Clock className="w-4 h-4 text-[#00458b] flex-shrink-0" />
                  <span><strong>Timings:</strong> {loc.timings}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Phone className="w-4 h-4 text-[#f37021] flex-shrink-0" />
                  <span><strong>Priority Phone:</strong> {loc.phone}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span><strong>Facilities:</strong> {loc.servicesAvailable}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
