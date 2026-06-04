import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import '../App.css'

export default function CvHub() {
  const { user, logout } = useAuth()

  return (
    <div className="home">
      <section className="home-hero">
        <p className="page-hero-eyebrow">Área interna · {user?.username}</p>
        <h1>Hojas de vida</h1>
        <p>Versiones dev y creativo. Exporta PDF desde el visor (Ctrl+P) o Reactive Resume.</p>
        <button type="button" className="btn" onClick={() => logout()}>
          Cerrar sesión
        </button>
      </section>

      <div className="cv-grid">
        <Link to="/cv/dev" className="cv-card cv-card--dev">
          <span className="cv-card-tag">Desarrollo</span>
          <h2>CV — Full Stack</h2>
          <p>PHP, TypeScript, Laravel, WordPress.</p>
          <span className="cv-card-cta">Abrir →</span>
        </Link>
        <Link to="/cv/creativo" className="cv-card cv-card--creativo">
          <span className="cv-card-tag">Creativo</span>
          <h2>CV — Diseño multimedial</h2>
          <p>Editorial, branding, Behance.</p>
          <span className="cv-card-cta">Abrir →</span>
        </Link>
      </div>
    </div>
  )
}
