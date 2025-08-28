import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  function onChange(e) { setState({ ...state, [e.target.name]: e.target.value }) }
  function onSubmit(e) { e.preventDefault(); setSent(true) }
  return (
    <section id="contact" className="container py-20 group section-hover">
      <h2 className="mb-8 text-3xl font-bold section-title">Contact</h2>
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
        <a
          href="tel:+917411063990"
          className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 transition hover:shadow-[0_0_12px_#4F46E5]/60 hover:text-white"
          aria-label="Call +917411063990"
        >
          <span className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_10px_#4F46E5]"></span>
          <span>+91 74110 63990</span>
        </a>
      </motion.div>
      <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-4">
        <div>
          <label className="mb-1 block text-sm text-slate-300" htmlFor="name">Name</label>
          <input id="name" name="name" required value={state.name} onChange={onChange} className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 outline-none ring-brand-600 focus:border-slate-700 focus:ring shadow-[0_0_0px_#4F46E5] focus:shadow-[0_0_12px_#4F46E5]/50 transition" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-300" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required value={state.email} onChange={onChange} className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 outline-none ring-brand-600 focus:border-slate-700 focus:ring shadow-[0_0_0px_#4F46E5] focus:shadow-[0_0_12px_#4F46E5]/50 transition" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-300" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required value={state.message} onChange={onChange} className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 outline-none ring-brand-600 focus:border-slate-700 focus:ring shadow-[0_0_0px_#4F46E5] focus:shadow-[0_0_12px_#4F46E5]/50 transition" />
        </div>
        <button type="submit" className="relative overflow-hidden rounded-md bg-brand-600 px-5 py-2.5 font-medium text-white transition hover:bg-brand-500">
          <span className="relative z-10">Send Message</span>
          <span className="pointer-events-none absolute inset-0 -translate-y-full bg-white/20 transition group-hover:translate-y-0" />
          <span className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 opacity-0 transition duration-300 group-active:h-24 group-active:w-24 group-active:opacity-100" />
        </button>
        {sent && (<p className="text-sm text-green-400">Thanks! Your message was captured locally.</p>)}
        <div className="pt-4 text-sm text-slate-300">
          <a className="mr-4 hover:text-brand-500 transition" href="#">GitHub</a>
          <a className="hover:text-brand-500 transition" href="#">LinkedIn</a>
        </div>
      </motion.form>
    </section>
  )
}
