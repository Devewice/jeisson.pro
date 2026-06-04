import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const INTERVAL_MS = 4800

export default function HeroRotatingLine({ slides }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [slides.length])

  const slide = slides[index]

  return (
    <div className="hero-rotate" role="status" aria-live="polite">
      <div className="hero-rotate__track">
        {slides.map((_, i) => (
          <button
            key={slides[i].headline}
            type="button"
            className={`hero-rotate__pip ${i === index ? 'hero-rotate__pip--on' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="hero-rotate__text">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.headline}
            className="hero-rotate__slide"
            initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-rotate__headline">{slide.headline}</span>
            <span className="hero-rotate__sub">{slide.sub}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className="hero-rotate__progress"
        style={{ '--rotate-duration': `${INTERVAL_MS}ms` }}
        key={index}
      >
        <span className="hero-rotate__progress-bar" />
      </div>
    </div>
  )
}
