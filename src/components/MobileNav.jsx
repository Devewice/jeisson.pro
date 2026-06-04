import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileNav({ items }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mobile-nav__bars" aria-hidden="true" />
        <span className="sr-only">Menú</span>
      </button>
      {open && (
        <div id="mobile-menu" className="mobile-nav__panel" role="dialog" aria-label="Navegación">
          {items.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
      {open && (
        <button type="button" className="mobile-nav__backdrop" aria-label="Cerrar" onClick={() => setOpen(false)} />
      )}
    </div>
  )
}
