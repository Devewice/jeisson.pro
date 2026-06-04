import { motion } from 'framer-motion'

export default function HeroSlideContent({ slide, isActive }) {
  return (
    <motion.div
      className="hero-rotator__slide"
      initial={false}
      animate={
        isActive
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: 40, filter: 'blur(12px)' }
      }
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="hero-rotator__headline">{slide.headline}</p>
      <p className="hero-rotator__sub">{slide.sub}</p>
    </motion.div>
  )
}
