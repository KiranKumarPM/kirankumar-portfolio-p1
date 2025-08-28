import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const menuItems = [
    { label: "Certificates", href: "#certificates" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Technical Skills", href: "#technical-skills" },
    { label: "GitHub", href: "https://github.com/KiranKumarPM?tab=repositories" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kiran-kumar-p-m-462350279" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <div ref={dropdownRef} className="relative">
      {/* Profile Picture Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-gradient-to-br from-slate-200/40 to-slate-400/20 shadow-sm transition-all duration-200 hover:shadow-lg w-16 h-16"
      >
        <span className="pointer-events-none text-xs text-slate-300">Photo</span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-slate-700 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-sm z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={item.label} item={item} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MenuItem({ item, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const handleClick = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    
    if (item.href.startsWith('http')) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    } else {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="mb-1 last:mb-0"
    >
      <motion.button
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isPressed ? 0.95 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="group relative w-full rounded-lg border border-transparent bg-slate-800/50 p-3 text-left transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/80"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-slate-200 group-hover:text-white transition-colors">
            {item.label}
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-4 w-4 text-slate-400 group-hover:text-slate-300 transition-colors"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.05 + 0.1 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </motion.svg>
        </div>
      </motion.button>
    </motion.div>
  )
}
