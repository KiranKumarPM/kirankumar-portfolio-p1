import { useEffect } from "react"
import { motion } from "framer-motion"
import ProfileDropdown from "./ProfileDropdown.jsx"

export default function Navbar({ theme, onToggle }) {
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold text-slate-200">Kiran Kumar PM</span>
        </div>
        
        <div className="flex items-center gap-4">
          <ProfileDropdown />
          <button onClick={onToggle} aria-label="Toggle theme" className="rounded-md border border-slate-700 px-3 py-1 text-sm hover:border-slate-500 transition">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  )
}
