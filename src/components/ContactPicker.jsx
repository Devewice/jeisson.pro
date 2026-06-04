const CHANNELS = [
  {
    id: 'email',
    label: 'Correo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M4 6h16v12H4z" strokeLinejoin="round" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.74 14.92L2 22l5.2-1.36A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 6.58 13.2l.35.46-.98 3.6-3.7-.97-.45-.28A8.2 8.2 0 0 1 12 3.8zm-3.1 4.1c.12 2.1 1.9 3.85 4.22 4.05.55.05 1.1-.02 1.6-.2l.35.9 1.05.28-.29-1.02-.82-.32a5.4 5.4 0 0 0 .9-1.05 4.9 4.9 0 0 0-7.01-2.64z" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Llamada',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path
          d="M6.5 4h3l1.5 4-2 1.2a11 11 0 0 0 5.8 5.8L18 12l4 1.5v3a2 2 0 0 1-2 1.8 16 16 0 0 1-14.3-9.5A2 2 0 0 1 6.5 4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'form',
    label: 'Formulario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function ContactPicker({ value, onChange }) {
  return (
    <div className="contact-segment" role="tablist" aria-label="Medio de contacto">
      {CHANNELS.map(({ id, label, icon }) => {
        const active = value === id
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            className={`contact-segment__item contact-segment__item--${id}${active ? ' contact-segment__item--active' : ''}`}
            onClick={() => onChange(id)}
          >
            <span className="contact-segment__icon">{icon}</span>
            <span className="contact-segment__label">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
