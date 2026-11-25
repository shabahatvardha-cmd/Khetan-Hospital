import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Calendar, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { memorableMoments } from '../data/clinicContent';

export const MemorableMomentsPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#cbb387] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>British Fellowships &bull; International Milestones</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Memorable Moments &amp; <span className="italic font-normal text-slate-300">UK Training</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-sans-clean leading-relaxed">
            Fellowships, mentor milestones, and athletic care across leading surgical centres in India and the United Kingdom.
          </p>
        </div>
      </section>

      {/* 2. Fellowship Photo Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <img 
              src="/images/dr-vatsal-fellowship.webp" 
              alt="Dr. Vatsal Khetan NHS Robotics and AI Training"
              className="w-full h-auto rounded-2xl object-cover shadow-sm"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-slate-900 text-[#cbb387] inline-block">
              UK NHS FELLOWSHIP SPOTLIGHT
            </span>
            <h3 className="text-2xl font-editorial font-bold text-slate-900">
              The Future of NHS Robotics &amp; AI
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-clean">
              Dr. Vatsal Khetan participating in advanced robotic and artificial intelligence surgical training at The Newcastle upon Tyne Hospitals NHS Foundation Trust and Wrightington Hospital, UK. Bringing world-class surgical protocols to Gorakhpur.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Timeline Moments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memorableMoments.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-[#00458b] inline-block">
                  {item.year}
                </span>
                <h4 className="text-base font-editorial font-bold text-slate-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans-clean">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00458b]" />
                  <span>Clinical Milestone</span>
                </span>
                <span className="font-mono text-[11px] font-bold">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
