import React from 'react';
import { CASE_STUDIES_DATA } from '../../data/caseStudiesData';
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Cpu } from 'lucide-react';
import './CaseStudiesSection.css';

export default function CaseStudiesSection({ onNavigate }) {
  return (
    <section className="case-studies-section container">
      <div className="section-header-center">
        <span className="badge-neon">Product Case Studies</span>
        <h2 className="section-title">
          Engineering Solutions for{' '}
          <span className="text-gradient-neon">Real Products</span>
        </h2>
        <p className="section-subtitle">
          How we architected, engineered, and delivered measurable outcomes for flagship products.
        </p>
      </div>

      <div className="case-studies-list">
        {CASE_STUDIES_DATA.map((cs) => (
          <div key={cs.id} className="case-study-card">
            <div className="case-card-grid">
              {/* Content Side */}
              <div className="case-card-content">
                <div className="case-header-row">
                  <span className="case-cat-chip">{cs.category}</span>
                  <span className="case-client-tag">{cs.client}</span>
                </div>
                <h3 className="case-title">{cs.title}</h3>

                {/* Empirical Results Strip */}
                {cs.results && cs.results.length > 0 && (
                  <div className="case-results-strip">
                    {cs.results.map((r, idx) => (
                      <div key={idx} className="case-result-metric">
                        <span className="case-metric-value">{r.metric}</span>
                        <span className="case-metric-label">{r.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem */}
                <div className="case-block case-challenge-block">
                  <div className="case-block-header">
                    <AlertTriangle size={13} />
                    <span className="case-block-label">Problem</span>
                  </div>
                  <p className="case-block-text">{cs.problem || cs.challenge}</p>
                </div>

                {/* Solution */}
                <div className="case-block case-solution-block">
                  <div className="case-block-header">
                    <Lightbulb size={13} />
                    <span className="case-block-label">Solution</span>
                  </div>
                  <p className="case-block-text">{cs.solution}</p>
                </div>

                {/* Engineering / Architecture */}
                {cs.engineering && (
                  <div className="case-block case-engineering-block">
                    <div className="case-block-header">
                      <Cpu size={13} />
                      <span className="case-block-label">Engineering &amp; Architecture</span>
                    </div>
                    <p className="case-block-text">{cs.engineering}</p>
                  </div>
                )}

                {/* Outcome */}
                <div className="case-block case-result-block">
                  <div className="case-block-header">
                    <CheckCircle2 size={13} />
                    <span className="case-block-label">Outcome</span>
                  </div>
                  <p className="case-block-text">{cs.outcome || cs.measurableOutcome}</p>
                </div>

                {/* Tech Tags */}
                <div className="case-tech-tags">
                  {cs.techStack.map((tech, idx) => (
                    <span key={idx} className="case-tag-pill">{tech}</span>
                  ))}
                </div>

                <div className="case-card-actions">
                  <button
                    className="btn-glow btn-sm"
                    onClick={() => onNavigate && onNavigate(`/contact?project=${encodeURIComponent(cs.title)}`)}
                    aria-label={`Build Something Similar for ${cs.title}`}
                  >
                    Build Something Similar <ArrowRight size={14} />
                  </button>
                  <button
                    className="btn-secondary btn-sm"
                    onClick={() => onNavigate && onNavigate(`/case-study/${cs.slug || cs.id}`)}
                    aria-label={`Read full case study: ${cs.title}`}
                  >
                    View Details →
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="case-card-image-box">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="case-img"
                  loading="lazy"
                />
                <div className="case-img-glow" style={{ background: cs.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
