import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export const JourneyTimelineSection = ({ onBookClick }) => {
  return (
    <section id="journey" className="journey-section" aria-labelledby="journey-title">
      
      {/* 1. Left Column: Journey Overview */}
      <div className="journey-intro">
        <span className="eyebrow text-[#08284d]">
          04 / YOUR PATHWAY TO PAIN-FREE MOBILITY
        </span>

        <ShieldCheck className="w-14 h-14 text-[#08284d] mt-6" />

        <h2 id="journey-title">
          Precision for<br />
          every step.
        </h2>

        <p>
          Orthopedic surgery should never feel intimidating. We walk you through every phase—from initial diagnosis and robotic planning to rapid recovery and post-op rehabilitation.
        </p>

        <button 
          onClick={onBookClick}
          className="button button-navy mt-4"
        >
          <span>Schedule Initial Evaluation</span>
          <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
        </button>
      </div>

      {/* 2. Right Column: Step-by-Step Care Timeline */}
      <div className="journey-timeline">
        <span className="eyebrow text-[#08284d] mb-6 block">
          YOUR CLINICAL JOURNEY AT A GLANCE
        </span>

        {/* Step 01 */}
        <div className="journey-row">
          <span>01</span>
          <div>
            <h3>Consultation & Digital Imaging</h3>
            <p>
              Comprehensive OPD clinical evaluation at Betiahata, weight-bearing alignment X-rays, and clear explanation of joint condition.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="journey-row">
          <span>02</span>
          <div>
            <h3>Personalized 3D Surgical Planning</h3>
            <p>
              Pre-operative computer simulation and sub-millimeter mapping of implant sizing to match your natural bone anatomy.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="journey-row">
          <span>03</span>
          <div>
            <h3>Advanced Robotic / Keyhole Surgery</h3>
            <p>
              Zero-error robotic joint placement or minimally invasive keyhole arthroscopy with minimal muscle cutting and minimal pain.
            </p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="journey-row">
          <span>04</span>
          <div>
            <h3>Fast-Track Recovery & Life Follow-Up</h3>
            <p>
              Assisted walking within 24 hours, personalized physiotherapy guidelines, and ongoing clinical reviews to ensure lifelong mobility.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 pt-6">
          * Recovery timelines vary based on individual age, bone quality, and overall health. Dr. Vatsal Khetan customizes your protocol during consultation.
        </p>
      </div>

    </section>
  );
};
