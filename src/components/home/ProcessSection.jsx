import { HOME_COPY, HOME_PROCESS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function ProcessSection() {
  return (
    <section className="section-block">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Metodología</p>
        <h2 className="section-title">Forma de trabajo</h2>
        <p className="section-sub">{HOME_COPY.process.sub}</p>
      </AnimateIn>
      <div className="process-timeline">
        {HOME_PROCESS.map((item, i) => (
          <AnimateIn key={item.step} delay={i * 0.1}>
            <article className="glass-card process-step">
              <span className="process-step__num">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
