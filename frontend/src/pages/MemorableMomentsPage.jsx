import React from 'react';
import { Award, ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { memorableMoments } from '../data/clinicContent';

export const MemorableMomentsPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            CLINICAL TIMELINE · MEMORABLE MILESTONES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Memorable Moments &amp; <br />
            <span className="text-[#f37021]">International Surgical Training.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Key milestones from Dr. Vatsal Khetan’s surgical career across Wrightington Hospital (UK), Birmingham, and Rotherham Hospital.
          </p>
        </div>
      </section>

      {/* Fellowship Photo Spotlight */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5">
            <img 
              src="/images/dr-vatsal-fellowship.webp" 
              alt="Dr. Vatsal Khetan NHS Robotics and AI Training"
              className="w-full h-auto rounded-2xl object-cover shadow-sm"
            />
          </div>
          <div className="md:col-span-7 space-y-3">
            <span className="eyebrow text-[#00458b]">UK NHS FELLOWSHIP SPOTLIGHT</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
              The Future of NHS Robotics &amp; AI
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dr. Vatsal Khetan participating in advanced robotic and artificial intelligence surgical training at The Newcastle upon Tyne Hospitals NHS Foundation Trust and Wrightington Hospital, UK.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {memorableMoments.map((item, idx) => (
            <div key={idx} className="flex gap-5 sm:gap-8 items-start group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 border-2 border-[#00458b] flex items-center justify-center text-[#00458b] font-bold group-hover:bg-[#f37021] group-hover:border-[#f37021] group-hover:text-white transition-all shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                {idx !== memorableMoments.length - 1 && (
                  <div className="w-0.5 h-20 bg-slate-200 mt-2" />
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 flex-1 hover:shadow-md transition-shadow">
                <span className="text-xs font-mono font-bold text-[#f37021] uppercase tracking-wider block mb-1">
                  {item.year}
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-[#08284d] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button onClick={onBookClick} className="button-navy">
            <span>Consult Dr. Vatsal Khetan</span>
            <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
          </button>
        </div>
      </section>

    </div>
  );
};
