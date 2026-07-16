import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, AppWindow } from 'lucide-react';
import './Hero.css';

const HERO_APPS = [
  { name: "WA Direct Message", icon: "/assets/ic_directMessage.png",       color: "#1FB14A" },
  { name: "WhatsBackup",       icon: "/assets/media__1780778288921.png",    color: "#1FB14A" },
  { name: "Digital Dukaan",   icon: "/assets/ic_digitalDukaan.png",        color: "#3B82F6" },
  { name: "ShrinkLab",        icon: "/assets/media__1780778288868.png",    color: "#8B5CF6" },
  { name: "Truth or Dare",    icon: "/assets/media__1780778288892.png",    color: "#EF4444" },
  { name: "Gym Workout",      icon: "/assets/media__1780777474338.png",    color: "#16A34A" },
  { name: "PDF Pulse",        icon: "/assets/media__1780777474357.png",    color: "#F97316" },
  { name: "Nyayaconnect",     icon: "/assets/media__1780777474356.png",    color: "#3B82F6" },
  { name: "Aurikaa Jewels",   icon: "/assets/aurikaa_logo.png",            color: "#D97706" },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );
  const [isTiny, setIsTiny] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 480 : false
  );
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIsTiny(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div
        className="container hero-wrapper"
        style={isMobile ? {
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: '2rem', width: '100%', maxWidth: '100%', boxSizing: 'border-box'
        } : {}}
      >

        {/* ── LEFT: Text Content ── */}
        <div
          className="hero-content"
          style={isMobile ? {
            alignItems: 'center', textAlign: 'center',
            width: '100%', maxWidth: '100%', boxSizing: 'border-box'
          } : {}}
        >
          <h1
            className="hero-title"
            style={isMobile ? {
              fontSize: isTiny ? '2rem' : '2.5rem', textAlign: 'center',
              wordBreak: 'break-word', overflowWrap: 'break-word',
              width: '100%', maxWidth: '100%', lineHeight: 1.2
            } : {}}
          >
            We Engineer the Future of{' '}
            <span className="text-gradient-neon">Intelligent Software</span>
          </h1>

          <p
            className="hero-subtitle"
            style={isMobile ? {
              fontSize: isTiny ? '0.9rem' : '1rem', textAlign: 'center',
              marginLeft: 'auto', marginRight: 'auto',
              maxWidth: '100%', width: '100%',
              wordBreak: 'break-word', overflowWrap: 'break-word'
            } : {}}
          >
            CypherEdge designs premium iOS/Android mobile applications, architectures
            high-performance cloud backends, and implements cutting-edge AI Agent solutions.
            Let's convert your groundbreaking idea into reality.
          </p>

          <div
            className="hero-actions"
            style={isMobile ? {
              flexDirection: 'column', width: '100%',
              alignItems: 'center', justifyContent: 'center', gap: '1rem'
            } : {}}
          >
            <a
              href="#work"
              className="btn-glow"
              style={isMobile ? {
                width: '100%', maxWidth: '280px', textAlign: 'center',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              } : {}}
            >
              Explore Our Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="btn-secondary"
              style={isMobile ? {
                width: '100%', maxWidth: '280px', textAlign: 'center',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              } : {}}
            >
              <Play size={16} fill="white" />
              Our Services
            </a>
          </div>

          <div
            className="hero-stats"
            style={isMobile ? {
              flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '1.5rem',
              width: '100%', marginTop: '1.5rem'
            } : {}}
          >
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">Live App Store Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Trust</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">AI-Native</span>
              <span className="stat-label">Agentic Architecture</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: App Showcase — hidden on mobile ── */}
        <div className="hero-interactive" style={isMobile ? { display: 'none' } : {}}>
          <div className="app-showcase-panel">

            {/* Header */}
            <div className="showcase-header">
              <span className="showcase-badge">
                <Sparkles size={12} />
                Live Products
              </span>
              <span className="showcase-count">9 Apps</span>
            </div>

            {/* 3-column icon grid */}
            <div className="app-icon-grid">
              {HERO_APPS.map((app, i) => (
                <a
                  key={i}
                  href="#work"
                  className="app-icon-cell"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ '--app-color': app.color }}
                >
                  <div className={`app-icon-wrap ${hovered === i ? 'hovered' : ''}`}>
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="app-icon-img"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    <div className="app-icon-glow" />
                  </div>
                  <span className="app-icon-label">{app.name}</span>
                </a>
              ))}
            </div>

            {/* Footer CTA */}
            <a href="#work" className="showcase-footer-link">
              <AppWindow size={14} />
              View All Products
              <ArrowRight size={13} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
