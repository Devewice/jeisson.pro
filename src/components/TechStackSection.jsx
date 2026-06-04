import { useEffect, useState } from 'react'
import AnimateIn from './AnimateIn.jsx'
import { TECH_STACK } from '../data/site.js'

function useDesktopOpen() {
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return desktop
}

export default function TechStackSection({ title, subtitle, className = 'page-section', accordion = false }) {
  const desktopOpen = useDesktopOpen()

  return (
    <section className={className}>
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Stack</p>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </AnimateIn>
      <div className={`tech-stack-grid${accordion ? ' tech-stack-grid--accordion' : ''}`}>
        {TECH_STACK.map((group, i) => (
          <AnimateIn key={group.group} delay={i * 0.05}>
            {accordion ? (
              <details className="glass-card tech-stack-group tech-stack-group--details" open={desktopOpen}>
                <summary className="tech-stack-group__title">{group.group}</summary>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill tag-pill--muted">
                      {item}
                    </span>
                  ))}
                </div>
              </details>
            ) : (
              <div className="glass-card tech-stack-group">
                <h3 className="tech-stack-group__title">{group.group}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill tag-pill--muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
