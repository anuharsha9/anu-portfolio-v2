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
    relationship: 'Leadership at my company',
    accentColor: 'var(--accent-amber)',
  },
]

export default function GrowthStory() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest block mb-4">
            // TRUST_NETWORK
          </span>
          <h2 className="font-serif text-slate-900 text-3xl md:text-4xl">
            What leaders say
          </h2>
        </motion.div>

        {/* Two Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm relative"
            >
              {/* Large decorative quote */}
              <span 
                className="absolute top-4 right-6 text-6xl md:text-8xl font-serif leading-none select-none pointer-events-none opacity-10"
                style={{ color: testimonial.accentColor }}
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="relative z-10 font-serif text-slate-700 text-lg md:text-xl leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div 
                  className="w-1 h-12 rounded-full"
                  style={{ backgroundColor: testimonial.accentColor }}
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm" style={{ color: testimonial.accentColor }}>{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Medium article */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://medium.com/@anu.anuja/i-always-thought-i-wasnt-good-enough-until-ibi-webfocus-made-me-someone-new-e1a769f15621"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 hover:text-[var(--accent-teal)] transition-colors"
          >
            <span>Read my full story</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
