// Social.jsx - Enhanced with glassmorphism, platform-specific glows, 3D tilt, and stagger animations
import { motion } from "framer-motion"
import { useState } from "react"
import Skills from "./Skills.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import { fadeUp, staggerContainer } from "../utils/motionVariants.js"

const PROFILES = [
  {
    name: "GitHub",
    handle: "KiranKumarPM",
    url: "https://github.com/KiranKumarPM?tab=repositories",
    icon: "github",
    color: "from-gray-400 to-gray-600",
    brandColor: "#ffffff",
    hoverBg: "rgba(255, 255, 255, 0.05)",
    glowColor: "rgba(255, 255, 255, 0.4)"
  },
  {
    name: "LinkedIn",
    handle: "kiran-kumar-p-m",
    url: "https://www.linkedin.com/in/kiran-kumar-p-m-462350279",
    icon: "linkedin",
    color: "from-blue-500 to-blue-700",
    brandColor: "#0077b5",
    hoverBg: "rgba(0, 119, 181, 0.08)",
    glowColor: "rgba(0, 119, 181, 0.5)"
  }
]

function IconGitHub() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

function ProfileCard({ profile, index }) {
  const [hovered, setHovered] = useState(false)
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
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
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative block"
    >
      {/* 3D tilt container */}
      <div
        style={{ transform, transition: 'transform 0.1s ease' }}
        className="relative rounded-2xl overflow-hidden transition-all duration-500"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Glass base with hover color tint */}
        <motion.div
          animate={{ background: hovered ? profile.hoverBg : "rgba(255, 255, 255, 0.05)" }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 glass-card opacity-100"
        />

        {/* Enhanced glow effect */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100"
        >
          <div
            className="absolute -inset-px rounded-2xl bg-gradient-to-br opacity-30 blur-xl"
            style={{ background: `radial-gradient(circle, ${profile.glowColor}, transparent)` }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative p-8 flex flex-col items-center text-center space-y-4">
          {/* Platform icon with glow */}
          <motion.div
            animate={{
              scale: hovered ? 1.15 : 1,
              filter: hovered ? `drop-shadow(0 0 20px ${profile.glowColor})` : "none"
            }}
            transition={{ duration: 0.3 }}
            className="text-white"
            style={{ color: profile.brandColor }}
          >
            {profile.icon === "github" ? <IconGitHub /> : <IconLinkedIn />}
          </motion.div>

          {/* Platform name */}
          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
            {profile.name}
          </h3>

          {/* Handle with underline animation */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400"
          />

          {/* Handle text */}
          <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
            @{profile.handle}
          </p>

          {/* External arrow icon (appears on hover) */}
          <motion.div
            initial={{ opacity: 0, x: -4, y: 4 }}
            animate={hovered ? { opacity: 1, x: 4, y: -4 } : { opacity: 0, x: -4, y: 4 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 w-6 h-6 rounded-lg glass-card flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 text-white"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17L17 7" />
            </svg>
          </motion.div>

          {/* CTA text (appears on hover) */}
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-slate-400 font-medium"
          >
            Visit Profile →
          </motion.p>
        </div>
      </div>
    </motion.a>
  )
}

export default function Social() {
  return (
    <>
      <section id="social" className="container py-20">
        <SectionTitle
          title="GitHub & LinkedIn"
          subtitle="Connect with me on professional platforms"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {PROFILES.map((profile, i) => (
            <ProfileCard key={profile.name} profile={profile} index={i} />
          ))}
        </motion.div>
      </section>

      {/* Skills section embedded below */}
      <section className="container py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Featured Skills</h3>
          <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </div>
        <Skills embedded />
      </section>
    </>
  )
}


