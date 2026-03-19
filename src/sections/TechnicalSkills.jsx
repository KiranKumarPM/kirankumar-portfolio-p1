// Changed: Redesigned into a compact vertical hover-dropdown skills list with heading icons.
// Note: All resume-based skill items are preserved; content expands per heading on hover/focus/click.
import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionTitle from "../components/SectionTitle.jsx"

const skillsByCategory = {
  "Languages": [
    { label: "C++", pct: 75 },
    { label: "JavaScript", pct: 75 },
    { label: "Python", pct: 75 }
  ],
  "Technical Skills": [
    { label: "Compiler Design (Self Study)", pct: 75 },
    { label: "Microcontroller (ARM)", pct: 75 },
    { label: "Operating System", pct: 75 }
  ],
  "Web Development": [
    { label: "HTML", pct: 75 },
    { label: "CSS", pct: 75 },
    { label: "JavaScript", pct: 75 }
  ],
  "Database": [
    { label: "MongoDB", pct: 75 },
    { label: "SqlLite", pct: 75 }
  ],
  "Developer Tools": [
    { label: "VS Code", pct: 75 },
    { label: "Google Colab", pct: 75 }
  ],
  "MS Office": [
    { label: "Word", pct: 75 },
    { label: "PowerPoint", pct: 75 },
    { label: "Excel", pct: 75 }
  ],
  "Version Control": [
    { label: "Git", pct: 75 },
    { label: "GitHub", pct: 75 }
  ]
}

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState(null)

  const categoryStyles = useMemo(
    () => ({
      "Languages": { accent: "border-purple-500", dot: "bg-purple-400", glow: "rgba(168,85,247,0.28)", icon: "lang" },
      "Technical Skills": { accent: "border-fuchsia-500", dot: "bg-fuchsia-400", glow: "rgba(217,70,239,0.26)", icon: "chip" },
      "Web Development": { accent: "border-cyan-500", dot: "bg-cyan-400", glow: "rgba(34,211,238,0.25)", icon: "web" },
      "Database": { accent: "border-emerald-500", dot: "bg-emerald-400", glow: "rgba(52,211,153,0.26)", icon: "db" },
      "Developer Tools": { accent: "border-sky-500", dot: "bg-sky-400", glow: "rgba(56,189,248,0.25)", icon: "tool" },
      "MS Office": { accent: "border-amber-500", dot: "bg-amber-400", glow: "rgba(251,191,36,0.24)", icon: "doc" },
      "Version Control": { accent: "border-rose-500", dot: "bg-rose-400", glow: "rgba(244,63,94,0.24)", icon: "git" }
    }),
    []
  )

  const groupedSkills = useMemo(() => Object.entries(skillsByCategory), [])

  const HeadingIcon = ({ type }) => {
    if (type === "lang") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path d="m8 9-3 3 3 3" />
          <path d="m16 9 3 3-3 3" />
          <path d="m14 4-4 16" />
        </svg>
      )
    }
    if (type === "chip") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M4 10h3M4 14h3M17 4v3M13 4v3M7 4v3M20 10h-3M20 14h-3M17 20v-3M13 20v-3M7 20v-3" />
        </svg>
      )
    }
    if (type === "web") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      )
    }
    if (type === "db") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      )
    }
    if (type === "tool") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-1.4-1.4 2.1-2.1Z" />
        </svg>
      )
    }
    if (type === "doc") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8M8 17h8" />
        </svg>
      )
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M3 7h18M7 3v8M17 13v8M3 17h18" />
      </svg>
    )
  }

  return (
    <section id="technical-skills" className="container py-20 section-hover" onMouseLeave={() => setActiveCategory(null)}>
      <SectionTitle
        title="Technical Skills"
      />

      <div className="mt-12 space-y-4">
        {groupedSkills.map(([categoryName, categorySkills], categoryIndex) => {
          const category = categoryStyles[categoryName]
          const isActive = activeCategory === categoryName

          return (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.04 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
              onMouseEnter={() => setActiveCategory(categoryName)}
              onFocus={() => setActiveCategory(categoryName)}
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl transition-opacity duration-300"
                style={{ background: category.glow, opacity: isActive ? 1 : 0.35 }}
              />

              <motion.button
                type="button"
                onClick={() => setActiveCategory((prev) => (prev === categoryName ? null : categoryName))}
                whileHover={{ scale: 1.01 }}
                className={`relative z-10 flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-all duration-300 ${isActive ? "bg-white/[0.04]" : "bg-transparent"}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-slate-100 ${category.dot}`}>
                    <HeadingIcon type={category.icon} />
                  </span>
                  <h3 className={`border-l-2 pl-3 text-sm font-semibold uppercase tracking-widest text-white/75 ${category.accent}`}>
                    {categoryName}
                  </h3>
                </div>

                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 text-slate-300"
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </motion.button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key={`${categoryName}-panel`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.36, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="relative px-4 pb-4">
                      <motion.div
                        initial={{ scale: 0, opacity: 0.28 }}
                        animate={{ scale: 1.9, opacity: 0.14 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.52, ease: "easeOut" }}
                        className={`pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full ${category.dot} blur-2xl`}
                      />

                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {categorySkills.map((s, index) => (
                          <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.25, delay: index * 0.05 }}
                            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(139,92,246,0.2)" }}
                            className="group relative z-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-white/20"
                          >
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full ${category.dot}`} />
                                <span className="text-sm font-medium text-slate-100">{s.label}</span>
                              </div>
                              <span className="text-xs text-slate-300">{s.pct}%</span>
                            </div>

                            <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/10">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${s.pct}%` }}
                                transition={{ duration: 0.75, delay: index * 0.04, ease: "easeOut" }}
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
        })}
      </div>
    </section>
  )
}


