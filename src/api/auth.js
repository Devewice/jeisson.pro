export async function fetchSession() {
  const res = await fetch('/api/auth/session', { credentials: 'include' })
  if (!res.ok) {
    return { owner: false, cvAccess: null, canManageLinks: false }
  }
  return res.json()
}

export async function fetchMe() {
  const res = await fetch('/api/auth/me', { credentials: 'include' })
  if (!res.ok) return null
  const data = await res.json()
  return data.user ?? null
}

export async function login(username, password) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Error al iniciar sesión')
  return data.user
}

export async function logout() {
  await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include',
  })
}
