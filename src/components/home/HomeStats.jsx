import { HOME_STATS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'

export default function HomeStats() {
  return (
    <Section index="01" eyebrow="En números" title="Trayectoria en cifras" variant="alt">
      <div className="home-stats__grid">
        {HOME_STATS.map((s, i) => (
          <AnimateIn key={s.label} delay={i * 0.08} className="home-stats__item">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </AnimateIn>
        ))}
      </div>
    </Section>
  )
}
