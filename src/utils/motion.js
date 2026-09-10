import { useEffect, useState, useRef } from 'react'

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
 * Animated number counter that increments smoothly to target value
 */
export function useCounter(endValue, duration = 2000, startNow = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startNow) return

    let startTime = null
    const startNum = 0
    const endNum = parseInt(endValue, 10) || 0

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(startNum + easeProgress * (endNum - startNum)))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(endNum)
      }
    }

    const animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [endValue, duration, startNow])

  return count
}
