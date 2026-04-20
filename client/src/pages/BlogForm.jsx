import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import api from '../utils/api';
import './Pages.css';

const CATEGORIES = ['Technology', 'Sustainability', 'Industry News', 'Company Updates', 'Research'];

export default function BlogForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Technology',
    coverImage: '',
    tags: '',
    published: true,
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    if (isEdit) fetchBlog();
  }, [id, isEdit, navigate]);

  const fetchBlog = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/api/blogs/id/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const blog = res.data;
      setForm({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        coverImage: blog.coverImage || '',
        tags: blog.tags?.join(', ') || '',
        published: blog.published,
      });
      if (blog.coverImage) setPreview(blog.coverImage);
    } catch (err) {
      console.error(err);
      alert('Failed to load blog data');
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Local preview
    setPreview(URL.createObjectURL(file));

    // Upload immediately
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('token');
      const res = await api.post('/api/blogs/upload', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      setForm(prev => ({ ...prev, coverImage: res.data.filePath }));
    } catch (err) {
      alert('Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleContentChange = (content) => {
    setForm(prev => ({ ...prev, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uploading) return alert('Please wait for the image to finish uploading');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const payload = {
        ...form,
        tags: form.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      };

      if (isEdit) {
        await api.put(`/api/blogs/${id}`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await api.post('/api/blogs', payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      navigate('/admin');
    } catch (err) {
      alert('Failed to save blog');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div className="container" style={{ padding: '4rem' }}>Loading blog data...</div>;

  return (
    <div className="blog-form-page site-theme-update">
      <section className="page-hero" style={{ minHeight: 'auto', padding: '6rem 0 3rem' }}>
        <div className="container">
          <h1>{isEdit ? 'Edit' : 'Create'} Blog Post</h1>
          <p>Fill in the details below to {isEdit ? 'update the' : 'publish a new'} post.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form onSubmit={handleSubmit} className="card-light" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="contact-form-grid">
              <div className="form-group full">
                <label>Blog Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter a compelling title"
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select name="category" value={form.category} onChange={handleChange}>
                  {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Tags (comma separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="e.g. recycling, lithium, green"
                />
              </div>

              <div className="form-group full">
                <label>Cover Image {uploading && <span style={{ color: 'var(--blue)', fontSize: '0.75rem' }}> (Uploading...)</span>}</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ marginBottom: '1rem' }}
                />
                {preview && (
                  <div style={{ width: '100%', height: '200px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem', border: '1px solid var(--light-gray)' }}>
                    <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>

              <div className="form-group full">
                <label>Excerpt (Short Summary)</label>
                <textarea
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  placeholder="A brief introduction to the post"
                  style={{ minHeight: '80px' }}
                  required
                />
              </div>

              <div className="form-group full">
                <label>Content</label>
                <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', minHeight: '300px' }}>
                  <ReactQuill 
                    theme="snow" 
                    value={form.content} 
                    onChange={handleContentChange}
                    style={{ height: '300px', marginBottom: '3rem' }}
                  />
                </div>
              </div>

              <div className="form-group full" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <input
                  type="checkbox"
                  name="published"
                  checked={form.published}
                  onChange={handleChange}
                  style={{ width: 'auto' }}
                />
                <label style={{ margin: 0 }}>Publish immediately</label>
              </div>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ flex: 1, borderRadius: 'var(--radius-md)' }}
                disabled={loading}
              >
                {loading ? 'Saving...' : isEdit ? 'Update Post' : 'Publish Blog Post'}
              </button>
              <button 
                type="button" 
                className="btn btn-outline" 
                style={{ flex: 1, borderRadius: 'var(--radius-md)' }}
                onClick={() => navigate('/admin')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
