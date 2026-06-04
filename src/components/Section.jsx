import AnimateIn from './AnimateIn.jsx'

export default function Section({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  children,
  variant = 'default',
  className = '',
}) {
  return (
    <section id={id} className={`site-section site-section--${variant} ${className}`.trim()}>
      <div className="site-section__inner">
        {(eyebrow || title) && (
          <AnimateIn className="site-section__head">
            {index && <span className="site-section__index">{index}</span>}
            {eyebrow && <p className="site-section__eyebrow">{eyebrow}</p>}
            {title && <h2 className="site-section__title">{title}</h2>}
            {subtitle && <p className="site-section__sub">{subtitle}</p>}
          </AnimateIn>
        )}
        {children}
      </div>
    </section>
  )
}
