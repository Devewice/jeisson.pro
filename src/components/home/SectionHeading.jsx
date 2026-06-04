export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__sub">{subtitle}</p>}
    </header>
  )
}
