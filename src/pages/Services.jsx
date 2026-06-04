import PageHero from '../components/PageHero.jsx'
import { SERVICES } from '../data/site.js'

export default function Services() {
  return (
    <div className="page-content">
      <PageHero
        eyebrow="Servicios"
        title="Qué hago"
        subtitle="Desarrollo, diseño y acompañamiento técnico para marcas, educación y producto digital."
      />
      <div className="card-grid">
        {SERVICES.map((s) => (
          <article key={s.title} className="info-card">
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
        ))}
      </div>
    </div>
  )
}
