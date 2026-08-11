import React from 'react';
import { ArrowRight, Mail, MapPin, Shield, Globe, Code, ExternalLink } from 'lucide-react';

// Brand icons not available in lucide-react, using inline SVGs
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

import { SITE_CONFIG, getWhatsAppUrl } from '../../data/siteConfig';
import { SERVICES_DATA } from '../../data/servicesData';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const handleLink = (path) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path === '/' ? '#home' : `#${path.replace('/', '')}`;
    }
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="footer-master-wrap">
      <div className="container footer-content-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand" onClick={() => handleLink('/')}>
            <img src="/assets/logo_tagline.png" alt="CypherEdge - Technology Partner" className="footer-logo-img" />
          </div>
          <p className="footer-desc">
            CypherEdge is a technology product company and engineering partner. We design, build, launch, and operate AI products, SaaS platforms, mobile apps, and enterprise software — and provide dedicated engineering teams.
          </p>
          <div className="footer-contact-info">
            <div className="info-row">
              <Mail size={16} className="text-cyan" />
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </div>
            <div className="info-row">
              <MapPin size={16} className="text-cyan" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-links">
            {SITE_CONFIG.socialLinks.linkedin && (
              <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
            )}
            {SITE_CONFIG.socialLinks.github && (
              <a href={SITE_CONFIG.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
            )}
            {SITE_CONFIG.socialLinks.twitter && (
              <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links-list">
            {SERVICES_DATA.map((srv) => (
              <li key={srv.id}>
                <button onClick={() => handleLink(srv.id === 'it-staffing-dedicated-teams' ? '/it-staffing' : '/services')}>
                  {srv.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Products & Proof */}
        <div className="footer-col">
          <h4 className="footer-col-title">Products & Proof</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleLink('/products')}>Our Products</button></li>
            <li><button onClick={() => handleLink('/case-studies')}>Case Studies</button></li>
            <li><button onClick={() => handleLink('/technologies')}>Technologies</button></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="footer-col">
          <h4 className="footer-col-title">Resources</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleLink('/insights')}>Insights & Blog</button></li>
            <li><button onClick={() => handleLink('/ai-readiness')}>AI Readiness Assessment</button></li>
            <li><button onClick={() => handleLink('/estimator')}>Project Estimator</button></li>
            <li><button onClick={() => handleLink('/company')}>Engineering Process</button></li>
          </ul>
        </div>

        {/* Column 5: Company */}
        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleLink('/company')}>About CypherEdge</button></li>
            <li><button onClick={() => handleLink('/careers')}>Careers</button></li>
            <li><button onClick={() => handleLink('/contact')}>Contact</button></li>
            <li><button onClick={() => handleLink('/privacypolicy')}>Privacy Policy</button></li>
            <li><button onClick={() => handleLink('/termsandcondition')}>Terms &amp; Conditions</button></li>
          </ul>
        </div>
      </div>

      {/* Footer CTA Strip */}
      <div className="footer-cta-strip container">
        <div className="footer-cta-content">
          <p>Ready to discuss your next project?</p>
          <div className="footer-cta-actions">
            <button className="btn-glow btn-sm" onClick={() => handleLink('/contact')}>
              Start a Project <ArrowRight size={14} />
            </button>
            {whatsappUrl && (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-wa-link">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar container">
        <p>&copy; {new Date().getFullYear()} CypherEdge Private Limited. All rights reserved.</p>
        <div className="footer-bottom-links">
          <button onClick={() => handleLink('/privacypolicy')}>Privacy Policy</button>
          <span>•</span>
          <button onClick={() => handleLink('/termsandcondition')}>Terms &amp; Conditions</button>
        </div>
      </div>
    </footer>
  );
}
