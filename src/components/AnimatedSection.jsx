import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ delay, duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
