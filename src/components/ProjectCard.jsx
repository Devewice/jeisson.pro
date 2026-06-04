import { projectStatusLabel } from '../utils/projects.js'

export default function ProjectCard({ project }) {
  const status = projectStatusLabel(project.status)

  return (
    <article className={`glass-card info-card info-card--${project.category}`}>
      <div className="info-card-head">
        <div className="info-card-head__titles">
          <h2>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h2>
          {project.role && <p className="info-card-role">{project.role}</p>}
        </div>
        <div className="info-card-head__meta">
          <span className="info-card-period">{project.period}</span>
          {status && <span className={`info-card-status info-card-status--${project.status}`}>{status}</span>}
        </div>
      </div>
      <p>{project.description}</p>
      {project.highlights?.length > 0 && (
        <ul className="info-card-highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="tag-row">
        {project.tags.map((t) => (
          <span key={t} className="tag-pill">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}
