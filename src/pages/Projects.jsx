import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import { PAGE_COPY, PROJECTS, PROJECT_CATEGORIES } from '../data/site.js'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const copy = PAGE_COPY.projects

  const filtered = useMemo(() => {
    if (filter === 'all') return PROJECTS
    return PROJECTS.filter((p) => p.category === filter)
  }, [filter])

  return (
    <PageShell eyebrow={copy.title} title={copy.heading} subtitle={copy.subtitle}>
      <div className="projects-toolbar">
        <AnimateIn>
          <p className="page-lead">{copy.intro}</p>
        </AnimateIn>
      </div>

      <div className="filter-bar" role="tablist" aria-label="Filtrar proyectos">
        {Object.entries(PROJECT_CATEGORIES).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={`filter-btn filter-btn--${key}${filter === key ? ' filter-btn--active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map((p, i) => (
          <AnimateIn key={p.title} delay={Math.min(i * 0.04, 0.35)}>
            <article className={`glass-card info-card info-card--${p.category}`}>
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
          </AnimateIn>
        ))}
      </div>

      <AnimateIn className="section-cta">
        <Link to="/contacto" className="btn btn--primary btn--glow">
          Quiero algo parecido
        </Link>
      </AnimateIn>
    </PageShell>
  )
}
