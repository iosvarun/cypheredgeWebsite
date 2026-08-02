import React from 'react';
import { SITE_CONFIG } from '../../data/siteConfig';
import './TrustStrip.css';

export default function TrustStrip() {
  return (
    <section className="trust-strip-section">
      <div className="container">
        <div className="trust-metrics">
          <div className="metric-item">
            <span className="metric-value text-gradient-neon">9</span>
            <span className="metric-label">Published Products</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-value text-gradient-neon">300K+</span>
            <span className="metric-label">Users Globally</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-value text-gradient-neon">4.8+</span>
            <span className="metric-label">Avg App Store Rating</span>
          </div>
        </div>

        <div className="trust-logos">
          <p className="trust-subtitle">Trusted by startups and enterprises across industries</p>
          <div className="reviews-links">
            {SITE_CONFIG?.socialLinks?.clutch && (
              <a href={SITE_CONFIG.socialLinks.clutch} target="_blank" rel="noopener noreferrer" className="review-link glass-panel" aria-label="Clutch Reviews">
                Clutch Reviews
              </a>
            )}
            {SITE_CONFIG?.socialLinks?.goodfirms && (
              <a href={SITE_CONFIG.socialLinks.goodfirms} target="_blank" rel="noopener noreferrer" className="review-link glass-panel" aria-label="GoodFirms Reviews">
                GoodFirms Reviews
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
