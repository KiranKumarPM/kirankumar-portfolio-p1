// Certificates.jsx - Enhanced with glassmorphism, gradient borders, 3D tilt, and stagger animations
import { motion } from "framer-motion"
import { useState } from "react"
import SectionTitle from "../components/SectionTitle.jsx"
import { fadeUp, staggerContainer } from "../utils/motionVariants.js"

const CERTS = [
  { title: "AI Brewery Hackathon", file: "/certificates/ai-brewery.pdf", issuer: "AI Brewery", accentColor: "from-purple-500 to-pink-500" },
  { title: "OS Badge", file: "/certificates/os-badge.pdf", issuer: "Open Source", accentColor: "from-green-500 to-emerald-500" },
  { title: "Python Essentials (Cisco)", file: "/certificates/python-cisco.pdf", issuer: "Cisco Academy", accentColor: "from-yellow-500 to-orange-500" },
  { title: "Infosys", file: "/certificates/infosyis.pdf", issuer: "Infosys", accentColor: "from-blue-500 to-cyan-500" },
  { title: "MIT Hackathon", file: "/certificates/mit-hackothon.pdf", issuer: "MIT", accentColor: "from-red-500 to-pink-500" }
]

function CertificateCard({ cert, index }) {
  const [hovered, setHovered] = useState(false)
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5
    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`)
  }

  function onLeave() {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')
  }

  return (
    <motion.a
      href={cert.file}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block"
    >
      {/* Card container with 3D tilt */}
      <div
        style={{ transform, transition: 'transform 0.1s ease' }}
        className="relative rounded-2xl overflow-hidden transition-all duration-500"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Glass base */}
        <div className="absolute inset-0 glass-card opacity-100 group-hover:opacity-100" />

        {/* Gradient accent top border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.accentColor}`} />

        {/* Enhanced glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100"
        >
          <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${cert.accentColor} opacity-20 blur-xl`} />
        </motion.div>

        {/* Content */}
        <div className="relative p-5 space-y-3">
          {/* Header with title and issuer */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {cert.title}
              </h3>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '40px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.08 }}
                className={`h-0.5 bg-gradient-to-r ${cert.accentColor} rounded-full mt-1`}
              />
            </div>

            {/* External link icon with animation */}
            <motion.div
              animate={{ y: hovered ? -2 : 0, scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center glass-card`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-white"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M21 14v7H3V3h7" />
              </svg>
            </motion.div>
          </div>

          {/* Issuer badge */}
          <motion.div
            animate={{ y: hovered ? 0 : 4, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
            className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${cert.accentColor} bg-clip-text text-transparent border border-white/10 glass-card`}
          >
            {cert.issuer}
          </motion.div>

          {/* PDF Preview (hidden by default, shows on hover) */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={hovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-3 p-3 rounded-lg glass-card border border-white/10">
              <p className="text-xs text-slate-300">📄 Click to open certificate PDF</p>
              <iframe
                src={cert.file}
                className="w-full h-32 mt-2 rounded-md border border-white/10 bg-slate-950/50"
                title={`${cert.title} preview`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.a>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="container py-20">
      <SectionTitle
        title="Certificates"
        subtitle="Professional credentials and certifications"
      />

      <motion.div
        className="flex flex-col gap-4 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {CERTS.map((cert, i) => (
          <CertificateCard key={cert.title} cert={cert} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
