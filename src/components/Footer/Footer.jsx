import React, { useState } from 'react'
import { Link } from '../../router/Router'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Facebook,
  Youtube,
  TwitterX,
  Sparkles,
  CheckCircle2
} from '../Icons'
import { logoImg } from '../../assets/images'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 4000)
      setEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <div className="container-wide">
        {/* VIP Priority Access Strip */}
        <div className="footer-newsletter-bar">
          <div className="newsletter-info">
            <span className="newsletter-badge">
              <Sparkles size={14} />
              FITNESS TIPS & UPDATES
            </span>
            <h3 className="newsletter-title">JOIN OUR FITNESS COMMUNITY</h3>
            <p className="newsletter-desc">
              Get practical workout tips, healthy recipes, and gym updates delivered directly to your inbox.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit-btn">
                <span>{subscribed ? 'THANK YOU!' : 'SUBSCRIBE'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
            {subscribed && (
              <span className="newsletter-success">
                <CheckCircle2 size={14} /> Welcome to ADAM Fitness! Check your inbox soon.
              </span>
            )}
          </form>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand & Social Col */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src={logoImg} alt="ADAM FITNESS CENTRE" className="footer-logo-img" />
              <div>
                <div className="footer-brand-title">ADAM</div>
                <div className="footer-brand-subtitle">FITNESS CENTRE</div>
              </div>
            </div>

            <p className="footer-mission">
              A welcoming modern gym dedicated to helping everyday people build strength, gain energy, and feel their best every day.
            </p>

            <div className="footer-status-pill">
              <span className="status-indicator-dot" />
              <span>GYM STATUS: OPEN NOW</span>
            </div>

            {/* Social Media Connect Row */}
            <div className="footer-social-wrapper">
              <span className="footer-social-label">FOLLOW OUR COMMUNITY</span>
              <div className="footer-social-row">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  aria-label="X (Twitter)"
                >
                  <TwitterX size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/">
                  <span>Home</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about">
                  <span>About Us</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/programs">
                  <span>Training Programs</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact">
                  <span>Contact & Location</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Programs</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/programs">
                  <span>Barbell Strength & Lifting</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/programs">
                  <span>1-on-1 Personal Training</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/programs">
                  <span>Circuit & Cardio Fitness</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/programs">
                  <span>Speed & Agility Training</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Grounds Contact Details */}
          <div className="footer-contact-col">
            <h4 className="footer-col-heading">Visit Our Gym</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <MapPin size={17} />
                </div>
                <div>
                  <span className="contact-main">840 Olympic Parkway</span>
                  <span className="contact-sub">Performance District, NY 10001</span>
                </div>
              </div>

              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <Phone size={17} />
                </div>
                <div>
                  <a href="tel:+18005552326" className="contact-main contact-link">
                    +1 (800) 555-ADAM
                  </a>
                  <span className="contact-sub">Friendly Member Support</span>
                </div>
              </div>

              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <Mail size={17} />
                </div>
                <div>
                  <a href="mailto:info@adamfitnesscentre.com" className="contact-main contact-link">
                    info@adamfitnesscentre.com
                  </a>
                  <span className="contact-sub">Questions & Free Gym Passes</span>
                </div>
              </div>

              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <Clock size={17} />
                </div>
                <div>
                  <span className="contact-main">Mon–Fri: 5:30 AM – 10:30 PM</span>
                  <span className="contact-sub">Sat–Sun: 6:00 AM – 9:00 PM • 24/7 VIP Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Modern Running Ticker Strip */}
        <div className="footer-ticker-wrap">
          <div className="footer-ticker-track">
            <div className="footer-ticker-content">
              <span>ADAM FITNESS CENTRE</span>
              <span className="ticker-dot" />
              <span>FEEL STRONGER EVERY DAY</span>
              <span className="ticker-dot" />
              <span>REAL PEOPLE REAL RESULTS</span>
              <span className="ticker-dot" />
              <span>15,000 SQ FT MODERN GYM</span>
              <span className="ticker-dot" />
              <span>FRIENDLY CERTIFIED COACHES</span>
              <span className="ticker-dot" />
              <span>SAFE & WELCOMING FOR EVERYONE</span>
              <span className="ticker-dot" />
            </div>
            <div className="footer-ticker-content" aria-hidden="true">
              <span>ADAM FITNESS CENTRE</span>
              <span className="ticker-dot" />
              <span>FEEL STRONGER EVERY DAY</span>
              <span className="ticker-dot" />
              <span>REAL PEOPLE REAL RESULTS</span>
              <span className="ticker-dot" />
              <span>15,000 SQ FT MODERN GYM</span>
              <span className="ticker-dot" />
              <span>FRIENDLY CERTIFIED COACHES</span>
              <span className="ticker-dot" />
              <span>SAFE & WELCOMING FOR EVERYONE</span>
              <span className="ticker-dot" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} ADAM FITNESS CENTRE. All Rights Reserved. Built to help everyone get fit, strong, and healthy.
          </div>
          <div className="footer-bottom-links">
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#safety">Facility Guidelines</a>
            </div>
            <button
              type="button"
              className="footer-scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
