import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/blogs/${slug}`)
      .then(res => { setBlog(res.data); setLoading(false); })
      .catch(() => { setError('Post not found.'); setLoading(false); });
  }, [slug]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
  };

  if (loading) return (
    <div className="blog-post-page">
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="blog-post-skeleton">
          <div className="bs bs-title"></div>
          <div className="bs bs-meta"></div>
          <div className="bs bs-body"></div>
          <div className="bs bs-body"></div>
          <div className="bs bs-body" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="blog-post-page">
      <div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <h2>Post not found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>This post may have been removed or the URL is incorrect.</p>
        <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
      </div>
    </div>
  );

  return (
    <div className="blog-post-page">
      {/* Hero */}
      <div className="blog-post-hero">
        <div className="container">
          <div className="blog-post-hero__breadcrumb">
            <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / <span>{blog.title}</span>
          </div>
          <span className={`badge badge-blue blog-post-hero__cat`}>{blog.category}</span>
          <h1 className="blog-post-hero__title">{blog.title}</h1>
          <div className="blog-post-hero__meta">
            <div className="blog-post-hero__author">
              <div className="blog-post-hero__avatar">
                {blog.author?.name?.charAt(0) || 'R'}
              </div>
              <div>
                <div className="blog-post-hero__author-name">{blog.author?.name || 'Rare Mines Team'}</div>
                <div className="blog-post-hero__date">{formatDate(blog.createdAt)}</div>
              </div>
            </div>
            <div className="blog-post-hero__stats">
              <span>📖 {blog.readTime} min read</span>
              <span>👁 {blog.views} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="blog-post-layout">
          {/* Main */}
          <article className="blog-post-content">
            <p className="blog-post-excerpt">{blog.excerpt}</p>
            <div
              className="blog-post-body"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="blog-post-tags">
                <span>Tags:</span>
                {blog.tags.map(tag => (
                  <span key={tag} className="badge badge-blue">{tag}</span>
                ))}
              </div>
            )}

            {/* Share */}
            <div className="blog-post-share">
              <span>Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`}
                target="_blank" rel="noreferrer"
                className="blog-share-btn"
              >𝕏</a>
              <a
                href={`https://www.linkedin.com/shareArticle?title=${encodeURIComponent(blog.title)}`}
                target="_blank" rel="noreferrer"
                className="blog-share-btn"
              >in</a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-post-sidebar">
            <div className="sidebar-card">
              <h4>About Rare Mines</h4>
              <div className="sidebar-logo">
                <div className="sidebar-logo-hex"><span>R</span></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--crimson)' }}>RARE MINES</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--blue)' }}>Cleantech Pvt Ltd</div>
                </div>
              </div>
              <p>Pioneers in sustainable Li-Ion battery recycling using our proprietary HYBRID-HYDROMETALLURGY™ process.</p>
              <Link to="/about-us" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Learn More
              </Link>
            </div>
            <div className="sidebar-card">
              <h4>Inquire With Us</h4>
              <p>Have Li-Ion batteries to recycle or need battery-grade materials?</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Contact Us
              </Link>
            </div>
            <div className="sidebar-card">
              <h4>Quick Links</h4>
              <ul className="sidebar-links">
                {[
                  { label: 'Battery Recycling', to: '/battery-recycling' },
                  { label: 'Our Products', to: '/products' },
                  { label: 'Li-Ion Battery Info', to: '/li-ion-battery' },
                  { label: 'SDG Goals', to: '/sdg-goals' },
                ].map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="footer__link" style={{ color: 'var(--blue)' }}>→ {l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Back */}
      <div className="blog-post-back">
        <div className="container">
          <Link to="/blog" className="btn btn-outline">← Back to All Posts</Link>
        </div>
      </div>
    </div>
  );
}
