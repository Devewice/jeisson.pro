export async function redeemAccessToken(token) {
  const res = await fetch(`/api/acceso/${encodeURIComponent(token)}`, {
    credentials: 'include',
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Enlace no válido')
  return data
}

export async function fetchAccessLinks() {
  const res = await fetch('/api/access-links', { credentials: 'include' })
  if (!res.ok) throw new Error('No autorizado')
  const data = await res.json()
  return data.links
}

export async function createAccessLink(body) {
  const res = await fetch('/api/access-links', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Error al crear enlace')
  return data.link
}

export async function revokeAccessLink(id) {
  await fetch(`/api/access-links/${id}`, { method: 'DELETE', credentials: 'include' })
}
