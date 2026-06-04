import { useCallback, useEffect, useState } from 'react'
import { createAccessLink, fetchAccessLinks, revokeAccessLink } from '../api/access.js'
import '../styles/access-admin.css'

export default function AccessLinkManager() {
  const [links, setLinks] = useState([])
  const [label, setLabel] = useState('')
  const [variant, setVariant] = useState('')
  const [hours, setHours] = useState(168)
  const [created, setCreated] = useState(null)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    try {
      setLinks(await fetchAccessLinks())
    } catch {
      setLinks([])
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handleCreate(e) {
    e.preventDefault()
    setError('')
    setCreated(null)
    try {
      const link = await createAccessLink({
        label,
        variant: variant || null,
        expiresInHours: Number(hours),
      })
      const fullUrl = link.url.startsWith('http')
        ? link.url
        : `${window.location.origin}${link.url}`
      setCreated({ ...link, url: fullUrl })
      setLabel('')
      load()
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleRevoke(id) {
    await revokeAccessLink(id)
    load()
  }

  function copyUrl(url) {
    navigator.clipboard?.writeText(url)
  }

  return (
    <section className="access-admin">
      <h2>Enlaces de acceso al CV</h2>
      <p>Genera URLs temporales para reclutadores. No aparecen en el menú público.</p>

      <form onSubmit={handleCreate} className="access-admin__form">
        <label>
          Etiqueta (ej. Empresa XYZ)
          <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Opcional" />
        </label>
        <label>
          CV
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            <option value="">Ambos (elegir en hub)</option>
            <option value="dev">Solo desarrollo</option>
            <option value="creativo">Solo creativo</option>
          </select>
        </label>
        <label>
          Validez (horas)
          <input type="number" min={1} max={720} value={hours} onChange={(e) => setHours(e.target.value)} />
        </label>
        <button type="submit" className="btn btn--primary">
          Generar enlace
        </button>
      </form>

      {error && <p className="login-error">{error}</p>}
      {created && (
        <div className="access-admin__created">
          <p>Enlace creado:</p>
          <code>{created.url}</code>
          <button type="button" className="btn" onClick={() => copyUrl(created.url)}>
            Copiar
          </button>
        </div>
      )}

      {links.length > 0 && (
        <ul className="access-admin__list">
          {links.map((l) => (
            <li key={l.id}>
              <div>
                <strong>{l.label || 'Sin etiqueta'}</strong>
                <span>
                  {l.variant || 'ambos'} · expira {new Date(l.expiresAt).toLocaleDateString('es-CO')}
                </span>
              </div>
              <div className="access-admin__actions">
                <button type="button" className="btn" onClick={() => copyUrl(`${window.location.origin}${l.urlPath}`)}>
                  Copiar
                </button>
                <button type="button" className="btn" onClick={() => handleRevoke(l.id)}>
                  Revocar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
