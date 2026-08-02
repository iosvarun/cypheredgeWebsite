import React, { useState } from 'react';
import { Sparkles, Send, Bot, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import './HeroPromptBar.css';

const QUICK_PROMPTS = [
  { label: "Build an Autonomous AI Agent", category: "AI & ML", path: "/services" },
  { label: "Develop High-Performance iOS App", category: "Mobile", path: "/products" },
  { label: "Scale Cloud Backend & Microservices", category: "Cloud", path: "/services" },
  { label: "Calculate Instant Project Cost", category: "Estimator", path: "/estimator" }
];

const AI_RESPONSES = {
  "Build an Autonomous AI Agent": "We engineer production-grade RAG and multi-agent systems using LangChain, Qdrant Vector DB, and Llama 3/GPT-4o with zero-hallucination guardrails.",
  "Develop High-Performance iOS App": "We build native iOS & SwiftUI apps (like WA Direct Message & ShrinkLab) with 60 FPS animations, Metal API acceleration, and StoreKit monetization.",
  "Scale Cloud Backend & Microservices": "We design offline-first, auto-scaling backend engines handling $10M+ transaction volumes with 99.99% uptime SLAs.",
  "Calculate Instant Project Cost": "Launch our interactive 5-step Project Estimator to get an instant scope breakdown and delivery timeline."
};

export default function HeroPromptBar({ onNavigate }) {
  const [inputVal, setInputVal] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const handleChipClick = (prompt) => {
    setSelectedPrompt(prompt);
    setInputVal(prompt.label);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    if (onNavigate) {
      if (inputVal.includes("Cost") || inputVal.includes("Estimator")) {
        onNavigate('/estimator');
      } else {
        onNavigate('/contact');
      }
    }
  };

  return (
    <div className="hero-prompt-container">
      {/* The Multi-Color Glowing Rainbow Pill (User Reference UI) */}
      <form onSubmit={handleSubmit} className="glowing-prompt-bar">
        <div className="glowing-prompt-inner">
          <div className="prompt-left-side">
            <Sparkles size={20} className="sparkle-rainbow-icon" />
            <input 
              type="text" 
              placeholder="What can we solve for you?" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="prompt-text-input"
            />
          </div>

          <button type="submit" className="prompt-send-pill-btn">
            <span>Solve Issue</span>
            <Send size={15} />
          </button>
        </div>
      </form>

      {/* Preset AI Prompt Pills */}
      <div className="quick-prompt-chips-row">
        <span className="chips-label">Popular Query Prompts:</span>
        {QUICK_PROMPTS.map((prompt, idx) => (
          <button 
            key={idx} 
            type="button"
            className={`prompt-chip-btn ${selectedPrompt?.label === prompt.label ? 'active' : ''}`}
            onClick={() => handleChipClick(prompt)}
          >
            <Zap size={12} className="chip-icon" />
            <span>{prompt.label}</span>
          </button>
        ))}
      </div>

      {/* Instant Interactive AI Response Box (If prompt selected) */}
      {selectedPrompt && (
        <div className="instant-ai-response-box glass-panel animate-fade-up">
          <div className="ai-response-header">
            <div className="ai-badge">
              <Bot size={16} />
              <span>CypherEdge Product AI</span>
            </div>
            <span className="ai-status"><CheckCircle2 size={14} /> Solution Ready</span>
          </div>
          <p className="ai-response-text">{AI_RESPONSES[selectedPrompt.label]}</p>
          <div className="ai-response-action">
            <button className="btn-glow btn-sm" onClick={() => onNavigate && onNavigate(selectedPrompt.path)}>
              Proceed to Solution <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
