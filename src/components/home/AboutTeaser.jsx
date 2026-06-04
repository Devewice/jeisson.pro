import { Link } from 'react-router-dom'
import { ABOUT, HOME_COPY } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function AboutTeaser() {
  return (
    <section className="section-block">
      <div className="about-split">
        <AnimateIn>
          <p className="section-eyebrow">Sobre mí</p>
          <h2 className="section-title">{HOME_COPY.aboutTeaser.title}</h2>
          <p className="section-sub">{ABOUT.intro[0]}</p>
          <Link to="/sobre-mi" className="btn btn--primary" style={{ marginTop: '1.25rem' }}>
            Conocer trayectoria →
          </Link>
        </AnimateIn>
        <div className="about-highlights">
          {ABOUT.highlights.map((h, i) => (
            <AnimateIn key={h.label} delay={0.08 + i * 0.05}>
              <div className="glass-card about-pill">
                <strong>{h.label}</strong>
                <span>{h.detail}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
