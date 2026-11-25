import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

/**
 * 🏥 Khetan Hospital - Services Page
 * 
 * Strict Specification:
 * - Exactly 8 services across 2 slides (4 cards per slide).
 * - Slide 1:
 *   1. Knee Replacement
 *   2. Knee Arthroscopy
 *   3. Shoulder Arthroscopy
 *   4. Ankle Surgery
 *   + Pure symbol at bottom to slide up (NOTHING written on it).
 * - Slide 2:
 *   5. Hip Replacement
 *   6. Spine Surgery
 *   7. Back Pain Management
 *   8. Rheumatology
 *   + Slides over Slide 1 (shutter style).
 * - Card Content:
 *   Strictly Picture + Name + 1-line detail. Nothing else on the card.
 *   No numbering, no chapter labels, no badges, no buttons.
 * - Next: Only the thin single-line footer.
 */

const slide1Services = [
  {
    id: 'knee-replacement',
    name: 'Knee Replacement',
    detail: 'Expert knee replacement care for pain-free mobility and improved quality of life.',
    image: '/images/surgeries/knee-replacement.jpg',
    route: '/services/knee-replacement'
  },
  {
    id: 'knee-arthroscopy',
    name: 'Knee Arthroscopy',
    detail: 'Advanced knee arthroscopy for precise diagnosis and minimally invasive treatment.',
    image: '/images/surgeries/robotic-knee.jpg',
    route: '/services/knee-arthroscopy'
  },
  {
    id: 'shoulder-arthroscopy',
    name: 'Shoulder Arthroscopy',
    detail: 'Innovative shoulder arthroscopy for accurate diagnosis and effective minimally invasive treatment.',
    image: '/images/surgeries/shoulder-surgery.jpg',
    route: '/services/shoulder-replacement'
  },
  {
    id: 'ankle-surgery',
    name: 'Ankle Surgery',
    detail: 'Specialized ankle surgery for restoring function and relieving discomfort effectively.',
    image: '/images/surgeries/ankle-surgery.jpg',
    route: '/services/ankle-surgery'
  }
];

const slide2Services = [
  {
    id: 'hip-replacement',
    name: 'Hip Replacement',
    detail: 'Comprehensive hip replacement surgery for improved mobility and pain relief.',
    image: '/images/surgeries/hip-replacement.jpg',
    route: '/services/hip-replacement'
  },
  {
    id: 'spine-surgery',
    name: 'Spine Surgery',
    detail: 'Advanced spine surgery for alleviating pain and restoring spinal function effectively.',
    image: '/images/surgeries/spine-surgery.jpg',
    route: '/services/spine-surgery'
  },
  {
    id: 'back-pain',
    name: 'Back Pain Management',
    detail: 'Tailored medical management to alleviate back pain and improve overall well-being.',
    image: '/images/dr-vatsal-consult.webp',
    route: '/services/spine-surgery'
  },
  {
    id: 'rheumatology',
    name: 'Rheumatology',
    detail: 'Comprehensive rheumatology management for relief and improved quality of life.',
    image: '/images/backgrounds/hospital-interior.jpg',
    route: '/services/knee-replacement'
  }
];

export const ServicesPage = () => {
  const slide2Ref = useRef(null);

  const scrollToSlide2 = () => {
    if (slide2Ref.current) {
      slide2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full bg-white text-slate-900 select-none">

      {/* SLIDE 1 (First 4 Cards + Pure Symbol at Bottom) */}
      <section
        id="slide-1"
        className="sticky top-[58px] sm:top-[60px] z-10 w-full min-h-[calc(100vh-58px)] sm:min-h-[calc(100vh-60px)] h-auto lg:h-[calc(100vh-60px)] bg-white flex flex-col justify-between items-center py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full" />

        {/* 4 Cards Grid */}
        <div className="max-w-7xl mx-auto w-full my-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch w-full">
            {slide1Services.map((card) => (
              <Link
                key={card.id}
                to={card.route}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* 1. Picture */}
                <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* 2. Name & 3. One-Line Detail (Nothing Else on Card) */}
                <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 bg-white">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">
                    {card.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5 line-clamp-2">
                    {card.detail}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pure Symbol at Bottom of Screen (Nothing Written on It) */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <button
            onClick={scrollToSlide2}
            aria-label="Next slide"
            className="p-2 text-slate-400 hover:text-sky-600 transition-colors cursor-pointer group"
          >
            <ChevronDown className="w-6 h-6 animate-bounce text-slate-400 group-hover:text-sky-600" />
          </button>
        </div>
      </section>

      {/* SLIDE 2 (Next 4 Cards - Blue Background matching Navbar Border [#0ea5e9], Covers Slide 1 like a Shutter) */}
      <section 
        id="slide-2"
        ref={slide2Ref}
        className="sticky top-[58px] sm:top-[60px] z-20 w-full min-h-[calc(100vh-58px)] sm:min-h-[calc(100vh-60px)] h-auto lg:h-[calc(100vh-60px)] bg-[#0ea5e9] shadow-[0_-25px_60px_rgba(14,165,233,0.35)] border-t-2 border-sky-400 flex flex-col justify-center items-center py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full my-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch w-full">
            {slide2Services.map((card) => (
              <Link
                key={card.id}
                to={card.route}
                className="bg-white rounded-2xl overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* 1. Picture */}
                <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* 2. Name & 3. One-Line Detail (Nothing Else on Card) */}
                <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 bg-white">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">
                    {card.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5 line-clamp-2">
                    {card.detail}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
