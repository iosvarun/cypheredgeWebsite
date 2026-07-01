import React, { useState, useEffect } from 'react';
import { Terminal, Send, ArrowRight, Play, Sparkles } from 'lucide-react';
import './Hero.css';

const SIMULATED_CONVO = [
  { sender: 'user', text: 'How can CypherEdge help build our next-gen software?' },
  { sender: 'agent', text: 'We engineer custom AI Agents, build high-performance mobile apps (like WA Direct Message & Nyayaconnect), and build scalable cloud backends.' },
  { sender: 'user', text: 'Can we integrate custom LLM features?' },
  { sender: 'agent', text: 'Absolutely! We implement custom RAG architectures, agentic workflows, and automated pipeline solutions designed specifically for your corporate needs.' },
  { sender: 'user', text: 'How do we get started?' },
  { sender: 'agent', text: 'Simply scroll to our "Request for Service" form below, tell us your idea, and our team will get in touch to build a prototype!' }
];

export default function Hero() {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 1024 : false);
  const [isTiny, setIsTiny] = useState(typeof window !== 'undefined' ? window.innerWidth <= 480 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIsTiny(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Run simulation
  useEffect(() => {
    if (currentIndex >= SIMULATED_CONVO.length) {
      // Loop after 10s delay
      const timer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 10000);
      return () => clearTimeout(timer);
    }

    const currentMsg = SIMULATED_CONVO[currentIndex];
    
    if (currentMsg.sender === 'user') {
      // User messages appear immediately
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, currentMsg]);
        setCurrentIndex(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Agent messages type out
      const startTypingTimer = setTimeout(() => {
        setIsTyping(true);
        let charIndex = 0;
        const textToType = currentMsg.text;
        
        const typeInterval = setInterval(() => {
          if (charIndex <= textToType.length) {
            setTypingText(textToType.substring(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
            setMessages(prev => [...prev, currentMsg]);
            setTypingText('');
            setCurrentIndex(prev => prev + 1);
          }
        }, 15); // Speed of typing

        return () => clearInterval(typeInterval);
      }, 1000);

      return () => clearTimeout(startTypingTimer);
    }
  }, [currentIndex]);

  return (
    <section id="home" className="hero-section">
      <div 
        className="container hero-wrapper"
        style={isMobile ? {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box'
        } : {}}
      >
        <div 
          className="hero-content"
          style={isMobile ? {
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          } : {}}
        >
          <h1 
            className="hero-title"
            style={isMobile ? {
              fontSize: isTiny ? '2rem' : '2.5rem',
              textAlign: 'center',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              width: '100%',
              maxWidth: '100%',
              lineHeight: 1.2
            } : {}}
          >
            We Engineer the Future of <span className="text-gradient-neon">Intelligent Software</span>
          </h1>
          
          <p 
            className="hero-subtitle"
            style={isMobile ? {
              fontSize: isTiny ? '0.9rem' : '1rem',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
              width: '100%',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            } : {}}
          >
            CypherEdge designs premium iOS/Android mobile applications, architectures high-performance cloud backends, and implements cutting-edge AI Agent solutions. Let's convert your groundbreaking idea into reality.
          </p>

          <div 
            className="hero-actions"
            style={isMobile ? {
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            } : {}}
          >
            <a 
              href="#work" 
              className="btn-glow"
              style={isMobile ? {
                width: '100%',
                maxWidth: '280px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              } : {}}
            >
              Explore Our Work
              <ArrowRight size={18} />
            </a>
            <a 
              href="#services" 
              className="btn-secondary"
              style={isMobile ? {
                width: '100%',
                maxWidth: '280px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              } : {}}
            >
              <Play size={16} fill="white" />
              Our Services
            </a>
          </div>

          <div 
            className="hero-stats"
            style={isMobile ? {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              width: '100%',
              marginTop: '1.5rem'
            } : {}}
          >
            <div className="stat-item">
              <span className="stat-number">7+</span>
              <span className="stat-label">Live App Store Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Trust</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">AI-Native</span>
              <span className="stat-label">Agentic Architecture</span>
            </div>
          </div>
        </div>

        {/* AI Agent Console Mockup - hidden on mobile */}
        <div className="hero-interactive" style={isMobile ? { display: 'none' } : {}}>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="t-btn close"></span>
                <span className="t-btn minimize"></span>
                <span className="t-btn expand"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>cypheredge-agent-v1.4.sh</span>
              </div>
            </div>

            <div className="terminal-body">
              <div className="terminal-system">
                <p className="text-green">[SYSTEM]: Connected to CypherEdge AI Agent node-7792.</p>
                <p className="text-dim">Type queries to see our capability list.</p>
              </div>

              <div className="terminal-conversation">
                {messages.map((msg, index) => (
                  <div key={index} className={`terminal-bubble ${msg.sender}`}>
                    <span className="bubble-sender">
                      {msg.sender === 'user' ? 'visitor@cypheredge:~$ ' : 'agent@cypheredge:~$ '}
                    </span>
                    <span className="bubble-text">{msg.text}</span>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="terminal-bubble agent">
                    <span className="bubble-sender">agent@cypheredge:~$ </span>
                    <span className="bubble-text">{typingText}</span>
                    <span className="terminal-cursor"></span>
                  </div>
                )}
              </div>
            </div>

            <div className="terminal-footer">
              <div className="terminal-input-wrap">
                <span className="input-prompt">visitor@cypheredge:~$</span>
                <input 
                  type="text" 
                  placeholder={isTyping ? "Agent is writing..." : "Ask CypherEdge..."} 
                  disabled 
                  className="terminal-input"
                />
                <button disabled className="terminal-send-btn">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
