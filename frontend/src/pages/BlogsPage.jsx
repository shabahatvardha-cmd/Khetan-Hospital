import React, { useState, useMemo } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, ChevronRight, Search, Tag, X, User } from 'lucide-react';
import { allBlogs, clinicInfo } from '../data/clinicContent';

export const BlogsPage = ({ onBookClick }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list
  const categories = useMemo(() => {
    const set = new Set();
    allBlogs.forEach(b => {
      if (b.category) set.add(b.category);
      if (b.allCategories) b.allCategories.forEach(c => set.add(c));
    });
    return ['All', ...Array.from(set).slice(0, 8)];
  }, []);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(b => {
      const matchesSearch = 
        !searchQuery || 
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        b.category === selectedCategory || 
        b.allCategories?.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#08284d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-orange-400 mb-3 block">
            PATIENT EDUCATION &amp; CLINICAL GUIDANCE · {allBlogs.length} ARTICLES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Orthopedic Health &amp; <br />
            <span className="text-[#f37021]">Recovery Knowledge Hub.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Comprehensive medical articles written by Dr. Vatsal Khetan to help patients make informed decisions about joint replacement, robotic precision, ACL tears, and home rehabilitation.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search by topic, e.g. 'Robotic Knee', 'ACL', 'Hip Recovery'..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 text-white placeholder-slate-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37021] text-sm backdrop-blur-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#08284d] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Selected Blog Full Reader Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-[#00458b] bg-blue-50 px-3 py-1 rounded-full">
                    {selectedBlog.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    &bull; {selectedBlog.readTime}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedBlog(null)} 
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08284d] leading-tight">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono mt-3">
                  <span className="flex items-center gap-1 font-bold text-[#08284d]">
                    <User className="w-3.5 h-3.5 text-[#f37021]" />
                    Dr. Vatsal Khetan
                  </span>
                  <span>&bull;</span>
                  <span>{selectedBlog.date}</span>
                </div>
              </div>

              {selectedBlog.featuredImage && (
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm max-h-80">
                  <img 
                    src={selectedBlog.featuredImage} 
                    alt={selectedBlog.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
                {selectedBlog.sections && selectedBlog.sections.length > 0 ? (
                  <div className="space-y-4">
                    {selectedBlog.sections.map((sec, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                        <h4 className="text-sm font-bold text-[#08284d]">{sec.heading}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sec.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div 
                    dangerouslySetInnerHTML={{ __html: selectedBlog.rawHtml }}
                    className="space-y-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-[#08284d] [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-[#08284d]"
                  />
                )}

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-[#00458b] flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-[#00458b] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Clinical Notice:</strong> Every patient's joint geometry, degree of arthritis, and recovery timeline are unique. Consult Dr. Vatsal Khetan in OPD for clinical assessment.
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-mono">
                  Betiahata Clinic Helpline: 9662365917
                </span>
                <button 
                  onClick={() => {
                    setSelectedBlog(null);
                    onBookClick();
                  }}
                  className="button-primary bg-[#f37021] text-white hover:bg-orange-600 text-xs"
                >
                  <span>Book OPD Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                
                {blog.featuredImage && (
                  <div className="h-44 rounded-2xl overflow-hidden bg-slate-100 mb-2">
                    <img 
                      src={blog.featuredImage} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="font-bold text-[#00458b] px-2.5 py-0.5 rounded-full bg-blue-50">
                    {blog.category}
                  </span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#08284d] group-hover:text-[#f37021] transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">{blog.date}</span>
                <button 
                  onClick={() => setSelectedBlog(blog)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#f37021] hover:text-orange-700 transition-colors"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-extrabold text-[#08284d]">No articles match your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or select 'All' categories.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-[#08284d] hover:bg-slate-200"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

    </div>
  );
};
