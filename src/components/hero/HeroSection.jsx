import React from 'react';
import { ArrowRight, Eye, Shield, Globe, UserCheck, Sparkles } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero-master-section">
      {/* Ambient Radial Mesh Background Glows */}
      <div className="hero-ambient-glow glow-cyan" />
      <div className="hero-ambient-glow glow-violet" />

      <div className="container hero-master-container">
        {/* Top Announcement Badge */}
        <div className="hero-top-badge animate-fade-up">
          <span className="badge-neon">
            <Sparkles size={13} /> AI-First Product Engineering Company
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="hero-master-title animate-fade-up">
          AI Products, Custom Software &amp; Dedicated Engineering Teams That Scale.
        </h1>

        <p className="hero-master-subtitle animate-fade-up">
          From AI agents and SaaS platforms to native mobile apps and dedicated engineering teams — we engineer products that solve real business problems and scale globally.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group animate-fade-up">
          <button className="btn-glow" onClick={() => onNavigate && onNavigate('/contact')}>
            Book a Free Discovery Call <ArrowRight size={18} />
          </button>
          <button className="btn-secondary" onClick={() => onNavigate && onNavigate('/case-studies')}>
            <Eye size={16} /> Explore Our Work
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="hero-trust-indicators animate-fade-up">
          <div className="trust-indicator-pill">
            <Shield size={14} />
            <span>NDA-Friendly</span>
          </div>
          <div className="trust-indicator-pill">
            <Globe size={14} />
            <span>Global Remote Delivery</span>
          </div>
          <div className="trust-indicator-pill">
            <UserCheck size={14} />
            <span>Direct Access to Senior Engineers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
