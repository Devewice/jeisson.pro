import { HOME_COPY, TECH_STACK } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function CapabilitiesStrip() {
  return (
    <section className="section-block">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Stack</p>
        <h2 className="section-title">Tecnologías en producción</h2>
        <p className="section-sub">{HOME_COPY.capabilities.sub}</p>
      </AnimateIn>
      <div className="tech-stack-grid tech-stack-grid--compact">
        {TECH_STACK.map((group, i) => (
          <AnimateIn key={group.group} delay={i * 0.04}>
            <div className="tech-stack-group tech-stack-group--compact">
              <span className="tech-stack-group__title">{group.group}</span>
              <div className="tag-row">
                {group.items.slice(0, 5).map((item) => (
                  <span key={item} className="tag-pill tag-pill--muted">
                    {item}
                  </span>
                ))}
                {group.items.length > 5 && (
                  <span className="tag-pill tag-pill--muted">+{group.items.length - 5}</span>
                )}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
