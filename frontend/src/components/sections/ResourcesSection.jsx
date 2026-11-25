import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, ArrowRight, X, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { allBlogs } from '../../data/clinicContent';

export const ResourcesSection = ({ onBookClick }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [newsletterData, setNewsletterData] = useState({ name: '', email: '' });
  const [subscribed, setSubscribed] = useState(false);

  // 3 Featured blogs from allBlogs
  const featuredBlogs = [
    allBlogs.find(b => b.slug.includes('hip-replacement-surgery-at-home')) || allBlogs[0],
    allBlogs.find(b => b.slug.includes('robotic-surgery-in-orthopedic') || b.slug.includes('benefits-of-robotic')) || allBlogs[2],
    allBlogs.find(b => b.slug.includes('risks-and-complications-of-acl-surgery')) || allBlogs[5]
  ].filter(Boolean);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section id="blogs" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00458b]/10 border border-[#00458b]/20 text-[#00458b] text-[11px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>Clinical Evidence &amp; Rehabilitation Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Orthopedic Insights &amp; <span className="italic font-normal text-slate-500">Recovery Protocols</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-sans-clean">
            Peer-reviewed perspectives, surgical preparation checklists, and evidence-based post-operative rehabilitation authored by Dr. Vatsal Khetan and our orthopedic surgical team.
          </p>
        </div>

        {/* 3 Featured Blog Cards (Editorial Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, idx) => {
            const tagLabel = idx === 0 ? 'Joint Arthroplasty' : idx === 1 ? 'Robotic Navigation' : 'Sports Medicine';
            return (
              <article
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                {/* Photo: Ambient blurred fill + 100% uncut foreground image (zero clipping from top) */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900/5 flex items-center justify-center border-b border-slate-100">
                  <img
                    src={blog.featuredImage || '/images/dr-vatsal-rehab.webp'}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 select-none pointer-events-none"
                    aria-hidden="true"
                  />
                  <img
                    src={blog.featuredImage || '/images/dr-vatsal-rehab.webp'}
                    alt={blog.title}
                    className="relative z-10 max-h-full max-w-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/dr-vatsal-rehab.webp';
                    }}
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[#cbb387] border border-white/10 shadow-sm">
                      {tagLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#00458b] transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {blog.excerpt || 'Comprehensive guide covering patient preparation, procedural nuances, and rapid recovery expectations.'}
                    </p>
                  </div>

                  {/* Meta Strip */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span>{blog.date || '02 Feb 2026'}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 font-bold text-[#00458b] group-hover:text-[#0ea5e9] transition-colors">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Guides Link */}
        <div className="mt-10 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#06152b] bg-white border border-slate-300 hover:border-[#00458b] hover:bg-slate-50 shadow-sm transition-all"
          >
            <span>Explore All 20+ Clinical Guides</span>
            <ArrowRight className="w-4 h-4 text-[#0ea5e9]" />
          </Link>
        </div>

        {/* Floating Newsletter / Consultation Inquiry Strip (Elevated Editorial) */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8 relative z-20 text-white">
          <div className="text-center sm:text-left mb-4 sm:flex sm:items-center sm:justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#cbb387] block">
                SUBSCRIBE &bull; EVIDENCE-BASED HEALTH
              </span>
              <h3 className="text-lg sm:text-xl font-editorial font-bold text-white mt-0.5">
                Stay Informed with Joint Care Updates
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-1 sm:mt-0 max-w-xs">
              Receive verified orthopedic recovery checklists and hospital bulletins directly.
            </p>
          </div>

          {subscribed ? (
            <div className="text-center text-xs text-emerald-400 font-bold py-3 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! You are now subscribed to Khetan Hospital clinical updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-5">
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={newsletterData.name}
                  onChange={(e) => setNewsletterData({ ...newsletterData, name: e.target.value })}
                  className="w-full text-xs px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-400 border border-white/15 focus:outline-hidden focus:border-[#38bdf8] focus:bg-white/15 transition-all"
                />
              </div>
              <div className="sm:col-span-4">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterData.email}
                  onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                  className="w-full text-xs px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-400 border border-white/15 focus:outline-hidden focus:border-[#38bdf8] focus:bg-white/15 transition-all"
                />
              </div>
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#cbb387] to-[#dfca9f] hover:from-[#dfca9f] hover:to-[#cbb387] text-[#06152b] shadow-md transition-all cursor-pointer text-center font-sans-clean font-extrabold"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* Full Article Modal Reader (Editorial Dark Header) */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-[#06152b] text-white flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#cbb387] block">
                  Khetan Hospital &bull; Clinical Guide
                </span>
                <h3 className="text-base sm:text-lg font-editorial font-bold text-white line-clamp-1 mt-0.5">
                  {selectedBlog.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
              {selectedBlog.featuredImage && (
                <div className="rounded-2xl overflow-hidden shadow-xs bg-slate-50 p-3 flex justify-center max-h-80 border border-slate-100 mb-4">
                  <img
                    src={selectedBlog.featuredImage}
                    alt={selectedBlog.title}
                    className="w-auto max-h-72 mx-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* RENDER FULL HTML ARTICLE */}
              <div
                className="blog-article-content max-w-none text-slate-700 leading-relaxed font-sans-clean"
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.content || selectedBlog.rawHtml || selectedBlog.textContent || selectedBlog.excerpt
                }}
              />
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedBlog(null);
                  onBookClick();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#06152b] text-white shadow-md hover:bg-[#0b2447] transition-all cursor-pointer"
              >
                Book OPD Consultation
              </button>
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2.5 rounded-full text-xs font-bold border border-slate-300 text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
