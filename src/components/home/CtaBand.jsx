import { Link } from 'react-router-dom'
import AnimateIn from '../AnimateIn.jsx'
import { SITE } from '../../data/site.js'

export default function CtaBand() {
  return (
    <section className="section-block">
      <AnimateIn>
        <div className="glass-card cta-band__panel">
          <h2>¿Necesitas desarrollo?</h2>
          <p>
            Escríbeme a {SITE.email}: qué hay que construir, stack si ya lo tienes y plazo. Si hace
            falta una idea visual inicial o ya tienes diseño/UX, puedo integrarme en ambos casos.
          </p>
          <div className="cta-band__actions">
            <Link to="/contacto" className="btn btn--primary btn--lg btn--glow">
              Ir a contacto
            </Link>
            <Link to="/proyectos" className="btn btn--soft btn--lg">
              Ver proyectos
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </AnimateIn>
    </section>
  )
}
