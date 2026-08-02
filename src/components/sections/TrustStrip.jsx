import React, { useEffect, useRef, useState } from 'react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { Calendar, Package, Users, Cpu, Star, Clock } from 'lucide-react';
import './TrustStrip.css';

const METRICS = [
  { value: 14, suffix: '+', label: 'Years of Engineering', icon: Calendar },
  { value: 9, suffix: '', label: 'Products Built & Operated', icon: Package },
  { value: 300, suffix: 'K+', label: 'Users Across Products', icon: Users },
  { value: 25, suffix: '+', label: 'Technologies Mastered', icon: Cpu },
  { value: 4.8, suffix: '+', label: 'Avg App Store Rating', icon: Star, isDecimal: true },
  { value: 24, suffix: 'h', label: 'Response Time', icon: Clock, prefix: '<' }
];

function AnimatedNumber({ value, isDecimal }) {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const current = progress * value;
          
          if (isDecimal) {
            setDisplayValue(Math.floor(current * 10) / 10);
          } else {
            setDisplayValue(Math.floor(current));
          }

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setDisplayValue(value);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, isDecimal]);

  return <span ref={nodeRef}>{isDecimal ? displayValue.toFixed(1) : displayValue}</span>;
}

export default function TrustStrip() {
  return (
    <section className="trust-strip-section">
      <div className="container">
        <div className="trust-metrics-grid">
          {METRICS.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <React.Fragment key={index}>
                <div className="trust-metric-item">
                  <Icon size={20} className="trust-metric-icon" />
                  <div className="trust-metric-value-wrapper text-gradient-neon">
                    {metric.prefix && <span className="metric-prefix">{metric.prefix}</span>}
                    <span className="metric-value">
                      <AnimatedNumber value={metric.value} isDecimal={metric.isDecimal} />
                    </span>
                    {metric.suffix && <span className="metric-suffix">{metric.suffix}</span>}
                  </div>
                  <span className="metric-label">{metric.label}</span>
                </div>
                {index < METRICS.length - 1 && <div className="trust-metric-divider" />}
              </React.Fragment>
            );
          })}
        </div>

        <div className="trust-logos">
          <p className="trust-subtitle">Trusted by startups and enterprises across industries</p>
          <div className="reviews-links">
            {SITE_CONFIG?.socialLinks?.clutch && (
              <a href={SITE_CONFIG.socialLinks.clutch} target="_blank" rel="noopener noreferrer" className="review-link glass-panel" aria-label="Clutch Reviews">
                Clutch Reviews
              </a>
            )}
            {SITE_CONFIG?.socialLinks?.goodfirms && (
              <a href={SITE_CONFIG.socialLinks.goodfirms} target="_blank" rel="noopener noreferrer" className="review-link glass-panel" aria-label="GoodFirms Reviews">
                GoodFirms Reviews
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
