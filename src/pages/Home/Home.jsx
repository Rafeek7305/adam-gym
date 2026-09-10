import React, { useState } from 'react'
import { Link } from '../../router/Router'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {
  Dumbbell,
  Target,
  Flame,
  Shield,
  Activity,
  Users,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  MapPin,
  Clock,
  Phone
} from '../../components/Icons'
import {
  heroAthlete,
  strengthTraining,
  functionalTraining,
  personalTraining,
  performanceTraining,
  conditioningTraining,
  facilityInterior,
  facilityEquipment,
  communityTraining,
  headCoach,
  ctaAthlete
} from '../../assets/images'
import { useInView, useCounter } from '../../utils/motion'
import './Home.css'

export default function Home({ onOpenConsultation }) {
  // Active program tab state
  const [activeTab, setActiveTab] = useState('strength')

  // Animated counters trigger
  const [statsRef, statsInView] = statsInViewTrigger()
  const coachCount = useCounter(12, 1800, statsInView)
  const sqftCount = useCounter(15000, 2200, statsInView)
  const successRate = useCounter(98, 1600, statsInView)
  const tailoredPct = useCounter(100, 1500, statsInView)

  function statsInViewTrigger() {
    return useInView({ threshold: 0.25, triggerOnce: true })
  }

  const programsData = {
    strength: {
      title: 'Strength & Powerlifting',
      category: 'Hypertrophy & Max Output',
      desc: 'Structured periodization protocols focusing on compound mechanics, motor recruitment, and incremental progressive overload under calibrated Olympic barbells and cages.',
      image: strengthTraining,
      features: [
        'Calibrated Eleiko & Rogue Steel',
        'Custom 1RM Periodized Blocks',
        'Biomechanics & Bar Path Analysis',
        'Direct Fatigue Management'
      ]
    },
    personal: {
      title: '1-on-1 Elite Coaching',
      category: 'Total Individual Protocol',
      desc: 'High-touch private coaching tailored to your structural anatomy, movement restrictions, and physiological milestones. Continuous weekly progression monitoring.',
      image: personalTraining,
      features: [
        'Comprehensive Movement Screening',
        'Macro & Nutrient Timing Blueprint',
        'Weekly Video Technique Audit',
        'Private Training Suites'
      ]
    },
    functional: {
      title: 'Functional Conditioning',
      category: 'Metabolic Stamina & Agility',
      desc: 'High-intensity athletic circuits combining kettlebells, sleds, and battle ropes to build relentless cardiovascular capacity, core rigidity, and explosive power.',
      image: functionalTraining,
      features: [
        'Sprint Turf Acceleration Drills',
        'Battle Rope & Slam Ball Circuits',
        'Multi-Planar Agility & Core Work',
        'High Metabolic Calorie Burn'
      ]
    },
    performance: {
      title: 'Athletic Performance Lab',
      category: 'Speed, Power & Reaction',
      desc: 'Sports-specific speed mechanics, plyometrics, and sled resistance training designed to elevate vertical jump, velocity, and deceleration resilience.',
      image: performanceTraining,
      features: [
        'Weighted Sled Resistance Runs',
        'Force-Velocity Profiling',
        'Plyometric Elasticity Training',
        'Joint Durability Prehab'
      ]
    },
    conditioning: {
      title: 'Cardio Engine Conditioning',
      category: 'VO2 Max & Aerobic Threshold',
      desc: 'Zone-based threshold conditioning on curved treadmills, Concept2 rowers, and air bikes to optimize work capacity without sacrificing lean muscle mass.',
      image: conditioningTraining,
      features: [
        'Assault Bike Interval Sprints',
        'Concept2 Ergometer Intervals',
        'Lactate Threshold Adaptation',
        'Real-time Heart Rate Tracking'
      ]
    }
  }

  const activeProgram = programsData[activeTab]

  return (
    <div className="home-page">
      {/* ===================================================
         01 HERO SECTION
      =================================================== */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src={heroAthlete}
            alt="ADAM Elite Athletes"
            className="hero-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay"></div>
        </div>

        <div className="container-wide">
          <div className="hero-content">
            <div className="hero-tagline-bar">
              <span>STRONGER</span>
              <span className="divider-dot"></span>
              <span>FITTER</span>
              <span className="divider-dot"></span>
              <span>HAPPIER</span>
              <span className="divider-dot"></span>
              <span>YOU</span>
            </div>

            <h1 className="hero-title">
              BUILD YOUR <br />
              <span className="hero-title-highlight">STRONGER</span> SELF.
            </h1>

            <p className="hero-subtitle">
              A high-performance athletic facility engineered for strength, functional movement, and uncompromising mental resilience.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenConsultation}
              >
                <span>START TRAINING</span>
                <ArrowRight size={18} />
              </button>

              <Link to="/programs" className="btn btn-secondary">
                <span>EXPLORE PROGRAMS</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="hero-quick-specs">
              <div className="hero-spec-item">
                <span className="hero-spec-val">15,000</span>
                <span className="hero-spec-lbl">Sq Ft Facility</span>
              </div>
              <div className="hero-spec-item">
                <span className="hero-spec-val">100%</span>
                <span className="hero-spec-lbl">Coached Protocols</span>
              </div>
              <div className="hero-spec-item">
                <span className="hero-spec-val text-lime">ELITE</span>
                <span className="hero-spec-lbl">Biomechanical Rig</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         02 BRAND STATEMENT (EDITORIAL STATEMENT)
      =================================================== */}
      <section className="statement-section">
        <div className="container">
          <div className="statement-content">
            <div className="statement-eyebrow">
              <span className="badge-dot"></span>
              <span>THE ADAM PHILOSOPHY</span>
            </div>

            <div className="statement-giant">
              TRAIN <span>SMARTER.</span> <br />
              MOVE <span>STRONGER.</span> <br />
              LIVE <span>BETTER.</span>
            </div>

            <div className="statement-body-row">
              <p className="statement-desc">
                We reject superficial fitness fads and generic routines. At ADAM FITNESS CENTRE, human performance is engineered through biomechanical precision, progressive overload, and a relentless culture of accountability.
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={onOpenConsultation}
                >
                  <span>BOOK FACILITY TOUR</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         03 TRAINING PHILOSOPHY / 3 CORE PILLARS
      =================================================== */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="FOUNDATIONAL PILLARS"
            title="THE ARCHITECTURE OF"
            titleHighlight="HUMAN OUTPUT"
            subtitle="Three non-negotiable principles engineered into every workout, coach consultation, and recovery protocol at ADAM."
          />

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-card-top">
                <div className="philosophy-num">01</div>
                <div className="philosophy-icon-wrap">
                  <Target size={26} />
                </div>
              </div>
              <div>
                <h3 className="philosophy-title">Biomechanical Precision</h3>
                <p className="philosophy-text">
                  Movement screening before load. We ensure joint stability, kinetic chain alignment, and optimized bar path before adding heavy resistance.
                </p>
              </div>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-card-top">
                <div className="philosophy-num">02</div>
                <div className="philosophy-icon-wrap">
                  <Zap size={26} />
                </div>
              </div>
              <div>
                <h3 className="philosophy-title">Progressive Overload</h3>
                <p className="philosophy-text">
                  Data-backed periodization cycles. We track bar velocity, volume load, and recovery windows to guarantee continuous athletic adaptation.
                </p>
              </div>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-card-top">
                <div className="philosophy-num">03</div>
                <div className="philosophy-icon-wrap">
                  <Shield size={26} />
                </div>
              </div>
              <div>
                <h3 className="philosophy-title">Uncompromising Culture</h3>
                <p className="philosophy-text">
                  Zero room for mediocrity. You train alongside dedicated athletes and high achievers who push standards forward every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         04 PROGRAMS SHOWCASE
      =================================================== */}
      <section className="section" style={{ background: '#0a0a0f' }}>
        <div className="container">
          <SectionHeader
            badge="TRAINING CATALOG"
            title="PROGRAMS ENGINEERED FOR"
            titleHighlight="RESULTS"
            subtitle="Select a track below to preview how our scientific training regimens deliver tangible physical mastery."
          />

          {/* Interactive Tabs */}
          <div className="programs-tabs-wrap">
            <button
              type="button"
              className={`program-tab-btn ${activeTab === 'strength' ? 'active' : ''}`}
              onClick={() => setActiveTab('strength')}
            >
              Strength & Power
            </button>
            <button
              type="button"
              className={`program-tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              1-on-1 Coaching
            </button>
            <button
              type="button"
              className={`program-tab-btn ${activeTab === 'functional' ? 'active' : ''}`}
              onClick={() => setActiveTab('functional')}
            >
              Functional Fitness
            </button>
            <button
              type="button"
              className={`program-tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              Performance Lab
            </button>
            <button
              type="button"
              className={`program-tab-btn ${activeTab === 'conditioning' ? 'active' : ''}`}
              onClick={() => setActiveTab('conditioning')}
            >
              Cardio Engine
            </button>
          </div>

          {/* Active Program Card */}
          <div className="program-display-card">
            <div className="program-display-media">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="program-display-img"
              />
            </div>

            <div className="program-display-info">
              <div>
                <div className="program-tag-row">
                  <span className="badge-lime">{activeProgram.category}</span>
                </div>

                <h3 className="program-display-title">{activeProgram.title}</h3>
                <p className="program-display-desc">{activeProgram.desc}</p>

                <ul className="program-features-list">
                  {activeProgram.features.map((feat, idx) => (
                    <li key={idx} className="program-feature-item">
                      <Check size={18} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenConsultation}
                >
                  <span>ENROLL IN PROGRAM</span>
                  <ArrowRight size={16} />
                </button>

                <Link to="/programs" className="btn btn-secondary">
                  <span>VIEW FULL CURRICULUM</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         05 PERFORMANCE STATS
      =================================================== */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number-row">
                <span>{tailoredPct}</span>
                <span className="stat-suffix">%</span>
              </div>
              <div className="stat-label">Tailored Programming</div>
              <div className="stat-detail">Zero generic templates</div>
            </div>

            <div className="stat-item">
              <div className="stat-number-row">
                <span>{sqftCount.toLocaleString()}</span>
                <span className="stat-suffix">+</span>
              </div>
              <div className="stat-label">Sq Ft Floor Space</div>
              <div className="stat-detail">Olympic platforms & turf</div>
            </div>

            <div className="stat-item">
              <div className="stat-number-row">
                <span>{coachCount}</span>
                <span className="stat-suffix">+</span>
              </div>
              <div className="stat-label">Certified Coaches</div>
              <div className="stat-detail">CSCS & Olympic specialists</div>
            </div>

            <div className="stat-item">
              <div className="stat-number-row">
                <span>{successRate}</span>
                <span className="stat-suffix">%</span>
              </div>
              <div className="stat-label">Goal Completion</div>
              <div className="stat-detail">Validated client tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         06 FACILITY EXPERIENCE
      =================================================== */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="THE TRAINING GROUND"
            title="DESIGNED FOR THOSE WHO"
            titleHighlight="DEMAND THE BEST"
            subtitle="15,000 square feet of competition-grade equipment, acoustic isolation, and architectural lime ambient illumination."
          />

          <div className="facility-grid">
            <div className="facility-card-main">
              <img
                src={facilityInterior}
                alt="ADAM Facility Interior"
                className="facility-img"
              />
              <div className="facility-caption">
                <h4>Main Strength Arena</h4>
                <p>Equipped with 10 custom Olympic racks, Eleiko competition bars, and calibrated bumper plates.</p>
              </div>
            </div>

            <div className="facility-card-side">
              <img
                src={facilityEquipment}
                alt="Precision Calibrated Dumbbells"
                className="facility-img"
              />
              <div className="facility-caption">
                <h4>Precision Steel & Knurling</h4>
                <p>Hand-crafted urethane dumbbells from 5kg to 65kg and custom specialty bars.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         07 COACHING SECTION
      =================================================== */}
      <section className="section" style={{ background: '#09090e' }}>
        <div className="container">
          <SectionHeader
            badge="ELITE LEADERSHIP"
            title="MEET OUR HEAD OF"
            titleHighlight="PERFORMANCE"
            subtitle="Our coaches are elite career practitioners who hold NSCA-CSCS, Olympic weightlifting credentials, and collegiate strength experience."
          />

          <div className="coach-showcase-grid">
            <div className="coach-portrait-wrap">
              <img
                src={headCoach}
                alt="Senior Performance Director"
                className="coach-portrait-img"
              />
            </div>

            <div className="coach-info-pane">
              <span className="badge-lime">DIRECTOR OF STRENGTH</span>
              <h3 className="coach-name">MARCUS VAUGHN, CSCS</h3>
              <div className="coach-role">14+ YEARS HIGH-PERFORMANCE COACHING</div>

              <p className="coach-bio">
                "Our ethos at ADAM is simple: we don't guess, we test. Every rep you perform has an intentional biomechanical target. Whether you are lifting to add 40kg to your deadlift or rebuilding joint resilience for longevity, our coaching system meets you with world-class rigor."
              </p>

              <div className="coach-credentials">
                <div className="cred-item">
                  <span className="cred-val">CSCS</span>
                  <span className="cred-lbl">NSCA Certified</span>
                </div>
                <div className="cred-item">
                  <span className="cred-val">USAW L2</span>
                  <span className="cred-lbl">Weightlifting</span>
                </div>
                <div className="cred-item">
                  <span className="cred-val">500+</span>
                  <span className="cred-lbl">Athletes Trained</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenConsultation}
              >
                <span>BOOK COACH ASSESSMENT</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         09 COMMUNITY & CULTURE
      =================================================== */}
      <section className="section">
        <div className="container">
          <div className="community-banner">
            <img
              src={communityTraining}
              alt="ADAM Athlete Community"
              className="community-bg-img"
            />
            <div className="community-overlay">
              <span className="badge-lime" style={{ marginBottom: '1rem' }}>
                TRAIN • TRANSFORM • BELONG
              </span>
              <h3>A CULTURE BUILT ON MUTUAL RESPECT</h3>
              <p style={{ color: 'var(--text-offwhite)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                No egos, no distractions. When you step into ADAM FITNESS CENTRE, you enter an environment where athletes support and push each other toward breakthrough personal records.
              </p>
              <Link to="/about" className="btn btn-secondary">
                <span>OUR CULTURE & STORY</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         10 MEMBERSHIP CTA BANNER
      =================================================== */}
      <section className="cta-banner-section">
        <div className="cta-banner-bg">
          <img src={ctaAthlete} alt="Start Your Journey" className="cta-bg-img" />
        </div>

        <div className="container">
          <div className="cta-banner-card">
            <span className="badge-lime">
              <Sparkles size={14} />
              CLAIM YOUR TRIAL PASS
            </span>

            <h2 className="cta-banner-title">
              DISCIPLINE TODAY. <br />
              <span className="text-lime">A STRONGER TOMORROW.</span>
            </h2>

            <p className="cta-banner-desc">
              Experience the atmosphere, meet the coaching team, and test our Olympic platforms firsthand with a complimentary 1-day athlete pass.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenConsultation}
              >
                <span>CLAIM COMPLIMENTARY PASS</span>
                <ArrowRight size={18} />
              </button>

              <Link to="/contact" className="btn btn-secondary">
                <span>GET DIRECTIONS & HOURS</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         11 LOCATION & SCHEDULE PREVIEW
      =================================================== */}
      <section className="section" style={{ background: '#08080c', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="adam-card" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--lime)', marginBottom: '1.25rem' }}>
                <Clock size={32} />
              </div>
              <h4 style={{ textTransform: 'uppercase', marginBottom: '0.75rem' }}>Facility Hours</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-offwhite)' }}>
                <strong>Monday – Friday:</strong> 5:30 AM – 10:30 PM<br />
                <strong>Saturday – Sunday:</strong> 6:00 AM – 9:00 PM<br />
                <span style={{ color: 'var(--lime)', display: 'inline-block', marginTop: '0.5rem', fontWeight: 600 }}>24/7 Keycard Access for VIP Tiers</span>
              </p>
            </div>

            <div className="adam-card" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--lime)', marginBottom: '1.25rem' }}>
                <MapPin size={32} />
              </div>
              <h4 style={{ textTransform: 'uppercase', marginBottom: '0.75rem' }}>Location</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-offwhite)' }}>
                840 Olympic Parkway<br />
                Performance District, NY 10001<br />
                <span style={{ color: 'var(--text-muted)', display: 'inline-block', marginTop: '0.5rem' }}>Validated underground athlete parking</span>
              </p>
            </div>

            <div className="adam-card" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--lime)', marginBottom: '1.25rem' }}>
                <Phone size={32} />
              </div>
              <h4 style={{ textTransform: 'uppercase', marginBottom: '0.75rem' }}>Direct Line & Chat</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-offwhite)' }}>
                Phone: +1 (800) 555-ADAM<br />
                WhatsApp: Direct Member Concierge<br />
                <a href="tel:+18005552326" style={{ color: 'var(--lime)', display: 'inline-block', marginTop: '0.5rem', fontWeight: 600 }}>
                  Call Direct Now &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
