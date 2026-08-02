import React from 'react';
import { Package, Lightbulb, Cpu, UserCheck, Globe, Shield } from 'lucide-react';
import './WhyCypherEdge.css';

const REASONS = [
  {
    icon: Package,
    title: 'We Build & Operate Our Own Products',
    description: 'Unlike agencies, we ship and scale 9+ live apps.',
  },
  {
    icon: Lightbulb,
    title: 'Product-Minded Engineering',
    description: 'We think about user experience, not just code.',
  },
  {
    icon: Cpu,
    title: 'AI, Mobile, Cloud & SaaS Expertise',
    description: 'Deep technical depth across modern stacks.',
  },
  {
    icon: UserCheck,
    title: 'Senior Technical Involvement',
    description: 'Co-founders and staff engineers directly involved.',
  },
  {
    icon: Globe,
    title: 'Flexible Remote Delivery',
    description: 'India-based with global remote delivery capability.',
  },
  {
    icon: Shield,
    title: 'Security & Code Ownership',
    description: 'Full IP transfer, NDA protection, clean documented code.',
  }
];

export default function WhyCypherEdge() {
  return (
    <section className="why-section container">
      <div className="section-header-center">
        <span className="badge-neon">Why CypherEdge</span>
        <h2 className="section-title">Your Technology Partner, Not Just a Vendor</h2>
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
            </article>
          );
        })}
      </div>
    </section>
  );
}
