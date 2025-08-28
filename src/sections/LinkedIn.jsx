import { motion } from "framer-motion"

export default function LinkedIn() {
  return (
    <section id="linkedin" className="container py-20 section-hover">
      <h2 className="mb-8 text-3xl font-bold section-title">LinkedIn</h2>
      <motion.a
        href="https://www.linkedin.com/in/kiran-kumar-p-m-462350279"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8, scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-slate-100 shadow-sm transition hover:bg-slate-900/70"
      >
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-sky-400/40" aria-hidden />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-400 transition group-hover:text-sky-300">
          <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.0V9h3.104v1.561h.045c.433-.82 1.49-1.683 3.067-1.683 3.28 0 3.886 2.159 3.886 4.968v6.606zM5.337 7.433a1.804 1.804 0 110-3.609 1.804 1.804 0 010 3.609z"/>
        </svg>
        <span className="text-lg">LinkedIn Profile</span>
      </motion.a>
    </section>
  )
}


