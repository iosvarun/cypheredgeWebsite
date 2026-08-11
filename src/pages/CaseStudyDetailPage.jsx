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
            <span className="cs-client">Division: {cs.client}</span>
          </div>
          <h1 className="cs-title">{cs.title}</h1>
          {cs.summary && <p className="cs-summary-text">{cs.summary}</p>}
        </section>

        {/* 1. Problem Section */}
        <section className="cs-section">
          <div className="cs-highlight-block glass-panel">
            <div className="cs-block-badge">
              <LucideIcons.AlertTriangle size={16} className="text-amber" />
              <span>Problem</span>
            </div>
            <p>{cs.problem || cs.challenge}</p>
          </div>
        </section>

        {/* 2. Solution Section */}
        <section className="cs-section">
          <div className="section-header-left">
            <span className="badge-neon">02 — Solution</span>
            <h2>What We Built</h2>
          </div>
          <div className="cs-text-content glass-panel">
            <p>{cs.solution}</p>
          </div>
        </section>

        {/* 3. Engineering & Architecture Section */}
        <section className="cs-section">
          <div className="section-header-left">
            <span className="badge-neon">03 — Engineering</span>
            <h2>Architecture &amp; Technical Implementation</h2>
          </div>
          {cs.engineering && (
            <div className="cs-text-content glass-panel mb-4">
              <p>{cs.engineering}</p>
            </div>
          )}
          {cs.architecture && (
            <ul className="cs-architecture-list glass-panel">
              {cs.architecture.map((item, i) => (
                <li key={i}>
                  <LucideIcons.CheckCircle2 size={18} className="icon-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 4. Outcome & Measurable Results */}
        <section className="cs-section">
          <div className="section-header-left">
            <span className="badge-neon">04 — Outcome</span>
            <h2>Results &amp; Impact</h2>
          </div>

          {cs.results && (
            <div className="cs-metrics-grid">
              {cs.results.map((metric, i) => (
                <div key={i} className="cs-metric-card glass-panel">
                  <div className="metric-value text-gradient-neon">{metric.metric}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {(cs.outcome || cs.measurableOutcome) && (
            <div className="cs-outcome-block glass-panel">
              <LucideIcons.TrendingUp size={28} className="icon-cyan" />
              <p>{cs.outcome || cs.measurableOutcome}</p>
            </div>
          )}
        </section>

        {/* 5. Technology Stack */}
        {cs.techStack && (
          <section className="cs-section">
            <div className="section-header-left">
              <span className="badge-neon">05 — Technology</span>
              <h2>Tech Stack</h2>
            </div>
            <div className="cs-tech-grid">
              {cs.techStack.map((tech, i) => (
                <span key={i} className="cs-tech-pill glass-panel">{tech}</span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="cs-cta glass-panel">
          <h2>Have a Similar Engineering Challenge?</h2>
          <p>Talk directly with our technical team to discuss architecture, timeline, and scope.</p>
          <button className="btn-glow" onClick={() => onNavigate && onNavigate('/contact')}>
            Book a Discovery Call
          </button>
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
