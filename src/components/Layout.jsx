import { Link, Outlet, useLocation } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const onCv = pathname.startsWith('/cv/')

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="site-logo">
          jeisson<span className="site-logo-dot">.pro</span>
        </Link>
        {!onCv && (
          <nav className="site-nav">
            <a href="https://www.elcreador.com.co" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </nav>
        )}
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  )
}
