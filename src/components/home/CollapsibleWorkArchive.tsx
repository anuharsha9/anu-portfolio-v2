'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import MotionSection from '@/components/ui/MotionSection'
import SignatureLogo from '@/components/brand/SignatureLogo'
import PDFPreviewModal from '@/components/ui/PDFPreviewModal'

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

export default function CollapsibleWorkArchive() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedPDF, setSelectedPDF] = useState<{
    title: string
    description: string
    pdfUrl: string
    thumbnailUrl?: string
  } | null>(null)

  return (
    <MotionSection id="work-archive" className="surface-light py-12 md:py-16 relative">
      {/* Subtle Logo Watermark - Top Left Corner */}
      <div className="absolute top-8 left-8 opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="w-24 h-24">
          <SignatureLogo className="w-full h-full text-black" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Header Section - Always Visible */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#666666] font-mono">
                A decade of work
              </p>
              <h2 className="text-[#1A1A1A] text-2xl md:text-3xl font-serif leading-tight">
                Explore my work archive
              </h2>
              <p className="text-[#666666] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                A decade of design work—from early mobile apps and web platforms to enterprise systems and agency projects. Each piece represents a different challenge, a different scale, and a different lesson learned.
              </p>
            </div>

            {/* Expand/Collapse Button */}
            <div className="pt-4">
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--accent-teal)] bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] font-medium hover:bg-[var(--accent-teal)] hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isExpanded ? 'Collapse Archive' : 'View Work Archive'}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-16 pt-8">
                  {/* Era Groups */}
                  {eraGroups.map((era, eraIndex) => (
                    <motion.div
                      key={eraIndex}
                      initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
                      animate={{ opacity: 1, y: 0, visibility: 'visible' as const }}
                      style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: eraIndex * 0.06
                      }}
                      className="space-y-6"
                    >
                      {/* Era Header */}
                      <div className="flex items-baseline gap-4 pb-2 border-b border-black/10">
                        <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-serif">
                          {era.title}
                        </h3>
                        <span className="text-[var(--accent-teal)] text-xs font-mono uppercase tracking-wider opacity-60">
                          {era.period}
                        </span>
                      </div>

                      {/* Era Tiles */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {era.tiles.map((tile, tileIndex) => (
                          <motion.div
                            key={tileIndex}
                            initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
                            animate={{ opacity: 1, y: 0, visibility: 'visible' as const }}
                            style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
                            transition={{
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                              delay: (eraIndex * 0.06) + (tileIndex * 0.04)
                            }}
                            className="flex"
                          >
                            <button
                              onClick={() => setSelectedPDF({
                                title: tile.title,
                                description: tile.description,
                                pdfUrl: tile.href,
                                thumbnailUrl: tile.image,
                              })}
                              className="group relative flex flex-col h-full w-full rounded-xl border border-black/10 border-t-2 border-t-[var(--accent-teal)]/30 bg-black/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_4px_12px_rgba(32,170,188,0.075)] hover:border-[var(--accent-teal)]/50 hover:bg-black/8"
                            >
                              {/* Accent indicator */}
                              <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-[var(--accent-teal)] transition-colors duration-300 z-10" />

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
                                <h4 className="text-[#1A1A1A] text-lg font-medium transition-all duration-300 group-hover:text-[var(--accent-teal)]">
                                  {tile.title}
                                </h4>
                                <p className="text-[#666666] text-sm leading-relaxed flex-1">
                                  {tile.description}
                                </p>
                                <div className="pt-2 mt-auto">
                                  <span className="inline-flex items-center gap-x-2 rounded-full border border-black/20 text-[#1A1A1A] px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:border-[var(--accent-teal)] group-hover:bg-[var(--accent-teal)]/10 group-hover:text-[var(--accent-teal)]">
                                    Preview
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                  </span>
                                </div>
                              </div>
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* PDF Preview Modal */}
      {selectedPDF && (
        <PDFPreviewModal
          isOpen={!!selectedPDF}
          onClose={() => setSelectedPDF(null)}
          title={selectedPDF.title}
          description={selectedPDF.description}
          pdfUrl={selectedPDF.pdfUrl}
          thumbnailUrl={selectedPDF.thumbnailUrl}
        />
      )}
    </MotionSection>
  )
}

