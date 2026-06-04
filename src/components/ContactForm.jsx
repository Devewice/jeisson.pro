import { useState } from 'react'
import { PAGE_COPY, SITE } from '../data/site.js'

export default function ContactForm({ embedded = false }) {
  const copy = PAGE_COPY.contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Proyecto jeisson.pro${form.name ? ` — ${form.name}` : ''}`
    )
    const body = encodeURIComponent(
      [
        form.name && `Nombre: ${form.name}`,
        form.email && `Correo: ${form.email}`,
        '',
        form.message,
      ]
        .filter(Boolean)
        .join('\n')
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const wrapperClass = embedded ? 'contact-form contact-form--embedded' : 'glass-card contact-form'

  return (
    <div className={wrapperClass}>
      <p className="section-eyebrow">Formulario</p>
      {!embedded && <h2 className="contact-form__title">Enviar mensaje</h2>}
      <p className="contact-form__note">{copy.formNote}</p>

      <form className="contact-form__fields" onSubmit={handleSubmit}>
        <label>
          <span>Nombre</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre o empresa"
            autoComplete="name"
          />
        </label>
        <label>
          <span>Tu correo</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="para@responderte.com"
            autoComplete="email"
            required
          />
        </label>
        <label>
          <span>Mensaje</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Qué necesitas, plazo aproximado, presupuesto si lo tienes…"
            rows={5}
            required
          />
        </label>
        <button type="submit" className="btn btn--primary btn--lg btn--glow">
          Enviar por correo
        </button>
        {sent && (
          <p className="contact-form__sent" role="status">
            Si no se abrió el correo, escribe directo a {SITE.email}
          </p>
        )}
      </form>
    </div>
  )
}
