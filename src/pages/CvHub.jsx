import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import AccessLinkManager from '../components/AccessLinkManager.jsx'
import '../App.css'

export default function CvHub() {
  const { owner, cvAccess, canManageLinks, logout } = useAuth()
  const lockedVariant = cvAccess?.variant

  if (lockedVariant === 'dev') {
    return <Navigate to="/cv/dev" replace />
  }
  if (lockedVariant === 'creativo') {
    return <Navigate to="/cv/creativo" replace />
  }

  return (
    <div className="home">
      <section className="home-hero">
        <p className="page-hero-eyebrow">
          {owner ? 'Administración' : cvAccess?.label || 'Acceso invitado'}
        </p>
        <h1>Hojas de vida</h1>
        <p>Versión desarrollo y creativa. En el visor usa «Descargar PDF» o «Descargar PDF ATS» (dev).</p>
        <button type="button" className="btn" onClick={() => logout()}>
          Cerrar sesión
        </button>
      </section>

      <div className="cv-grid">
        <Link to="/cv/dev" className="cv-card cv-card--dev">
          <span className="cv-card-tag">Desarrollo</span>
          <h2>CV — Full stack</h2>
          <p>NestJS, WordPress, APIs y producto en producción.</p>
          <span className="cv-card-cta">Abrir →</span>
        </Link>

        <Link to="/cv/creativo" className="cv-card cv-card--creativo">
          <span className="cv-card-tag">Creativo</span>
          <h2>CV — Diseño (complemento)</h2>
          <p>Editorial, branding, Behance.</p>
          <span className="cv-card-cta">Abrir →</span>
        </Link>
      </div>

      {canManageLinks && <AccessLinkManager />}
    </div>
  )
}
