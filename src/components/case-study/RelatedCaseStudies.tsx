'use client'

import Link from 'next/link'
import { featuredCaseStudies } from '@/data/home'

interface RelatedCaseStudiesProps {
  currentSlug: string
  className?: string
}

export default function RelatedCaseStudies({ currentSlug, className = '' }: RelatedCaseStudiesProps) {
  const related = featuredCaseStudies.filter((study) => study.slug !== currentSlug).slice(0, 2)

  if (related.length === 0) return null

  return (
    <section className={`${className} surface-dark-alt py-16 md:py-24`} aria-labelledby="related-case-studies-heading">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
        <h2 id="related-case-studies-heading" className="text-xl md:text-2xl font-serif text-white mb-12 md:mb-16">
          You might also like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {related.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group bg-white/5 rounded-lg border border-refined-dark p-6 md:p-8 transition-all duration-300 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
              style={{
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(32, 170, 188, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-serif text-white group-hover:text-[var(--accent-teal)] transition-colors">
                  {study.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {study.summary}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--accent-teal)] font-medium pt-2">
                  <span>View case study</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-normal group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

