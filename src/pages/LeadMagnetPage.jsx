import { useState } from 'react';
import { Brain, CheckCircle, Lock, ArrowRight } from 'lucide-react';
import './LeadMagnetPage.css';

export default function LeadMagnetPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', industry: '', teamSize: '', challenge: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tracking logic goes here
    setSubmitted(true);
  };

  return (
    <div className="lead-magnet-page">
      <nav className="minimal-nav container">
        <div className="logo" onClick={() => onNavigate('#home')} style={{cursor: 'pointer'}}>
          <span className="text-gradient-neon" style={{fontWeight: 700, fontSize: '1.5rem'}}>CypherEdge</span>
        </div>
      </nav>

      <div className="lm-container container">
        <div className="lm-content">
          <div className="badge-neon mb-4">Free AI Readiness Assessment</div>
          <h1 className="lm-title">Is Your Engineering Infrastructure Ready for AI?</h1>
          <p className="lm-desc">
            Implementing Large Language Models and AI features requires specific architectural patterns, data pipelines, and security protocols. Discover your blind spots before writing a single line of code.
          </p>
          
          <div className="lm-what-you-get glass-panel mt-8">
            <h3>What you'll receive:</h3>
            <ul className="lm-list">
              <li><CheckCircle className="text-accent-emerald" size={20}/> <strong>Architecture Review:</strong> Assessment of your current tech stack for AI integration.</li>
              <li><CheckCircle className="text-accent-emerald" size={20}/> <strong>Security Audit:</strong> Data privacy analysis for LLM usage (PII masking, localized models).</li>
              <li><CheckCircle className="text-accent-emerald" size={20}/> <strong>Actionable Roadmap:</strong> A 90-day technical roadmap to deploy your first AI feature.</li>
            </ul>
          </div>
        </div>

        <div className="lm-form-wrapper">
          <div className="form-card glass-panel">
            {submitted ? (
              <div className="success-state text-center">
                <Brain size={48} className="text-primary-violet mb-4 mx-auto" />
                <h3>Request Submitted</h3>
                <p className="mt-4 text-muted">Our AI architecture team will review your details and contact you within 24 hours to schedule the assessment.</p>
                <button className="btn-secondary mt-8" onClick={() => onNavigate('#home')}>Return Home</button>
              </div>
            ) : (
              <>
                <h3 className="mb-2">Request Your Assessment</h3>
                <p className="text-muted text-sm mb-6">Valued at $2,500. Free for qualified teams.</p>
                
                <form onSubmit={handleSubmit} className="lm-form">
                  <div className="form-row">
                    <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <input type="email" placeholder="Work Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <input type="text" placeholder="Company Name" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  
                  <div className="form-row">
                    <select required value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})}>
                      <option value="" disabled>Select Industry</option>
                      <option value="fintech">FinTech</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="saas">B2B SaaS</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Other</option>
                    </select>
                    <select required value={formData.teamSize} onChange={e => setFormData({...formData, teamSize: e.target.value})}>
                      <option value="" disabled>Eng Team Size</option>
                      <option value="1-10">1-10 Developers</option>
                      <option value="11-50">11-50 Developers</option>
                      <option value="50+">50+ Developers</option>
                    </select>
                  </div>
                  
                  <textarea 
                    placeholder="What is your primary engineering challenge regarding AI?" 
                    rows="3" 
                    required 
                    value={formData.challenge} 
                    onChange={e => setFormData({...formData, challenge: e.target.value})}
                  ></textarea>
                  
                  <button type="submit" className="btn-glow w-full mt-4">
                    Claim Assessment <ArrowRight size={18}/>
                  </button>
                </form>
                <div className="secure-badge mt-6 text-center text-dim">
                  <Lock size={14} className="inline mr-2"/> 100% Secure. We never share your data.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
