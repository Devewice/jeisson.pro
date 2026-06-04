import { useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import '../App.css'

const CV_CONFIG = {
  dev: {
    title: 'CV — Desarrollador Web Full Stack',
    src: '/cv-dev/index.html',
  },
  creativo: {
    title: 'CV — Diseño multimedial',
    src: '/cv-creativo/index.html',
  },
}

export default function CvViewer({ variant }) {
  const { logout, cvAccess, owner } = useAuth()
  const iframeRef = useRef(null)
  const config = CV_CONFIG[variant]

  const locked = cvAccess?.variant && cvAccess.variant !== variant

  if (!config) {
    return null
  }

  if (locked) {
    return <Navigate to="/interno" replace />
  }

  function printPdf() {
    const win = iframeRef.current?.contentWindow
    if (win) {
      win.focus()
      win.print()
    }
  }

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
          <button type="button" className="btn" onClick={printPdf}>
            Guardar PDF
          </button>
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
        ref={iframeRef}
        className="cv-viewer-frame"
        src={config.src}
        title={config.title}
      />
    </div>
  )
}
