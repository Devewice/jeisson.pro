import { motion, useScroll, useTransform } from 'framer-motion'
import './AmbientBackground.css'

export default function AmbientBackground() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 140])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const meshRotate = useTransform(scrollYProgress, [0, 1], [0, 8])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0.75])

  return (
    <motion.div className="ambient" style={{ opacity }} aria-hidden="true">
      <div className="ambient__vignette" />
      <motion.div className="ambient__mesh-wrap" style={{ rotateX: meshRotate }}>
        <div className="ambient__mesh" />
      </motion.div>
      <div className="ambient__grid" />
      <div className="ambient__grid ambient__grid--fine" />
      <div className="ambient__scan" />
      <motion.div className="ambient__orb ambient__orb--a" style={{ y: y1 }} />
      <motion.div className="ambient__orb ambient__orb--b" style={{ y: y2 }} />
      <motion.div className="ambient__orb ambient__orb--c" />
    </motion.div>
  )
}
