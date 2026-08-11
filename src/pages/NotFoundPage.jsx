import React, { useEffect } from 'react';
import { Terminal, ArrowLeft, Shield } from 'lucide-react';
import './NotFoundPage.css';

export default function NotFoundPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '404 Page Not Found — CypherEdge';
  }, []);

  return (
    <div className="page-wrapper not-found-page container">
      <div className="not-found-card glass-panel">
        <div className="terminal-header-strip">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="terminal-title">CYPHEREDGE // ERROR_LOG_404</span>
        </div>

        <div className="not-found-content">
          <div className="status-badge-err">
            <Terminal size={14} />
            <span>SYSTEM ERROR // 404</span>
          </div>

          <h1 className="not-found-title">
            Requested Resource <span className="text-gradient-neon">Not Found</span>
          </h1>

          <p className="not-found-desc">
            The page or route you requested could not be located on our systems.
            It may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="not-found-actions">
            <button
              className="btn-glow"
              onClick={() => onNavigate && onNavigate('/')}
            >
              <ArrowLeft size={16} /> Return to Terminal Home
            </button>
            <button
              className="btn-secondary"
              onClick={() => onNavigate && onNavigate('/contact')}
            >
              Contact Engineering
            </button>
          </div>

          <div className="not-found-footer-note">
            <Shield size={14} className="text-cyan" />
            <span>CypherEdge Product Engineering Platform</span>
          </div>
        </div>
      </div>
    </div>
  );
}
