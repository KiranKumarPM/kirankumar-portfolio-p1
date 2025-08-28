import { motion } from "framer-motion"

export default function LeetCode() {
  return (
    <section id="leetcode" className="container py-20 section-hover">
      <h2 className="mb-8 text-3xl font-bold section-title">LeetCode</h2>
      <motion.a
        href="https://leetcode.com/u/KiranKumarPM/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8, scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-slate-100 shadow-sm transition hover:bg-slate-900/70"
      >
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-orange-400/40" aria-hidden />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-500 transition group-hover:text-orange-400">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.64 1.64 0 0 0-.445.906l-.007.145a1.374 1.374 0 0 0 .47 1.104l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 1.922 0l5.406-5.788 3.854-4.126a1.374 1.374 0 0 0 .47-1.104l-.007-.145a1.64 1.64 0 0 0-.445-.906L16.884 6.226l-5.406-5.788A1.374 1.374 0 0 0 13.483 0z"/>
        </svg>
        <span className="text-lg">LeetCode Profile</span>
      </motion.a>
    </section>
  )
}
