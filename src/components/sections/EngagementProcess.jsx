import React from 'react';
import { Search, Layers, Palette, Code, TestTube2, Rocket, HeartHandshake, CheckCircle2 } from 'lucide-react';
import './EngagementProcess.css';

const STEPS = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We learn about your business, users, and technical requirements.',
    deliverables: ['Requirements document', 'Feasibility assessment', 'Initial scope estimate'],
    clientInvolvement: 'Share your vision and answer questions'
  },
  {
    icon: Layers,
    title: 'Architecture',
    description: 'Our architects design the system, select the tech stack, and plan for scale.',
    deliverables: ['System design document', 'Tech stack selection', 'Infrastructure plan'],
    clientInvolvement: 'Review and approve architecture'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'UI/UX design with wireframes, prototypes, and a complete design system.',
    deliverables: ['Wireframes', 'Interactive prototypes', 'Design system'],
    clientInvolvement: 'Feedback on prototypes'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Iterative sprints with working software delivered every two weeks.',
    deliverables: ['Working software increments', 'Sprint demos', 'Code documentation'],
    clientInvolvement: 'Weekly progress reviews'
  },
  {
    icon: TestTube2,
    title: 'Testing',
    description: 'Comprehensive QA including automated tests, performance benchmarks, and security audits.',
    deliverables: ['QA reports', 'Performance benchmarks', 'Security audit'],
    clientInvolvement: 'UAT participation'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Production release with CI/CD pipeline, monitoring, and rollback procedures.',
    deliverables: ['CI/CD pipeline', 'Production deployment', 'Monitoring dashboards'],
    clientInvolvement: 'Go-live approval'
  },
  {
    icon: HeartHandshake,
    title: 'Continuous Support',
    description: 'Post-launch optimization, bug fixes, feature updates, and scaling support.',
    deliverables: ['Monthly performance reports', 'Bug fix SLAs', 'Feature roadmap'],
    clientInvolvement: 'Ongoing partnership'
  }
];

export default function EngagementProcess({ onNavigate }) {
  return (
    <section className="process-section container">
      <div className="section-header-center">
        <span className="badge-neon">Our Process</span>
        <h2 className="section-title">Engineering Process That Delivers</h2>
      </div>
      
      <div className="process-timeline-center">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          const isLeft = index % 2 === 0;
          return (
            <article key={index} className={`process-step ${isLeft ? 'process-step-left' : 'process-step-right'}`}>
              <div className="process-step-content glass-panel">
                <div className="process-icon-wrapper">
                  <div className="process-icon-box">
                    <span className="process-number">0{index + 1}</span>
                    <Icon size={24} className="process-icon" aria-hidden="true" />
                  </div>
                  <h3 className="process-step-title">{step.title}</h3>
                </div>
                
                <p className="process-step-desc">{step.description}</p>
                
                <div className="process-deliverables">
                  <h4 className="deliverables-title">Deliverables:</h4>
                  <ul>
                    {step.deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="client-involvement">
                  <span className="involvement-badge">
                    <strong>Your role:</strong> {step.clientInvolvement}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
        <div className="process-center-line" aria-hidden="true"></div>
      </div>

      <div className="process-cta-wrapper">
        <button
          className="btn-glow"
          onClick={() => onNavigate && onNavigate('/contact')}
          aria-label="Start with a Discovery Call"
        >
          Start with a Discovery Call
        </button>
      </div>
    </section>
  );
}
