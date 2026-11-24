import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Activity, MapPin, Phone, Mail } from 'lucide-react';
import { clinicInfo } from '../../data/navigationData';

export const Footer = ({ onBookClick }) => {
  return (
    <footer className="site-footer">
      
      {/* Footer Top Bar */}
      <div className="footer-top">
        <span className="eyebrow text-slate-300">
          ADVANCED ORTHOPEDICS &amp; JOINT PRESERVATION · GORAKHPUR
        </span>
        <a 
          href="#top" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
        </a>
      </div>

      {/* Massive Editorial Wordmark */}
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
          <p className="text-[#f37021] font-semibold text-xs">
            MBBS · MS (Ortho) · MRCS · FRCS (UK)<br />
            IOC Diploma in Sports Medicine
          </p>
          <Link to="/about" className="inline-flex items-center gap-1 text-xs text-orange-400 font-bold hover:underline mt-2">
            View Complete Profile &rarr;
          </Link>
        </div>

        {/* Column 2: Surgical Specialties */}
        <div>
          <h3>Specialized Care</h3>
          <Link to="/services/robotic-knee-surgery">Robotic Knee Replacement</Link>
          <Link to="/services/shoulder-arthroscopy">Knee &amp; Shoulder Arthroscopy</Link>
          <Link to="/services/acl-surgery">ACL &amp; Ligament Repair</Link>
          <Link to="/services/hip-replacement">Hip &amp; Joint Reconstruction</Link>
          <Link to="/services">View All 9 Specialties &rarr;</Link>
        </div>

        {/* Column 3: Patient Care */}
        <div>
          <h3>Plan Your Visit</h3>
          <button onClick={onBookClick} className="text-left hover:text-[#f37021] transition-colors mb-2 block text-xs text-[#bcccdc]">
            Book OPD Appointment
          </button>
          <Link to="/about/published-papers">Published Research Papers</Link>
          <Link to="/about/memorable-moments">Memorable Moments &amp; UK Training</Link>
          <Link to="/blogs">Patient Recovery Guides</Link>
          <Link to="/contact">Emergency Contact &amp; OPD Desk</Link>
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
            <strong>Priority Phone:</strong> <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="text-[#f37021]">{clinicInfo.phone}</a>
          </p>
          <Link to="/locations" className="inline-flex items-center gap-1 text-xs text-orange-400 font-bold hover:underline mt-1">
            Outreach Clinics (Deoria, Basti, Bihar) &rarr;
          </Link>
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
