// Contact.jsx - Enhanced with glassmorphism, glass inputs, floating labels, animated orbs, and shine effects
import { useState } from "react"
import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle.jsx"
import { fadeUp, staggerContainer } from "../utils/motionVariants.js"

const FloatingLabelInput = ({ label, name, type = "text", value, onChange, required }) => {
  const [focused, setFocused] = useState(false)
  const isEmpty = !value

  return (
    <motion.div
      variants={fadeUp}
      className="relative"
    >
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all duration-300 focus:shadow-[0_0_0_2px_rgba(139,92,246,0.3)] peer"
      />
      
      {/* Floating label */}
      <motion.label
        htmlFor={name}
        animate={{
          scale: focused || !isEmpty ? 0.85 : 1,
          y: focused || !isEmpty ? -24 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-3 text-slate-400 peer-focus:text-purple-400 transition-colors duration-300 pointer-events-none origin-left"
      >
        {label}
      </motion.label>

      {/* Focus indicator line */}
      <motion.div
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transform-gpu"
      />
    </motion.div>
  )
}

const FloatingLabelTextarea = ({ label, name, value, onChange, required, rows = 5 }) => {
  const [focused, setFocused] = useState(false)
  const isEmpty = !value

  return (
    <motion.div
      variants={fadeUp}
      className="relative"
    >
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all duration-300 focus:shadow-[0_0_0_2px_rgba(139,92,246,0.3)] resize-none peer"
      />
      
      {/* Floating label */}
      <motion.label
        htmlFor={name}
        animate={{
          scale: focused || !isEmpty ? 0.85 : 1,
          y: focused || !isEmpty ? -24 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-3 text-slate-400 peer-focus:text-purple-400 transition-colors duration-300 pointer-events-none origin-left"
      >
        {label}
      </motion.label>

      {/* Focus indicator line */}
      <motion.div
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transform-gpu"
      />
    </motion.div>
  )
}

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setState({ name: "", email: "", message: "" })
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Animated background orbs */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-40 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-[100px] opacity-20"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2], x: [0, -50, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-[100px] opacity-20"
        />
      </div>

      <div className="container relative z-10">
        {/* Section title */}
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's collaborate!"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-12"
        >
          {/* Quick contact button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.a
              href="tel:+917411063990"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 glass-card px-5 py-3 rounded-xl border border-white/20 transition-all duration-300 group"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
              />
              <span className="text-sm font-medium text-white">+91 7411063990</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-slate-400 group-hover:text-purple-400 transition-colors"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Contact form with glassmorphism */}
          <motion.form
            onSubmit={onSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-4 glass-card rounded-2xl p-8 border border-white/10"
          >
            {/* Name input */}
            <FloatingLabelInput
              label="Your Name"
              name="name"
              value={state.name}
              onChange={onChange}
              required
            />

            {/* Email input */}
            <FloatingLabelInput
              label="Your Email"
              name="email"
              type="email"
              value={state.email}
              onChange={onChange}
              required
            />

            {/* Message textarea */}
            <FloatingLabelTextarea
              label="Your Message"
              name="message"
              value={state.message}
              onChange={onChange}
              required
              rows={5}
            />

            {/* Success message */}
            <motion.div
              animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none"
            >
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 text-green-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ✓ Thanks! Your message was captured.
                </motion.div>
              )}
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ pointerEvents: "none" }}
              />

              {/* Glow on hover */}
              <motion.div
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 blur-xl opacity-0"
              />

              {/* Content */}
              <span className="relative flex items-center justify-center gap-2">
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
                >
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                Send Message
              </span>
            </motion.button>

            {/* Footer links */}
            <motion.div
              variants={fadeUp}
              className="pt-4 flex flex-wrap gap-4 text-sm text-slate-400 border-t border-white/10 justify-center"
            >
              <motion.a
                href="https://github.com/KiranKumarPM"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#6366F1", x: 4 }}
                className="transition-colors duration-300 flex items-center gap-1"
              >
                GitHub
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h3.586L9.293 9.293a1 1 0 001.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kiran-kumar-p-m-462350279"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#0077b5", x: 4 }}
                className="transition-colors duration-300 flex items-center gap-1"
              >
                LinkedIn
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h3.586L9.293 9.293a1 1 0 001.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
