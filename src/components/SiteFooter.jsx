import { Link, NavLink } from 'react-router-dom'
import { SITE } from '../data/site.js'
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
      <div className="site-footer__grid">
        <div>
          <Link to="/" className="site-footer__logo">
            jeisson<span>.pro</span>
          </Link>
          <p>{SITE.tagline}</p>
        </div>
        <nav aria-label="Pie de página">
          {FOOTER_NAV.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="site-footer__contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>{SITE.location}</span>
        </div>
      </div>
      <SocialLinks variant="footer" />
      <p className="site-footer__copy">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  )
}
