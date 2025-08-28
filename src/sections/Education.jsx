import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const education = [
  {
    id: 1,
    school: "Banasiri Lions Educational Society, Shikaripur",
    degree: "10th (KSEEB)",
    period: "July 2007 – March 2019",
    details: "Completed secondary education under KSEEB with strong fundamentals."
  },
  {
    id: 2,
    school: "Sri Adichunchanagiri PU College, Shivamogga",
    degree: "12, PCMB",
    period: "July 2021 – March 2023",
    details: "Pre-university PCMB with emphasis on analytical problem solving."
  },
  {
    id: 3,
    school: "Siddaganga Institute of Technology, Tumakuru",
    degree: "B.Tech Computer Science & Engineering",
    period: "2023 – 2024",
    details: "Focused on software engineering, data structures, and systems design."
  }
]

export default function Education() {
  const containerRef = useRef(null)
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      const center = window.innerHeight / 2
      let nearest = 0
      let best = Number.POSITIVE_INFINITY
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const d = Math.abs(rect.top + rect.height / 2 - center)
        if (d < best) { best = d; nearest = i }
      })
      setActiveIndex(nearest)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll) }
  }, [])

  const progressPct = useMemo(() => ((activeIndex) / Math.max(1, education.length - 1)) * 100, [activeIndex])

  return (
    <section id="education" className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Education</h2>
        </div>

        {/* Left timeline with progress */}
        <div className="pointer-events-none absolute left-4 top-[140px] bottom-24 w-0.5 bg-slate-600/50" />
        <div className="absolute left-4 top-[140px] w-0.5 bg-blue-500" style={{ height: `calc(${progressPct}% * (100% - 164px))` }} />

        {/* Perspective container */}
        <div ref={containerRef} className="[perspective:1200px] space-y-6">
          {education.map((item, i) => (
            <EducationCard
              key={item.id}
              refFn={(el) => cardRefs.current[i] = el}
              item={item}
              isActive={i === activeIndex}
              index={i}
              onExpand={() => setExpandedId(item.id)}
            />
          ))}
        </div>

        {/* Dots indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {education.map((_, i) => (
            <span key={i} className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-blue-500 w-6 shadow-[0_0_16px_rgba(59,130,246,0.6)]' : 'bg-slate-600 w-2.5'}`} />
          ))}
        </div>
      </div>

      {/* Fullscreen expand */}
      <AnimatePresence>
        {expandedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm"
            onClick={() => setExpandedId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: -6 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative w-[92%] max-w-3xl rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-2xl [transform-style:preserve-3d]"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = education.find(e => e.id === expandedId)
                if (!item) return null
                return (
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.school}</h3>
                    <p className="text-slate-300 text-lg font-medium mb-4">{item.degree}</p>
                    <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">{item.period}</span>
                    <p className="text-slate-200 leading-relaxed">{item.details}</p>
                  </div>
                )
              })()}
              <button onClick={() => setExpandedId(null)} className="absolute right-4 top-4 rounded-md border border-slate-700/60 px-2 py-1 text-sm text-slate-200 hover:bg-slate-800/60">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function EducationCard({ item, isActive, index, refFn, onExpand }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  useEffect(() => { if (refFn) refFn(cardRef.current) }, [refFn])

  const onMouseMove = (e) => {
    if (!isActive) return
    const r = cardRef.current?.getBoundingClientRect()
    if (!r) return
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ rx: -py * 6, ry: px * 6 })
  }

  const onMouseLeave = () => setTilt({ rx: 0, ry: 0 })

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={false}
      animate={{
        scale: isActive ? 1.08 : 0.94,
        opacity: isActive ? 1 : 0.65,
        y: 0,
        rotateX: isActive ? tilt.rx : -3,
        rotateY: isActive ? tilt.ry : 0,
        z: isActive ? 32 : 0
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="relative mx-auto w-full max-w-3xl [transform-style:preserve-3d]"
      style={{ transformOrigin: 'center center' }}
    >
      <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-md">
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-70" aria-hidden>
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.school}</h3>
          <p className="text-slate-300 text-lg font-medium">{item.degree}</p>
          <div className="mt-3">
            <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium">{item.period}</span>
          </div>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.05, duration: 0.22 }}
              className="mt-4"
            >
              <p className="text-slate-200/90 leading-relaxed">{item.details}</p>
              <div className="mt-4">
                <button onClick={onExpand} className="rounded-md border border-slate-700/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800/60">Expand</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
