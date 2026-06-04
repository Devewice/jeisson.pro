import { Link } from 'react-router-dom'
import { HERO, SITE } from '../data/site.js'
import SocialLinks from '../components/SocialLinks.jsx'

export default function Landing() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <p className="landing-eyebrow">{SITE.tagline}</p>
        <h1>{HERO.title}</h1>
        <p className="landing-lead">{HERO.subtitle}</p>
        <div className="landing-ctas">
          {HERO.ctas.map(({ label, to, primary }) => (
            <Link key={to} to={to} className={primary ? 'btn btn--primary btn--lg' : 'btn btn--lg'}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="landing-panels">
        <article className="landing-panel">
          <h2>Desarrollo</h2>
          <p>
            E-commerce, plugins WordPress, backoffice NestJS/Next.js y plataformas
            educativas. Más de 5 años entre código y producción.
          </p>
          <Link to="/servicios">Qué ofrezco →</Link>
        </article>
        <article className="landing-panel">
          <h2>Diseño y multimedia</h2>
          <p>
            Editorial (Occidente XXI), branding, animación 2D, foto, radio y campañas
            para marcas y colegios.
          </p>
          <Link to="/proyectos">Proyectos →</Link>
        </article>
        <article className="landing-panel landing-panel--muted">
          <h2>CV interno</h2>
          <p>Hojas de vida dev y creativo. Solo con acceso autorizado.</p>
          <Link to="/login">Iniciar sesión →</Link>
        </article>
      </section>

      <SocialLinks variant="footer" />
    </div>
  )
}
