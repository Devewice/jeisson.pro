import { Link, Navigate, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import { PROJECTS } from '../data/site.js'
import { PROJECT_DETAILS } from '../data/projectDetails.js'
import { findProject, projectStatusLabel } from '../utils/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = findProject(PROJECTS, slug)
  if (!project) return <Navigate to="/proyectos" replace />

  const detail = PROJECT_DETAILS[project.slug]
  const status = projectStatusLabel(project.status)
  const scope = detail?.scope?.length ? detail.scope : project.highlights
  const stack = detail?.stack?.length
    ? detail.stack
    : [{ title: 'Tecnologías', items: project.tags }]

  return (
    <PageShell eyebrow={project.period} title={project.title} subtitle={project.role} wide>
      <AnimateIn>
        <p className="page-lead">{detail?.lead || project.description}</p>
        <div className="detail-meta">
          {status && <span className={`info-card-status info-card-status--${project.status}`}>{status}</span>}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Abrir el sitio
            </a>
          )}
          <Link to="/proyectos" className="btn btn--soft">
            Volver a proyectos
          </Link>
        </div>
      </AnimateIn>

      <section className="page-section" aria-label="Alcance">
        <h2 className="section-title section-title--sm">Alcance</h2>
        <ul className="detail-scope">
          {scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {detail?.pieces?.map((piece) => (
        <section key={piece.title} className="page-section">
          <h2 className="section-title section-title--sm">{piece.title}</h2>
          <p className="page-lead">{piece.text}</p>
        </section>
      ))}

      <section className="page-section" aria-label="Tecnologías">
        <h2 className="section-title section-title--sm">Tecnologías</h2>
        <div className="detail-stack">
          {stack.map((group) => (
            <article key={group.title} className="glass-card detail-stack__card">
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
