import React from 'react';
import { ArrowUpRight, Activity, MapPin, Phone, Mail } from 'lucide-react';
import { clinicInfo } from '../../data/navigationData';

export const Footer = ({ onBookClick }) => {
  return (
    <footer className="site-footer">
      
      {/* Footer Top Bar */}
      <div className="footer-top">
        <span className="eyebrow text-slate-300">
          ADVANCED ORTHOPEDICS & JOINT PRESERVATION · GORAKHPUR
        </span>
        <a 
          href="#top" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
        </a>
      </div>

      {/* Massive Editorial Wordmark (Hostinger feature) */}
      <div className="footer-wordmark">
        <span>Restoring Motion</span>
        <Activity className="w-10 h-10 md:w-16 md:h-16 text-[#f37021] flex-shrink-0 animate-pulse" />
      </div>

      {/* 4 Columns Information */}
      <div className="footer-columns">
        
        {/* Column 1: Doctor Info */}
        <div>
          <h3>Dr. Vatsal Khetan</h3>
          <p>
            Khetan Knee N Shoulder Clinic<br />
            Betiahata, Gorakhpur, UP
          </p>
          <p className="text-[#f37021] font-semibold">
            MBBS · MS (Ortho) · MRCS · FRCS (UK)<br />
            IOC Diploma in Sports Medicine
          </p>
        </div>

        {/* Column 2: Surgical Specialties */}
        <div>
          <h3>Specialized Care</h3>
          <a href="#care">Robotic Knee Replacement</a>
          <a href="#care">Knee &amp; Shoulder Arthroscopy</a>
          <a href="#care">ACL &amp; Ligament Repair</a>
          <a href="#care">Hip &amp; Joint Reconstruction</a>
          <a href="#care">Joint Preservation Orthopedics</a>
        </div>

        {/* Column 3: Patient Care */}
        <div>
          <h3>Plan Your Visit</h3>
          <button onClick={onBookClick} className="text-left hover:text-[#f37021] transition-colors mb-2 block text-xs text-[#bcccdc]">
            Book OPD Appointment
          </button>
          <a href="#your-visit">Cashless TPA Insurance</a>
          <a href="#your-visit">First Visit Guidelines</a>
          <a href="#resources">Post-Op Rehab Guides</a>
        </div>

        {/* Column 4: Clinic Hours & Outreach */}
        <div>
          <h3>Clinic &amp; Hours</h3>
          <p>
            {clinicInfo.location}
          </p>
          <p>
            <strong>OPD:</strong> {clinicInfo.timings}
          </p>
          <p>
            <strong>Priority Phone:</strong> {clinicInfo.phone}
          </p>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <span>© 2026 Dr. Vatsal Khetan — Khetan Knee N Shoulder Clinic. All rights reserved.</span>
        <span>SK Pandey Complex, Beside Union Bank, Betiahata, Gorakhpur</span>
        <span>Dedicated to Restoring Lifelong Motion</span>
      </div>

      <p className="medical-note">
        Medical Notice: Information provided on this website is for educational and appointment coordination purposes. It does not replace individualized clinical diagnosis and surgical evaluation by Dr. Vatsal Khetan.
      </p>

    </footer>
  );
};
