import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Li-Ion Battery', path: '/li-ion-battery' },
  { label: 'Products', path: '/products' },
  { label: 'Battery Recycling', path: '/battery-recycling' },
  { label: 'ESG', path: '/esg' },
  { label: 'SDG Goals', path: '/sdg-goals' },
  { label: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img
            src={logoImg}
            alt="Rare Mines Cleantech Pvt Ltd"
            className="navbar__logo-img"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn btn-primary navbar__cta">
          Inquire Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
            }
            end={link.path === '/'}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }}>
          Inquire Now
        </Link>
      </div>
    </header>
  );
}