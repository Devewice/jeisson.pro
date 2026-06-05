import { memo } from 'react'
import { AMBIENT_MODE } from '../config/perfFlags.js'
import { useDocumentVisible } from '../hooks/useDocumentVisible.js'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import './AmbientBackground.css'

function AmbientBackground() {
  const visible = useDocumentVisible()
  const reducedMotion = usePrefersReducedMotion()
  const mode = reducedMotion ? 'static' : AMBIENT_MODE
  const still = mode === 'static' || !visible

  return (
    <div
      className={[
        'ambient',
        still ? 'ambient--still' : '',
        mode === 'lite' ? 'ambient--lite' : '',
        mode === 'static' ? 'ambient--static' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <div className="ambient__blobs">
        <div className="ambient__blob ambient__blob--primary" />
        <div className="ambient__blob ambient__blob--secondary" />
        <div className="ambient__blob ambient__blob--tertiary" />
      </div>
      <div className="ambient__grain" />
      <div className="ambient__chrome">
        <span className="ambient__chrome-shine" />
      </div>
      <div className="ambient__vignette" />
    </div>
  )
}

export default memo(AmbientBackground)
