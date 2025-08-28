import { motion } from "framer-motion"

export default function GitHub() {
  return (
    <section id="github" className="container py-20 section-hover">
      <h2 className="mb-8 text-3xl font-bold section-title">GitHub</h2>
      <motion.a
        href="https://github.com/KiranKumarPM?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8, scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-slate-100 shadow-sm transition hover:bg-slate-900/70"
      >
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-brand-600/40" aria-hidden />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-slate-200 transition group-hover:text-white">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.851.004 1.707.115 2.506.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.379.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
        </svg>
        <span className="text-lg">GitHub Repositories</span>
      </motion.a>
    </section>
  )
}


