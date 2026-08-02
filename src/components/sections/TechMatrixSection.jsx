import React, { useState } from 'react';
import { TECH_CATEGORIES, TECH_ITEMS } from '../../data/techData';
import { Sparkles, BrainCircuit, Cpu, Database, Workflow, Smartphone, Layers, Zap, Server, Code2, Terminal, Cloud, Box, GitBranch, ShieldCheck, Layout, Palette } from 'lucide-react';
import './TechMatrixSection.css';

export default function TechMatrixSection() {
  const [activeCat, setActiveCat] = useState("All Technologies");

  const filteredTech = activeCat === "All Technologies"
    ? TECH_ITEMS
    : TECH_ITEMS.filter(item => item.category === activeCat);

  const getTechIcon = (name, color) => {
    const props = { size: 22, style: { color } };
    if (name.includes("PyTorch")) return <BrainCircuit {...props} />;
    if (name.includes("LLM")) return <Cpu {...props} />;
    if (name.includes("RAG")) return <Database {...props} />;
    if (name.includes("LangChain")) return <Workflow {...props} />;
    if (name.includes("Swift") || name.includes("Kotlin")) return <Smartphone {...props} />;
    if (name.includes("Flutter")) return <Layers {...props} />;
    if (name.includes("Metal")) return <Zap {...props} />;
    if (name.includes("Node")) return <Server {...props} />;
    if (name.includes("Python")) return <Code2 {...props} />;
    if (name.includes("Go")) return <Terminal {...props} />;
    if (name.includes("AWS")) return <Cloud {...props} />;
    if (name.includes("Docker")) return <Box {...props} />;
    if (name.includes("Terraform")) return <GitBranch {...props} />;
    if (name.includes("PostgreSQL")) return <Database {...props} />;
    if (name.includes("Security")) return <ShieldCheck {...props} />;
    if (name.includes("React")) return <Layout {...props} />;
    return <Palette {...props} />;
  };

  return (
    <section className="tech-matrix-section container">
      <div className="section-header-center">
        <span className="badge-neon"><Sparkles size={13} /> Tech Capability Matrix</span>
        <h2 className="section-title">
          Battle-Tested Engineering <br />
          <span className="text-gradient-neon">Modern Stack &amp; Enterprise Architecture</span>
        </h2>
        <p className="section-subtitle">
          We don't rely on hype. We select and master high-throughput technologies that guarantee performance, security, and long-term maintainability.
        </p>

        {/* Categories Pills */}
        <div className="tech-category-pills">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`tech-pill-btn ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Tech Grid */}
      <div className="tech-cards-grid">
        {filteredTech.map((item, idx) => (
          <div key={idx} className="tech-item-card glass-panel">
            <div className="tech-card-top">
              <div className="tech-icon-wrap" style={{ background: `${item.color}15`, borderColor: `${item.color}35` }}>
                {getTechIcon(item.name, item.color)}
              </div>
              <div>
                <h4 className="tech-name">{item.name}</h4>
                <span className="tech-cat-badge">{item.category}</span>
              </div>
            </div>
            <p className="tech-business-val">{item.businessValue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
