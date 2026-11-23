import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CareSection = ({ onBookClick }) => {
  return (
    <section id="care" aria-labelledby="care-title" className="care-section">
      
      {/* Section Header */}
      <div className="care-heading">
        <span className="eyebrow text-[#f37021]">
          02 / SURGICAL EXPERTISE & CARE
        </span>
        <div>
          <h2 id="care-title">
            Every joint.<br />
            <span>Every pain-free step.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm font-medium">
            From early joint preservation to advanced robotic arthroplasty, we guide you through every milestone.
          </p>
        </div>
      </div>

      {/* 3-Tile Care Grid */}
      <div className="care-grid">
        
        {/* Tile 01: Robotic Knee Surgery (Yellow) */}
        <div className="care-tile care-yellow cursor-pointer" onClick={onBookClick}>
          <div className="care-photo">
            <img 
              src="/images/dr-vatsal-robotic.webp" 
              width="768" 
              height="1024" 
              loading="lazy" 
              alt="Dr. Vatsal Khetan performing Robotic Knee Replacement in OT"
            />
            <div className="care-photo-top">
              <span className="eyebrow bg-white/90 px-2.5 py-1 rounded">SUB-MILLIMETER ACCURACY</span>
              <span className="care-number">01</span>
            </div>
            <div className="care-photo-bottom">
              <h3>Robotic Knee Replacement</h3>
              <span className="round-link !border-white !text-white hover:!bg-[#08284d]">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </div>
          <div className="care-description">
            <p>
              Pre-operative 3D CT mapping and real-time robotic guidance ensure natural knee alignment, reduced blood loss, and rapid walking within 24 hours.
            </p>
            <span className="eyebrow text-[#08284d]">RAPID RECOVERY · MINIMAL INVASION</span>
          </div>
        </div>

        {/* Tile 02: Keyhole Arthroscopy (Blue) */}
        <div className="care-tile care-blue cursor-pointer" onClick={onBookClick}>
          <div className="care-photo">
            <img 
              src="/images/dr-vatsal-arthroscopy.webp" 
              width="768" 
              height="1024" 
              loading="lazy" 
              alt="Dr. Vatsal Khetan Knee and Shoulder Arthroscopy"
            />
            <div className="care-photo-top">
              <span className="eyebrow bg-white/90 px-2.5 py-1 rounded">MINIMALLY INVASIVE</span>
              <span className="care-number">02</span>
            </div>
            <div className="care-photo-bottom">
              <h3>Shoulder & Knee Arthroscopy</h3>
              <span className="round-link !border-white !text-white hover:!bg-[#00458b]">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </div>
          <div className="care-description">
            <p>
              Keyhole camera repair for ACL tears, meniscus injuries, rotator cuff tears, and recurrent shoulder dislocations with tiny incisions and fast sports return.
            </p>
            <span className="eyebrow text-[#00458b]">DAY CARE ADMISSION · SPORTS MEDICINE</span>
          </div>
        </div>

        {/* Tile 03: Joint Reconstruction (Mint) */}
        <div className="care-tile care-mint cursor-pointer" onClick={onBookClick}>
          <div className="care-photo">
            <img 
              src="/images/dr-vatsal-reconstruction.webp" 
              width="768" 
              height="1024" 
              loading="lazy" 
              alt="Dr. Vatsal Khetan Hip and Shoulder Arthroplasty"
            />
            <div className="care-photo-top">
              <span className="eyebrow bg-white/90 px-2.5 py-1 rounded">JOINT PRESERVATION</span>
              <span className="care-number">03</span>
            </div>
            <div className="care-photo-bottom">
              <h3>Hip & Shoulder Arthroplasty</h3>
              <span className="round-link !border-white !text-white hover:!bg-[#064e3b]">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </div>
          <div className="care-description">
            <p>
              Comprehensive total and partial joint reconstruction utilizing British Orthopaedic protocols for avascular necrosis (AVN), complex fractures, and severe arthritis.
            </p>
            <span className="eyebrow text-[#064e3b]">BRITISH ORTHOPAEDIC PROTOCOLS</span>
          </div>
        </div>

      </div>

    </section>
  );
};
