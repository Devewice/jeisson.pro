import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FOOTER, HERO, HERO_SLIDES, SITE } from '../../data/site.js'
import HeroRotatingLine from './HeroRotatingLine.jsx'
import HeroMatrixName from './HeroMatrixName.jsx'

export default function HeroBanner() {
  return (
    <section className="hero" aria-label="Presentación">
      <div className="hero__layout">
        <div className="hero__content">
          <motion.p
            className="hero__badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="hero__badge-dot" />
            {FOOTER.availability}
          </motion.p>

          <motion.h1
            className="hero__title"
            aria-label={HERO.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <HeroMatrixName givenName={HERO.givenName} familyName={HERO.familyName} />
            <span className="hero__role">{HERO.title}</span>
          </motion.h1>

          <motion.p
            className="hero__focus"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.16, duration: 0.45 }}
          >
            {HERO.focusLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <HeroRotatingLine slides={HERO_SLIDES} />
          </motion.div>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.5 }}
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45 }}
          >
            {HERO.ctas.map(({ label, to, primary }) => (
              <Link
                key={to}
                to={to}
                className={primary ? 'btn btn--primary btn--lg btn--glow' : 'btn btn--soft btn--lg'}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.figure
          className="hero__photo-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <img
            className="hero__photo"
            src={SITE.profileImage}
            alt={SITE.name}
            width={680}
            height={920}
            fetchPriority="high"
          />
        </motion.figure>
      </div>

      <a href="#caso-destacado" className="hero__scroll" aria-label="Ver caso destacado">
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
