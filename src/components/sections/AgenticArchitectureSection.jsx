import React from 'react';
import { Bot, Cpu, Database, Network, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import './AgenticArchitectureSection.css';

const AI_CAPABILITIES = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents',
    desc: 'Multi-agent orchestration that executes complex multi-step workflows, API calls, and decision logic without manual intervention.',
  },
  {
    icon: Database,
    title: 'Enterprise RAG Systems',
    desc: 'High-precision Retrieval-Augmented Generation connecting your internal knowledge bases, vector DBs, and unstructured documents securely.',
  },
  {
    icon: Cpu,
    title: 'LLM Fine-Tuning & On-Prem',
    desc: 'Domain-specific model fine-tuning and on-premise/private cloud deployment (Ollama, Llama-3, Claude, GPT-4) ensuring total data sovereignty.',
  },
  {
    icon: Network,
    title: 'AI Automation Workflows',
    desc: 'Intelligent document parsing, semantic OCR, voice AI, and automated compliance & triage engines integrated directly into core APIs.',
  },
];

export default function AgenticArchitectureSection({ onNavigate }) {
  return (
    <section className="agentic-section container">
      <div className="agentic-card glass-panel">
        <div className="section-header-center">
          <span className="badge-neon">
            <Zap size={13} /> AI &amp; Agentic Engineering
          </span>
          <h2 className="section-title">
            Production-Ready <span className="text-gradient-neon">AI Architecture</span>
          </h2>
          <p className="section-subtitle">
            We don't just add AI labels to websites — we design, train, and deploy intelligent
            agent systems and enterprise RAG pipelines that automate work and scale revenue.
          </p>
        </div>

        <div className="agentic-grid">
          {AI_CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i} className="agentic-item glass-panel">
                <div className="agentic-icon-box">
                  <Icon size={22} className="text-cyan" />
                </div>
                <h3 className="agentic-item-title">{cap.title}</h3>
                <p className="agentic-item-desc">{cap.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="agentic-footer">
          <button
            className="btn-glow btn-sm"
            onClick={() => onNavigate && onNavigate('/contact')}
          >
            Discuss Your AI Architecture <ArrowRight size={15} />
          </button>
          <span className="agentic-nda-note">
            <ShieldCheck size={14} className="text-emerald" /> Private cloud &amp; enterprise data security guaranteed.
          </span>
        </div>
      </div>
    </section>
  );
}
