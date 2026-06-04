import { Link } from 'react-router-dom'

export default function AccessDenied() {
  return (
    <div className="page-content access-denied">
      <h1>Acceso no disponible</h1>
      <p>Esta sección es privada. Si recibiste un enlace de invitación, ábrelo directamente desde el correo o mensaje.</p>
      <Link to="/" className="btn btn--primary">
        Ir al portafolio
      </Link>
    </div>
  )
}
