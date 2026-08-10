import { useState } from 'react';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import { BLOG_ARTICLES_DATA } from '../data/blogArticlesData';
import './InsightsPage.css';

const INSIGHTS_CATEGORIES = ['All', 'AI & ML', 'Mobile', 'iOS & SwiftUI', 'Android', 'Architecture', 'DevOps & Cloud'];

export default function InsightsPage({ onNavigate }) {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' 
    ? BLOG_ARTICLES_DATA 
    : BLOG_ARTICLES_DATA.filter(i => {
        if (activeCat === 'AI & ML') return i.category === 'AI & ML' || i.category === 'AI Agents';
        if (activeCat === 'iOS & SwiftUI') return i.category === 'iOS' || i.category === 'Mobile' || i.title.includes('SwiftUI');
        if (activeCat === 'Android') return i.category === 'Android' || i.title.includes('Android');
        if (activeCat === 'Mobile') return i.category === 'Mobile' || i.category === 'iOS' || i.category === 'Android';
        if (activeCat === 'Architecture') return i.category === 'Architecture' || i.category === 'Engineering';
        if (activeCat === 'DevOps & Cloud') return i.category === 'DevOps' || i.category === 'Cloud';
        return i.category === activeCat;
      });

  const handleArticleClick = (slug) => {
    if (onNavigate) {
      onNavigate(`/blog/${slug}`);
    }
  };

  return (
    <div className="insights-page page-wrapper" style={{ paddingTop: '5rem' }}>
      <section className="insights-hero container">
        <span className="badge-neon"><BookOpen size={13} /> Knowledge Hub</span>
        <h1 className="hero-title">Engineering <span className="text-gradient-neon">Blog &amp; Architecture Insights</span></h1>
        <p className="hero-subtitle">Deep dives into SwiftUI 6, AI Agent Architectures, Jetpack Compose, Microservices, and Enterprise DevOps.</p>
        
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

      <section className="insights-grid-section container">
        <div className="insights-grid">
          {filtered.map(article => (
            <article 
              key={article.slug} 
              className="insight-card glass-panel" 
              onClick={() => handleArticleClick(article.slug)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-header">
                <span className="badge-neon small">{article.category}</span>
                {article.featured && <span className="badge-featured">Featured</span>}
              </div>
              <h3>{article.title}</h3>
              <p>{article.metaDescription || article.content?.[0]?.content?.substring(0, 120) + '...'}</p>
              <div className="card-meta">
                <span><Calendar size={14}/> {article.publishDate || 'Recent'}</span>
                <span><Clock size={14}/> {article.readingTime || '8 min read'}</span>
              </div>
              <div className="read-more">Read Full Article <ArrowRight size={16}/></div>
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
