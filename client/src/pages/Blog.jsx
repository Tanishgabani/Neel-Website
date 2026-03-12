import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../utils/api';

import './Blog.css';

const CATEGORIES = ['All', 'Technology', 'Sustainability', 'Industry News', 'Company Updates', 'Research'];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, [category, page]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await api.get('/api/blogs', {
        params: { category, page, limit: 9 },
      });
      setBlogs(res.data.blogs);
      setTotalPages(res.data.totalPages);
    } catch {
      setError('Failed to load blog posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const seedBlogs = async () => {
    try {
      await api.get('/api/blogs/seed');
      fetchBlogs();
    } catch {}
  };

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="page-hero page-hero--blog">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="section-eyebrow">Knowledge Hub</span>
          <h1>Our Blog</h1>
          <p>Insights on clean technology, battery recycling, sustainability, and the future of critical minerals.</p>
        </div>
      </section>

      {/* Filter */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`blog-filter__btn ${category === cat ? 'active' : ''}`}
                onClick={() => { setCategory(cat); setPage(1); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section blog-grid-section">
        <div className="container">
          {loading ? (
            <div className="blog-loading">
              {[1,2,3,4,5,6].map(i => <div key={i} className="blog-skeleton" />)}
            </div>
          ) : error ? (
            <div className="blog-error">
              <p>{error}</p>
              <button className="btn btn-primary" onClick={seedBlogs}>Load Sample Posts</button>
            </div>
          ) : blogs.length === 0 ? (
            <div className="blog-empty">
              <div className="blog-empty__icon">📝</div>
              <h3>No posts yet</h3>
              <p>Check back soon, or load our sample posts.</p>
              <button className="btn btn-primary" onClick={seedBlogs}>Load Sample Posts</button>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="blog-pagination">
              <button
                className="blog-pagination__btn"
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >← Previous</button>
              <span className="blog-pagination__info">Page {page} of {totalPages}</span>
              <button
                className="blog-pagination__btn"
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
              >Next →</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function BlogCard({ blog }) {
  const categoryColors = {
    Technology: 'badge-blue',
    Sustainability: 'badge-green',
    'Industry News': 'badge-crimson',
    'Company Updates': 'badge-blue',
    Research: 'badge-green',
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  };

  return (
    <Link to={`/blog/${blog.slug}`} className="blog-card card">
      <div className="blog-card__img">
        <div className="blog-card__img-inner"></div>
        <span className={`badge ${categoryColors[blog.category] || 'badge-blue'} blog-card__cat`}>
          {blog.category}
        </span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>{formatDate(blog.createdAt)}</span>
          <span>{blog.readTime} min read</span>
        </div>
        <h3 className="blog-card__title">{blog.title}</h3>
        <p className="blog-card__excerpt">{blog.excerpt}</p>
        <div className="blog-card__footer">
          <div className="blog-card__author">
            <div className="blog-card__author-avatar">
              {blog.author?.name?.charAt(0) || 'R'}
            </div>
            <span>{blog.author?.name || 'Rare Mines Team'}</span>
          </div>
          <span className="blog-card__read-more">Read →</span>
        </div>
      </div>
    </Link>
  );
}
