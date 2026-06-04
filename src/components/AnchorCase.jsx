import { Link } from 'react-router-dom'
import { HOME_ANCHOR, HOME_ANCHOR_PROJECT, PROJECTS } from '../data/site.js'
import AnimateIn from './AnimateIn.jsx'

const project = PROJECTS.find((p) => p.title === HOME_ANCHOR_PROJECT)

export default function AnchorCase({ className = 'section-block anchor-case' }) {
  if (!project) return null

  return (
    <section id="caso-destacado" className={className}>
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">{HOME_ANCHOR.eyebrow}</p>
        <h2 className="section-title">{HOME_ANCHOR.title}</h2>
      </AnimateIn>

      <AnimateIn delay={0.06}>
        <article className="glass-card anchor-case__card">
          <div className="anchor-case__main">
            <span className="anchor-case__period">{project.period}</span>
            <p className="anchor-case__problem">{HOME_ANCHOR.problem}</p>
            <ul className="anchor-case__bullets">
              {HOME_ANCHOR.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tag-row">
              {project.tags.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <footer className="anchor-case__actions">
            <Link to={HOME_ANCHOR.cta.to} className="btn btn--primary">
              {HOME_ANCHOR.cta.label}
            </Link>
            {project.url && (
              <a
                href={HOME_ANCHOR.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--soft"
              >
                {HOME_ANCHOR.link.label}
              </a>
            )}
          </footer>
        </article>
      </AnimateIn>
    </section>
  )
}
