// LiIonBattery.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import './Blog.css';

export function LiIonBattery() {
  return (
    <div className="liion-page">
      <section className="page-hero page-hero--liion" style={{ background: 'linear-gradient(135deg, var(--crimson) 0%, var(--navy) 100%)' }}>
        <div className="page-hero__bg">
          <div className="page-hero__bg-pattern"></div>
        </div>
        <div className="container page-hero__content">
          <span className="section-eyebrow" style={{ color: 'var(--teal)' }}>India's EV Future</span>
          <h1 style={{ color: 'var(--white)' }}>Li-Ion Battery Recycling</h1>
          <p style={{ color: 'var(--text-light)' }}>Securing the critical minerals needed for India's rapidly growing EV ecosystem.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__content">
              <span className="section-eyebrow">The Most Dominant Battery Technology</span>
              <h2 className="section-title">Why Lithium-Ion Batteries Matter</h2>
              <div className="divider divider-blue"></div>
              <p>
                Lithium-Ion Batteries (LiBs) are the most widely used and primary battery technology, having become irreplaceable in modern life. They power portable electronics, EVs, satellites, and grid storage systems — and are central to the global effort to tackle climate change.
              </p>
              <p>
                However, their explosive growth, especially in India's booming EV sector, creates a serious end-of-life challenge. By 2030, the world will face <strong>2.3 million metric tonnes</strong> of end-of-life Li-ion batteries globally — requiring efficient, sustainable recycling at scale.
              </p>
              <p>
                At Rare Mines, we ensure that India is not left dependent on raw material imports. We are building the infrastructure to turn this challenge into an Atmanirbhar Bharat opportunity — extracting critical minerals natively and returning them to the domestic supply chain.
              </p>
            </div>
            <div>
              <div className="tech-detail-grid">
                {[
                  { value: '1,500', unit: 'GWh', label: 'Global Li-Ion Market by 2030', color: 'var(--blue)' },
                  { value: '145M', unit: '', label: 'EVs on Road by 2030', color: 'var(--teal)' },
                  { value: '40X', unit: '', label: 'Lithium Demand Growth', color: 'var(--crimson)' },
                  { value: '2.3M MT', unit: '', label: 'EOL Batteries by 2030', color: 'var(--gold)' },
                  { value: '95%', unit: '', label: 'Material Recovery Rate', color: 'var(--teal)' },
                  { value: 'Carbon', unit: '', label: 'Neutral Process', color: 'var(--blue)' },
                ].map(s => (
                  <div key={s.label} className="card-dark" style={{ padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: s.color, marginBottom: '0.25rem' }}>{s.value}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-light)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Composition</span>
            <h2 className="section-title">Critical Minerals in Li-Ion Batteries</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              Each battery contains valuable materials that can be extracted, refined, and re-entered into the supply chain.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { num: 3, mass: '6.94', symbol: 'Li', name: 'Lithium', demand: '250,000–450,000 TON demand by 2030', color: 'var(--crimson)', desc: 'Essential for battery cathodes. Powers the charge-discharge cycle in every Li-ion cell.' },
              { num: 27, mass: '58.93', symbol: 'Co', name: 'Cobalt', demand: '1.3M–2.4M TON demand by 2030', color: 'var(--blue)', desc: 'Stabilizes battery chemistry and improves energy density in NMC and NCA cathodes.' },
              { num: 28, mass: '58.69', symbol: 'Ni', name: 'Nickel', demand: '250,000–450,000 TON demand by 2030', color: 'var(--teal)', desc: 'Increases energy capacity and reduces cost. Trending toward higher Ni content batteries.' },
            ].map(el => (
              <div key={el.symbol} className="card-light" style={{ padding: '2rem', borderTop: `4px solid ${el.color}` }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '70px', height: '70px', background: `${el.color}15`, border: `1px solid ${el.color}50`,
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: el.color }}>{el.symbol}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>{el.name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>Atomic No. {el.num} · {el.mass} u</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{el.desc}</p>
                <div style={{
                  background: `${el.color}10`, padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem', fontFamily: 'var(--font-body)', color: el.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase'
                }}>{el.demand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Recycle Your Li-Ion Batteries?</h2>
            <p>Our HHM™ process handles all types of Li-Ion batteries efficiently and sustainably.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/battery-recycling" className="btn btn-outline-white">Our Process →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
