import React from 'react';
import { 
  Code, MessageSquare, RefreshCw, BarChart3, 
  GitBranch, ShieldCheck, Users, Headphones 
} from 'lucide-react';
import './TrustSignals.css';

const trustSignalsData = [
  {
    icon: Code,
    title: 'Source Code Ownership',
    description: 'You own 100% of the code we write. Full IP transfer on delivery.'
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Weekly updates, shared dashboards, and direct access to engineers.'
  },
  {
    icon: RefreshCw,
    title: 'Agile Development',
    description: 'Iterative sprints with regular demos so you see progress every week.'
  },
  {
    icon: BarChart3,
    title: 'Weekly Progress Updates',
    description: 'Detailed reports on what was built, what is next, and any blockers.'
  },
  {
    icon: GitBranch,
    title: 'Modern Development Practices',
    description: 'CI/CD, code reviews, automated testing, and infrastructure as code.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Development Lifecycle',
    description: 'Security-first approach with encryption, access controls, and audits.'
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Team',
    description: 'Your project gets a focused team, not shared resources across clients.'
  },
  {
    icon: Headphones,
    title: 'Long-Term Support',
    description: 'Post-launch monitoring, bug fixes, feature updates, and scaling support.'
  }
];

const TrustSignals = () => {
  return (
    <section className="trust-signals section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="badge-neon">Our Commitments</span>
          <h2 className="section-title text-main">How We Earn Your Trust</h2>
        </div>

        <div className="trust-signals-grid">
          {trustSignalsData.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div key={index} className="trust-card glass-panel">
                <div className="trust-icon-container">
                  <Icon size={24} className="text-cyan" />
                </div>
                <h3 className="trust-title text-main">{signal.title}</h3>
                <p className="trust-desc text-muted">{signal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
