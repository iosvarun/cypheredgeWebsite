import React from 'react';
import { Smartphone, Globe, Server, Cpu, Palette, ArrowRight } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'We craft high-performance iOS and Android applications. From concept to deployment on the Apple App Store and Google Play, we build fluid native experiences.',
    capabilities: ['Swift & SwiftUI', 'Kotlin & Jetpack Compose', 'Cross-Platform Solutions', 'App Store Optimization'],
    tint: 'primary'
  },
  {
    icon: Cpu,
    title: 'AI & Agentic Solutions',
    description: 'Integrate intelligent automation and decision-making into your core systems. We construct custom AI agents, LLM pipelines, and automated agent workflows.',
    capabilities: ['Autonomous AI Agents', 'LLM Fine-Tuning & RAG', 'Predictive Analysis', 'Natural Language Workflows'],
    tint: 'accent'
  },
  {
    icon: Globe,
    title: 'Web Engineering',
    description: 'We develop beautiful, ultra-fast websites and web applications. Utilizing modern front-end frameworks, we prioritize responsive layouts and rich micro-interactions.',
    capabilities: ['React & Next.js', 'Vite Bundling', 'High-Performance UI/UX', 'SEO Best Practices'],
    tint: 'purple'
  },
  {
    icon: Server,
    title: 'Backend & Cloud Systems',
    description: 'Establish secure, fast, and scalable infrastructures. We build robust microservices, custom APIs, database systems, and secure server deployments.',
    capabilities: ['Node.js & Python', 'Scalable Microservices', 'SQL & NoSQL Databases', 'Cloud Deployment & DevOps'],
    tint: 'orange'
  },
  {
    icon: Palette,
    title: 'UI/UX Design & Branding',
    description: 'Create memorable brand identities. We craft aesthetic design systems, interactive prototypes, and premium user journeys that increase user engagement.',
    capabilities: ['Wireframing & Prototyping', 'Design Systems Creation', 'Visual Identity Systems', 'Premium Animations'],
    tint: 'pink'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Expertise</span>
          <h2>Digital Solutions, <span className="text-gradient-neon">Engineered for Growth</span></h2>
          <p>We deliver next-generation technological solutions for startups and enterprises, ensuring high reliability and a clean technological edge.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="glass-card service-card">
                <div className={`service-icon-wrapper tint-${service.tint}`}>
                  <IconComponent size={24} className="service-icon" />
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                
                <ul className="service-capabilities">
                  {service.capabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="capability-item">
                      <span className="bullet"></span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="service-footer">
                  <a href="#contact" className="service-link">
                    <span>Discuss Project</span>
                    <ArrowRight size={16} className="arrow-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
