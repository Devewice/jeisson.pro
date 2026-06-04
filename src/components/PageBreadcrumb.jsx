import { Link, useLocation } from 'react-router-dom'

const CRUMBS = {
  '/': [{ label: 'Inicio' }],
  '/sobre-mi': [{ label: 'Inicio', to: '/' }, { label: 'Sobre mí' }],
  '/servicios': [{ label: 'Inicio', to: '/' }, { label: 'Servicios' }],
  '/proyectos': [{ label: 'Inicio', to: '/' }, { label: 'Proyectos' }],
  '/contacto': [{ label: 'Inicio', to: '/' }, { label: 'Contacto' }],
}

export default function PageBreadcrumb() {
  const { pathname } = useLocation()
  const items = CRUMBS[pathname]
  if (!items || items.length < 2) return null

  return (
    <nav className="page-breadcrumb" aria-label="Ruta">
      <ol>
        {items.map((item, i) => (
          <li key={item.label}>
            {item.to && i < items.length - 1 ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
