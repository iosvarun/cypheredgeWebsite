import React from 'react';
import { Phone, FileSearch, Hammer, Rocket } from 'lucide-react';
import './EngagementProcess.css';

const STEPS = [
  {
    icon: Phone,
    title: 'Discovery Call',
    description: 'Share your vision. We listen, ask questions, and evaluate fit.',
  },
  {
    icon: FileSearch,
    title: 'Technical Planning',
    description: 'Our architects design the solution, define scope, and create a roadmap.',
  },
  {
    icon: Hammer,
    title: 'Build or Staff the Team',
    description: 'We engineer your product or embed dedicated developers in your team.',
  },
  {
    icon: Rocket,
    title: 'Launch, Scale & Support',
    description: 'We deploy, monitor, and iterate. Ongoing support as you grow.',
  }
];

export default function EngagementProcess({ onNavigate }) {
  return (
    <section className="process-section container">
      <div className="section-header-center">
        <span className="badge-neon">How We Work</span>
        <h2 className="section-title">From Discovery to Delivery</h2>
      </div>
      
      <div className="process-timeline">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <article key={index} className="process-step">
              <div className="process-icon-box glass-panel">
                <span className="process-number">0{index + 1}</span>
                <Icon size={28} className="process-icon" aria-hidden="true" />
              </div>
              <div className="process-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
              {index < STEPS.length - 1 && <div className="process-connector" aria-hidden="true"></div>}
            </article>
          );
        })}
      </div>

      <div className="process-cta-wrapper">
        <button
          className="btn-glow"
          onClick={() => onNavigate && onNavigate('/contact')}
          aria-label="Navigate to contact page to start a discovery call"
        >
          Start with a Discovery Call
        </button>
      </div>
    </section>
  );
}
