// Changed: Added BlockCreds project data and a detailed card layout for problem/solution/features/stack/actions.
// Note: Existing project cards and interactions are preserved; only BlockCreds uses the extended content blocks.
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
  },
  {
    id: "blockcreds",
    name: "BlockCreds",
    tagline: "Decentralized Academic Credential Verification",
    role: "Full‑stack Developer",
    duration: "2026",
    problem: "Academic certificate fraud is rampant. Traditional verification is slow, expensive, and relies on centralized authorities that can be manipulated or fail.",
    solution: "BlockCreds eliminates fraud using blockchain-stored certificate hashes (Polygon Amoy Testnet), IPFS for decentralized PDF storage, and QR-based real-time verification — making certificates tamper-proof and instantly verifiable by anyone, anywhere.",
    techStack: [
      "Polygon (Blockchain)",
      "Solidity (Smart Contract)",
      "IPFS / Pinata",
      "Django",
      "Web3.py",
      "Tailwind CSS",
      "Bootstrap",
      "SQLite"
    ],
    features: [
      "Tamper-proof certificates stored on IPFS",
      "Smart contract validation on Polygon",
      "QR code real-time verification",
      "Bulk certificate issuance via CSV",
      "Certificate revocation mechanism",
      "Email notification system"
    ],
    github: "https://github.com/KiranKumarPM/Blockcreds",
    live: null,
    category: "Blockchain / Full Stack",
    status: "Completed",
    featured: true
  }
]

function TiltCard({ p, index }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [tiltTransition, setTiltTransition] = useState("transform 0.1s ease")
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')
  const isBlockCreds = p.id === "blockcreds"
  const derivedFeatures = !isBlockCreds
    ? p.description
      .split(",")
      .map((item) => item.trim().replace(/\.$/, ""))
      .filter(Boolean)
      .slice(0, 3)
    : []

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const tiltMax = isBlockCreds ? 6 : 8
    const rotateX = ((y - centerY) / centerY) * -tiltMax
    const rotateY = ((x - centerX) / centerX) * tiltMax
    setTiltTransition("transform 0.1s ease")
    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`)
  }

  function onLeave() {
    setTiltTransition("transform 0.5s ease")
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')
  }

  if (isBlockCreds) {
    const visibleFeatures = p.features.slice(0, 3)
    const hiddenCount = Math.max(0, p.features.length - 3)

    return (
      <motion.article
        custom={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -12, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative block rounded-2xl overflow-hidden transition-all duration-500"
      >
        <div className="absolute inset-0 glass-card opacity-100 group-hover:opacity-100" />

        <div
          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-white/20"
          style={{
            boxShadow: hovered
              ? "0 0 30px rgba(139,92,246,0.25), 0 0 60px rgba(139,92,246,0.10)"
              : "0 8px 32px rgba(0,0,0,0.2)"
          }}
          aria-hidden
        />

        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ transform, transition: tiltTransition }}
          className="relative p-6 transition-transform will-change-transform"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {p.name}
              </h3>
              <p className="text-slate-300 text-sm group-hover:text-slate-100 transition-colors duration-300 mt-1">
                {p.tagline}
              </p>
            </div>
            <motion.a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-6 w-6 rounded-md border border-white/20 bg-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors flex-shrink-0"
              aria-label="Open BlockCreds GitHub project"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: hovered ? 3 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-4 w-4"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M21 14v7H3V3h7" />
              </motion.svg>
            </motion.a>
          </div>

          <AnimatePresence initial={false}>
            {hovered && (
              <motion.div
                key="blockcreds-details"
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 6, height: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.6 }}
                className="overflow-hidden"
              >
                <div className="glass-card rounded-xl p-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-slate-200 backdrop-blur-sm">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 text-xs text-emerald-200 backdrop-blur-sm">
                      {p.status}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-purple-500/15 border border-purple-400/30 px-3 py-1 text-xs text-purple-200 backdrop-blur-sm">
                      Role: {p.role}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3 py-1 text-xs text-cyan-200 backdrop-blur-sm">
                      Year: {p.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-300">
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      </svg>
                      <span>Problem</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{p.problem}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-cyan-300">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>Solution</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">{p.solution}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-100">Key Features</h4>
                    <ul className="space-y-1.5">
                      {visibleFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mt-0.5 text-purple-300 flex-shrink-0">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {hiddenCount > 0 && <li className="text-xs text-slate-400">+{hiddenCount} more</li>}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-100">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.techStack.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-2 py-0.5 text-xs text-slate-200 backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/30"
                      style={{ boxShadow: hovered ? "0 0 20px rgba(139,92,246,0.35)" : "none" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.087 2.91.831.091-.647.349-1.087.635-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.389-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.55 9.55 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
                      </svg>
                      <span>View Code</span>
                    </motion.a>

                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 opacity-50 cursor-not-allowed">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>Live Demo</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide">Soon</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.a
      href={p.locked ? undefined : p.link}
      target={p.locked ? undefined : "_blank"}
      rel={p.locked ? undefined : "noopener noreferrer"}
      onClick={(e) => { if (p.locked) { e.preventDefault(); alert("Login required to view this project.") } }}
      custom={index}
      variants={fadeUp}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
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
        style={{ transform, transition: tiltTransition }}
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
              <div className="glass-card rounded-xl p-4 space-y-4">
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

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-300">
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    </svg>
                    <span>Problem</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{p.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-cyan-300">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Solution</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">
                    Implemented by {p.role} in {p.duration} using the stack below to deliver a practical, production-ready solution.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-100">Tech Stack</h4>
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

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-100">Key Features</h4>
                  <ul className="space-y-1.5">
                    {derivedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mt-0.5 text-purple-300 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/30"
                    style={{ boxShadow: hovered ? "0 0 20px rgba(139,92,246,0.35)" : "none" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.087 2.91.831.091-.647.349-1.087.635-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.389-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.55 9.55 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
                    </svg>
                    <span>View Code</span>
                  </motion.a>

                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 opacity-50 cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Live Demo</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide">Soon</span>
                  </span>
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
          <TiltCard key={p.id || p.title} p={p} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
