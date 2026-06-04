import { Link } from 'react-router-dom'

export default function StickyContactCta() {
  return (
    <div className="sticky-cta" aria-hidden={false}>
      <Link to="/contacto" className="btn btn--primary btn--glow sticky-cta__btn">
        Contacto
      </Link>
    </div>
  )
}
