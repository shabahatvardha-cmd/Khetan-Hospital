import React, { useRef } from 'react';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export const ResourcesSection = ({ onBookClick }) => {
  const railRef = useRef(null);

  const scroll = (direction) => {
    if (railRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      railRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const guides = [
    {
      badge: "KNEE ARTHROPLASTY",
      number: "01",
      icon: Activity,
      title: "Robotic Knee Recovery Guide",
      desc: "Step-by-step milestones: standing within hours, stair climbing, and returning to pain-free daily walks.",
      color: "resource-yellow"
    },
    {
      badge: "SPORTS MEDICINE",
      number: "02",
      icon: Sparkles,
      title: "ACL & Ligament Rehab Timeline",
      desc: "Safe progression protocols for athletes: from brace removal to plyometrics and return to competitive sports.",
      color: "resource-blue"
    },
    {
      badge: "SHOULDER CARE",
      number: "03",
      icon: Clock,
      title: "Overcoming Frozen Shoulder",
      desc: "Clinically proven mobility stretches and keyhole intervention advice to restore painless range of motion.",
      color: "resource-mint"
    },
    {
      badge: "HOSPITAL ADMISSION",
      number: "04",
      icon: ShieldCheck,
      title: "Cashless Insurance & TPA Help",
      desc: "Comprehensive checklist of required documents for 100% paperless pre-authorization and cashless claims.",
      color: "resource-blush"
    }
  ];

  return (
    <section id="resources" className="resources-section" aria-labelledby="resources-title">
      
      {/* Meta Header */}
      <div className="flex items-center justify-between pb-3">
        <span className="eyebrow text-[#f37021]">
          03 / GUIDANCE FOR YOUR RECOVERY
        </span>
        <span className="eyebrow text-slate-400 hidden sm:inline-block">
          FOR PATIENTS & FAMILIES
        </span>
      </div>

      {/* Heading & Controls */}
      <div className="resource-heading">
        <h2 id="resources-title">
          You’ve got this.<br />
          <span>We’ve got you.</span>
        </h2>
        <div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xs font-medium">
            Evidence-based clinical guides to help you navigate joint care with confidence.
          </p>
          <div className="rail-controls">
            <button 
              onClick={() => scroll('left')}
              className="round-link !w-10 !h-10 text-[#08284d]"
              aria-label="Previous guides"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="round-link !w-10 !h-10 text-[#08284d]"
              aria-label="Next guides"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Resource Rail Cards */}
      <div ref={railRef} className="resource-rail">
        {guides.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              onClick={onBookClick}
              className={`resource-card ${item.color}`}
            >
              <div>
                <div className="flex justify-between items-center">
                  <span className="eyebrow text-[#08284d]">{item.badge}</span>
                  <span className="font-mono text-xs font-bold text-slate-400">{item.number}</span>
                </div>
                <div className="my-5">
                  <Icon className="w-8 h-8 text-[#08284d]" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <span className="resource-read">
                <span>Book discussion</span>
                <ArrowUpRight className="w-4 h-4 text-[#f37021]" />
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-slate-400 pt-6 text-center">
        A starting point, not a substitute for clinical medical examination. Bring your X-rays and MRI to your OPD appointment.
      </p>

    </section>
  );
};
