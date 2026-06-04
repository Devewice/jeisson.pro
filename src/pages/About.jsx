import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import { ABOUT, EDUCATION, INTERESTS, PAGE_COPY, SITE, TOOLKIT } from '../data/site.js'

export default function About() {
  const copy = PAGE_COPY.about

  return (
    <PageShell eyebrow={PAGE_COPY.about.title} title={SITE.name} subtitle={copy.subtitle}>
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
          {ABOUT.intro.map((p) => (
            <AnimateIn key={p.slice(0, 32)}>
              <p>{p}</p>
            </AnimateIn>
          ))}
        </div>
      </div>

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
          <Link to="/contacto" className="btn btn--soft">
            Contacto
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
          <h2 className="section-title">Herramientas</h2>
        </AnimateIn>
        <div className="toolkit-grid">
          {[
            { label: 'Desarrollo (principal)', items: TOOLKIT.dev, muted: false },
            { label: 'Web, datos y ops', items: TOOLKIT.other, muted: true },
            { label: 'Diseño y audiovisual (complemento)', items: TOOLKIT.design, muted: true },
          ].map((group, i) => (
            <AnimateIn key={group.label} delay={i * 0.08}>
              <div className="glass-card toolkit-block">
                <h3>{group.label}</h3>
                <div className="tag-row">
                  {group.items.map((t) => (
                    <span key={t} className={group.muted ? 'tag-pill tag-pill--muted' : 'tag-pill'}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="page-section">
        <AnimateIn>
          <p className="section-eyebrow">Extra</p>
          <h2 className="section-title">Temas que me interesan</h2>
          <ul className="interest-list">
            {INTERESTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="prose-footnote">{SITE.birthNote}</p>
        </AnimateIn>
      </section>
    </PageShell>
  )
}
