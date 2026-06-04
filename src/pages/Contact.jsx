import PageHero from '../components/PageHero.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { SITE } from '../data/site.js'

export default function Contact() {
  return (
    <div className="page-content">
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu proyecto"
        subtitle="Cotizaciones, colaboraciones o consultoría. Respondo por correo y redes."
      />
      <div className="contact-block">
        <a className="contact-email" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        <p className="contact-meta">{SITE.location} · Remoto o híbrido</p>
        <a
          className="btn btn--primary"
          href={`mailto:${SITE.email}?subject=Proyecto%20desde%20jeisson.pro`}
        >
          Enviar correo
        </a>
      </div>
      <SocialLinks variant="footer" />
    </div>
  )
}
