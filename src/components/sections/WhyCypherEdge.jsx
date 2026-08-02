import React from 'react';
import { Brain, Heart, Blocks, Smartphone, Cloud, Handshake, ArrowRight } from 'lucide-react';
import './WhyCypherEdge.css';

const REASONS = [
  {
    icon: Brain,
    title: 'AI-First Product Engineering',
    description: 'We don\'t just integrate AI — we design intelligent systems that solve measurable business problems. From RAG pipelines to custom AI agents, we build AI that delivers ROI.',
    businessValue: 'Intelligent systems that solve measurable business problems'
  },
  {
    icon: Heart,
    title: 'Product Mindset, Not Just Code',
    description: 'We build products users love, not just software that works. Every engineering decision considers user experience, business goals, and long-term maintainability.',
    businessValue: 'Products users love, not just software that works'
  },
  {
    icon: Blocks,
    title: 'Engineering Excellence',
    description: 'Modern architecture built for scalability, performance, and long-term maintainability. Clean code, automated testing, CI/CD, and infrastructure as code from day one.',
    businessValue: 'Architecture built to scale from day one'
  },
  {
    icon: Smartphone,
    title: 'Native Mobile Expertise',
    description: '14+ years building premium iOS applications and cross-platform solutions. Our published apps serve 300,000+ users with 4.8+ average App Store ratings.',
    businessValue: '14+ years of premium mobile development'
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Development',
    description: 'Applications designed to scale securely on modern cloud infrastructure. AWS, GCP, Firebase, Docker, Kubernetes — we choose the right tools for your scale.',
    businessValue: 'Applications designed to scale securely'
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We stay involved after launch with optimization, maintenance, and continuous improvement. Your success is measured in business outcomes, not just deliverables.',
    businessValue: 'We stay involved after launch'
  }
];

export default function WhyCypherEdge() {
  return (
    <section className="why-section container">
      <div className="section-header-center">
        <span className="badge-neon">Why CypherEdge</span>
        <h2 className="section-title">Why Companies Choose CypherEdge</h2>
      </div>
      <div className="why-grid">
        {REASONS.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <article key={index} className="why-card glass-panel">
              <div className="why-icon-wrapper">
                <Icon size={24} className="why-icon" aria-hidden="true" />
              </div>
              <h3 className="why-card-title">{reason.title}</h3>
              <p className="why-card-desc">{reason.description}</p>
              <div className="why-business-value">
                <span>{reason.businessValue}</span>
                <ArrowRight size={14} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
