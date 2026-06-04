import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'

/** Carga solo animaciones DOM de Motion (~menor bundle, misma apariencia). */
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
