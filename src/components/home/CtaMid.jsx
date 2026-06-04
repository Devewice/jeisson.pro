import { Link } from 'react-router-dom'
import { HOME_COPY, SITE } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function CtaMid() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hola Jeisson, vi jeisson.pro y me gustaría hablar de un proyecto:')}`

  return (
    <section className="section-block cta-mid">
      <AnimateIn>
        <div className="glass-card cta-mid__panel">
          <h2>{HOME_COPY.ctaMid.title}</h2>
          <p>{HOME_COPY.ctaMid.sub}</p>
          <div className="cta-mid__actions">
            <a href={`mailto:${SITE.email}`} className="btn btn--primary btn--lg cta-mid__btn">
              <span className="cta-mid__btn-title">Correo</span>
              <span className="cta-mid__btn-detail">{SITE.email}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--soft btn--lg btn--whatsapp cta-mid__btn cta-mid__btn--compact"
            >
              WhatsApp
            </a>
            <Link to="/contacto" className="btn btn--soft btn--lg cta-mid__btn cta-mid__btn--compact">
              Más canales
            </Link>
          </div>
        </div>
      </AnimateIn>
    </section>
  )
}
