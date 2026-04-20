import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './Pages.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await api.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <section className="page-hero" style={{ minHeight: 'auto', padding: '6rem 0 3rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem' }}>Admin Access</h1>
          <p>Manage the Rare Mines blog and content.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-form-card" style={{ maxWidth: '450px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Login</h2>
            <form onSubmit={handleLogin} className="contact-form">
              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@raremines.com"
                  required
                />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <p style={{ color: 'var(--crimson)', fontSize: '0.875rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {error}
                </p>
              )}

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', borderRadius: 'var(--radius-md)', padding: '1rem' }}
                disabled={loading}
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
