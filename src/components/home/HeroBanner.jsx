import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules'
import { motion } from 'framer-motion'
import { HERO, HERO_SLIDES, SITE } from '../../data/site.js'
import HeroSlideContent from './HeroSlideContent.jsx'
import 'swiper/css'
import 'swiper/css/effect-creative'

const AUTOPLAY_MS = 5200

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const swiperRef = useRef(null)

  const onSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex)
    setProgressKey((k) => k + 1)
  }, [])

  return (
    <section className="hero-v2" aria-label="Presentación">
      <div className="hero-v2__layout">
        <div className="hero-v2__intro">
          <motion.p
            className="hero-badge"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-badge-dot" />
            Disponible · {SITE.location}
          </motion.p>

          <motion.p
            className="hero-v2__label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {HERO.title}
          </motion.p>

          <motion.h1
            className="hero-v2__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            {HERO.name.split(' ').map((word, i) => (
              <span key={word} className={i === 0 ? 'hero-v2__name-accent' : undefined}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-v2__lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {HERO.ctas.map(({ label, to, primary }) => (
              <Link
                key={to}
                to={to}
                className={primary ? 'btn btn--primary btn--lg btn--glow' : 'btn btn--lg'}
              >
                {label}
              </Link>
            ))}
            <a href={`mailto:${SITE.email}`} className="btn btn--lg btn--ghost">
              {SITE.email}
            </a>
          </motion.div>
        </div>

        <div className="hero-v2__stage">
          <div className="hero-v2__stage-label">
            <span>// focus</span>
            <span className="hero-v2__counter">
              {String(activeIndex + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
          </div>

          <div className="hero-rotator">
            <Swiper
              modules={[Autoplay, EffectCreative]}
              effect="creative"
              creativeEffect={{
                prev: { translate: [0, 0, -80], opacity: 0 },
                next: { translate: ['120%', 0, 0], opacity: 0 },
              }}
              speed={800}
              autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
              loop
              className="hero-rotator__swiper"
              onSwiper={(s) => {
                swiperRef.current = s
              }}
              onSlideChange={onSlideChange}
            >
              {HERO_SLIDES.map((slide, index) => (
                <SwiperSlide key={slide.headline}>
                  <HeroSlideContent slide={slide} isActive={activeIndex === index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div
            key={progressKey}
            className="hero-v2__progress"
            style={{ '--hero-progress-duration': `${AUTOPLAY_MS}ms` }}
          >
            <span className="hero-v2__progress-bar" />
          </div>

          <div className="hero-v2__dots">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.headline}
                type="button"
                className={`hero-slider-dot ${i === activeIndex ? 'hero-slider-dot--active' : ''}`}
                aria-label={slide.headline}
                onClick={() => swiperRef.current?.slideToLoop(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <a href="#contenido" className="hero-scroll hero-scroll--v2" aria-label="Ir al contenido">
        <span className="hero-scroll-line" />
        Explorar
      </a>
    </section>
  )
}
