import { Users, Zap, Shield, Clock, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import CalendarEmbed from '../components/shared/CalendarEmbed';
import './ITStaffingPage.css';

// Fallback data in case imports fail
const staffingDetails = {
  roles: [
    { title: 'AI/ML Engineers', desc: 'LLM integration, predictive models, data pipelines.' },
    { title: 'Frontend Engineers', desc: 'React, Vue, modern UI/UX implementation.' },
    { title: 'Backend Engineers', desc: 'Node.js, Python, Go, scalable microservices.' },
    { title: 'Mobile Developers', desc: 'React Native, iOS, Android native apps.' },
    { title: 'QA Automation', desc: 'End-to-end testing, CI/CD integration, reliable coverage.' },
    { title: 'DevOps & Cloud', desc: 'AWS, Azure, infrastructure as code, deployments.' },
  ],
  engagementModels: [
    { name: 'Dedicated Developer', detail: 'Augment your team with a specialized engineer working exclusively on your product.' },
    { name: 'Engineering Pod', detail: 'A cross-functional team (PM, Devs, QA) delivering end-to-end features autonomously.' },
    { name: 'Project-Based', detail: 'Fixed-scope delivery for specific modules or entire applications.' }
  ],
  advantages: [
    'Rigorous 4-stage vetting process (top 3% talent)',
    'Seamless time-zone overlap for agile ceremonies',
    'Rapid onboarding within 7-14 days',
    'Ongoing performance management and training',
    'Strict IP protection and security protocols'
  ]
};

const faqs = [
  { q: 'How fast can you augment our team?', a: 'We typically match and onboard engineers within 7-14 days, depending on the specific tech stack and role requirements.' },
  { q: 'Where are your developers located?', a: 'Our talent pool is distributed globally, allowing us to build teams with overlapping hours for your specific timezone (e.g., US EST/PST, GMT).' },
  { q: 'What happens if a developer is not a good fit?', a: 'We offer a risk-free 2-week trial. If the fit isn’t perfect, we’ll immediately provide a replacement at no additional cost.' },
  { q: 'Do you handle payroll and compliance?', a: 'Yes. We handle all HR, payroll, benefits, and local compliance so you can focus entirely on engineering output.' }
];

export default function ITStaffingPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="it-staffing-page">
      {/* Hero Section */}
      <section className="staffing-hero">
        <div className="container">
          <div className="badge-neon">IT Staffing & Augmentation</div>
          <h1 className="hero-title">Dedicated Engineers & <br/><span className="text-gradient-neon">Full Teams, On Demand</span></h1>
          <p className="hero-subtitle">
            Scale your engineering capacity instantly with rigorously vetted talent. 
            Fast onboarding, flexible engagement, zero administrative overhead.
          </p>
          <div className="hero-actions">
            <button className="btn-glow" onClick={() => onNavigate('#contact')}>
              Build Your Team
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="staffing-roles section-padding">
        <div className="container">
          <div className="section-header-center">
            <h2>What We Staff</h2>
            <p>We provide specialized talent across the modern technology stack.</p>
          </div>
          <div className="roles-grid">
            {staffingDetails.roles.map((role, idx) => (
              <div key={idx} className="role-card glass-panel">
                <div className="role-icon"><Users size={24} /></div>
                <h3>{role.title}</h3>
                <p>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="staffing-models section-padding">
        <div className="container">
          <div className="section-header-center">
            <h2>Engagement Models</h2>
            <p>Flexible setups designed to integrate seamlessly with your workflow.</p>
          </div>
          <div className="models-grid">
            {staffingDetails.engagementModels.map((model, idx) => (
              <div key={idx} className="model-card glass-panel">
                <h3>{model.name}</h3>
                <p>{model.detail}</p>
                <ul className="model-features">
                  <li><CheckCircle size={16} className="text-accent" /> Flexible scaling</li>
                  <li><CheckCircle size={16} className="text-accent" /> Direct communication</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="staffing-advantages section-padding">
        <div className="container">
          <div className="advantages-layout">
            <div className="advantages-content">
              <h2>Why Our Teams Outperform</h2>
              <p className="text-muted">We don't just provide resumes; we provide proven performers ready to commit code.</p>
              <ul className="advantages-list">
                {staffingDetails.advantages.map((adv, idx) => (
                  <li key={idx}>
                    <div className="adv-icon"><Zap size={20} /></div>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="advantages-visual glass-panel">
              <div className="stat-box">
                <div className="stat-value text-gradient-neon">Top 3%</div>
                <div className="stat-label">Vetted Talent</div>
              </div>
              <div className="stat-box">
                <div className="stat-value text-gradient-neon">7 Days</div>
                <div className="stat-label">Average Onboarding</div>
              </div>
              <div className="stat-box">
                <div className="stat-value text-gradient-neon">95%</div>
                <div className="stat-label">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="staffing-faq section-padding">
        <div className="container">
          <div className="section-header-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item glass-panel ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-q">
                  <h3>{faq.q}</h3>
                  <ChevronDown size={20} className="faq-icon" />
                </div>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="staffing-cta section-padding" id="contact">
        <div className="container">
          <div className="cta-wrapper glass-panel">
            <h2>Ready to scale your engineering?</h2>
            <p>Book a discovery call to discuss your talent requirements and timelines.</p>
            <div className="cta-embed">
              <CalendarEmbed inline={false} />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
