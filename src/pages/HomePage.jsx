import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import TrustStrip from '../components/sections/TrustStrip';
import ServicesSection from '../components/sections/ServicesSection';
import WhyCypherEdge from '../components/sections/WhyCypherEdge';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import TrustSignals from '../components/sections/TrustSignals';
import EngagementProcess from '../components/sections/EngagementProcess';
import ProductsSection from '../components/sections/ProductsSection';
import LeadMagnet from '../components/sections/LeadMagnet';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page-wrap">
      {/* 1. Hero — Primary value proposition */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. TrustStrip — Credibility metrics immediately below hero */}
      <TrustStrip />

      {/* 3. Services — What we do */}
      <ServicesSection onNavigate={onNavigate} />

      {/* 4. Case Studies — Social proof with real results */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 5. WhyCypherEdge — Differentiators */}
      <WhyCypherEdge />

      {/* 6. Trust Signals — Commitments */}
      <TrustSignals />

      {/* 7. Engagement Process — How we work */}
      <EngagementProcess onNavigate={onNavigate} />

      {/* 8. Products — Product portfolio (unique differentiator) */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 9. Lead Magnet — Capture interest */}
      <LeadMagnet />

      {/* 10. Final CTA — Last conversion opportunity */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
