import { HOME_AUDIENCE, HOME_COPY, HOME_SECTORS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function AudienceChips() {
  return (
    <section className="section-block audience-section">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Perfiles</p>
        <h2 className="section-title">{HOME_COPY.audience.title}</h2>
        <p className="section-sub">{HOME_COPY.audience.sub}</p>
      </AnimateIn>

      <div className="audience-grid">
        {HOME_AUDIENCE.map((item, i) => (
          <AnimateIn key={item.label} delay={i * 0.05}>
            <article className="glass-card audience-card">
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.15}>
        <div className="audience-sectors" aria-label="Sectores">
          {HOME_SECTORS.map((s) => (
            <span key={s} className="tag-pill tag-pill--muted">
              {s}
            </span>
          ))}
        </div>
      </AnimateIn>
    </section>
  )
}
