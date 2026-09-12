import React, { useState } from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight
} from '../../components/Icons'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Personal Training',
    preferredTime: 'Morning (6am - 11am)',
    message: ''
  })
  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSent(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="badge-lime">
            <span className="badge-dot"></span>
            WE ARE HERE TO HELP
          </span>

          <h1 className="contact-hero-title">
            GET IN TOUCH WITH <br className="hero-desktop-br" />
            <span className="text-lime">ADAM FITNESS.</span>
          </h1>

          <p className="contact-hero-lead">
            Have questions about memberships, personal training, or want to come by for a free tour? We'd love to hear from you. Send us a message or call us anytime.
          </p>
        </div>
      </section>

      {/* Main Grid: Channels + Form */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Contact Channels */}
            <div className="contact-channels-column">
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="contact-card-title">Phone Us</h3>
                  <p className="contact-card-text">
                    Give our friendly front desk team a call during regular gym hours.
                  </p>
                  <a href="tel:+18005552326" className="contact-card-link">
                    +1 (800) 555-ADAM &rarr;
                  </a>
                </div>
              </div>

              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="contact-card-title">WhatsApp Chat</h3>
                  <p className="contact-card-text">
                    Message us on WhatsApp for quick answers about passes, gym tours, or memberships.
                  </p>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                    Start WhatsApp Chat &rarr;
                  </a>
                </div>
              </div>

              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="contact-card-title">Email Us</h3>
                  <p className="contact-card-text">
                    Send us a message anytime for general questions or membership details.
                  </p>
                  <a href="mailto:info@adamfitnesscentre.com" className="contact-card-link">
                    info@adamfitnesscentre.com &rarr;
                  </a>
                </div>
              </div>

              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="contact-card-title">Gym Opening Hours</h3>
                  <p className="contact-card-text">
                    <strong>Monday – Friday:</strong> 5:30 AM – 10:30 PM<br />
                    <strong>Saturday – Sunday:</strong> 6:00 AM – 9:00 PM<br />
                    <span style={{ color: 'var(--lime)', fontWeight: 600 }}>VIP Keycard Members: 24/7 Gym Access</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="contact-form-container">
              {isSent ? (
                <div className="success-state" style={{ padding: '3rem 1rem' }}>
                  <div className="success-icon-wrap" style={{ width: '80px', height: '80px' }}>
                    <CheckCircle2 size={42} />
                  </div>
                  <h3 style={{ textTransform: 'uppercase', fontSize: '1.8rem', marginTop: '1rem' }}>
                    MESSAGE RECEIVED!
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-offwhite)' }}>
                    Thank you, <strong>{formData.name}</strong>! We have received your request for <strong>{formData.interest}</strong>. One of our friendly team members will contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsSent(false)}
                    style={{ marginTop: '1.5rem' }}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <div>
                  <span className="badge-lime" style={{ marginBottom: '1rem' }}>
                    FREE GYM PASS & TOUR
                  </span>
                  <h3 className="contact-form-title">CLAIM YOUR FREE 1-DAY PASS</h3>
                  <p className="contact-form-desc">
                    Fill out this quick form to claim your free 1-day gym pass and a friendly, zero-pressure tour.
                  </p>

                  <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          placeholder="name@email.com"
                          className="form-input"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp *</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="form-input"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-interest">I'm Interested In</label>
                        <select
                          id="contact-interest"
                          name="interest"
                          className="form-select"
                          value={formData.interest}
                          onChange={handleChange}
                        >
                          <option value="Personal Training">1-on-1 Personal Training</option>
                          <option value="Strength & Power">Barbell Strength & Lifting</option>
                          <option value="Functional Squad">Circuit & Cardio Fitness</option>
                          <option value="Free 1-Day Pass">Free 1-Day Pass & Tour</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-time">Best Time to Visit</label>
                        <select
                          id="contact-time"
                          name="preferredTime"
                          className="form-select"
                          value={formData.preferredTime}
                          onChange={handleChange}
                        >
                          <option value="Morning (6am - 11am)">Morning (6:00 AM - 11:00 AM)</option>
                          <option value="Midday (11am - 4pm)">Midday (11:00 AM - 4:00 PM)</option>
                          <option value="Evening (4pm - 9pm)">Evening (4:00 PM - 9:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Your Goals or Questions (Optional)</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Tell us what fitness goals you have in mind or any questions you'd like to ask..."
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '0.75rem' }}
                    >
                      <span>GET MY FREE PASS</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map & Directions */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <SectionHeader
            badge="OUR LOCATION"
            title="HOW TO"
            titleHighlight="FIND US"
            subtitle="Centrally located with free underground member parking and easy public transit access."
          />

          <div className="map-transit-grid">
            <div className="map-visual-placeholder">
              <div className="map-grid-bg"></div>
              <div className="map-pin-target">
                <div className="map-pulse-circle">
                  <MapPin size={30} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <strong style={{ color: 'var(--text-white)', fontSize: '1.1rem', textTransform: 'uppercase', display: 'block' }}>
                    ADAM FITNESS CENTRE
                  </strong>
                  <span style={{ color: 'var(--lime)', fontSize: '0.82rem', letterSpacing: '0.1em' }}>
                    840 OLYMPIC PARKWAY, NY 10001
                  </span>
                </div>
              </div>
            </div>

            <div className="transit-info-pane">
              <div>
                <h3 className="transit-title">Getting Here & Parking</h3>
                <ul className="transit-list">
                  <li className="transit-item">
                    <strong>Free Underground Parking:</strong> 2 hours of free, secure validated parking for members and visitors via Ramp B.
                  </li>
                  <li className="transit-item">
                    <strong>Subway & Transit:</strong> A quick 3-minute walk from Central Olympic Station (Lines 1, 2, A, C).
                  </li>
                  <li className="transit-item">
                    <strong>Welcome Desk:</strong> Just show your name or confirmation at the front desk when you arrive.
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <span>OPEN GOOGLE MAPS</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
