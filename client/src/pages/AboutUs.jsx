import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Pages.css';

/* ---- Reusable Reveal Hook ---- */
function useReveal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return { ref, inView };
}

const SVGIcons = {
  target: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
  eye: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
  leaf: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><line x1="2" y1="22" x2="11" y2="20"></line></svg>,
  bulb: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>,
  handshake: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  zap: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  flask: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H15M10 9H14M3 21H21M7 21A2 2 0 0 1 5 19V14L9 10V3H15V10L19 14V19A2 2 0 0 1 17 21"/></svg>
};

export default function AboutUs() {
  const { ref: introRef, inView: introVisible } = useReveal();
  const { ref: valuesRef, inView: valuesVisible } = useReveal();
  const { ref: timelineRef, inView: timelineVisible } = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page site-theme-update">
      <section className="page-hero page-hero--about">
        <div className="page-hero__bg">
          <div className="page-hero__bg-pattern"></div>
        </div>
        <div className="container page-hero__content">
          <span className="section-eyebrow">Who We Are</span>
          <h1 className="hero__title">About Rare Mines</h1>
          <p className="hero__tagline">An indigenous clean technology company committed to India's self-reliance (Atmanirbhar Bharat) and a sustainable future.</p>
        </div>
      </section>

      {/* Mission / Vision Cards */}
      <section className="section about-intro-section">
        <div className="container">
          <div className={`about-intro-grid reveal ${introVisible ? 'visible' : ''}`} ref={introRef}>
            <div className="mission-card card-lift">
              <div className="mission-card__icon">{SVGIcons.target}</div>
              <h2 className="mission-card__title">Our Mission</h2>
              <div className="mission-card__border" style={{backgroundColor: 'var(--crimson)'}}></div>
              <p>
                Rare Mines Cleantech Pvt Ltd is an indigenous, fast-growing clean technology company that develops low-cost, carbon-neutral extraction and recycling processes. We proudly support the Make in India initiative by recovering precious critical minerals locally.
                <br /><br />
                We are building the foundation for Atmanirbhar Bharat. Our proprietary <strong>HYBRID-HYDROMETALLURGY™ (HHM)</strong> process eliminates import dependency, allowing us to extract valuable materials natively at the most affordable cost.
                <br /><br />
                Based in Bengaluru, Karnataka, India, we serve domestic battery manufacturers, automotive companies, and government entities — helping India meet its strategic energy resilience goals and regulatory compliance.
              </p>
            </div>
            
            <div className="mission-card card-lift">
              <div className="mission-card__icon" style={{color: 'var(--blue)'}}>{SVGIcons.eye}</div>
              <h2 className="mission-card__title">Our Vision</h2>
              <div className="mission-card__border" style={{backgroundColor: 'var(--blue)'}}></div>
              <p>
                To pioneer fully closed-loop ecosystems that redefine India's resource management. We envision an independent India where critical minerals are infinitely recovered domestically, completely offsetting the need for new, imported raw materials.
                <br /><br />
                Through continuous scaling of our home-grown HHM™ technologies, our objective is to become the backbone of India's EV and battery ecosystem, securing the nation's successful transition to 100% clean energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section pattern-bg" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-center">
            <span className="section-eyebrow">Core Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className={`values-grid reveal ${valuesVisible ? 'visible' : ''}`} ref={valuesRef}>
            {[
              { icon: SVGIcons.leaf, title: 'Environmental Stewardship', desc: 'We design every process to minimize waste and emissions, creating a genuinely closed-loop circular economy.', color: 'var(--green)' },
              { icon: SVGIcons.bulb, title: 'Innovation', desc: 'Our patented HHM™ process represents years of research and development to outperform existing recycling methods.', color: 'var(--blue)' },
              { icon: SVGIcons.handshake, title: 'Partnerships', desc: 'We believe in collaborative impact — working with industries, institutions, and governments for systemic change.', color: 'var(--crimson)' },
              { icon: SVGIcons.shield, title: 'Transparency', desc: 'We hold ourselves to the highest standards of accountability and openness with our partners and stakeholders.', color: 'var(--green)' },
              { icon: SVGIcons.zap, title: 'National Security', desc: 'Critical minerals dictate the future of energy. Securing sovereign domestic supply chains is an immediate national imperative.', color: 'var(--crimson)' },
              { icon: SVGIcons.flask, title: 'Scientific Rigor', desc: 'Every claim we make is backed by validated research and measurable environmental outcomes.', color: 'var(--blue)' },
            ].map(v => (
              <div key={v.title} className="tech-card card-lift" style={{ '--tc-color': v.color }}>
                <div className="tech-card__icon">{v.icon}</div>
                <h3 className="tech-card__title">{v.title}</h3>
                <p className="tech-card__desc">{v.desc}</p>
                <div className="tech-card__bottom-border"></div>
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
          <div className={`timeline reveal ${timelineVisible ? 'visible' : ''}`} ref={timelineRef}>
            {[
              { year: '2019', event: 'Founded', desc: 'Rare Mines Cleantech established with a focus on Li-Ion battery recycling R&D.', dotColor: 'var(--crimson)' },
              { year: '2020', event: 'IP Development', desc: 'HYBRID-HYDROMETALLURGY™ process patented. Initial lab-scale validation completed.', dotColor: 'var(--blue)' },
              { year: '2021', event: 'First Commercial Order', desc: 'Successfully fulfilled first commercial recycling order. UNIDO recognition received.', dotColor: 'var(--green)' },
              { year: '2022', event: 'Industry Partnerships', desc: 'Technology validation by GEF/BEE. Supported by Oil India Limited (OIL).', dotColor: 'var(--crimson)' },
              { year: '2023', event: 'Accelerated Growth', desc: 'Top 30 Cleantech Startups of India. MoU with Karnataka Govt worth ₹350 Crore.', dotColor: 'var(--blue)' },
              { year: '2024+', event: 'Scale Up', desc: 'Scaling commercial operations. Building critical minerals refining complex.', dotColor: 'var(--green)' },
            ].map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-item__year">{m.year}</div>
                <div className="timeline-item__dot" style={{ borderColor: m.dotColor, backgroundColor: m.dotColor, boxShadow: `0 0 0 3px ${m.dotColor}` }}></div>
                <div className="timeline-item__content">
                  <h4 style={{ color: m.dotColor }}>{m.event}</h4>
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
              <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '50px' }}>Get in Touch</Link>
              <Link to="/battery-recycling" className="btn btn-outline-white" style={{ borderRadius: '50px' }}>Our Process</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
