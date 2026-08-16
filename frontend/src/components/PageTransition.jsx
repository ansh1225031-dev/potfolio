import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
