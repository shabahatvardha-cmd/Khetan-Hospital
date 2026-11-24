import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, ChevronRight } from 'lucide-react';
import { allBlogs } from '../data/clinicContent';

export const BlogsPage = ({ onBookClick }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            PATIENT EDUCATION & CLINICAL GUIDANCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Orthopedic Health &amp; <br />
            <span className="text-[#f37021]">Recovery Knowledge Hub.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Evidence-based articles written by Dr. Vatsal Khetan to help patients understand joint arthritis, robotic knee replacement, ACL sports injuries, and post-operative home recovery.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Selected Blog Modal / Reader */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="eyebrow text-[#00458b]">{selectedBlog.category} &bull; {selectedBlog.readTime}</span>
                <button 
                  onClick={() => setSelectedBlog(null)} 
                  className="text-xs font-bold px-3 py-1 bg-slate-100 rounded-full hover:bg-slate-200"
                >
                  Close &times;
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#08284d]">
                {selectedBlog.title}
              </h2>

              <p className="text-xs text-slate-400 font-mono">By Dr. Vatsal Khetan &bull; {selectedBlog.date}</p>

              <div className="text-sm text-slate-700 leading-relaxed space-y-3 pt-2">
                <p>{selectedBlog.content}</p>

                {selectedBlog.sections && selectedBlog.sections.length > 0 && (
                  <div className="space-y-3 pt-2">
                    {selectedBlog.sections.map((sec, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                        <h4 className="text-xs font-bold text-[#08284d]">{sec.heading}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{sec.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-xs text-[#00458b]">
                  <strong>Doctor's Advice:</strong> Every patient's bone density, joint geometry, and recovery curve are unique. Consult Dr. Vatsal Khetan in OPD for individualized assessment.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <button 
                  onClick={() => {
                    setSelectedBlog(null);
                    onBookClick();
                  }}
                  className="button-navy text-xs"
                >
                  <span>Book Consultation for this Condition</span>
                  <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allBlogs.map((blog, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-3 border-b border-slate-100 mb-4">
                  <span className="font-bold text-[#00458b]">{blog.category}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-lg font-extrabold text-[#08284d] mb-2 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
              </div>

              <button 
                onClick={() => setSelectedBlog(blog)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f37021] hover:text-[#d95d13] transition-colors pt-2"
              >
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
