import React, { useState } from 'react'
import { X, CheckCircle2, ArrowRight } from '../Icons'
import './ConsultationModal.css'

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Strength Training',
    timeSlot: 'Morning (6:00 AM - 11:00 AM)'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleResetAndClose = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'Strength Training',
      timeSlot: 'Morning (6:00 AM - 11:00 AM)'
    })
    onClose()
  }

  return (
    <div className={`modal-backdrop ${isOpen ? 'open' : ''}`} onClick={handleResetAndClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleResetAndClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ textTransform: 'uppercase' }}>CONSULTATION SECURED</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. An ADAM Performance Director has received your request for <strong>{formData.program}</strong>. We will contact you at <strong>{formData.phone || formData.email}</strong> within 2 hours to confirm your private assessment.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleResetAndClose}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              RETURN TO SITE
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <span className="badge-lime">
                <span className="badge-dot"></span>
                COMPLIMENTARY PASS
              </span>
              <h2 className="modal-title">START YOUR TRANSFORMATION</h2>
              <p style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>
                Schedule your biomechanical screening and 1-day elite training access at ADAM FITNESS CENTRE.
              </p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Marcus Vance"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="marcus@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="program">Primary Objective</label>
                  <select
                    id="program"
                    name="program"
                    className="form-select"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="Strength Training">Strength & Powerlifting</option>
                    <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                    <option value="Functional Conditioning">Functional Conditioning</option>
                    <option value="Athletic Performance">Athletic Performance</option>
                    <option value="Facility Tour & Pass">Facility Tour & Pass</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="timeSlot">Preferred Training Time</label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    className="form-select"
                    value={formData.timeSlot}
                    onChange={handleChange}
                  >
                    <option value="Morning (6:00 AM - 11:00 AM)">Morning (6:00 AM - 11:00 AM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:30 PM)">Evening (5:00 PM - 9:30 PM)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }}>
                <span>CLAIM ASSESSMENT & PASS</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
