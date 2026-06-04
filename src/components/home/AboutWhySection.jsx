import { Link } from 'react-router-dom'
import { ABOUT, HOME_COPY, WHY_BUILD } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function AboutWhySection() {
  return (
    <section className="section-block about-why">
      <div className="about-split">
        <AnimateIn>
          <p className="section-eyebrow">{HOME_COPY.aboutWhy.eyebrow}</p>
          <h2 className="section-title">{HOME_COPY.aboutWhy.title}</h2>
          <p className="section-sub">{HOME_COPY.aboutWhy.sub}</p>
          <p className="about-why__intro">{ABOUT.intro[0]}</p>
          <Link to="/sobre-mi" className="btn btn--primary" style={{ marginTop: '1.25rem' }}>
            {HOME_COPY.aboutWhy.cta} →
          </Link>
        </AnimateIn>

        <div className="about-highlights">
          {ABOUT.highlights.map((h, i) => (
            <AnimateIn key={h.label} delay={0.06 + i * 0.05}>
              <div className="glass-card about-pill">
                <strong>{h.label}</strong>
                <span>{h.detail}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <AnimateIn className="section-block__head" style={{ marginTop: '3rem' }}>
        <p className="section-eyebrow">Por qué importa</p>
        <h2 className="section-title">{HOME_COPY.whyBuild.title}</h2>
        <p className="section-sub">{HOME_COPY.whyBuild.sub}</p>
      </AnimateIn>

      <div className="bento-grid about-why__bento">
        {WHY_BUILD.map((item, i) => (
          <AnimateIn key={item.title} delay={i * 0.06} className="bento-grid__item bento-grid__item--half">
            <article className="glass-card bento-card">
              <span className="bento-card__icon">→</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
