import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {
  Shield,
  Target,
  Flame,
  Activity,
  Award,
  Users,
  CheckCircle2,
  ArrowRight
} from '../../components/Icons'
import {
  facilityInterior,
  communityTraining,
  headCoach,
  ctaAthlete
} from '../../assets/images'
import './About.css'

export default function About({ onOpenConsultation }) {
  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="badge-lime">
            <span className="badge-dot"></span>
            OUR ORIGIN & PHILOSOPHY
          </span>

          <h1 className="about-hero-title">
            WHERE DISCIPLINE MEETS <br />
            <span className="text-lime">PERFORMANCE.</span>
          </h1>

          <p className="about-hero-lead">
            ADAM FITNESS CENTRE was founded on an unapologetic belief: physical and mental strength are not accidents of genetics—they are engineered through deliberate discipline and rigorous standards.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="editorial-story-grid">
            <div className="story-text-column">
              <span className="badge-dark" style={{ marginBottom: '1.25rem' }}>01 // THE MANIFESTO</span>
              <p>
                In a fitness landscape overrun by short-lived trends, flashy influencer gimmicks, and crowded big-box facilities where nobody knows your name, ADAM was constructed as an antidote: a temple of pure athletic performance.
              </p>
              <p>
                From our custom matte black Olympic power cages and Eleiko competition bars to our biomechanically tuned recovery protocols, every square inch of ADAM is built for individuals who take their time and physical potential seriously.
              </p>
              <p>
                We serve athletes, high-performing professionals, and dedicated individuals who value measurable progress over participation trophies.
              </p>
            </div>

            <div className="story-quote-card">
              <div className="story-quote-mark">&ldquo;</div>
              <p className="story-quote-text">
                Discipline is not punishment. It is the highest form of self-respect. What you build within these walls echoes into every aspect of your life.
              </p>
              <div className="story-quote-author">
                — MARCUS VAUGHN, FOUNDER & HEAD COACH
              </div>
            </div>
          </div>

          {/* Large Facility Photo Banner */}
          <div style={{ borderRadius: '8px', overflow: 'hidden', height: '420px', border: '1px solid var(--border-subtle)' }}>
            <img
              src={facilityInterior}
              alt="ADAM High-Performance Arena"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* The ADAM 4-Phase Methodology */}
      <section className="section" style={{ background: '#0a0a0f' }}>
        <div className="container">
          <SectionHeader
            badge="THE SCIENTIFIC METHOD"
            title="OUR 4-PHASE"
            titleHighlight="METHODOLOGY"
            subtitle="How we take you from baseline movement to peak strength output with zero guesswork."
          />

          <div className="methodology-row">
            <div className="method-card">
              <div className="method-step">PHASE 01</div>
              <h3 className="method-title">Biomechanical Audit</h3>
              <p className="method-desc">
                Full-body joint mobility screening, kinetic chain assessment, and structural asymmetry analysis before a single kilo is loaded onto a bar.
              </p>
            </div>

            <div className="method-card">
              <div className="method-step">PHASE 02</div>
              <h3 className="method-title">Custom Blueprint</h3>
              <p className="method-desc">
                A periodized training plan custom designed around your recovery capacity, biomechanical leverages, and concrete target goals.
              </p>
            </div>

            <div className="method-card">
              <div className="method-step">PHASE 03</div>
              <h3 className="method-title">Precision Execution</h3>
              <p className="method-desc">
                Guided workouts with hands-on coaching, bar velocity tracking, and progressive load increments to stimulate adaptation without injury.
              </p>
            </div>

            <div className="method-card">
              <div className="method-step">PHASE 04</div>
              <h3 className="method-title">Continuous Optimization</h3>
              <p className="method-desc">
                Every 4 weeks, your volume load, body composition, and functional strength markers are re-tested to evolve your next training cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="OUR CODE"
            title="UNCOMPROMISING"
            titleHighlight="CORE VALUES"
            subtitle="The fundamental tenets that dictate our coaching standards and community standards."
          />

          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-box">
                <Target size={24} />
              </div>
              <h3 className="value-title">Relentless Precision</h3>
              <p className="value-text">
                Every rep counts. We care about ankle mobility, pelvic position, and thoracic extension. Great form leads to colossal strength.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-box">
                <Shield size={24} />
              </div>
              <h3 className="value-title">Total Accountability</h3>
              <p className="value-text">
                We celebrate consistency. Your coach monitors your attendance, recovery, and milestones with unrelenting dedication.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-box">
                <Users size={24} />
              </div>
              <h3 className="value-title">Egoless Community</h3>
              <p className="value-text">
                Everyone from competitive powerlifters to first-time athletes shares the same floor with humility, grit, and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Banner */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ borderRadius: '8px', overflow: 'hidden', position: 'relative', minHeight: '440px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center' }}>
            <img
              src={communityTraining}
              alt="Community Training"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }}
            />
            <div style={{ position: 'relative', zIndex: 2, padding: '3.5rem', maxWidth: '650px' }}>
              <span className="badge-lime" style={{ marginBottom: '1rem' }}>JOIN THE BROTHERHOOD</span>
              <h3 style={{ textTransform: 'uppercase', color: 'var(--text-white)', fontSize: '2.4rem', lineHeight: 1.1, marginBottom: '1rem' }}>
                YOU ARE THE COMPANY YOU TRAIN WITH.
              </h3>
              <p style={{ color: 'var(--text-offwhite)', marginBottom: '2rem' }}>
                Step into an environment where excuses don't survive and human performance is elevated every single morning.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenConsultation}
              >
                <span>VISIT ADAM FITNESS</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
