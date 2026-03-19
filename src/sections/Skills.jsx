// Skills.jsx - Enhanced with glassmorphism, 3D tilt, gradient glows, and smooth stagger animations
import { motion } from "framer-motion"
import { useState } from "react"
import SectionTitle from "../components/SectionTitle.jsx"
import { scaleIn, staggerContainer } from "../utils/motionVariants.js"
import { useTilt } from "../hooks/useTilt.js"

const skills = [
  { label: "Python", pct: 85, color: "from-yellow-400 to-orange-500" },
  { label: "JavaScript", pct: 80, color: "from-yellow-300 to-yellow-500" },
  { label: "C++", pct: 70, color: "from-blue-400 to-blue-600" },
  { label: "HTML", pct: 85, color: "from-orange-400 to-red-500" },
  { label: "CSS", pct: 80, color: "from-blue-400 to-purple-500" },
  { label: "MongoDB", pct: 65, color: "from-green-400 to-green-600" },
  { label: "Git", pct: 80, color: "from-orange-500 to-red-600" },
  { label: "GitHub", pct: 80, color: "from-gray-400 to-gray-600" }
]

function SkillChip({ label, pct, index, color }) {
  const [hovered, setHovered] = useState(false)
  const { style, handlers } = useTilt(6)

  // Get glow color based on gradient
  const glowColors = {
    "from-yellow-400 to-orange-500": "rgba(255, 193, 7, 0.6)",
    "from-yellow-300 to-yellow-500": "rgba(253, 224, 71, 0.6)",
    "from-blue-400 to-blue-600": "rgba(59, 130, 246, 0.6)",
    "from-orange-400 to-red-500": "rgba(249, 115, 22, 0.6)",
    "from-blue-400 to-purple-500": "rgba(99, 102, 241, 0.6)",
    "from-green-400 to-green-600": "rgba(74, 222, 128, 0.6)",
    "from-orange-500 to-red-600": "rgba(249, 115, 22, 0.6)",
    "from-gray-400 to-gray-600": "rgba(156, 163, 175, 0.6)"
  }

  return (
    <motion.div
      custom={index}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow effect background */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.1 : 0.95 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-3 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(to right, ${glowColors[color]}20, transparent)`,
          pointerEvents: "none"
        }}
      />

      {/* Main chip container with 3D tilt and glassmorphism */}
      <motion.div
        {...handlers}
        style={style}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative glass-card rounded-full px-4 py-2 cursor-pointer group/chip overflow-hidden"
      >
        {/* Animated background shine effect */}
        <motion.div
          animate={{ x: hovered ? 300 : -300 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/chip:opacity-100"
          style={{ pointerEvents: "none" }}
        />

        {/* Content */}
        <div className="relative flex items-center gap-2">
          {/* Skill icon dot with gradient */}
          <motion.div
            animate={{
              scale: hovered ? 1.3 : 1,
              boxShadow: hovered ? `0 0 16px ${glowColors[color]}` : "none"
            }}
            transition={{ duration: 0.3 }}
            className={`w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r ${color}`}
          />

          {/* Skill label */}
          <span className="text-sm font-medium text-slate-100 group-hover/chip:text-white transition-all duration-300">
            {label}
          </span>

          {/* Percentage badge that appears on hover */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8, x: -4 }}
            animate={hovered ? { opacity: 1, scale: 1, x: 4 } : { opacity: 0, scale: 0.8, x: -4 }}
            transition={{ duration: 0.2 }}
            className={`text-xs font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
          >
            {pct}%
          </motion.span>
        </div>

        {/* Tooltip on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={hovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
        >
          <div className="glass-card px-3 py-1.5 rounded-lg">
            <p className="text-xs text-slate-100 font-medium">Proficiency: {pct}%</p>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 glass-card transform rotate-45" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Skills({ embedded = false }) {
  return (
    <section id={embedded ? undefined : "skills"} className={embedded ? "py-6" : "container py-20"}>
      {!embedded && (
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I'm proficient with"
        />
      )}

      {!embedded && <div className="mt-12" />}

      <motion.div
        className={embedded ? "flex flex-wrap gap-2" : "flex flex-wrap gap-3 mt-4"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {skills.map((s, i) => (
          <SkillChip key={s.label} label={s.label} pct={s.pct} index={i} color={s.color} />
        ))}
      </motion.div>
    </section>
  )
}
