import { Link, useLocation } from 'react-router-dom'
import { PAGE_NEXT } from '../data/site.js'
import AnimateIn from './AnimateIn.jsx'

export default function PageNextStep() {
  const { pathname } = useLocation()
  const next = PAGE_NEXT[pathname]
  if (!next) return null

  return (
    <AnimateIn>
      <nav className="page-next" aria-label="Siguiente paso">
        <span className="page-next__label">Siguiente paso</span>
        <Link to={next.to} className="page-next__link">
          {next.label}
          <span className="page-next__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </nav>
    </AnimateIn>
  )
}
