import React, { useState, useEffect, useRef } from 'react'
import { ArrowUp } from '../Icons'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const circleRef = useRef(null)
  const isScrollingRef = useRef(false)
  const idleTimeoutRef = useRef(null)

  // Standard geometry in SVG viewBox (0 0 48 48)
  const RADIUS = 20
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS // 125.6637

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY =
            window.pageYOffset ||
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0

          const scrollHeight =
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight
            ) - window.innerHeight

          // Reveal button after scrolling past 280px (Only triggers state on threshold crossings)
          if (currentScrollY > 280) {
            setIsVisible(prev => (prev ? prev : true))
            setIsIdle(false)

            // Reset idle timer (dim slightly after 3.5s of stationary reading so it doesn't block text)
            if (idleTimeoutRef.current) {
              clearTimeout(idleTimeoutRef.current)
            }
            idleTimeoutRef.current = setTimeout(() => {
              setIsIdle(true)
            }, 3500)
          } else {
            setIsVisible(prev => (!prev ? prev : false))
            setIsIdle(false)
            if (idleTimeoutRef.current) {
              clearTimeout(idleTimeoutRef.current)
            }
          }

          // Zero-rerender direct DOM stroke update for pure 60FPS/120FPS performance
          if (scrollHeight > 0 && circleRef.current) {
            const progress = Math.min(100, Math.max(0, (currentScrollY / scrollHeight) * 100))
            const offset = CIRCUMFERENCE - (CIRCUMFERENCE * progress) / 100
            circleRef.current.style.strokeDashoffset = `${offset}`
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current)
      }
    }
  }, [CIRCUMFERENCE])

  const scrollToTop = (e) => {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault()
      if (typeof e.stopPropagation === 'function') e.stopPropagation()
    }

    setIsIdle(false)

    // If Lenis is active on laptop/desktop, utilize its smooth momentum scroll
    if (window.__lenis) {
      try {
        window.__lenis.scrollTo(0, { duration: 1.0 })
        return
      } catch {
        // Fallback below
      }
    }

    if (isScrollingRef.current) return
    isScrollingRef.current = true

    const startY =
      window.pageYOffset ||
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (startY <= 0) {
      isScrollingRef.current = false
      return
    }

    // Try native smooth scrolling first
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      if (document.documentElement) {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    } catch {
      // ignore
    }

    // Smooth scroll animation with requestAnimationFrame as guaranteed fallback across mobile
    const duration = 400
    const startTime = performance.now()

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const nextY = Math.round(startY * (1 - ease))

      window.scrollTo(0, nextY)
      if (document.documentElement) document.documentElement.scrollTop = nextY
      if (document.body) document.body.scrollTop = nextY

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll)
      } else {
        window.scrollTo(0, 0)
        if (document.documentElement) document.documentElement.scrollTop = 0
        if (document.body) document.body.scrollTop = 0
        isScrollingRef.current = false
      }
    }

    window.requestAnimationFrame(animateScroll)
  }

  return (
    <button
      type="button"
      className={`floating-scroll-top-btn ${isVisible ? 'visible' : ''} ${isIdle ? 'idle' : ''}`}
      onClick={scrollToTop}
      onTouchEnd={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Scroll to top"
    >
      {/* Dynamic Circular Progress Ring with unified SVG coordinates */}
      <svg
        className="scroll-progress-ring"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          className="progress-ring-bg"
          cx="24"
          cy="24"
          r={RADIUS}
        />
        <circle
          ref={circleRef}
          className="progress-ring-fill"
          cx="24"
          cy="24"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: CIRCUMFERENCE }}
        />
      </svg>

      <span className="scroll-icon-wrap">
        <ArrowUp size={18} />
      </span>
    </button>
  )
}
