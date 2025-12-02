'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'
import { SignatureLogo, SectionDivider } from '@/components/brand'

interface ArchiveTile {
  title: string
  description: string
  href: string
  image: string
}

interface EraGroup {
  title: string
  period: string
  tiles: ArchiveTile[]
}

const eraGroups: EraGroup[] = [
  {
    title: 'Freelance',
    period: '2017–2022',
    tiles: [
      {
        title: 'Kedazzle Case Study',
        description: 'UX case study exploring e-commerce platform redesign with focus on product discovery and user flow optimization.',
        href: '/assets/Case Study Kedazzle.pdf',
        image: '/images/Kedazzle-cover.png',
      },
      {
        title: 'Infinite Case Study',
        description: 'Analytics dashboard redesign with emphasis on data visualization and real-time business insights.',
        href: '/assets/Infinite case study.pdf',
        image: '/images/Infinite-Cover.png',
      },
      {
        title: 'Pelli Case Study',
        description: 'Mobile-first productivity app design exploring task management and organizational workflows.',
        href: '/assets/Pelli case study.pdf',
        image: '/images/Pelli-cover.png',
      },
      {
        title: 'Travel Portal Redesign',
        description: 'Corporate travel booking and expense management system streamlining complex travel workflows.',
        href: '/assets/Travel Portal.pdf',
        image: '/images/travel-cover.png',
      },
      {
        title: 'Suitcase Case Study',
        description: 'Travel planning and packing app focused on simplifying trip preparation and itinerary management.',
        href: '/assets/suitcase case study.pdf',
        image: '/images/suitcase-cover.png',
      },
    ],
  },
  {
    title: 'Startups plus Design Agencies',
    period: '2012–2017',
    tiles: [
      {
        title: 'CRBS Case Study',
        description: 'Conference Room Booking System redesign focusing on enterprise scheduling and calendar integration.',
        href: '/assets/CRBS case study.pdf',
        image: '/images/crbs-cover.png',
      },
      {
        title: 'Wordu Case Study',
        description: 'Word prediction and writing enhancement tool designed to improve writing productivity and quality.',
        href: '/assets/Wordu case study.pdf',
        image: '/images/wordu-cover.png',
      },
      {
        title: 'Graphic Design Portfolio',
        description: 'A curated collection of graphic design work spanning brand identity, print design, and visual systems.',
        href: '/assets/graphic design portfolio.pdf',
        image: '/images/graphic-cover.png',
      },
    ],
  },
]

export default function WorkArchive() {
  return (
    <MotionSection id="work-archive" className="surface-dark-alt py-12 md:py-16 relative">
      {/* Subtle Logo Watermark - Top Left Corner */}
      <div className="absolute top-8 left-8 opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="w-24 h-24">
          <SignatureLogo className="w-full h-full text-white" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted-dark)] mb-3">
              A decade of work
            </p>
            <h2 className="text-[var(--text-primary-dark)] text-3xl md:text-4xl font-serif">
              (2012–2022)
            </h2>
          </div>

          {/* Era Groups */}
          <div className="space-y-12 md:space-y-16">
            {eraGroups.map((era, eraIndex) => (
              <motion.div
                key={eraIndex}
                initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
                whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
                style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: eraIndex * 0.06
                }}
                className="space-y-6"
              >
                {/* Era Header */}
                <div className="flex items-baseline gap-4 pb-2 border-b border-white/10">
                  <h3 className="text-[var(--text-primary-dark)] text-xl md:text-2xl font-serif">
                    {era.title}
                  </h3>
                  <span className="text-[var(--accent-teal)] text-xs font-mono uppercase tracking-wider opacity-60">
                    {era.period}
                  </span>
                </div>

                {/* Era Tiles - with images and descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {era.tiles.map((tile, tileIndex) => (
                    <motion.div
                      key={tileIndex}
                      initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
                      whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
                      viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
                      style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.22, 1, 0.36, 1],
                        delay: (eraIndex * 0.06) + (tileIndex * 0.04)
                      }}
                      className="flex"
                    >
                      <Link
                        href={tile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_8px_24px_rgba(13,148,136,0.15)] hover:border-[rgba(13,148,136,0.5)] hover:bg-white/8"
                      >
                        {/* Accent indicator */}
                        <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[var(--accent-teal)] transition-colors duration-300 z-10" />
                        
                        {/* Image with gradient overlay */}
                        <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden mb-4 flex-shrink-0">
                          <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Subtle gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 space-y-3 flex-1 flex flex-col">
                          <h4 className="text-[var(--text-primary-dark)] text-lg font-medium transition-all duration-300 group-hover:text-[var(--accent-teal)]">
                            {tile.title}
                          </h4>
                          <p className="text-[var(--text-muted-dark)] text-sm leading-relaxed flex-1">
                            {tile.description}
                          </p>
                          <div className="pt-2 mt-auto">
                            <span className="inline-flex items-center gap-x-2 rounded-full border border-white/20 text-white px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:border-[var(--accent-teal)] group-hover:bg-[var(--accent-teal)]/10 group-hover:text-[var(--accent-teal)]"
                            >
                              Open PDF
                              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}

