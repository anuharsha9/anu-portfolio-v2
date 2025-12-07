'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { featuredCaseStudies } from '@/data/home'

interface RelatedCaseStudiesProps {
  currentSlug: string
  className?: string
}

// Tag mappings for each case study
const caseStudyTags: Record<string, string[]> = {
  'ml-functions': ['AI_UX', 'Complex_Workflows', 'Data_Science'],
  'iq-plugin': ['Platform_Scale', 'Data_Viz', 'Integration'],
  'reportcaster': ['Enterprise_UX', 'Legacy_Mod', 'System_Design'],
}

export default function RelatedCaseStudies({ currentSlug, className = '' }: RelatedCaseStudiesProps) {
  const related = featuredCaseStudies.filter((study) => study.slug !== currentSlug).slice(0, 2)

  if (related.length === 0) return null

  return (
    <section 
      className={`${className} bg-white py-16 md:py-24 border-t border-slate-200`} 
      aria-labelledby="related-case-studies-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase mb-3 block">
            // MORE_WORK
          </span>
          <h2 
            id="related-case-studies-heading" 
            className="text-2xl md:text-3xl font-serif text-slate-900"
          >
            Explore Other Architectures
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {related.map((study, index) => {
            const tags = caseStudyTags[study.slug] || []
            
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-[var(--accent-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)] h-full flex flex-col"
                >
                  {/* Tags Row */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag) => (
                        <span 
                          key={tag}
                          className="font-mono text-xs text-slate-400 group-hover:text-[var(--accent-teal)] transition-colors"
                        >
                          [{tag}]
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg md:text-xl font-serif text-slate-900 group-hover:text-[var(--accent-teal)] transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm text-[var(--accent-teal)] font-medium pt-6 mt-auto">
                    <span>View case study</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
