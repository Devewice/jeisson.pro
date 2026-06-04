import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { SITE } from '../data/site.js'
import './Layout.css'

const NAV = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const { user } = useAuth()
  const onCv = pathname.startsWith('/cv/')
  const onLogin = pathname === '/login'

  if (onLogin) {
    return <Outlet />
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="site-logo">
          jeisson<span className="site-logo-dot">.pro</span>
        </Link>
        {!onCv && (
          <nav className="site-nav" aria-label="Principal">
            {NAV.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
              >
                {label}
              </NavLink>
            ))}
            {user ? (
              <NavLink to="/interno" className="nav-internal">
                CV interno
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-internal">
                Acceso CV
              </NavLink>
            )}
          </nav>
        )}
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      {!onCv && (
        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} {SITE.name} ·{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </footer>
      )}
    </div>
  )
}
