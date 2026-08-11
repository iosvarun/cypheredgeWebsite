import React, { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import Breadcrumb from '../components/shared/Breadcrumb';
import RelatedLinks from '../components/shared/RelatedLinks';
import './CaseStudyDetailPage.css';

import { CASE_STUDIES_DATA } from '../data/caseStudiesData';

const CaseStudyDetailPage = ({ caseStudySlug, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [caseStudySlug]);

  const cs = CASE_STUDIES_DATA?.find(c => 
    c.id === caseStudySlug || 
    c.slug === caseStudySlug ||
    (c.id && caseStudySlug && (c.id.includes(caseStudySlug) || caseStudySlug.includes(c.id))) ||
    (c.slug && caseStudySlug && (c.slug.includes(caseStudySlug) || caseStudySlug.includes(c.slug)))
  ) || CASE_STUDIES_DATA?.[0];

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: cs.title, path: `/case-studies/${cs.slug}` }
  ];

  return (
    <div className="page-wrapper">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />

        {/* Hero Section */}
        <section className="cs-hero">
          <div className="cs-hero-meta">
            <span className="badge-neon">{cs.category}</span>
            <span className="cs-client">Client: {cs.client}</span>
          </div>
          <h1 className="cs-title">{cs.title}</h1>
        </section>

        {/* Challenge Section */}
        <section className="cs-section">
          <div className="cs-highlight-block glass-panel">
            <span className="badge-neon">The Challenge</span>
            <p>{cs.challenge}</p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="cs-section">
          <div className="section-header-center">
            <h2>The Solution</h2>
          </div>
          <div className="cs-text-content">
            <p>{cs.solution}</p>
          </div>
        </section>

        {/* Architecture Section */}
        {cs.architecture && (
          <section className="cs-section">
            <div className="section-header-center">
              <h2>Architecture</h2>
            </div>
            <ul className="cs-architecture-list glass-panel">
              {cs.architecture.map((item, i) => (
                <li key={i}>
                  <LucideIcons.Check size={20} className="icon-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        {cs.techStack && (
          <section className="cs-section">
            <div className="section-header-center">
              <h2>Technologies Used</h2>
            </div>
            <div className="cs-tech-grid">
              {cs.techStack.map((tech, i) => (
                <span key={i} className="cs-tech-pill glass-panel">{tech}</span>
              ))}
            </div>
          </section>
        )}

        {/* Results Section */}
        {cs.results && (
          <section className="cs-section">
            <div className="section-header-center">
              <h2>The Results</h2>
            </div>
            <div className="cs-metrics-grid">
              {cs.results.map((metric, i) => (
                <div key={i} className="cs-metric-card glass-panel">
                  <div className="metric-value">{metric.metric}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Measurable Outcome */}
        {cs.measurableOutcome && (
          <section className="cs-section">
            <div className="cs-outcome-block glass-panel">
              <LucideIcons.TrendingUp size={32} className="icon-cyan" />
              <p>{cs.measurableOutcome}</p>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="cs-cta glass-panel">
          <h2>Have a Similar Challenge?</h2>
          <p>Let's discuss how we can build a scalable solution for your business.</p>
          <button className="btn-glow" onClick={() => onNavigate && onNavigate('/contact')}>Book a Discovery Call</button>
        </section>

        {/* Related */}
        {cs.relatedLinks && (
          <RelatedLinks 
            title="Explore Related Services & Tech" 
            items={cs.relatedLinks} 
            onNavigate={onNavigate} 
          />
        )}

      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
