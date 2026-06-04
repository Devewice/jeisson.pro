import { HOME_COPY, WHY_BUILD } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function WhyBuildSection() {
  return (
    <section className="section-block">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Por qué importa</p>
        <h2 className="section-title">{HOME_COPY.whyBuild.title}</h2>
        <p className="section-sub">{HOME_COPY.whyBuild.sub}</p>
      </AnimateIn>
      <div className="bento-grid">
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
