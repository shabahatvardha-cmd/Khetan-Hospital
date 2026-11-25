import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Bot, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { backgroundTextures, surgeryImages } from '../../data/imageConfig';

export const MeetTeamSection = ({ onBookClick }) => {
  const units = [
    {
      title: "Modular Laminar-Flow Robotic OT",
      tag: "Class-100 Surgical Sterility",
      image: backgroundTextures.modularOt,
      desc: "Positive-pressure Class-100 air filtration and HEPA clean-room systems engineered to virtually eliminate implant infection risks during robotic knee and hip replacements.",
      link: "/services/robotic-knee-surgery",
      highlight: "Sub-Millimeter 3D Navigation"
    },
    {
      title: "Bargadawa Inpatient Surgical Centre",
      tag: "Comprehensive Care Wing",
      image: backgroundTextures.hospitalModern,
      desc: "Modern patient rooms, high-frequency digital weight-bearing radiography, 24/7 nursing oversight, and immediate bedside mobilization following surgery.",
      link: "/contact",
      highlight: "Day-1 Walking Recovery"
    },
    {
      title: "Sports Medicine & Arthroscopy Suite",
      tag: "IOC Switzerland Protocols",
      image: surgeryImages["acl-surgery"]?.image || "/images/surgeries/acl-surgery.jpg",
      desc: "High-definition fiberoptic endoscopy systems for pinhole meniscus preservation, anatomical ACL ligament repair, and athlete return-to-sport physical therapy.",
      link: "/services/acl-surgery",
      highlight: "Keyhole Pinhole Repairs"
    },
    {
      title: "Emergency Trauma & Cashless TPA Desk",
      tag: "24/7 Rapid Response",
      image: surgeryImages["trauma-surgery"]?.image || "/images/surgeries/trauma-surgery.jpg",
      desc: "Round-the-clock emergency surgical mobilization for acute fractures, complex pelvic trauma, and 100% cashless insurance desk across all leading insurers.",
      link: "/contact",
      highlight: "Star, Care, HDFC & All TPAs"
    }
  ];

  return (
    <section id="infrastructure" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#00458b] text-[10px] font-bold uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#00458b]" />
              <span>Hospital Facilities &bull; Surgical Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Institutional <span className="font-editorial italic font-normal text-[#00458b]">Surgical Excellence.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-normal">
            Dr. Vatsal Khetan’s surgical governance is backed by purpose-built modular operating theatres, digital diagnostic suites, and compassionate patient care.
          </p>
        </div>

        {/* 4 Clinical Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.map((unit, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                  <img 
                    src={unit.image} 
                    alt={unit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-black/20"></div>

                  {/* Floating Tag */}
                  <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#08284d] shadow-sm">
                    {unit.tag}
                  </span>

                  {/* Highlight bottom */}
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-sky-200 drop-shadow-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{unit.highlight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#00458b] transition-colors mb-2">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {unit.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-200/50 flex items-center justify-between">
                <Link
                  to={unit.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#00458b] hover:text-[#08284d] transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={onBookClick}
                  className="text-[11px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Book OPD
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
