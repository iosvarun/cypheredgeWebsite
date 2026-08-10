import React from 'react';
import * as LucideIcons from 'lucide-react';
import Breadcrumb from '../components/shared/Breadcrumb';
import RelatedLinks from '../components/shared/RelatedLinks';
import './ProductDetailPage.css';

import { PRODUCTS_DATA } from '../data/appsData';

const getIcon = (iconName) => {
  const Icon = LucideIcons[iconName];
  return Icon ? <Icon size={64} className="product-icon" /> : null;
};

const ProductDetailPage = ({ productSlug, onNavigate }) => {
  const product = PRODUCTS_DATA?.find(p => p.id === productSlug);

  if (!product) {
    return (
      <div className="page-wrapper container">
        <h1 style={{ color: '#fff' }}>Product not found</h1>
        <button className="btn-glow" onClick={() => onNavigate('/')}>Return Home</button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: product.name, path: `/products/${product.slug}` }
  ];

  return (
    <div className="page-wrapper">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />

        {/* Hero Section */}
        <section className="product-hero">
          <div className="product-hero-icon-wrapper">
             {product.icon && getIcon(product.icon)}
          </div>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-tagline">{product.tagline}</p>
          <div className="product-badges">
             {product.badge && <span className="badge-neon">{product.badge}</span>}
             {product.rating && (
               <div className="product-rating">
                 <LucideIcons.Star size={16} fill="#facc15" color="#facc15" />
                 <span>{product.rating} Rating</span>
               </div>
             )}
          </div>
        </section>

        {/* Overview */}
        <section className="product-section">
          <div className="product-overview glass-panel">
            <p>{product.description}</p>
          </div>
        </section>

        {/* Features */}
        {product.features && (
          <section className="product-section">
            <div className="section-header-center">
              <h2>Key Features</h2>
            </div>
            <div className="product-features-grid">
              {product.features.map((feat, i) => (
                <div key={i} className="product-feature-card glass-panel">
                  <LucideIcons.CheckCircle2 size={24} className="icon-cyan" />
                  <p>{feat}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {product.techStack && (
          <section className="product-section">
            <div className="section-header-center">
              <h2>Built With</h2>
            </div>
            <div className="product-tech-grid">
              {product.techStack.map((tech, i) => (
                <span key={i} className="product-tech-pill glass-panel">{tech}</span>
              ))}
            </div>
          </section>
        )}

        {/* Metrics */}
        {product.metrics && (
          <section className="product-section">
            <div className="product-metrics-container glass-panel">
               {product.metrics.map((m, i) => (
                 <div key={i} className="product-metric">
                   <div className="p-metric-val">{m.value}</div>
                   <div className="p-metric-lbl">{m.label}</div>
                 </div>
               ))}
            </div>
          </section>
        )}

        {/* Download / Access Links */}
        <section className="product-download-section glass-panel">
          <h2>Get {product.name}</h2>
          <div className="download-buttons">
            {product.urlString && (
              <a href={product.urlString} target="_blank" rel="noreferrer" className="btn-glow download-btn">
                <LucideIcons.Apple size={20} />
                App Store
              </a>
            )}
            {product.urlStringAndroid && (
              <a href={product.urlStringAndroid} target="_blank" rel="noreferrer" className="btn-glow download-btn">
                <LucideIcons.Play size={20} />
                Play Store
              </a>
            )}
            {!product.urlString && !product.urlStringAndroid && (
              <button className="btn-glow download-btn">Launch App</button>
            )}
          </div>
        </section>

        {/* Related Products */}
        {product.relatedProducts && (
          <RelatedLinks 
            title="Other Products" 
            items={product.relatedProducts} 
            onNavigate={onNavigate} 
          />
        )}

      </div>
    </div>
  );
};

export default ProductDetailPage;
