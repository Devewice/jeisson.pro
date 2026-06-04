import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import PageBreadcrumb from '../components/PageBreadcrumb.jsx'
import PageNextStep from '../components/PageNextStep.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import {
  ABOUT,
  EDUCATION,
  EXPERIENCE,
  FOOTER,
  INTERESTS,
  PAGE_COPY,
  SITE,
  TOOLKIT_TOP,
} from '../data/site.js'

export default function About() {
  const copy = PAGE_COPY.about

  return (
    <PageShell eyebrow={copy.title} title={copy.heading} subtitle={copy.subtitle}>
      <PageBreadcrumb />

      <div className="page-hero-split">
        <AnimateIn>
          <img
            className="profile-avatar"
            src={SITE.profileImage}
            alt={SITE.name}
            width={160}
            height={160}
          />
        </AnimateIn>
        <div className="prose-block">
          <p className="page-avail">
            <span className="page-avail__dot" />
            {FOOTER.availability}
          </p>
          {ABOUT.intro.map((p) => (
            <AnimateIn key={p.slice(0, 32)}>
              <p>{p}</p>
            </AnimateIn>
          ))}
          <p className="page-muted-line">{ABOUT.audienceLine}</p>
        </div>
      </div>

      <section className="page-section" aria-label="Experiencia">
        <AnimateIn className="section-block__head">
          <p className="section-eyebrow">Trayectoria</p>
          <h2 className="section-title">{copy.experienceTitle}</h2>
        </AnimateIn>
        <div className="experience-list">
          {EXPERIENCE.map((job, i) => (
            <AnimateIn key={job.org} delay={i * 0.05}>
              <article className="glass-card experience-card">
                <div className="experience-card__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="experience-card__org">{job.org}</p>
                  </div>
                  <div className="experience-card__meta">
                    <span className="info-card-period">{job.period}</span>
                    <span className="experience-card__status">{job.status}</span>
                  </div>
                </div>
                <ul className="experience-card__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="about-summary" aria-label="Resumen">
        <div className="stat-grid about-summary__stats">
          {ABOUT.highlights.map(({ label, detail }, i) => (
            <AnimateIn key={label} delay={i * 0.05}>
              <div className="glass-card stat-card">
                <strong>{label}</strong>
                <span>{detail}</span>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="about-cta-row">
          <Link to="/proyectos" className="btn btn--primary">
            Ver proyectos
          </Link>
          <Link to={copy.cvLink.to} className="btn btn--soft">
            {copy.cvLink.label}
          </Link>
        </AnimateIn>
      </section>

      <section className="page-section page-section--education">
        <AnimateIn className="section-block__head">
          <p className="section-eyebrow">Estudios</p>
          <h2 className="section-title">Formación</h2>
        </AnimateIn>
        <div className="timeline-list">
          {EDUCATION.map((e, i) => (
            <AnimateIn key={e.school} delay={i * 0.06}>
              <article className="glass-card timeline-list-item">
                <div className="timeline-list-head">
                  <h3>{e.school}</h3>
                  <span className="info-card-period">
                    {e.period} · {e.status}
                  </span>
                </div>
                <p className="timeline-degree">{e.degree}</p>
                <p>{e.detail}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="page-section">
        <AnimateIn className="section-block__head">
          <p className="section-eyebrow">Stack</p>
          <h2 className="section-title">Herramientas frecuentes</h2>
          <p className="section-sub">{copy.toolkitNote}</p>
        </AnimateIn>
        <AnimateIn>
          <div className="glass-card toolkit-block toolkit-block--compact">
            <div className="tag-row">
              {TOOLKIT_TOP.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
            <Link to={copy.toolkitLink.to} className="btn btn--soft" style={{ marginTop: '1rem' }}>
              {copy.toolkitLink.label} →
            </Link>
          </div>
        </AnimateIn>
      </section>

      <section className="page-section">
        <AnimateIn>
          <p className="section-eyebrow">Extra</p>
          <h2 className="section-title">Temas de interés</h2>
          <ul className="interest-list interest-list--compact">
            {INTERESTS.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </AnimateIn>
      </section>

      <PageNextStep />
    </PageShell>
  )
}
