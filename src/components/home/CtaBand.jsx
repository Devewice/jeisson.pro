import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SITE } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <AnimateIn>
        <motion.div
          className="cta-band__inner"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>
            Cuéntame la idea — desarrollo, diseño o ambos. Respondo desde {SITE.email} con propuesta
            y siguientes pasos.
          </p>
          <div className="cta-band__actions">
            <Link to="/contacto" className="btn btn--primary btn--lg btn--glow">
              Ir a contacto
            </Link>
            <Link to="/sobre-mi" className="btn btn--lg">
              Sobre mí
            </Link>
          </div>
        </motion.div>
      </AnimateIn>
    </section>
  )
}
