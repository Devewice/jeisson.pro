import { memo } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useDocumentVisible } from '../hooks/useDocumentVisible.js'
import { supportsScrollTimeline } from '../utils/perf.js'
import './AmbientBackground.css'

const cssScrollParallax = supportsScrollTimeline()

function AmbientLayers({ scrollMotion = false, scrollProps = null, paused = false }) {
  const className = [
    'ambient',
    cssScrollParallax && !scrollMotion ? 'ambient--css-scroll' : '',
    paused ? 'ambient--paused' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const Root = scrollMotion && scrollProps ? motion.div : 'div'
  const MeshWrap = scrollMotion && scrollProps?.mesh ? motion.div : 'div'
  const OrbA = scrollMotion && scrollProps?.orbA ? motion.div : 'div'
  const OrbB = scrollMotion && scrollProps?.orbB ? motion.div : 'div'

  const rootProps =
    scrollMotion && scrollProps
      ? { className, style: scrollProps.root, 'aria-hidden': true }
      : { className, 'aria-hidden': true }

  return (
    <Root {...rootProps}>
      <div className="ambient__vignette" />
      <MeshWrap
        className="ambient__mesh-wrap"
        {...(scrollMotion && scrollProps?.mesh ? { style: scrollProps.mesh } : {})}
      >
        <div className="ambient__mesh" />
      </MeshWrap>
      <div className="ambient__grid" />
      <div className="ambient__grid ambient__grid--fine" />
      <div className="ambient__scan" />
      <OrbA
        className="ambient__orb ambient__orb--a"
        {...(scrollMotion && scrollProps?.orbA ? { style: scrollProps.orbA } : {})}
      />
      <OrbB
        className="ambient__orb ambient__orb--b"
        {...(scrollMotion && scrollProps?.orbB ? { style: scrollProps.orbB } : {})}
      />
      <div className="ambient__orb ambient__orb--c" />
    </Root>
  )
}

function AmbientBackgroundMotion() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 140])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const meshRotate = useTransform(scrollYProgress, [0, 1], [0, 8])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0.75])
  const visible = useDocumentVisible()

  return (
    <AmbientLayers
      scrollMotion
      paused={!visible}
      scrollProps={{
        root: { opacity },
        mesh: { rotateX: meshRotate },
        orbA: { y: y1, scale: 2 },
        orbB: { y: y2, scale: 2 },
      }}
    />
  )
}

function AmbientBackground() {
  const reduceMotion = useReducedMotion()
  const visible = useDocumentVisible()

  if (reduceMotion) {
    return <AmbientLayers paused={!visible} />
  }

  if (cssScrollParallax) {
    return <AmbientLayers paused={!visible} />
  }

  return <AmbientBackgroundMotion />
}

export default memo(AmbientBackground)
