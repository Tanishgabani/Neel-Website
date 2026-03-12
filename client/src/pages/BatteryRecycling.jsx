import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function BatteryRecycling() {
  const steps = [
    { step: 1, title: 'Collection & Sorting', desc: 'Batteries are collected from diverse sources — EV manufacturers, electronics companies, EPR partners, and consumers. They are sorted by chemistry (NMC, NCA, LFP, etc.) and condition for optimal processing.', color: 'var(--crimson)' },
    { step: 2, title: 'Dismantling & Discharging', desc: 'Safe discharging of residual energy, followed by mechanical dismantling into modules and cells. All operations comply with CPCB and state-level hazardous waste regulations.', color: 'var(--blue)' },
    { step: 3, title: 'Pre-Processing (Black Mass)', desc: 'Shredding and separation to produce "black mass" — the electrode material containing lithium, cobalt, nickel, and manganese — while separating copper foil, aluminum, and casing materials.', color: 'var(--green)' },
    { step: 4, title: 'HHM™ Leaching', desc: 'Our proprietary Hybrid Hydrometallurgy process selectively dissolves target metals using optimized aqueous chemistry at low temperatures — eliminating toxic gas emissions associated with pyrometallurgy.', color: 'var(--crimson)' },
    { step: 5, title: 'Purification & Separation', desc: 'Sequential solvent extraction, precipitation, and ion exchange processes separate individual metal streams at battery-grade purity levels of ≥99.5%.', color: 'var(--blue)' },
    { step: 6, title: 'Product Crystallization', desc: 'Final crystallization and drying to produce battery-grade lithium carbonate/hydroxide, cobalt sulfate, nickel sulfate, and manganese sulfate — ready for cathode manufacturing.', color: 'var(--green)' },
  ];

  return (
    <div className="recycling-page">
      <section className="page-hero page-hero--recycling">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="section-eyebrow">Our Core Service</span>
          <h1>Battery Recycling Services</h1>
          <p>From collection to crystallization — our end-to-end HHM™ process transforms end-of-life batteries into valuable resources.</p>
        </div>
      </section>

      {/* What We Accept */}
      <section className="section">
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Accepted Materials</span>
            <h2 className="section-title">What We Recycle</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '4rem' }}>
            {[
              { icon: '🚗', label: 'EV Batteries', desc: 'Complete packs and modules' },
              { icon: '📱', label: 'Consumer Electronics', desc: 'Laptops, phones, tablets' },
              { icon: '⚡', label: 'Grid Storage', desc: 'Stationary energy systems' },
              { icon: '🛸', label: 'Industrial Batteries', desc: 'UPS, forklifts, aerospace' },
            ].map(w => (
              <div key={w.label} style={{
                background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '2rem',
                textAlign: 'center', transition: 'var(--transition)', border: '1px solid var(--light-gray)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{w.icon}</div>
                <h4 style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>{w.label}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="section-center">
            <span className="section-eyebrow">Unique & Patented</span>
            <h2 className="section-title">The HHM™ Process</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Our HYBRID-HYDROMETALLURGY™ process recycles end-of-life lithium-ion batteries into fresh battery materials using the circular economy model.
            </p>
          </div>
          <div className="process-steps">
            {steps.map(s => (
              <div key={s.step} className="process-step" style={{ '--p-color': s.color }}>
                <div className="process-step__num">{s.step}</div>
                <div className="process-step__content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Why HHM™</span>
            <h2 className="section-title">Advantages Over Conventional Methods</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Carbon Neutral', icon: '🌿', desc: 'Zero net carbon emissions. Closed-loop process with energy recovery at every stage.', color: 'var(--green)' },
              { title: 'No Toxic Emissions', icon: '💨', desc: 'Aqueous chemistry eliminates toxic gas emissions associated with high-temperature smelting.', color: 'var(--blue)' },
              { title: '≥95% Recovery Rate', icon: '♻️', desc: 'Industry-leading material recovery rates — maximizing value from every battery processed.', color: 'var(--crimson)' },
              { title: 'Battery-Grade Purity', icon: '🔬', desc: 'Direct cathode precursor synthesis — no intermediate steps required before reuse.', color: 'var(--blue)' },
              { title: 'Handles All Chemistries', icon: '⚗️', desc: 'Single unified process handles NMC, NCA, LFP, LMO, and all major Li-Ion chemistries.', color: 'var(--green)' },
              { title: 'Cost Competitive', icon: '💰', desc: 'Lower energy requirements and no import dependency keep operational costs minimal.', color: 'var(--crimson)' },
            ].map(a => (
              <div key={a.title} style={{
                background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '2rem',
                borderLeft: `4px solid ${a.color}`, transition: 'var(--transition)'
              }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h4 style={{ color: a.color, marginBottom: '0.5rem' }}>{a.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Start Recycling Your Batteries Today</h2>
            <p>Whether you have small volumes or large-scale battery waste — we have a solution for you.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/products" className="btn btn-outline-white">View Our Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
