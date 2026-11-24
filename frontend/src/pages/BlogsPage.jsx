import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Search, 
  Tag, 
  X, 
  User, 
  MessageSquare,
  ChevronLeft,
  Share2,
  Check
} from 'lucide-react';
import { allBlogs, clinicInfo } from '../data/clinicContent';

const POSTS_PER_PAGE = 6;

export const BlogsPage = ({ onBookClick }) => {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const gridTopRef = useRef(null);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  // If URL has a slug parameter, open that blog automatically
  useEffect(() => {
    if (slug) {
      const match = allBlogs.find(b => b.slug === slug || b.slug.includes(slug));
      if (match) setSelectedBlog(match);
    }
  }, [slug]);

  // Keep search in sync if search params change
  useEffect(() => {
    const q = searchParams.get('q') || searchParams.get('search');
    if (q !== null && q !== undefined) {
      setSearchQuery(q);
      setCurrentPage(1);
    }
  }, [searchParams]);

  // Unique categories list
  const categories = useMemo(() => {
    const set = new Set();
    allBlogs.forEach(b => {
      if (b.category) set.add(b.category);
      if (b.allCategories) b.allCategories.forEach(c => set.add(c));
    });
    return ['All', ...Array.from(set).slice(0, 8)];
  }, []);

  // Filtered blogs based on search query and category
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(b => {
      const matchesSearch = 
        !searchQuery || 
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.textContent && b.textContent.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        b.category === selectedCategory || 
        b.allCategories?.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Total pages calculation
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE) || 1;

  // Paginated slice for current page
  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (gridTopRef.current) {
        gridTopRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleShare = () => {
    if (navigator.clipboard && selectedBlog) {
      const url = `${window.location.origin}/blogs/${selectedBlog.slug}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

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
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section ref={gridTopRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Category Filter Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategorySelect(cat)}
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
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-full bg-white text-slate-700 placeholder-slate-400 border border-slate-200 focus:outline-hidden focus:border-[#00bcd4] text-xs shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button 
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs text-slate-500">
          <span>
            Showing <strong>{currentBlogs.length > 0 ? (currentPage - 1) * POSTS_PER_PAGE + 1 : 0}</strong> &ndash; <strong>{Math.min(currentPage * POSTS_PER_PAGE, filteredBlogs.length)}</strong> of <strong>{filteredBlogs.length}</strong> medical articles
          </span>
          {selectedCategory !== 'All' && (
            <span className="text-[#00bcd4] font-semibold">
              Filtered by: {selectedCategory}
            </span>
          )}
        </div>

        {/* Paginated 3-Column Blog Cards Grid (Only 6 appear at once!) */}
        {currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, idx) => {
              const cleanSnippet = blog.excerpt
                ? blog.excerpt.replace(/<[^>]+>/g, '').slice(0, 140) + '...'
                : 'Read comprehensive evidence-based clinical guidance written by Dr. Vatsal Khetan regarding joint mobility, surgical precautions, and physiotherapy.';

              return (
                <article 
                  key={blog.id || idx}
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
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-white/95 text-slate-800 shadow-2xs">
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
                        <Clock className="w-3.5 h-3.5 text-[#00bcd4]" />
                        <span>{blog.readTime || '5 min read'}</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No articles found matching "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or select "All" categories to view all publications.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              className="mt-4 px-5 py-2 rounded-full text-xs font-bold bg-[#00bcd4] text-white hover:bg-[#00acc1]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Clean Numeric Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <span className="text-xs text-slate-500">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first, last, and pages close to current
                if (
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 2 && page <= currentPage + 2)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        currentPage === page
                          ? 'bg-[#00bcd4] text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 3 || page === currentPage + 3) {
                  return <span key={page} className="px-1 text-slate-400 text-xs">...</span>;
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </section>

      {/* 3. Comprehensive Article Modal Reader (Renders Full Article Content) */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div 
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="p-5 bg-[#00bcd4] text-white flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/80 block mb-0.5">
                  KHETAN HOSPITAL &bull; CLINICAL RECOVERY GUIDE
                </span>
                <h2 className="text-base sm:text-xl font-bold text-white line-clamp-1">
                  {selectedBlog.title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Complete Medical Guide Article */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
              {/* Featured Image */}
              {selectedBlog.featuredImage && (
                <div className="rounded-xl overflow-hidden shadow-sm bg-slate-100 max-h-80">
                  <img 
                    src={selectedBlog.featuredImage} 
                    alt={selectedBlog.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Author & Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#00bcd4]" />
                  <span>Author: <strong>Dr. Vatsal Khetan</strong> (MS Ortho, FRCS Edinburgh)</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5722]" />
                    <span>{selectedBlog.date || 'Recent Guide'}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#00bcd4]" />
                    <span>{selectedBlog.readTime || '5 min read'}</span>
                  </span>
                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center gap-1 text-[#00bcd4] hover:underline font-bold"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                  </button>
                </div>
              </div>

              {/* RENDER FULL HTML ARTICLE */}
              <div 
                className="blog-article-content max-w-none text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: selectedBlog.content || selectedBlog.rawHtml || selectedBlog.textContent || selectedBlog.excerpt 
                }}
              />
            </div>

            {/* Modal Bottom Action Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Need individualized evaluation for this joint condition? Consult Dr. Vatsal Khetan.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    onBookClick();
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-xs transition-all cursor-pointer"
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
        </div>
      )}

    </div>
  );
};
