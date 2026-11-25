import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ShieldCheck, 
  Bot, 
  Stethoscope, 
  Sparkles, 
  Award,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { surgeryImages } from '../../data/imageConfig';

export const CareSection = ({ onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All 6 Key Surgeries' },
    { id: 'robotic', label: 'Robotic Arthroplasty' },
    { id: 'joints', label: 'Hip & Shoulder' },
    { id: 'sports', label: 'Sports & Arthroscopy' },
    { id: 'trauma', label: 'Trauma & Fractures' },
  ];

  const services = [
    {
      slug: "robotic-knee-surgery",
      category: "robotic",
      title: "Robotic Knee Replacement",
      icon: Bot,
      recovery: "Standing & Walking in 24 Hours",
      technique: "Sub-Millimeter 3D CT Guidance",
      desc: "Sub-millimeter real-time robotic navigation maps your unique knee anatomy to preserve collateral ligaments, eliminate bone-on-bone friction, and enable natural joint kinematics."
    },
    {
      slug: "knee-replacement",
      category: "robotic",
      title: "Total Knee Replacement (TKR)",
      icon: Activity,
      recovery: "20+ Year Bearing Longevity",
      technique: "Tissue-Sparing Primary Arthroplasty",
      desc: "Advanced total and partial knee resurfacing utilizing high-flex ceramic and highly cross-linked bearings engineered to eradicate chronic arthritis and correct leg bowing."
    },
    {
      slug: "hip-replacement",
      category: "joints",
      title: "Hip Replacement (THA / MIS)",
      icon: ShieldCheck,
      recovery: "Day-1 Weight Bearing",
      technique: "Wrightington UK Arthroplasty",
      desc: "Minimally invasive hip arthroplasty using ultra-low wear ceramic heads and Wrightington UK techniques to resolve advanced avascular necrosis (AVN) and severe hip arthritis."
    },
    {
      slug: "shoulder-replacement",
      category: "joints",
      title: "Shoulder Surgery & Cuff Repair",
      icon: Stethoscope,
      recovery: "Pain-Free Overhead Reach",
      technique: "Reverse & Anatomic Arthroplasty",
      desc: "Anatomic and reverse total shoulder reconstruction utilizing deltoid biomechanics for severe rotator cuff tears, complex fractures, and debilitating arthritis."
    },
    {
      slug: "acl-surgery",
      category: "sports",
      title: "ACL & Sports Arthroscopy",
      icon: Sparkles,
      recovery: "Safe Return-to-Sport Protocol",
      technique: "Olympic IOC Switzerland Standard",
      desc: "Keyhole arthroscopic ligament reconstruction (ACL/PCL) and inside-out meniscus preservation adhering to Olympic IOC protocols for competitive and recreational athletes."
    },
    {
      slug: "trauma-surgery",
      category: "trauma",
      title: "Complex Trauma & Fractures",
      icon: Award,
      recovery: "24/7 Immediate Operating Suite",
      technique: "AO/ASIF Biological Fixation",
      desc: "Emergency surgical reconstruction of high-velocity pelvic fractures, peri-articular injuries, non-unions, and geriatric hip fragility with modular laminar flow OT sterility."
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Top Header with High-Contrast Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#00458b] text-[10px] font-bold uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5 text-[#00458b]" />
              <span>Surgical Portfolio &bull; Sub-Millimeter Precision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Specialized <span className="font-editorial italic font-normal text-[#00458b]">Surgical Procedures.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-normal">
            Every procedure at Khetan Hospital is designed around joint preservation first, minimal soft-tissue trauma, and rapid 24-hour functional recovery.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#08284d] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Services Grid with Rich Procedural Imagery & Refined Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv, idx) => {
            const Icon = srv.icon;
            const imgData = surgeryImages[srv.slug];

            return (
              <div 
                key={srv.slug} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Procedural Photo Banner with Rich Gradient */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={imgData?.image} 
                      alt={imgData?.alt || srv.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>

                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-[#08284d] group-hover:bg-[#08284d] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    {/* Technique Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-[#08284d]/90 backdrop-blur-md text-white shadow-sm border border-white/20">
                        {srv.technique}
                      </span>
                    </div>

                    {/* Recovery Timeline Floating on Image Bottom */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-sky-200 text-xs font-semibold drop-shadow-md">
                      <Clock className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                      <span>{srv.recovery}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00458b] transition-colors mb-2.5">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00458b] hover:text-[#08284d] transition-colors group/link"
                  >
                    <span>View Surgical Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={onBookClick}
                    className="px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 hover:bg-[#08284d] text-slate-800 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    Book OPD
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Portfolio Link */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 hover:border-[#08284d] hover:text-[#08284d] shadow-sm transition-all"
          >
            <span>View Complete 9-Specialty Orthopedic Portfolio</span>
            <ArrowRight className="w-4 h-4 text-[#00458b]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
