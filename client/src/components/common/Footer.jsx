import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await axios.post('/api/newsletter/subscribe', { email });
      setSubStatus(res.data.message);
      setEmail('');
    } catch (err) {
      setSubStatus(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
  <img
    src="/logo.png"
    alt="Rare Mines Cleantech Pvt Ltd"
    style={{ height: '60px', width: 'auto', filter: 'brightness(0) invert(1)' }}
  />
</div>
              <p className="footer__desc">
                A Clean Technology Company using proprietary environment-friendly processes to extract and recycle precious commodities from lithium-ion batteries using our HYBRID-HYDROMETALLURGY™ process.
              </p>
              <div className="footer__socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer__social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer__social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer__social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="footer__social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                </a>
              </div>
            </div>

            {/* Explore */}
            <div className="footer__col">
              <h4 className="footer__heading">Explore</h4>
              <ul className="footer__links">
                {[
                  { label: 'About Us', to: '/about-us' },
                  { label: 'Li-Ion Battery', to: '/li-ion-battery' },
                  { label: 'Products', to: '/products' },
                  { label: 'Battery Recycling', to: '/battery-recycling' },
                  { label: 'SDG Goals', to: '/sdg-goals' },
                  { label: 'Blog', to: '/blog' },
                  { label: 'Contact Us', to: '/contact' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer__link">
                      <span className="footer__link-arrow">→</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="footer__col">
              <h4 className="footer__heading">Support</h4>
              <ul className="footer__links">
                {['FAQs', 'Warranty', 'Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Disclaimer', 'Compliance', 'Grievance Redressal'].map((item) => (
                  <li key={item}>
                    <Link to="/contact" className="footer__link">
                      <span className="footer__link-arrow">→</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="footer__col">
              <h4 className="footer__heading">Contact Information</h4>
              <div className="footer__contact-list">
                <div className="footer__contact-item">
                  <span className="footer__contact-icon">📞</span>
                  <span>+91-080-29908945 / +91-7899752431</span>
                </div>
                <div className="footer__contact-item">
                  <span className="footer__contact-icon">✉️</span>
                  <a href="mailto:info@raremines.com">info@raremines.com</a>
                </div>
                <div className="footer__contact-item">
                  <span className="footer__contact-icon">📍</span>
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>

              <h4 className="footer__heading" style={{ marginTop: '1.5rem' }}>Newsletter</h4>
              <form className="footer__newsletter" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
              {subStatus && <p className="footer__sub-msg">{subStatus}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Rare Mines Cleantech Pvt Ltd. All Rights Reserved.</p>
          <div className="footer__bottom-accent"></div>
        </div>
      </div>
    </footer>
  );
}
