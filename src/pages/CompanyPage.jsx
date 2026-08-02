import React from 'react';
import { Sparkles, Shield, Cpu, Code2, Users, CheckCircle2, Award } from 'lucide-react';
import './CompanyPage.css';

export default function CompanyPage({ onNavigate }) {
  return (
    <div className="company-page-wrap container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="section-header-center">
        <span className="badge-neon"><Sparkles size={13} /> Company Vision &amp; Identity</span>
        <h1 className="section-title">
          We Are CypherEdge. <br />
          <span className="text-gradient-neon">An AI-First Product Engineering Company.</span>
        </h1>
        <p className="section-subtitle">
          Founded on the principle of engineering craftsmanship, we combine senior software architecture with proprietary product operations to build software that scales to millions.
        </p>
      </div>

      {/* Grid of Company Pillars */}
      <div className="company-pillars-grid">
        <div className="pillar-card glass-panel">
          <Cpu size={32} className="text-cyan mb-3" />
          <h3>AI-Native Architecture</h3>
          <p>We build artificial intelligence into the core of digital products — from autonomous RAG compliance engines to custom multi-agent workflows.</p>
        </div>

        <div className="pillar-card glass-panel">
          <Award size={32} className="text-emerald mb-3" />
          <h3>Proven Product Creators</h3>
          <p>Unlike traditional agencies, we build and operate 9 of our own successful mobile and SaaS products, giving us firsthand product mastery.</p>
        </div>

        <div className="pillar-card glass-panel">
          <Shield size={32} className="text-violet mb-3" />
          <h3>100% Code Ownership</h3>
          <p>Zero vendor lock-in. Full IP transfer, clean documented codebases, robust automated CI/CD deployment pipelines, and strict NDA protections.</p>
        </div>
      </div>

      {/* Leadership & Founders Section */}
      <div className="leadership-section-wrap glass-panel mt-5">
        <h2 className="text-center text-white mb-4">Engineering Leadership</h2>
        <div className="leadership-grid">
          <div className="leader-card">
            <img src="/assets/akash.png" alt="Akash Verma" className="leader-img" />
            <h4 className="leader-name">Akash Verma</h4>
            <span className="leader-role">Co-Founder &amp; Chief Product Architect</span>
            <p className="leader-bio">Directs AI research, mobile app engineering pipelines, and product scaling operations at CypherEdge.</p>
          </div>

          <div className="leader-card">
            <img src="/assets/varun.png" alt="Varun Kumar" className="leader-img" />
            <h4 className="leader-name">Varun Kumar</h4>
            <span className="leader-role">Co-Founder &amp; Chief Technology Officer</span>
            <p className="leader-bio">Oversees enterprise cloud backends, microservice performance, security compliance, and core system architectures.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
