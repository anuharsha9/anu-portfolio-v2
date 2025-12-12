'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'

interface ArchiveTile {
  title: string
  year: string
  href: string
  image: string
}

// All archived projects with years
const archiveProjects: ArchiveTile[] = [
  {
    title: 'Kedazzle',
    year: '2022',
    href: '/assets/Case Study Kedazzle.pdf',
    image: '/images/Kedazzle-cover.png',
  },
  {
    title: 'Infinite Analytics',
    year: '2021',
    href: '/assets/Infinite case study.pdf',
    image: '/images/Infinite-Cover.png',
  },
  {
    title: 'Pelli',
    year: '2020',
    href: '/assets/Pelli case study.pdf',
    image: '/images/Pelli-cover.png',
  },
  {
    title: 'Travel Portal',
    year: '2019',
    href: '/assets/Travel Portal.pdf',
    image: '/images/travel-cover.png',
  },
  {
    title: 'Suitcase',
    year: '2018',
    href: '/assets/suitcase case study.pdf',
    image: '/images/suitcase-cover.png',
  },
  {
    title: 'CRBS',
    year: '2017',
    href: '/assets/CRBS case study.pdf',
    image: '/images/crbs-cover.png',
  },
  {
    title: 'Wordu',
    year: '2016',
    href: '/assets/Wordu case study.pdf',
    image: '/images/wordu-cover.png',
  },
  {
    title: 'Graphic Design',
    year: '2013',
    href: '/assets/graphic design portfolio.pdf',
    image: '/images/graphic-cover.png',
  },
]

export default function CollapsibleWorkArchive() {
  return (
    <MotionSection id="work-archive" className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          {/* Header Section */}
          <div className="text-center space-y-4">
            {/* Section Label */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
              <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider">
                The Vault
              </span>
              <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
            </div>

            <h2 className="font-serif text-slate-900 text-2xl md:text-3xl leading-tight">
              Explore my work archive
            </h2>

            <p className="font-mono text-slate-500 text-sm">
              8 Archived Projects · 2013–2023
            </p>
          </div>

          {/* 4x2 Grid of Project Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {archiveProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-slate-100 border border-slate-200 rounded-xl overflow-hidden hover:border-[var(--accent-teal)]/30 hover:shadow-lg transition-all duration-300"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Preview Image - fills top portion */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                </div>

                {/* Download icon - appears on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <svg className="w-4 h-4 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Title + Year at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-sm md:text-base leading-tight">
                    {project.title}
                  </p>
                  <p className="text-white/60 font-mono text-xs mt-1">
                    {project.year}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
