/**
 * Pure 60FPS / 120FPS Smooth Momentum Scroller
 * Zero external dependencies.
 * - Provides silky-smooth physics-based momentum scrolling for desktop/laptop mouse wheels and trackpads.
 * - Preserves native GPU-accelerated touch physics on mobile devices.
 * - Fully compatible with window.__lenis API.
 */

export class SmoothScroller {
  constructor(options = {}) {
    this.options = {
      friction: options.friction || 0.09, // Damping factor (0.07 to 0.12 gives luxury momentum feel)
      wheelMultiplier: options.wheelMultiplier || 0.85,
      ...options
    }

    this.isDesktop = typeof window !== 'undefined' && !('ontouchstart' in window && !window.matchMedia('(hover: hover)').matches)
    this.currentY = typeof window !== 'undefined' ? window.scrollY || window.pageYOffset || 0 : 0
    this.targetY = this.currentY
    this.isScrolling = false
    this.animId = null

    this.onWheel = this.onWheel.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.tick = this.tick.bind(this)

    if (typeof window !== 'undefined') {
      this.init()
    }
  }

  init() {
    // Only intercept desktop/laptop mousewheel to prevent discrete 100px jumps
    if (this.isDesktop) {
      window.addEventListener('wheel', this.onWheel, { passive: false })
      window.addEventListener('keydown', this.onKeyDown, { passive: false })
    }
    // Track user manual/native scroll (e.g. scrollbar drag)
    window.addEventListener('scroll', this.onScroll, { passive: true })
  }

  getMaxScroll() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    ) - window.innerHeight
  }

  onWheel(e) {
    // Do not interfere if user is scrolling inside an element with [data-lenis-prevent] or horizontal scroll
    let target = e.target
    while (target && target !== document.body && target !== document.documentElement) {
      if (target.hasAttribute && target.hasAttribute('data-lenis-prevent')) return
      const overflowY = window.getComputedStyle(target).overflowY
      if ((overflowY === 'auto' || overflowY === 'scroll') && target.scrollHeight > target.clientHeight) {
        // Child scrollable container
        return
      }
      target = target.parentElement
    }

    e.preventDefault()

    const maxScroll = this.getMaxScroll()
    const delta = e.deltaY * this.options.wheelMultiplier

    // Re-anchor if current position diverged
    const actualScrollY = window.scrollY || window.pageYOffset || 0
    if (Math.abs(actualScrollY - this.currentY) > 80 && !this.isScrolling) {
      this.currentY = actualScrollY
      this.targetY = actualScrollY
    }

    this.targetY = Math.max(0, Math.min(this.targetY + delta, maxScroll))

    if (!this.isScrolling) {
      this.isScrolling = true
      this.animId = requestAnimationFrame(this.tick)
    }
  }

  onKeyDown(e) {
    const maxScroll = this.getMaxScroll()
    let delta = 0

    if (e.key === 'ArrowDown') delta = 60
    else if (e.key === 'ArrowUp') delta = -60
    else if (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) delta = window.innerHeight * 0.8
    else if (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) delta = -window.innerHeight * 0.8
    else if (e.key === 'Home') {
      this.scrollTo(0)
      e.preventDefault()
      return
    } else if (e.key === 'End') {
      this.scrollTo(maxScroll)
      e.preventDefault()
      return
    }

    if (delta !== 0) {
      // Don't intercept if focused in input or textarea
      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : ''
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return

      e.preventDefault()
      const actualScrollY = window.scrollY || window.pageYOffset || 0
      if (!this.isScrolling) {
        this.currentY = actualScrollY
        this.targetY = actualScrollY
      }
      this.targetY = Math.max(0, Math.min(this.targetY + delta, maxScroll))
      if (!this.isScrolling) {
        this.isScrolling = true
        this.animId = requestAnimationFrame(this.tick)
      }
    }
  }

  onScroll() {
    if (!this.isScrolling) {
      this.currentY = window.scrollY || window.pageYOffset || 0
      this.targetY = this.currentY
    }
  }

  tick() {
    const diff = this.targetY - this.currentY

    if (Math.abs(diff) < 0.6) {
      this.currentY = this.targetY
      window.scrollTo(0, this.currentY)
      this.isScrolling = false
      return
    }

    this.currentY += diff * this.options.friction
    window.scrollTo(0, this.currentY)

    this.animId = requestAnimationFrame(this.tick)
  }

  scrollTo(target, options = {}) {
    let destY = 0
    if (typeof target === 'number') {
      destY = target
    } else if (target && target.getBoundingClientRect) {
      const rect = target.getBoundingClientRect()
      destY = (window.scrollY || window.pageYOffset || 0) + rect.top + (options.offset || 0)
    }

    const maxScroll = this.getMaxScroll()
    this.targetY = Math.max(0, Math.min(destY, maxScroll))
    this.currentY = window.scrollY || window.pageYOffset || 0

    if (options.immediate) {
      this.currentY = this.targetY
      window.scrollTo(0, this.targetY)
      this.isScrolling = false
      if (this.animId) cancelAnimationFrame(this.animId)
      return
    }

    if (!this.isScrolling) {
      this.isScrolling = true
      this.animId = requestAnimationFrame(this.tick)
    }
  }

  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('wheel', this.onWheel)
      window.removeEventListener('keydown', this.onKeyDown)
      window.removeEventListener('scroll', this.onScroll)
      if (this.animId) {
        cancelAnimationFrame(this.animId)
      }
    }
  }
}

export default SmoothScroller
