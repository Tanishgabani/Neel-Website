import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function Products() {
  const products = [
    {
      symbol: 'Li', atomicNum: 3,
      name: 'Lithium Carbonate / Hydroxide',
      grade: 'Battery Grade',
      purity: '≥99.5%',
      color: 'var(--crimson)',
      desc: 'Battery-grade lithium compounds for direct re-entry into cathode manufacturing. Suitable for NMC, NCA, LFP, and LNMO chemistries.',
      applications: ['EV Batteries', 'Grid Storage', 'Consumer Electronics'],
    },
    {
      symbol: 'Co', atomicNum: 27,
      name: 'Cobalt Sulfate',
      grade: 'Battery Grade',
      purity: '≥99.8%',
      color: 'var(--blue)',
      desc: 'High-purity cobalt sulfate recovered from end-of-life batteries. Meets international battery manufacturing specifications.',
      applications: ['NMC Cathodes', 'NCA Cathodes', 'Electroplating'],
    },
    {
      symbol: 'Ni', atomicNum: 28,
      name: 'Nickel Sulfate',
      grade: 'Battery Grade',
      purity: '≥22% Ni',
      color: 'var(--teal)',
      desc: 'Recovered nickel sulfate for high-energy cathode materials. Supports the industry\'s shift toward higher nickel content batteries.',
      applications: ['High-Energy Cathodes', 'EV Batteries', 'Industrial'],
    },
    {
      symbol: 'Mn', atomicNum: 25,
      name: 'Manganese Sulfate',
      grade: 'Battery Grade',
      purity: '≥99.5%',
      color: 'var(--navy)',
      desc: 'Manganese sulfate monohydrate for LMO and NMC cathode synthesis. An essential component for next-generation battery chemistries.',
      applications: ['LMO Batteries', 'NMC Cathodes', 'Fertilizers'],
    },
    {
      symbol: 'Cu', atomicNum: 29,
      name: 'Copper Scrap / Foil',
      grade: 'Industrial Grade',
      purity: '≥99%',
      color: 'var(--gold)',
      desc: 'High-purity copper recovered from battery current collectors and electronic waste, suitable for industrial applications.',
      applications: ['Electrical Wiring', 'Electronics', 'Industrial Manufacturing'],
    },
    {
      symbol: 'Al', atomicNum: 13,
      name: 'Aluminium Scrap',
      grade: 'Industrial Grade',
      purity: '≥98%',
      color: 'var(--teal)',
      desc: 'Recovered aluminium from battery casings and cathode current collectors, ready for re-smelting and re-use.',
      applications: ['Packaging', 'Automotive', 'Construction'],
    },
  ];

  return (
    <div className="products-page">
      <section className="page-hero page-hero--products" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%)' }}>
        <div className="page-hero__bg">
          <div className="page-hero__bg-pattern"></div>
        </div>
        <div className="container page-hero__content">
          <span className="section-eyebrow" style={{ color: 'var(--gold)' }}>Make In India</span>
          <h1 style={{ color: 'var(--white)' }}>Our Products</h1>
          <p style={{ color: 'var(--text-light)' }}>Indigenous, battery-grade, and industrial-grade materials recovered through our HHM™ recycling process.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-center" style={{ marginBottom: '3.5rem' }}>
            <span className="section-eyebrow">Product Portfolio</span>
            <h2 className="section-title">Critical Minerals for India's Supply Chain</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Every material we recover re-enters the domestic supply chain at the highest possible purity, eliminating reliance on imported raw materials.
            </p>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card">
                <div className="product-card__header" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '70px', height: '70px', background: p.color, margin: '0 auto 0.5rem',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>{p.symbol}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: p.color }}>#{p.atomicNum}</div>
                  </div>
                </div>
                <div className="product-card__body">
                  <div className="product-card__demand">
                    <span style={{ background: `${p.color}15`, color: p.color, padding: '0.2rem 0.5rem', borderRadius: '3px', fontSize: '0.7rem', fontWeight: 700 }}>
                      {p.grade} · {p.purity}
                    </span>
                  </div>
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc" style={{ marginBottom: '1rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.applications.map(a => (
                      <span key={a} style={{
                        background: 'var(--off-white)', padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)', fontSize: '0.72rem', color: 'var(--text-muted)'
                      }}>{a}</span>
                    ))}
                  </div>
                  <div className="product-card__bottom-border" style={{ background: p.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="cta-box" style={{ background: 'linear-gradient(135deg, var(--blue-dark), var(--green-dark))' }}>
            <h2>Need Specific Battery-Grade Materials?</h2>
            <p>Tell us your specifications and volume requirements — we'll secure your domestic supply chain needs.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Request Quotation</Link>
              <Link to="/battery-recycling" className="btn btn-outline-white">Learn About Our Process</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
