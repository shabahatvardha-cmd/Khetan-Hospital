import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar, ChevronRight, Search, Tag, X, User, MessageSquare } from 'lucide-react';
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
      
      {/* 1. Oreo Interior Breadcrumb Banner */}
      <section className="bg-[#edf1f5] border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Orthopedic <span className="font-normal text-slate-600">Health &amp; Recovery Hub</span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-3.5">
              {allBlogs.length} comprehensive medical articles written by Dr. Vatsal Khetan
            </p>
          </div>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#00bcd4] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00bcd4]">Blogs</span>
          </nav>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Category Filter Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00bcd4] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <input 
              type="text" 
              placeholder="Search by topic, e.g. 'Robotic', 'ACL'..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-full bg-white text-slate-700 placeholder-slate-400 border border-slate-200 focus:outline-hidden focus:border-[#00bcd4] text-xs shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, idx) => {
            const cleanSnippet = blog.excerpt
              ? blog.excerpt.replace(/<[^>]+>/g, '').slice(0, 140) + '...'
              : 'Read comprehensive evidence-based clinical guidance written by Dr. Vatsal Khetan regarding joint mobility, surgical precautions, and physiotherapy.';

            return (
              <article 
                key={idx}
                onClick={() => setSelectedBlog(blog)}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Photo */}
                <div className="h-48 bg-slate-100 overflow-hidden relative">
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
                  {blog.category && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-white/90 text-slate-800 shadow-2xs">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#00bcd4] transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-3">
                      {cleanSnippet}
                    </p>
                  </div>

                  {/* Oreo Meta Strip (Orange Calendar & Comments) */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#ff5722]" />
                      <span>{blog.date || 'May 2026'}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#ff5722]" />
                      <span>Comment ( 18 )</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </section>

      {/* Interactive Modal Reader */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 bg-[#00bcd4] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-white/80 block">
                  Khetan Hospital Clinical Blog
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                  {selectedBlog.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
              {selectedBlog.featuredImage && (
                <img 
                  src={selectedBlog.featuredImage} 
                  alt={selectedBlog.title} 
                  className="w-full max-h-72 object-cover rounded-xl shadow-xs mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}

              <div 
                className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content || selectedBlog.excerpt }}
              />
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedBlog(null);
                  onBookClick();
                }}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#ff5722] text-white shadow-xs hover:bg-[#e64a19] transition-all cursor-pointer"
              >
                Book OPD Consultation
              </button>
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-4 py-2 rounded-full text-xs font-bold border border-slate-300 text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
