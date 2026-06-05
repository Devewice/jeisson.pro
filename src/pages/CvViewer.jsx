import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { downloadCvPdf } from '../utils/cvPdfExport.js'
import '../App.css'

const CV_CONFIG = {
  dev: {
    title: 'CV — Desarrollador full stack',
    src: '/cv-dev/index.html',
    pdfName: 'Jeisson-Riveros-CV-desarrollo.pdf',
    atsPdfName: 'Jeisson-Riveros-CV-ATS.pdf',
  },
  creativo: {
    title: 'CV — Diseño multimedial (complemento)',
    src: '/cv-creativo/index.html',
    pdfName: 'Jeisson-Riveros-CV-creativo.pdf',
  },
}

export default function CvViewer({ variant }) {
  const { logout, cvAccess, owner } = useAuth()
  const [exporting, setExporting] = useState(null)
  const config = CV_CONFIG[variant]

  const locked = cvAccess?.variant && cvAccess.variant !== variant

  if (!config) {
    return null
  }

  if (locked) {
    return <Navigate to="/interno" replace />
  }

  async function runDownload(key, options, filename) {
    if (exporting) return
    setExporting(key)
    try {
      await downloadCvPdf({ variant, filename, ...options })
    } catch (err) {
      console.error(err)
      globalThis.alert(
        err?.message ||
          'No se pudo generar el PDF. Comprueba la sesión y vuelve a intentarlo.',
      )
    } finally {
      setExporting(null)
    }
  }

  function downloadPdf() {
    runDownload('pdf', { ats: false }, config.pdfName)
  }

  function downloadAtsPdf() {
    runDownload('ats', { ats: true }, config.atsPdfName)
  }

  const busy = exporting !== null

  return (
    <div className="cv-viewer">
      <div className="cv-viewer-toolbar">
        <h1>{config.title}</h1>
        <div className="cv-viewer-actions">
          {(owner || !cvAccess?.variant) && (
            <Link to="/interno" className="btn">
              ← Volver
            </Link>
          )}
          <button
            type="button"
            className="btn"
            onClick={downloadPdf}
            disabled={busy}
          >
            {exporting === 'pdf' ? 'Generando…' : 'Descargar PDF'}
          </button>
          {variant === 'dev' && (
            <button
              type="button"
              className="btn btn--soft"
              onClick={downloadAtsPdf}
              disabled={busy}
              title="Una columna, sin foto ni redes secundarias; ideal para portales ATS"
            >
              {exporting === 'ats' ? 'Generando…' : 'Descargar PDF ATS'}
            </button>
          )}
          <button type="button" className="btn" onClick={() => logout()}>
            Salir
          </button>
          <a
            href={config.src}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Pestaña nueva
          </a>
        </div>
      </div>
      <iframe
        className="cv-viewer-frame"
        src={config.src}
        title={config.title}
      />
    </div>
  )
}
