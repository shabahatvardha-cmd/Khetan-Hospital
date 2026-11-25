import React, { forwardRef } from 'react';
import { ShieldCheck, Award, Sparkles, ChevronDown } from 'lucide-react';

/**
 * 🏥 SECTION 3 — HOSPITAL INTRODUCTION & FACILITY (SHUTTER SLIDE 1)
 * Docks below navbar at top-[60px] (z-10).
 * When clicking the arrow or scrolling, the Comprehensive Hospital Footer (Slide 2)
 * rises up like a shutter and completely covers/hides this section.
 */
export const HomeIntroSection = forwardRef(({ onNextClick }, ref) => {
  return (
    <section
      id="hospital-intro"
      ref={ref}
      className="sticky top-[58px] sm:top-[60px] z-10 w-full min-h-[calc(100vh-58px)] sm:min-h-[calc(100vh-60px)] h-auto lg:h-[calc(100vh-60px)] scroll-mt-[58px] sm:scroll-mt-[60px] bg-slate-50 border-t border-slate-200/90 flex flex-col justify-between py-6 sm:py-8 lg:py-10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hospital Mission & 3 Key Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase">
              <span>Purvanchal Surgical Excellence</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.2]">
              Pioneering Orthopaedic &amp; <span className="text-sky-600">Robotic Joint Excellence</span> in Purvanchal
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Founded by UK-trained specialist Dr. Vatsal Khetan (FRCS Edinburgh, M.Ch Knee UK), Khetan Hospital brings international joint replacement standards, sub-millimeter robotic precision, and dedicated arthroscopic sports rehabilitation directly to Gorakhpur and Eastern Uttar Pradesh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">FRCS Edinburgh</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">UK Royal College verified surgical governance and clinical rigor.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Robotic Precision</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">Sub-millimeter implant alignment preserving healthy bone and ligaments.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Rapid Mobility</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">Dedicated recovery pathways designed for safe, same-day mobilization.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Advanced Modular OT Photograph (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <div className="relative h-[260px] sm:h-[320px] w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/backgrounds/modular-ot.jpg"
                  alt="Khetan Hospital Advanced Modular OT"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center gap-3">
                  <img
                    src="/images/dr-vatsal-portrait.webp"
                    alt="Dr. Vatsal Khetan"
                    className="w-11 h-11 rounded-xl object-cover border-2 border-sky-500 shadow-xs shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Dr. Vatsal Khetan
                    </span>
                    <span className="text-[11px] text-sky-700 font-bold truncate">
                      FRCS (Edinburgh), M.Ch Knee (UK)
                    </span>
                    <span className="text-[10px] text-slate-500 truncate">
                      Chief Orthopaedic &amp; Robotic Surgeon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Pure Scroll Down Symbol (Bouncing Chevron to Footer Shutter) */}
      <div className="w-full flex justify-center pt-2 pb-1 shrink-0">
        <button
          onClick={onNextClick}
          aria-label="Scroll to Hospital Footer"
          className="p-2 text-slate-400 hover:text-sky-600 transition-colors cursor-pointer group"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-slate-400 group-hover:text-sky-600" />
        </button>
      </div>
    </section>
  );
});

HomeIntroSection.displayName = 'HomeIntroSection';
export default HomeIntroSection;
