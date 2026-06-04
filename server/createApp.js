import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import {
  createAccessToken,
  listAccessTokens,
  redeemAccessToken,
  requireCvAuth,
  requireOwner,
  revokeAccessToken,
} from './accessTokens.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function getCredentials() {
  const username = process.env.AUTH_USERNAME || 'admin'
  const password = process.env.AUTH_PASSWORD || 'cambiar-en-produccion'
  return { username, password }
}

function requireAuth(req, res, next) {
  if (req.session?.user) {
    next()
    return
  }
  if (req.path.startsWith('/api/')) {
    res.status(401).json({ ok: false, error: 'No autenticado' })
    return
  }
  res.status(401).send('No autorizado')
}

export function createApp({ distPath } = {}) {
  const app = express()
  const isProd = process.env.NODE_ENV === 'production'
  const dist = distPath || path.join(root, 'dist')

  app.use(cookieParser())
  app.use(express.json())

  app.use(
    session({
      name: 'jeisson.sid',
      secret: process.env.SESSION_SECRET || 'dev-secret-cambiar-en-produccion',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      },
    })
  )

  app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body ?? {}
    const creds = getCredentials()

    if (username !== creds.username || password !== creds.password) {
      res.status(401).json({ ok: false, error: 'Usuario o contraseña incorrectos' })
      return
    }

    req.session.user = { username: creds.username }
    res.json({ ok: true, user: req.session.user })
  })

  app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ ok: false, error: 'No se pudo cerrar sesión' })
        return
      }
      res.clearCookie('jeisson.sid')
      res.json({ ok: true })
    })
  })

  app.get('/api/auth/me', (req, res) => {
    if (!req.session?.user) {
      res.status(401).json({ ok: false })
      return
    }
    res.json({ ok: true, user: req.session.user })
  })

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'jeisson.pro' })
  })

  app.get('/api/auth/session', (req, res) => {
    res.json({
      ok: true,
      owner: Boolean(req.session?.user),
      cvAccess: req.session?.cvAccess ?? null,
      canManageLinks: Boolean(req.session?.user),
    })
  })

  app.get('/api/acceso/:token', (req, res) => {
    const entry = redeemAccessToken(req.params.token)
    if (!entry) {
      res.status(404).json({ ok: false, error: 'Enlace inválido o expirado' })
      return
    }
    req.session.cvAccess = {
      valid: true,
      variant: entry.variant,
      label: entry.label,
      tokenId: entry.id,
    }
    res.json({
      ok: true,
      variant: entry.variant,
      redirect: entry.variant === 'dev' ? '/cv/dev' : entry.variant === 'creativo' ? '/cv/creativo' : '/interno',
    })
  })

  app.get('/api/access-links', requireOwner, (_req, res) => {
    res.json({ ok: true, links: listAccessTokens() })
  })

  app.post('/api/access-links', requireOwner, (req, res) => {
    const { label = '', variant = null, expiresInHours = 168 } = req.body ?? {}
    const entry = createAccessToken({ label, variant, expiresInHours })
    const base = process.env.PUBLIC_URL || ''
    res.json({
      ok: true,
      link: {
        id: entry.id,
        url: `${base}/acceso/${entry.token}`,
        variant: entry.variant,
        expiresAt: entry.expiresAt,
        label: entry.label,
      },
    })
  })

  app.delete('/api/access-links/:id', requireOwner, (req, res) => {
    const removed = revokeAccessToken(req.params.id)
    if (!removed) {
      res.status(404).json({ ok: false, error: 'No encontrado' })
      return
    }
    res.json({ ok: true })
  })

  app.use('/cv-dev', requireCvAuth, express.static(path.join(root, 'cv-dev')))
  app.use('/cv-creativo', requireCvAuth, express.static(path.join(root, 'cv-creativo')))

  if (distPath !== null) {
    app.use(express.static(dist))
    app.get('/{*splat}', (_req, res) => {
      res.sendFile(path.join(dist, 'index.html'))
    })
  }

  return app
}

export function createDevApiApp() {
  return createApp({ distPath: null })
}
