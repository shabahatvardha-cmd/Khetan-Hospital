import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Award, FileText, ExternalLink, ChevronRight, Sparkles } from 'lucide-react';
import { publishedPapers, clinicInfo } from '../data/clinicContent';

export const PublishedPapersPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#cbb387] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>Academic Rigor &bull; Peer-Reviewed Literature</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Published <span className="italic font-normal text-slate-300">Research Papers</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-sans-clean leading-relaxed">
            10 peer-reviewed scientific contributions in international orthopaedic journals authored and co-authored by Dr. Vatsal Khetan (FRCS Edinburgh, M.Ch UK).
          </p>
        </div>
      </section>

      {/* 2. Papers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="space-y-6">
          {publishedPapers.map((paper, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#00458b] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span>
                  <span>{paper.journal} &bull; {paper.year}</span>
                </span>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {paper.citations}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-editorial font-bold text-slate-900 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1 font-sans-clean">
                  Authors: {paper.authors}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100 font-sans-clean">
                {paper.summary}
              </p>

              {paper.link && (
                <div className="pt-2">
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00458b] hover:text-[#0ea5e9] transition-colors"
                  >
                    <span>Read Publication on Google Scholar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Commitment Card */}
        <div className="mt-14 bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbb387] block">
              EVIDENCE-BASED MEDICINE
            </span>
            <h4 className="text-xl font-editorial font-bold text-white">
              Surgical Rigor Rooted in Clinical Science
            </h4>
            <p className="text-xs text-slate-300 max-w-xl font-sans-clean leading-relaxed">
              Every surgical protocol at Khetan Hospital is backed by peer-reviewed clinical studies and international joint replacement guidelines.
            </p>
          </div>
          <button 
            onClick={onBookClick}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#cbb387] to-[#dfca9f] hover:from-[#dfca9f] hover:to-[#cbb387] text-[#06152b] shadow-md transition-all shrink-0 cursor-pointer font-sans-clean font-extrabold"
          >
            <span>Book Consultation</span>
          </button>
        </div>

      </section>

    </div>
  );
};
