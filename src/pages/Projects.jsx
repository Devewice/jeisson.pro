import PageHero from '../components/PageHero.jsx'
import { PROJECTS } from '../data/site.js'

export default function Projects() {
  return (
    <div className="page-content">
      <PageHero
        eyebrow="Portafolio"
        title="Proyectos"
        subtitle="Selección de trabajos públicos. El detalle técnico completo está en el CV interno."
      />
      <div className="card-grid">
        {PROJECTS.map((p) => (
          <article key={p.title} className="info-card info-card--project">
            <div className="info-card-head">
              <h2>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h2>
              <span className="info-card-period">{p.period}</span>
            </div>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tags.map((t) => (
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
