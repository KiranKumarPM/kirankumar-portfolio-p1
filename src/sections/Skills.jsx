// Changed: Reworked skills into categorized premium cards with animated progress bars and shimmer effect.
// Note: Existing skill items and percentages are preserved exactly and only the visual structure is upgraded.
import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"
import SectionTitle from "../components/SectionTitle.jsx"
import { staggerContainer } from "../utils/motionVariants.js"

const skills = [
  { label: "C++", pct: 75, category: "Languages" },
  { label: "JavaScript", pct: 75, category: "Languages" },
  { label: "Python", pct: 75, category: "Languages" },
  { label: "Compiler Design (Self Study)", pct: 75, category: "Technical Skills" },
  { label: "Microcontroller (ARM)", pct: 75, category: "Technical Skills" },
  { label: "Operating System", pct: 75, category: "Technical Skills" },
  { label: "HTML", pct: 75, category: "Web Development" },
  { label: "CSS", pct: 75, category: "Web Development" },
  { label: "JavaScript", pct: 75, category: "Web Development" },
  { label: "MongoDB", pct: 75, category: "Database" },
  { label: "SqlLite", pct: 75, category: "Database" },
  { label: "VS Code", pct: 75, category: "Developer Tools" },
  { label: "Google Colab", pct: 75, category: "Developer Tools" },
  { label: "Word", pct: 75, category: "MS Office" },
  { label: "PowerPoint", pct: 75, category: "MS Office" },
  { label: "Excel", pct: 75, category: "MS Office" },
  { label: "Git", pct: 75, category: "Version Control" },
  { label: "GitHub", pct: 75, category: "Version Control" }
]

function CategoryRevealCard({ categoryName, categorySkills, category, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
    >
      <motion.div
        animate={{ scale: hovered ? 1.03 : 1, boxShadow: hovered ? "0 8px 28px rgba(139,92,246,0.24)" : "0 0 0 rgba(0,0,0,0)" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-10 flex items-center gap-3 px-4 py-4"
      >
        <span className={`h-2.5 w-2.5 rounded-full ${category.dot}`} />
        <h3 className={`border-l-2 pl-3 text-sm font-semibold uppercase tracking-widest text-white/80 ${category.accent}`}>
          {categoryName}
        </h3>
      </motion.div>

      <AnimatePresence initial={false}>
        {hovered && (
          <motion.div
            key={`${categoryName}-reveal`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0.4 }}
              animate={{ scale: 1.85, opacity: 0.2 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full ${category.dot} blur-2xl`}
            />

            <div className="relative z-10 m-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-[0_10px_30px_rgba(15,23,42,0.35)]">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((s, i) => (
                  <motion.div
                    key={`${categoryName}-${s.label}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.28, delay: i * 0.05, ease: "easeOut" }}
                    className="rounded-lg border border-white/10 bg-slate-900/30 px-3 py-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-100">{s.label}</span>
                      <span className="text-xs text-slate-300">{s.pct}%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.pct}%` }}
                        transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                        className="skill-bar-fill h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Skills({ embedded = false }) {
  const categoryConfig = {
    "Languages": { accent: "border-purple-500", dot: "bg-purple-400" },
    "Technical Skills": { accent: "border-fuchsia-500", dot: "bg-fuchsia-400" },
    "Web Development": { accent: "border-cyan-500", dot: "bg-cyan-400" },
    "Database": { accent: "border-emerald-500", dot: "bg-emerald-400" },
    "Developer Tools": { accent: "border-sky-500", dot: "bg-sky-400" },
    "MS Office": { accent: "border-amber-500", dot: "bg-amber-400" },
    "Version Control": { accent: "border-rose-500", dot: "bg-rose-400" }
  }

  const groupedSkills = useMemo(() => {
    const groups = {}
    Object.keys(categoryConfig).forEach((key) => {
      groups[key] = []
    })

    skills.forEach((skill) => {
      groups[skill.category].push(skill)
    })

    return groups
  }, [categoryConfig])

  if (embedded) {
    return (
      <section className="py-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(139,92,246,0.2)" }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 transition-all duration-300 hover:border-white/20"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium text-slate-100">{s.label}</span>
                <span className="text-xs text-slate-300">{s.pct}%</span>
              </div>
              <div className="mt-3 h-1 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                  className="skill-bar-fill h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="container py-20">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I'm proficient with"
      />

      <motion.div
        className="mt-12 space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {Object.entries(groupedSkills).map(([categoryName, categorySkills]) => {
          const category = categoryConfig[categoryName]

          return (
            <CategoryRevealCard
              key={categoryName}
              categoryName={categoryName}
              categorySkills={categorySkills}
              category={category}
              index={Object.keys(groupedSkills).indexOf(categoryName)}
            />
          )
        })}
      </motion.div>
    </section>
  )
}
