import { lazy, Suspense } from 'react'
import { FEATURED_PROJECT_KEYS, HOME_COPY, PROJECTS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import { useInViewOnce } from '../../hooks/useInViewOnce.js'

const FeaturedSwiper = lazy(() => import('./FeaturedSwiper.jsx'))

const featured = FEATURED_PROJECT_KEYS.map((key) => PROJECTS.find((p) => p.title === key)).filter(
  Boolean
)

export default function FeaturedProjects() {
  const [wrapRef, swiperReady] = useInViewOnce({ rootMargin: '160px' })

  return (
    <section className="section-block" id="proyectos-destacados">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Portafolio</p>
        <h2 className="section-title">Casos recientes</h2>
        <p className="section-sub">{HOME_COPY.projects.sub}</p>
      </AnimateIn>

      <AnimateIn delay={0.08}>
        <div ref={wrapRef} className="featured-swiper-mount">
          {swiperReady ? (
            <Suspense fallback={<div className="featured-swiper-placeholder" aria-hidden="true" />}>
              <FeaturedSwiper featured={featured} />
            </Suspense>
          ) : (
            <div className="featured-swiper-placeholder" aria-hidden="true" />
          )}
        </div>
      </AnimateIn>
    </section>
  )
}
