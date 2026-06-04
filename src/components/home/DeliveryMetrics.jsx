import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { DELIVERY_METRICS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'

function Metric({ label, value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const duration = 1200
    const t0 = performance.now()
    let frame
    function tick(now) {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - (1 - p) ** 3
      start = Math.round(eased * end)
      setDisplay(start)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <div ref={ref} className="metric-card">
      <span className="metric-card__value">
        {display}
        {suffix}
      </span>
      <span className="metric-card__label">{label}</span>
    </div>
  )
}

export default function DeliveryMetrics() {
  return (
    <Section
      id="entregas"
      index="06"
      eyebrow="Entregas"
      title="Números que respaldan el trabajo"
      subtitle="Proyectos reales en educación, editorial, e-commerce y producto digital."
      variant="alt"
    >
      <div className="metrics-row">
        {DELIVERY_METRICS.map((m, i) => (
          <AnimateIn key={m.label} delay={i * 0.06}>
            <Metric {...m} />
          </AnimateIn>
        ))}
      </div>
    </Section>
  )
}
