import React from 'react';
import * as LucideIcons from 'lucide-react';
import Breadcrumb from '../components/shared/Breadcrumb';
import RelatedLinks from '../components/shared/RelatedLinks';
import FAQAccordion from '../components/shared/FAQAccordion';
import './TechnologyDetailPage.css';

import { TECHNOLOGY_DETAILS_DATA } from '../data/technologyDetailsData';

const getIcon = (iconName) => {
  const Icon = LucideIcons[iconName];
  return Icon ? <Icon size={48} className="tech-hero-icon" /> : null;
};

const TechnologyDetailPage = ({ techSlug, onNavigate }) => {
  const tech = TECHNOLOGY_DETAILS_DATA?.find(t => t.slug === techSlug);

  if (!tech) {
    return (
      <div className="page-wrapper container">
        <h1 style={{ color: '#fff' }}>Technology not found</h1>
        <button className="btn-glow" onClick={() => onNavigate('/')}>Return Home</button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Technologies', path: '/technologies' },
    { label: tech.name, path: `/technologies/${tech.slug}` }
  ];

  return (
    <div className="page-wrapper">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        
        {/* Hero Section */}
        <section className="tech-hero">
          {tech.icon && getIcon(tech.icon)}
          <h1 className="tech-headline">{tech.name}</h1>
          <p className="tech-subtext">{tech.subtext}</p>
        </section>

        {/* Why We Use It Section */}
        {tech.experience && (
          <section className="tech-section">
            <div className="section-header-center">
              <span className="badge-neon">Our Experience</span>
              <h2>Why We Use {tech.name}</h2>
            </div>
            <div className="text-block glass-panel">
              <p>{tech.experience}</p>
            </div>
          </section>
        )}

        {/* Advantages Section */}
        {tech.advantages && (
          <section className="tech-section">
            <div className="section-header-center">
              <span className="badge-neon">Advantages</span>
              <h2>Key Advantages</h2>
            </div>
            <div className="advantages-grid">
              {tech.advantages.map((adv, i) => (
                <div key={i} className="advantage-card glass-panel">
                  <LucideIcons.CheckCircle size={24} className="icon-cyan" />
                  <div className="adv-content">
                    <h3>{adv.title}</h3>
                    <p>{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Architecture Section */}
        {tech.architecture && (
          <section className="tech-section">
            <div className="section-header-center">
              <span className="badge-neon">Architecture Patterns</span>
              <h2>How We Architect {tech.name}</h2>
            </div>
            <ul className="arch-bullet-list glass-panel">
              {tech.architecture.map((item, i) => (
                <li key={i}>
                  <div className="bullet-point"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Performance & Scalability */}
        <div className="tech-two-col">
          {tech.performance && (
            <section className="tech-section">
              <span className="badge-neon">Performance</span>
              <h3 className="sub-section-title">Performance Considerations</h3>
              <div className="text-block glass-panel">
                <p>{tech.performance}</p>
              </div>
            </section>
          )}
          
          {tech.scalability && (
            <section className="tech-section">
              <span className="badge-neon">Scalability</span>
              <h3 className="sub-section-title">Scaling Strategies</h3>
              <div className="text-block glass-panel">
                <p>{tech.scalability}</p>
              </div>
            </section>
          )}
        </div>

        {/* Use Cases Section */}
        {tech.useCases && (
          <section className="tech-section">
            <div className="section-header-center">
              <span className="badge-neon">Use Cases</span>
              <h2>Best Fits For {tech.name}</h2>
            </div>
            <div className="use-cases-grid">
              {tech.useCases.map((uc, i) => (
                <div key={i} className="use-case-card glass-panel">
                  <h3>{uc.title}</h3>
                  <p>{uc.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {tech.faqs && (
          <section className="tech-section">
            <FAQAccordion faqs={tech.faqs} />
          </section>
        )}

        {/* Related Sections */}
        {tech.relatedServices && (
          <RelatedLinks 
            title="Related Services" 
            items={tech.relatedServices} 
            onNavigate={onNavigate} 
          />
        )}
        
        {tech.relatedCaseStudies && (
          <RelatedLinks 
            title="Related Case Studies" 
            items={tech.relatedCaseStudies} 
            onNavigate={onNavigate} 
          />
        )}

      </div>
    </div>
  );
};

export default TechnologyDetailPage;
