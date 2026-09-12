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

const programs = [
  {
    id: 'strength',
    category: 'strength',
    title: 'Barbell Strength & Lifting',
    badge: 'BUILD STRENGTH',
    image: strengthTraining,
    desc: 'Learn the core barbell lifts (Squat, Bench Press, Deadlift, Overhead Press) with safe form, coach feedback, and steady progress.',
    intensity: 'Moderate to High',
    duration: '60–75 Min',
    target: 'Build Real Strength & Muscle',
    coaching: 'Hands-on form checks every set'
  },
  {
    id: 'personal',
    category: 'coaching',
    title: '1-on-1 Personal Training',
    badge: 'PRIVATE COACHING',
    image: personalTraining,
    desc: 'Work directly with a dedicated coach who creates a workout and meal plan tailored completely to your schedule, body, and fitness goals.',
    intensity: 'Tailored to you',
    duration: '60 Min',
    target: 'Reach your specific goals faster',
    coaching: 'Dedicated 1-on-1 coach'
  },
  {
    id: 'functional',
    category: 'functional',
    title: 'Functional Fitness & Circuits',
    badge: 'FULL-BODY WORKOUT',
    image: functionalTraining,
    desc: 'Energizing group circuit workouts using kettlebells, medicine balls, battle ropes, and sleds to boost stamina and burn calories.',
    intensity: 'High Energy / Cardio',
    duration: '50 Min',
    target: 'Stamina, Core Strength & Energy',
    coaching: 'Fun group coach guidance'
  },
  {
    id: 'performance',
    category: 'performance',
    title: 'Speed & Agility Training',
    badge: 'ATHLETIC SKILLS',
    image: performanceTraining,
    desc: 'Built for sports enthusiasts and runners who want quicker footwork, faster sprint speed, and better athletic coordination.',
    intensity: 'Fast & Active',
    duration: '60 Min',
    target: 'Speed, Balance & Agility',
    coaching: 'Step-by-step coach cues'
  },
  {
    id: 'conditioning',
    category: 'functional',
    title: 'Cardio & Stamina Engine',
    badge: 'STAMINA & FAT BURN',
    image: conditioningTraining,
    desc: 'Interval workouts on rowing machines, exercise bikes, and treadmills designed to build endurance and burn fat without losing muscle.',
    intensity: 'Challenging Intervals',
    duration: '45 Min',
    target: 'Heart Health & Fat Burn',
    coaching: 'Paced intervals with coach guidance'
  },
  {
    id: 'hypertrophy',
    category: 'strength',
    title: 'Muscle Building & Toning',
    badge: 'BODY TONING',
    image: facilityEquipment,
    desc: 'Targeted dumbbell and cable machine exercises designed to build full-body muscle shape, tone your physique, and improve posture.',
    intensity: 'Moderate',
    duration: '60 Min',
    target: 'Full-Body Muscle Shape & Definition',
    coaching: 'Focus on good muscle feel and form'
  }
]

const faqs = [
  {
    q: 'What if I have past injuries or joint issues?',
    a: 'Before your first workout, your coach discusses any past injuries, tight joints, or aches with you. We modify or swap any exercise so you train safely and comfortably without pain.'
  },
  {
    q: 'What do I get with the free 1-day pass?',
    a: 'Your free pass gives you full access to our gym for the day, a friendly 30-minute chat with a coach about your goals, and access to all gym equipment and workout turf.'
  },
  {
    q: 'Do you help with meal planning and nutrition?',
    a: 'Yes! Our personal training and coaching plans include simple, practical advice on daily meals, healthy eating habits, and how to fuel your body for energy.'
  },
  {
    q: 'Are these programs suitable for total beginners?',
    a: 'Yes, absolutely! Over 40% of our members were complete beginners when they first joined. Our friendly coaches guide you step-by-step from your very first session.'
  }
]

export default function Programs({ onOpenConsultation }) {
  const [filter, setFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState(0)

  const filteredPrograms = filter === 'all' 
    ? programs 
    : programs.filter(p => p.category === filter)

  return (
    <div className="programs-page">
      {/* Hero */}
      <section className="programs-hero">
        <div className="container">
          <span className="badge-lime">
            <span className="badge-dot"></span>
            OUR WORKOUT PROGRAMS
          </span>

          <h1 className="programs-hero-title">
            CHOOSE THE RIGHT WORKOUT <br className="hero-desktop-br" />
            <span className="text-lime">FOR YOUR GOALS.</span>
          </h1>

          <p className="programs-hero-lead">
            Every program at ADAM FITNESS CENTRE is built to help you get results safely, stay consistent, and feel stronger every week.
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
              Strength & Lifting
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'coaching' ? 'active' : ''}`}
              onClick={() => setFilter('coaching')}
            >
              1-on-1 Training
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'functional' ? 'active' : ''}`}
              onClick={() => setFilter('functional')}
            >
              Cardio & Circuits
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${filter === 'performance' ? 'active' : ''}`}
              onClick={() => setFilter('performance')}
            >
              Athletic Skills
            </button>
          </div>

          {/* Cards */}
          <div className="catalog-grid">
            {filteredPrograms.map((prog) => (
              <div key={prog.id} className="catalog-card">
                <div className="catalog-card-media">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="catalog-card-img"
                    loading="lazy"
                    decoding="async"
                  />
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
                        <span className="catalog-spec-name">Workout Time</span>
                        <span className="catalog-spec-val">{prog.duration}</span>
                      </div>
                      <div className="catalog-spec-item">
                        <span className="catalog-spec-name">Main Goal</span>
                        <span className="catalog-spec-val">{prog.target}</span>
                      </div>
                      <div className="catalog-spec-item">
                        <span className="catalog-spec-name">Coaching Style</span>
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
                    <span>JOIN THIS PROGRAM</span>
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
            badge="MEMBERSHIP PLANS"
            title="COMPARE OUR"
            titleHighlight="GYM PLANS"
            subtitle="Simple, transparent membership options with zero hidden fees."
          />

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features Included</th>
                  <th>Open Gym Pass</th>
                  <th>Group Fitness Pass</th>
                  <th className="table-highlight-col">VIP 1-on-1 Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Squat Racks, Barbells & Dumbbells</td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td className="table-highlight-col"><Check size={18} className="text-lime" /></td>
                </tr>
                <tr>
                  <td>Cardio Bikes, Sleds & Turf Access</td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td><Check size={18} className="text-lime" /></td>
                  <td className="table-highlight-col"><Check size={18} className="text-lime" /></td>
                </tr>
                <tr>
                  <td>Group Cardio & Fitness Classes</td>
                  <td>—</td>
                  <td>Unlimited</td>
                  <td className="table-highlight-col">Unlimited</td>
                </tr>
                <tr>
                  <td>Dedicated 1-on-1 Personal Trainer</td>
                  <td>—</td>
                  <td>—</td>
                  <td className="table-highlight-col">Weekly 1-on-1 Sessions</td>
                </tr>
                <tr>
                  <td>Personal Meal & Nutrition Advice</td>
                  <td>—</td>
                  <td>Standard</td>
                  <td className="table-highlight-col">Fully Tailored & Monitored</td>
                </tr>
                <tr>
                  <td>24/7 Keycard Gym Access</td>
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
            subtitle="Simple answers to common questions about our gym, training, and passes."
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
