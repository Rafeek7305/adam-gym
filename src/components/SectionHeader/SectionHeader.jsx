import React from 'react'
import './SectionHeader.css'

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'left',
  className = ''
}) {
  return (
    <div className={`section-header align-${align} ${className}`}>
      {badge && (
        <div className="section-badge-wrap">
          <span className="badge-lime">
            <span className="badge-dot"></span>
            {badge}
          </span>
        </div>
      )}

      <h2 className="section-title">
        {title}{' '}
        {titleHighlight && <span className="text-lime">{titleHighlight}</span>}
      </h2>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  )
}
