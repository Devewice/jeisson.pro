import { useEffect, useRef, useState } from 'react'

/**
 * Dispara una vez cuando el nodo entra al viewport (con rootMargin para precargar).
 */
export function useInViewOnce({ rootMargin = '120px', threshold = 0 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, rootMargin, threshold])

  return [ref, inView]
}
