import { existsSync } from 'node:fs'
import puppeteer from 'puppeteer-core'

const BROWSER_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

const PDF_MARGIN = { top: 0, right: 0, bottom: 0, left: 0 }

function resolveBrowserExecutable() {
  return BROWSER_CANDIDATES.find((p) => existsSync(p)) ?? null
}

/** URL del propio servidor Express (mismo host/puerto que atendió /api/cv/pdf). */
export function getCvPdfBaseUrl(req) {
  if (process.env.PDF_BASE_URL) return process.env.PDF_BASE_URL.replace(/\/$/, '')
  const host = req.get('host')
  const proto = req.protocol || 'http'
  return `${proto}://${host}`
}

export function cvPdfFilename(variant, ats) {
  if (ats) return 'Jeisson-Riveros-CV-ATS.pdf'
  if (variant === 'creativo') return 'Jeisson-Riveros-CV-creativo.pdf'
  return 'Jeisson-Riveros-CV-desarrollo.pdf'
}

function getPdfExportCss(variant, ats) {
  const base = `
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      overflow: visible !important;
    }
    .ats-print-hint { display: none !important; }
    .page {
      margin: 0 !important;
      box-shadow: none !important;
      min-height: auto !important;
      overflow: visible !important;
    }
  `

  if (ats) {
    return `${base}
      html.ats-print .page {
        max-width: none !important;
        width: 100% !important;
      }
      html.ats-print .sidebar,
      html.ats-print .main {
        padding-left: 1.25rem !important;
        padding-right: 1.25rem !important;
      }
      html.ats-print .sidebar { padding-top: 1.25rem !important; padding-bottom: 0 !important; }
      html.ats-print .main { padding-top: 0.75rem !important; padding-bottom: 1.25rem !important; }
    `
  }

  if (variant === 'creativo') {
    return `${base}
      body { background: #fffdf9 !important; }
      .page {
        display: grid !important;
        grid-template-columns: 290px 1fr !important;
        width: 1080px !important;
        max-width: 1080px !important;
        border-radius: 0 !important;
      }
      .cards { grid-template-columns: repeat(2, 1fr) !important; }
      .interest-grid { grid-template-columns: repeat(2, 1fr) !important; }
    `
  }

  return `${base}
    body { background: #0a0f0d !important; }
    .page {
      display: grid !important;
      grid-template-columns: 300px 1fr !important;
      width: 1100px !important;
      max-width: 1100px !important;
      border-radius: 0 !important;
    }
  `
}

async function measureDocument(page) {
  return page.evaluate(() => {
    const el = document.querySelector('.page')
    if (!el) return { width: 816, height: 1056 }
    const width = Math.ceil(Math.max(el.scrollWidth, el.offsetWidth, el.getBoundingClientRect().width))
    const height = Math.ceil(
      Math.max(
        el.scrollHeight,
        el.offsetHeight,
        el.getBoundingClientRect().height,
        document.body.scrollHeight,
      ),
    )
    return { width, height }
  })
}

export async function generateCvPdf({ variant, ats, cookieHeader, baseUrl }) {
  const executablePath = resolveBrowserExecutable()
  if (!executablePath) {
    const err = new Error(
      'Chrome o Edge no encontrado. Instala uno de ellos o define PUPPETEER_EXECUTABLE_PATH en .env',
    )
    err.code = 'CHROME_NOT_FOUND'
    throw err
  }

  const htmlPath =
    variant === 'creativo' ? '/cv-creativo/index.html' : '/cv-dev/index.html'
  const url = `${baseUrl}${htmlPath}${ats ? '?ats=1' : '?pdf=1'}`

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    const viewportWidth = ats ? 920 : variant === 'creativo' ? 1080 : 1100
    await page.setViewport({
      width: viewportWidth,
      height: 1200,
      deviceScaleFactor: 1,
    })
    await page.emulateMediaType('screen')

    if (cookieHeader) {
      await page.setExtraHTTPHeaders({ Cookie: cookieHeader })
    }

    const response = await page.goto(url, { waitUntil: 'load', timeout: 45000 })
    const status = response?.status() ?? 0

    if (status === 401 || status === 403) {
      const err = new Error(
        'Sesión caducada o sin permiso. Cierra sesión, vuelve a entrar e intenta de nuevo.',
      )
      err.code = 'CV_AUTH'
      throw err
    }

    if (status >= 400) {
      throw new Error(`No se pudo abrir el CV (HTTP ${status})`)
    }

    await page.waitForSelector('.page', { timeout: 15000 })
    await page.evaluate(() => document.fonts?.ready)
    await new Promise((r) => setTimeout(r, 400))

    await page.addStyleTag({ content: getPdfExportCss(variant, ats) })

    const { width, height } = await measureDocument(page)

    return await page.pdf({
      printBackground: true,
      margin: PDF_MARGIN,
      width: `${width}px`,
      height: `${height}px`,
    })
  } finally {
    await browser.close()
  }
}
