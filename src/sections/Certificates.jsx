import { motion } from "framer-motion"

const CERTS = [
  { title: "AI Brewery Hackathon", file: "/certificates/ai-brewery.pdf" },
  { title: "OS Badge", file: "/certificates/os-badge.pdf" },
  { title: "Python Essentials (Cisco)", file: "/certificates/python-cisco.pdf" },
  { title: "Infosys", file: "/certificates/infosyis.pdf" },
  { title: "MIT Hackathon", file: "/certificates/mit-hackothon.pdf" }
]

export default function Certificates() {
  return (
    <section id="certificates" className="container py-20 section-hover">
      <h2 className="mb-8 text-3xl font-bold section-title">Certificates</h2>

      <div className="flex flex-col gap-y-6">
        {CERTS.map((c) => (
          <a key={c.title} href={c.file} target="_blank" rel="noopener noreferrer" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm transition-colors duration-200 group-hover:bg-blue-600/30"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  {c.title}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-slate-300">
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v7H3V3h7" />
                  </svg>
                </h3>
                <span className="text-xs text-slate-300">Open PDF ↗</span>
              </div>
              {/* Inline preview shows only on hover */}
              <iframe
                src={c.file}
                className="w-[300px] h-[200px] mt-3 rounded-md shadow-md hidden group-hover:block"
                title={`${c.title} preview`}
              />
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  )
}
