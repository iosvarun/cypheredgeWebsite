import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Solutions',
    budget: '$5,000 - $10,000',
    description: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    // Simulate sending email transmission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'AI Solutions',
        budget: '$5,000 - $10,000',
        description: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Information & Branding */}
          <div className="contact-info-panel">
            <span className="badge">Get in Touch</span>
            <h2 className="contact-panel-title">Let's Co-Engineer Your <span className="text-gradient-neon">Next Idea</span></h2>
            <p className="contact-panel-desc">
              Have a B2B requirement or an innovative mobile application concept? Fill out the service request form, and our sales team will set up an online demo meeting.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item glass-card">
                <div className="method-icon-wrap">
                  <Mail size={18} />
                </div>
                <div className="method-text">
                  <span>General Inquiry</span>
                  <a href="mailto:admin@cypheredge.in">admin@cypheredge.in</a>
                </div>
              </div>

              <div className="contact-method-item glass-card">
                <div className="method-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div className="method-text">
                  <span>Headquarters</span>
                  <p>Gurugram, Haryana, India</p>
                </div>
              </div>

              <div className="contact-method-item glass-card">
                <div className="method-icon-wrap">
                  <Clock size={18} />
                </div>
                <div className="method-text">
                  <span>Response Time</span>
                  <p>Active Consultation: Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Request Form */}
          <div className="contact-form-panel glass-panel">
            {formStatus === 'success' ? (
              <div className="success-state animate-fade">
                <div className="success-icon-wrap">
                  <ShieldCheck size={48} className="success-check-icon" />
                </div>
                <h3>Transmission Sent</h3>
                <p>
                  Thank you! Your request for service has been encrypted and delivered. Akash Verma and Varun Kumar will review the details and contact you shortly.
                </p>
                <button 
                  className="btn-glow" 
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="service-form">
                <h3 className="form-title">Request for Service</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Akash Verma"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Business Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      placeholder="e.g. CypherEdge Pvt. Ltd."
                      value={formData.company}
                      onChange={handleChange}
                      className="glass-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Core Service Needed</label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="glass-input glass-select"
                    >
                      <option value="AI Solutions">AI & Agentic Solutions</option>
                      <option value="App Development">Mobile App Development</option>
                      <option value="Web Engineering">Web Engineering</option>
                      <option value="Backend systems">Backend & Cloud Systems</option>
                      <option value="UI/UX Branding">UI/UX Design & Branding</option>
                      <option value="Other">Other / Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Estimated Project Budget</label>
                  <select 
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="glass-input glass-select"
                  >
                    <option value="<$5,000">&lt; $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                    <option value="$35,000+">$35,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Brief Project Objectives *</label>
                  <textarea 
                    id="description"
                    name="description"
                    required
                    rows="4"
                    placeholder="Describe what you want to build and the business problems we should solve together..."
                    value={formData.description}
                    onChange={handleChange}
                    className="glass-input glass-textarea"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <p className="form-error-msg">Please fill out all required fields marked with *.</p>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="btn-glow form-submit-btn"
                >
                  {formStatus === 'sending' ? (
                    <span>Encrypting Transmission...</span>
                  ) : (
                    <>
                      <span>Transmit Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
