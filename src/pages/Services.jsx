import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import { SERVICES } from '../data/site.js'

export default function Services() {
  return (
    <PageShell
      eyebrow="Servicios"
      title="Qué hago"
      subtitle="Desarrollo, diseño y acompañamiento técnico para marcas, educación y producto digital."
    >
      <div className="card-grid">
        {SERVICES.map((s, i) => (
          <AnimateIn key={s.title} delay={i * 0.06}>
            <article className="info-card info-card--lift">
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <div className="tag-row">
                {s.tags.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
    </PageShell>
  )
}
