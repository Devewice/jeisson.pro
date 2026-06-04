import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/interno'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  if (user) {
    return <Navigate to={from} replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setPending(true)
    try {
      await login(username, password)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Área interna</h1>
        <p>Acceso a hojas de vida (desarrollo y creativo). Uso privado.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Usuario
            <input
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="btn btn--primary" disabled={pending}>
            {pending ? 'Entrando…' : 'Iniciar sesión'}
          </button>
        </form>
        <Link to="/" className="login-back">
          ← Volver al portafolio
        </Link>
      </div>
    </div>
  )
}
