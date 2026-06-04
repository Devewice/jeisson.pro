import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { SITE } from '../data/site.js'

export default function Contact() {
  return (
    <PageShell
      eyebrow="Contacto"
      title="Hablemos de tu proyecto"
      subtitle="Cotizaciones, colaboraciones o consultoría. Respondo por correo y redes."
    >
      <AnimateIn className="contact-block contact-block--pro">
        <a className="contact-email" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        <p className="contact-meta">{SITE.location} · Remoto o híbrido</p>
        <a
          className="btn btn--primary btn--glow"
          href={`mailto:${SITE.email}?subject=Proyecto%20desde%20jeisson.pro`}
        >
          Enviar correo
        </a>
      </AnimateIn>
      <SocialLinks variant="footer" />
    </PageShell>
  )
}
