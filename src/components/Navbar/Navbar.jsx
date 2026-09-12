import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from '../../router/Router'
import { Menu, X, ArrowUpRight, Phone, Instagram, Facebook, Youtube, TwitterX, Sun, Moon } from '../Icons'
import { useTheme } from '../../context/ThemeContext'
import { logoImg } from '../../assets/images'
import './Navbar.css'

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  // Track scroll position with requestAnimationFrame throttling for butter-smooth scrolling
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30)
          ticking = false
        })
        ticking = true
      }
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
            {/* Theme Toggle Button */}
            <button
              type="button"
              className="navbar-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to White Theme' : 'Switch to Dark Theme'}
              title={theme === 'dark' ? 'Switch to White Theme' : 'Switch to Dark Theme'}
            >
              <div className="theme-toggle-icon-wrap">
                {theme === 'dark' ? (
                  <Moon size={17} className="theme-svg moon-svg" />
                ) : (
                  <Sun size={17} className="theme-svg sun-svg" />
                )}
              </div>
              <span className="theme-toggle-text">{theme === 'dark' ? 'DARK' : 'WHITE'}</span>
            </button>

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
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Mobile Header Inside Overlay with Logo, Theme Toggle & Close Button */}
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
            <img src={logoImg} alt="ADAM FITNESS CENTRE" className="navbar-logo-img" />
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">ADAM</span>
              <span className="navbar-brand-sub">FITNESS CENTRE</span>
            </div>
          </Link>

          <div className="mobile-header-right">
            <button
              type="button"
              className="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to White Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Moon size={16} className="theme-svg moon-svg" />
              ) : (
                <Sun size={16} className="theme-svg sun-svg" />
              )}
              <span>{theme === 'dark' ? 'DARK' : 'WHITE'}</span>
            </button>

            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav aria-label="Mobile Navigation" className="mobile-nav-body">
          <ul className="mobile-links">
            <li>
              <NavLink to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <div className="mobile-link-left">
                  <span className="mobile-link-num">01</span>
                  <span className="mobile-link-text">Home</span>
                </div>
                <ArrowUpRight size={18} className="mobile-link-arrow" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <div className="mobile-link-left">
                  <span className="mobile-link-num">02</span>
                  <span className="mobile-link-text">About</span>
                </div>
                <ArrowUpRight size={18} className="mobile-link-arrow" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <div className="mobile-link-left">
                  <span className="mobile-link-num">03</span>
                  <span className="mobile-link-text">Programs</span>
                </div>
                <ArrowUpRight size={18} className="mobile-link-arrow" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                <div className="mobile-link-left">
                  <span className="mobile-link-num">04</span>
                  <span className="mobile-link-text">Contact</span>
                </div>
                <ArrowUpRight size={18} className="mobile-link-arrow" />
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <button
            type="button"
            className="btn btn-primary mobile-cta-btn"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false)
              if (onOpenConsultation) onOpenConsultation()
            }}
          >
            <span>CLAIM FREE 1-DAY PASS</span>
            <ArrowUpRight size={16} />
          </button>

          <div className="mobile-contact-info">
            <div className="mobile-hours-row">
              <span>Mon–Fri: 5:30 AM – 10:30 PM</span>
              <span>Sat–Sun: 6:00 AM – 9:00 PM</span>
            </div>
            <a href="tel:+18005552326" className="mobile-phone-link">
              <Phone size={15} /> +1 (800) 555-ADAM
            </a>
          </div>

          <div className="mobile-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="X (Twitter)">
              <TwitterX size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
