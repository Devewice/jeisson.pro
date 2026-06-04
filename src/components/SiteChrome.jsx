import { motion, useScroll, useTransform } from 'framer-motion'

export default function SiteChrome() {
  const { scrollYProgress } = useScroll()
  const orbY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0.9, 0.35])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <motion.div className="scroll-progress__bar" style={{ scaleX: scrollYProgress }} />
      </div>
      <div className="site-chrome" aria-hidden="true">
        <motion.div className="site-chrome__grid" style={{ opacity: gridOpacity }} />
        <motion.div className="site-chrome__orb site-chrome__orb--1" style={{ y: orbY }} />
        <motion.div className="site-chrome__orb site-chrome__orb--2" style={{ y: orbY }} />
        <div className="site-chrome__noise" />
      </div>
    </>
  )
}
