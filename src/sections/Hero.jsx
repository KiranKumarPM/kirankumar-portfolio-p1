import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative isolate group section-hover">
      <video 
        className="absolute inset-0 h-full w-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/70" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="relative container flex min-h-[70vh] flex-col items-start justify-center py-20 transition-transform group-hover:scale-[1.01]">
        {/* Name heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-4xl font-extrabold md:text-6xl bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent"
        >
          Kiran Kumar PM
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 12 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-xl md:text-2xl text-slate-200 font-medium"
        >
          Computer Science Engineer | AI Innovator
        </motion.p>

        {/* Interactive contacts row */}
        <div className="mt-4 flex items-center gap-8 justify-start">
          {/* Phone */}
          <motion.a
            href="tel:+917411063990"
            className="group relative inline-flex items-center gap-2 rounded-lg px-3 py-2"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* glow background on hover */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-lg opacity-0 transition group-hover:opacity-100" aria-hidden>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/15 to-purple-500/15 ring-1 ring-blue-500/25 blur-sm" />
            </span>
            {/* phone icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-slate-100">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.69l1.5 4.49a1 1 0 01-.5 1.2l-2.26 1.13a11.05 11.05 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.49 1.5a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            {/* hidden phone text - slide in from bottom with bounce */}
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileHover={{ opacity: 1, y: 0, scale: 1 }}
              className="text-slate-200 text-base font-medium"
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              +91 7411063990
            </motion.span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:kkpm3020@gmail.com"
            className="group relative inline-flex items-center gap-2 rounded-lg px-3 py-2"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* glow background on hover */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-lg opacity-0 transition group-hover:opacity-100" aria-hidden>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/15 to-teal-500/15 ring-1 ring-emerald-500/25 blur-sm" />
            </span>
            {/* email icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-slate-100">
              <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {/* hidden email text - fade + scale up with glow */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="text-slate-200 text-base font-medium"
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              kkpm3020@gmail.com
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
