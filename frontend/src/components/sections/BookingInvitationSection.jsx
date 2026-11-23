import React from 'react';
import { ArrowUpRight, CalendarDays, Activity } from 'lucide-react';
import { clinicInfo } from '../../data/navigationData';

export const BookingInvitationSection = ({ onBookClick }) => {
  return (
    <section className="booking-invitation" aria-labelledby="booking-invitation-title">
      
      {/* 1. Left Photo Slot: Doctor Consultation Photo in WebP */}
      <div className="invitation-photo">
        <img 
          src="/images/dr-vatsal-consult.webp" 
          width="768" 
          height="1024" 
          loading="lazy" 
          alt="Dr. Vatsal Khetan Patient Consultation in Clinic"
        />
        <span className="eyebrow absolute bottom-6 left-6 z-10 text-white bg-black/40 px-3 py-1 rounded backdrop-blur-xs">
          FROM YOUR FIRST CONSULTATION.
        </span>
      </div>

      {/* 2. Center Content: Gold/Yellow CTA Box */}
      <div className="invitation-content">
        <div className="w-full flex items-center justify-between">
          <span className="eyebrow text-[#08284d]">
            YOUR ACTIVE LIFE STARTS HERE
          </span>
          <Activity className="w-6 h-6 text-[#08284d]" />
        </div>

        <div>
          <h2 id="booking-invitation-title">
            Let’s walk<br />
            together.
          </h2>
          <p>
            A familiar face. UK-fellowship surgical precision.<br />
            Compassionate orthopedic care that puts your mobility first.
          </p>

          <button 
            onClick={onBookClick}
            className="button button-navy"
          >
            <span>Book Your Appointment</span>
            <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
          </button>
        </div>

        <span className="invitation-hours">
          <CalendarDays className="w-4 h-4 text-[#08284d]" />
          <span>{clinicInfo.timings}</span>
        </span>
      </div>

      {/* 3. Right Photo Slot: Restored Mobility Photo in WebP */}
      <div className="invitation-last">
        <img 
          src="/images/dr-vatsal-rehab.webp" 
          width="768" 
          height="1024" 
          loading="lazy" 
          alt="Pain-free walking and active mobility after joint surgery"
        />
        <span className="eyebrow absolute bottom-6 left-6 z-10 text-white bg-black/40 px-3 py-1 rounded backdrop-blur-xs">
          TO YOUR PAIN-FREE TOMORROW.
        </span>
      </div>

    </section>
  );
};
