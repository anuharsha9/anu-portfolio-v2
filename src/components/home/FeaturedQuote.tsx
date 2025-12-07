'use client'

import { motion } from 'framer-motion'

export default function FeaturedQuote() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm relative"
        >
          {/* Large Quote Mark */}
          <span className="absolute top-6 left-8 text-6xl md:text-8xl text-slate-100 font-serif leading-none select-none">
            &ldquo;
          </span>

          {/* Quote Content */}
          <div className="relative z-10 pt-8 md:pt-12">
            <blockquote className="font-serif text-xl md:text-2xl text-slate-700 leading-relaxed italic mb-8">
              From the start, she impressed everyone with her ability to grasp complex systems and translate them into intuitive designs. She doesn&apos;t just execute—she thinks strategically about how design decisions impact the broader product ecosystem.
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="font-mono text-slate-400 text-sm">PE</span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest mb-1">
                  [ENGINEERING_LEAD]
                </p>
                <p className="font-sans font-bold text-slate-900">Principal Engineer</p>
                <p className="font-sans text-xs text-slate-500">WebFOCUS Core Team</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
