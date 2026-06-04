import { Link } from 'react-router-dom'
import { SERVICES } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'

export default function ServicesPreview() {
  return (
    <Section
      id="servicios"
      index="03"
      eyebrow="Servicios"
      title="Lo que puedo hacer por tu marca o producto"
      subtitle="Desde la línea de código hasta la pieza gráfica que vende."
      variant="alt"
    >
      <div className="services-preview-grid">
        {SERVICES.map((s, i) => (
          <AnimateIn key={s.title} delay={i * 0.06}>
            <article className="services-preview-card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="tag-row">
                {s.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag-pill tag-pill--muted">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
      <div className="home-section__cta">
        <Link to="/servicios" className="btn btn--glow">
          Detalle de servicios →
        </Link>
      </div>
    </Section>
  )
}
