import { Suspense } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ENABLE_AMBIENT_BACKGROUND } from '../config/perfFlags.js'
import AmbientBackground from './AmbientBackground.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import MobileNav from './MobileNav.jsx'
import SiteFooter from './SiteFooter.jsx'
import StickyContactCta from './StickyContactCta.jsx'
import './Layout.css'
import './MobileNav.css'

const NAV = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const onCv = pathname.startsWith('/cv/')
  const onPrivate =
    pathname.startsWith('/cv/') ||
    pathname.startsWith('/interno') ||
    pathname.startsWith('/acceso/') ||
    pathname === '/login'
  const onHome = pathname === '/'
  const showFx = !onPrivate

  if (pathname === '/login' || pathname.startsWith('/acceso/')) {
    return <Outlet />
  }

  return (
    <div className={`app-shell ${onHome ? 'app-shell--home' : ''}`}>
      {showFx && ENABLE_AMBIENT_BACKGROUND && <AmbientBackground />}
      {showFx && <ScrollProgress />}
      <header className={`site-header ${showFx ? 'site-header--glass' : ''}`}>
        <div className="site-header__inner">
          <Link to="/" className="site-logo">
            <span className="site-logo__prompt">&gt;</span>
            jeisson<span className="site-logo-dot">.pro</span>
          </Link>
          {!onCv && (
            <>
              <nav className="site-nav site-nav--desktop" aria-label="Principal">
                {NAV.map(({ to, label, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
              <div className="site-header__actions">
                <Link to="/contacto" className="btn btn--primary btn--header">
                  Escríbeme
                </Link>
                <MobileNav items={NAV} />
              </div>
            </>
          )}
        </div>
      </header>
      <main className="site-main">
        <Suspense
          fallback={
            <div className="page-loading" role="status">
              Cargando…
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      {!onPrivate && <SiteFooter />}
      {showFx && !onHome && <StickyContactCta />}
    </div>
  )
}
