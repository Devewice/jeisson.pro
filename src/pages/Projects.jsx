import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import PageNextStep from '../components/PageNextStep.jsx'
import AnchorCase from '../components/AnchorCase.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import {
  HOME_ANCHOR_PROJECT,
  PAGE_COPY,
  PROJECT_CTA,
  PROJECTS,
  PROJECT_CATEGORIES,
} from '../data/site.js'
import { countProjectsByCategory, sortProjects } from '../utils/projects.js'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const copy = PAGE_COPY.projects
  const counts = useMemo(() => countProjectsByCategory(PROJECTS), [])

  const filtered = useMemo(() => {
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
    return sortProjects(list.filter((p) => p.title !== HOME_ANCHOR_PROJECT))
  }, [filter])

  const showAnchor = filter === 'all' || filter === 'dev'
  const cta = PROJECT_CTA[filter] || PROJECT_CTA.all

  return (
    <PageShell eyebrow={copy.title} title={copy.heading} subtitle={copy.subtitle}>
      <AnimateIn>
        <p className="page-lead">{copy.intro}</p>
      </AnimateIn>

      {showAnchor && <AnchorCase className="section-block anchor-case anchor-case--page" />}

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
            <span className="filter-btn__count">({counts[key] ?? 0})</span>
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map((p, i) => (
          <AnimateIn key={p.title} delay={Math.min(i * 0.04, 0.35)}>
            <ProjectCard project={p} />
          </AnimateIn>
        ))}
      </div>

      <AnimateIn className="section-block">
        <h2 className="section-title section-title--sm">{copy.checklistTitle}</h2>
        <ul className="contact-checklist">
          {PAGE_COPY.contact.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </AnimateIn>

      <AnimateIn className="section-cta">
        <Link to={cta.to} className="btn btn--primary btn--glow">
          {cta.label}
        </Link>
      </AnimateIn>

      <PageNextStep />
    </PageShell>
  )
}
