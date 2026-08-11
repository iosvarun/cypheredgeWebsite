import React, { useState } from 'react';
import {
  Bot, Smartphone, Globe, Server, Users,
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Brain, Cpu, Layers, Code2,
  Zap, Shield, Star, Package
} from 'lucide-react';
import './ServicesPage.css';

// ─── Service Pillars Data ───────────────────────────────────────────────────
const SERVICE_PILLARS = [
  {
    id: 'ai-agentic',
    number: '01',
    icon: Bot,
    color: '#06b6d4',
    title: 'AI & Agentic Systems',
    tagline: 'Build intelligence into your product — not just features.',
    description:
      'We design and engineer production-ready AI systems — from LLM-powered applications and autonomous agents to enterprise RAG pipelines and computer vision solutions.',
    capabilities: [
      'LLM Integration & Fine-Tuning (GPT-4, Claude, Llama, Gemini)',
      'Autonomous AI Agents & Multi-Agent Orchestration',
      'RAG Systems & Enterprise Knowledge Retrieval',
      'AI-Powered Automation & Workflow Engines',
      'Computer Vision & Document Intelligence',
      'Conversational AI & Voice Interfaces',
      'AI-Powered Enterprise Applications',
    ],
    techStack: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI', 'FastAPI', 'Pinecone', 'Qdrant'],
    outcome: 'Reduce manual effort by 60–80% with AI that understands your business context.',
  },
  {
    id: 'mobile',
    number: '02',
    icon: Smartphone,
    color: '#10b981',
    title: 'Mobile Product Engineering',
    tagline: 'Premium native apps — not cross-platform compromises.',
    description:
      'We have 14+ years of mobile product experience. Our apps have served 300K+ users with 4.8+ App Store ratings. We engineer mobile products that users actually love.',
    capabilities: [
      'Native iOS Development (Swift, SwiftUI, UIKit)',
      'Native Android Development (Kotlin, Jetpack Compose)',
      'Cross-Platform (Flutter) where strategically appropriate',
      'App Store & Google Play deployment and ASO',
      'StoreKit 2 & Google Play Billing subscriptions',
      'Hardware acceleration (CoreML, Vision, Metal)',
      'Offline-first architecture & local data sync',
    ],
    techStack: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Flutter', 'StoreKit 2', 'Firebase'],
    outcome: 'Ship App Store–ready products with real user retention and measurable engagement.',
  },
  {
    id: 'web-platforms',
    number: '03',
    icon: Globe,
    color: '#8b5cf6',
    title: 'Web Platforms & SaaS',
    tagline: 'From landing page to enterprise SaaS — we build products that scale.',
    description:
      'We design and engineer high-performance web applications, SaaS platforms, and enterprise portals with modern architecture — built to handle growth from day one.',
    capabilities: [
      'SaaS Platform Development (multi-tenant, billing, auth)',
      'React & Next.js Application Engineering',
      'TypeScript-first codebases for long-term maintainability',
      'Customer-Facing Dashboards & Enterprise Portals',
      'Stripe / Razorpay Subscription & Payment Infrastructure',
      'OAuth2, SAML/SSO, and Auth Engineering',
      'Real-time Collaboration & WebSocket Systems',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Prisma'],
    outcome: 'Launch production-ready SaaS with auth, payments, and multi-tenancy in 4–10 weeks.',
  },
  {
    id: 'backend-cloud',
    number: '04',
    icon: Server,
    color: '#f59e0b',
    title: 'Backend, Cloud & DevOps',
    tagline: 'Infrastructure that performs under real-world load.',
    description:
      'We architect scalable backend systems, cloud infrastructure, and DevOps pipelines that eliminate downtime, reduce costs, and handle production traffic with confidence.',
    capabilities: [
      'Microservice & API Architecture (Node.js, Python, Go)',
      'PostgreSQL, Redis, Firebase & MongoDB Engineering',
      'Cloud Architecture (AWS, GCP) & Cost Optimization',
      'Docker, Kubernetes & Container Orchestration',
      'Automated CI/CD Pipelines (GitHub Actions, GitLab CI)',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Security audits, monitoring & observability',
    ],
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    outcome: 'Eliminate downtime and scale infrastructure with confidence under peak traffic.',
  },
];

// ─── Why CypherEdge Pillars ─────────────────────────────────────────────────
const WHY_PILLARS = [
  {
    icon: Package,
    title: 'Product Mindset',
    description:
      'We understand the product, the users, the business objectives, and the technical constraints — not just the feature list. Every engineering decision is made with the product outcome in mind.',
  },
  {
    icon: Star,
    title: 'Senior Engineering',
    description:
      'Projects are driven by experienced engineers and technical leadership. You get direct access to the people actually building your product — not account managers or junior developers.',
  },
  {
    icon: Brain,
    title: 'AI-Native Development',
    description:
      'We integrate AI where it creates real product and engineering leverage. We build AI systems that solve measurable business problems — not AI for the sake of a marketing label.',
  },
  {
    icon: Zap,
    title: 'End-to-End Ownership',
    description:
      'Strategy → Architecture → UX → Engineering → Cloud → Deployment → Continuous Improvement. We own the outcome, not just the delivery milestone.',
  },
];

// ─── Engagement models ──────────────────────────────────────────────────────
const ENGAGEMENT_MODELS = [
  {
    title: 'Full Product Delivery',
    desc: 'We own design, engineering, QA, and deployment end-to-end.',
    ideal: 'Startups & new products',
  },
  {
    title: 'Dedicated Engineering Team',
    desc: 'A focused team embedded in your organisation as an extension of your own.',
    ideal: 'Scale-ups & enterprises',
  },
  {
    title: 'Individual Developer Placement',
    desc: 'Hire senior individual engineers who integrate with your existing team.',
    ideal: 'Teams with specific gaps',
  },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function ServicesPage({ onNavigate }) {
  // Open first pillar by default so content is immediately visible
  const [expanded, setExpanded] = useState('ai-agentic');

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="services-page">

      {/* ── Hero ── */}
      <section className="sp-hero container">
        <div className="sp-hero-inner">
          <span className="badge-neon">Engineering Services</span>
          <h1 className="sp-hero-title">
            We Build Software That<br />
            <span className="text-gradient-neon">Ships, Scales &amp; Performs.</span>
          </h1>
          <p className="sp-hero-subtitle">
            CypherEdge is a technology product company that designs, engineers, and operates
            AI systems, mobile apps, web platforms, and enterprise software — with product
            thinking at the core.
          </p>
          <div className="sp-hero-actions">
            <button
              className="btn-glow"
              onClick={() => onNavigate && onNavigate('/contact')}
              aria-label="Discuss Your Architecture"
            >
              Discuss Your Architecture <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => onNavigate && onNavigate('/case-studies')}>
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* ── Service Pillars ── */}
      <section className="sp-pillars container">
        <div className="section-header-center">
          <span className="badge-neon">What We Build</span>
          <h2 className="section-title">Four Engineering Specialisations</h2>
          <p className="section-subtitle">
            Deep expertise across AI systems, mobile, web platforms, and cloud infrastructure.
            Each pillar is staffed by senior engineers with production experience.
          </p>
        </div>

        <div className="sp-pillars-list">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isOpen = expanded === pillar.id;
            return (
              <div
                key={pillar.id}
                className={`sp-pillar-card glass-panel ${isOpen ? 'is-open' : ''}`}
                style={{ '--pillar-color': pillar.color }}
              >
                {/* Card Header — always visible */}
                <div
                  className="sp-pillar-header"
                  onClick={() => toggleExpand(pillar.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleExpand(pillar.id)}
                  aria-expanded={isOpen}
                >
                  <div className="sp-pillar-left">
                    <span className="sp-pillar-number">{pillar.number}</span>
                    <div
                      className="sp-pillar-icon-circle"
                      style={{ background: `${pillar.color}18`, border: `1px solid ${pillar.color}30` }}
                    >
                      <Icon size={22} style={{ color: pillar.color }} />
                    </div>
                    <div>
                      <h3 className="sp-pillar-title">{pillar.title}</h3>
                      <p className="sp-pillar-tagline">{pillar.tagline}</p>
                    </div>
                  </div>

                  <div className="sp-pillar-right-actions">
                    <button
                      className="btn-glow-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigate) onNavigate(`/contact?service=${encodeURIComponent(pillar.title)}`);
                      }}
                    >
                      Discuss Your Architecture <ArrowRight size={13} />
                    </button>
                    <div className="sp-pillar-toggle">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </div>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="sp-pillar-body">
                    <p className="sp-pillar-desc">{pillar.description}</p>

                    <div className="sp-pillar-grid">
                      {/* Capabilities */}
                      <div>
                        <h4 className="sp-sub-label">Capabilities</h4>
                        <ul className="sp-capabilities-list">
                          {pillar.capabilities.map((cap, i) => (
                            <li key={i}>
                              <CheckCircle2 size={14} style={{ color: pillar.color, flexShrink: 0 }} />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech + Outcome */}
                      <div className="sp-pillar-meta">
                        <div className="sp-tech-block">
                          <h4 className="sp-sub-label">Tech Stack</h4>
                          <div className="sp-tech-pills">
                            {pillar.techStack.map((t) => (
                              <span key={t} className="sp-tech-pill">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="sp-outcome-box" style={{ borderColor: `${pillar.color}35` }}>
                          <span className="sp-outcome-label">Typical Outcome</span>
                          <p className="sp-outcome-text">{pillar.outcome}</p>
                        </div>
                        <button
                          className="btn-glow sp-pillar-cta"
                          onClick={() => onNavigate && onNavigate(`/contact?service=${encodeURIComponent(pillar.title)}`)}
                        >
                          Discuss Your Architecture <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Why CypherEdge ── */}
      <section className="sp-why container">
        <div className="section-header-center">
          <span className="badge-neon">Why CypherEdge</span>
          <h2 className="section-title">Built for Companies That Care About Quality</h2>
          <p className="section-subtitle">
            We're not a body-shop. We're an engineering partner with product-first values.
          </p>
        </div>

        <div className="sp-why-grid">
          {WHY_PILLARS.map((w, i) => {
            const Icon = w.icon;
            return (
              <div key={i} className="sp-why-card glass-panel">
                <div className="sp-why-icon-wrap">
                  <Icon size={22} className="text-cyan" />
                </div>
                <h3 className="sp-why-title">{w.title}</h3>
                <p className="sp-why-desc">{w.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className="sp-engagement container">
        <div className="section-header-center">
          <span className="badge-neon">How We Engage</span>
          <h2 className="section-title">Flexible Engagement Models</h2>
        </div>
        <div className="sp-engagement-grid">
          {ENGAGEMENT_MODELS.map((model, i) => (
            <div key={i} className="sp-engagement-card glass-panel">
              <span className="sp-engagement-number">0{i + 1}</span>
              <h3 className="sp-engagement-title">{model.title}</h3>
              <p className="sp-engagement-desc">{model.desc}</p>
              <span className="sp-engagement-ideal">Ideal for: {model.ideal}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta container">
        <div className="sp-cta-card glass-panel">
          <h2 className="sp-cta-title">Discuss Your Architecture</h2>
          <p className="sp-cta-sub">
            Tell us what you're building. We'll respond within 24 hours with a clear
            technical recommendation — no sales pitch, no fluff.
          </p>
          <div className="sp-cta-actions">
            <button className="btn-glow" onClick={() => onNavigate && onNavigate('/contact')}>
              Discuss Your Architecture <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => onNavigate && onNavigate('/it-staffing')}>
              IT Staffing &amp; Dedicated Teams
            </button>
          </div>
          <p className="sp-cta-nda">
            <Shield size={14} /> All conversations are NDA-protected.
          </p>
        </div>
      </section>
    </div>
  );
}
