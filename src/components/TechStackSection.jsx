import AnimateIn from './AnimateIn.jsx'
import { TECH_STACK } from '../data/site.js'

export default function TechStackSection({ title, subtitle, className = 'page-section' }) {
  return (
    <section className={className}>
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Stack</p>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </AnimateIn>
      <div className="tech-stack-grid">
        {TECH_STACK.map((group, i) => (
          <AnimateIn key={group.group} delay={i * 0.05}>
            <div className="glass-card tech-stack-group">
              <h3 className="tech-stack-group__title">{group.group}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item} className="tag-pill tag-pill--muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
