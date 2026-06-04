import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <h1>Jeisson David Riveros García</h1>
        <p>
          Visualización de hojas de vida en dos perfiles: desarrollo web full stack y diseño
          multimedial. Las plantillas HTML en <code>cv-dev</code> y <code>cv-creativo</code> se
          conservan sin cambios; aquí se muestran dentro de la app React.
        </p>
      </section>

      <div className="cv-grid">
        <Link to="/cv/dev" className="cv-card cv-card--dev">
          <span className="cv-card-tag">Desarrollo</span>
          <h2>CV — Full Stack</h2>
          <p>
            PHP, JavaScript, WordPress. Tema tech con sidebar oscuro y JetBrains Mono.
          </p>
          <span className="cv-card-cta">Ver hoja de vida →</span>
        </Link>

        <Link to="/cv/creativo" className="cv-card cv-card--creativo">
          <span className="cv-card-tag">Creativo</span>
          <h2>CV — Diseño multimedial</h2>
          <p>
            Editorial, branding y comunicación visual. Tema editorial en cv-creativo.
          </p>
          <span className="cv-card-cta">Ver hoja de vida →</span>
        </Link>
      </div>

      <p className="home-note">
        Fuentes editables: <code>jeisson-riveros-reactive-resume.json</code> y{' '}
        <code>jeisson-riveros-creativo-reactive-resume.json</code> para Reactive Resume. Los
        HTML estáticos no se sincronizan solos con los JSON.
      </p>
    </div>
  )
}
