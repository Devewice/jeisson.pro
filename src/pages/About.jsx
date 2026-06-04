import PageHero from '../components/PageHero.jsx'
import { ABOUT, EDUCATION, INTERESTS, SITE, TOOLKIT } from '../data/site.js'

export default function About() {
  return (
    <div className="page-content">
      <PageHero eyebrow="Sobre mí" title={SITE.name} subtitle={SITE.tagline} />
      <div className="prose">
        {ABOUT.intro.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>

      <div className="stat-grid">
        {ABOUT.highlights.map(({ label, detail }) => (
          <div key={label} className="stat-card">
            <strong>{label}</strong>
            <span>{detail}</span>
          </div>
        ))}
      </div>

      <section className="content-section">
        <h2 className="section-heading">Formación</h2>
        <div className="timeline-list">
          {EDUCATION.map((e) => (
            <article key={e.school} className="timeline-list-item">
              <div className="timeline-list-head">
                <h3>{e.school}</h3>
                <span className="info-card-period">
                  {e.period} · {e.status}
                </span>
              </div>
              <p className="timeline-degree">{e.degree}</p>
              <p>{e.detail}</p>
            </article>
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
    </div>
  )
}
