import { motion } from "framer-motion"
import Skills from "./Skills.jsx"

export default function Social() {
  return (
    <section id="social" className="container py-20 group section-hover">
      <h2 className="mb-6 text-3xl font-bold section-title">GitHub & LinkedIn</h2>
      <div className="mb-6 flex flex-wrap gap-4">
        <motion.a
          href="https://github.com/KiranKumarPM?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center rounded-md border border-slate-800 bg-slate-900/60 px-4 py-2 text-slate-100 shadow-[0_0_0px_#4F46E5] transition hover:shadow-[0_0_12px_#4F46E5]/60"
        >
          GitHub Repositories
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/kiran-kumar-p-m-462350279"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center rounded-md border border-slate-800 bg-slate-900/60 px-4 py-2 text-slate-100 shadow-[0_0_0px_#4F46E5] transition hover:shadow-[0_0_12px_#4F46E5]/60"
        >
          LinkedIn Profile
        </motion.a>
      </div>
      <Skills embedded />
    </section>
  )
}


