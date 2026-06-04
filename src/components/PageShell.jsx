import AnimateIn from './AnimateIn.jsx'

export default function PageShell({ eyebrow, title, subtitle, children, wide }) {
  return (
    <div className="page-shell">
      <header className="page-shell__hero">
        <div className={`page-shell__inner ${wide ? 'page-shell__inner--wide' : ''}`}>
          <AnimateIn>
            {eyebrow && <p className="page-band-eyebrow">{eyebrow}</p>}
            <h1 className="page-band-title">{title}</h1>
            {subtitle && <p className="page-band-sub">{subtitle}</p>}
          </AnimateIn>
        </div>
      </header>
      <div className={`page-shell__inner ${wide ? '' : ''}`}>{children}</div>
    </div>
  )
}
