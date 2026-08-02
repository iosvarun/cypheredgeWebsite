import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Send, ShieldCheck, DollarSign, Clock } from 'lucide-react';
import './EstimatorSection.css';

export default function EstimatorSection({ onNavigate }) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("AI Agent / RAG Engine");
  const [platforms, setPlatforms] = useState(["iOS Native", "Web App"]);
  const [aiLevel, setAiLevel] = useState("RAG & Vector Search");
  const [timeline, setTimeline] = useState("Standard (2-3 Months)");
  
  // Contact Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const togglePlatform = (plat) => {
    if (platforms.includes(plat)) {
      setPlatforms(platforms.filter(p => p !== plat));
    } else {
      setPlatforms([...platforms, plat]);
    }
  };

  // Estimated range logic
  const getEstimatedCostRange = () => {
    let base = 5000;
    if (projectType.includes("Full Product")) base += 12000;
    if (projectType.includes("AI Agent")) base += 7000;
    if (platforms.length > 2) base += 4000;
    if (aiLevel.includes("Custom Fine-Tuning")) base += 6000;
    
    return `$${(base / 1000).toFixed(0)}k – $${((base * 1.6) / 1000).toFixed(0)}k USD`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="estimator-section-wrap container">
      <div className="section-header-center">
        <span className="badge-neon"><Calculator size={13} /> Interactive Cost Calculator</span>
        <h2 className="section-title">
          Estimate Your Project <br />
          <span className="text-gradient-neon">Timeline &amp; Engineering Investment</span>
        </h2>
        <p className="section-subtitle">
          Select your requirements below to calculate an instant architectural scope summary and book a free priority consultation with our Staff Engineers.
        </p>
      </div>

      <div className="estimator-card glass-panel animate-fade-in">
        {/* Step Indicator */}
        <div className="estimator-steps-nav">
          <button className={`step-btn ${step === 1 ? 'active' : ''}`} onClick={() => setStep(1)}>1. Project Type</button>
          <button className={`step-btn ${step === 2 ? 'active' : ''}`} onClick={() => setStep(2)}>2. Platforms</button>
          <button className={`step-btn ${step === 3 ? 'active' : ''}`} onClick={() => setStep(3)}>3. AI Features</button>
          <button className={`step-btn ${step === 4 ? 'active' : ''}`} onClick={() => setStep(4)}>4. Timeline</button>
          <button className={`step-btn ${step === 5 ? 'active' : ''}`} onClick={() => setStep(5)}>5. Estimate &amp; Book</button>
        </div>

        {/* STEP 1: Project Type */}
        {step === 1 && (
          <div className="estimator-step-content">
            <h4>Select Primary Focus:</h4>
            <div className="options-grid">
              {[
                "AI Agent / RAG Engine",
                "Native Mobile Application (iOS/Android)",
                "Full-Stack SaaS Web App",
                "Cloud Backend & Microservices API",
                "Complete End-to-End Product Build"
              ].map((type, i) => (
                <div 
                  key={i} 
                  className={`option-card ${projectType === type ? 'selected' : ''}`}
                  onClick={() => setProjectType(type)}
                >
                  <CheckCircle2 size={18} className="option-check" />
                  <span>{type}</span>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn-glow" onClick={() => setStep(2)}>Next: Platforms <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* STEP 2: Platforms */}
        {step === 2 && (
          <div className="estimator-step-content">
            <h4>Target Platforms (Select all that apply):</h4>
            <div className="options-grid">
              {["iOS Native (Swift)", "Android Native (Kotlin)", "Cross-Platform (Flutter)", "Web Application (React/Next)", "AWS / GCP Cloud Architecture"].map((plat, i) => (
                <div 
                  key={i} 
                  className={`option-card ${platforms.includes(plat) ? 'selected' : ''}`}
                  onClick={() => togglePlatform(plat)}
                >
                  <CheckCircle2 size={18} className="option-check" />
                  <span>{plat}</span>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
              <button className="btn-glow" onClick={() => setStep(3)}>Next: AI Capabilities <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* STEP 3: AI Requirements */}
        {step === 3 && (
          <div className="estimator-step-content">
            <h4>Artificial Intelligence Integration:</h4>
            <div className="options-grid">
              {[
                "RAG & Vector Search (Qdrant/Pinecone)",
                "Autonomous Multi-Agent Orchestration",
                "Custom LLM Fine-Tuning & Quantization",
                "Computer Vision & Document OCR Processing",
                "None / Standard Software Engineering"
              ].map((ai, i) => (
                <div 
                  key={i} 
                  className={`option-card ${aiLevel === ai ? 'selected' : ''}`}
                  onClick={() => setAiLevel(ai)}
                >
                  <CheckCircle2 size={18} className="option-check" />
                  <span>{ai}</span>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn-secondary" onClick={() => setStep(2)}>Back</button>
              <button className="btn-glow" onClick={() => setStep(4)}>Next: Timeline <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* STEP 4: Timeline */}
        {step === 4 && (
          <div className="estimator-step-content">
            <h4>Desired Launch Timeline:</h4>
            <div className="options-grid">
              {[
                "Accelerated MVP (4 to 6 Weeks)",
                "Standard (2 to 3 Months)",
                "Enterprise Scale (3 to 6+ Months)"
              ].map((t, i) => (
                <div 
                  key={i} 
                  className={`option-card ${timeline === t ? 'selected' : ''}`}
                  onClick={() => setTimeline(t)}
                >
                  <CheckCircle2 size={18} className="option-check" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn-secondary" onClick={() => setStep(3)}>Back</button>
              <button className="btn-glow" onClick={() => setStep(5)}>Calculate Summary <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* STEP 5: Instant Estimate Summary & Priority Booking */}
        {step === 5 && (
          <div className="estimator-step-content summary-step">
            <div className="estimate-summary-bar">
              <div className="sum-box">
                <span className="sum-label">PROJECT TYPE</span>
                <span className="sum-val">{projectType}</span>
              </div>
              <div className="sum-box">
                <span className="sum-label">ESTIMATED INVESTMENT RANGE</span>
                <span className="sum-val text-cyan">{getEstimatedCostRange()}</span>
              </div>
              <div className="sum-box">
                <span className="sum-label">TARGET LAUNCH</span>
                <span className="sum-val">{timeline}</span>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="estimator-contact-form">
                <h4>Book Priority Engineering Consultation</h4>
                <p className="form-sub">Our Staff Architect will review your scope and provide a detailed technical blueprint within 24 hours.</p>

                <div className="form-inputs-grid">
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    required 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    className="form-input" 
                  />
                  <input 
                    type="email" 
                    placeholder="Work / Business Email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="form-input" 
                  />
                </div>

                <textarea 
                  placeholder="Tell us briefly about your project goals or specific requirements..." 
                  rows={3} 
                  value={message} 
                  onChange={e => setMessage(e.target.value)} 
                  className="form-input textarea" 
                />

                <div className="form-submit-row">
                  <div className="security-guarantee">
                    <ShieldCheck size={16} className="text-emerald" />
                    <span>Strict NDA &amp; IP Protection Guaranteed</span>
                  </div>
                  <button type="submit" className="btn-glow">
                    Request Architecture Call <Send size={16} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="submission-success-box animate-fade-in">
                <CheckCircle2 size={48} className="text-emerald" />
                <h3>Scope Request Received!</h3>
                <p>Thank you, <strong>{name}</strong>. Our Staff Architect has received your project specifications and will email you directly at <strong>{email}</strong> within 24 hours.</p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>Modify Requirements</button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
