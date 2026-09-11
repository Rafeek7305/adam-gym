import React, { useState, useEffect } from 'react'
import { ArrowUp } from '../Icons'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      // Show button after scrolling past 300px
      if (currentScrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Calculate scroll progress percentage (0 - 100)
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / scrollHeight) * 100))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Circumference for r = 20 is 2 * PI * 20 = 125.66
  const strokeDashoffset = 125.66 - (125.66 * scrollProgress) / 100

  return (
    <button
      type="button"
      className={`floating-scroll-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Scroll to top"
    >
      {/* Dynamic Telemetry Circular Progress Ring */}
      <svg className="scroll-progress-ring" width="48" height="48" viewBox="0 0 48 48">
        <circle
          className="progress-ring-bg"
          cx="24"
          cy="24"
          r="20"
        />
        <circle
          className="progress-ring-fill"
          cx="24"
          cy="24"
          r="20"
          style={{ strokeDashoffset }}
        />
      </svg>

      <span className="scroll-icon-wrap">
        <ArrowUp size={18} />
      </span>
    </button>
  )
}
