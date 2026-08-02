import React from 'react';
import './Testimonials.css';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';

const Testimonials = ({ onNavigate }) => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="badge-neon">Client Feedback</span>
          <h2 className="section-title text-main">What Our Clients Say</h2>
        </div>

        {TESTIMONIALS_DATA.length === 0 ? (
          <div className="testimonials-placeholder glass-panel">
            <p className="text-main">
              We are collecting feedback from our clients. This section will be updated with real testimonials soon.
            </p>
            <p className="text-muted placeholder-subtext">
              In the meantime, explore our case studies to see our engineering work.
            </p>
            <button 
              className="btn-glow" 
              onClick={() => onNavigate && onNavigate('case-studies')}
            >
              View Case Studies
            </button>
          </div>
        ) : (
          <div className="testimonials-grid">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card glass-panel">
                <p className="testimonial-quote text-muted">"{testimonial.quote}"</p>
                
                <hr className="testimonial-divider" />
                
                <div className="testimonial-bottom">
                  <div className="testimonial-avatar">
                    {testimonial.photoUrl ? (
                      <img src={testimonial.photoUrl} alt={testimonial.name} />
                    ) : (
                      <span className="avatar-initials">
                        {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    )}
                  </div>
                  
                  <div className="testimonial-info">
                    <div className="testimonial-author">
                      <span className="author-name text-main">{testimonial.name}</span>
                      <span className="author-role text-muted">{testimonial.role}, {testimonial.company}</span>
                    </div>
                    
                    <div className="testimonial-meta">
                      <span className="project-badge">{testimonial.project}</span>
                    </div>
                    
                    <div className="testimonial-result text-cyan">
                      {testimonial.businessResult}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
