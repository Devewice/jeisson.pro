import { Link } from 'react-router-dom'
import AnimateIn from '../AnimateIn.jsx'
import { EXPLORE_NAV, HOME_COPY } from '../../data/site.js'

export default function ExploreNav() {
  return (
    <section id="explorar" className="section-block">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Navega</p>
        <h2 className="section-title">Recorre el sitio</h2>
        <p className="section-sub">{HOME_COPY.explore.sub}</p>
      </AnimateIn>
      <div className="bento-grid">
        {EXPLORE_NAV.map((item, i) => (
          <AnimateIn
            key={item.to}
            delay={i * 0.05}
            className={`bento-grid__item bento-grid__item--${item.size}`}
          >
            <Link
              to={item.to}
              className={`glass-card bento-card bento-card--accent-${item.accent}`}
            >
              <span className="bento-card__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="bento-card__arrow">Explorar →</span>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
