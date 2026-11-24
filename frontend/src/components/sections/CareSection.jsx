import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Bot, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Clock, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Stethoscope
} from 'lucide-react';

export const CareSection = ({ onBookClick }) => {
  const departments = [
    {
      slug: "robotic-knee-surgery",
      title: "Robotic Knee Replacement",
      category: "ROBOTIC ARTHROPLASTY",
      badge: "SUB-MILLIMETER ACCURACY",
      icon: Bot,
      color: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50 text-sky-600 border-sky-200",
      image: "/images/dr-vatsal-robotic.webp",
      desc: "Pre-operative 3D CT mapping and real-time robotic guidance ensure natural knee alignment, reduced blood loss, and walking within 24 hours.",
      highlights: [
        "Sub-millimeter implant positioning",
        "Same-day or 24-hr mobility start",
        "Preserves healthy ligaments & bone"
      ]
    },
    {
      slug: "knee-replacement",
      title: "Total Knee Replacement (TKR)",
      category: "KNEE ARTHROPLASTY",
      badge: "20+ YEAR LONGEVITY",
      icon: Activity,
      color: "from-teal-500 to-emerald-600",
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      image: "/images/dr-vatsal-rehab.webp",
      desc: "Advanced total and partial knee arthroplasty using high-durability implants to eradicate chronic arthritis pain and restore natural leg alignment.",
      highlights: [
        "High-flexion implant designs",
        "Multimodal pain control protocols",
        "Complete correction of bow legs"
      ]
    },
    {
      slug: "hip-replacement",
      title: "Hip Replacement & AVN Salvage",
      category: "JOINT RECONSTRUCTION",
      badge: "BRITISH PROTOCOLS",
      icon: ShieldCheck,
      color: "from-indigo-500 to-[#08284d]",
      accentBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      image: "/images/dr-vatsal-reconstruction.webp",
      desc: "Minimally invasive hip arthroplasty utilizing ceramic bearings and Wrightington UK techniques for severe avascular necrosis (AVN) and arthritis.",
      highlights: [
        "Ceramic-on-poly low-wear bearings",
        "Minimally invasive tissue sparing",
        "Rapid pain relief & unassisted walking"
      ]
    },
    {
      slug: "shoulder-replacement",
      title: "Shoulder Surgery & Keyhole Repair",
      category: "UPPER LIMB CARE",
      badge: "REVERSE & ANATOMICAL",
      icon: Stethoscope,
      color: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50 text-amber-700 border-amber-200",
      image: "/images/dr-vatsal-arthroscopy.webp",
      desc: "Comprehensive anatomical and reverse shoulder arthroplasty, rotator cuff repair, and frozen shoulder relief with smooth overhead mobility.",
      highlights: [
        "Reverse shoulder for cuff arthropathy",
        "Keyhole rotator cuff tendon repair",
        "Relief from severe night shoulder pain"
      ]
    },
    {
      slug: "acl-surgery",
      title: "ACL & Sports Medicine",
      category: "SPORTS MEDICINE",
      badge: "IOC OLYMPIC STANDARDS",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-700",
      accentBg: "bg-teal-50 text-teal-700 border-teal-200",
      image: "/images/dr-vatsal-fellowship.webp",
      desc: "Keyhole arthroscopic ligament reconstruction (ACL/PCL), meniscus preservation, and cartilage restoration for athletes and active individuals.",
      highlights: [
        "Inside-out meniscus repair technique",
        "Anatomical quad / hamstring graft",
        "Fast-track return-to-sport program"
      ]
    },
    {
      slug: "trauma-surgery",
      title: "Complex Trauma & Fracture Care",
      category: "TRAUMA RECONSTRUCTION",
      badge: "24/7 EMERGENCY EXPERTISE",
      icon: Award,
      color: "from-rose-500 to-red-600",
      accentBg: "bg-rose-50 text-rose-700 border-rose-200",
      image: "/images/dr-vatsal-consult.webp",
      desc: "Emergency surgical reconstruction of complex pelvic-acetabular fractures, peri-articular injuries, non-unions, and geriatric hip fractures.",
      highlights: [
        "AO principles of internal fixation",
        "Geriatric fast-track fracture care",
        "Minimally invasive biological plating"
      ]
    }
  ];

  return (
    <section id="care" aria-labelledby="care-title" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-sky-100 text-[#08284d] mb-3">
              02 / SURGICAL EXPERTISE &amp; CLINICAL DEPARTMENTS
            </span>
            <h2 id="care-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#08284d]">
              World-Class Orthopedics.<br />
              <span className="text-[#00b4d8]">Under One Trusted Roof.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed">
            Bringing international British fellowship surgical protocols from Wrightington and Rotherham NHS Trust to Gorakhpur, ensuring every joint achieves long-lasting pain-free function.
          </p>
        </div>

        {/* 6-Card Oreo Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image + Header Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={dept.image} 
                    alt={dept.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider bg-white/90 text-[#08284d] backdrop-blur-xs">
                      {dept.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/80 bg-black/40 px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className={`absolute -bottom-5 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br ${dept.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      {dept.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#08284d] group-hover:text-[#00b4d8] transition-colors mb-2.5">
                      {dept.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {dept.desc}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-1.5 mb-6 border-t border-slate-100 pt-3">
                      {dept.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-2">
                    <Link 
                      to={`/services/${dept.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#08284d] hover:text-[#00b4d8] transition-colors"
                    >
                      <span>Explore Procedure</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={onBookClick}
                      className="text-[11px] font-bold px-3.5 py-1.5 rounded-full bg-[#08284d] text-white hover:bg-[#00458b] transition-all shadow-xs"
                    >
                      Book OPD
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: View All Services CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#08284d] to-[#0c3668] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <span className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider block mb-1">
              COMPREHENSIVE JOINT &amp; SPINE CARE
            </span>
            <h4 className="text-xl font-bold">
              Looking for a specific joint evaluation or second opinion?
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              We provide second opinions on MRI scans, joint preservation strategies, and customized rehabilitation programs for non-surgical recovery.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link 
              to="/services" 
              className="px-5 py-3 rounded-full text-xs font-bold bg-white text-[#08284d] hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-1.5"
            >
              <span>View All 9 Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <button 
              onClick={onBookClick}
              className="px-5 py-3 rounded-full text-xs font-bold bg-[#f37021] text-white hover:bg-orange-600 transition-all shadow-md"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
