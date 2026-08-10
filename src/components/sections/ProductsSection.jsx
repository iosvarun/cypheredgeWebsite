import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../data/appsData';
import { Sparkles, ExternalLink, Check } from 'lucide-react';
import './ProductsSection.css';

export default function ProductsSection({ onNavigate }) {
  const [selectedCat, setSelectedCat] = useState("All Products");

  const categories = ["All Products", "Utility & Social", "Health & Lifestyle", "Legal & Enterprise", "Media & Tools", "Lifestyle & Games"];

  const filteredApps = selectedCat === "All Products" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(a => a.category === selectedCat);

  return (
    <section className="products-section-wrap container">
      <div className="section-header-center">
        <span className="badge-neon"><Sparkles size={13} /> Product Division</span>
        <h2 className="section-title">
          We Don't Just Consult. <br />
          <span className="text-gradient-neon">We Build &amp; Operate Our Own Products.</span>
        </h2>
        <p className="section-subtitle">
          This is CypherEdge's biggest differentiator. Our team designs, launches, and scales top-rated mobile and SaaS applications serving millions of global users across iOS and Android.
        </p>

        {/* Filter Pills */}
        <div className="product-category-filters">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`cat-filter-pill ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredApps.map((app) => (
          <div key={app.id} id={`product-${app.id}`} className="product-card glass-panel">
            <div>
              <div className="product-card-top">
                <img 
                  src={app.iconPath} 
                  alt={app.name} 
                  className="product-app-icon" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => onNavigate && onNavigate(`/product/${app.id}`)}
                />
                <div className="product-card-meta">
                  <span className="product-badge-chip">{app.badge}</span>
                  <h3 
                    className="product-name" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => onNavigate && onNavigate(`/product/${app.id}`)}
                  >
                    {app.name}
                  </h3>
                  <span className="product-tagline">{app.tagline}</span>
                </div>
              </div>

              <p className="product-description">{app.description}</p>

              {/* Metrics Grid */}
              <div className="product-metrics-row">
                {app.metrics.map((m, idx) => (
                  <div key={idx} className="metric-chip">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Features Bullet List */}
              <div className="product-features-list">
                {app.features.slice(0, 3).map((f, fIdx) => (
                  <div key={fIdx} className="feature-bullet-item">
                    <Check size={14} className="check-cyan" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Document Links (About Us, Privacy Policy, Terms & Conditions) */}
            <div className="product-legal-doc-pills">
              {app.aboutUrl && (
                <a href={app.aboutUrl} target="_blank" rel="noopener noreferrer" className="legal-doc-pill">
                  About Us
                </a>
              )}
              {app.privacyUrl && (
                <a href={app.privacyUrl} target="_blank" rel="noopener noreferrer" className="legal-doc-pill">
                  Privacy Policy
                </a>
              )}
              {app.termsUrl && (
                <a href={app.termsUrl} target="_blank" rel="noopener noreferrer" className="legal-doc-pill">
                  Terms &amp; Conditions
                </a>
              )}
            </div>

            {/* Card Footer Store Download Buttons (App Store & Google Play) */}
            <div className="product-card-footer">
              <div className="store-buttons-group">
                {app.urlString && (
                  <a 
                    href={app.urlString} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-store-action ios-btn"
                    title="Download on Apple App Store"
                  >
                    <svg className="store-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.12-1.96.99-3.1-.96.04-2.13.64-2.82 1.44-.61.71-1.15 1.87-1.01 2.98 1.08.08 2.17-.5 2.84-1.32z"/>
                    </svg>
                    <span>App Store</span>
                  </a>
                )}

                {app.urlStringAndroid && (
                  <a 
                    href={app.urlStringAndroid} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-store-action android-btn"
                    title="Get it on Google Play"
                  >
                    <svg className="store-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M3.609 1.814L15.793 12 3.61 22.186a1.503 1.503 0 0 1-.61-.937V2.751c0-.369.215-.705.61-.937zm13.605 9.155l2.766 1.583a.987.987 0 0 1 0 1.706l-2.766 1.583-2.613-2.172 2.613-2.7zm-1.42-1.183L4.992.658A1.493 1.493 0 0 1 5.867.5c.343 0 .686.096.98.286l8.947 5.12-2.001 3.88zm-2.001 4.428l2.001 3.88-8.947 5.12a1.996 1.996 0 0 1-.98.286 1.493 1.493 0 0 1-.875-.158l10.799-9.128z"/>
                    </svg>
                    <span>Google Play</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
