import React, { useState } from 'react';
import { trackForm } from '../../utils/analytics';
import './LeadMagnet.css';

export default function LeadMagnet() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (typeof trackForm === 'function') {
        trackForm('lead_magnet_assessment', formData);
      }
      // Submit to formsubmit.co
      await fetch('https://formsubmit.co/ajax/admin@cypheredge.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `AI Readiness Assessment Request from ${formData.name} (${formData.company || 'Individual'})`,
          name: formData.name,
          email: formData.email,
          company: formData.company || 'N/A',
          interest: formData.interest,
          _source: 'LeadMagnet - AI Readiness Assessment',
        })
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      // Still show success to user even if network fails
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="lead-magnet-section container">
        <div className="lead-magnet-card glass-panel success-state">
          <h3 className="success-title">Thank you, {formData.name || 'there'}.</h3>
          <p className="success-message">
            We'll send your assessment to <strong>{formData.email}</strong> within 48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="lead-magnet-section container">
      <div className="lead-magnet-card glass-panel">
        <div className="lead-magnet-header">
          <h2 className="lead-magnet-title">Get a Free AI Readiness Assessment</h2>
          <p className="lead-magnet-subtitle">
            Answer a few questions about your business, and our team will send you a personalized assessment of where AI can create the most impact — including practical next steps.
          </p>
        </div>

        <form className="lead-magnet-form" onSubmit={handleSubmit} aria-label="AI Readiness Assessment Form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Jane Doe"
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Business Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jane@company.com"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Acme Corp"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="interest" className="form-label">What's your primary interest?</label>
            <select
              id="interest"
              name="interest"
              className="form-select"
              value={formData.interest}
              onChange={handleChange}
              required
              aria-required="true"
            >
              <option value="" disabled>Select an option...</option>
              <option value="AI/Automation">AI/Automation</option>
              <option value="Custom Software">Custom Software</option>
              <option value="SaaS Development">SaaS Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="IT Staffing">IT Staffing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn-glow submit-btn" 
            disabled={isSubmitting}
            aria-label="Submit assessment request"
          >
            {isSubmitting ? 'Submitting...' : 'Request My Assessment'}
          </button>
          
          <p className="privacy-note">
            We respect your privacy. No spam, no selling your data.
          </p>
        </form>
      </div>
    </section>
  );
}
