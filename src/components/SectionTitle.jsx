import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative inline-block mb-2">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
      />
    </div>

    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-slate-400 text-lg mt-4"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionTitle;
