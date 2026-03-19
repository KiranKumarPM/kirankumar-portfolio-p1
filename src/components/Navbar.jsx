// Navbar.jsx - Enhanced with glassmorphism, scroll blur, animated nav links, and logo entrance
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ProfileDropdown from "./ProfileDropdown.jsx"

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const profileImageSrc = `${import.meta.env.BASE_URL}profile.jpeg`

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Logo entrance animation - letter by letter
  const logoLetters = "Kiran Kumar PM".split("")
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }
  const letterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/8 backdrop-blur-2xl border-b border-white/15 shadow-lg shadow-black/20"
          : "bg-white/5 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container flex h-16 items-center justify-between"
      >
        {/* Logo with photo and entrance animation */}
        <motion.div className="flex items-center gap-3" variants={logoVariants} initial="hidden" animate="visible">
          {/* Profile photo auto-crops to a circle regardless of image ratio */}
          <motion.div
            variants={letterVariants}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/60 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-400/25 shrink-0"
          >
            <img
              src={profileImageSrc}
              alt="Profile"
              className="avatar-hd w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onError={(e) => {
                e.currentTarget.src = `${import.meta.env.BASE_URL}favicon.svg`
              }}
            />
          </motion.div>
          
          {/* Text Logo */}
          {logoLetters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Right side - Profile dropdown and theme toggle */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ProfileDropdown />

          {/* Theme toggle button with glass styling */}
          <motion.button
            onClick={onToggle}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            <motion.span
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.121l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707A1 1 0 005.05 6.464zM5 11a1 1 0 100-2H4a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              )}
              {theme === "dark" ? "Dark" : "Light"}
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.nav>
    </header>
  )
}
