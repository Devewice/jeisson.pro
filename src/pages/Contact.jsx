import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import AnimateIn from '../components/AnimateIn.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactPicker from '../components/ContactPicker.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { PAGE_COPY, SITE } from '../data/site.js'

function whatsappUrl() {
  const text = encodeURIComponent(PAGE_COPY.contact.whatsappPrefill)
  return `https://wa.me/${SITE.whatsapp}?text=${text}`
}

function ChannelPanel({ channel }) {
  if (channel === 'form') {
    return <ContactForm embedded />
  }

  const config = {
    email: {
      eyebrow: 'Correo',
      value: SITE.email,
      href: `mailto:${SITE.email}?subject=Proyecto%20desde%20jeisson.pro`,
      meta: 'Propuestas con adjuntos · respuesta en 24–48 h',
      cta: 'Abrir correo',
      external: false,
    },
    whatsapp: {
      eyebrow: 'WhatsApp',
      value: SITE.phone,
      href: whatsappUrl(),
      meta: 'Chat directo · suele ser el mismo día en horario laboral',
      cta: 'Abrir WhatsApp',
      external: true,
      valueClass: 'contact-value--whatsapp',
    },
    phone: {
      eyebrow: 'Llamada',
      value: SITE.phone,
      href: SITE.phoneTel,
      meta: `${SITE.location} · horario Colombia`,
      cta: 'Llamar ahora',
      external: false,
    },
  }[channel]

  return (
    <>
      <p className="section-eyebrow">{config.eyebrow}</p>
      {channel === 'email' ? (
        <a className={`contact-email ${config.valueClass || ''}`} href={config.href}>
          {config.value}
        </a>
      ) : (
        <p className={`contact-value ${config.valueClass || ''}`}>{config.value}</p>
      )}
      <p className="contact-meta">{config.meta}</p>
      <div className="contact-actions">
        <a
          className={`btn btn--primary btn--lg ${channel === 'whatsapp' ? 'btn--whatsapp' : 'btn--glow'}`}
          href={config.href}
          {...(config.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {config.cta}
        </a>
      </div>
    </>
  )
}

export default function Contact() {
  const copy = PAGE_COPY.contact
  const [channel, setChannel] = useState('email')

  return (
    <PageShell eyebrow={copy.title} title={copy.heading} subtitle={copy.subtitle}>
      <div className="contact-layout">
        <AnimateIn>
          <p className="page-lead">{copy.intro}</p>
          <ul className="contact-checklist">
            {copy.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="contact-response">{copy.response}</p>
          <div className="about-cta-row" style={{ marginTop: '1.5rem' }}>
            <Link to="/servicios" className="btn">
              Servicios
            </Link>
            <Link to="/proyectos" className="btn">
              Proyectos
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <div className="contact-main">
            <ContactPicker value={channel} onChange={setChannel} />

            <div className="glass-card contact-block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={channel}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChannelPanel channel={channel} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateIn>
      </div>

      <AnimateIn delay={0.1}>
        <SocialLinks variant="footer" />
      </AnimateIn>
    </PageShell>
  )
}
