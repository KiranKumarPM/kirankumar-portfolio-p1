import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const skills = [
  { label: "Python", pct: 85 },
  { label: "JavaScript", pct: 80 },
  { label: "MongoDB", pct: 65 },
  { label: "React", pct: 80 },
  { label: "Node.js", pct: 70 },
  { label: "C++", pct: 70 },
  { label: "HTML", pct: 85 },
  { label: "CSS", pct: 80 }
]

export default function TechnicalSkills() {
  const [hovered, setHovered] = useState(null)
  return (
    <section id="technical-skills" className="container py-20 section-hover">
      <h2 className="mb-8 text-3xl font-bold section-title">Technical Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <motion.div
            key={s.label}
            onMouseEnter={() => setHovered(s.label)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-4 shadow-sm transition hover:bg-slate-900/70 hover:shadow-[0_0_20px_rgba(79,70,229,0.25)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-100">{s.label}</span>
              <AnimatePresence>
                {hovered === s.label && (
                  <motion.span
                    key="pct-label"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="text-xs text-blue-300"
                  >
                    {s.pct}%
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-slate-800">
              <motion.div
                className="h-2 rounded-full bg-brand-600"
                initial={{ width: 0 }}
                animate={{ width: hovered === s.label ? `${s.pct}%` : 0 }}
                transition={{ type: "tween", duration: 0.35 }}
              />
            </div>
            <AnimatePresence>
              {hovered === s.label && (
                <motion.div
                  key="ring"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-brand-600/40"
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


