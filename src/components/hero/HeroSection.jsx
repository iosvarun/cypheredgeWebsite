import React from 'react';
import { ArrowRight, Eye, Shield, Globe, UserCheck, Sparkles } from 'lucide-react';
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
        {/* Announcement Badge */}
        <div className="hero-top-badge animate-fade-up">
          <span className="badge-neon">
            <Sparkles size={12} /> AI-First Product Engineering Company
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-master-title animate-fade-up">
          AI Products, Custom Software &{' '}
          <span className="hero-title-highlight">Dedicated Engineering</span>{' '}
          Teams That Scale.
        </h1>

        {/* Subtitle */}
        <p className="hero-master-subtitle animate-fade-up">
          From AI agents and SaaS platforms to native mobile apps and dedicated engineering teams —
          we engineer products that solve real business problems and scale globally.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group animate-fade-up">
          <button
            className="btn-glow"
            onClick={() => onNavigate && onNavigate('/contact')}
            aria-label="Book a Free Discovery Call"
          >
            Book a Free Discovery Call <ArrowRight size={17} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => onNavigate && onNavigate('/case-studies')}
            aria-label="Explore Our Work"
          >
            <Eye size={15} /> Explore Our Work
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="hero-trust-indicators animate-fade-up">
          <div className="trust-indicator-pill">
            <Shield size={13} />
            <span>NDA-Friendly</span>
          </div>
          <div className="trust-indicator-pill">
            <Globe size={13} />
            <span>Global Remote Delivery</span>
          </div>
          <div className="trust-indicator-pill">
            <UserCheck size={13} />
            <span>Direct Access to Senior Engineers</span>
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
