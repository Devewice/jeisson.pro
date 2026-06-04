import { Link } from 'react-router-dom'
import { HOME_COPY, SERVICES } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function ServicesPreview() {
  return (
    <section className="section-block">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Servicios</p>
        <h2 className="section-title">Servicios</h2>
        <p className="section-sub">{HOME_COPY.services.sub}</p>
      </AnimateIn>
      <div className="bento-grid services-bento">
        {SERVICES.map((s, i) => (
          <AnimateIn key={s.title} delay={i * 0.05} className="bento-grid__item bento-grid__item--half">
            <article className="glass-card bento-card">
              <span className="bento-card__icon">//</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="tag-row">
                {s.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag-pill tag-pill--muted">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
      <div className="section-cta">
        <Link to="/servicios" className="btn btn--soft btn--lg">
          Ver todos los servicios
          <span className="btn__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
