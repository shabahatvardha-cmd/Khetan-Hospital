import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ShieldCheck, 
  Bot, 
  Stethoscope, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';

export const CareSection = ({ onBookClick }) => {
  const services = [
    {
      slug: "robotic-knee-surgery",
      title: "Robotic Knee Surgery",
      icon: Bot,
      desc: "Sub-millimeter 3D CT mapping and real-time robotic guidance ensure natural knee alignment, reduced blood loss, and walking within 24 hours."
    },
    {
      slug: "knee-replacement",
      title: "Total Knee Replacement",
      icon: Activity,
      desc: "Advanced total and partial knee arthroplasty using high-durability implants engineered for 20+ year longevity, eradicating chronic arthritic pain."
    },
    {
      slug: "hip-replacement",
      title: "Hip Replacement & AVN",
      icon: ShieldCheck,
      desc: "Minimally invasive hip arthroplasty utilizing ceramic bearings and Wrightington UK techniques for severe avascular necrosis and arthritis."
    },
    {
      slug: "shoulder-replacement",
      title: "Shoulder Surgery & Repair",
      icon: Stethoscope,
      desc: "Comprehensive anatomical and reverse shoulder arthroplasty, rotator cuff repair, and frozen shoulder relief with smooth overhead mobility."
    },
    {
      slug: "acl-surgery",
      title: "ACL & Sports Medicine",
      icon: Sparkles,
      desc: "Keyhole arthroscopic ligament reconstruction (ACL/PCL), inside-out meniscus preservation, and cartilage restoration for active athletes."
    },
    {
      slug: "trauma-surgery",
      title: "Trauma & Fracture Care",
      icon: Award,
      desc: "Emergency surgical reconstruction of complex pelvic-acetabular fractures, peri-articular injuries, non-unions, and geriatric fragility."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Oreo Section Header with Cyan Vertical Bar */}
        <div className="mb-14">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#00bcd4] inline-block rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Our <span className="font-normal text-slate-600">Best Services</span>
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 pl-3.5">
            World-class orthopedic surgical procedures and joint preservation
          </p>
        </div>

        {/* 6 Services Grid (Exact Oreo Line-Art Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="space-y-3 group">
                {/* Line art Icon in light teal background */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7 stroke-[1.8]" />
                </div>

                <h3 className="text-base font-bold text-slate-800 group-hover:text-[#00bcd4] transition-colors pt-1">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {srv.desc}
                </p>

                <div className="pt-1">
                  <Link 
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ff5722] hover:text-[#e64a19] transition-colors"
                  >
                    <span>View More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
