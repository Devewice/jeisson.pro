import { Link } from 'react-router-dom'
import { HOME_COPY, HOME_FAQ } from '../data/site.js'
import AnimateIn from './AnimateIn.jsx'

export default function SiteFaq({ showContactLink = true, className = 'section-block site-faq' }) {
  return (
    <section className={className}>
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">FAQ</p>
        <h2 className="section-title">{HOME_COPY.faq.title}</h2>
        <p className="section-sub">{HOME_COPY.faq.sub}</p>
      </AnimateIn>

      <div className="site-faq__list">
        {HOME_FAQ.map((item, i) => (
          <AnimateIn key={item.q} delay={i * 0.06}>
            <details className="glass-card site-faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          </AnimateIn>
        ))}
      </div>

      {showContactLink && (
        <AnimateIn delay={0.12}>
          <p className="site-faq__more">
            <Link to="/contacto">Más detalle en contacto →</Link>
          </p>
        </AnimateIn>
      )}
    </section>
  )
}
