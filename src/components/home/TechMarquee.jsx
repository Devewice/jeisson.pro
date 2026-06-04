import { TECH_MARQUEE } from '../../data/site.js'
import { useDocumentVisible } from '../../hooks/useDocumentVisible.js'

export default function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE]
  const visible = useDocumentVisible()

  return (
    <section className={`tech-marquee${visible ? '' : ' tech-marquee--paused'}`} aria-hidden="true">
      <div className="tech-marquee__track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="tech-marquee__item">
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
