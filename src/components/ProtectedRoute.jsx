import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { hasCvAccess, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="page-loading">
        <p>Comprobando acceso…</p>
      </div>
    )
  }

  if (!hasCvAccess) {
    const toLogin = location.pathname === '/interno'
    return (
      <Navigate
        to={toLogin ? '/login' : '/acceso-invalido'}
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  return children
}
