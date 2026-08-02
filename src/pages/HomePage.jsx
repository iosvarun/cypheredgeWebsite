import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import TrustStrip from '../components/sections/TrustStrip';
import ServicesSection from '../components/sections/ServicesSection';
import WhyCypherEdge from '../components/sections/WhyCypherEdge';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import EngineeringStories from '../components/sections/EngineeringStories';
import TrustSignals from '../components/sections/TrustSignals';
import EngagementProcess from '../components/sections/EngagementProcess';
import Testimonials from '../components/sections/Testimonials';
import ProductsSection from '../components/sections/ProductsSection';
import LeadMagnet from '../components/sections/LeadMagnet';
import EstimatorSection from '../components/sections/EstimatorSection';
import FinalCTA from '../components/sections/FinalCTA';
import WhatHappensNext from '../components/sections/WhatHappensNext';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page-wrap">
      {/* 1. HeroSection */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. TrustStrip */}
      <TrustStrip />

      {/* 3. ServicesSection */}
      <ServicesSection onNavigate={onNavigate} />

      {/* 4. WhyCypherEdge */}
      <WhyCypherEdge />

      {/* 5. CaseStudiesSection */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 6. EngineeringStories */}
      <EngineeringStories onNavigate={onNavigate} />

      {/* 7. TrustSignals */}
      <TrustSignals />

      {/* 8. EngagementProcess */}
      <EngagementProcess onNavigate={onNavigate} />

      {/* 9. Testimonials */}
      <Testimonials onNavigate={onNavigate} />

      {/* 10. LeadMagnet */}
      <LeadMagnet />

      {/* 11. ProductsSection */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 12. EstimatorSection */}
      <EstimatorSection onNavigate={onNavigate} />

      {/* 13. FinalCTA */}
      <FinalCTA onNavigate={onNavigate} />

      {/* 14. WhatHappensNext */}
      <WhatHappensNext />
    </div>
  );
}
