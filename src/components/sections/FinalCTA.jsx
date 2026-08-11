import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/siteConfig';
import './FinalCTA.css';

export default function FinalCTA({ onNavigate }) {
  const handlePrimaryCTA = () => {
    if (SITE_CONFIG?.calendlyUrl) {
      window.open(SITE_CONFIG.calendlyUrl, '_blank', 'noopener,noreferrer');
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  const whatsappUrl = SITE_CONFIG?.whatsappNumber 
    ? (typeof getWhatsAppUrl === 'function' ? getWhatsAppUrl('Hi CypherEdge, I would like to discuss a project.') : null) 
    : null;

  return (
    <section className="final-cta-section container">
      <div className="final-cta-card glass-panel">
        <div className="final-cta-content">
          <h2 className="final-cta-title">Let's Co-Engineer Your Next Idea</h2>
          <p className="final-cta-subtitle">
            Whether it's an AI system, a SaaS platform, a mobile app, or dedicated developers — let's start with a technical conversation.
          </p>
          
          <div className="final-cta-actions">
            <div className="cta-btn-group">
              <button
                className="btn-glow cta-btn-main"
                onClick={handlePrimaryCTA}
                aria-label="Book a Free Discovery Call"
              >
                Book a Free Discovery Call <ArrowRight size={16} />
              </button>
              <p className="cta-support-text">Talk directly with our engineering team. No sales pitch.</p>
            </div>
            
            {SITE_CONFIG?.email && (
              <div className="cta-btn-group">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="btn-secondary cta-btn-secondary"
                  aria-label="Email Us"
                >
                  Email Us
                </a>
                <p className="cta-support-text">Receive technical feedback within 24 hours.</p>
              </div>
            )}
            
            {whatsappUrl && (
              <div className="cta-btn-group">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-link-whatsapp"
                  aria-label="Chat on WhatsApp"
                >
                  Chat on WhatsApp
                </a>
              </div>
            )}
          </div>

          <div className="final-cta-footer">
            <p className="cta-scope-text">Understand project scope, architecture approach, and timeline before development begins.</p>
            <div className="nda-note">
              <Shield size={16} className="nda-icon" aria-hidden="true" />
              <span>All discussions are NDA-protected. Your ideas stay confidential.</span>
            </div>
            {SITE_CONFIG?.responseTimeHours && (
              <div className="response-time">
                We typically respond within {SITE_CONFIG.responseTimeHours} hours
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
