import { memo } from 'react'
import { useDocumentVisible } from '../hooks/useDocumentVisible.js'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import './AmbientBackground.css'

/**
 * Fondo liviano: gradientes + rejilla + haz terminal.
 * Sin blur, sin 3D, sin listeners de scroll (mejor GPU).
 */
function AmbientBackground() {
  const visible = useDocumentVisible()
  const reducedMotion = usePrefersReducedMotion()

  const className = [
    'ambient',
    !visible ? 'ambient--paused' : '',
    reducedMotion ? 'ambient--static' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className} aria-hidden="true">
      <div className="ambient__glow" />
      <div className="ambient__grid">
        <div className="ambient__grid-shift" />
      </div>
      <div className="ambient__horizon" />
      {!reducedMotion && <div className="ambient__beam" />}
      <div className="ambient__vignette" />
    </div>
  )
}

export default memo(AmbientBackground)
