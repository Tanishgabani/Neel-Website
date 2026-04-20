import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import api from '../utils/api';
import axios from 'axios';
import './Home.css';

/* ---- Reusable Reveal Hook ---- */
function useReveal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return { ref, inView };
}

/* ---- Stat Counter ---- */
function StatCounter({ end, suffix = '', prefix = '', label, sublabel }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className="stat-card">
      <div className="stat-card__number">
        {prefix}
        {inView ? <CountUp end={end} duration={2.5} separator="," /> : '0'}
        {suffix}
      </div>
      <div className="stat-card__label">{label}</div>
      {sublabel && <div className="stat-card__sublabel">{sublabel}</div>}
    </div>
  );
}

const SVGIcons = {
  flask: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H15M10 9H14M3 21H21M7 21A2 2 0 0 1 5 19V14L9 10V3H15V10L19 14V19A2 2 0 0 1 17 21"/></svg>,
  dollar: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
  leaf: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><line x1="2" y1="22" x2="11" y2="20"></line></svg>,
  shield: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  award: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
};

export default function Home() {
  const heroRef = useRef(null);

  const { ref: missionRef, inView: missionVisible } = useReveal();
  const { ref: techRef, inView: techVisible } = useReveal();
  const { ref: partnerRef, inView: partnerVisible } = useReveal();
  const { ref: marketRef, inView: marketVisible } = useReveal();

  return (
    <div className="home">
      {/* ====== HERO ====== */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          <div className="hero__bg-pattern"></div>
          <div className="hero__bg-glow hero__bg-glow--1"></div>
          <div className="hero__bg-glow hero__bg-glow--2"></div>
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-dot"></span>
              Clean Technology · Sustainable Future
            </div>
            <h1 className="hero__title">
              Redefining<br />
              <span className="hero__title-accent">Rare</span>
            </h1>
            <p className="hero__tagline">FOR A BETTER WORLD</p>
            <p className="hero__desc">
              We develop low-cost, carbon-neutral extraction and recycling processes right here in India, recovering precious commodities from Li-ion batteries to build a secure, domestic closed-loop supply chain.
            </p>
            <div className="hero__actions">
              <Link to="/battery-recycling" className="btn btn-primary hero__btn">
                Our Process
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/contact" className="btn btn-outline-white hero__btn">
                Inquire Now
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__globe-container animate-float">
              {/* Asteroids/Moons in background */}
              <div className="hero__moon hero__moon--1"></div>
              <div className="hero__moon hero__moon--2"></div>
              
              <div className="hero__globe">
                <svg viewBox="0 0 200 200" className="hero__globe-svg">
                  <defs>
                    <radialGradient id="globeOcean" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#1e3a8a" />
                      <stop offset="60%" stopColor="#0a1a6e" />
                      <stop offset="90%" stopColor="#08103d" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </radialGradient>
                    <filter id="halo">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <clipPath id="globeClip">
                      <circle cx="100" cy="100" r="90" />
                    </clipPath>
                    <radialGradient id="globeShadow" cx="30%" cy="30%" r="70%">
                      <stop offset="60%" stopColor="transparent" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
                    </radialGradient>
                  </defs>
                  
                  {/* Halo and base sphere */}
                  <circle cx="100" cy="100" r="90" fill="url(#globeOcean)" filter="url(#halo)" />
                  
                  {/* Continents */}
                  <g clipPath="url(#globeClip)">
                    <g className="globe-continents" fill="#15803d" opacity="0.95">
                      {/* Americas */}
                      <path d="M 25,45 C 35,35 60,30 55,40 C 65,40 70,50 65,65 C 55,75 50,60 40,70 C 35,80 40,90 45,95 C 45,100 40,105 35,100 C 30,95 25,85 20,70 C 15,55 20,50 25,45 Z" />
                      <path d="M 45,95 C 55,90 65,95 65,105 C 65,115 55,135 50,150 C 45,160 40,165 35,150 C 30,135 30,110 45,95 Z" />
                      {/* Eurasia */}
                      <path d="M 90,40 C 100,30 140,25 160,35 C 180,45 190,65 190,80 C 180,95 160,100 150,90 C 145,85 135,90 120,80 C 105,70 110,60 100,50 C 95,50 90,45 90,40 Z" />
                      {/* Africa */}
                      <path d="M 95,75 C 110,70 125,80 135,90 C 145,105 135,140 120,150 C 110,160 100,150 95,130 C 90,110 85,90 95,75 Z" />
                      {/* Australia & Islands */}
                      <path d="M 160,115 C 175,110 185,120 185,135 C 185,145 170,155 160,145 C 150,140 155,125 160,115 Z" />
                      <path d="M 140,110 C 145,110 145,115 140,115 Z M 190,150 C 195,150 195,155 190,155 Z" />

                      {/* Duplicate shifted right by 200 for scrolling loop */}
                      <path d="M 225,45 C 235,35 260,30 255,40 C 265,40 270,50 265,65 C 255,75 250,60 240,70 C 235,80 240,90 245,95 C 245,100 240,105 235,100 C 230,95 225,85 220,70 C 215,55 220,50 225,45 Z" />
                      <path d="M 245,95 C 255,90 265,95 265,105 C 265,115 255,135 250,150 C 245,160 240,165 235,150 C 230,135 230,110 245,95 Z" />
                      <path d="M 290,40 C 300,30 340,25 360,35 C 380,45 390,65 390,80 C 380,95 360,100 350,90 C 345,85 335,90 320,80 C 305,70 310,60 300,50 C 295,50 290,45 290,40 Z" />
                      <path d="M 295,75 C 310,70 325,80 335,90 C 345,105 335,140 320,150 C 310,160 300,150 295,130 C 290,110 285,90 295,75 Z" />
                      <path d="M 360,115 C 375,110 385,120 385,135 C 385,145 370,155 360,145 C 350,140 355,125 360,115 Z" />
                      <path d="M 340,110 C 345,110 345,115 340,115 Z M 390,150 C 395,150 395,155 390,155 Z" />
                    </g>
                  </g>

                  {/* Inner shadow for 3D effect */}
                  <circle cx="100" cy="100" r="90" fill="url(#globeShadow)" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  
                  {/* Dotted orbit ring */}
                  <circle cx="100" cy="100" r="105" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 8" />
                </svg>
              </div>
              {/* Orbiting elements */}
              <div className="hero__orbit hero__orbit--1">
                <div className="hero__orbit-dot">Li</div>
              </div>
              <div className="hero__orbit hero__orbit--2">
                <div className="hero__orbit-dot hero__orbit-dot--co">Co</div>
              </div>
              <div className="hero__orbit hero__orbit--3">
                <div className="hero__orbit-dot hero__orbit-dot--ni">Ni</div>
              </div>
              <div className="hero__orbit hero__orbit--4">
                <div className="hero__orbit-dot hero__orbit-dot--al">Al</div>
              </div>
              <div className="hero__orbit hero__orbit--5">
                <div className="hero__orbit-dot hero__orbit-dot--cu">Cu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ====== NEWS TICKER ====== */}
      <div className="ticker">
        <div className="ticker__inner">
          <span className="ticker__label">LATEST</span>
          <div className="ticker__track">
            <span>Rare Mines signs an MoU with the Karnataka govt worth ₹350-crore &nbsp;·&nbsp; Powering Atmanirbhar Bharat through Domestic Recycling &nbsp;·&nbsp; Securing India's Supply of Critical Minerals &nbsp;·&nbsp; Rare Mines signs an MoU with the Karnataka govt worth ₹350-crore &nbsp;·&nbsp; Unlocking India's EV Potential with Indigenous Technology &nbsp;·&nbsp; Building a Circular Economy for Make in India &nbsp;·&nbsp;</span>
          </div>
        </div>
      </div>

      {/* ====== CLIMATE STATS ====== */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-header">
            <span className="section-eyebrow">The Urgency</span>
            <h2 className="section-title">Why We Do What We Do</h2>
            <p className="section-subtitle">
              The IPCC estimates global temperature has risen 1°C above pre-industrial levels. Without action, we face catastrophic consequences.
            </p>
          </div>
          <div className="stats-grid">
            <StatCounter end={36} suffix="Bn MT" label="Annual CO₂ Emissions" sublabel="Billion Metric Tons" />
            <StatCounter end={101} suffix="mm" label="Sea Level Increase" sublabel="Since 1993" />
            <StatCounter end={421} suffix=" ppm" label="Highest CO₂ in 650,000 yrs" sublabel="Parts Per Million" />
            <StatCounter end={3.4} suffix="°C" label="Projected Rise by 2100" sublabel="Without action" />
          </div>
        </div>
      </section>

      {/* ====== LI-ION SECTION ====== */}
      <section className="section liion-section">
        <div className="container">
          <div className={`liion-inner reveal ${missionVisible ? 'visible' : ''}`} ref={missionRef}>
            <div className="liion-content">
              <span className="section-eyebrow">India First Focus</span>
              <h2 className="section-title">Fueling India's Transition to<br />Clean Energy</h2>
              <div className="divider"></div>
              <p>
                We reduce India's reliance on imported critical minerals through sustainable, localized Lithium-ion battery recycling. Our indigenous, carbon-neutral process extracts precious commodities natively, bolstering national energy security and championing the Make in India initiative.
              </p>
              <Link to="/li-ion-battery" className="btn btn-navy" style={{ marginTop: '1.5rem' }}>
                Learn More →
              </Link>
            </div>
            <div className="liion-elements">
              {[
                { num: 3, mass: '6.94', symbol: 'Li', name: 'Lithium', color: 'var(--crimson)' },
                { num: 27, mass: '58.93', symbol: 'Co', name: 'Cobalt', color: 'var(--blue)' },
                { num: 28, mass: '58.69', symbol: 'Ni', name: 'Nickel', color: 'var(--green)' },
                { num: 13, mass: '26.98', symbol: 'Al', name: 'Aluminum', color: '#a1a1a1' },
                { num: 29, mass: '63.55', symbol: 'Cu', name: 'Copper', color: '#b87333' },
              ].map((el) => (
                <div key={el.symbol} className="element-card glass-card-light" style={{ '--el-color': el.color }}>
                  <div className="element-card__top">
                    <div className="element-card__num">{el.num}</div>
                    <div className="element-card__mass">{el.mass}</div>
                  </div>
                  <div className="element-card__symbol">{el.symbol}</div>
                  <div className="element-card__name">{el.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== BATTERY PROJECTION ====== */}
      <section className="section projection-section">
        <div className="container">
          <div className={`reveal ${marketVisible ? 'visible' : ''}`} ref={marketRef}>
            <div className="projection-header">
              <span className="section-eyebrow">Market Outlook</span>
              <h2 className="section-title">Li-Ion Battery Projection for 2030</h2>
              <p className="section-subtitle">Soaring demand makes recycling not just responsible — it's essential.</p>
            </div>
            <div className="projection-stats">
              {[
                { value: '1,500', unit: 'GWh', label: 'Li-Ion Battery Market Globally', color: 'var(--crimson)' },
                { value: '$400B', unit: '+', label: 'Total Market Size', color: 'var(--blue)' },
                { value: '145M', unit: '', label: 'EVs on Roads by 2030', color: 'var(--green)' },
                { value: '40X', unit: '', label: 'Lithium Demand Growth Rate', color: '#e5a937ff' },
              ].map((s) => (
                <div key={s.label} className="projection-card glass-card-dark" style={{ '--p-color': s.color }}>
                  <div className="projection-card__value">{s.value}<span className="unit">{s.unit}</span></div>
                  <div className="projection-card__label">{s.label}</div>
                  <div className="projection-card__glow"></div>
                </div>
              ))}
            </div>
            <div className="projection-warning">
              <div className="projection-warning__icon">⚡</div>
              <div>
                <strong>2.3 Million MT</strong> of End-of-Life Li-Ion Batteries expected by 2030.<br />
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Recycling is no longer optional — it's a global imperative.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGY FEATURES ====== */}
      <section className="section tech-section">
        <div className="container">
          <div className="tech-header">
            <span className="section-eyebrow">What Makes Us Unique</span>
            <h2 className="section-title">Exceptional Technology at Work</h2>
          </div>
          <div className={`tech-grid reveal ${techVisible ? 'visible' : ''}`} ref={techRef}>
            {[
              {
                icon: SVGIcons.flask,
                title: 'Eliminating Dependency',
                desc: 'A unified process to recycle all types of Li-Ion batteries entirely within India, strengthening self-reliance.',
                color: 'var(--crimson)',
              },
              {
                icon: SVGIcons.dollar,
                title: 'Cost Effective',
                desc: 'Flexible model based on economies of scale, low cost of raw materials and solvents.',
                color: 'var(--blue)',
              },
              {
                icon: SVGIcons.leaf,
                title: 'Domestic Circularity',
                desc: 'Carbon Negative Process building a sustainable, localized closed-loop economy for India\'s future.',
                color: 'var(--green)',
              },
              {
                icon: SVGIcons.shield,
                title: 'Indigenous Innovation',
                desc: 'Patented, home-grown technology developed in India, setting a global benchmark for critical mineral recovery.',
                color: 'var(--crimson)',
              },
            ].map((f) => (
              <div key={f.title} className="tech-card card-lift" style={{ '--tc-color': f.color }}>
                <div className="tech-card__icon">{f.icon}</div>
                <h3 className="tech-card__title">{f.title}</h3>
                <p className="tech-card__desc">{f.desc}</p>
                <div className="tech-card__bottom-border"></div>
              </div>
            ))}
          </div>
          <div className="tech-process card shadow-sm">
            <span className="section-eyebrow">Our Process</span>
            <h3>The HYBRID-HYDROMETALLURGY-HHM™ Process</h3>
            <p>
              At the core of our technology is the proprietary HHM™ process — recycling end-of-life lithium-ion batteries and manufacturing scrap into fresh cells using the circular economy model.
            </p>
            <div className="process-flow">
              <div className="process-flow__step">
                <div className="process-flow__dot" style={{ backgroundColor: 'var(--crimson)' }}></div>
                <span>Collection</span>
              </div>
              <div className="process-flow__connector"></div>
              <div className="process-flow__step">
                <div className="process-flow__dot" style={{ backgroundColor: 'var(--blue)' }}></div>
                <span>Dismantling</span>
              </div>
              <div className="process-flow__connector"></div>
              <div className="process-flow__step">
                <div className="process-flow__dot" style={{ backgroundColor: 'var(--green)' }}></div>
                <span>Pre-processing</span>
              </div>
              <div className="process-flow__connector"></div>
              <div className="process-flow__step">
                <div className="process-flow__dot" style={{ backgroundColor: '#e5a937' }}></div>
                <span>Processing</span>
              </div>
            </div>
            <Link to="/battery-recycling" className="btn btn-outline" style={{ marginTop: '2rem' }}>
              Learn About Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== PARTNER SECTION ====== */}
      <section className="section partner-section">
        <div className="container">
          <div className={`partner-grid reveal ${partnerVisible ? 'visible' : ''}`} ref={partnerRef}>
            <div className="partner-content">
              <span className="section-eyebrow">We Can Help</span>
              <h2 className="section-title">Let's Partner for a Better World</h2>
              <div className="divider"></div>
              <p>
                We work with industries and end users alike to partner on initiatives where our unique technological solutions can help lower CO₂ emissions.
              </p>
            </div>
            <div className="partner-cards">
              {[
                {
                  title: 'Raw Materials for Battery Manufacturers',
                  desc: 'Battery-grade lithium, cobalt, manganese, and nickel for re-entry into the supply chain.',
                  cta: 'Inquire for Raw Materials',
                  color: 'var(--crimson)',
                },
                {
                  title: 'Recycle With Us',
                  desc: 'Li-ion batteries or e-waste? Achieve sustainability goals through our HHM™ process.',
                  cta: 'Start Recycling',
                  color: 'var(--blue)',
                },
                {
                  title: 'EPR Partnership',
                  desc: 'As a government-approved entity, we help you fulfill EPR obligations and stay BWMR compliant.',
                  cta: 'Partner With Us',
                  color: 'var(--green)',
                },
              ].map((p) => (
                <div key={p.title} className="partner-card card-lift" style={{ '--pc-color': p.color }}>
                  <div className="partner-card__accent"></div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <Link to="/contact" className="btn btn-outline partner-card__btn">{p.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== AWARDS ====== */}
      <section className="section awards-section">
        <div className="container">
          <div className="awards-header">
            <span className="section-eyebrow">Honors & Recognition</span>
            <h2 className="section-title">Awards & Accreditations</h2>
          </div>
          <div className="awards-grid">
            {[
              { text: 'Business Incubation Partner', color: 'var(--crimson)' },
              { text: 'Business Accelerator', color: 'var(--blue)' },
              { text: 'Technology Partner — IIT Guwahati', color: 'var(--green)' },
              { text: 'Top 30 Cleantech Startups of India', color: 'var(--crimson)' },
              { text: 'Technology Validation', color: 'var(--blue)' },
              { text: 'Technology Partner — ISM Dhanbad', color: 'var(--green)' },
              { text: 'OIL-Supported Recycling Company', color: 'var(--crimson)' },
              { text: 'First Commercial Order', color: 'var(--blue)' },
              { text: 'Technology Partner — IIT Kanpur', color: 'var(--green)' },
              { text: 'Low Carbon Emission Technology', color: 'var(--crimson)' },
              { text: 'Accreditation — BIRAC', color: 'var(--blue)' },
              { text: 'AFD Recognition', color: 'var(--green)' },
            ].map((award, i) => (
              <div key={i} className="award-badge card-lift-sm" style={{ '--aw-color': award.color }}>
                <div className="award-badge__icon" style={{ color: award.color }}>{SVGIcons.award}</div>
                <span>{award.text}</span>
                <div className="award-badge__bottom-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEWSLETTER CTA ====== */}
      <NewsletterSection />
    </div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await axios.post('/api/newsletter/subscribe', { email });
      setMsg(res.data.message);
      setEmail('');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h2>Get Updates & Stay Connected</h2>
            <p>Subscribe to our newsletter for the latest in clean technology, battery recycling, and sustainability.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          {msg && <p className="newsletter-msg">{msg}</p>}
        </div>
      </div>
    </section>
  );
}
