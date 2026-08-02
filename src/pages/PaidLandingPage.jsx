import { useState, useEffect } from 'react';
import { CheckCircle, Shield, TrendingUp, ArrowRight, Activity } from 'lucide-react';
import CalendarEmbed from '../components/shared/CalendarEmbed';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import './PaidLandingPage.css';

const VARIANTS = {
  'hire-ai-developers': {
    badge: 'Hire AI Developers',
    headline: 'Integrate LLMs & AI Features in Weeks, Not Months',
    subheadline: 'Augment your team with senior AI engineers specialized in LangChain, OpenAI, and custom predictive models.',
    pains: ['Struggling to find qualified AI talent', 'Falling behind competitors launching AI features', 'Wasting time on bad hires'],
    solutions: ['Vetted Senior AI Engineers', 'Ready to deploy in 7-14 days', 'Zero recruitment fees', 'Seamless time-zone overlap']
  },
  'custom-saas-development': {
    badge: 'SaaS Development',
    headline: 'Build Scalable SaaS Platforms from Scratch',
    subheadline: 'End-to-end product engineering for startups and enterprises. We architect for scale, security, and speed.',
    pains: ['Slow time to market', 'Unstable MVP architecture', 'Inconsistent UX/UI'],
    solutions: ['Full-stack dedicated pods', 'Cloud-native architecture', 'Rigorous automated QA', 'Agile delivery methodology']
  },
  'it-staffing': {
    badge: 'IT Staffing',
    headline: 'Scale Your Engineering Capacity Instantly',
    subheadline: 'Top 3% LATAM & Global talent. Skip the 3-month hiring cycle and start shipping code next week.',
    pains: ['High local developer salaries', 'Painfully slow hiring cycles', 'Retention and turnover issues'],
    solutions: ['Access top 3% global talent', 'Save up to 40% on engineering costs', 'Fully managed HR & compliance', 'Risk-free 2-week trial']
  }
};

export default function PaidLandingPage({ variant = 'it-staffing', onNavigate }) {
  const data = VARIANTS[variant] || VARIANTS['it-staffing'];
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Simulated UTM capture
    console.log('UTM params captured');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In real app, track event and send data
  };

  return (
    <div className="landing-page">
      {/* Minimal Nav */}
      <nav className="minimal-nav container">
        <div className="logo" onClick={() => onNavigate('#home')} style={{cursor: 'pointer'}}>
          <span className="text-gradient-neon" style={{fontWeight: 700, fontSize: '1.5rem'}}>CypherEdge</span>
        </div>
      </nav>

      <div className="landing-layout container">
        {/* Left Column: Copy & Value Prop */}
        <div className="landing-content">
          <div className="badge-neon small">{data.badge}</div>
          <h1 className="landing-headline">{data.headline}</h1>
          <p className="landing-subhead">{data.subheadline}</p>

          <div className="benefits-grid">
            <div className="pains glass-panel">
              <h4>The Challenge</h4>
              <ul>
                {data.pains.map((p, i) => <li key={i}><Activity size={16} className="text-accent-amber"/> {p}</li>)}
              </ul>
            </div>
            <div className="solutions glass-panel">
              <h4>Our Solution</h4>
              <ul>
                {data.solutions.map((s, i) => <li key={i}><CheckCircle size={16} className="text-accent-emerald"/> {s}</li>)}
              </ul>
            </div>
          </div>
          
          <div className="proof-banner glass-panel mt-4">
            <div className="proof-item">
              <span className="proof-val">3x</span>
              <span className="proof-label">Faster Time to Market</span>
            </div>
            <div className="proof-item">
              <span className="proof-val">100+</span>
              <span className="proof-label">Projects Shipped</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form / Action */}
        <div className="landing-action">
          <div className="form-card glass-panel">
            {submitted ? (
              <div className="success-state">
                <CheckCircle size={48} className="text-accent-emerald mb-4 mx-auto" />
                <h3>Request Received</h3>
                <p>An expert will be in touch within 24 hours.</p>
                <div className="mt-8">
                  <p className="text-sm text-muted mb-4">Want to speak sooner?</p>
                  <CalendarEmbed inline={false} />
                </div>
              </div>
            ) : (
              <>
                <h3>Get a Free Proposal</h3>
                <p className="text-muted mb-4">Fill out the form below and our technical leads will assess your requirements.</p>
                <form onSubmit={handleSubmit} className="lead-form">
                  <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input type="email" placeholder="Work Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <input type="text" placeholder="Company Name" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  <textarea placeholder="Tell us about your project or resource needs..." rows="3" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  <button type="submit" className="btn-glow w-full mt-4">Request Proposal</button>
                </form>
                <p className="secure-note"><Shield size={14}/> Your information is secure and confidential.</p>
              </>
            )}
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
