import { HOME_PROCESS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'

export default function ProcessSection() {
  return (
    <Section
      id="proceso"
      index="07"
      eyebrow="Metodología"
      title="Cómo trabajo contigo"
      subtitle="Proceso claro para que sepas qué esperar en cada fase."
    >
      <div className="process-grid">
        {HOME_PROCESS.map((item, i) => (
          <AnimateIn key={item.step} delay={i * 0.1}>
            <article className="process-card">
              <span className="process-card__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </AnimateIn>
        ))}
      </div>
    </Section>
  )
}
