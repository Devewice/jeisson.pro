import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  as = 'div',
  ...props
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px', amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      layout={false}
      variants={defaultVariants}
      {...props}
    >
      {children}
    </Component>
  )
}
