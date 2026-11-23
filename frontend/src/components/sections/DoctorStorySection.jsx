import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import { clinicInfo } from '../../data/navigationData';

export const DoctorStorySection = ({ onBookClick }) => {
  return (
    <section id="about" className="doctor-section" aria-labelledby="doctor-title">
      
      {/* 1. Left Column: Full-Height Doctor Portrait in WebP */}
      <div className="doctor-portrait">
        <img 
          src="/images/dr-vatsal-portrait.webp" 
          width="768" 
          height="1024" 
          loading="lazy" 
          alt="Dr. Vatsal Khetan - Orthopedic, Robotic Knee & Shoulder Surgeon in Gorakhpur"
        />
        <div className="photo-caption">
          <span>YOUR PARTNER IN JOINT MOBILITY</span>
          <span>BETIAHATA, GORAKHPUR</span>
        </div>
      </div>

      {/* 2. Right Column: Doctor Story & Credentials */}
      <div className="doctor-story">
        <div>
          <div className="flex items-center justify-between pb-3">
            <span className="eyebrow text-[#f37021]">
              01 / MEET YOUR SURGEON
            </span>
            <Award className="w-5 h-5 text-[#f37021]" />
          </div>

          <h2 id="doctor-title">
            Hi, I’m<br />
            <span>Dr. Vatsal.</span>
          </h2>
        </div>

        {/* Doctor Fellowship & Credential Image Slot in WebP */}
        <div className="doctor-detail">
          <img 
            src="/images/dr-vatsal-fellowship.webp" 
            width="1024" 
            height="768" 
            loading="lazy" 
            alt="Dr. Vatsal Khetan UK Fellowship and Joint Surgery Training"
          />
          <span className="eyebrow">
            NEWCASTLE / WRIGHTINGTON (UK) NHS ROBOTICS &amp; AI · IOC SPORTS MED
          </span>
        </div>

        {/* Clinical Philosophy Copy */}
        <div className="doctor-copy">
          <h3>
            Active lives.<br />
            Whole-hearted precision.
          </h3>
          <p>
            I’m Dr. Vatsal Khetan, an orthopedic surgeon dedicated to restoring pain-free movement for families and athletes in Gorakhpur and Eastern UP. With advanced fellowships in the UK (Wrightington Hospital) and over 5,000 successful surgeries, I believe the best orthopedics starts with listening to your daily goals.
          </p>
          <p>
            We prioritize joint preservation first. When surgery is required, we use cutting-edge robotic joint alignment and minimally invasive keyhole arthroscopy so you can return to work, sports, and independent living rapidly.
          </p>

          <button 
            onClick={onBookClick}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#08284d] hover:text-[#f37021] transition-colors mt-3"
          >
            <span>Consult Dr. Vatsal in OPD</span>
            <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
          </button>
        </div>

      </div>

    </section>
  );
};
