import React from 'react';
import { ArrowRight, Eye, Shield, Globe, UserCheck, Sparkles, Brain, Code2, Layers } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero-master-section">
      {/* Ambient Background Glows */}
      <div className="hero-ambient-glow glow-cyan" />
      <div className="hero-ambient-glow glow-violet" />
      <div className="hero-ambient-glow glow-blue" />

      {/* Grid Pattern Overlay */}
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-master-container">
        {/* Announcement Badge: WHO WE ARE */}
        <div className="hero-top-badge animate-fade-up">
          <span className="badge-neon">
            <Sparkles size={12} /> AI-Native Product Engineering Company
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-master-title animate-fade-up">
          AI Systems, Custom Software &amp;{' '}
          <span className="hero-title-highlight">Dedicated Engineering</span>{' '}
          Teams That Scale.
        </h1>

        {/* Subtitle: WHAT WE BUILD + WHY US */}
        <p className="hero-master-subtitle animate-fade-up">
          CypherEdge helps startups and enterprises design, build, launch, and scale AI agents,
          SaaS platforms, mobile apps, and cloud backends — driven by senior engineers, product thinking,
          and end-to-end ownership.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group animate-fade-up">
          <button
            className="btn-glow"
            onClick={() => onNavigate && onNavigate('/contact')}
            aria-label="Let's Co-Engineer Your Next Idea"
          >
            Let's Co-Engineer Your Next Idea <ArrowRight size={17} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => onNavigate && onNavigate('/case-studies')}
            aria-label="Explore Our Work"
          >
            <Eye size={15} /> Explore Our Work
          </button>
        </div>

        {/* Trust Indicators: WHY US */}
        <div className="hero-trust-indicators animate-fade-up">
          <div className="trust-indicator-pill">
            <Brain size={13} className="text-cyan" />
            <span>Product Mindset</span>
          </div>
          <div className="trust-indicator-pill">
            <UserCheck size={13} className="text-cyan" />
            <span>Senior Engineering</span>
          </div>
          <div className="trust-indicator-pill">
            <Layers size={13} className="text-cyan" />
            <span>End-to-End Ownership</span>
          </div>
          <div className="trust-indicator-pill">
            <Shield size={13} />
            <span>NDA Protected</span>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
