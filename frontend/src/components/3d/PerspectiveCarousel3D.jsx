import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

/**
 * 🏥 Khetan Hospital - Continuous Circular 3D Perspective Card Navigation
 * 
 * Strict Specification:
 * 1. Continuous circular loop arrangement:
 *    HOME → SERVICES → DOCTORS → BLOGS → LOCATIONS → CONTACT → HOME → SERVICES → ...
 * 2. NO VISIBLE ENDPOINTS: scrolling forward from CONTACT smoothly brings HOME;
 *    scrolling backward from HOME smoothly brings CONTACT.
 * 3. Both navigation arrows are always active for infinite circular navigation.
 * 4. Cards arranged along an imaginary curved/circular 3D track.
 * 5. Strictly NO BLUR on side cards (filter: 'none', opacity: 1, sharp typography).
 * 6. Center card occupies main viewing position, side cards follow the curve.
 * 7. Controls: Continuous mouse wheel / trackpad scroll, drag/swipe, arrow buttons, keyboard.
 * 8. Drag vs Click safety: dragging does not trigger accidental card navigation clicks.
 * 9. Responsive layout: 5 cards visible on desktop/laptop, 3 cards on mobile/tablet without horizontal overflow.
 */
export const PerspectiveCarousel3D = () => {
  const { activeIndex, setActiveIndex, mainNavigation, handleCardClick } = useNavigation();
  const total = mainNavigation.length; // 6 cards

  const [cardSpacing, setCardSpacing] = useState(270);
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);
  const hasDraggedRef = useRef(false);
  const startX = useRef(0);
  const currentDragDelta = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const wheelTimeout = useRef(null);
  const carouselContainerRef = useRef(null);

  // Responsive card spacing & mobile detection
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardSpacing(190);
        setIsMobile(true);
      } else if (width < 1024) {
        setCardSpacing(230);
        setIsMobile(false);
      } else {
        setCardSpacing(270);
        setIsMobile(false);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Continuous circular stepping: never hits an endpoint
  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % total);
  };

  // Mouse wheel / Laptop trackpad: continuous circular movement
  const onWheel = (e) => {
    const absY = Math.abs(e.deltaY);
    const absX = Math.abs(e.deltaX);

    if (absY > 18 || absX > 18) {
      if (wheelTimeout.current) return;

      const delta = absY > absX ? e.deltaY : e.deltaX;
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      // Smooth debounce for natural card-by-card transitions
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 230);
    }
  };

  // Mouse & Touch Dragging with click suppression
  const onPointerDown = (e) => {
    isDragging.current = true;
    hasDraggedRef.current = false;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    currentDragDelta.current = 0;
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = clientX - startX.current;
    if (Math.abs(delta) > 8) {
      hasDraggedRef.current = true;
    }
    currentDragDelta.current = delta;
    setDragOffset(delta);
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = currentDragDelta.current;
    setDragOffset(0);

    if (delta < -38) {
      handleNext();
    } else if (delta > 38) {
      handlePrev();
    }

    // Reset drag flag after short delay so click listener can distinguish
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 50);
  };

  const handleSafeCardClick = (index) => {
    if (hasDraggedRef.current) return;
    handleCardClick(index);
  };

  // Keyboard navigation: Left/Right arrows rotate circular track
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Enter') {
        handleCardClick(activeIndex);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, total]);

  return (
    <div 
      ref={carouselContainerRef}
      className="relative w-full h-full flex flex-col justify-center items-center py-2 px-3 sm:px-4 select-none overflow-hidden bg-white"
      onWheel={onWheel}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
      tabIndex={0}
      role="region"
      aria-label="Continuous Circular 3D Navigation"
    >
      {/* 3D CIRCULAR TRACK STAGE */}
      <div 
        className="relative w-full h-[340px] sm:h-[380px] lg:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1200px' }}
      >
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          {mainNavigation.map((card, index) => {
            // Shortest circular offset distance [-3, 3]
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset <= -total / 2) offset += total;

            const isCenter = offset === 0;

            // Render visible front cards: 5 cards on desktop/tablet (|offset| <= 2), 3 cards on mobile (|offset| <= 1)
            const maxVisibleOffset = isMobile ? 1 : 2;
            const isVisible = Math.abs(offset) <= maxVisibleOffset;
            if (!isVisible) return null;

            // Positioning & 3D curvature along circular arc
            const dragShift = dragOffset * 0.35;
            const xTranslate = offset * cardSpacing + dragShift;
            const rotateY = offset * (isMobile ? -26 : -30); // Inward circular viewing angle
            const scale = isCenter ? 1.05 : (Math.abs(offset) === 1 ? 0.90 : 0.82);
            const translateZ = isCenter ? 0 : (Math.abs(offset) === 1 ? -80 : -170);
            const zIndex = isCenter ? 30 : 20 - Math.abs(offset);

            return (
              <div
                key={card.id}
                onClick={() => handleSafeCardClick(index)}
                className={`absolute w-[250px] sm:w-[285px] lg:w-[305px] h-[300px] sm:h-[335px] lg:h-[350px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-350 ease-out bg-white border ${
                  isCenter 
                    ? 'border-sky-500 shadow-[0_18px_40px_rgba(14,165,233,0.18)] ring-2 ring-sky-500/40' 
                    : 'border-slate-200/90 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:border-slate-300'
                }`}
                style={{
                  transform: `translate3d(${xTranslate}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: 1, // Full opacity: NO blur, NO fade
                  filter: 'none', // Strictly NO blur
                  zIndex: zIndex,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="relative w-full h-full flex flex-col justify-between bg-white">
                  
                  {/* Card Visual / Photograph (Top 65%) */}
                  <div className="relative w-full h-[65%] bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className={`w-full h-full transition-transform duration-500 ${
                        card.isDoctor 
                          ? 'object-contain pt-2' 
                          : 'object-cover'
                      } ${isCenter ? 'scale-105' : 'scale-100'}`}
                      loading="eager"
                    />

                    {/* Subtle Click-to-Explore Pill on Center Card */}
                    {isCenter && (
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-sky-700 font-semibold text-[10px] uppercase tracking-wider px-2 py-1 rounded-full shadow-xs border border-sky-200 flex items-center gap-1">
                        <span>Explore</span>
                        <ArrowUpRight className="w-3 h-3 text-sky-600" />
                      </div>
                    )}
                  </div>

                  {/* Card Content Area (Bottom 35% - ONLY 1 Main Heading + 1 Short Supporting Line) */}
                  <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 bg-white">
                    <h2 className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 leading-tight">
                      {card.heading}
                    </h2>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1 line-clamp-2">
                      {card.supportingLine}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTINUOUS CIRCULAR CONTROLS (Always-Active Arrows & Synchronized Dots) */}
      <div className="relative z-20 flex items-center justify-center gap-3 pt-2">
        <button
          onClick={handlePrev}
          aria-label="Previous Section (Circular)"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-400 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Minimal 6 Pagination Dots */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
          {mainNavigation.map((card, i) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to ${card.label}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === activeIndex
                  ? 'w-5 h-1.5 bg-sky-500'
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next Section (Circular)"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-400 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

