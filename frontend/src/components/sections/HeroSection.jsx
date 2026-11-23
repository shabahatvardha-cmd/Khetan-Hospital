import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  Activity, 
  Phone
} from 'lucide-react';
import { clinicInfo } from '../../data/navigationData';

export const HeroSection = ({ onBookClick }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      
      {/* 1. Doctor Hero Photo Slot (1536 x 1024 in WebP) */}
      <img 
        className="hero-photo" 
        src="/images/dr-vatsal-hero.webp" 
        width="1536" 
        height="1024" 
        alt="Dr. Vatsal Khetan - Knee, Shoulder & Robotic Joint Replacement Surgeon in Gorakhpur" 
        fetchPriority="high"
      />
      
      {/* 2. Soft Gradient Wash (ensures 100% readability of text while showcasing the doctor) */}
      <div className="hero-wash"></div>

      {/* 3. Hero Intro Content */}
      <div className="hero-intro">
        <span className="eyebrow bg-white/95 px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
          <i className="status-dot"></i> 
          BETIAHATA · GORAKHPUR · KNEE & SHOULDER CLINIC
        </span>

        <h2>
          Painless motion.<br />
          At every step.
        </h2>

        <div className="hero-description">
          Advanced <strong>Robotic Knee Surgery</strong> &amp; <strong>Joint Preservation</strong>.<br />
          Led by <strong>Dr. Vatsal Khetan</strong> ({clinicInfo.qualification}) — trusted surgical partner for lifelong mobility.
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button 
            onClick={onBookClick}
            className="button button-navy w-full sm:w-auto !justify-between sm:!justify-center"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
          </button>

          <a 
            href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#08284d] hover:text-[#f37021] transition-colors py-2 px-3 border border-slate-200/80 rounded-full sm:border-transparent bg-white/60 sm:bg-transparent"
          >
            <Phone className="w-3.5 h-3.5 text-[#f37021]" />
            <span>Priority: {clinicInfo.phone}</span>
          </a>
        </div>

        <span className="hero-welcome">
          New patients warmly welcomed · OPD at Betiahata, Gorakhpur.
        </span>
      </div>

      {/* 4. Hostinger Rotated Floating Badge (11 deg) */}
      <div className="hero-sticker hidden sm:flex" aria-hidden="true">
        <Activity className="w-6 h-6 text-[#08284d]" />
        <span>
          5,000+<br />
          SURGERIES<br />
          12+ YRS EXP
        </span>
      </div>

      {/* 5. Hero Bottom Typography & Signoff */}
      <div className="hero-bottom">
        <div>
          <h1 id="hero-title">
            Precision Surgery.<br />
            <span>Lifelong Freedom.</span>
          </h1>
        </div>

        <div className="hero-signoff">
          <span className="eyebrow">
            DR. VATSAL KHETAN<br />
            FRCS (UK) · MS (ORTHO)
          </span>
          <a 
            href="#about" 
            className="round-link" 
            aria-label="Meet Dr. Vatsal Khetan"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>

    </section>
  );
};
