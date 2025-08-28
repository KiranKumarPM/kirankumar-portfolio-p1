import { motion } from "framer-motion"
import { useState } from "react"

export default function HeroHeading() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-transparent">
      {/* Profile Photo */}
      <img
        src="/profile.png"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg mb-6"
      />

      {/* Name Heading with Cursor Effect */}
      <motion.h1
        onMouseMove={handleMouseMove}
        className="relative text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-green-500 to-yellow-400"
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        style={{
          "--x": `${coords.x}px`,
          "--y": `${coords.y}px`,
        }}
      >
        Kiran Kumar PM
        <span
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--x) var(--y), rgba(255,0,255,0.4), rgba(0,255,127,0.4), rgba(0,191,255,0.4), rgba(255,255,0,0.3), transparent 80%)`,
            mixBlendMode: "screen",
          }}
        />
      </motion.h1>
    </section>
  )
}
