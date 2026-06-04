import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CAPABILITY_BARS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'

function Bar({ label, value, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) setWidth(value)
  }, [inView, value])

  return (
    <div ref={ref} className="cap-bar">
      <div className="cap-bar__meta">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="cap-bar__track">
        <motion.div
          className={`cap-bar__fill cap-bar__fill--${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function CapabilityChart() {
  return (
    <Section
      id="capacidades"
      index="05"
      eyebrow="Capacidades"
      title="Dónde aporto más valor"
      subtitle="Perfil híbrido: código en producción y narrativa visual con criterio de marca."
    >
      <div className="cap-grid">
        <AnimateIn className="cap-grid__chart">
          {CAPABILITY_BARS.map((bar, i) => (
            <Bar key={bar.label} {...bar} delay={i * 0.08} />
          ))}
        </AnimateIn>
        <AnimateIn className="cap-grid__aside" delay={0.15}>
          <div className="cap-card">
            <h3>Desarrollo + diseño</h3>
            <p>
              No delego la experiencia visual al final: arquitectura, UI y piezas editoriales
              comparten el mismo sistema desde el inicio.
            </p>
            <ul>
              <li>APIs documentadas y front consumiendo datos reales</li>
              <li>WordPress headless o clásico según el proyecto</li>
              <li>Motion, revistas y campañas con Adobe + web</li>
            </ul>
          </div>
        </AnimateIn>
      </div>
    </Section>
  )
}
