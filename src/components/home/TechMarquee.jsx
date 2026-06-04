import { TECH_MARQUEE } from '../../data/site.js'

export default function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE]

  return (
    <section className="tech-marquee" aria-hidden="true">
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
