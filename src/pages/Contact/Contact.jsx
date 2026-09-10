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
            DIRECT CONCIERGE
          </span>

          <h1 className="contact-hero-title">
            CONNECT WITH <br />
            <span className="text-lime">ADAM FITNESS.</span>
          </h1>

          <p className="contact-hero-lead">
            Take the first decisive step towards your physical peak. Inquire about private coaching, schedule your facility tour, or speak directly with our performance director.
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
                  <h3 className="contact-card-title">Direct Telephone</h3>
                  <p className="contact-card-text">
                    Speak directly with our front desk reception and coaching staff during operating hours.
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
                  <h3 className="contact-card-title">WhatsApp Concierge</h3>
                  <p className="contact-card-text">
                    Fast instant messaging for quick schedule checks, session rebooking, and pass verification.
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
                  <h3 className="contact-card-title">Email Inquiries</h3>
                  <p className="contact-card-text">
                    Corporate partnerships, private suite bookings, and general membership questions.
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
                  <h3 className="contact-card-title">Operating Schedule</h3>
                  <p className="contact-card-text">
                    <strong>Monday – Friday:</strong> 5:30 AM – 10:30 PM<br />
                    <strong>Saturday – Sunday:</strong> 6:00 AM – 9:00 PM<br />
                    <span style={{ color: 'var(--lime)', fontWeight: 600 }}>VIP Keycard Members: 24/7 Access</span>
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
                    INQUIRY TRANSMITTED
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-offwhite)' }}>
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.interest}</strong> has been logged. An ADAM Performance Coach will contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsSent(false)}
                    style={{ marginTop: '1.5rem' }}
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <div>
                  <span className="badge-lime" style={{ marginBottom: '1rem' }}>
                    RESERVE AN APPOINTMENT
                  </span>
                  <h3 className="contact-form-title">BOOK COACH CONSULTATION</h3>
                  <p className="contact-form-desc">
                    Fill out the form below to claim your complimentary assessment and personalized tour of our Olympic training grounds.
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
                        <label className="form-label" htmlFor="contact-interest">Interest Track</label>
                        <select
                          id="contact-interest"
                          name="interest"
                          className="form-select"
                          value={formData.interest}
                          onChange={handleChange}
                        >
                          <option value="Personal Training">1-on-1 Personal Training</option>
                          <option value="Strength & Power">Strength & Powerlifting</option>
                          <option value="Functional Squad">Functional Squad Conditioning</option>
                          <option value="Athletic Lab">Athletic Performance Lab</option>
                          <option value="Facility Tour">Facility Tour Only</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-time">Preferred Window</label>
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
                      <label className="form-label" htmlFor="contact-message">Training Goals or Questions</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your current training routine, any injuries, or specific milestones..."
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
                      <span>CONFIRM CONSULTATION</span>
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
            badge="FACILITY LOCATION"
            title="FIND THE"
            titleHighlight="TRAINING GROUND"
            subtitle="Centrally positioned with dedicated athlete underground parking and rapid transit access."
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
                <h3 className="transit-title">Arrival & Parking</h3>
                <ul className="transit-list">
                  <li className="transit-item">
                    <strong>Underground Parking:</strong> Free 2-hour validated secure parking for all members and consultation guests via Ramp B.
                  </li>
                  <li className="transit-item">
                    <strong>Subway & Transit:</strong> 3-minute walk from Central Olympic Station (Lines 1, 2, A, C).
                  </li>
                  <li className="transit-item">
                    <strong>Check-In Concierge:</strong> Present your digital pass or QR confirmation at reception upon arrival.
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
