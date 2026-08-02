import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import TrustStrip from '../components/sections/TrustStrip';
import ServicesSection from '../components/sections/ServicesSection';
import WhyCypherEdge from '../components/sections/WhyCypherEdge';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import EngagementProcess from '../components/sections/EngagementProcess';
import ProductsSection from '../components/sections/ProductsSection';
import LeadMagnet from '../components/sections/LeadMagnet';
import EstimatorSection from '../components/sections/EstimatorSection';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page-wrap">
      {/* 1. Hero — B2B positioning with clear value prop */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Trust Strip — credibility proof immediately after hero */}
      <TrustStrip />

      {/* 3. Services — 6 service cards, services BEFORE products */}
      <ServicesSection onNavigate={onNavigate} />

      {/* 4. Why CypherEdge — differentiators */}
      <WhyCypherEdge />

      {/* 5. Case Studies — proof of delivery */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 6. How We Work — 4-step engagement process */}
      <EngagementProcess onNavigate={onNavigate} />

      {/* 7. Lead Magnet — AI Readiness Assessment */}
      <LeadMagnet />

      {/* 8. Products — demoted but present (proof of execution) */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 9. Project Estimator — interactive qualification */}
      <EstimatorSection onNavigate={onNavigate} />

      {/* 10. Final CTA — high-conversion closing section */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
