import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.div className="scroll-progress__bar" style={{ scaleX }} />
    </div>
  )
}
