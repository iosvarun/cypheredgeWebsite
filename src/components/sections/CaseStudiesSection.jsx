import React from 'react';
import { CASE_STUDIES_DATA } from '../../data/caseStudiesData';
import { Sparkles, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import './CaseStudiesSection.css';

export default function CaseStudiesSection({ onNavigate }) {
  return (
    <section className="case-studies-section container">
      <div className="section-header-center">
        <span className="badge-neon">Business Impact</span>
        <h2 className="section-title">
          How We Solved Real <br />
          <span className="text-gradient-neon">Engineering Problems</span>
        </h2>
        <p className="section-subtitle">
          Every project starts with a business challenge. Here's how we engineered the solutions.
        </p>
      </div>

      <div className="case-studies-list">
        {CASE_STUDIES_DATA.map((cs) => (
          <div key={cs.id} className="case-study-card glass-panel">
            <div className="case-card-grid">
              <div className="case-card-content">
                <span className="case-cat-chip">{cs.category}</span>
                <h3 className="case-title">{cs.title}</h3>

                <div className="case-challenge-block">
                  <div className="case-block-header">
                    <AlertTriangle size={14} />
                    <span className="case-block-label">Challenge</span>
                  </div>
                  <p className="case-block-text">{cs.challenge}</p>
                </div>

                <div className="case-solution-block">
                  <div className="case-block-header">
                    <Lightbulb size={14} />
                    <span className="case-block-label">Solution</span>
                  </div>
                  <p className="case-block-text">{cs.solution}</p>
                </div>

                <div className="case-tech-tags">
                  {cs.techStack.map((tech, idx) => (
                    <span key={idx} className="case-tag-pill">{tech}</span>
                  ))}
                </div>

                <div className="case-result-block">
                  <div className="case-block-header">
                    <CheckCircle2 size={14} />
                    <span className="case-block-label">Business Result</span>
                  </div>
                  <p className="case-block-text">{cs.measurableOutcome}</p>
                </div>

                <button 
                  className="btn-secondary btn-sm"
                  onClick={() => onNavigate && onNavigate(`/case-study/${cs.id}`)}
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
