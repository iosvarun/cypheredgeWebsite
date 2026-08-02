import React from 'react';
import { ArrowRight } from 'lucide-react';
import './RelatedLinks.css';

const RelatedLinks = ({ title = 'Related Content', items, onNavigate }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="related-links-section">
      <h3 className="related-links-title">{title}</h3>
      <div className="related-links-scroll">
        <div className="related-links-container">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="related-card glass-panel"
              onClick={() => onNavigate && onNavigate(item.path)}
            >
              {item.badge && <span className="badge-neon related-badge">{item.badge}</span>}
              <h4 className="related-card-title">{item.title}</h4>
              <p className="related-card-desc">{item.description}</p>
              <div className="related-card-arrow">
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedLinks;
