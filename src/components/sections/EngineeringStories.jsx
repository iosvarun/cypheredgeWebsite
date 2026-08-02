import React from 'react';
import { ArrowRight } from 'lucide-react';
import './EngineeringStories.css';
import { CASE_STUDIES_DATA } from '../../data/caseStudiesData';

const EngineeringStories = ({ onNavigate }) => {
  return (
    <section className="engineering-stories section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="badge-neon">Engineering Stories</span>
          <h2 className="section-title text-main">Featured Engineering Stories</h2>
          <p className="text-muted">Real problems. Real solutions. Real outcomes.</p>
        </div>

        <div className="stories-grid">
          {CASE_STUDIES_DATA.map((cs) => (
            <div key={cs.id} className="glass-panel story-card">
              <span className="industry-chip">{cs.category}</span>
              <h3 className="story-title text-main">{cs.title}</h3>
              
              <div className="story-content">
                <p className="story-text text-muted">
                  <strong>Problem:</strong> {cs.challenge.length > 80 ? cs.challenge.substring(0, 80) + '...' : cs.challenge}
                </p>
                <p className="story-text text-muted">
                  <strong>Solution:</strong> {cs.solution.length > 80 ? cs.solution.substring(0, 80) + '...' : cs.solution}
                </p>
              </div>

              <div className="tech-pills">
                {cs.techStack.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-pill">{tech}</span>
                ))}
              </div>

              <div className="story-footer">
                <span className="outcome-metric text-cyan">{cs.results[0]}</span>
                <button 
                  className="read-more-link text-cyan"
                  onClick={() => onNavigate && onNavigate(`case-study/${cs.id}`)}
                >
                  Read Full Case Study <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringStories;
