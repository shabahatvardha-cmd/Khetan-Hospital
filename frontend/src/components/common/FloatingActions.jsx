import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions = ({ onBookClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-11 h-11 rounded-full bg-[#08284d] text-white shadow-lg hover:bg-[#00458b] flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 animate-in fade-in"
        >
          <ArrowUp className="w-5 h-5 text-[#00b4d8]" />
        </button>
      )}

      {/* Emergency Call Floating Button */}
      <a
        href="tel:9662365917"
        aria-label="Call Emergency Helpline 9662365917"
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#f37021] text-white shadow-xl hover:bg-orange-600 transition-all duration-300 hover:scale-105 group border border-white/20"
      >
        <Phone className="w-4 h-4 text-white animate-pulse" />
        <span className="text-xs font-bold tracking-tight">
          Emergency: 9662365917
        </span>
      </a>

      {/* WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/919662365917?text=Hello%20Dr.%20Vatsal%20Khetan%20Clinic,%20I%20would%20like%20to%20book%20an%20OPD%20appointment."
        target="_blank"
        rel="noreferrer"
        aria-label="Book OPD via WhatsApp"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 group border-2 border-white"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping"></span>
        </div>
        <span className="text-xs font-extrabold tracking-tight">
          Book on WhatsApp
        </span>
      </a>

    </div>
  );
};
