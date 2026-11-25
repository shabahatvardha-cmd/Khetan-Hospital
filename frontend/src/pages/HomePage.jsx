import React from 'react';
import { PerspectiveCarousel3D } from '../components/3d/PerspectiveCarousel3D';

/**
 * 🏥 Khetan Hospital - Single-Screen Interactive Landing Page
 * 
 * Strict Specification:
 * - Fits completely within the available viewport (100dvh).
 * - No forced vertical scrolling.
 * - No sections extending below the navigation experience.
 * - The 3D movable cards are the primary navigation mechanism.
 * - All detailed content (Specialties, Doctor profile, Articles, etc.) lives inside inner pages.
 */
export const HomePage = () => {
  return (
    <div className="w-full h-full flex-1 flex flex-col justify-center items-center overflow-hidden bg-white">
      <PerspectiveCarousel3D />
    </div>
  );
};
