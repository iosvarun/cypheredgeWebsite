import React from 'react';
import { SERVICES_DATA } from '../../data/servicesData';
import { Bot, Code2, Layers, Smartphone, Server, Users, ArrowRight } from 'lucide-react';
import './ServicesSection.css';

export default function ServicesSection({ onNavigate }) {
  const getServiceIcon = (id, color) => {
    const props = { size: 24, style: { color } };
    switch (id) {
      case 'ai-agents-llm': return <Bot {...props} />;
      case 'mobile-app-engineering': return <Smartphone {...props} />;
      case 'enterprise-backend-cloud': return <Server {...props} />;
      case 'saas-product-engineering': return <Layers {...props} />;
      case 'custom-software-development': return <Code2 {...props} />;
      case 'it-staffing-dedicated-teams': return <Users {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  const handleCardClick = (id) => {
    if (!onNavigate) return;
    switch (id) {
      case 'ai-agents-llm':
        onNavigate('/services/ai-agents');
        break;
      case 'custom-software-development':
        onNavigate('/services/enterprise-software');
        break;
      case 'saas-product-engineering':
        onNavigate('/services/web-development');
        break;
      case 'mobile-app-engineering':
        onNavigate('/services/mobile-app-development');
        break;
      case 'enterprise-backend-cloud':
        onNavigate('/services/cloud-devops');
        break;
      case 'it-staffing-dedicated-teams':
        onNavigate('/it-staffing');
        break;
      default:
        onNavigate('/services');
        break;
    }
  };

  return (
    <section className="services-section-wrap container">
      <div className="section-header-center">
        <span className="badge-neon">Our Services</span>
        <h2 className="section-title">
          What We Build
        </h2>
        <p className="section-subtitle">
          Full-stack product engineering and dedicated teams for startups and enterprises.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES_DATA.slice(0, 6).map((srv) => {
          const isStaffing = srv.id === 'it-staffing-dedicated-teams';
          return (
            <div 
              key={srv.id} 
              className="service-card glass-panel"
              onClick={() => handleCardClick(srv.id)}
            >
              {isStaffing && (
                <span className="popular-badge">Popular</span>
              )}
              
              <div 
                className="service-icon-circle"
                style={{ background: `${srv.color}1E` }} // 12% is ~1E hex
              >
                {getServiceIcon(srv.id, srv.color)}
              </div>
              
              <h3 className="service-card-title">{srv.title}</h3>
              <p className="service-card-outcome">
                {srv.businessOutcome || srv.shortDesc}
              </p>
              
              <button className="service-card-link">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
