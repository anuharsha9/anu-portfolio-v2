'use client'

import { motion } from 'framer-motion'
import { articleLinks } from '@/data/home'
import { getTheme, spacing } from '@/lib/design-system'

// Topic colors for visual variety
const topicColors: Record<string, { bg: string; text: string }> = {
  'Personal Growth': { bg: 'bg-purple-50', text: 'text-purple-600' },
  'UX Strategy': { bg: 'bg-teal-50', text: 'text-teal-600' },
  'AI/ML Design': { bg: 'bg-amber-50', text: 'text-amber-600' },
}

export default function WritingSection() {
  const t = getTheme(true)
  return (
    <section className="py-section-mobile md:py-section-tablet relative overflow-hidden">
      <div className={`${spacing.containerFull}`}>
        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-space-4 mb-space-8"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-space-3 mb-space-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center">
                <svg aria-hidden="true" className="w-4 h-4 text-[var(--accent-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h2 className={`font-serif ${t.text} text-xl`}>Writing</h2>
            </div>
            <p className={`${t.textSecondary} text-base leading-relaxed`}>
              The pivots, the breakthroughs, the lessons that shaped how I design.
            </p>
          </div>
          <a
            href="https://medium.com/@anu.anuja"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-space-2 px-space-4 py-space-2 rounded-full ${t.monitor.bg} text-white hover:bg-[var(--accent-teal)] transition-colors group shrink-0`}
          >
            <span className="font-mono text-xs">More on Medium</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Article cards - grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-4">
          {articleLinks.map((article, index) => {
            const colors = topicColors[article.topic] || { bg: 'bg-slate-50', text: 'text-slate-600' }
            return (
              <motion.a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  willChange: 'transform, opacity',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
                className={`group relative ${t.bgAlt} border ${t.border} rounded-xl p-space-5 shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Topic Tag */}
                <span className={`inline-block font-mono text-[10px] uppercase tracking-widest ${colors.text} ${colors.bg} px-space-2 py-space-1 rounded mb-space-3`}>
                  {article.topic}
                </span>

                {/* Title */}
                <h3 className={`font-serif ${t.text} text-base leading-snug mb-space-4 group-hover:text-[var(--accent-teal)] transition-colors`}>
                  {article.title}
                </h3>

                {/* Read indicator with time */}
                <div className={`flex items-center justify-between pt-space-3 border-t ${t.borderSubtle}`}>
                  <span className={`font-mono text-xs ${t.textMuted}`}>{article.readTime}</span>
                  <span className={`inline-flex items-center gap-space-1 text-xs ${t.textDim} group-hover:text-[var(--accent-teal)] transition-colors`}>
                    <span>Read</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
