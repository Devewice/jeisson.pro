import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimateIn from './AnimateIn.jsx'

export default function PageShell({ eyebrow, title, subtitle, children }) {
  return (
    <div className="page-shell">
      <AnimateIn className="page-shell__hero">
        <nav className="page-shell__crumb" aria-label="Ruta">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {title}
        </motion.h1>
        {subtitle && <p className="page-shell__sub">{subtitle}</p>}
      </AnimateIn>
      <div className="page-shell__content">{children}</div>
    </div>
  )
}
