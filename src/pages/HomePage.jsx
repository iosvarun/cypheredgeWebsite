import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import TrustStrip from '../components/sections/TrustStrip';
import AgenticArchitectureSection from '../components/sections/AgenticArchitectureSection';
import ProductsSection from '../components/sections/ProductsSection';
import WhyCypherEdge from '../components/sections/WhyCypherEdge';
import ServicesSection from '../components/sections/ServicesSection';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import TrustSignals from '../components/sections/TrustSignals';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page-wrap">
      {/* 1. Hero — Un-crowded, bold proposition (WHO WE ARE, WHAT WE BUILD, WHY US, CTA) */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Core Capabilities & Metrics */}
      <TrustStrip />

      {/* 3. AI / Agentic Architecture — Dedicated AI Engineering showcase */}
      <AgenticArchitectureSection onNavigate={onNavigate} />

      {/* 4. Products / Portfolio — Real app portfolio */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 5. Why CypherEdge — Differentiator pillars */}
      <WhyCypherEdge />

      {/* 6. Engineering Capabilities — Core engineering pillars (Web, Mobile, Cloud, Staffing) */}
      <ServicesSection onNavigate={onNavigate} />

      {/* 7. Case Studies — Flagship case studies */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 8. Social Proof & Commitments */}
      <TrustSignals />

      {/* 9. Final CTA — "Let's Co-Engineer Your Next Idea" */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
