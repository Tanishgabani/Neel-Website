import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="page-hero page-hero--about">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="section-eyebrow">Who We Are</span>
          <h1>About Rare Mines</h1>
          <p>A clean technology company committed to a sustainable future through innovative battery recycling.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__visual">
              <div className="about-hex-display">
                <div className="about-hex-main">
                  <div className="about-hex-inner">
                    <span>R</span>
                  </div>
                </div>
                <div className="about-hex-accent about-hex-accent--1">Li</div>
                <div className="about-hex-accent about-hex-accent--2">Co</div>
                <div className="about-hex-accent about-hex-accent--3">Ni</div>
              </div>
            </div>
            <div className="about-intro__content">
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="section-title">#OneMoreEffort for a Better World</h2>
              <div className="divider"></div>
              <p>
                Rare Mines Cleantech Pvt Ltd is a fast-growing Clean Technology company that develops low-cost, carbon-neutral extraction and recycling processes to obtain precious commodities from lithium-ion batteries and industrial by-products.
              </p>
              <p>
                We are optimistic about the future. Our proprietary <strong>HYBRID-HYDROMETALLURGY™ (HHM)</strong> process enables us to extract valuable materials at the most affordable cost, while continuously increasing our impact on reducing CO₂ emissions.
              </p>
              <p>
                Based in Bengaluru, Karnataka, India, we serve battery manufacturers, automotive companies, electronics producers, and government entities — helping them meet sustainability goals and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Core Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🌍', title: 'Environmental Stewardship', desc: 'We design every process to minimize waste and emissions, creating a genuinely closed-loop circular economy.', color: 'var(--green)' },
              { icon: '💡', title: 'Innovation', desc: 'Our patented HHM™ process represents years of research and development to outperform existing recycling methods.', color: 'var(--blue)' },
              { icon: '🤝', title: 'Partnerships', desc: 'We believe in collaborative impact — working with industries, institutions, and governments for systemic change.', color: 'var(--crimson)' },
              { icon: '📊', title: 'Transparency', desc: 'We hold ourselves to the highest standards of accountability and openness with our partners and stakeholders.', color: 'var(--green)' },
              { icon: '⚡', title: 'Urgency', desc: 'We understand that the climate crisis demands immediate action. Every ton recycled matters, today.', color: 'var(--crimson)' },
              { icon: '🔬', title: 'Scientific Rigor', desc: 'Every claim we make is backed by validated research and measurable environmental outcomes.', color: 'var(--blue)' },
            ].map(v => (
              <div key={v.title} className="value-card" style={{ '--vc-color': v.color }}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">Key Milestones</h2>
          </div>
          <div className="timeline">
            {[
              { year: '2019', event: 'Founded', desc: 'Rare Mines Cleantech established with a focus on Li-Ion battery recycling R&D.' },
              { year: '2020', event: 'IP Development', desc: 'HYBRID-HYDROMETALLURGY™ process patented. Initial lab-scale validation completed.' },
              { year: '2021', event: 'First Commercial Order', desc: 'Successfully fulfilled first commercial recycling order. UNIDO recognition received.' },
              { year: '2022', event: 'Industry Partnerships', desc: 'Technology validation by GEF/BEE. Supported by Oil India Limited (OIL).' },
              { year: '2023', event: 'Accelerated Growth', desc: 'Top 30 Cleantech Startups of India. MoU with Karnataka Govt worth ₹350 Crore.' },
              { year: '2024+', event: 'Scale Up', desc: 'Scaling commercial operations. Building critical minerals refining complex.' },
            ].map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-item__year">{m.year}</div>
                <div className="timeline-item__dot"></div>
                <div className="timeline-item__content">
                  <h4>{m.event}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Partner for a Sustainable Future?</h2>
            <p>Whether you have batteries to recycle or need critical minerals — we have the solution.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/battery-recycling" className="btn btn-outline-white">Our Process</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
