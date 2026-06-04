import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import { ABOUT, EDUCATION, INTERESTS, SITE, TOOLKIT } from '../data/site.js'

export default function About() {
  return (
    <PageShell eyebrow="Sobre mí" title={SITE.name} subtitle={SITE.tagline}>
      <AnimateIn className="prose">
        {ABOUT.intro.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </AnimateIn>

      <div className="stat-grid">
        {ABOUT.highlights.map(({ label, detail }) => (
          <AnimateIn key={label}>
            <div className="stat-card">
              <strong>{label}</strong>
              <span>{detail}</span>
            </div>
          </AnimateIn>
        ))}
      </div>

      <section className="content-section">
        <h2 className="section-heading">Formación</h2>
        <div className="timeline-list">
          {EDUCATION.map((e, i) => (
            <AnimateIn key={e.school} delay={i * 0.05}>
              <article className="timeline-list-item">
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

      <section className="content-section">
        <h2 className="section-heading">Herramientas</h2>
        <div className="toolkit-grid">
          <div>
            <h3>Diseño y audiovisual</h3>
            <div className="tag-row">
              {TOOLKIT.design.map((t) => (
                <span key={t} className="tag-pill tag-pill--muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3>Desarrollo</h3>
            <div className="tag-row">
              {TOOLKIT.dev.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3>Web y ops</h3>
            <div className="tag-row">
              {TOOLKIT.other.map((t) => (
                <span key={t} className="tag-pill tag-pill--muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">Intereses profesionales</h2>
        <ul className="interest-list">
          {INTERESTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="prose-footnote">{SITE.birthNote}</p>
      </section>
    </PageShell>
  )
}
