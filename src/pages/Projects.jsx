import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/site.js'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return PROJECTS
    return PROJECTS.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div className="page-content">
      <PageHero
        eyebrow="Portafolio"
        title="Proyectos y trayectoria"
        subtitle="Selección ampliada a partir de mi experiencia en educación, editorial, retail y producto digital. El CV detallado para reclutadores está en el área interna."
      />

      <div className="filter-bar" role="tablist" aria-label="Filtrar proyectos">
        {Object.entries(PROJECT_CATEGORIES).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={filter === key ? 'filter-btn filter-btn--active' : 'filter-btn'}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map((p) => (
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
