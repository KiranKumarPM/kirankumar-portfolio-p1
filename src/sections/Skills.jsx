import { motion } from "framer-motion"

const skills = [
  { label: "Python", pct: 85 },
  { label: "JavaScript", pct: 80 },
  { label: "C++", pct: 70 },
  { label: "HTML", pct: 85 },
  { label: "CSS", pct: 80 },
  { label: "MongoDB", pct: 65 },
  { label: "Git", pct: 80 },
  { label: "GitHub", pct: 80 }
]

function Chip({ label, pct, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 shadow-[0_0_0px_#4F46E5] transition hover:shadow-[0_0_10px_#4F46E5]/60 hover:text-white hover:-translate-y-0.5 group"
    >
      {label}
      <motion.span
        initial={{ opacity: 0, scale: 0.95, y: 2 }}
        whileHover={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-800/95 px-2 py-1 text-xs text-slate-100 shadow-lg ring-1 ring-slate-700 tooltip"
      >
        {pct}%
      </motion.span>
    </motion.span>
  )
}

export default function Skills({ embedded = false }) {
  return (
    <section id={embedded ? undefined : "skills"} className={embedded ? "py-6" : "container py-20 group section-hover"}>
      {!embedded && (<h2 className="mb-8 text-3xl font-bold section-title">Skills</h2>)}
      <div className={embedded ? "flex flex-wrap gap-2" : "flex flex-wrap gap-3"}>
        {skills.map((s, i) => (
          <div key={s.label} className="group">
            <Chip label={s.label} pct={s.pct} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
