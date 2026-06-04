import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { redeemAccessToken } from '../api/access.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function AccessEntry() {
  const { token } = useParams()
  const navigate = useNavigate()
  const { refresh } = useAuth()
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    async function run() {
      try {
        const data = await redeemAccessToken(token)
        await refresh()
        if (!cancelled) navigate(data.redirect || '/interno', { replace: true })
      } catch (e) {
        if (!cancelled) setError(e.message)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [token, navigate, refresh])

  return (
    <div className="page-loading access-entry">
      {error ? (
        <>
          <p>{error}</p>
          <a href="/">Volver al inicio</a>
        </>
      ) : (
        <p>Validando enlace de acceso…</p>
      )}
    </div>
  )
}
