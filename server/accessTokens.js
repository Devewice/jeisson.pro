import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const STORE_PATH = path.join(__dirname, '..', 'data', 'access-tokens.json')

function readStore() {
  try {
    const raw = fs.readFileSync(STORE_PATH, 'utf8')
    return JSON.parse(raw)
  } catch {
    return { tokens: [] }
  }
}

function writeStore(data) {
  fs.mkdirSync(path.dirname(STORE_PATH), { recursive: true })
  fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf8')
}

export function hasCvAccess(session) {
  return Boolean(session?.user || session?.cvAccess?.valid)
}

export function requireOwner(req, res, next) {
  if (req.session?.user) {
    next()
    return
  }
  res.status(401).json({ ok: false, error: 'Solo el administrador' })
}

export function requireCvAuth(req, res, next) {
  if (hasCvAccess(req.session)) {
    next()
    return
  }
  if (req.path.startsWith('/api/')) {
    res.status(401).json({ ok: false, error: 'Sin acceso al CV' })
    return
  }
  res.status(401).send('Enlace de acceso inválido o expirado.')
}

function isTokenActive(entry, now = Date.now()) {
  if (entry.unlimited || entry.expiresAt == null) return true
  return entry.expiresAt > now
}

export function createAccessToken({
  label = '',
  variant = null,
  expiresInHours = 168,
  unlimited = false,
}) {
  const token = crypto.randomBytes(24).toString('base64url')
  const noExpiry = Boolean(unlimited)
  const hours = Number(expiresInHours)
  const expiresAt = noExpiry
    ? null
    : Date.now() + (Number.isFinite(hours) && hours > 0 ? hours : 168) * 60 * 60 * 1000
  const entry = {
    id: crypto.randomUUID(),
    token,
    label,
    variant,
    unlimited: noExpiry,
    expiresAt,
    createdAt: Date.now(),
    uses: 0,
  }
  const store = readStore()
  store.tokens.push(entry)
  writeStore(store)
  return entry
}

export function redeemAccessToken(token) {
  const store = readStore()
  const entry = store.tokens.find((t) => t.token === token)
  if (!entry) return null
  if (!isTokenActive(entry)) return null
  entry.uses += 1
  entry.lastUsedAt = Date.now()
  writeStore(store)
  return entry
}

export function listAccessTokens() {
  const store = readStore()
  const now = Date.now()
  return store.tokens
    .filter((t) => isTokenActive(t, now))
    .map(({ token, label, variant, expiresAt, createdAt, uses, id, unlimited }) => ({
      id,
      label,
      variant,
      unlimited: Boolean(unlimited || expiresAt == null),
      expiresAt,
      createdAt,
      uses,
      urlPath: `/acceso/${token}`,
    }))
}

export function revokeAccessToken(id) {
  const store = readStore()
  const before = store.tokens.length
  store.tokens = store.tokens.filter((t) => t.id !== id)
  writeStore(store)
  return store.tokens.length < before
}
