import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import TechStackSection from '../components/TechStackSection.jsx'
import { HOME_PROCESS, PAGE_COPY, SERVICES } from '../data/site.js'

export default function Services() {
  const copy = PAGE_COPY.services

  return (
    <PageShell eyebrow={copy.title} title={copy.heading} subtitle={copy.subtitle}>
      <AnimateIn>
        <p className="page-lead">{copy.intro}</p>
      </AnimateIn>

      <div className="process-mini">
        {HOME_PROCESS.map((step, i) => (
          <AnimateIn key={step.step} delay={i * 0.06}>
            <div className="glass-card process-mini__item">
              <strong>{step.step} · {step.title}</strong>
              <span>{step.text}</span>
            </div>
          </AnimateIn>
        ))}
      </div>

      <div className="bento-grid services-grid">
        {SERVICES.map((s, i) => (
          <AnimateIn
            key={s.title}
            delay={i * 0.05}
            className={`bento-grid__item ${i < 2 ? 'bento-grid__item--wide' : 'bento-grid__item--half'}`}
          >
            <article className="glass-card bento-card">
              <span className="bento-card__icon">//</span>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <div className="tag-row">
                {s.tags.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>

      <TechStackSection title={copy.stackTitle} subtitle={copy.stackSub} />

      <AnimateIn>
        <p className="page-note">{copy.outro}</p>
      </AnimateIn>

      <AnimateIn className="section-cta">
        <Link to="/contacto" className="btn btn--primary btn--lg btn--glow">
          Pedir cotización →
        </Link>
      </AnimateIn>
    </PageShell>
  )
}
