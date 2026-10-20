/**
 * Genera los PDF de server/cv-pdfs/ con el Chrome local.
 * Requiere la API en marcha (npm run dev) y AUTH_* en .env.
 * Esos archivos son los que se descargan en un hosting sin Chrome.
 */
import 'dotenv/config'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { cvPdfFilename, generateCvPdf } from '../server/cvPdf.js'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'server', 'cv-pdfs')
const baseUrl = process.env.PDF_BASE_URL || `http://localhost:${process.env.API_PORT || 3001}`

const username = process.env.AUTH_USERNAME
const password = process.env.AUTH_PASSWORD
if (!username || !password) {
  console.error('Faltan AUTH_USERNAME y AUTH_PASSWORD en .env')
  process.exit(1)
}

const login = await fetch(`${baseUrl}/api/auth/login`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ username, password }),
})

if (!login.ok) {
  console.error(`No se pudo entrar a la API (${login.status}). ¿Está npm run dev en marcha?`)
  process.exit(1)
}

const setCookies = typeof login.headers.getSetCookie === 'function' ? login.headers.getSetCookie() : []
const cookieHeader = setCookies.map((entry) => entry.split(';')[0]).join('; ')
if (!cookieHeader) {
  console.error('La API no devolvió cookie de sesión')
  process.exit(1)
}

mkdirSync(outDir, { recursive: true })

const jobs = [
  { variant: 'dev', ats: false },
  { variant: 'dev', ats: true },
  { variant: 'creativo', ats: false },
]

for (const job of jobs) {
  const buffer = await generateCvPdf({ ...job, cookieHeader, baseUrl })
  const name = cvPdfFilename(job.variant, job.ats)
  const file = path.join(outDir, name)
  writeFileSync(file, buffer)
  const header = buffer.subarray(0, 5).toString('utf8')
  console.log(`${name}  ${buffer.length} bytes  ${header}`)
}
