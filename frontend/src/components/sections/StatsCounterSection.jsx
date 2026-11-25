import React from 'react';
import { Activity, ShieldCheck, Award, BookOpen, Clock } from 'lucide-react';

export const StatsCounterSection = () => {
  const stats = [
    {
      icon: Activity,
      number: "10,000+",
      label: "Orthopedic Procedures Performed",
      sub: "Comprehensive surgical cases managed"
    },
    {
      icon: Award,
      number: "1,500+",
      label: "Robotic & Complex Joint Surgeries",
      sub: "Sub-millimeter alignment precision"
    },
    {
      icon: Clock,
      number: "24 Hours",
      label: "Day-1 Assisted Walking Recovery",
      sub: "Evidence-based fast-track protocol"
    },
    {
      icon: BookOpen,
      number: "10",
      label: "Peer-Reviewed Medical Papers",
      sub: "Acta Orthop, Bone & Joint Open"
    }
  ];

  return (
    <section className="bg-[#07182e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-white/10">
      
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-[#00458b]/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  {stat.number}
                </div>

                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {stat.label}
                </div>

                <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
