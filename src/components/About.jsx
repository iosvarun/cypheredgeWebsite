import React from 'react';
import { Compass, Users, CheckCircle } from 'lucide-react';
import './About.css';

// Custom Brand Icons (removed in newer versions of lucide-react)
const Linkedin = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


export default function About() {
  const founders = [
    {
      name: "Akash Verma",
      role: "Founder & CEO",
      photo: "/assets/akash.png",
      bio: "Akash drives the strategic vision and client partnership growth at CypherEdge. He focuses on scaling commercial operations, identifying target client opportunities, and managing the company’s product launch roadmap.",
      linkedin: "https://linkedin.com",
      github: null
    },
    {
      name: "Varun Kumar",
      role: "Founder & CTO",
      photo: "/assets/varun.png",
      bio: "Varun orchestrates the core software engineering and AI architectures. As a hands-on developer, he oversees iOS application engineering, custom LLM configurations, and high-performance server microservices.",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid-layout">
          {/* Text Content */}
          <div className="about-narrative">
            <span className="badge">Who We Are</span>
            <h2 className="about-title">Pioneering a <span className="text-gradient-neon">Better Tomorrow</span></h2>
            
            <p className="narrative-paragraph">
              We’re a young and talented group of entrepreneurs and engineers with a groundbreaking idea designed to contribute towards a better tomorrow. We provide smart solutions for companies of all sizes and pride ourselves on our unparalleled, dedicated service.
            </p>
            
            <p className="narrative-paragraph">
              At <strong>CypherEdge Pvt. Ltd.</strong>, we believe that the right understanding and technological edge can lead companies towards a successful future. We combine consumer mobile app mastery with cutting-edge B2B custom systems to give our clients an unfair technical advantage.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>Dedicated, unparalleled service model</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>Client-first agile project workflows</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>AI-first engineering and automation principles</span>
              </div>
            </div>
          </div>

          {/* Core Values / Stats Mockup */}
          <div className="about-visual glass-panel">
            <div className="visual-block-header">
              <Compass size={24} className="accent-glow-icon" />
              <h3>Our Engineering Mandate</h3>
            </div>
            <div className="visual-bullets">
              <div className="v-bullet">
                <h4>Scale</h4>
                <p>Architecting backend environments that handle thousands of concurrent queries securely.</p>
              </div>
              <div className="v-bullet">
                <h4>Elegance</h4>
                <p>Building intuitive front-ends and mobile apps that users love, with zero compromises on UI fidelity.</p>
              </div>
              <div className="v-bullet">
                <h4>Intelligence</h4>
                <p>Deploying state-of-the-art AI agents to reduce human workload and automate core logic.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Grid */}
        <div className="founders-section-wrap">
          <div className="founders-header">
            <h3>Leadership <span className="text-gradient-neon">Team</span></h3>
            <p>Meet the visionary builders behind CypherEdge's products and services.</p>
          </div>

          <div className="founders-grid">
            {founders.map((member, idx) => (
              <div key={idx} className="glass-card founder-card">
                <div className="founder-image-wrap">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="founder-img"
                  />
                  <div className="founder-overlay"></div>
                </div>
                
                <div className="founder-info">
                  <h4 className="founder-name">{member.name}</h4>
                  <span className="founder-role">{member.role}</span>
                  <p className="founder-bio">{member.bio}</p>
                  
                  <div className="founder-socials">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="LinkedIn Profile">
                      <Linkedin size={16} />
                    </a>
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="GitHub Profile">
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
