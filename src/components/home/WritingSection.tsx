'use client'

import { motion } from 'framer-motion'
import { articleLinks } from '@/data/home'

export default function WritingSection() {
  return (
    <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Section Label */}
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest block mb-4">
            // EXPRESSION
          </span>

          {/* Headline */}
          <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl mb-4">
            I write because I have to.
          </h2>

          {/* Subhead */}
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Some experiences demand to be shared. The pivots, the breakthroughs,
            the lessons that shaped how I design — they find their way onto the page.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articleLinks.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-[var(--accent-teal)]/50 hover:bg-slate-800/80 transition-all duration-300"
            >
              {/* Topic Tag */}
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-teal)] block mb-3">
                {article.topic}
              </span>

              {/* Title */}
              <h3 className="font-serif text-white text-lg md:text-xl leading-snug mb-4 group-hover:text-[var(--accent-teal)] transition-colors">
                {article.title}
              </h3>

              {/* Read indicator with time */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-600">{article.readTime} read</span>
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-[var(--accent-teal)] transition-colors">
                  <span className="font-mono text-xs">Read</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Medium CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://medium.com/@anu.anuja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-slate-400 hover:text-[var(--accent-teal)] transition-colors group"
          >
            <span className="font-mono text-sm">More articles on Medium</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
