import { ArrowRight, CheckCircle, ChevronDown, Activity, Shield, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import './IndustryPage.css';

// Fallback dynamic data since we don't have industryData.js locally generated yet
const DUMMY_INDUSTRY_DATA = {
  'fintech': {
    name: 'FinTech',
    headline: 'Secure & Scalable FinTech Engineering',
    subtitle: 'Build resilient financial applications that comply with global regulations and handle high-throughput transactions seamlessly.',
    problems: [
      'Legacy systems slowing down innovation',
      'Complex security and compliance (PCI-DSS, GDPR)',
      'Scaling issues during peak transaction times'
    ],
    solutions: [
      { title: 'Core Banking Systems', desc: 'Modernize legacy core systems with cloud-native microservices.' },
      { title: 'Payment Gateways', desc: 'High-availability, secure payment routing and processing engines.' },
      { title: 'Wealth Management', desc: 'Robo-advisory and portfolio management platforms.' },
      { title: 'RegTech Solutions', desc: 'Automated compliance, KYC, and AML integration.' }
    ],
    faqs: [
      { q: 'How do you handle security?', a: 'We employ bank-grade encryption, secure SDLC, and regular penetration testing.' },
      { q: 'Can you integrate with legacy systems?', a: 'Yes, we build secure API layers to safely connect modern apps with legacy mainframes.' }
    ]
  },
  'healthcare': {
    name: 'Healthcare Tech',
    headline: 'Compliant Healthcare Software Solutions',
    subtitle: 'Empower providers and patients with secure, HIPAA-compliant digital health applications and interoperable systems.',
    problems: [
      'Strict HIPAA compliance requirements',
      'Fragmented patient data across EHRs',
      'Outdated telemedicine capabilities'
    ],
    solutions: [
      { title: 'EHR Integrations', desc: 'HL7/FHIR compliant data exchange systems.' },
      { title: 'Telemedicine Apps', desc: 'Secure video consultation and remote monitoring platforms.' },
      { title: 'Patient Portals', desc: 'Intuitive access to health records and appointment scheduling.' },
      { title: 'Health Analytics', desc: 'Predictive models for patient outcomes and resource allocation.' }
    ],
    faqs: [
      { q: 'Are your solutions HIPAA compliant?', a: 'Absolutely. All healthcare solutions are designed with HIPAA, HITECH, and SOC2 compliance from day one.' },
      { q: 'Do you have experience with FHIR?', a: 'Yes, our engineers have deep expertise in building interoperability layers using HL7 FHIR standards.' }
    ]
  }
};

export default function IndustryPage({ industrySlug, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Use fallback data
  const data = DUMMY_INDUSTRY_DATA[industrySlug];

  if (!data) {
    return (
      <div className="industry-page-not-found container glass-panel">
        <h2>Industry Not Found</h2>
        <p>The requested industry profile could not be located.</p>
        <button className="btn-glow mt-4" onClick={() => onNavigate('#home')}>Back to Home</button>
      </div>
    );
  }

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="industry-page">
      {/* Hero */}
      <section className="industry-hero">
        <div className="container">
          <div className="badge-neon">{data.name} Solutions</div>
          <h1 className="hero-title">{data.headline}</h1>
          <p className="hero-subtitle">{data.subtitle}</p>
          <div className="hero-actions">
            <button className="btn-glow" onClick={() => onNavigate('#contact')}>
              Discuss Your Project <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="industry-solutions section-padding">
        <div className="container">
          <div className="solutions-layout">
            <div className="problems-column glass-panel">
              <h3>Key Industry Challenges</h3>
              <ul className="problems-list">
                {data.problems.map((prob, idx) => (
                  <li key={idx}>
                    <Activity size={20} className="text-accent-amber" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="solutions-grid-wrapper">
              <h3>Our Core Offerings</h3>
              <div className="solutions-grid">
                {data.solutions.map((sol, idx) => (
                  <div key={idx} className="solution-card glass-panel">
                    <h4>{sol.title}</h4>
                    <p>{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="industry-faq section-padding">
        <div className="container">
          <div className="section-header-center">
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list">
            {data.faqs.map((faq, idx) => (
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

      {/* CTA */}
      <section className="industry-cta section-padding" id="contact">
        <div className="container text-center">
          <h2>Ready to transform your {data.name} platform?</h2>
          <p className="mt-4 text-muted">Connect with our industry specialists today.</p>
          <button className="btn-glow mt-8 mx-auto" onClick={() => onNavigate('#contact')}>
            Book a Strategy Call
          </button>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
