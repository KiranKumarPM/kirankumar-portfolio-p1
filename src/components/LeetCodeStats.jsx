// Changed: Updated LeetCode stats values using the user's live profile numbers.
// Note: Streak is hidden when unavailable from public profile summary to avoid guessed values.
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { useTilt } from "../hooks/useTilt.js";

const leetCodeStats = {
  totalSolved: 241,
  easySolved: 87,
  mediumSolved: 133,
  hardSolved: 21,
  totalProblems: 3874,
  ranking: "Rank 599,491",
  streak: null,
};

const useCountUp = (target, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let timer = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let start = 0;
        const step = target / (duration / 16);
        timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, [target, duration]);

  return [count, ref];
};

export default function LeetCodeStats() {
  const [totalCount, totalRef] = useCountUp(leetCodeStats.totalSolved);
  const [easyCount, easyRef] = useCountUp(leetCodeStats.easySolved);
  const [mediumCount, mediumRef] = useCountUp(leetCodeStats.mediumSolved);
  const [hardCount, hardRef] = useCountUp(leetCodeStats.hardSolved);
  const solvedPercent = useMemo(
    () => Math.min(100, Math.round((leetCodeStats.totalSolved / leetCodeStats.totalProblems) * 100)),
    []
  );
  const easyPercent = useMemo(() => Math.round((leetCodeStats.easySolved / 932) * 100), []);
  const mediumPercent = useMemo(() => Math.round((leetCodeStats.mediumSolved / 2027) * 100), []);
  const hardPercent = useMemo(() => Math.round((leetCodeStats.hardSolved / 915) * 100), []);

  const { style: tiltStyle, handlers: tiltHandlers } = useTilt(5);

  return (
    <motion.section
      id="leetcode-stats"
      className="container py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <SectionTitle title="LeetCode Stats" subtitle="Progress snapshot across coding difficulty levels" />
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
          LC
        </span>
      </div>

      <motion.div
        className="mt-12 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
          className="glass-card relative overflow-hidden rounded-2xl p-6 md:p-8"
          style={tiltStyle}
          {...tiltHandlers}
          whileHover={{ y: -6 }}
        >
          <div className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-yellow-400/15 blur-3xl" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div ref={totalRef} className="relative z-10">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-300">Total Solved</p>
              <p className="mt-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
                {totalCount}
              </p>
              <p className="mt-1 text-slate-300">Problems Solved</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-300">
                <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">{leetCodeStats.ranking}</span>
                {leetCodeStats.streak !== null && (
                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1">Streak: {leetCodeStats.streak}</span>
                )}
              </div>
            </div>

            <div className="w-full md:max-w-sm relative z-10">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Solved Progress</span>
                <span>{solvedPercent}%</span>
              </div>

              <div className="mb-5 flex justify-center md:justify-end">
                <div className="relative h-36 w-36">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(rgba(251,191,36,0.95) ${solvedPercent * 3.6}deg, rgba(255,255,255,0.12) ${solvedPercent * 3.6}deg)`
                    }}
                  />
                  <div className="absolute inset-[10px] rounded-full bg-slate-950/90 border border-white/10 grid place-items-center text-center">
                    <p className="text-2xl font-bold text-white">{solvedPercent}%</p>
                    <p className="text-[11px] text-slate-400">Overall</p>
                  </div>
                </div>
              </div>

              <div className="h-3.5 w-full rounded-full bg-white/10 overflow-hidden border border-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${solvedPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="absolute inset-y-0 -right-4 w-8 bg-white/40 blur-md" />
                </motion.div>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                {leetCodeStats.totalSolved} / {leetCodeStats.totalProblems} problems solved
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            ref={easyRef}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(74,222,128,0.25)" }}
            className="glass-card relative overflow-hidden rounded-xl border border-green-400/20 bg-gradient-to-br from-green-400/15 to-emerald-500/10 p-5"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-green-300/20 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wider text-green-300">Easy</p>
                <span className="h-2.5 w-2.5 rounded-full bg-green-300 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
              </div>
              <p className="mt-2 text-3xl font-bold text-green-300">{easyCount}</p>
              <p className="mt-1 text-xs text-green-200/80">87 / 932 solved</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${easyPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.08 }}
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-300"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={mediumRef}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(250,204,21,0.25)" }}
            className="glass-card relative overflow-hidden rounded-xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 to-amber-500/10 p-5"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-yellow-300/20 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wider text-yellow-300">Medium</p>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
              </div>
              <p className="mt-2 text-3xl font-bold text-yellow-300">{mediumCount}</p>
              <p className="mt-1 text-xs text-yellow-200/80">133 / 2027 solved</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${mediumPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.14 }}
                  className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-300"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={hardRef}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(248,113,113,0.25)" }}
            className="glass-card relative overflow-hidden rounded-xl border border-red-400/20 bg-gradient-to-br from-red-400/15 to-rose-500/10 p-5"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-red-300/20 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wider text-red-300">Hard</p>
                <span className="h-2.5 w-2.5 rounded-full bg-red-300 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
              </div>
              <p className="mt-2 text-3xl font-bold text-red-300">{hardCount}</p>
              <p className="mt-1 text-xs text-red-200/80">21 / 915 solved</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${hardPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-red-400 to-rose-300"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45 }}
        >
          <a
            href="https://leetcode.com/u/KiranKumarPM/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-sm text-orange-300 hover:text-orange-200 transition-colors"
          >
            <span className="relative">
              View full profile on LeetCode
              <span className="absolute left-0 -bottom-0.5 h-[1px] w-full origin-left scale-x-0 bg-orange-300 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <span className="ml-1">-&gt;</span>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
