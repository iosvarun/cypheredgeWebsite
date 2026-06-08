import React from 'react';
import { Cpu, Terminal, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-wrapper">
        <div className="footer-grid">
          {/* Logo & Slogan */}
          <div className="footer-about">
            <a href="#home" className="footer-logo">
              <img src="/assets/logo_tagline.png" alt="CypherEdge Logo" className="footer-logo-img" />
            </a>
            <p className="footer-slogan">
              Engineering high-fidelity B2B custom systems, native iOS/Android applications, and production-ready AI agent solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#services">AI Solutions</a></li>
              <li><a href="#services">App Development</a></li>
              <li><a href="#services">Web Engineering</a></li>
              <li><a href="#services">Cloud Backend</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Products</h4>
            <ul>
              <li><a href="https://apps.apple.com/us/app/direct-message-for-whatsapp/id1557291502" target="_blank" rel="noopener noreferrer">WA Direct Message</a></li>
              <li><a href="https://apps.apple.com/us/app/nyayaconnect/id6752890135" target="_blank" rel="noopener noreferrer">Nyayaconnect</a></li>
              <li><a href="https://apps.apple.com/us/app/gym-workout-fitness-club-lab/id6757446446" target="_blank" rel="noopener noreferrer">Gym Workout</a></li>
              <li><a href="https://apps.apple.com/us/app/whatsbackup/id6768908196" target="_blank" rel="noopener noreferrer">WhatsBackup</a></li>
            </ul>
          </div>

          {/* Tech Stack Indicator */}
          <div className="footer-tech-stack">
            <h4>Engineered With</h4>
            <div className="tech-tags">
              <span className="tech-tag">React / Vite</span>
              <span className="tech-tag">SwiftUI</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">LLM / Agents</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} CypherEdge Private Limited. All rights reserved.
          </p>
          
          <button 
            onClick={handleScrollToTop} 
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
