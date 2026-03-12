import React, { useState } from 'react';
import axios from 'axios';
import './Pages.css';

export function SdgGoals() {
  const sdgs = [
    { num: 3, title: 'Good Health', desc: 'Reducing toxic heavy metal exposure from improper battery disposal.', color: '#4c9f38' },
    { num: 7, title: 'Clean Energy', desc: 'Enabling affordable, clean energy through battery supply chain sustainability.', color: '#fcc30b' },
    { num: 8, title: 'Decent Work', desc: 'Creating quality jobs in the clean technology and recycling sector.', color: '#a21942' },
    { num: 9, title: 'Industry & Innovation', desc: 'Pioneering patented processes for sustainable industrial transformation.', color: '#fd6925' },
    { num: 12, title: 'Responsible Consumption', desc: 'Closing the loop on battery materials through circular economy principles.', color: '#bf8b2e' },
    { num: 13, title: 'Climate Action', desc: 'Carbon-neutral recycling reducing reliance on carbon-intensive virgin mining.', color: '#3f7e44' },
    { num: 14, title: 'Life Below Water', desc: 'Preventing hazardous battery chemicals from reaching water bodies.', color: '#0a97d9' },
    { num: 15, title: 'Life on Land', desc: 'Reducing land degradation caused by improper battery disposal.', color: '#56c02b' },
    { num: 17, title: 'Partnerships', desc: 'Collaborating with governments, industries, and institutions for systemic impact.', color: '#19486a' },
  ];

  return (
    <div className="sdg-page">
      <section className="page-hero page-hero--sdg">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="section-eyebrow">UN Goals</span>
          <h1>Sustainable Development Goals</h1>
          <p>How Rare Mines Cleantech contributes to the United Nations SDGs through our operations and technology.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Our Commitment</span>
            <h2 className="section-title">Contributing to a Better World</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3.5rem' }}>
              The United Nations Sustainable Development Goals provide the framework we align our operations with. Clean technology sits at the intersection of multiple SDGs.
            </p>
          </div>
          <div className="sdg-grid">
            {sdgs.map(s => (
              <div key={s.num} className="sdg-card" style={{ background: s.color }}>
                <div className="sdg-card__num">{s.num}</div>
                <div className="sdg-card__title">{s.title}</div>
                <p className="sdg-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__content">
              <span className="section-eyebrow">Measuring Impact</span>
              <h2 className="section-title">Our Environmental Impact</h2>
              <div className="divider"></div>
              <p>For every tonne of batteries we recycle, we prevent approximately <strong>12 tonnes of CO₂ equivalent</strong> from being released — compared to extracting the same materials through virgin mining.</p>
              <p>Our closed-loop water recycling system reduces freshwater consumption by <strong>up to 70%</strong> versus conventional hydrometallurgical processes.</p>
              <p>By recovering and refining materials domestically, we reduce India's dependence on imported critical minerals — strengthening national energy security while creating local employment.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: '12 tonnes', label: 'CO₂ Prevented per Tonne Recycled', color: 'var(--green)' },
                { value: '70%', label: 'Water Consumption Reduction', color: 'var(--blue)' },
                { value: '95%', label: 'Material Recovery Rate', color: 'var(--crimson)' },
                { value: 'Zero', label: 'Toxic Gas Emissions', color: 'var(--green)' },
              ].map(m => (
                <div key={m.label} style={{
                  background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '1.5rem',
                  textAlign: 'center', borderTop: `3px solid ${m.color}`
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: m.color, marginBottom: '0.5rem' }}>{m.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    industry: '', inquiryType: 'general', message: '',
  });
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      setSubmitted(true);
    } catch (err) {
      setStatus(err.response?.data?.message || 'Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero page-hero--contact">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="section-eyebrow">Reach Out</span>
          <h1>Contact Us</h1>
          <p>Have a battery recycling need, or looking for critical minerals? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div>
              <span className="section-eyebrow">Get In Touch</span>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>We're Here to Help</h2>
              <div className="contact-info-cards">
                {[
                  { icon: '📞', label: 'Phone', value: '+91-080-29908945 / +91-7899752431' },
                  { icon: '✉️', label: 'Email', value: 'info@raremines.com' },
                  { icon: '📍', label: 'Address', value: 'Bengaluru, Karnataka, India — 561203' },
                  { icon: '🕐', label: 'Business Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM IST' },
                ].map(c => (
                  <div key={c.label} className="contact-info-card">
                    <div className="contact-info-card__icon">{c.icon}</div>
                    <div>
                      <div className="contact-info-card__label">{c.label}</div>
                      <div className="contact-info-card__value">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--green)' }}>
                <h4 style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>OIL Supported</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Proud to be supported by Oil India Limited — one of India's premier national oil companies committed to a clean energy future.
                </p>
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✅</div>
                  <h3>Message Received!</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. Our team will get back to you within 1–2 business days.</p>
                  <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ marginBottom: '0.25rem' }}>Send Us a Message</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>Fill in the form and we'll respond promptly.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="contact-form-grid">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" />
                      </div>
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" />
                      </div>
                      <div className="form-group">
                        <label>Company Name</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Your organization" />
                      </div>
                      <div className="form-group">
                        <label>Industry</label>
                        <select name="industry" value={form.industry} onChange={handleChange}>
                          <option value="">Select Industry</option>
                          {['Automotive', 'Cell & Battery Manufacturing', 'Consumer', 'Industrial', 'Virgin Metals', 'Intermediates', 'Copper Scrap', 'Other'].map(i => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Inquiry Type</label>
                        <select name="inquiryType" value={form.inquiryType} onChange={handleChange}>
                          <option value="general">General Inquiry</option>
                          <option value="raw_materials">Raw Materials</option>
                          <option value="recycling">Battery Recycling</option>
                          <option value="epr_partnership">EPR Partnership</option>
                        </select>
                      </div>
                      <div className="form-group full">
                        <label>Message *</label>
                        <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your needs..." />
                      </div>
                    </div>
                    {status && <p style={{ color: 'var(--crimson)', fontSize: '0.875rem', marginBottom: '1rem' }}>{status}</p>}
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <div className="not-found__code">404</div>
        <h2 className="not-found__title">Page Not Found</h2>
        <p className="not-found__desc">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn btn-primary">← Back to Home</a>
      </div>
    </div>
  );
}
