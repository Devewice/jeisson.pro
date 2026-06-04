import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import PageBreadcrumb from '../components/PageBreadcrumb.jsx'
import PageNextStep from '../components/PageNextStep.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import TechStackSection from '../components/TechStackSection.jsx'
import CtaMid from '../components/home/CtaMid.jsx'
import {
  PAGE_COPY,
  SERVICE_ENGAGEMENTS,
  SERVICES,
  SERVICES_PROCESS,
} from '../data/site.js'
import { isComplementService } from '../utils/projects.js'

const mainServices = SERVICES.filter((s) => !isComplementService(s))
const complementServices = SERVICES.filter((s) => isComplementService(s))

function SkillCard({ service }) {
  return (
    <article className="glass-card skill-card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="tag-row">
        {service.tags.map((t) => (
          <span key={t} className="tag-pill tag-pill--muted">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

function ServiceCard({ service }) {
  return (
    <article className="glass-card bento-card service-card">
      <span className="bento-card__icon">//</span>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      {service.includes && (
        <div className="service-card__lists">
          <div>
            <strong>Incluye</strong>
            <ul>
              {service.includes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>No incluye (salvo acuerdo)</strong>
            <ul>
              {service.excludes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="tag-row">
        {service.tags.map((t) => (
          <span key={t} className="tag-pill">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Services() {
  const copy = PAGE_COPY.services

  return (
    <PageShell eyebrow={copy.title} title={copy.heading} subtitle={copy.subtitle}>
      <PageBreadcrumb />

      <AnimateIn>
        <p className="page-lead">{copy.intro}</p>
        <p className="page-inline-link">
          <Link to={copy.motaiLink.to}>{copy.motaiLink.label} →</Link>
        </p>
      </AnimateIn>

      <section className="page-section engagement-strip">
        <AnimateIn className="section-block__head">
          <p className="section-eyebrow">Modalidad</p>
          <h2 className="section-title">Tipos de encargo</h2>
        </AnimateIn>
        <div className="engagement-grid">
          {SERVICE_ENGAGEMENTS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.05}>
              <article className="glass-card engagement-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="page-section">
        <AnimateIn className="section-block__head">
          <p className="section-eyebrow">Metodología</p>
          <h2 className="section-title">Forma de trabajo</h2>
        </AnimateIn>
        <div className="process-detailed">
          {SERVICES_PROCESS.map((step, i) => (
            <AnimateIn key={step.step} delay={i * 0.06}>
              <article className="glass-card process-detailed__step">
                <span className="process-step__num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <ul>
                  {step.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="page-section">
        <AnimateIn className="section-block__head">
          <p className="section-eyebrow">Principal</p>
          <h2 className="section-title">Servicios de desarrollo</h2>
        </AnimateIn>
        <div className="bento-grid services-grid">
          {mainServices.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 0.05} className="bento-grid__item">
              <ServiceCard service={s} />
            </AnimateIn>
          ))}
        </div>
      </section>

      <CtaMid />

      <section className="page-section skills-section">
        <AnimateIn className="section-block__head">
          <p className="section-eyebrow">{copy.skillsEyebrow}</p>
          <h2 className="section-title">{copy.skillsTitle}</h2>
          <p className="section-sub">{copy.skillsSub}</p>
        </AnimateIn>
        <div className="skills-grid">
          {complementServices.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 0.05}>
              <SkillCard service={s} />
            </AnimateIn>
          ))}
        </div>
      </section>

      <TechStackSection title={copy.stackTitle} subtitle={copy.stackSub} accordion />

      <AnimateIn>
        <p className="page-note">{copy.outro}</p>
      </AnimateIn>

      <AnimateIn className="section-cta">
        <Link to="/contacto" className="btn btn--primary btn--lg btn--glow">
          Pedir cotización →
        </Link>
        <Link to="/proyectos" className="btn btn--soft btn--lg">
          Ver proyectos
        </Link>
      </AnimateIn>

      <PageNextStep />
    </PageShell>
  )
}
