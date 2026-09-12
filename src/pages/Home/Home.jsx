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

// 3 Dynamic Male Workout Background Slides (Static Module Constant)
const heroSlides = [
  {
    id: 1,
    image: heroMan1,
    tag: 'BARBELL POWER',
    sub: 'HEAVY BARBELL DEADLIFT',
    hudStatus: 'HIGH ENERGY • STRENGTH',
    hr: '172',
    metric: 'CALORIES BURNED: 580',
    efficiency: '99%'
  },
  {
    id: 2,
    image: heroMan2,
    tag: 'BATTLE ROPES',
    sub: 'FULL-BODY CARDIO INTERVALS',
    hudStatus: 'CARDIO ZONE • HIGH ENERGY',
    hr: '184',
    metric: 'ACTIVE STAMINA BURN',
    efficiency: '98%'
  },
  {
    id: 3,
    image: heroMan3,
    tag: 'DUMBBELL WORK',
    sub: 'MUSCLE DEFINITION & ROWS',
    hudStatus: 'STEADY REPS • GOOD FORM',
    hr: '158',
    metric: 'STRENGTH & TONING',
    efficiency: '98%'
  }
]

// Static Program Details Data
const programsData = {
  strength: {
    title: 'Strength & Powerlifting',
    category: 'Build Strength & Muscle',
    desc: 'Build real, lasting muscle and lift with confidence. Master the big lifts like squats, bench presses, and deadlifts with proper form and expert guidance.',
    image: strengthTraining,
    features: [
      'Top-Quality Barbells & Squat Racks',
      'Step-by-Step Strength Programs',
      'Hands-on Form Checks & Technique Tips',
      'Smart Rest & Recovery Advice'
    ]
  },
  personal: {
    title: '1-on-1 Personal Coaching',
    category: 'Private Training',
    desc: 'Work directly with a dedicated personal trainer who designs a workout and meal plan just for you. Get 100% focused attention every single session.',
    image: personalTraining,
    features: [
      'Custom Workout Plan for Your Goals',
      'Simple, Easy-to-Follow Nutrition Guide',
      'Hands-on Form Guidance Every Session',
      'Weekly Check-ins to Track Your Progress'
    ]
  },
  functional: {
    title: 'Functional Fitness & Conditioning',
    category: 'Energy & Full-Body Stamina',
    desc: 'Fun, fast-paced workouts using kettlebells, turf sleds, and battle ropes. Burn calories, build stamina, and leave every class feeling energized.',
    image: functionalTraining,
    features: [
      'Full-Body Cardio & Core Circuits',
      'Fun Battle Ropes & Sled Pushes',
      'Boost Everyday Energy & Stamina',
      'Great for All Fitness Levels'
    ]
  },
  performance: {
    title: 'Athletic Speed & Agility Lab',
    category: 'Speed, Power & Movement',
    desc: 'Train like an athlete. Run faster, jump higher, and improve quickness while keeping your knees and joints healthy and pain-free.',
    image: performanceTraining,
    features: [
      'Fun Sled Pushes & Sprint Drills',
      'Jump Training & Quick Footwork',
      'Joint Care to Help Prevent Injuries',
      'Better Balance, Coordination & Speed'
    ]
  },
  conditioning: {
    title: 'Cardio Engine Conditioning',
    category: 'Heart Health & Fat Burn',
    desc: 'High-energy, low-impact cardio on rowers, air bikes, and curved treadmills. Improve your heart health, burn fat, and build great daily stamina.',
    image: conditioningTraining,
    features: [
      'Rowing, Biking & Running Intervals',
      'Cardio That Is Gentle on Your Joints',
      'Heart-Rate Guided Pacing',
      'Build Long-Lasting Daily Energy'
    ]
  }
}

export default function Home({ onOpenConsultation }) {
  // Active program tab state
  const [activeTab, setActiveTab] = useState('strength')

  // Animated counters trigger directly via hook
  const [statsRef, statsInView] = useInView({ threshold: 0.25, triggerOnce: true })

  const [activeSlide, setActiveSlide] = useState(0)

  // Auto-cycle the 3 background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'low'}
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
                <span>WORKOUT TRACKING</span>
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
                  <div className="hud-stat-lbl">Workout Heart Rate</div>
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
              A modern, welcoming gym built to help you get stronger, move better, and build real fitness that lasts.
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
                    Trusted by <Counter end={450} duration={1400} start={true} />+ Happy Members
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
                <span className="hero-spec-lbl">Sq Ft Open Gym Space</span>
              </div>

              <div className="hero-spec-card">
                <div className="hero-spec-top">
                  <span className="hero-spec-val">
                    <Counter end={100} duration={1400} start={true} suffix="%" />
                  </span>
                  <span className="hero-spec-icon-wrap"><Shield size={15} /></span>
                </div>
                <span className="hero-spec-lbl">Expert Coached</span>
              </div>

              <div className="hero-spec-card highlight-card">
                <div className="hero-spec-top">
                  <span className="hero-spec-val text-lime">TOP GEAR</span>
                  <span className="hero-spec-icon-wrap lime-icon"><Flame size={15} /></span>
                </div>
                <span className="hero-spec-lbl">Quality Weights & Racks</span>
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
                    No confusing fitness fads. No boring routines. At ADAM Fitness, we give you clear workouts that work, expert guidance every step of the way, and a friendly community that keeps you motivated.
                  </p>
                </div>

                {/* 3 Ethos Micro-Chips */}
                <div className="statement-pillars-chips">
                  <div className="pillar-chip">
                    <span className="chip-icon-box"><Target size={15} /></span>
                    <span className="chip-text">Proper Form First</span>
                  </div>
                  <div className="pillar-chip">
                    <span className="chip-icon-box"><Dumbbell size={15} /></span>
                    <span className="chip-text">Steady Daily Progress</span>
                  </div>
                  <div className="pillar-chip">
                    <span className="chip-icon-box"><Shield size={15} /></span>
                    <span className="chip-text">Friendly Coach Support</span>
                  </div>
                </div>
              </div>

              {/* Right Column: VIP Invitation Action Card */}
              <div className="statement-right">
                <div className="statement-vip-card">
                  <div className="vip-card-badge">
                    <span className="vip-sparkle">✦</span>
                    <span>FREE VISITOR PASS</span>
                  </div>

                  <div className="vip-card-body">
                    <h3 className="vip-card-title">EXPERIENCE ADAM FITNESS IN PERSON</h3>
                    <p className="vip-card-text">
                      Take a personalized walk-through with our head coach and check out our 15,000 sq ft workout space.
                    </p>

                    <div className="vip-perks-list">
                      <div className="vip-perk-item">
                        <span className="vip-perk-dot"></span>
                        <span>Free movement and fitness checkup</span>
                      </div>
                      <div className="vip-perk-item">
                        <span className="vip-perk-dot"></span>
                        <span>Full access to our premium weights and machines</span>
                      </div>
                      <div className="vip-perk-item">
                        <span className="vip-perk-dot"></span>
                        <span>Friendly, no-pressure chat about your goals</span>
                      </div>
                    </div>
                  </div>

                  <div className="vip-card-action">
                    <button
                      type="button"
                      className="btn btn-primary vip-btn-glow"
                      onClick={onOpenConsultation}
                    >
                      <span>BOOK A FREE GYM TOUR</span>
                      <ArrowRight size={17} />
                    </button>
                    <span className="vip-guarantee-note">⚡ Limited daily slots so everyone gets personal attention</span>
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
            badge="OUR CORE PRINCIPLES"
            title="THE 3 PILLARS OF"
            titleHighlight="YOUR SUCCESS"
            subtitle="Three simple rules built into every workout to keep you safe, motivated, and seeing real results."
          />

          <div className="philosophy-grid">
            {/* Card 01: Good Form First */}
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
                  <span>SAFE & PROPER FORM</span>
                </div>
                <h3 className="philosophy-title">Good Form First</h3>
                <p className="philosophy-text">
                  We teach you safe lifting technique before adding heavier weights. Protect your joints, prevent injury, and feel confident in every move.
                </p>
              </div>

              <div className="philosophy-card-footer">
                <div className="pillar-tech-specs">
                  <span className="tech-chip">Safe Movement</span>
                  <span className="tech-chip">Joint Care</span>
                </div>
                <div className="pillar-progress-wrapper">
                  <div className="progress-info">
                    <span className="progress-label">SAFETY CHECK</span>
                    <span className="progress-val">100%</span>
                  </div>
                  <div className="pillar-progress-track">
                    <div className="pillar-progress-bar bar-fill-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02: Steady Daily Progress */}
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
                  <span>STEP-BY-STEP GAINS</span>
                </div>
                <h3 className="philosophy-title">Steady Daily Progress</h3>
                <p className="philosophy-text">
                  Simple, structured training plans that increase gradually. You will see clear improvements in strength, stamina, and energy each week.
                </p>
              </div>

              <div className="philosophy-card-footer">
                <div className="pillar-tech-specs">
                  <span className="tech-chip">Clear Plan</span>
                  <span className="tech-chip">Weekly Progress</span>
                </div>
                <div className="pillar-progress-wrapper">
                  <div className="progress-info">
                    <span className="progress-label">STRENGTH GAIN</span>
                    <span className="progress-val">+32%</span>
                  </div>
                  <div className="pillar-progress-track">
                    <div className="pillar-progress-bar bar-fill-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: Welcoming Community */}
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
                  <span>NO EGOS, JUST TEAMWORK</span>
                </div>
                <h3 className="philosophy-title">A Welcoming Community</h3>
                <p className="philosophy-text">
                  No judgment and zero intimidation. You will train alongside friendly people who cheer you on and celebrate your milestones every day.
                </p>
              </div>

              <div className="philosophy-card-footer">
                <div className="pillar-tech-specs">
                  <span className="tech-chip">Friendly People</span>
                  <span className="tech-chip">Always Coached</span>
                </div>
                <div className="pillar-progress-wrapper">
                  <div className="progress-info">
                    <span className="progress-label">MEMBER HAPPINESS</span>
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
                  loading="lazy"
                  decoding="async"
                />
                <div className="program-media-overlay"></div>
                <div className="program-media-badge">
                  <span className="media-badge-dot"></span>
                  <span>COACH-GUIDED WORKOUTS</span>
                </div>
              </div>

              <div className="program-display-info">
                <div>
                  <div className="program-tag-row">
                    <span className="badge-lime">{activeProgram.category}</span>
                    <span className="badge-dark-pill">GUIDED WORKOUTS</span>
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
                    <span>START THIS PROGRAM</span>
                    <ArrowRight size={16} />
                  </button>

                  <Link to="/programs" className="btn btn-secondary program-curriculum-btn">
                    <span>EXPLORE ALL PROGRAMS</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         05 PERFORMANCE STATS — Real Member Benchmarks
      =================================================== */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          {/* Telemetry Section Header Strip */}
          <div className="stats-header-bar">
            <div className="stats-badge">
              <span className="stats-pulse-dot" />
              <span>OUR RESULTS & TRACK RECORD</span>
            </div>
            <div className="stats-caption">
              REAL NUMBERS • REAL MEMBER RESULTS
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
                <span className="stat-tag">CUSTOM PLAN</span>
              </div>
              <div className="stat-number-row">
                <span className="stat-num-val">
                  <Counter end={100} duration={1500} start={statsInView} />
                </span>
                <span className="stat-suffix">%</span>
              </div>
              <h3 className="stat-label">Personalized Workouts</h3>
              <p className="stat-detail">A plan designed specifically for your goals, body, and schedule — not a one-size-fits-all workout.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '100%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">PERSONALIZED</span>
                  <span className="stat-meta-val">100% FOR YOU</span>
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
                <span className="stat-tag">SPACE</span>
              </div>
              <div className="stat-number-row">
                <span className="stat-num-val">
                  <Counter end={15000} duration={1800} start={statsInView} format={true} />
                </span>
                <span className="stat-suffix">+</span>
              </div>
              <h3 className="stat-label">Sq Ft Open Gym Space</h3>
              <p className="stat-detail">Plenty of open floor space, squat racks, dumbbells, and clean rubber turf.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '100%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">FLOOR PLAN</span>
                  <span className="stat-meta-val">ROOM FOR EVERYONE</span>
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
                <span className="stat-tag">TRAINERS</span>
              </div>
              <div className="stat-number-row">
                <span className="stat-num-val">
                  <Counter end={12} duration={1600} start={statsInView} />
                </span>
                <span className="stat-suffix">+</span>
              </div>
              <h3 className="stat-label">Certified Trainers</h3>
              <p className="stat-detail">Friendly coaches who guide your form, keep you motivated, and answer any questions.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '100%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">OUR TEAM</span>
                  <span className="stat-meta-val">EXPERT & HELPFUL</span>
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
              <h3 className="stat-label">Reach Their Fitness Goals</h3>
              <p className="stat-detail">Members who stick with our plan report feeling stronger, healthier, and more energized.</p>
              <div className="stat-card-footer">
                <div className="stat-progress-track">
                  <div
                    className="stat-progress-fill"
                    style={{ width: statsInView ? '98%' : '0%' }}
                  />
                </div>
                <div className="stat-footer-meta">
                  <span className="stat-meta-label">RESULTS</span>
                  <span className="stat-meta-val">HAPPY MEMBERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
         06 FACILITY EXPERIENCE — Clean & Modern Equipment
      =================================================== */}
      <section className="section facility-section">
        <div className="container">
          <div className="facility-header-row">
            <SectionHeader
              badge="INSIDE OUR GYM"
              title="EVERYTHING YOU NEED TO"
              titleHighlight="GET IN GREAT SHAPE"
              subtitle="15,000 square feet of modern gym equipment, clean rubber floors, and a bright, motivating environment."
            />
            <div className="facility-header-cta">
              <button
                className="btn btn-outline facility-tour-btn"
                onClick={onOpenConsultation}
              >
                <Sparkles size={16} />
                <span>BOOK A FREE GYM TOUR</span>
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
                  ZONE 01 • SQUAT RACKS & WEIGHTS
                </span>
                <span className="facility-spec-pill">PRO GRADE</span>
              </div>
              <img
                src={facilityInterior}
                alt="ADAM Facility Interior"
                className="facility-img"
                loading="lazy"
                decoding="async"
              />
              <div className="facility-img-overlay" />
              <div className="facility-caption">
                <span className="facility-category">STRENGTH & SQUAT RACKS</span>
                <h3 className="facility-title">Main Strength Area</h3>
                <p className="facility-desc">
                  Plenty of heavy-duty squat racks, smooth Olympic barbells, and durable rubber bumper plates so you never have to wait.
                </p>
                <div className="facility-chips">
                  <span className="facility-chip">Squat Racks & Benches</span>
                  <span className="facility-chip">Barbells & Bumper Plates</span>
                  <span className="facility-chip">Turf Track</span>
                </div>
                <div className="facility-action-hint">
                  <span>CHECK EQUIPMENT</span>
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
                <span className="facility-spec-pill">5 LB - 120 LB</span>
              </div>
              <img
                src={facilityEquipment}
                alt="High-Quality Dumbbells & Weights"
                className="facility-img"
                loading="lazy"
                decoding="async"
              />
              <div className="facility-img-overlay" />
              <div className="facility-caption">
                <span className="facility-category">FREE WEIGHTS</span>
                <h3 className="facility-title">Full Dumbbell & Kettlebell Rack</h3>
                <p className="facility-desc">
                  A complete range of rubber dumbbells and kettlebells, perfect for all fitness levels from beginner to advanced.
                </p>
                <div className="facility-chips">
                  <span className="facility-chip">Full Dumbbell Range</span>
                  <span className="facility-chip">Comfortable Grip</span>
                  <span className="facility-chip">Adjustable Benches</span>
                </div>
                <div className="facility-action-hint">
                  <span>VIEW WEIGHTS</span>
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
                <h4 className="amenity-title">Shock-Absorbing Rubber Floors</h4>
                <p className="amenity-desc">Thick rubber gym flooring protects your joints and keeps weight drops quiet and safe.</p>
              </div>
            </div>

            <div className="facility-amenity-card">
              <div className="amenity-icon-box">
                <Activity size={20} />
              </div>
              <div className="amenity-content">
                <h4 className="amenity-title">Fresh, Clean Air System</h4>
                <p className="amenity-desc">Modern ventilation circulates fresh outside air continuously so the gym stays cool and easy to breathe in.</p>
              </div>
            </div>

            <div className="facility-amenity-card">
              <div className="amenity-icon-box">
                <Zap size={20} />
              </div>
              <div className="amenity-content">
                <h4 className="amenity-title">Bright, Energizing Lighting</h4>
                <p className="amenity-desc">Clean, modern lighting designed to keep you focused and energized throughout your entire workout.</p>
              </div>
            </div>

            <div className="facility-amenity-card">
              <div className="amenity-icon-box">
                <Target size={20} />
              </div>
              <div className="amenity-content">
                <h4 className="amenity-title">No Crowds, No Waiting</h4>
                <p className="amenity-desc">We manage gym traffic carefully so you always have easy access to weights and equipment.</p>
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
            badge="OUR HEAD TRAINER"
            title="MEET OUR HEAD OF"
            titleHighlight="FITNESS & COACHING"
            subtitle="Our friendly coaches are certified professionals dedicated to helping you lift safely and reach your fitness goals."
          />

          <div className="coach-showcase-grid">
            <div className="coach-portrait-wrap">
              <img
                src={headCoach}
                alt="Head Trainer Marcus Vaughn"
                className="coach-portrait-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="coach-info-pane">
              <span className="badge-lime">HEAD COACH & TRAINER</span>
              <h3 className="coach-name">MARCUS VAUGHN</h3>
              <div className="coach-role">14+ YEARS HELPING PEOPLE GET STRONG</div>

              <p className="coach-bio">
                "At ADAM, we believe everyone deserves great coaching. Whether you are lifting weights for the first time or training for your best shape yet, we focus on safe form, steady progress, and making sure your workouts are fun, motivating, and effective."
              </p>

              <div className="coach-credentials">
                <div className="cred-item">
                  <span className="cred-val">CSCS</span>
                  <span className="cred-lbl">Certified Trainer</span>
                </div>
                <div className="cred-item">
                  <span className="cred-val">Level 2</span>
                  <span className="cred-lbl">Lifting Specialist</span>
                </div>
                <div className="cred-item">
                  <span className="cred-val">500+</span>
                  <span className="cred-lbl">People Helped</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenConsultation}
              >
                <span>BOOK A FREE COACH CHAT</span>
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
                alt="ADAM Community Training"
                className="twin-card-bg-img"
                loading="lazy"
                decoding="async"
              />
              <div className="twin-card-overlay" />

              <div className="twin-card-top">
                <span className="badge-lime">
                  <span className="badge-dot" />
                  TRAIN • GET FIT • BELONG
                </span>
                <span className="twin-hud-badge">FRIENDLY VIBE</span>
              </div>

              <div className="twin-card-content">
                <span className="twin-kicker">A WELCOMING GYM CULTURE</span>
                <h3 className="twin-card-title">A FRIENDLY GYM WHERE EVERYONE SUPPORTS YOU</h3>
                <p className="twin-card-desc">
                  No egos, no intimidation. When you step into ADAM FITNESS CENTRE, you will find friendly coaches and everyday members who cheer on your progress.
                </p>

                <div className="twin-chips">
                  <span className="twin-chip">Zero Judgment</span>
                  <span className="twin-chip">Helpful Members</span>
                  <span className="twin-chip">Encouraging Coaches</span>
                </div>

                <div className="twin-btn-row">
                  <Link to="/about" className="btn btn-secondary twin-btn">
                    <span>OUR STORY & COMMUNITY</span>
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
                alt="Try ADAM Fitness Free"
                className="twin-card-bg-img"
                loading="lazy"
                decoding="async"
              />
              <div className="twin-card-overlay" />

              <div className="twin-card-top">
                <span className="badge-lime">
                  <Sparkles size={14} />
                  FREE 1-DAY GYM PASS
                </span>
                <span className="twin-hud-badge">100% FREE PASS</span>
              </div>

              <div className="twin-card-content">
                <span className="twin-kicker">TRY ADAM FITNESS FOR FREE</span>
                <h3 className="twin-card-title">
                  START TODAY. <br />
                  <span className="text-lime">FEEL STRONGER TOMORROW.</span>
                </h3>
                <p className="twin-card-desc">
                  Come visit us, meet our friendly trainers, and try out our equipment for a full day with zero pressure to join.
                </p>

                <div className="twin-chips">
                  <span className="twin-chip">100% Free Pass</span>
                  <span className="twin-chip">Full Gym Access</span>
                  <span className="twin-chip">No Pressure to Join</span>
                </div>

                <div className="twin-btn-row">
                  <button
                    type="button"
                    className="btn btn-primary twin-btn"
                    onClick={onOpenConsultation}
                  >
                    <span>CLAIM YOUR FREE PASS</span>
                    <ArrowRight size={16} />
                  </button>

                  <Link to="/contact" className="btn btn-secondary twin-btn-secondary">
                    <span>HOURS & DIRECTIONS</span>
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
              <h4 className="location-card-title">Gym Hours</h4>
              <p className="location-card-text">
                <strong>Monday – Friday:</strong> 5:30 AM – 10:30 PM<br />
                <strong>Saturday – Sunday:</strong> 6:00 AM – 9:00 PM<br />
                <span className="location-vip-note">24/7 Keycard Access for VIP Members</span>
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
                <span className="location-sub-note">Free member parking available</span>
              </p>
            </div>

            <div className="adam-card location-card">
              <div className="location-icon-box">
                <Phone size={32} />
              </div>
              <h4 className="location-card-title">Call or Message Us</h4>
              <p className="location-card-text">
                Phone: +1 (800) 555-ADAM<br />
                WhatsApp: Quick Questions & Support<br />
                <a href="tel:+18005552326" className="location-call-link">
                  Call Us Today &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
