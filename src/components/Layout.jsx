import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav.jsx'
import SiteFooter from './SiteFooter.jsx'
import SiteChrome from './SiteChrome.jsx'
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

  if (pathname === '/login' || pathname.startsWith('/acceso/')) {
    return <Outlet />
  }

  return (
    <div className={`app-shell ${onHome ? 'app-shell--home' : ''}`}>
      <SiteChrome />
      <header className={`site-header ${onHome ? 'site-header--transparent' : ''}`}>
        <Link to="/" className="site-logo">
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
                  className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <MobileNav items={NAV} />
          </>
        )}
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      {!onPrivate && <SiteFooter />}
    </div>
  )
}
