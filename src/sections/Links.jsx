import { motion } from "framer-motion"

export default function Links() {
  return (
    <section id="links" className="container py-20 group">
      <h2 className="mb-8 text-3xl font-bold section-title">Links</h2>
      <div className="flex flex-col gap-4 max-w-xl">
        <motion.a
          href="https://github.com/KiranKumarPM?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center justify-between rounded-md border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-100 transition hover:text-brand-400 shadow-[0_0_0px_#4F46E5] hover:shadow-[0_0_12px_#4F46E5]/60 link-underline"
        >
          <span>GitHub</span>
          <span className="text-xs text-slate-400">/KiranKumarPM</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/kiran-kumar-p-m-462350279"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center justify-between rounded-md border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-100 transition hover:text-brand-400 shadow-[0_0_0px_#4F46E5] hover:shadow-[0_0_12px_#4F46E5]/60 link-underline"
        >
          <span>LinkedIn</span>
          <span className="text-xs text-slate-400">kiran-kumar-p-m</span>
        </motion.a>
      </div>
    </section>
  )
}


