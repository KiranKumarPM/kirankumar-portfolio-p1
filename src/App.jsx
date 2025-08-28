import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import Education from "./sections/Education.jsx"
import Projects from "./sections/Projects.jsx"
import Certificates from "./sections/Certificates.jsx"
import Links from "./sections/Links.jsx"
import TechnicalSkills from "./sections/TechnicalSkills.jsx"
import GitHub from "./sections/GitHub.jsx"
import LinkedIn from "./sections/LinkedIn.jsx"
import LeetCode from "./sections/LeetCode.jsx"
import Contact from "./sections/Contact.jsx"
import Social from "./sections/Social.jsx"

export default function App() {
  const [theme, setTheme] = useState("dark")
  useEffect(() => { document.documentElement.classList.toggle("dark", theme === "dark") }, [theme])
  useEffect(() => {
    const dot = document.createElement("div"); dot.className = "cursor-dot"; document.body.append(dot)
    const trail = document.createElement("div"); trail.className = "cursor-dot"; trail.style.opacity = "0.6"; trail.style.filter = "blur(1px)"; document.body.append(trail)
    let tx = 0, ty = 0
    const move = (e) => {
      dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px"
      tx += (e.clientX - tx) * 0.12; ty += (e.clientY - ty) * 0.12
      trail.style.left = tx + "px"; trail.style.top = ty + "px"
    }
    window.addEventListener("mousemove", move)
    return () => { window.removeEventListener("mousemove", move); dot.remove(); trail.remove() }
  }, [])
  const reveal = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }
  return (
    <>
      {/* Global background video */}
      <div className="fixed inset-0 -z-10">
        <video className="h-full w-full object-cover brightness-110 contrast-105" autoPlay loop muted playsInline preload="auto">
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient light overlay (lighter to make background brighter) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-slate-950/50 to-black/60" />
        <div className="pointer-events-none absolute inset-0 opacity-55" style={{ backgroundImage: "radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,0.30), transparent), radial-gradient(600px 300px at 80% 20%, rgba(168,85,247,0.24), transparent), radial-gradient(700px 350px at 50% 80%, rgba(14,165,233,0.24), transparent)" }} />
      </div>

      <Navbar theme={theme} onToggle={() => setTheme(t => t === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 0.6, duration: 0.6 }}>
          <Education />
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 0.9, duration: 0.6 }}>
          <Projects />
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 1.2, duration: 0.6 }}>
          <TechnicalSkills />
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 1.5, duration: 0.6 }}>
          <Certificates />
        </motion.div>

        {/* Compact vertical spacing for socials */}
        <div id="socials" className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 1.35, duration: 0.6 }}>
            <GitHub />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 1.425, duration: 0.6 }}>
            <LinkedIn />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 1.5, duration: 0.6 }}>
            <LeetCode />
          </motion.div>
        </div>

        {false && (
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 1.35, duration: 0.6 }}>
            <Social />
          </motion.div>
        )}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: 1.5, duration: 0.6 }}>
          <Contact />
        </motion.div>
      </main>
      <footer className="border-t border-slate-800 py-6">
        <div className="container text-sm text-slate-400"> {new Date().getFullYear()}</div>
      </footer>
    </>
  )
}
