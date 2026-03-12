import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
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

export default function Home() {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    axios.get('/api/blogs/featured')
      .then(res => setFeaturedBlogs(res.data))
      .catch(() => {});
  }, []);

  const { ref: missionRef, inView: missionVisible } = useReveal();
  const { ref: techRef, inView: techVisible } = useReveal();
  const { ref: partnerRef, inView: partnerVisible } = useReveal();

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
              Extracting<br />
              <span className="hero__title-accent">What Matters</span>
            </h1>
            <p className="hero__tagline">FOR A BETTER WORLD</p>
            <p className="hero__desc">
              We develop low-cost, carbon-neutral extraction and recycling processes to obtain precious commodities from Li-ion batteries, reducing CO₂ emissions while powering a circular economy.
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
            <div className="hero__earth-container animate-float">
              <div className="hero__earth">
                <div className="hero__earth-ring hero__earth-ring--1"></div>
                <div className="hero__earth-ring hero__earth-ring--2"></div>
                <div className="hero__earth-core">
                  <svg viewBox="0 0 200 200" className="hero__earth-svg">
                    <defs>
                      <radialGradient id="earthGrad" cx="40%" cy="35%">
                        <stop offset="0%" stopColor="#3DAA7A" />
                        <stop offset="40%" stopColor="#2B5BA8" />
                        <stop offset="100%" stopColor="#1a3a6e" />
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" fill="url(#earthGrad)" />
                    <ellipse cx="80" cy="85" rx="25" ry="18" fill="#3DAA7A" opacity="0.9" />
                    <ellipse cx="115" cy="70" rx="15" ry="10" fill="#3DAA7A" opacity="0.8" />
                    <ellipse cx="100" cy="120" rx="30" ry="20" fill="#3DAA7A" opacity="0.75" />
                    <ellipse cx="60" cy="115" rx="12" ry="8" fill="#3DAA7A" opacity="0.7" />
                    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </svg>
                </div>
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
            <span>Rare Mines signs an MoU with the Karnataka govt worth ₹350-crore &nbsp;·&nbsp; Sustainable Recycling of Li-Ion Batteries &nbsp;·&nbsp; Pioneering Carbon-Neutral Extraction Process &nbsp;·&nbsp; Rare Mines signs an MoU with the Karnataka govt worth ₹350-crore &nbsp;·&nbsp; Sustainable Recycling of Li-Ion Batteries &nbsp;·&nbsp; Pioneering Carbon-Neutral Extraction Process &nbsp;·&nbsp;</span>
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
              <span className="section-eyebrow">Our Focus</span>
              <h2 className="section-title">Sustainable Recycling of<br />Li-Ion Batteries</h2>
              <div className="divider"></div>
              <p>
                We provide a sustainable and efficient Lithium-ion battery recycling clean-tech solution. Our low-cost, carbon-neutral process extracts precious commodities at the cheapest possible price, striving tirelessly to reduce CO₂ emissions.
              </p>
              <Link to="/li-ion-battery" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
                Learn More →
              </Link>
            </div>
            <div className="liion-elements">
              {[
                { num: 3, mass: '6.94', symbol: 'Li', name: 'Lithium', color: 'var(--crimson)' },
                { num: 27, mass: '58.93', symbol: 'Co', name: 'Cobalt', color: 'var(--blue)' },
                { num: 28, mass: '58.69', symbol: 'Ni', name: 'Nickel', color: 'var(--green)' },
              ].map((el) => (
                <div key={el.symbol} className="element-card" style={{ '--el-color': el.color }}>
                  <div className="element-card__num">{el.num}</div>
                  <div className="element-card__mass">{el.mass}</div>
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
              { value: '40X', unit: '', label: 'Lithium Demand Growth Rate', color: 'var(--crimson)' },
            ].map((s) => (
              <div key={s.label} className="projection-card" style={{ '--p-color': s.color }}>
                <div className="projection-card__value">{s.value}<sup>{s.unit}</sup></div>
                <div className="projection-card__label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="projection-warning">
            <div className="projection-warning__icon">⚡</div>
            <div>
              <strong>2.3 Million MT</strong> of End-of-Life Li-Ion Batteries expected by 2030.<br />
              <span style={{ color: 'var(--text-muted)' }}>Recycling is no longer optional — it's a global imperative.</span>
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
                icon: '⚗️',
                title: 'Unified Methodology',
                desc: 'Simple process to recycle all types of Li-Ion batteries. No import dependency on raw materials.',
                color: 'var(--crimson)',
              },
              {
                icon: '💰',
                title: 'Cost Effective',
                desc: 'Flexible model based on economies of scale, low cost of raw materials and solvents.',
                color: 'var(--blue)',
              },
              {
                icon: '🌿',
                title: 'Environment Friendly',
                desc: 'Carbon Negative Process, closed loop with negligible waste generation. Self-Sustainable.',
                color: 'var(--green)',
              },
              {
                icon: '🔬',
                title: 'Intellectual Property',
                desc: 'Strong IP development for competitive advantage. Licensable Technology — unique and patented.',
                color: 'var(--crimson)',
              },
            ].map((f) => (
              <div key={f.title} className="tech-card" style={{ '--tc-color': f.color }}>
                <div className="tech-card__icon">{f.icon}</div>
                <h3 className="tech-card__title">{f.title}</h3>
                <p className="tech-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="tech-process">
            <span className="section-eyebrow">Our Process</span>
            <h3>The HYBRID-HYDROMETALLURGY-HHM™ Process</h3>
            <p>
              At the core of our technology is the proprietary HHM™ process — recycling end-of-life lithium-ion batteries and manufacturing scrap into fresh cells using the circular economy model. Collection → Dismantling → Pre-processing → Processing.
            </p>
            <Link to="/battery-recycling" className="btn btn-outline">
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
                <div key={p.title} className="partner-card" style={{ '--pc-color': p.color }}>
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
              'Business Incubation Partner',
              'Business Accelerator',
              'Technology Partner — IIT Guwahati',
              'Top 30 Cleantech Startups of India',
              'Technology Validation',
              'Technology Partner — ISM Dhanbad',
              'OIL-Supported Recycling Company',
              'First Commercial Order',
              'Technology Partner — IIT Kanpur',
              'Low Carbon Emission Technology',
              'Accreditation — BIRAC',
              'AFD Recognition',
            ].map((award) => (
              <div key={award} className="award-badge">
                <div className="award-badge__icon">🏆</div>
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BLOG PREVIEW ====== */}
      {featuredBlogs.length > 0 && (
        <section className="section blog-preview-section">
          <div className="container">
            <div className="blog-preview-header">
              <div>
                <span className="section-eyebrow">Latest Insights</span>
                <h2 className="section-title">From Our Blog</h2>
              </div>
              <Link to="/blog" className="btn btn-outline">View All Posts →</Link>
            </div>
            <div className="blog-preview-grid">
              {featuredBlogs.map((blog) => (
                <Link key={blog._id} to={`/blog/${blog.slug}`} className="blog-preview-card card">
                  <div className="blog-preview-card__img">
                    <div className="blog-preview-card__img-placeholder">
                      <span>📄</span>
                    </div>
                    <span className="badge badge-blue" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                      {blog.category}
                    </span>
                  </div>
                  <div className="blog-preview-card__body">
                    <h3 className="blog-preview-card__title">{blog.title}</h3>
                    <p className="blog-preview-card__excerpt">{blog.excerpt}</p>
                    <div className="blog-preview-card__meta">
                      <span>{blog.author?.name}</span>
                      <span>{blog.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
