'use client'

import { motion } from 'framer-motion'
import { getTheme, spacing } from '@/lib/design-system'

const testimonials = [
  {
    quote: 'She approaches her work with a fearless attitude and is never afraid to explore new ideas. Anuja is willing to take on difficult problems and push for creative solutions, even under tight timelines.',
    name: 'Dave Pfeiffer',
    role: 'Director of Design',
    company: 'Cloud Software Group',
    relationship: 'My mentor for 3+ years',
    accentColor: 'var(--accent-teal)',
  },
  {
    quote: 'She brings a rare combination of strategic thinking, design intuition, and the ability to work seamlessly across product, engineering, and business teams. Any team would be lucky to have her.',
    name: 'Vijay Raman',
    role: 'VP of Product Management',
    company: 'Cloud Software Group',
    relationship: 'Oversaw product strategy across my org',
    accentColor: 'var(--accent-amber)',
  },
]

export default function GrowthStory() {
  const t = getTheme(true)
  return (
    <section className="py-section-mobile md:py-section-tablet">
      <div className={`${spacing.containerFull}`}>
        {/* Staggered testimonials - asymmetric layout */}
        <div className="flex flex-col md:flex-row gap-space-6 md:gap-space-8 md:items-start">
          {/* First testimonial - larger, no offset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${t.bgAlt} border ${t.border} rounded-2xl p-space-6 md:p-space-8 relative hover:shadow-lg hover:border-slate-300 transition-all group md:flex-[1.2]`}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 50%, ${testimonials[0].accentColor}10 0%, transparent 70%)` }}
            />
            <span
              className="absolute top-space-4 right-space-6 text-6xl md:text-8xl font-serif leading-none select-none pointer-events-none opacity-10"
              style={{ color: testimonials[0].accentColor }}
            >
              &ldquo;
            </span>
            <blockquote className={`relative z-10 font-serif ${t.textSecondary} text-lg md:text-xl leading-relaxed mb-space-6`}>
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <div className={`relative z-10 flex items-center gap-space-4 pt-space-4 border-t ${t.borderSubtle}`}>
              <div className="w-1 h-12 rounded-full" style={{ backgroundColor: testimonials[0].accentColor }} />
              <div>
                <p className={`font-semibold ${t.text}`}>{testimonials[0].name}</p>
                <p className="text-sm" style={{ color: testimonials[0].accentColor }}>{testimonials[0].role}</p>
                <p className={`text-xs ${t.textMuted}`}>{testimonials[0].company}</p>
              </div>
            </div>
          </motion.div>

          {/* Second testimonial - smaller, offset down */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`${t.bgAlt} border ${t.border} rounded-2xl p-space-5 md:p-space-6 relative hover:shadow-lg hover:border-slate-300 transition-all group md:flex-[0.8] md:mt-space-12`}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 50%, ${testimonials[1].accentColor}10 0%, transparent 70%)` }}
            />
            <span
              className="absolute top-3 right-4 text-5xl md:text-6xl font-serif leading-none select-none pointer-events-none opacity-10"
              style={{ color: testimonials[1].accentColor }}
            >
              &ldquo;
            </span>
            <blockquote className={`relative z-10 font-serif ${t.textSecondary} text-base md:text-lg leading-relaxed mb-space-4`}>
              &ldquo;{testimonials[1].quote}&rdquo;
            </blockquote>
            <div className={`relative z-10 flex items-center gap-space-3 pt-space-3 border-t ${t.borderSubtle}`}>
              <div className="w-1 h-10 rounded-full" style={{ backgroundColor: testimonials[1].accentColor }} />
              <div>
                <p className={`font-semibold ${t.text} text-sm`}>{testimonials[1].name}</p>
                <p className="text-xs" style={{ color: testimonials[1].accentColor }}>{testimonials[1].role}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* See more testimonials CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-space-8 md:mt-space-10"
        >
          <a
            href="/me#social-proof"
            className={`inline-flex items-center gap-space-2 px-space-4 py-space-2 rounded-full ${t.monitor.bg} text-white hover:bg-[var(--accent-teal)] transition-colors group`}
          >
            <span className="font-mono text-xs">See more testimonials</span>
            <svg aria-hidden="true" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
