import React from 'react';
import { Heart } from 'lucide-react';

export const PhilosophySection = () => {
  return (
    <section className="philosophy-section" aria-label="Our care philosophy">
      
      <div className="flex items-center justify-center gap-3 mb-6">
        <Heart className="w-5 h-5 text-[#f37021]" />
        <span className="eyebrow text-[#08284d]">
          OUR COMMITMENT TO YOUR INDEPENDENCE
        </span>
      </div>

      <p>
        Mobility isn’t simply walking or bending without discomfort.<br />
        It is your independence, your livelihood, and your freedom to live without pain. <span>Because caring for your joints means restoring your whole world.</span>
      </p>

      <span className="philosophy-signature">
        Dr. Vatsal Khetan — MS (Ortho), FRCS (UK), IOC Sports Med
      </span>

    </section>
  );
};
