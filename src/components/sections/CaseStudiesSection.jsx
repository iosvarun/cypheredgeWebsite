import React from 'react';
import { CASE_STUDIES_DATA } from '../../data/caseStudiesData';
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import './CaseStudiesSection.css';

export default function CaseStudiesSection({ onNavigate }) {
  return (
    <section className="case-studies-section container">
      <div className="section-header-center">
        <span className="badge-neon"><Sparkles size={13} /> Engineering Impact</span>
        <h2 className="section-title">
          Client Proof &amp; <br />
          <span className="text-gradient-neon">Deep Case Studies</span>
        </h2>
        <p className="section-subtitle">
          Real metrics, real architectures, and real business outcomes engineered by CypherEdge for scale.
        </p>
      </div>

      <div className="case-studies-list">
        {CASE_STUDIES_DATA.map((cs) => (
          <div key={cs.id} className="case-study-card glass-panel">
            <div className="case-card-grid">
              <div className="case-card-content">
                <span className="case-cat-chip">{cs.category}</span>
                <h3 className="case-title">{cs.title}</h3>
                <p className="case-summary">{cs.summary}</p>

                {/* Metrics Badges */}
                <div className="case-metrics-row">
                  {cs.results.map((res, i) => (
                    <div key={i} className="case-metric-box">
                      <span className="case-metric-num text-cyan">{res.metric}</span>
                      <span className="case-metric-lbl">{res.label}</span>
                    </div>
                  ))}
                </div>

                <div className="case-tech-tags">
                  {cs.techStack.map((tech, idx) => (
                    <span key={idx} className="case-tag-pill">{tech}</span>
                  ))}
                </div>

                <button 
                  className="btn-secondary btn-sm"
                  onClick={() => onNavigate && onNavigate('/case-studies')}
                >
                  Read Full Case Study <ArrowRight size={14} />
                </button>
              </div>

              <div className="case-card-image-box">
                <img src={cs.image} alt={cs.title} className="case-img" />
                <div className="case-img-glow" style={{ background: cs.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
