/** Detección de APIs de rendimiento (sin cambiar UI por defecto). */
export function supportsScrollTimeline() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false
  return CSS.supports('animation-timeline: scroll()')
}
