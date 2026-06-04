import { HOME_STATS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function HomeStats() {
  return (
    <section className="section-block section-block--tight">
      <div className="stats-row">
        {HOME_STATS.map((s, i) => (
          <AnimateIn key={s.label} delay={i * 0.06}>
            <div className="glass-card stat-tile">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
