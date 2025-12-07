'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'
import { Recommendation } from '@/data/home'

interface TestimonialsWallProps {
  recommendations: Recommendation[]
}

// Extract the "pull quote" (most impactful sentence) from each recommendation
// These are manually curated for maximum impact
const pullQuotes: Record<string, string> = {
  'Vijay Raman': 'A rare combination of strategic thinking, design intuition, and the ability to work seamlessly across product, engineering, and business teams.',
  'Dave Pfeiffer': 'She approaches her work with a fearless attitude and is never afraid to explore new ideas.',
  'Anita George': 'Anticipating the next move of the user — that is next level UI!',
  'Yingchun Chen': 'How quickly she grasped all aspects of a highly intricate system.',
  'Karishma Khadge': 'Her design thinking workshops often became the foundation for key product decisions.',
  'Aniket Awchare': 'Exceptional ability to understand intricate workflows and translate them into elegant designs.',
  'Marcus Horbach': 'The clarity of her designs, in spite of the underlying data science complexity, is impressive.',
  'Vikram Patel': 'She quickly became the designer we trusted for everything.',
  'Shay Bagwell': 'A collaborative teammate, strong advocate for user research and great designer.',
}

// Strategic ordering: Leadership first, then engineers, then others
const strategicOrder = [
  'Vijay Raman',      // VP of Product - Leadership
  'Dave Pfeiffer',    // Director of Design - Leadership
  'Anita George',     // Short punchy quote - attention grabber
  'Marcus Horbach',   // Data Scientist - Technical credibility
  'Yingchun Chen',    // Engineer - Technical partnership
  'Karishma Khadge',  // PM - Cross-functional
  'Aniket Awchare',   // PM - Cross-functional
  'Vikram Patel',     // Co-Founder - Early career
  'Shay Bagwell',     // Marketing - Broad impact
]

// Memoized testimonial card with new hierarchy
const TestimonialCard = memo(function TestimonialCard({
  rec,
  index,
}: {
  rec: Recommendation
  index: number
}) {
  const pullQuote = pullQuotes[rec.name] || rec.quote.split('.')[0] + '.'
  const fullQuote = rec.quote
  const showFullQuote = pullQuote !== fullQuote && fullQuote.length > pullQuote.length + 20

  // Alternate backgrounds for texture: every 3rd card gets slate-50
  const isAlternate = index % 3 === 2
  const bgClass = isAlternate ? 'bg-slate-50' : 'bg-white'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="break-inside-avoid mb-6"
    >
      <div
        className={`${bgClass} rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:border-[#0BA2B5]/30 transition-all duration-300 relative overflow-hidden`}
      >
        {/* Large quotation mark watermark */}
        <div className="absolute top-4 right-4 text-[#0BA2B5] opacity-20 pointer-events-none">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Eyebrow: Role/Title - Most important for recruiters */}
        <div className="mb-4">
          <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-wider font-semibold">
            {rec.role}
          </span>
          {rec.company && (
            <span className="font-mono text-slate-400 text-xs uppercase tracking-wider ml-2">
              · {rec.company}
            </span>
          )}
        </div>

        {/* Headline: The Pull Quote - Editorial serif */}
        <h3 className="font-serif text-slate-900 text-lg md:text-xl leading-tight mb-4">
          &ldquo;{pullQuote}&rdquo;
        </h3>

        {/* Body: Full quote (if different and longer) */}
        {showFullQuote && (
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {fullQuote}
          </p>
        )}

        {/* Footer: Name and relationship */}
        <div className="pt-4 border-t border-slate-100">
          <p className="font-sans font-semibold text-slate-900 text-sm">
            {rec.name}
          </p>
          {rec.relationship && (
            <p className="font-mono text-slate-500 text-xs mt-1 leading-relaxed">
              {rec.relationship}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
})

export default function TestimonialsWall({
  recommendations,
}: TestimonialsWallProps) {
  if (!recommendations || recommendations.length === 0) {
    return null
  }

  // Sort recommendations by strategic order
  const sortedRecommendations = [...recommendations].sort((a, b) => {
    const indexA = strategicOrder.indexOf(a.name)
    const indexB = strategicOrder.indexOf(b.name)
    // If not in strategic order, put at end
    const orderA = indexA === -1 ? 999 : indexA
    const orderB = indexB === -1 ? 999 : indexB
    return orderA - orderB
  })

  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-16 md:py-24 lg:py-32 border-t border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
            <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-wider">
              Social Proof
            </span>
            <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
          </div>

          <h2 className="font-serif text-slate-900 text-2xl md:text-3xl lg:text-4xl">
            People I&apos;ve worked with say…
          </h2>
        </motion.div>

        {/* Masonry Grid - CSS Columns */}
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-6"
          style={{ columnFill: 'balance' }}
        >
          {sortedRecommendations.map((rec, index) => (
            <TestimonialCard
              key={`${rec.name}-${index}`}
              rec={rec}
              index={index}
            />
          ))}
        </div>

        {/* ADPList Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <a
            href="https://adplist.org/mentors/anuja-harsha-nimmagadda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0BA2B5] font-medium hover:text-[#0990A2] transition-colors duration-300 group"
          >
            <span>See more reviews on ADPList</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
