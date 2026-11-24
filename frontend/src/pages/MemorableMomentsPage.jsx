import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { memorableMoments } from '../data/clinicContent';

export const MemorableMomentsPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Oreo Interior Breadcrumb Banner */}
      <section className="bg-[#edf1f5] border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Memorable <span className="font-normal text-slate-600">Moments &amp; UK Training</span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-3.5">
              Fellowships, mentor milestones, and athletic care across India and the UK
            </p>
          </div>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#00bcd4] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/about" className="hover:text-[#00bcd4] transition-colors">About</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00bcd4]">Moments</span>
          </nav>
        </div>
      </section>

      {/* 2. Fellowship Photo Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <img 
              src="/images/dr-vatsal-fellowship.webp" 
              alt="Dr. Vatsal Khetan NHS Robotics and AI Training"
              className="w-full h-auto rounded-xl object-cover shadow-xs"
            />
          </div>
          <div className="md:col-span-7 space-y-3">
            <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-sky-50 text-[#00bcd4]">
              UK NHS FELLOWSHIP SPOTLIGHT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
              The Future of NHS Robotics &amp; AI
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#ff5722]">
                  {item.year}
                </span>
                <h4 className="text-sm font-bold text-slate-800 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00bcd4]" />
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
