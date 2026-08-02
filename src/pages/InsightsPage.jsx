import { useState } from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import './InsightsPage.css';

const INSIGHTS_CATEGORIES = ['All', 'Engineering', 'AI/ML', 'Cloud', 'Business'];

const INSIGHTS_DATA = [
  { id: 1, title: 'Migrating to a Micro-Frontend Architecture', desc: 'A deep dive into why enterprise teams are adopting micro-frontends to scale their UI development.', cat: 'Engineering', date: 'Oct 12, 2023', readTime: '8 min read', featured: true },
  { id: 2, title: 'Evaluating LLMs for Corporate Data Security', desc: 'How to safely implement Large Language Models without exposing proprietary IP.', cat: 'AI/ML', date: 'Nov 05, 2023', readTime: '6 min read', featured: false },
  { id: 3, title: 'Optimizing AWS Costs in 2024', desc: 'Practical strategies for reducing cloud spend without compromising performance or reliability.', cat: 'Cloud', date: 'Dec 01, 2023', readTime: '5 min read', featured: false },
  { id: 4, title: 'The ROI of Nearshore Augmentation', desc: 'Comparing time-zone overlap benefits versus traditional offshore models for US companies.', cat: 'Business', date: 'Jan 15, 2024', readTime: '7 min read', featured: false }
];

export default function InsightsPage({ onNavigate }) {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' 
    ? INSIGHTS_DATA 
    : INSIGHTS_DATA.filter(i => i.cat === activeCat);

  const handleArticleClick = (e) => {
    e.preventDefault();
    alert('This is a preview template. Full article content will be available soon.');
  };

  return (
    <div className="insights-page">
      <section className="insights-hero container">
        <h1 className="hero-title">Insights & <span className="text-gradient-neon">Resources</span></h1>
        <p className="hero-subtitle">Engineering best practices, architectural teardowns, and technology leadership.</p>
        
        <div className="category-filters">
          {INSIGHTS_CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`filter-pill ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="insights-grid-section container section-padding">
        <div className="insights-grid">
          {filtered.map(article => (
            <article key={article.id} className="insight-card glass-panel" onClick={handleArticleClick}>
              <div className="card-header">
                <span className="badge-neon small">{article.cat}</span>
                {article.featured && <span className="badge-featured">Featured</span>}
              </div>
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
              <div className="card-meta">
                <span><Calendar size={14}/> {article.date}</span>
                <span><Clock size={14}/> {article.readTime}</span>
              </div>
              <div className="read-more">Read Article <ArrowRight size={16}/></div>
            </article>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="no-results glass-panel">
            <p>No articles found in this category.</p>
          </div>
        )}
      </section>

      <WhatsAppButton />
    </div>
  );
}
