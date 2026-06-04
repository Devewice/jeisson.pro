export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <header className="page-hero">
      {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      {children}
    </header>
  )
}
