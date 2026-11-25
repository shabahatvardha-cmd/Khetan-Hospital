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
  Check,
  Sparkles
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

  // Filtered blogs based on search query
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(b => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        (b.category && b.category.toLowerCase().includes(q)) ||
        (b.allCategories && b.allCategories.some(c => c.toLowerCase().includes(q))) ||
        (b.textContent && b.textContent.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

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

      {/* 1. Cinematic Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#06152b] via-[#07182e] to-[#0b2447] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#cbb387] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#cbb387]" />
            <span>Clinical Knowledge &bull; Patient Protocols</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Orthopedic Health &amp; <span className="italic font-normal text-slate-300">Recovery Hub</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-sans-clean leading-relaxed">
            {allBlogs.length} comprehensive medical articles and rehabilitation guides authored by Dr. Vatsal Khetan and our surgical team.
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section ref={gridTopRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Search Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <p className="text-xs text-slate-500 font-sans-clean">
            Search clinical guides, procedure checklists, and recovery protocols:
          </p>

          {/* Search Bar */}
          <div className="w-full sm:w-80 relative">
            <input
              type="text"
              placeholder="Search by topic, e.g. 'Robotic', 'ACL', 'Hip'..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-full bg-white text-slate-700 placeholder-slate-400 border border-slate-200 focus:outline-hidden focus:border-[#00458b] text-xs shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200 text-xs text-slate-500 font-sans-clean">
          <span>
            Showing <strong>{currentBlogs.length > 0 ? (currentPage - 1) * POSTS_PER_PAGE + 1 : 0}</strong> &ndash; <strong>{Math.min(currentPage * POSTS_PER_PAGE, filteredBlogs.length)}</strong> of <strong>{filteredBlogs.length}</strong> medical articles
          </span>
          {searchQuery && (
            <span className="text-[#00458b] font-semibold">
              Search results for: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Paginated 3-Column Blog Cards Grid */}
        {currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, idx) => {
              return (
                <article
                  key={blog.id || idx}
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Photo */}
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
                        {blog.category || 'Clinical Protocol'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-editorial text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#00458b] transition-colors leading-snug line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed font-sans-clean">
                        {blog.excerpt || 'Evidence-based clinical guidelines and recovery protocols.'}
                      </p>
                    </div>

                    {/* Meta Strip */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#0ea5e9]" />
                        <span>{blog.date || 'Recent Guide'}</span>
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
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-editorial font-bold text-slate-900">No articles found matching "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or reset search to view all medical publications.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              className="mt-5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#06152b] text-white hover:bg-[#0b2447] transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Clean Numeric Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <span className="text-xs text-slate-500 font-sans-clean">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 2 && page <= currentPage + 2)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${currentPage === page
                        ? 'bg-[#06152b] text-white shadow-sm'
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
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </section>

      {/* 3. Comprehensive Article Modal Reader */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="p-6 bg-[#06152b] text-white flex items-center justify-between gap-4 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#cbb387] block mb-0.5">
                  KHETAN HOSPITAL &bull; CLINICAL RECOVERY GUIDE
                </span>
                <h2 className="text-base sm:text-xl font-editorial font-bold text-white line-clamp-1">
                  {selectedBlog.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
              {/* Featured Image */}
              {selectedBlog.featuredImage && (
                <div className="rounded-2xl overflow-hidden shadow-xs bg-slate-50 p-3 flex justify-center max-h-80 border border-slate-100">
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

              {/* Author & Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 text-xs text-slate-500 font-sans-clean">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#00458b]" />
                  <span>Author: <strong>Dr. Vatsal Khetan</strong> (MS Ortho, FRCS Edinburgh)</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0ea5e9]" />
                    <span>{selectedBlog.date || 'Recent Guide'}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#00458b]" />
                    <span>{selectedBlog.readTime || '5 min read'}</span>
                  </span>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1 text-[#00458b] hover:underline font-bold"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                  </button>
                </div>
              </div>

              {/* RENDER FULL HTML ARTICLE */}
              <div
                className="blog-article-content max-w-none text-slate-700 leading-relaxed font-sans-clean"
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.content || selectedBlog.rawHtml || selectedBlog.textContent || selectedBlog.excerpt
                }}
              />
            </div>

            {/* Modal Bottom Action Footer */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 text-center sm:text-left font-sans-clean">
                Need individualized surgical evaluation? Consult Chief Surgeon Dr. Vatsal Khetan.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    onBookClick();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#06152b] hover:bg-[#0b2447] text-white shadow-md transition-all cursor-pointer"
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
        </div>
      )}

    </div>
  );
};
