'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Featured quote from VP of Product - highest authority
const featuredQuote = {
  quote: 'She brings a rare combination of strategic thinking, design intuition, and the ability to work seamlessly across product, engineering, and business teams.',
  name: 'Vijay Raman',
  role: 'VP of Product Management',
  company: 'Cloud Software Group',
}

export default function FeaturedQuote() {
  return (
    <section className="bg-slate-900 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 opacity-50" />
      
      <div className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px w-12 bg-[#0BA2B5]"></div>
            <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-widest">
              What Leaders Say
            </span>
            <div className="h-px w-12 bg-[#0BA2B5]"></div>
          </div>

          {/* Quote */}
          <blockquote className="space-y-6">
            <p className="font-serif text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              &ldquo;{featuredQuote.quote}&rdquo;
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="space-y-1">
            <p className="font-semibold text-white text-lg">
              {featuredQuote.name}
            </p>
            <p className="font-mono text-slate-400 text-sm uppercase tracking-wider">
              {featuredQuote.role} @ {featuredQuote.company}
            </p>
          </div>

          {/* CTA to see more */}
          <Link
            href="/me#social-proof"
            className="inline-flex items-center gap-2 text-[#0BA2B5] font-medium hover:text-[#0990A2] transition-colors group mt-4"
          >
            <span>See all testimonials</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

