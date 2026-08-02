import React from 'react';
import { ClipboardCheck, Phone, Layers, FileText, Rocket } from 'lucide-react';
import './WhatHappensNext.css';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Engineering Team Review',
    description: 'Our senior engineers review your requirements and assess technical feasibility.'
  },
  {
    icon: Phone,
    title: 'Discovery Call',
    description: 'A technical discovery call is scheduled within 24 hours to discuss your vision.'
  },
  {
    icon: Layers,
    title: 'Architecture Discussion',
    description: 'Our architects propose a system design, tech stack, and solution approach.'
  },
  {
    icon: FileText,
    title: 'Proposal & Timeline',
    description: 'You receive a detailed proposal with scope, timeline, milestones, and investment.'
  },
  {
    icon: Rocket,
    title: 'Project Kickoff',
    description: 'Your dedicated engineering team is assembled and development begins.'
  }
];

const WhatHappensNext = () => {
  return (
    <section className="what-happens-next section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="badge-neon">Next Steps</span>
          <h2 className="section-title text-main">What Happens After You Reach Out?</h2>
        </div>

        <div className="timeline-container">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="timeline-step">
                <div className="timeline-badge-container">
                  <div className="timeline-badge">
                    <span className="timeline-number">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && <div className="timeline-connector"></div>}
                </div>
                
                <div className="timeline-content glass-panel">
                  <div className="timeline-icon-wrapper">
                     <Icon size={24} className="text-cyan" />
                  </div>
                  <div className="timeline-text">
                    <h3 className="text-main">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
