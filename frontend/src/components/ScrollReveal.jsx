import { motion } from 'framer-motion';

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        ...scrollRevealVariants,
        visible: {
          ...scrollRevealVariants.visible,
          transition: {
            ...scrollRevealVariants.visible.transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
