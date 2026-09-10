import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from '../../router/Router'
import { Menu, X, ArrowUpRight, Phone, Instagram, Facebook } from '../Icons'
import { logoImg } from '../../assets/images'
import './Navbar.css'

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Track scroll position to trigger glassmorphic backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-close mobile menu on route navigation
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-wide navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="ADAM FITNESS CENTRE" className="navbar-logo-img" />
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">ADAM</span>
              <span className="navbar-brand-sub">FITNESS CENTRE</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation">
            <ul className="navbar-links">
              <li>
                <NavLink to="/" className="navbar-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navbar-link">About</NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="navbar-link">Programs</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navbar-link">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="navbar-actions">
            <button
              type="button"
              className="btn btn-primary navbar-cta-btn"
              onClick={onOpenConsultation}
            >
              <span>JOIN NOW</span>
              <ArrowUpRight size={16} />
            </button>

            <button
              type="button"
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav aria-label="Mobile Navigation">
          <ul className="mobile-links">
            <li>
              <NavLink to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <span>01. Home</span>
                <ArrowUpRight size={22} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <span>02. About</span>
                <ArrowUpRight size={22} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <span>03. Programs</span>
                <ArrowUpRight size={22} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <span>04. Contact</span>
                <ArrowUpRight size={22} />
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false)
              if (onOpenConsultation) onOpenConsultation()
            }}
          >
            <span>CLAIM FREE TRIAL PASS</span>
            <ArrowUpRight size={18} />
          </button>

          <div className="mobile-contact-info">
            <p>Hours: Mon–Fri 5:30 AM – 10:30 PM</p>
            <p>Sat–Sun 6:00 AM – 9:00 PM</p>
            <a href="tel:+18005552326" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--lime)', fontWeight: 600 }}>
              <Phone size={16} /> +1 (800) 555-ADAM
            </a>
          </div>

          <div className="mobile-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Facebook">
              <Facebook size={22} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
