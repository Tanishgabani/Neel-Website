import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './Pages.css';

export default function Admin() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchBlogs();
  }, [navigate]);

  const fetchBlogs = async () => {
    try {
      const res = await api.get('/api/blogs?limit=100');
      setBlogs(res.data.blogs);
    } catch (err) {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const token = localStorage.getItem('token');
      await api.delete(`/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBlogs(blogs.filter(b => b._id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Loading dashboard...</div>;

  return (
    <div className="admin-page site-theme-update">
      <section className="page-hero" style={{ minHeight: 'auto', padding: '6rem 0 3rem', background: 'var(--navy)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--white)' }}>Admin Dashboard</h1>
            <p style={{ color: 'var(--text-light)' }}>Manage your blog posts and site content.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/admin/blog/new" className="btn btn-primary" style={{ borderRadius: 'var(--radius-md)' }}>+ Create Post</Link>
            <button onClick={handleLogout} className="btn btn-outline-white" style={{ borderRadius: 'var(--radius-md)' }}>Logout</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {error && <div style={{ color: 'var(--crimson)', marginBottom: '1rem' }}>{error}</div>}
          
          <div className="card-light" style={{ padding: '2rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--light-gray)' }}>
                  <th style={{ padding: '1rem' }}>Title</th>
                  <th style={{ padding: '1rem' }}>Category</th>
                  <th style={{ padding: '1rem' }}>Date</th>
                  <th style={{ padding: '1rem' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map(blog => (
                  <tr key={blog._id} style={{ borderBottom: '1px solid var(--light-gray)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{blog.title}</td>
                    <td style={{ padding: '1rem' }}>
                      <span className="badge badge-blue">{blog.category}</span>
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <Link to={`/admin/blog/edit/${blog._id}`} style={{ color: 'var(--blue)', fontWeight: 600 }}>Edit</Link>
                        <button 
                          onClick={() => handleDelete(blog._id)} 
                          style={{ background: 'none', border: 'none', color: 'var(--crimson)', fontWeight: 600, cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {blogs.length === 0 && (
                  <tr>
                    <td colSpan="4" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      No blogs found. Start by creating your first post!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
