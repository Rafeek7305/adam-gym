import React, { useState, useEffect } from 'react'
import { logoImg } from '../../assets/images'
import './Preloader.css'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Quick, smooth 1.2s load sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsDone(true)
            if (onComplete) onComplete()
          }, 300)
          return 100
        }
        const step = Math.floor(Math.random() * 18) + 12
        return Math.min(prev + step, 100)
      })
    }, 90)

    return () => clearInterval(interval)
  }, [onComplete])

  if (isDone) return null

  return (
    <div className={`preloader-screen ${progress === 100 ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img src={logoImg} alt="ADAM" className="preloader-logo" />
        <div className="preloader-bar-wrap">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="preloader-info">
          <span>PERFORMANCE INITIALIZING</span>
          <span className="preloader-pct">{progress}%</span>
        </div>
      </div>
    </div>
  )
}
