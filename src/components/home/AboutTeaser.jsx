import { Link } from 'react-router-dom'
import { ABOUT } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'

export default function AboutTeaser() {
  return (
    <Section
      id="sobre"
      index="02"
      eyebrow="Sobre mí"
      title="Creatividad + lógica en un solo perfil"
      subtitle={ABOUT.intro[0]}
    >
      <div className="about-teaser__grid">
        <AnimateIn>
          <Link to="/sobre-mi" className="btn btn--primary btn--glow">
            Conocer trayectoria →
          </Link>
        </AnimateIn>
        <AnimateIn delay={0.12} className="about-teaser__highlights">
          {ABOUT.highlights.map((h) => (
            <div key={h.label} className="about-teaser__pill">
              <strong>{h.label}</strong>
              <span>{h.detail}</span>
            </div>
          ))}
        </AnimateIn>
      </div>
    </Section>
  )
}
