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
            <h3 style={{ textTransform: 'uppercase' }}>YOU'RE ALL SET!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>! We've received your request for <strong>{formData.program}</strong>. One of our friendly team members will contact you at <strong>{formData.phone || formData.email}</strong> shortly to confirm your visit.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleResetAndClose}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              BACK TO HOME
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <span className="badge-lime">
                <span className="badge-dot"></span>
                100% FREE PASS
              </span>
              <h2 className="modal-title">CLAIM YOUR FREE 1-DAY PASS</h2>
              <p style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>
                Come visit ADAM FITNESS CENTRE, meet our friendly coaches, and try our gym for a full day.
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
                  <label className="form-label" htmlFor="program">What's Your Main Goal?</label>
                  <select
                    id="program"
                    name="program"
                    className="form-select"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="Get Stronger (Barbell Lifting)">Get Stronger (Barbell Lifting)</option>
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                    <option value="Burn Fat & Tone Up">Burn Fat & Tone Up</option>
                    <option value="Cardio & Circuit Fitness">Cardio & Circuit Fitness</option>
                    <option value="Free Gym Tour & 1-Day Pass">Free Gym Tour & 1-Day Pass</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="timeSlot">Best Time to Visit</label>
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
                <span>GET MY FREE 1-DAY PASS</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
