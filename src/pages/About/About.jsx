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
            OUR STORY & PURPOSE
          </span>

          <h1 className="about-hero-title">
            A REAL GYM BUILT TO HELP YOU <br className="hero-desktop-br" />
            <span className="text-lime">GET STRONGER & HEALTHIER.</span>
          </h1>

          <p className="about-hero-lead">
            ADAM FITNESS CENTRE was founded on a simple belief: getting fit and staying healthy shouldn't be complicated. With clear guidance, good habits, and the right encouragement, anyone can transform their fitness.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="editorial-story-grid">
            <div className="story-text-column">
              <span className="badge-dark" style={{ marginBottom: '1.25rem' }}>01 // WHY WE STARTED</span>
              <p>
                Too many gyms today are either overcrowded, impersonal, or filled with confusing fitness fads. We wanted to build something better: a clean, welcoming space where coaches actually know your name and care about your journey.
              </p>
              <p>
                From our high-quality squat racks and barbells to our wide selection of dumbbells and open turf, every part of ADAM is designed to help you work out effectively and safely.
              </p>
              <p>
                Whether you are brand new to working out or looking to break your personal records, we provide the support, plan, and community you need.
              </p>
            </div>

            <div className="story-quote-card">
              <div className="story-quote-mark">&ldquo;</div>
              <p className="story-quote-text">
                Fitness is not about punishment. It's about respecting your body and feeling proud of your effort. The strength you build here helps you in every part of your life.
              </p>
              <div className="story-quote-author">
                — MARCUS VAUGHN, FOUNDER & HEAD TRAINER
              </div>
            </div>
          </div>

          {/* Large Facility Photo Banner */}
          <div className="about-facility-banner">
            <img
              src={facilityInterior}
              alt="ADAM Fitness Centre Space"
              loading="lazy"
              decoding="async"
              className="about-facility-img"
            />
          </div>
        </div>
      </section>

      {/* The ADAM 4-Phase Methodology */}
      <section className="section" style={{ background: '#0a0a0f' }}>
        <div className="container">
          <SectionHeader
            badge="HOW IT WORKS"
            title="OUR 4-STEP"
            titleHighlight="FITNESS ROADMAP"
            subtitle="How we guide you from your very first day to reaching your fitness goals step-by-step."
          />

          <div className="methodology-row">
            <div className="method-card">
              <div className="method-step">STEP 01</div>
              <h3 className="method-title">Free Fitness Chat & Checkup</h3>
              <p className="method-desc">
                We talk about your goals, past injuries, and check how your joints and muscles move so we can design a safe, effective workout plan for you.
              </p>
            </div>

            <div className="method-card">
              <div className="method-step">STEP 02</div>
              <h3 className="method-title">Your Personal Plan</h3>
              <p className="method-desc">
                We create a straightforward workout and nutrition roadmap tailored around your personal routine, lifestyle, and fitness level.
              </p>
            </div>

            <div className="method-card">
              <div className="method-step">STEP 03</div>
              <h3 className="method-title">Guided Workouts</h3>
              <p className="method-desc">
                You'll exercise with clear, step-by-step coach guidance on proper form, safe lifting techniques, and steady daily progress.
              </p>
            </div>

            <div className="method-card">
              <div className="method-step">STEP 04</div>
              <h3 className="method-title">Track & Celebrate Wins</h3>
              <p className="method-desc">
                Every month, we review your strength gains and progress together, updating your plan so you keep improving and staying motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="WHAT WE BELIEVE"
            title="OUR 3 SIMPLE"
            titleHighlight="CORE VALUES"
            subtitle="The key principles that guide our trainers and shape our friendly gym community."
          />

          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-box">
                <Target size={24} />
              </div>
              <h3 className="value-title">Safe Movement & Proper Form</h3>
              <p className="value-text">
                We care about doing exercises correctly. Good technique protects your joints, prevents injury, and gives you the best results.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-box">
                <Shield size={24} />
              </div>
              <h3 className="value-title">Helpful Support Every Day</h3>
              <p className="value-text">
                Consistency is key. Our friendly coaches are always here to keep you motivated, answer questions, and celebrate your wins.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-box">
                <Users size={24} />
              </div>
              <h3 className="value-title">A Welcoming Community</h3>
              <p className="value-text">
                Everyone from beginners taking their first steps to experienced lifters trains side-by-side with respect and friendly encouragement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Banner */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="about-community-banner">
            <img
              src={communityTraining}
              alt="Community Training"
              loading="lazy"
              decoding="async"
              className="about-community-bg"
            />
            <div className="about-community-content">
              <span className="badge-lime" style={{ marginBottom: '1rem' }}>JOIN OUR COMMUNITY</span>
              <h3 className="about-community-title">
                SURROUND YOURSELF WITH PEOPLE WHO LIFT YOU UP.
              </h3>
              <p className="about-community-desc">
                Step into a gym where everyone is friendly, helpful, and working together to build healthier, happier lives.
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
