// Projects.jsx - Enhanced with glassmorphism, 3D tilt, stagger animations, and modern visual effects
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionTitle from "../components/SectionTitle.jsx"
import { fadeUp, staggerContainer } from "../utils/motionVariants.js"

const projects = [
  {
    title: "Servon – Smart Service Connector",
    description: "₹1 quotation system, OTP login, JWT roles, real-time chat, reviews.",
    tech: ["React", "Node", "MongoDB", "MUI"],
    role: "Full‑stack Developer",
    duration: "2024",
    link: "https://github.com/KiranKumarPM?tab=repositories",
    locked: false
  },
  {
    title: "Privacy-First AI Proctoring",
    description: "Behavioral anomaly detection with ML (Isolation Forest, Autoencoders).",
    tech: ["Python", "ML", "A11y"],
    role: "ML Engineer",
    duration: "2023",
    link: "https://github.com/KiranKumarPM?tab=repositories",
    locked: false
  },
  {
    title: "KrishiMitra",
    description: "AI precision farming with weather & community features.",
    tech: ["ML", "React", "API"],
    role: "Frontend Developer",
    duration: "2023",
    link: "https://github.com/KiranKumarPM?tab=repositories",
    locked: false
  }
]

function TiltCard({ p, index }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`)
  }

  function onLeave() {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')
  }

  return (
    <motion.a
      href={p.locked ? undefined : p.link}
      target={p.locked ? undefined : "_blank"}
      rel={p.locked ? undefined : "noopener noreferrer"}
      onClick={(e) => { if (p.locked) { e.preventDefault(); alert("Login required to view this project.") } }}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -12, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative block rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
    >
      {/* Glass card base */}
      <div className="absolute inset-0 glass-card opacity-100 group-hover:opacity-100" />

      {/* Enhanced gradient glow border on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/30 via-cyan-500/20 to-blue-500/30 blur-xl" />
      </div>

      {/* Content wrapper with 3D tilt */}
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transform, transition: 'transform 0.1s ease' }}
        className="relative p-6 transition-transform will-change-transform"
      >
        {/* Title with icon */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 flex items-center gap-2">
            {p.title}
            {!p.locked && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-4 w-4 text-slate-400 group-hover:text-purple-400 flex-shrink-0"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M21 14v7H3V3h7" />
              </motion.svg>
            )}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm group-hover:text-slate-100 transition-colors duration-300 mb-4">
          {p.description}
        </p>

        {/* Extended details reveal with animation */}
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 6, height: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.6 }}
              className="overflow-hidden"
            >
              <div className="glass-card rounded-xl p-3 space-y-3">
                {/* Role and Duration */}
                <div className="flex flex-wrap gap-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-lg text-xs text-purple-200"
                  >
                    <span className="text-purple-300">Role:</span> {p.role}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-xs text-cyan-200"
                  >
                    <span className="text-cyan-300">Year:</span> {p.duration}
                  </motion.span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex px-2.5 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-slate-200 hover:border-purple-400/60 hover:bg-purple-400/10 transition-all duration-200 cursor-pointer"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Locked overlay */}
      {p.locked && (
        <div className="absolute inset-0 grid place-items-center rounded-2xl backdrop-blur-sm bg-slate-950/50 text-slate-300 font-medium">
          Locked
        </div>
      )}
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="container py-20">
      <SectionTitle
        title="Projects"
        subtitle="Showcasing full-stack, ML, and AI-driven applications"
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {projects.map((p, i) => (
          <TiltCard key={p.title} p={p} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
