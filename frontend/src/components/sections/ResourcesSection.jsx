import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  BookOpen, 
  Clock, 
  Calendar, 
  ChevronRight, 
  User, 
  Tag, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import blogsData from '../../data/blogsData.json';

export const ResourcesSection = ({ onBookClick }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Take 3 premier articles from blogsData
  const featuredBlogs = [
    blogsData.find(b => b.slug.includes('hip-replacement-surgery-at-home')) || blogsData[0],
    blogsData.find(b => b.slug.includes('robotic-surgery-in-orthopedic') || b.slug.includes('benefits-of-robotic')) || blogsData[2],
    blogsData.find(b => b.slug.includes('risks-and-complications-of-acl-surgery')) || blogsData[5]
  ].filter(Boolean);

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-amber-100 text-amber-800 mb-3">
              03 / PATIENT GUIDANCE &amp; MEDICAL BLOGS
            </span>
            <h2 id="resources-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#08284d]">
              Recovery Guides &amp;<br />
              <span className="text-[#00b4d8]">Clinical Health Insights.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed">
            Written directly by Dr. Vatsal Khetan to answer common patient questions regarding joint replacement, robotic precision, ligament tears, and safe at-home recovery.
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, idx) => {
            const cleanExcerpt = blog.excerpt
              ? blog.excerpt.replace(/<[^>]+>/g, '').slice(0, 150) + '...'
              : 'Read comprehensive evidence-based medical advice by Dr. Vatsal Khetan on joint recovery, exercise guidelines, and surgical precautions.';

            return (
              <article 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Header */}
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img 
                    src={blog.featuredImage || '/images/dr-vatsal-rehab.webp'} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/dr-vatsal-rehab.webp';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white/95 text-[#08284d] shadow-sm backdrop-blur-xs">
                      {blog.category || 'PATIENT GUIDE'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <User className="w-3 h-3 text-[#00b4d8]" />
                        <span>Dr. Vatsal Khetan</span>
                      </span>
                      <span>&bull;</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>5 min read</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#08284d] group-hover:text-[#00b4d8] transition-colors leading-snug line-clamp-2 mb-3">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {cleanExcerpt}
                    </p>
                  </div>

                  {/* Read Article Trigger */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#08284d] group-hover:text-[#00b4d8] transition-colors cursor-pointer"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#f37021]" />
                    </button>
                    <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#08284d] text-white flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-[#00b4d8]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#08284d]">
                Browse All 61 Medical Publications &amp; Recovery Guides
              </h4>
              <p className="text-xs text-slate-500">
                Search through our archive of orthopedic conditions, surgical preparation checklists, and FAQs.
              </p>
            </div>
          </div>

          <Link 
            to="/blogs"
            className="px-6 py-3 rounded-full text-xs font-bold bg-[#08284d] text-white hover:bg-[#00458b] transition-all shadow-md inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Explore Knowledge Hub</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Interactive Modal Reader for Selected Blog */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 bg-[#08284d] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#00b4d8] uppercase tracking-wider block mb-0.5">
                  PATIENT RECOVERY ARTICLE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                  {selectedBlog.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm leading-relaxed">
              {selectedBlog.featuredImage && (
                <img 
                  src={selectedBlog.featuredImage} 
                  alt={selectedBlog.title} 
                  className="w-full max-h-72 object-cover rounded-2xl shadow-sm mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}

              <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-100 pb-4">
                <span>By <strong>Dr. Vatsal Khetan</strong> (MS, FRCS)</span>
                <span>&bull;</span>
                <span>Category: {selectedBlog.category || 'Orthopedics'}</span>
                <span>&bull;</span>
                <span>Published: {selectedBlog.date || 'Recent'}</span>
              </div>

              {/* Render Full Content */}
              <div 
                className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content || selectedBlog.excerpt }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Have questions about this condition? Consult Dr. Vatsal Khetan directly.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    onBookClick();
                  }}
                  className="px-5 py-2 rounded-full text-xs font-bold bg-[#08284d] text-white hover:bg-[#00458b] transition-all"
                >
                  Book OPD Appointment
                </button>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-4 py-2 rounded-full text-xs font-bold border border-slate-200 hover:bg-slate-100 text-slate-600 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
