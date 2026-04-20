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
          <p>From collection to crystallization — our end-to-end HHM™ process transforms end-of-life batteries natively in India, securing valuable resources for the domestic supply chain.</p>
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
              { icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H8.32a2 2 0 00-1.93 1.46L4 14v2h3m7 0v-2m-7 0a3 3 0 106 0m4 0a3 3 0 106 0"/></svg>, label: 'EV Batteries', desc: 'Complete packs and modules' },
              { icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>, label: 'Consumer Electronics', desc: 'Laptops, phones, tablets' },
              { icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, label: 'Grid Storage', desc: 'Stationary energy systems' },
              { icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, label: 'Industrial Batteries', desc: 'UPS, forklifts, aerospace' },
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
              Our indigenous HYBRID-HYDROMETALLURGY™ process recycles end-of-life lithium-ion batteries into fresh battery materials right here in India, building a resilient closed-loop economy.
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
              { title: 'Carbon Neutral', icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 014 13v-3h3v3a4 4 0 004 4h3m4-4h3V4h-3v3a4 4 0 00-4 4h-3m4 8v3h-3v-3"/></svg>, desc: 'Zero net carbon emissions. Closed-loop process with energy recovery at every stage.', color: 'var(--green)' },
              { title: 'No Toxic Emissions', icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>, desc: 'Aqueous chemistry eliminates toxic gas emissions associated with high-temperature smelting.', color: 'var(--blue)' },
              { title: '≥95% Recovery Rate', icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>, desc: 'Industry-leading material recovery rates — maximizing value from every battery processed.', color: 'var(--crimson)' },
              { title: 'Battery-Grade Purity', icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>, desc: 'Direct cathode precursor synthesis — no intermediate steps required before reuse.', color: 'var(--blue)' },
              { title: 'Handles All Chemistries', icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31L20 16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4l6-6.69V9.31Z"/></svg>, desc: 'Single unified process handles NMC, NCA, LFP, LMO, and all major Li-Ion chemistries.', color: 'var(--green)' },
              { title: 'Self-Reliant & Cost Competitive', icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 5V3a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><circle cx="12" cy="12" r="3"/></svg>, desc: 'Lower energy requirements and zero import dependency keep operational costs minimal for India.', color: 'var(--crimson)' },
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
