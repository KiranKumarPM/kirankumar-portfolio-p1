// Hero.jsx - Enhanced with animated orbs, gradient text, shine effects, and scroll indicator
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../utils/motionVariants.js"

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const staggerContainerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full blur-[120px] opacity-30"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-20 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-[120px] opacity-30"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariant}
        className="relative container flex min-h-[70vh] flex-col items-start justify-center py-20"
      >
        {/* Name heading with gradient */}
        <motion.h1
          custom={0}
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Kiran Kumar PM
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={1}
          variants={textVariants}
          className="mt-4 text-xl md:text-2xl text-slate-200 font-medium"
        >
          Computer Science Engineer | AI Innovator
        </motion.p>

        {/* Interactive contacts row */}
        <motion.div
          custom={2}
          variants={textVariants}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-start"
        >
          {/* Phone contact */}
          <motion.a
            href="tel:+917411063990"
            className="group relative inline-flex items-center gap-2 rounded-lg px-4 py-3"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glow background on hover */}
            <motion.span
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-0 -z-10 rounded-lg"
              aria-hidden
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/25 to-purple-500/25 ring-1 ring-blue-500/40 blur-lg" />
            </motion.span>

            {/* Glass card base */}
            <div className="absolute inset-0 glass-card rounded-lg opacity-100 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-purple-400 group-hover:text-cyan-400 transition-colors"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.69l1.5 4.49a1 1 0 01-.5 1.2l-2.26 1.13a11.05 11.05 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.49 1.5a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
              </svg>

              {/* Phone text with spring animation */}
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                className="text-slate-100 text-base font-medium"
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                +91 7411063990
              </motion.span>
            </div>
          </motion.a>

          {/* Email contact */}
          <motion.a
            href="mailto:kkpm3020@gmail.com"
            className="group relative inline-flex items-center gap-2 rounded-lg px-4 py-3"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glow background on hover */}
            <motion.span
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-0 -z-10 rounded-lg"
              aria-hidden
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/25 to-teal-500/25 ring-1 ring-emerald-500/40 blur-lg" />
            </motion.span>

            {/* Glass card base */}
            <div className="absolute inset-0 glass-card rounded-lg opacity-100 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-cyan-400 group-hover:text-purple-400 transition-colors"
              >
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>

              {/* Email text with spring animation */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="text-slate-100 text-base font-medium"
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                kkpm3020@gmail.com
              </motion.span>
            </div>
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={textVariants}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          {/* Primary button with shine effect */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ pointerEvents: "none" }}
            />

            {/* Glow on hover */}
            <motion.div
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 blur-xl opacity-0"
            />

            {/* Content */}
            <span className="relative flex items-center gap-2">
              Explore Projects
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </span>
          </motion.a>

          {/* Secondary button with glass style */}
          <motion.a
            href="#social"
            whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white border border-white/20 glass-card overflow-hidden transition-all duration-300"
          >
            {/* Glow on hover */}
            <motion.div
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg"
            />

            {/* Content */}
            <span className="relative flex items-center gap-2">
              Connect With Me
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                animate={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </motion.svg>
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - bouncing chevron */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-slate-300 opacity-60"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </section>
  )
}
