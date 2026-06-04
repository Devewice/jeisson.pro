import { Link } from 'react-router-dom'
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
  const config = CV_CONFIG[variant]

  if (!config) {
    return null
  }

  return (
    <div className="cv-viewer">
      <div className="cv-viewer-toolbar">
        <h1>{config.title}</h1>
        <div className="cv-viewer-actions">
          <Link to="/" className="btn">
            ← Inicio
          </Link>
          <a
            href={config.src}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Abrir en pestaña nueva
          </a>
        </div>
      </div>
      <iframe className="cv-viewer-frame" src={config.src} title={config.title} />
    </div>
  )
}
