import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Award, FileText, ExternalLink, ChevronRight } from 'lucide-react';
import { publishedPapers, clinicInfo } from '../data/clinicContent';

export const PublishedPapersPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Oreo Interior Breadcrumb Banner */}
      <section className="bg-[#edf1f5] border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Published <span className="font-normal text-slate-600">Research Papers</span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-3.5">
              10 peer-reviewed scientific contributions in international orthopaedic journals
            </p>
          </div>
        </div>
      </section>

      {/* 2. Papers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="space-y-6">
          {publishedPapers.map((paper, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#00bcd4]">
                  {paper.journal} &bull; {paper.year}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#ff5722]">
                  {paper.citations}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Authors: {paper.authors}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {paper.summary}
              </p>

              {paper.link && (
                <div className="pt-1">
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5722] hover:text-[#e64a19] transition-colors"
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
        <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">
              Committed to Scientific Rigor &amp; Evidence-Based Care
            </h4>
            <p className="text-xs text-slate-500 max-w-xl">
              Every surgical protocol at Khetan Hospital is backed by peer-reviewed clinical studies and international guidelines.
            </p>
          </div>
          <button 
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Book Consultation</span>
          </button>
        </div>

      </section>

    </div>
  );
};
