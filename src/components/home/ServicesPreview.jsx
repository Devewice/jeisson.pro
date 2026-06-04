import { Link } from 'react-router-dom'
import { HOME_COPY, HOME_SERVICES_KEYS, SERVICES } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

const previewServices = HOME_SERVICES_KEYS.map((title) =>
  SERVICES.find((s) => s.title === title)
).filter(Boolean)

export default function ServicesPreview() {
  return (
    <section className="section-block">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Servicios</p>
        <h2 className="section-title">Lo que más encargo</h2>
        <p className="section-sub">{HOME_COPY.services.sub}</p>
      </AnimateIn>
      <div className="bento-grid services-bento services-bento--home">
        {previewServices.map((s, i) => (
          <AnimateIn key={s.title} delay={i * 0.05} className="bento-grid__item bento-grid__item--third">
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
          Ver los 6 servicios
          <span className="btn__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
