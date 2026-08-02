import React from 'react';
import * as LucideIcons from 'lucide-react';
import Breadcrumb from '../components/shared/Breadcrumb';
import RelatedLinks from '../components/shared/RelatedLinks';
import FAQAccordion from '../components/shared/FAQAccordion';
import './ServiceDetailPage.css';

// Mock data import - assume it exists
import { SERVICE_DETAILS_DATA } from '../data/serviceDetailsData';

const getIcon = (iconName) => {
  const Icon = LucideIcons[iconName];
  return Icon ? <Icon size={24} className="icon-cyan" /> : <LucideIcons.CheckCircle size={24} className="icon-cyan" />;
};

const ServiceDetailPage = ({ serviceSlug, onNavigate }) => {
  const service = SERVICE_DETAILS_DATA?.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="page-wrapper container">
        <h1 style={{ color: '#fff' }}>Service not found</h1>
        <button className="btn-glow" onClick={() => onNavigate('/')}>Return Home</button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: service.title, path: `/services/${service.slug}` }
  ];

  return (
    <div className="page-wrapper">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        
        {/* Hero Section */}
        <section className="service-hero">
          <h1 className="service-headline">{service.title}</h1>
          <p className="service-subtext">{service.subtext}</p>
          <div className="service-hero-actions">
            <button className="btn-glow">Get a Free Consultation</button>
          </div>
          <div className="trust-pill">
            <LucideIcons.ShieldCheck size={16} />
            <span>NDA-Protected • Direct Engineer Access</span>
          </div>
        </section>

        {/* Business Problems Section */}
        {service.problems && (
          <section className="service-section">
            <div className="section-header-center">
              <span className="badge-neon">The Challenge</span>
              <h2>Business Problems We Solve</h2>
            </div>
            <div className="problems-grid">
              {service.problems.map((prob, i) => (
                <div key={i} className="problem-card glass-panel">
                  {getIcon(prob.icon)}
                  <h3>{prob.title}</h3>
                  <p>{prob.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solutions Section */}
        {service.solutions && (
          <section className="service-section">
            <div className="section-header-center">
              <span className="badge-neon">Our Approach</span>
              <h2>How We Solve It</h2>
            </div>
            <div className="solutions-grid">
              {service.solutions.map((sol, i) => (
                <div key={i} className="solution-card glass-panel">
                  {getIcon(sol.icon)}
                  <h3>{sol.title}</h3>
                  <p>{sol.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process Section */}
        {service.process && (
          <section className="service-section">
            <div className="section-header-center">
              <span className="badge-neon">Our Process</span>
              <h2>How We Deliver</h2>
            </div>
            <div className="process-timeline">
              {service.process.map((step, i) => (
                <div key={i} className="process-step">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content glass-panel">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        {service.technologies && (
          <section className="service-section">
            <div className="section-header-center">
              <span className="badge-neon">Technology</span>
              <h2>Technologies We Use</h2>
            </div>
            <div className="tech-pills-grid">
              {service.technologies.map((tech, i) => (
                <div key={i} className="tech-pill glass-panel">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-purpose">{tech.purpose}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Architecture Section */}
        {service.architecture && (
          <section className="service-section">
            <div className="section-header-center">
              <span className="badge-neon">Architecture</span>
              <h2>Architecture Decisions</h2>
            </div>
            <ul className="architecture-list glass-panel">
              {service.architecture.map((item, i) => (
                <li key={i}>
                  <LucideIcons.Check size={20} className="icon-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Case Studies */}
        {service.caseStudies && (
          <RelatedLinks 
            title="Related Case Studies" 
            items={service.caseStudies} 
            onNavigate={onNavigate} 
          />
        )}

        {/* FAQ Section */}
        {service.faqs && (
          <section className="service-section">
            <FAQAccordion faqs={service.faqs} />
          </section>
        )}

        {/* CTA Section */}
        <section className="service-cta-section glass-panel">
          <h2>Ready to get started?</h2>
          <p>{service.ctaText || "Let's build something great together."}</p>
          <button className="btn-glow">Contact Us</button>
        </section>

        {/* Related Services */}
        {service.relatedServices && (
          <RelatedLinks 
            title="Related Services" 
            items={service.relatedServices} 
            onNavigate={onNavigate} 
          />
        )}

      </div>
    </div>
  );
};

export default ServiceDetailPage;
