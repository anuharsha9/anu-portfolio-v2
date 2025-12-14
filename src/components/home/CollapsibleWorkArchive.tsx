'use client'

import Image from 'next/image'

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
  return (
    <section id="work-archive" className="py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="space-y-6">
          {/* Header with clear count */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
            <h2 className="font-serif text-slate-900 text-xl md:text-2xl">
              A Decade of Work
            </h2>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center px-2.5 py-1 bg-slate-100 text-slate-700 font-mono text-xs rounded-full font-medium">
                8 case studies
              </span>
              <span className="text-slate-400">·</span>
              <span className="font-mono text-slate-500 text-xs">
                2012–2022
              </span>
            </div>
          </div>

          {/* Grid of Project Cards - Clean cards with image + text below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {archiveProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image container - clean, no overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text below image - clean typography */}
                <div className="p-4 border-t border-slate-100">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-slate-900 font-medium text-sm leading-tight group-hover:text-[var(--accent-teal)] transition-colors">
                        {project.title}
                      </p>
                      <p className="text-slate-500 font-mono text-[10px] mt-1">
                        {project.year}
                      </p>
                    </div>
                    <svg aria-hidden="true" className="w-4 h-4 text-slate-400 group-hover:text-[var(--accent-teal)] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
