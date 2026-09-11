import React, { useState, useEffect } from 'react'
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
  Phone,
  ChevronDown,
  Award
} from '../../components/Icons'
import {
  heroAthlete,
  heroMan1,
  heroMan2,
  heroMan3,
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
import { useInView, Counter } from '../../utils/motion'
import './Home.css'

export default function Home({ onOpenConsultation }) {
  // Active program tab state
  const [activeTab, setActiveTab] = useState('strength')

  // Animated counters trigger
  const [statsRef, statsInView] = statsInViewTrigger()

  // 3 Dynamic Male Workout Background Slides
  const heroSlides = [
    {
      id: 1,
      image: heroMan1,
      tag: 'BARBELL POWER',
      sub: 'HEAVY COMPOUND DEADLIFT',
      hudStatus: 'ZONE 4 • MAX PULL',
      hr: '172',
      metric: 'FORCE OUTPUT: 880W',
      efficiency: '99.2%'
    },
    {
      id: 2,
      image: heroMan2,
      tag: 'BATTLE ROPES',
      sub: 'EXPLOSIVE METABOLIC BURST',
      hudStatus: 'ZONE 5 • PEAK STAMINA',
      hr: '184',
      metric: 'METABOLIC: 24 CAL/MIN',
      efficiency: '97.8%'
    },
    {
      id: 3,
      image: heroMan3,
      tag: 'DUMBBELL RIG',
      sub: 'HYPERTROPHY & ROW DYNAMICS',
      hudStatus: 'ZONE 3 • VOLUME BUILD',
      hr: '158',
      metric: 'TUT CAPACITY: OPTIMAL',
      efficiency: '98.5%'
    }
  ]

  const [activeSlide, setActiveSlide] = useState(0)

  // Auto-cycle the 3 background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

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
        {/* Ambient atmospheric glow and grid accents */}
        <div className="hero-ambient-glow"></div>
        <div className="hero-grid-mesh"></div>

        <div className="hero-bg-media">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`hero-slide-item ${idx === activeSlide ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={`ADAM Workout Athlete - ${slide.tag}`}
                className="hero-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          <div className="hero-gradient-overlay"></div>

          {/* 3-Image Workout Switcher Controls */}
          <div className="hero-slide-indicators">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-slide-tab ${idx === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Switch to workout image ${idx + 1}: ${slide.tag}`}
              >
                <span className="slide-tab-index">0{idx + 1}</span>
                <div className="slide-tab-bar">
                  <span className="slide-tab-fill"></span>
                </div>
                <span className="slide-tab-label">{slide.tag}</span>
              </button>
            ))}
          </div>

          {/* Floating live telemetry HUD card synchronized with active slide */}
          <div className="hero-floating-hud">
            <div className="hud-header">
              <div className="hud-badge">
                <span className="hud-live-dot"></span>
                <span>LIVE TELEMETRY</span>
              </div>
              <span className="hud-status">{heroSlides[activeSlide].hudStatus}</span>
            </div>
            <div className="hud-body">
              <div className="hud-stat-main">
                <div className="hud-stat-icon">
                  <Activity size={18} />
                </div>
                <div>
                  <div className="hud-stat-val">{heroSlides[activeSlide].hr} <small>BPM</small></div>
                  <div className="hud-stat-lbl">Output Load</div>
                </div>
              </div>
              <div className="hud-equalizer">
                <span className="eq-bar bar-1"></span>
                <span className="eq-bar bar-2"></span>
                <span className="eq-bar bar-3"></span>
                <span className="eq-bar bar-4"></span>
                <span className="eq-bar bar-5"></span>
              </div>
            </div>
            <div className="hud-footer">
              <span className="hud-metric-pill">✦ {heroSlides[activeSlide].metric}</span>
            </div>
          </div>
        </div>

        <div className="container-wide">
          <div className="hero-content">
            {/* Modern glassmorphic status badge */}
            <div className="hero-badge-pill">
              <span className="hero-pulse-dot"></span>
              <span className="hero-badge-text">STRONGER • FITTER • HAPPIER • YOU</span>
              <span className="hero-badge-sub">HIGH-PERFORMANCE</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-row">BUILD YOUR</span>
              <span className="hero-title-row">
                <span className="hero-title-highlight">STRONGER</span> SELF.
              </span>
            </h1>

            <p className="hero-subtitle">
              A high-performance athletic facility engineered for strength, functional movement, and uncompromising mental resilience.
            </p>

            <div className="hero-actions-container">
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary hero-btn-glow"
                  onClick={onOpenConsultation}
                >
                  <span>START TRAINING</span>
                  <ArrowRight size={18} />
                </button>

                <Link to="/programs" className="btn btn-secondary hero-btn-glass">
                  <span>EXPLORE PROGRAMS</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              {/* Social trust proof row */}
              <div className="hero-trust-proof">
                <div className="hero-avatar-stack">
                  <div className="hero-avatar av-1">AJ</div>
                  <div className="hero-avatar av-2">RK</div>
                  <div className="hero-avatar av-3">SL</div>
                  <div className="hero-avatar av-plus">+</div>
                </div>
                <div className="hero-trust-info">
                  <div className="hero-stars">
                    ★★★★★ <span className="hero-stars-score">4.9 / 5</span>
                  </div>
                  <span className="hero-trust-lbl">
                    Trusted by <Counter end={450} duration={1400} start={true} />+ Serious Athletes
                  </span>
                </div>
              </div>
            </div>

            {/* Glassmorphic animated spec cards */}
            <div className="hero-quick-specs">
              <div className="hero-spec-card">
                <div className="hero-spec-top">
                  <span className="hero-spec-val">
                    <Counter end={15000} duration={1600} start={true} format={true} />
                  </span>
                  <span className="hero-spec-icon-wrap"><Zap size={15} /></span>
                </div>
                <span className="hero-spec-lbl">Sq Ft Facility Space</span>
              </div>

              <div className="hero-spec-card">
                <div className="hero-spec-top">
                  <span className="hero-spec-val">
                    <Counter end={100} duration={1400} start={true} suffix="%" />
                  </span>
                  <span className="hero-spec-icon-wrap"><Shield size={15} /></span>
                </div>
                <span className="hero-spec-lbl">Coached Protocols</span>
              </div>

              <div className="hero-spec-card highlight-card">
                <div className="hero-spec-top">
                  <span className="hero-spec-val text-lime">ELITE RIG</span>
                  <span className="hero-spec-icon-wrap lime-icon"><Flame size={15} /></span>
                </div>
                <span className="hero-spec-lbl">Biomechanical Rig</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         02 BRAND STATEMENT (EDITORIAL STATEMENT)
      =================================================== */}
      {/* ===================================================
         02 BRAND STATEMENT (EDITORIAL STATEMENT)
      =================================================== */}
      <section className="statement-section">
        <div className="statement-ambient-glow"></div>
        <div className="container-wide">
          <div className="statement-card-container">
            <div className="statement-grid">
              {/* Left Column: Brand Manifesto */}
              <div className="statement-left">
                <div className="statement-badge-pill">
                  <span className="statement-live-dot"></span>
                  <span className="statement-badge-txt">THE ADAM ETHOS</span>
                  <span className="statement-badge-sep">•</span>
                  <span className="statement-badge-sub">ZERO SHORTCUTS</span>
                </div>

                <h2 className="statement-giant">
                  <span className="statement-line">
                    TRAIN <span className="word-lime">SMARTER.</span>
                  </span>
                  <span className="statement-line">
                    MOVE <span className="word-lime">STRONGER.</span>
                  </span>
                  <span className="statement-line">
                    LIVE <span className="word-lime">BETTER.</span>
                  </span>
                </h2>

                <div className="statement-lead-quote">
                  <div className="quote-accent-bar"></div>
                  <p className="statement-desc">
                    We reject superficial fitness fads and generic routines. At ADAM FITNESS CENTRE, human performance is engineered through biomechanical precision, calibrated progressive overload, and an uncompromising culture of accountability.
                  </p>
                </div>

                {/* 3 Ethos Micro-Chips */}
                <div className="statement-pillars-chips">
                  <div className="pillar-chip">
                    <span className="chip-icon-box"><Target size={15} /></span>
                    <span className="chip-text">Biomechanical Precision</span>
                  </div>
                  <div className="pillar-chip">
                    <span className="chip-icon-box"><Dumbbell size={15} /></span>
                    <span className="chip-text">Progressive Overload</span>
                  </div>
                  <div className="pillar-chip">
                    <span className="chip-icon-box"><Shield size={15} /></span>
                    <span className="chip-text">Absolute Accountability</span>
                  </div>
                </div>
              </div>

              {/* Right Column: VIP Invitation Action Card */}
              <div className="statement-right">
                <div className="statement-vip-card">
                  <div className="vip-card-badge">
                    <span className="vip-sparkle">✦</span>
                    <span>PRIVATE FACILITY ACCESS</span>
                  </div>

                  <div className="vip-card-body">
                    <h3 className="vip-card-title">EXPERIENCE THE HIGH-PERFORMANCE FACILITY</h3>
                    <p className="vip-card-text">
                      Take a personalized walk-through with our Head Performance Director across our 15,000 sq ft calibrated training floor.
                    </p>

                    <div className="vip-perks-list">
                      <div className="vip-perk-item">
                        <span className="vip-perk-dot"></span>
                        <span>Complimentary Biomechanical Movement Screening</span>
                      </div>
                      <div className="vip-perk-item">
                        <span className="vip-perk-dot"></span>
                        <span>Calibrated Eleiko & Rogue Steel Access Preview</span>
                      </div>
                      <div className="vip-perk-item">
                        <span className="vip-perk-dot"></span>
                        <span>Zero Obligation Athlete Consultation</span>
                      </div>
                    </div>
                  </div>

                  <div className="vip-card-action">
                    <button
                      type="button"
                      className="btn btn-primary vip-btn-glow"
                      onClick={onOpenConsultation}
                    >
                      <span>BOOK FACILITY TOUR</span>
                      <ArrowRight size={17} />
                    </button>
                    <span className="vip-guarantee-note">⚡ Limited daily VIP slots for personal attention</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         03 TRAINING PHILOSOPHY / 3 CORE PILLARS
      =================================================== */}
      <section className="section pillars-section">
        <div className="pillars-ambient-glow"></div>
        <div className="container">
          <SectionHeader
            badge="FOUNDATIONAL PILLARS"
            title="THE ARCHITECTURE OF"
            titleHighlight="HUMAN OUTPUT"
            subtitle="Three non-negotiable principles engineered into every workout, coach consultation, and recovery protocol at ADAM."
          />

          <div className="philosophy-grid">
            {/* Card 01: Biomechanical Precision */}
            <div className="philosophy-card card-1">
              <div className="card-top-beam"></div>
              <div className="card-ambient-flare"></div>

              <div className="philosophy-card-top">
                <div className="philosophy-num-badge">
                  <span className="num-prefix">STAGE</span>
                  <span className="philosophy-num">01</span>
                </div>
                <div className="philosophy-icon-wrap">
                  <Target size={24} />
                  <span className="icon-pulse-ring"></span>
                </div>
              </div>

              <div className="philosophy-card-body">
                <div className="pillar-metric-tag">
                  <span className="metric-dot"></span>
                  <span>100% MOVEMENT AUDIT</span>
                </div>
                <h3 className="philosophy-title">Biomechanical Precision</h3>
                <p className="philosophy-text">
                  Movement screening before load. We ensure joint stability, kinetic chain alignment, and optimized bar path before adding heavy resistance.
                </p>
              </div>

              <div className="philosophy-card-footer">
                <div className="pillar-tech-specs">
                  <span className="tech-chip">Kinetic Path</span>
                  <span className="tech-chip">Joint Prehab</span>
                </div>
                <div className="pillar-progress-wrapper">
                  <div className="progress-info">
                    <span className="progress-label">CALIBRATION</span>
                    <span className="progress-val">99.4%</span>
                  </div>
                  <div className="pillar-progress-track">
                    <div className="pillar-progress-bar bar-fill-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02: Progressive Overload */}
            <div className="philosophy-card card-2">
              <div className="card-top-beam"></div>
              <div className="card-ambient-flare"></div>

              <div className="philosophy-card-top">
                <div className="philosophy-num-badge">
                  <span className="num-prefix">STAGE</span>
                  <span className="philosophy-num">02</span>
                </div>
                <div className="philosophy-icon-wrap">
                  <Zap size={24} />
                  <span className="icon-pulse-ring"></span>
                </div>
              </div>

              <div className="philosophy-card-body">
                <div className="pillar-metric-tag">
                  <span className="metric-dot"></span>
                  <span>VELOCITY & LOAD</span>
                </div>
                <h3 className="philosophy-title">Progressive Overload</h3>
                <p className="philosophy-text">
                  Data-backed periodization cycles. We track bar velocity, volume load, and recovery windows to guarantee continuous athletic adaptation.
                </p>
              </div>

              <div className="philosophy-card-footer">
                <div className="pillar-tech-specs">
                  <span className="tech-chip">RPE Protocols</span>
                  <span className="tech-chip">1RM Periodization</span>
                </div>
                <div className="pillar-progress-wrapper">
                  <div className="progress-info">
                    <span className="progress-label">STRENGTH PROGRESSION</span>
                    <span className="progress-val">+32%</span>
                  </div>
                  <div className="pillar-progress-track">
                    <div className="pillar-progress-bar bar-fill-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: Uncompromising Culture */}
            <div className="philosophy-card card-3">
              <div className="card-top-beam"></div>
              <div className="card-ambient-flare"></div>

              <div className="philosophy-card-top">
                <div className="philosophy-num-badge">
                  <span className="num-prefix">STAGE</span>
                  <span className="philosophy-num">03</span>
                </div>
                <div className="philosophy-icon-wrap">
                  <Shield size={24} />
                  <span className="icon-pulse-ring"></span>
                </div>
              </div>

              <div className="philosophy-card-body">
                <div className="pillar-metric-tag">
                  <span className="metric-dot"></span>
                  <span>ELITE ACCOUNTABILITY</span>
                </div>
                <h3 className="philosophy-title">Uncompromising Culture</h3>
                <p className="philosophy-text">
                  Zero room for mediocrity. You train alongside dedicated athletes and high achievers who push standards forward every single day.
                </p>
              </div>

              <div className="philosophy-card-footer">
                <div className="pillar-tech-specs">
                  <span className="tech-chip">Egoless Standard</span>
                  <span className="tech-chip">Coached 100%</span>
                </div>
                <div className="pillar-progress-wrapper">
                  <div className="progress-info">
                    <span className="progress-label">ADHERENCE RATE</span>
                    <span className="progress-val">98.2%</span>
                  </div>
                  <div className="pillar-progress-track">
                    <div className="pillar-progress-bar bar-fill-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         04 PROGRAMS SHOWCASE
      =================================================== */}
      <section className="section programs-section">
        <div className="container">
          <SectionHeader
            badge="TRAINING CATALOG"
            title="PROGRAMS ENGINEERED FOR"
            titleHighlight="RESULTS"
            subtitle="Select a track below to preview how our scientific training regimens deliver tangible physical mastery."
          />

          {/* Interactive Tabs with Smooth Switching */}
          <div className="programs-tabs-wrap">
            {[
              { id: 'strength', label: 'Strength & Power' },
              { id: 'personal', label: '1-on-1 Coaching' },
              { id: 'functional', label: 'Functional Fitness' },
              { id: 'performance', label: 'Performance Lab' },
              { id: 'conditioning', label: 'Cardio Engine' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`program-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Program Card with key={activeTab} for Butter-Smooth Transitions */}
          <div className="program-display-card-wrapper">
            <div className="program-display-card" key={activeTab}>
              <div className="program-display-media">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  className="program-display-img"
                />
                <div className="program-media-overlay"></div>
                <div className="program-media-badge">
                  <span className="media-badge-dot"></span>
                  <span>ADAM CERTIFIED PROTOCOL</span>
                </div>
              </div>

              <div className="program-display-info">
                <div>
                  <div className="program-tag-row">
                    <span className="badge-lime">{activeProgram.category}</span>
                    <span className="badge-dark-pill">COACH DIRECTED</span>
                  </div>

                  <h3 className="program-display-title">{activeProgram.title}</h3>
                  <p className="program-display-desc">{activeProgram.desc}</p>

                  <ul className="program-features-list">
                    {activeProgram.features.map((feat, idx) => (
                      <li key={idx} className="program-feature-item">
                        <span className="feature-check-icon">
                          <Check size={14} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="program-card-actions">
                  <button
                    type="button"
                    className="btn btn-primary program-enroll-btn"
                    onClick={onOpenConsultation}
                  >
                    <span>ENROLL IN PROGRAM</span>
                    <ArrowRight size={16} />
                  </button>

                  <Link to="/programs" className="btn btn-secondary program-curriculum-btn">
                    <span>VIEW FULL CURRICULUM</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         05 PERFORMANCE STATS — Modern Telemetry Cards
      =================================================== */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          {/* Telemetry Section Header Strip */}
          <div className="stats-header-bar">
            <div className="stats-badge">
              <span className="stats-pulse-dot" />
              <span>PERFORMANCE TELEMETRY</span>
            </div>
            <div className="stats-caption">
              AUDITED DATA • REAL-TIME ATHLETE BENCHMARKS
            </div>
          </div>

          <div className="stats-grid">
            {/* Card 1 */}
            <div className="stat-card">
              <div className="stat-card-beam" />
              <div className="stat-card-flare" />
              <div className="stat-card-top">
                <div className="stat-icon-wrapper">
                  <Target size={22} />
                </div>
                <span className="stat-tag">1:1 PROTOCOL</span>
              </div>
              <div className="stat-number-row">
                <span className="stat-num-val">
                  <Counter end={100} duration={1500} start={statsInView} />
                </span>
                <span className="stat-suffix">%</span>
              </div>
              <h3 className="stat-label">Tailored Programming</h3>
              <p className="stat-detail">Zero generic templates with individual biomechanics & metabolic load mapping.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '100%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">PRECISION</span>
                  <span className="stat-meta-val">100% INDIVIDUAL</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="stat-card">
              <div className="stat-card-beam" />
              <div className="stat-card-flare" />
              <div className="stat-card-top">
                <div className="stat-icon-wrapper">
                  <Zap size={22} />
                </div>
                <span className="stat-tag">FACILITY</span>
              </div>
              <div className="stat-number-row">
                <span className="stat-num-val">
                  <Counter end={15000} duration={1800} start={statsInView} format={true} />
                </span>
                <span className="stat-suffix">+</span>
              </div>
              <h3 className="stat-label">Sq Ft Floor Space</h3>
              <p className="stat-detail">Olympic platforms, Eleiko calibrated steel, acoustic isolation & sprint turf.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '100%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">FOOTPRINT</span>
                  <span className="stat-meta-val">MAX CAPACITY</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="stat-card">
              <div className="stat-card-beam" />
              <div className="stat-card-flare" />
              <div className="stat-card-top">
                <div className="stat-icon-wrapper">
                  <Users size={22} />
                </div>
                <span className="stat-tag">COACHING</span>
              </div>
              <div className="stat-number-row">
                <span className="stat-num-val">
                  <Counter end={12} duration={1600} start={statsInView} />
                </span>
                <span className="stat-suffix">+</span>
              </div>
              <h3 className="stat-label">Certified Coaches</h3>
              <p className="stat-detail">CSCS credentialed mentors, former Olympic specialists & ex-physiologists.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '100%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">FACULTY</span>
                  <span className="stat-meta-val">ELITE TIER</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="stat-card">
              <div className="stat-card-beam" />
              <div className="stat-card-flare" />
              <div className="stat-card-top">
                <div className="stat-icon-wrapper">
                  <Award size={22} />
                </div>
                <span className="stat-tag">SUCCESS</span>
              </div>
              <div className="stat-number-row">
                <span className="stat-num-val">
                  <Counter end={98} duration={1600} start={statsInView} />
                </span>
                <span className="stat-suffix">%</span>
              </div>
              <h3 className="stat-label">Goal Completion</h3>
              <p className="stat-detail">Clinically validated client progression tracking across strength & body recomp.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '98%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">BENCHMARK</span>
                  <span className="stat-meta-val">98% ADHERENCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         06 FACILITY EXPERIENCE — Architectural Showcase
      =================================================== */}
      <section className="section facility-section">
        <div className="container">
          <div className="facility-header-row">
            <SectionHeader
              badge="THE TRAINING GROUND"
              title="DESIGNED FOR THOSE WHO"
              titleHighlight="DEMAND THE BEST"
              subtitle="15,000 square feet of competition-grade equipment, acoustic isolation, and architectural lime ambient illumination."
            />
            <div className="facility-header-cta">
              <button
                className="btn btn-outline facility-tour-btn"
                onClick={onOpenConsultation}
              >
                <Sparkles size={16} />
                <span>BOOK PRIVATE TOUR</span>
              </button>
            </div>
          </div>

          <div className="facility-grid">
            {/* Main Arena Card */}
            <div className="facility-card facility-card-main">
              <div className="facility-card-beam" />
              <div className="facility-card-badges">
                <span className="facility-zone-badge">
                  <span className="facility-live-dot" />
                  ZONE 01 • MAIN PLATFORMS
                </span>
                <span className="facility-spec-pill">ELEIKO IPF SPEC</span>
              </div>
              <img
                src={facilityInterior}
                alt="ADAM Facility Interior"
                className="facility-img"
              />
              <div className="facility-img-overlay" />
              <div className="facility-caption">
                <span className="facility-category">OLYMPIC RIG & STRENGTH ARENA</span>
                <h3 className="facility-title">Main Strength Arena</h3>
                <p className="facility-desc">
                  Equipped with 10 custom Olympic racks, calibrated Eleiko competition bars, and vibration-damped bumper platforms.
                </p>
                <div className="facility-chips">
                  <span className="facility-chip">10x Olympic Platforms</span>
                  <span className="facility-chip">Calibrated Steel</span>
                  <span className="facility-chip">Acoustic Turf Track</span>
                </div>
                <div className="facility-action-hint">
                  <span>FACILITY SPECIFICATIONS</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>

            {/* Precision Steel Card */}
            <div className="facility-card facility-card-side">
              <div className="facility-card-beam" />
              <div className="facility-card-badges">
                <span className="facility-zone-badge">
                  <span className="facility-live-dot" />
                  ZONE 02 • FREE WEIGHTS
                </span>
                <span className="facility-spec-pill">5KG - 65KG</span>
              </div>
              <img
                src={facilityEquipment}
                alt="Precision Calibrated Dumbbells"
                className="facility-img"
              />
              <div className="facility-img-overlay" />
              <div className="facility-caption">
                <span className="facility-category">PRECISION RESISTANCE</span>
                <h3 className="facility-title">Precision Steel & Knurling</h3>
                <p className="facility-desc">
                  Hand-crafted urethane dumbbells with aggressive volcanic knurling, complemented by custom hex and specialty bars.
                </p>
                <div className="facility-chips">
                  <span className="facility-chip">Solid Urethane Heads</span>
                  <span className="facility-chip">Volcanic Knurling</span>
                  <span className="facility-chip">Specialty Cambered Bars</span>
                </div>
                <div className="facility-action-hint">
                  <span>CALIBRATION PROTOCOL</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Amenities Grid */}
          <div className="facility-amenities-grid">
            <div className="facility-amenity-card">
              <div className="amenity-icon-box">
                <Shield size={20} />
              </div>
              <div className="amenity-content">
                <h4 className="amenity-title">Acoustic Decoupling</h4>
                <p className="amenity-desc">Sub-floor shock damping and acoustic rubber isolation for zero vibration transfer.</p>
              </div>
            </div>

            <div className="facility-amenity-card">
              <div className="amenity-icon-box">
                <Activity size={20} />
              </div>
              <div className="amenity-content">
                <h4 className="amenity-title">Hospital-Grade Air HVAC</h4>
                <p className="amenity-desc">MERV-13 dual filtration cycles 100% fresh atmospheric air every 4 minutes.</p>
              </div>
            </div>

            <div className="facility-amenity-card">
              <div className="amenity-icon-box">
                <Zap size={20} />
              </div>
              <div className="amenity-content">
                <h4 className="amenity-title">Circadian Lime Lighting</h4>
                <p className="amenity-desc">Architectural 4500K lumen arrays tuned to stimulate central nervous drive.</p>
              </div>
            </div>

            <div className="facility-amenity-card">
              <div className="amenity-icon-box">
                <Target size={20} />
              </div>
              <div className="amenity-content">
                <h4 className="amenity-title">Capped Floor Capacity</h4>
                <p className="amenity-desc">Strict member caps guarantee immediate rack availability with zero wait times.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         07 COACHING SECTION
      =================================================== */}
      <section className="section coach-section">
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
         09 COMMUNITY & MEMBERSHIP CTA — Side-by-Side Dual Modern Cards
      =================================================== */}
      <section className="section community-cta-section">
        <div className="container">
          <div className="community-cta-grid">
            {/* Card 1: Community & Culture */}
            <div className="twin-card twin-card-community">
              <div className="twin-card-beam" />
              <img
                src={communityTraining}
                alt="ADAM Athlete Community"
                className="twin-card-bg-img"
              />
              <div className="twin-card-overlay" />

              <div className="twin-card-top">
                <span className="badge-lime">
                  <span className="badge-dot" />
                  TRAIN • TRANSFORM • BELONG
                </span>
                <span className="twin-hud-badge">PEER ACCOUNTABILITY</span>
              </div>

              <div className="twin-card-content">
                <span className="twin-kicker">ATHLETE TRIBE & STANDARDS</span>
                <h3 className="twin-card-title">A CULTURE BUILT ON MUTUAL RESPECT</h3>
                <p className="twin-card-desc">
                  No egos, no distractions. When you step into ADAM FITNESS CENTRE, you enter an environment where athletes support and push each other toward breakthrough personal records.
                </p>

                <div className="twin-chips">
                  <span className="twin-chip">Zero Ego Culture</span>
                  <span className="twin-chip">Daily PR Board</span>
                  <span className="twin-chip">Supportive Tribe</span>
                </div>

                <div className="twin-btn-row">
                  <Link to="/about" className="btn btn-secondary twin-btn">
                    <span>OUR CULTURE & STORY</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Trial Pass & Membership Invitation */}
            <div className="twin-card twin-card-trial">
              <div className="twin-card-beam" />
              <img
                src={ctaAthlete}
                alt="Start Your Journey"
                className="twin-card-bg-img"
              />
              <div className="twin-card-overlay" />

              <div className="twin-card-top">
                <span className="badge-lime">
                  <Sparkles size={14} />
                  CLAIM YOUR TRIAL PASS
                </span>
                <span className="twin-hud-badge">1-DAY COMPLIMENTARY</span>
              </div>

              <div className="twin-card-content">
                <span className="twin-kicker">EXPERIENCE ADAM FIRSTHAND</span>
                <h3 className="twin-card-title">
                  DISCIPLINE TODAY. <br />
                  <span className="text-lime">A STRONGER TOMORROW.</span>
                </h3>
                <p className="twin-card-desc">
                  Experience the atmosphere, meet the coaching team, and test our Olympic platforms firsthand with a complimentary 1-day athlete pass.
                </p>

                <div className="twin-chips">
                  <span className="twin-chip">100% Complimentary</span>
                  <span className="twin-chip">Full Platform Access</span>
                  <span className="twin-chip">Zero Obligation</span>
                </div>

                <div className="twin-btn-row">
                  <button
                    type="button"
                    className="btn btn-primary twin-btn"
                    onClick={onOpenConsultation}
                  >
                    <span>CLAIM COMPLIMENTARY PASS</span>
                    <ArrowRight size={16} />
                  </button>

                  <Link to="/contact" className="btn btn-secondary twin-btn-secondary">
                    <span>HOURS & LOCATION</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         11 LOCATION & SCHEDULE PREVIEW
      =================================================== */}
      <section className="section location-section">
        <div className="container">
          <div className="location-cards-grid">
            <div className="adam-card location-card">
              <div className="location-icon-box">
                <Clock size={32} />
              </div>
              <h4 className="location-card-title">Facility Hours</h4>
              <p className="location-card-text">
                <strong>Monday – Friday:</strong> 5:30 AM – 10:30 PM<br />
                <strong>Saturday – Sunday:</strong> 6:00 AM – 9:00 PM<br />
                <span className="location-vip-note">24/7 Keycard Access for VIP Tiers</span>
              </p>
            </div>

            <div className="adam-card location-card">
              <div className="location-icon-box">
                <MapPin size={32} />
              </div>
              <h4 className="location-card-title">Location</h4>
              <p className="location-card-text">
                840 Olympic Parkway<br />
                Performance District, NY 10001<br />
                <span className="location-sub-note">Validated underground athlete parking</span>
              </p>
            </div>

            <div className="adam-card location-card">
              <div className="location-icon-box">
                <Phone size={32} />
              </div>
              <h4 className="location-card-title">Direct Line & Chat</h4>
              <p className="location-card-text">
                Phone: +1 (800) 555-ADAM<br />
                WhatsApp: Direct Member Concierge<br />
                <a href="tel:+18005552326" className="location-call-link">
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
