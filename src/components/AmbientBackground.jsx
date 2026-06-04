import { memo } from 'react'
import { useDocumentVisible } from '../hooks/useDocumentVisible.js'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import './AmbientBackground.css'

function AmbientBackground() {
  const visible = useDocumentVisible()
  const reducedMotion = usePrefersReducedMotion()
  const still = reducedMotion || !visible

  return (
    <div className={`ambient${still ? ' ambient--still' : ''}`} aria-hidden="true">
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
