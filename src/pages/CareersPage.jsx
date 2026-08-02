import React from 'react';
import { Sparkles, ArrowRight, Code, BrainCircuit, Rocket } from 'lucide-react';

export default function CareersPage({ onNavigate }) {
  return (
    <div className="careers-page-wrap container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="section-header-center">
        <span className="badge-neon"><Sparkles size={13} /> Engineering Culture</span>
        <h1 className="section-title">
          Build Products That Matter. <br />
          <span className="text-gradient-neon">Join CypherEdge Labs.</span>
        </h1>
        <p className="section-subtitle">
          We are looking for senior iOS engineers, AI researchers, distributed backend architects, and product designers who value autonomy and technical craftsmanship.
        </p>
      </div>

      <div className="open-positions-grid glass-panel" style={{ padding: '2.5rem', marginTop: '3rem' }}>
        <h3 className="text-white mb-4">Current Openings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { title: "Senior AI & RAG Systems Engineer", loc: "Remote / India", team: "AI Labs", type: "Full-Time" },
            { title: "Staff iOS Architect (SwiftUI & Metal)", loc: "Remote / India", team: "Mobile Division", type: "Full-Time" },
            { title: "Distributed Systems Backend Lead (Go/Node)", loc: "Remote / India", team: "Cloud Systems", type: "Full-Time" }
          ].map((job, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.05rem' }}>{job.title}</h4>
                <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>{job.team} • {job.loc} • {job.type}</span>
              </div>
              <button className="btn-secondary-sm" onClick={() => onNavigate && onNavigate('/contact')}>
                Apply Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
