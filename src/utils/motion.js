import React, { useEffect, useState, useRef } from 'react'

/**
 * Hook to detect when an element enters viewport
 */
export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options.triggerOnce) {
          observer.unobserve(element)
        }
      } else if (!options.triggerOnce) {
        setIsInView(false)
      }
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px 0px -50px 0px'
    })

    observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options.threshold, options.triggerOnce, options.rootMargin])

  return [ref, isInView]
}

/**
 * High-performance Animated Counter component
 * Renders ONLY itself so parent page does NOT re-render on every tick!
 */
export function Counter({ end, duration = 1600, start = true, suffix = '', format = false }) {
  const [count, setCount] = useState(start ? 0 : (parseInt(end, 10) || 0))

  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }

    let startTime = null
    const endNum = parseInt(end, 10) || 0
    let lastRender = 0

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(easeProgress * endNum)

      // Throttle re-renders to ~35ms (~28fps is completely smooth for counter numbers and eliminates 75% JS thread blocking)
      if (timestamp - lastRender > 35 || progress >= 1) {
        setCount(progress >= 1 ? endNum : current)
        lastRender = timestamp
      }

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [end, duration, start])

  return (format ? count.toLocaleString() : count) + (suffix || '')
}

/**
 * Animated number counter that increments smoothly to target value (optimized)
 */
export function useCounter(endValue, duration = 2000, startNow = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startNow) return

    let startTime = null
    const startNum = 0
    const endNum = parseInt(endValue, 10) || 0
    let lastRender = 0

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const nextVal = Math.floor(startNum + easeProgress * (endNum - startNum))

      if (timestamp - lastRender > 35 || progress >= 1) {
        setCount(progress >= 1 ? endNum : nextVal)
        lastRender = timestamp
      }

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [endValue, duration, startNow])

  return count
}

