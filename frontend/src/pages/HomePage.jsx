import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { DoctorStorySection } from '../components/sections/DoctorStorySection';
import { CareSection } from '../components/sections/CareSection';
import { StatsCounterSection } from '../components/sections/StatsCounterSection';
import { MeetTeamSection } from '../components/sections/MeetTeamSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { ResourcesSection } from '../components/sections/ResourcesSection';

export const HomePage = ({ onBookClick }) => {
  return (
    <>
      {/* 1. Oreo Hero Banner with Overlapping Appointment Form Card */}
      <HeroSection onBookClick={onBookClick} />

      {/* 2. | About Us: Doctor Story with Decorative Horizontal Accent Line */}
      <DoctorStorySection onBookClick={onBookClick} />

      {/* 3. | Our Best Services: Clean 6-Service Grid with Line Art Icons */}
      <CareSection onBookClick={onBookClick} />

      {/* 4. Lavender / Purple Counter Bar: 4 Milestone Stats */}
      <StatsCounterSection />

      {/* 5. | Meet Our Team: 4 Specialists Cards */}
      <MeetTeamSection onBookClick={onBookClick} />

      {/* 6. | Why Choose Us: Dark Technology Banner & 24/7 Support Callout */}
      <WhyChooseUsSection onBookClick={onBookClick} />

      {/* 7. | Latest From Blog: 3 Blog Cards with Orange Metas + Subscribe Bar */}
      <ResourcesSection onBookClick={onBookClick} />
    </>
  );
};
