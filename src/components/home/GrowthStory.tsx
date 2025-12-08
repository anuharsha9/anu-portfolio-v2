'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GrowthStory() {
  return (
    <section className="bg-white py-16 md:py-24 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Quote Block */}
          <div className="relative">
            {/* Large decorative quote */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[120px] md:text-[160px] font-serif text-slate-100 leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            
            <blockquote className="relative z-10 font-serif text-slate-900 text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-3xl mx-auto">
              She approaches her work with a fearless attitude and is never afraid to explore new ideas. 
              Anuja is willing to take on difficult problems and push for creative solutions, 
              <span className="text-[#0BA2B5]"> even under tight timelines.</span>
            </blockquote>
          </div>

          {/* Attribution */}
          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="font-semibold text-slate-900">Dave Pfeiffer</p>
            <p className="text-sm text-[#0BA2B5]">Director of Design, Cloud Software Group</p>
            <p className="text-xs text-slate-500 mt-1">My mentor for 3+ years</p>
          </div>

          {/* CTA to Me page */}
          <div className="mt-10">
            <Link
              href="/me"
              className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 hover:text-[#0BA2B5] transition-colors"
            >
              <span>Read my full story</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
