// Changed: Added a dedicated About section with the exact professional paragraph content requested.
// Note: Includes optional phrase highlights (max 3) and fade-in animation without affecting other sections.
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";

export default function About() {
  return (
    <section id="about" className="container py-20">
      <SectionTitle
        title="About Me"
        subtitle="A focused journey in AI and full-stack engineering"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-8 glass-card rounded-2xl p-6 md:p-8"
      >
        <p className="mb-4 text-base leading-relaxed text-white/70 dark:text-white/70 text-gray-600">
          I am a passionate Software Engineering student focused on building real-world solutions using <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Artificial Intelligence</span> and <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">full-stack development</span>.
        </p>

        <p className="mb-4 text-base leading-relaxed text-white/70 dark:text-white/70 text-gray-600">
          I specialize in developing systems that solve practical problems - from decentralized academic credential verification to AI-driven fraud detection and healthcare optimization. My approach combines strong problem-solving skills with clean, scalable code practices.
        </p>

        <p className="mb-4 text-base leading-relaxed text-white/70 dark:text-white/70 text-gray-600">
          Currently, I am actively strengthening my <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Data Structures and Algorithms</span> foundation while building impactful projects that demonstrate my ability to design and implement efficient, real-world solutions.
        </p>

        <p className="text-base leading-relaxed text-white/70 dark:text-white/70 text-gray-600">
          I am seeking opportunities where I can contribute, learn, and grow as a developer - while building technology that creates meaningful change.
        </p>
      </motion.div>
    </section>
  );
}
