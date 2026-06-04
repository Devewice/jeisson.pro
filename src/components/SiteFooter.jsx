import { Link, NavLink } from 'react-router-dom'
import { SITE, FOOTER } from '../data/site.js'
import SocialLinks from './SocialLinks.jsx'
import './SiteFooter.css'

const FOOTER_NAV = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo">
              <span className="site-footer__prompt">&gt;</span>
              jeisson<span>.pro</span>
            </Link>
            <p className="site-footer__tagline">{FOOTER.tagline}</p>
            <p className="site-footer__avail">
              <span className="site-footer__dot" />
              {FOOTER.availability}
            </p>
          </div>
          <div className="site-footer__col site-footer__col--nav">
            <p className="site-footer__label">Navegación</p>
            <nav aria-label="Pie de página">
              {FOOTER_NAV.map(({ to, label, end }) => (
                <NavLink key={to} to={to} end={end}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="site-footer__col site-footer__col--contact">
            <p className="site-footer__label">Contacto</p>
            <div className="site-footer__contact">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <span>{SITE.location}</span>
              <Link to="/contacto" className="site-footer__cta">
                Ir a contacto →
              </Link>
            </div>
          </div>
        </div>

        <div className="site-footer__social-wrap">
          <p className="site-footer__social-label">Redes</p>
          <SocialLinks variant="footer" />
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {SITE.shortName} Riveros · {FOOTER.note}
          </p>
        </div>
      </div>
    </footer>
  )
}
