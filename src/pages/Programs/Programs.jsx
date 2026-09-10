import React, { useState } from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {
  Dumbbell,
  Target,
  Flame,
  Zap,
  Activity,
  Check,
  ChevronDown,
  ArrowRight
} from '../../components/Icons'
import {
  strengthTraining,
  personalTraining,
  functionalTraining,
  performanceTraining,
  conditioningTraining,
  facilityEquipment
} from '../../assets/images'
import './Programs.css'

export default function Programs({ onOpenConsultation }) {
  const [filter, setFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState(0)

  const programs = [
    {
      id: 'strength',
      category: 'strength',
      title: 'Strength & Powerlifting',
      badge: 'STRENGTH FOCUS',
      image: strengthTraining,
      desc: 'Master the core barbell movements (Squat, Bench Press, Deadlift, Overhead Press) through disciplined periodized cycles and motor recruitment.',
      intensity: 'High / Load-Based',
      duration: '60–75 Min',
      target: '1RM Increase, Dense Muscle Hypertrophy',
      coaching: 'Biomechanical bar-path analysis'
    },
    {
      id: 'personal',
      category: 'coaching',
      title: '1-on-1 Elite Private Coaching',
      badge: 'EXCLUSIVE PROTOCOL',
      image: personalTraining,
      desc: 'The gold standard in tailored physical transformation. Direct one-on-one coaching with our Senior Performance Directors with custom nutrition roadmaps.',
      intensity: '100% Individualized',
      duration: '60 Min',
      target: 'Specific Body Recomp & Performance',
      coaching: 'Dedicated Master Coach'
    },
    {
      id: 'functional',
      category: 'functional',
      title: 'Functional Conditioning',
      badge: 'DYNAMIC ATHLETICISM',
      image: functionalTraining,
      desc: 'Relentless work capacity circuits utilizing kettlebells, heavy slam balls, battle ropes, and sled runs to forge an unbreakable athletic engine.',
      intensity: 'Max Heart Rate / Circuits',
      duration: '50 Min',
      target: 'VO2 Max, Agility, Core Rigidity',
      coaching: 'High-energy squad guidance'
    },
    {
      id: 'performance',
      category: 'performance',
      title: 'Athletic Speed & Agility Lab',
      badge: 'SPORTS SPEED',
      image: performanceTraining,
      desc: 'Engineered for competitive sprinters, field athletes, and fighters needing explosive ground-force production, deceleration mechanics, and sprint power.',
      intensity: 'Explosive Plyometric',
      duration: '60 Min',
      target: 'Acceleration & Elastic Force',
      coaching: 'Force plate & velocity data'
    },
    {
      id: 'conditioning',
      category: 'functional',
      title: 'Cardio Engine Conditioning',
      badge: 'THRESHOLD ADAPTATION',
      image: conditioningTraining,
      desc: 'Lactate threshold intervals on air bikes, Concept2 rowers, and curved treadmills. Designed to burn fat while preserving lean muscle mass.',
      intensity: 'Zone 4 & 5 Intervals',
      duration: '45 Min',
      target: 'Metabolic Conditioning & Fat Burn',
      coaching: 'Heart-rate zone monitored'
    },
    {
      id: 'hypertrophy',
      category: 'strength',
      title: 'Hypertrophy & Physique Architecture',
      badge: 'MUSCLE SCULPTING',
      image: facilityEquipment,
      desc: 'Targeted muscular volume, mechanical tension, and metabolic stress protocols using elite selectorized equipment and precision dumbells.',
      intensity: 'Moderate-Heavy / High Volume',
      duration: '60 Min',
      target: 'Maximum Symmetrical Muscle Mass',
      coaching: 'Time-under-tension focus'
    }
  ]

  const filteredPrograms = filter === 'all' 
    ? programs 
    : programs.filter(p => p.category === filter)

  const faqs = [
    {
      q: 'How are workouts tailored if I have previous injuries or movement restrictions?',
      a: 'Before your first workout, your coach conducts a comprehensive movement audit (hip mobility, shoulder impingement, ankle flexion). Any exercise that poses risk is modified or replaced with biomechanically safer variations.'
    },
    {
      q: 'What is included in the complimentary 1-day pass?',
      a: 'Your complimentary pass includes full access to our main strength floor, a 30-minute movement screening with a Senior Coach, and access to all functional turf zones and recovery spaces.'
    },
    {
      q: 'Do you provide nutrition and dietary blueprints?',
      a: 'Yes. All 1-on-1 and specialty programs include calculated caloric and macronutrient guidance, hydration targets, and nutrient timing recommendations designed to fuel your training volume.'
    },
    {
      q: 'Can beginners enroll in Strength & Powerlifting?',
      a: 'Absolutely. Over 40% of our members started with zero barbell experience. Our coaching philosophy emphasizes safety, precise bar path, and gradual progressive overload from day one.'
    }
  ]

  return (
    <div className="programs-page">
      {/* Hero */}
      <section className="programs-hero">
        <div className="container">
          <span className="badge-lime">
            <span className="badge-dot"></span>
            CURATED TRAINING TRACKS
          </span>

          <h1 className="programs-hero-title">
            PRECISION <br />
            <span className="text-lime">TRAINING CATALOG.</span>
          </h1>

          <p className="programs-hero-lead">
            Every program at ADAM FITNESS CENTRE is designed with sports science periodization to maximize output, prevent plateaus, and construct elite physical resilience.
          </p>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          {/* Filters */}
          <div className="catalog-filters-row">
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Programs ({programs.length})
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'strength' ? 'active' : ''}`}
              onClick={() => setFilter('strength')}
            >
              Strength & Power
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'coaching' ? 'active' : ''}`}
              onClick={() => setFilter('coaching')}
            >
              1-on-1 Elite
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'functional' ? 'active' : ''}`}
              onClick={() => setFilter('functional')}
            >
              Functional & Cardio
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'performance' ? 'active' : ''}`}
              onClick={() => setFilter('performance')}
            >
              Sports Performance
            </button>
          </div>

          {/* Cards */}
          <div className="catalog-grid">
            {filteredPrograms.map((prog) => (
              <div key={prog.id} className="catalog-card">
                <div className="catalog-card-media">
                  <img src={prog.image} alt={prog.title} className="catalog-card-img" />
                  <div className="catalog-card-badge">
                    <span className="badge-lime">{prog.badge}</span>
                  </div>
                </div>

                <div className="catalog-card-body">
                  <div>
                    <h3 className="catalog-program-title">{prog.title}</h3>
                    <p className="catalog-program-desc">{prog.desc}</p>

                    <div className="catalog-specs-box">
                      <div className="catalog-spec-item">
                        <span className="catalog-spec-name">Intensity</span>
                        <span className="catalog-spec-val">{prog.intensity}</span>
                      </div>
                      <div className="catalog-spec-item">
                        <span className="catalog-spec-name">Session Time</span>
                        <span className="catalog-spec-val">{prog.duration}</span>
                      </div>
                      <div className="catalog-spec-item">
                        <span className="catalog-spec-name">Target Output</span>
                        <span className="catalog-spec-val">{prog.target}</span>
                      </div>
                      <div className="catalog-spec-item">
                        <span className="catalog-spec-name">Format</span>
                        <span className="catalog-spec-val">{prog.coaching}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onOpenConsultation}
                    style={{ width: '100%' }}
                  >
                    <span>APPLY FOR PROGRAM</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership / Tier Comparison */}
      <section className="comparison-section">
        <div className="container">
          <SectionHeader
            badge="MEMBERSHIP TIERS"
            title="COMPARE TRAINING"
            titleHighlight="ACCESS"
            subtitle="Clear, transparent membership options designed around your commitment level."
          />

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features & Amenities</th>
                  <th>Open Strength Pass</th>
                  <th>Functional Squad</th>
                  <th className="table-highlight-col">VIP 1-on-1 Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Olympic Platforms & Heavy Free Weights</td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td className="table-highlight-col"><Check size={18} className="text-lime" /></td>
                </tr>
                <tr>
                  <td>Assault Bikes, Sleds & Turf Access</td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td className="table-highlight-col"><Check size={18} className="text-lime" /></td>
                </tr>
                <tr>
                  <td>Group Functional Conditioning Classes</td>
                  <td>—</td>
                  <td>Unlimited</td>
                  <td className="table-highlight-col">Unlimited</td>
                </tr>
                <tr>
                  <td>Dedicated 1-on-1 Master Coach</td>
                  <td>—</td>
                  <td>—</td>
                  <td className="table-highlight-col">Weekly 1-on-1 Sessions</td>
                </tr>
                <tr>
                  <td>Custom Nutrition & Macro Blueprint</td>
                  <td>—</td>
                  <td>Standard</td>
                  <td className="table-highlight-col">Fully Tailored & Monitored</td>
                </tr>
                <tr>
                  <td>24/7 Keycard Facility Access</td>
                  <td>—</td>
                  <td>—</td>
                  <td className="table-highlight-col"><Check size={18} className="text-lime" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Program FAQs */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="QUESTIONS & ANSWERS"
            title="FREQUENTLY ASKED"
            titleHighlight="QUESTIONS"
            subtitle="Common inquiries about our coaching process, facility access, and enrollment."
            align="center"
          />

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-header-btn"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div className="faq-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
