'use client'

import { motion } from 'framer-motion'

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
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Staggered testimonials - asymmetric layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-start">
          {/* First testimonial - larger, no offset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 relative hover:shadow-lg hover:border-slate-300 transition-all group md:flex-[1.2]"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 50%, ${testimonials[0].accentColor}10 0%, transparent 70%)` }}
            />
            <span
              className="absolute top-4 right-6 text-6xl md:text-8xl font-serif leading-none select-none pointer-events-none opacity-10"
              style={{ color: testimonials[0].accentColor }}
            >
              &ldquo;
            </span>
            <blockquote className="relative z-10 font-serif text-slate-700 text-lg md:text-xl leading-relaxed mb-6">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-slate-100">
              <div className="w-1 h-12 rounded-full" style={{ backgroundColor: testimonials[0].accentColor }} />
              <div>
                <p className="font-semibold text-slate-900">{testimonials[0].name}</p>
                <p className="text-sm" style={{ color: testimonials[0].accentColor }}>{testimonials[0].role}</p>
                <p className="text-xs text-slate-500">{testimonials[0].company}</p>
              </div>
            </div>
          </motion.div>

          {/* Second testimonial - smaller, offset down */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 relative hover:shadow-lg hover:border-slate-300 transition-all group md:flex-[0.8] md:mt-12"
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
            <blockquote className="relative z-10 font-serif text-slate-700 text-base md:text-lg leading-relaxed mb-4">
              &ldquo;{testimonials[1].quote}&rdquo;
            </blockquote>
            <div className="relative z-10 flex items-center gap-3 pt-3 border-t border-slate-100">
              <div className="w-1 h-10 rounded-full" style={{ backgroundColor: testimonials[1].accentColor }} />
              <div>
                <p className="font-semibold text-slate-900 text-sm">{testimonials[1].name}</p>
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
          className="mt-8 md:mt-10"
        >
          <a
            href="/me#social-proof"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-[var(--accent-teal)] transition-colors group"
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
