import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const SVGIcons = {
  leaf: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><line x1="2" y1="22" x2="11" y2="20"></line></svg>,
  users: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  shield: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
};

export default function ESG() {
  const pillars = [
    {
      title: 'Environmental',
      icon: SVGIcons.leaf,
      color: 'var(--green)',
      items: [
        { label: 'Carbon-Neutral Recycling', desc: 'Our proprietary HHM™ process eliminates high-temperature smelting, resulting in a zero-net carbon footprint.' },
        { label: 'Sustainable Recovery', desc: 'Diverting millions of batteries from landfills by recovering 95%+ of critical minerals like Lithium, Cobalt, and Nickel.' }
      ]
    },
    {
      title: 'Social',
      icon: SVGIcons.users,
      color: 'var(--blue)',
      items: [
        { label: 'India-First Opportunity', desc: 'Creating high-skill green jobs and supporting local talent to lead the global clean-tech frontier.' },
        { label: 'Ethical Operations', desc: 'Ensuring a safe, fair, and sustainable shift to electric mobility while protecting the communities we serve.' }
      ]
    },
    {
      title: 'Governance',
      icon: SVGIcons.shield,
      color: 'var(--crimson)',
      items: [
        { label: 'Absolute Transparency', desc: 'Maintaining rigorous compliance with CPCB and global environmental standards in every operation.' },
        { label: 'Responsible Sourcing', desc: 'Strong internal systems ensuring integrity and ethical business practices throughout the supply chain.' }
      ]
    }
  ];

  return (
    <div className="esg-page">
      {/* Hero */}
      <section className="page-hero page-hero--esg" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--green) 100%)' }}>
        <div className="page-hero__bg">
          <div className="page-hero__bg-pattern"></div>
        </div>
        <div className="container page-hero__content">
          <span className="section-eyebrow" style={{ color: 'var(--white)', opacity: 0.8 }}>Sustainability First</span>
          <h1 style={{ color: 'var(--white)' }}>Our ESG Commitment</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>
            Driving sustainable impact through circular innovation, supporting India's self-reliance, and architecting a greener future.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="section-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-eyebrow">Our Vision</span>
            <h2 className="section-title">Architecting India’s Sustainable Future</h2>
            <p className="section-subtitle">
              Rare Mines Cleantech is more than a recycling company; we are architects of India’s sustainable tomorrow. Our responsibility towards the environment and society drives every innovation in our HHM™ process. By securing domestic supply chains for critical minerals, we empower India’s energy independence while ensuring a zero-waste future.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {pillars.map((p) => (
              <div key={p.title} style={{
                background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '3rem 2rem',
                border: '1px solid var(--light-gray)', transition: 'var(--transition)',
                boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden'
              }} className="card-lift">
                <div style={{ color: p.color, marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: 'var(--radius-md)' }}>
                  {p.icon}
                </div>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>{p.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {p.items.map(item => (
                    <div key={item.label}>
                      <h4 style={{ fontSize: '1rem', color: p.color, marginBottom: '0.4rem' }}>{item.label}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: p.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Measurable Progress</span>
            <h2 className="section-title">Our Impact Highlights</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { label: 'Material Recovery', value: '95%+', desc: 'Recovering critical battery materials at industry-leading rates.' },
              { label: 'CO₂ Footprint', value: 'Net-Zero', desc: 'Targeting a net-zero impact through carbon-neutral processing.' },
              { label: 'Circularity', value: '100% Domestic', desc: 'Building a fully localized, closed-loop supply chain for India.' },
            ].map(stat => (
              <div key={stat.label} style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--blue)', marginBottom: '0.5rem' }}>{stat.value}</div>
                <h4 style={{ marginBottom: '0.75rem' }}>{stat.label}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: 'linear-gradient(135deg, var(--crimson) 0%, var(--navy) 100%)' }}>
            <h2 style={{ maxWidth: '800px', margin: '0 auto 1.5rem', color: 'var(--white)' }}>“We are building a sustainable and self-reliant future for India’s energy ecosystem.”</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Join us in redefining rare for a better, greener world.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
              <Link to="/about-us" className="btn btn-outline-white">Our Mission</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
