import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, ShieldCheck, CheckCircle2, Clock, Calendar, Users } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, getStoredUtmParams } from '../data/siteConfig';
import { trackForm, TRACK_EVENTS } from '../utils/analytics';
import CalendarEmbed from '../components/shared/CalendarEmbed';
import WhatHappensNext from '../components/sections/WhatHappensNext';
import './ContactPage.css';

export default function ContactPage({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Custom Software Development',
    budget: '',
    timeline: '',
    message: '',
    consent: false,
  });

  const whatsappUrl = getWhatsAppUrl();

  const handleFieldFocus = (fieldName) => {
    trackForm(TRACK_EVENTS.FORM_FIELD_FOCUS, 'contact_form', { field: fieldName });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const utmParams = getStoredUtmParams();
    trackForm(TRACK_EVENTS.FORM_SUBMIT, 'contact_form', {
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
      ...utmParams,
    });

    // Send email to techcypheredge@gmail.com via AJAX
    try {
      await fetch('https://formsubmit.co/ajax/techcypheredge@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry from ${formData.name} (${formData.company || 'Individual'})`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          company: formData.company || 'N/A',
          service: formData.service,
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          message: formData.message,
          ...utmParams
        })
      });
    } catch (err) {
      console.warn('FormSubmit AJAX fallback triggered mailto', err);
    }

    setSubmitted(true);
  };

  useEffect(() => {
    trackForm(TRACK_EVENTS.FORM_START, 'contact_form');
  }, []);

  return (
    <div className="contact-page-wrap container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="section-header-center">
        <span className="badge-neon"><Calendar size={13} /> Start a Conversation</span>
        <h1 className="section-title">
          Tell Us What You're Building
        </h1>
        <p className="section-subtitle">
          Whether it's an AI product, SaaS platform, mobile app, or you need dedicated engineers — we typically respond within {SITE_CONFIG.responseTimeHours} hours.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Contact Info & Calendar */}
        <div className="contact-info-panel glass-panel">
          <h3>Reach Us Directly</h3>
          <p>For technical inquiries, architecture reviews, staffing discussions, or project RFPs.</p>

          <div className="contact-detail-items">
            <div className="detail-item">
              <Mail className="detail-icon" />
              <div>
                <span className="detail-lbl">Email</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="detail-val">{SITE_CONFIG.email}</a>
              </div>
            </div>

            <div className="detail-item">
              <MapPin className="detail-icon" />
              <div>
                <span className="detail-lbl">Location</span>
                <span className="detail-val">{SITE_CONFIG.location}</span>
              </div>
            </div>

            <div className="detail-item">
              <Clock className="detail-icon" />
              <div>
                <span className="detail-lbl">Response Time</span>
                <span className="detail-val">Within {SITE_CONFIG.responseTimeHours} hours</span>
              </div>
            </div>
          </div>

          {whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-whatsapp-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          )}

          <div className="nda-box">
            <ShieldCheck size={20} className="text-emerald" />
            <div>
              <span className="nda-title">NDA Protected</span>
              <p className="nda-desc">We sign non-disclosure agreements before discussing confidential project details.</p>
            </div>
          </div>

          {/* Calendar Embed */}
          <div className="contact-calendar-section">
            <h4>Or schedule a call directly</h4>
            <CalendarEmbed inline={true} />
          </div>
        </div>

        {/* Right Column: Enhanced Contact Form */}
        <div className="contact-form-panel glass-panel">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Start a Project Conversation</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    onFocus={() => handleFieldFocus('name')}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    onFocus={() => handleFieldFocus('email')}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    onFocus={() => handleFieldFocus('company')}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    onFocus={() => handleFieldFocus('phone')}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>What do you need?</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  onFocus={() => handleFieldFocus('service')}
                  className="form-input"
                >
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="AI Agents & RAG Systems">AI Agents & RAG Systems</option>
                  <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                  <option value="Mobile App Development">Native iOS / Android App Development</option>
                  <option value="Enterprise Cloud & DevOps">Enterprise Cloud & DevOps</option>
                  <option value="IT Staffing & Dedicated Teams">IT Staffing & Dedicated Teams</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Estimated Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                    onFocus={() => handleFieldFocus('budget')}
                    className="form-input"
                  >
                    <option value="">Select budget range</option>
                    <option value="< $5,000">Less than $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 – $15,000</option>
                    <option value="$15,000 - $50,000">$15,000 – $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 – $100,000</option>
                    <option value="> $100,000">$100,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Ideal Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={e => setFormData({...formData, timeline: e.target.value})}
                    onFocus={() => handleFieldFocus('timeline')}
                    className="form-input"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1–3 months</option>
                    <option value="3-6 months">3–6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Ongoing / Dedicated Team">Ongoing / Dedicated Team</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Project Overview</label>
                <textarea
                  rows={4}
                  placeholder="Describe your vision, key challenges, or specific requirements..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  onFocus={() => handleFieldFocus('message')}
                  className="form-input textarea"
                />
              </div>

              <div className="form-group consent-group">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={e => setFormData({...formData, consent: e.target.checked})}
                  />
                  <span>I agree to be contacted about my project inquiry. CypherEdge will not share my data with third parties.</span>
                </label>
              </div>

              <button type="submit" className="btn-glow w-full" disabled={!formData.consent}>
                Submit Project Request <Send size={16} />
              </button>
            </form>
          ) : (
            <div className="submission-success-box animate-fade-in" style={{ padding: '3rem 1rem' }}>
              <CheckCircle2 size={48} className="text-emerald" />
              <h3>Message Received!</h3>
              <p>Thank you, <strong>{formData.name}</strong>. Our engineering team will review your inquiry and reach out at <strong>{formData.email}</strong> within {SITE_CONFIG.responseTimeHours} hours.</p>
              {formData.company && <p className="success-company">Company: {formData.company}</p>}
            </div>
          )}
        </div>
      </div>
      <WhatHappensNext />
    </div>
  );
}
