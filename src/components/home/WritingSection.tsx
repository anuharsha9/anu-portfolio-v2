'use client'

import { motion } from 'framer-motion'
import { articleLinks } from '@/data/home'

// Topic colors for visual variety
const topicColors: Record<string, { bg: string; text: string }> = {
  'Personal Growth': { bg: 'bg-purple-50', text: 'text-purple-600' },
  'UX Strategy': { bg: 'bg-teal-50', text: 'text-teal-600' },
  'AI/ML Design': { bg: 'bg-amber-50', text: 'text-amber-600' },
}

export default function WritingSection() {
  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center">
                <svg aria-hidden="true" className="w-4 h-4 text-[var(--accent-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h2 className="font-serif text-slate-900 text-xl">Writing</h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">
              The pivots, the breakthroughs, the lessons that shaped how I design.
            </p>
          </div>
          <a
            href="https://medium.com/@anu.anuja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-[var(--accent-teal)] transition-colors group shrink-0"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Topic Tag */}
                <span className={`inline-block font-mono text-[10px] uppercase tracking-widest ${colors.text} ${colors.bg} px-2 py-1 rounded mb-3`}>
                  {article.topic}
                </span>

                {/* Title */}
                <h3 className="font-serif text-slate-900 text-base leading-snug mb-4 group-hover:text-[var(--accent-teal)] transition-colors">
                  {article.title}
                </h3>

                {/* Read indicator with time */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="font-mono text-xs text-slate-500">{article.readTime}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 group-hover:text-[var(--accent-teal)] transition-colors">
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
