import { motion } from 'framer-motion'
import { BENTO_STACK } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'

const sizeClass = { lg: 'bento__cell--lg', md: 'bento__cell--md', sm: 'bento__cell--sm' }

export default function StackBento() {
  return (
    <Section
      id="stack"
      index="04"
      eyebrow="Stack & herramientas"
      title="Lo que uso para llevar ideas a producción"
      subtitle="Desde el CMS que escala hasta la pieza editorial — mismo criterio de calidad."
      variant="alt"
    >
      <div className="bento">
        {BENTO_STACK.map((item, i) => (
          <AnimateIn key={item.name} delay={i * 0.04}>
            <motion.article
              className={`bento__cell ${sizeClass[item.size]}`}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <span className="bento__zone">{item.zone}</span>
              <strong>{item.name}</strong>
            </motion.article>
          </AnimateIn>
        ))}
      </div>
    </Section>
  )
}
