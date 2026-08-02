import React from 'react';
import * as LucideIcons from 'lucide-react';
import Breadcrumb from '../components/shared/Breadcrumb';
import RelatedLinks from '../components/shared/RelatedLinks';
import './BlogArticlePage.css';

import { INSIGHTS_DATA } from '../data/insightsData';

const BlogArticlePage = ({ articleSlug, onNavigate }) => {
  const article = INSIGHTS_DATA?.find(a => a.slug === articleSlug);

  if (!article) {
    return (
      <div className="page-wrapper container">
        <h1 style={{ color: '#fff' }}>Article not found</h1>
        <button className="btn-glow" onClick={() => onNavigate('/')}>Return Home</button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: article.title, path: `/blog/${article.slug}` }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "author": {
      "@type": "Person",
      "name": article.author || "CypherEdge Team"
    },
    "datePublished": article.date || new Date().toISOString()
  };

  const renderContentBlock = (block, idx) => {
    switch (block.type) {
      case 'heading2':
        return <h2 key={idx}>{block.content}</h2>;
      case 'heading3':
        return <h3 key={idx}>{block.content}</h3>;
      case 'paragraph':
        return <p key={idx}>{block.content}</p>;
      case 'list':
        return (
          <ul key={idx}>
            {block.items?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      case 'code':
        return (
          <pre key={idx} className="glass-panel">
            <code>{block.content}</code>
          </pre>
        );
      case 'callout':
        return (
          <div key={idx} className="article-callout glass-panel">
            <LucideIcons.Info size={24} className="icon-cyan" />
            <p>{block.content}</p>
          </div>
        );
      default:
        return <p key={idx}>{block.content}</p>;
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Hero Section */}
        <section className="article-hero">
          <div className="article-meta">
            {article.category && <span className="badge-neon">{article.category}</span>}
            {article.date && <span className="meta-text"><LucideIcons.Calendar size={14} /> {article.date}</span>}
            {article.readTime && <span className="meta-text"><LucideIcons.Clock size={14} /> {article.readTime}</span>}
          </div>
          <h1 className="article-title">{article.title}</h1>
          {article.author && (
            <div className="article-author-hero">
              <div className="author-avatar">
                <LucideIcons.User size={20} />
              </div>
              <span className="author-name">By {article.author}</span>
            </div>
          )}
        </section>

        <div className="article-layout">
          {/* Main Content */}
          <article className="article-content">
            {article.contentBlocks ? (
              article.contentBlocks.map((block, idx) => renderContentBlock(block, idx))
            ) : (
              <p className="article-placeholder-text">{article.excerpt || "Full article content coming soon."}</p>
            )}

            {/* Author Bio (Bottom) */}
            {article.author && (
              <div className="author-bio-card glass-panel">
                <div className="author-avatar large">
                  <LucideIcons.User size={32} />
                </div>
                <div className="author-bio-text">
                  <h3>{article.author}</h3>
                  <p>{article.authorBio || "Senior Engineer at CypherEdge"}</p>
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="toc-card glass-panel sticky-sidebar">
              <h3>Table of Contents</h3>
              <ul className="toc-list">
                {article.contentBlocks?.filter(b => b.type === 'heading2').map((b, i) => (
                  <li key={i}>
                    <a href="#!">{b.content}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* CTA */}
        <section className="article-cta glass-panel">
          <h2>Need help with {article.category || 'your project'}?</h2>
          <p>Our team of experts is ready to assist you.</p>
          <button className="btn-glow">Contact Us Today</button>
        </section>

        {/* Related */}
        {article.relatedArticles && (
          <RelatedLinks 
            title="Related Articles" 
            items={article.relatedArticles} 
            onNavigate={onNavigate} 
          />
        )}

      </div>
    </div>
  );
};

export default BlogArticlePage;
