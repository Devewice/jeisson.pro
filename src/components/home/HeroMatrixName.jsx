import { useEffect, useMemo, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'

const MATRIX_CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

function randomMatrixChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
}

function letterIndices(text) {
  return [...text].map((ch, i) => (ch !== ' ' ? i : -1)).filter((i) => i >= 0)
}

function pickSome(indices, min = 1, max = 3) {
  if (!indices.length) return []
  const count = Math.min(indices.length, min + Math.floor(Math.random() * (max - min + 1)))
  const pool = [...indices]
  const picked = []
  while (picked.length < count && pool.length) {
    const at = Math.floor(Math.random() * pool.length)
    picked.push(pool.splice(at, 1)[0])
  }
  return picked
}

function MatrixLine({ text, className }) {
  const reducedMotion = usePrefersReducedMotion()
  const chars = useMemo(() => [...text], [text])
  const indices = useMemo(() => letterIndices(text), [text])
  const [glitchMap, setGlitchMap] = useState({})

  useEffect(() => {
    if (reducedMotion) return undefined

    const timeouts = []
    let cancelled = false

    const schedule = () => {
      const delay = 2200 + Math.random() * 2800
      const waitId = window.setTimeout(() => {
        if (cancelled) return
        const picked = pickSome(indices, 1, 3)
        if (picked.length) {
          const next = {}
          for (const i of picked) next[i] = randomMatrixChar()
          setGlitchMap(next)
          const clearId = window.setTimeout(() => {
            if (!cancelled) setGlitchMap({})
          }, 320 + Math.random() * 380)
          timeouts.push(clearId)
        }
        schedule()
      }, delay)
      timeouts.push(waitId)
    }

    schedule()
    return () => {
      cancelled = true
      timeouts.forEach((id) => window.clearTimeout(id))
    }
  }, [indices, reducedMotion])

  return (
    <span className={className}>
      {chars.map((char, i) => {
        const glitch = glitchMap[i]
        const isGlitch = glitch !== undefined
        return (
          <span
            key={`${char}-${i}`}
            className={isGlitch ? 'hero__char hero__char--matrix' : 'hero__char'}
            aria-hidden={isGlitch ? true : undefined}
          >
            {isGlitch ? glitch : char}
          </span>
        )
      })}
    </span>
  )
}

export default function HeroMatrixName({ givenName, familyName }) {
  return (
    <span className="hero__name">
      <MatrixLine text={givenName} className="hero__name-line hero__name-line--given" />
      <span className="hero__name-gap" aria-hidden="true" />
      <MatrixLine text={familyName} className="hero__name-line hero__name-line--family" />
    </span>
  )
}
