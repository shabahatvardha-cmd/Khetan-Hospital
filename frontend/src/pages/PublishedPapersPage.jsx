import React from 'react';
import { BookOpen, ArrowUpRight, Award, FileText, ExternalLink } from 'lucide-react';
import { publishedPapers, clinicInfo } from '../data/clinicContent';

export const PublishedPapersPage = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-orange-400 mb-3 block">
              PEER-REVIEWED SCIENTIFIC RESEARCH · CLINICAL EVIDENCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Published Research Papers &amp;<br />
              <span className="text-[#f37021]">Academic Contributions.</span>
            </h1>
            <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
              Dr. Vatsal Khetan’s research published in high-impact medical journals including <em>Acta Orthopaedica Belgica</em>, <em>Bone &amp; Joint Open</em>, and the <em>Nigerian Journal of Orthopaedics &amp; Trauma</em>.
            </p>
          </div>

          <a 
            href={clinicInfo.socialLinks.scholar} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all flex-shrink-0"
          >
            <BookOpen className="w-4 h-4 text-[#f37021]" />
            <span>View Full Google Scholar Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="space-y-6">
          {publishedPapers.map((paper, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <span className="eyebrow text-[#00458b]">
                  {paper.journal} &bull; {paper.year}
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-orange-50 text-[#f37021] border border-orange-200">
                  {paper.citations}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#08284d] leading-snug">
                {paper.title}
              </h3>

              <p className="text-xs font-mono font-bold text-slate-500">
                Authors: <span className="text-[#08284d]">{paper.authors}</span> &bull; {paper.volume}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <strong>Abstract / Clinical Summary:</strong> {paper.summary}
              </p>

              {paper.link && (
                <div className="pt-2 flex justify-end">
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00458b] hover:text-[#f37021] transition-colors"
                  >
                    <span>Read Paper Citation on Google Scholar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clinical Research Commitment Card */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="eyebrow text-[#f37021]">EVIDENCE-BASED MEDICINE</span>
            <h4 className="text-xl font-extrabold text-[#08284d]">
              Committed to Scientific Rigor &amp; Patient Safety
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Every surgical protocol at Khetan Hospital is backed by peer-reviewed clinical studies and international guidelines.
            </p>
          </div>
          <button onClick={onBookClick} className="button-navy flex-shrink-0">
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
          </button>
        </div>

      </section>

    </div>
  );
};
