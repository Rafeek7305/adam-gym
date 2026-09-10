import React from 'react'
import { Link } from '../../router/Router'
import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Facebook, Youtube } from '../Icons'
import { logoImg } from '../../assets/images'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container-wide">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src={logoImg} alt="ADAM FITNESS CENTRE" className="footer-logo-img" />
              <div>
                <div className="footer-brand-title">ADAM</div>
                <div className="footer-brand-subtitle">FITNESS CENTRE</div>
              </div>
            </div>

            <p className="footer-mission">
              A high-performance athletic facility engineered for strength, functional movement, and uncompromising mental resilience.
            </p>

            <div className="footer-status-pill">
              <span className="status-indicator-dot"></span>
              <span>FACILITY STATUS: OPEN NOW</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/">Home</Link></li>
              <li className="footer-link-item"><Link to="/about">About Us</Link></li>
              <li className="footer-link-item"><Link to="/programs">Training Programs</Link></li>
              <li className="footer-link-item"><Link to="/contact">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-col-heading">Programs</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/programs">Strength Training</Link></li>
              <li className="footer-link-item"><Link to="/programs">1-on-1 Coaching</Link></li>
              <li className="footer-link-item"><Link to="/programs">Functional Conditioning</Link></li>
              <li className="footer-link-item"><Link to="/programs">Performance Lab</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-heading">Training Grounds</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-row">
                <MapPin size={18} />
                <span>840 Olympic Parkway, Performance District, NY 10001</span>
              </div>
              <div className="footer-contact-row">
                <Phone size={18} />
                <a href="tel:+18005552326" style={{ color: 'var(--text-white)' }}>+1 (800) 555-ADAM</a>
              </div>
              <div className="footer-contact-row">
                <Mail size={18} />
                <span>info@adamfitnesscentre.com</span>
              </div>
              <div className="footer-contact-row">
                <Clock size={18} />
                <span>Mon–Fri: 5:30 AM – 10:30 PM<br />Sat–Sun: 6:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Typography Backdrop */}
        <div className="footer-giant-backdrop">
          <div className="footer-giant-text">
            ADAM FITNESS CENTRE
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} ADAM FITNESS CENTRE. All Rights Reserved. Discipline Today, A Stronger Tomorrow.
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#safety">Facility Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
