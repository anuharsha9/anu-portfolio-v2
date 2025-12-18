'use client'

import { motion } from 'framer-motion'
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton'
import { getTheme, spacing } from '@/lib/design-system'

interface ArchiveProject {
  title: string
  year: string
  href: string
  image: string
}

// All archived projects - ordered by importance then chronologically
const archiveProjects: ArchiveProject[] = [
  // Featured projects first
  { title: 'Kedazzle', year: '2017–2020', href: '/assets/Case Study Kedazzle.pdf', image: '/images/Kedazzle-cover.png' },
  { title: 'CRBS', year: '2017', href: '/assets/CRBS case study.pdf', image: '/images/crbs-cover.png' },
  { title: 'Wordu', year: '2016', href: '/assets/Wordu case study.pdf', image: '/images/wordu-cover.png' },
  { title: 'Graphic Design', year: '2012–2022', href: '/assets/graphic design portfolio.pdf', image: '/images/graphic-cover.png' },
  // Other projects
  { title: 'Pelli', year: '2022', href: '/assets/Pelli case study.pdf', image: '/images/Pelli-cover.png' },
  { title: 'Infinite Analytics', year: '2021', href: '/assets/Infinite case study.pdf', image: '/images/Infinite-Cover.png' },
  { title: 'Suitcase', year: '2020', href: '/assets/suitcase case study.pdf', image: '/images/suitcase-cover.png' },
  { title: 'Travel Portal', year: '2018', href: '/assets/Travel Portal.pdf', image: '/images/travel-cover.png' },
]

export default function CollapsibleWorkArchive() {
  const t = getTheme(true)
  return (
    <section id="work-archive" className="py-section-mobile md:py-section-tablet">
      <div className={`${spacing.containerFull}`}>
        <div className="space-y-space-6">
          {/* Header with clear count */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-baseline gap-space-2 sm:gap-space-4 mb-space-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`font-serif ${t.text} text-xl md:text-2xl`}>
              A Decade of Work
            </h2>
            <div className="flex items-center gap-space-3">
              <span className={`inline-flex items-center justify-center px-space-2.5 py-space-1 ${t.bg} ${t.textSecondary} font-mono text-xs rounded-full font-medium`}>
                8 case studies
              </span>
              <span className={`${t.textMuted} opacity-40`}>·</span>
              <span className={`font-mono ${t.textMuted} text-xs`}>
                2012–2022
              </span>
            </div>
          </motion.div>

          {/* Grid of Project Cards - Clean cards with image + text below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-4">
            {archiveProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${t.bgAlt} border ${t.border} rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] focus-visible:ring-offset-2`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  willChange: 'transform, opacity',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Image container - clean, no overlay */}
                <div className={`relative aspect-[4/3] overflow-hidden ${t.bg}`}>
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    skeletonClassName="rounded-t-xl"
                  />
                </div>

                {/* Text below image - clean typography */}
                <div className={`p-space-4 border-t ${t.borderSubtle}`}>
                  <div className="flex items-start justify-between gap-space-2">
                    <div>
                      <p className={`${t.text} font-medium text-sm leading-tight group-hover:text-[var(--accent-teal)] transition-colors`}>
                        {project.title}
                      </p>
                      <p className={`${t.textMuted} font-mono text-[10px] mt-space-1`}>
                        {project.year}
                      </p>
                    </div>
                    <svg aria-hidden="true" className={`w-4 h-4 ${t.textMuted} opacity-60 group-hover:text-[var(--accent-teal)] group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
