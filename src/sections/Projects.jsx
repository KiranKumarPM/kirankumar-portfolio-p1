import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

function TiltCard({ p }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${(-py*6).toFixed(2)}deg) rotateY(${(px*6).toFixed(2)}deg) translateY(-2px)`
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)"
  }

  return (
    <motion.a
      href={p.locked ? undefined : p.link}
      target={p.locked ? undefined : "_blank"}
      rel={p.locked ? undefined : "noopener noreferrer"}
      onClick={(e) => { if (p.locked) { e.preventDefault(); alert("Login required to view this project.") } }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative block rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm transition hover:shadow-[0_0_24px_rgba(79,70,229,0.35)] hover:border-brand-600/50 hover:bg-slate-900/60"
    >
      {/* gradient glow border */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
      </div>

      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-transform will-change-transform">
        <div className="flex items-start justify-between">
          <h3 className="mb-2 text-xl font-semibold group-hover:text-white transition flex items-center gap-2">
            {p.title}
            {!p.locked && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-slate-400 group-hover:text-slate-200">
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M21 14v7H3V3h7" />
              </svg>
            )}
          </h3>
        </div>

        <p className="text-slate-300">{p.description}</p>

        {/* Extended details reveal */}
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 6, height: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.6 }}
              className="mt-3 overflow-hidden"
            >
              <div className="rounded-lg bg-slate-900/50 ring-1 ring-slate-700/40 px-3 py-2">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="rounded-md bg-slate-800/60 px-2 py-1 ring-1 ring-slate-700/50">Role: <span className="font-medium text-slate-200">{p.role}</span></span>
                  <span className="rounded-md bg-slate-800/60 px-2 py-1 ring-1 ring-slate-700/50">Duration: <span className="font-medium text-slate-200">{p.duration}</span></span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="rounded-full border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* active ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-brand-600/40" />
      {p.locked && (<div className="absolute inset-0 grid place-items-center rounded-2xl backdrop-blur-sm bg-slate-950/30 text-slate-200">Locked</div>)}
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="container py-20 section-hover">
      <h2 className="mb-8 text-3xl font-bold section-title">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <TiltCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}
