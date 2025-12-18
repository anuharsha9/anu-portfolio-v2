'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

interface VersionData {
  id: string
  title: string
  body: string
  images?: { src: string; alt: string; caption?: string; fullWidth?: boolean }[]
  subsections?: { title: string; description?: string; images?: { src: string; alt: string; caption?: string; fullWidth?: boolean }[] }[]
}

interface VersionIterationProps {
  v1: VersionData
  v2: VersionData
  v3: VersionData
  isLightBackground?: boolean
}

export default function VersionIteration({ v1, v2, v3, isLightBackground = true }: VersionIterationProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null)
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; alt: string; caption?: string }>>([])
  const [lightboxCurrentIndex, setLightboxCurrentIndex] = useState(0)

  const imageBorderRadius = 'rounded-xl'
  const imageShadow = 'shadow-md'
  const imageOutline = 'outline outline-1 outline-slate-200/50 outline-offset-[-1px]'

  const openLightbox = (src: string, alt: string, caption?: string, images?: Array<{ src: string; alt: string; caption?: string }>, index?: number) => {
    setLightboxImage({ src, alt, caption })
    if (images && index !== undefined) {
      setLightboxImages(images)
      setLightboxCurrentIndex(index)
    } else {
      setLightboxImages([])
      setLightboxCurrentIndex(0)
    }
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxImages([])
    setLightboxCurrentIndex(0)
  }

  const handleLightboxNavigate = (index: number) => {
    if (lightboxImages[index]) {
      const img = lightboxImages[index]
      setLightboxImage({ src: img.src, alt: img.alt, caption: img.caption })
      setLightboxCurrentIndex(index)
    }
  }

  const versions = [
    {
      id: 'v1' as const,
      label: 'V1',
      title: v1.title,
      section: v1,
      approach: 'Independent Product',
      description: 'Standalone RC environment similar to other complex tools',
      rationale: 'Match platform pattern (Designer, Data Flows) — it aligned with industry standards for complex tools like Tableau.',
      rejection: 'Leadership insisted it must be in hub for unified experience',
      status: 'rejected' as const,
      pivotReason: 'Pivot: Leadership mandated Hub integration',
      validation: {
        headline: '2025 Update: V1 Is Being Built',
        body: 'Customers specifically requested an independent ReportCaster environment. Leadership approved. My "rejected" V1 concept is now in active development.',
        insight: 'I designed V1 after discovering that some enterprise customers run 13+ million schedules weekly. Users spending entire days in RC need a dedicated space. The customer requests validated what I saw in the data — my design instincts were right from the start.',
      },
      extensibility: null,
    },
    {
      id: 'v2' as const,
      label: 'V2',
      title: v2.title,
      section: v2,
      approach: 'Hub Plugin',
      description: 'RC as a plugin inside the hub environment',
      rationale: 'Bring RC into hub as plugin to meet leadership requirements',
      rejection: 'Engineering estimated 6+ months — too much effort for the timeline',
      status: 'rejected' as const,
      pivotReason: 'Pivot: Engineering constraints forced simplification',
      validation: null,
      extensibility: null,
    },
    {
      id: 'v3' as const,
      label: 'V3',
      title: v3.title,
      section: v3,
      approach: 'Platform-Native',
      description: 'Modal-based workflows from + menu',
      rationale: 'Design WITH platform patterns (+ menu, modals) — minimal engineering, maximum impact',
      rejection: null,
      status: 'shipped' as const,
      pivotReason: null,
      validation: null,
      extensibility: {
        headline: 'Designed for Platform-Wide Integration',
        body: 'The modal architecture wasn\'t just about shipping faster — it was about designing for the future. By decoupling the scheduler from any specific location, we enabled scheduling to be surfaced from anywhere in the platform.',
        futureIntegrations: [
          'Schedule directly from WebFOCUS Designer',
          'Schedule from the Reporting Server',
          'Schedule Insights from IQ Plugin',
          'Any future surface area in the platform',
        ],
        principle: 'Enterprise design isn\'t just solving today\'s problem — it\'s creating space for tomorrow\'s features. I design systems where future integrations slot in seamlessly, without requiring architectural rewrites. That\'s the difference between tactical and strategic design thinking.',
      }
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
          {'// DESIGN_EVOLUTION'}
        </span>
        <h3 className="text-[var(--text-heading)] text-2xl md:text-3xl font-serif">
          The Iteration Journey
        </h3>
        <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto">
          Three architectural approaches. Two rejections. One shipped solution that balanced platform constraints with user needs.
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline Spine */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

        {/* Version Cards */}
        <div className="space-y-0">
          {versions.map((version, index) => {
            const isSuccess = version.status === 'shipped'
            const isLast = index === versions.length - 1

            return (
              <div key={version.id}>
                {/* Version Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-2 md:left-6 w-5 h-5 rounded-full border-2 ${isSuccess
                    ? 'bg-emerald-500 border-emerald-500'
                    : 'bg-white border-slate-300'
                    } z-10 flex items-center justify-center`}>
                    {isSuccess && (
                      <svg aria-hidden="true" className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`
                    rounded-2xl overflow-hidden transition-all duration-300
                    ${isSuccess
                      ? 'bg-white border-2 border-emerald-100 shadow-lg md:ml-4'
                      : 'bg-slate-50 border border-slate-200'
                    }
                  `}>
                    <div className="p-6 md:p-8 lg:p-10">
                      {/* Side-by-Side Layout */}
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

                        {/* Left Column - Narrative (40%) */}
                        <div className="lg:w-[40%] space-y-4">
                          {/* Header */}
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <span className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest">
                                {version.label}
                              </span>
                              <h4 className="text-[var(--text-heading)] text-xl md:text-2xl font-serif mt-1">
                                {version.approach}
                              </h4>
                            </div>

                            {/* Badge */}
                            {version.status === 'shipped' ? (
                              <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                Launched
                              </span>
                            ) : (
                              <span className="bg-red-50 text-red-600 border border-red-100 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                Rejected
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-[var(--text-body)] text-sm md:text-base">
                            {version.description}
                          </p>

                          {/* Rationale Block */}
                          <div className="bg-white rounded-lg p-4 border border-slate-200 space-y-3">
                            <div>
                              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">
                                Rationale
                              </p>
                              <p className="text-[var(--text-heading)] text-sm">
                                {version.rationale}
                              </p>
                            </div>

                            {version.rejection && (
                              <div className="pt-3 border-t border-slate-100">
                                <p className="text-red-400 text-xs font-mono uppercase tracking-wider mb-1">
                                  Why Rejected
                                </p>
                                <p className="text-[var(--text-body)] text-sm italic">
                                  {version.rejection}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Body Text */}
                          <div className="text-[var(--text-muted)] text-sm leading-relaxed space-y-2">
                            {version.section.body.split('\n\n').slice(0, 2).map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>
                        </div>

                        {/* Right Column - Visual (60%) */}
                        <div className="lg:w-[60%]">
                          {version.section.images && version.section.images.length > 0 && (
                            <>
                              {/* Mobile: Horizontal Scroll */}
                              <div className="lg:hidden -mx-6 md:-mx-8 px-6 md:px-8">
                                <div className="overflow-x-auto scrollbar-hide">
                                  <div className="flex gap-4 min-w-max pb-2">
                                    {version.section.images.slice(0, 4).map((image, idx) => (
                                      <div
                                        key={idx}
                                        className="w-[260px] flex-shrink-0 cursor-pointer"
                                        onClick={() => openLightbox(
                                          image.src,
                                          image.alt,
                                          image.caption,
                                          version.section.images?.map((img) => ({
                                            src: img.src,
                                            alt: img.alt,
                                            caption: img.caption
                                          })),
                                          idx
                                        )}
                                      >
                                        <div className={`
                                          relative w-full aspect-[16/10] ${imageBorderRadius} overflow-hidden 
                                          border border-slate-200 ${imageShadow} bg-slate-100
                                        `}>
                                          <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-contain"
                                            sizes="260px"
                                          />
                                          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                                            <span className="font-mono text-[9px] text-slate-500 uppercase">Tap</span>
                                          </div>
                                        </div>
                                        {image.caption && (
                                          <p className="text-[var(--text-muted)] text-[10px] leading-relaxed mt-2 line-clamp-2">
                                            {image.caption}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {version.section.images.length > 1 && (
                                  <p className="text-center text-slate-400 text-xs mt-1">← Swipe →</p>
                                )}
                              </div>

                              {/* Desktop: Grid */}
                              <div className={`hidden lg:grid gap-4 ${version.section.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                {version.section.images.slice(0, 4).map((image, idx) => (
                                  <div
                                    key={idx}
                                    className="space-y-2 cursor-pointer group"
                                    onClick={() => openLightbox(
                                      image.src,
                                      image.alt,
                                      image.caption,
                                      version.section.images?.map((img) => ({
                                        src: img.src,
                                        alt: img.alt,
                                        caption: img.caption
                                      })),
                                      idx
                                    )}
                                  >
                                    <div className={`
                                      relative w-full aspect-[16/10] ${imageBorderRadius} overflow-hidden 
                                      border border-slate-200 ${imageShadow} ${imageOutline}
                                      cursor-pointer transition-all duration-300 
                                      hover:scale-[1.02] hover:shadow-lg bg-slate-100
                                    `}>
                                      <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 1024px) 60vw, 40vw"
                                      />
                                    </div>
                                    {image.caption && (
                                      <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                                        {image.caption}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                          {/* Subsections for V3 (Shipped) */}
                          {isSuccess && version.section.subsections && version.section.subsections.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-slate-200">
                              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-4">
                                Key Screens ({version.section.subsections.length} workflows)
                              </p>

                              {/* Mobile: Horizontal Scroll */}
                              <div className="lg:hidden -mx-6 md:-mx-8 px-6 md:px-8">
                                <div className="overflow-x-auto scrollbar-hide">
                                  <div className="flex gap-3 min-w-max pb-2">
                                    {version.section.subsections.slice(0, 6).map((sub, subIdx) => (
                                      <div
                                        key={subIdx}
                                        className="w-[140px] flex-shrink-0 text-center"
                                      >
                                        {sub.images && sub.images[0] && (
                                          <div
                                            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 cursor-pointer bg-slate-100"
                                            onClick={() => openLightbox(
                                              sub.images![0].src,
                                              sub.images![0].alt,
                                              sub.title
                                            )}
                                          >
                                            <Image
                                              src={sub.images[0].src}
                                              alt={sub.title}
                                              fill
                                              className="object-contain"
                                              sizes="140px"
                                            />
                                          </div>
                                        )}
                                        <p className="text-[var(--text-muted)] text-[10px] mt-2 line-clamp-1">
                                          {sub.title}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Desktop: Grid */}
                              <div className="hidden lg:grid grid-cols-3 gap-3">
                                {version.section.subsections.slice(0, 6).map((sub, subIdx) => (
                                  <div
                                    key={subIdx}
                                    className="text-center"
                                  >
                                    {sub.images && sub.images[0] && (
                                      <div
                                        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100"
                                        onClick={() => openLightbox(
                                          sub.images![0].src,
                                          sub.images![0].alt,
                                          sub.title
                                        )}
                                      >
                                        <Image
                                          src={sub.images[0].src}
                                          alt={sub.title}
                                          fill
                                          className="object-contain"
                                          sizes="20vw"
                                        />
                                      </div>
                                    )}
                                    <p className="text-[var(--text-muted)] text-xs mt-2 truncate">
                                      {sub.title}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Extensibility Callout (for V3) */}
                {'extensibility' in version && version.extensibility && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative pl-12 md:pl-20 py-4"
                  >
                    {/* Extensibility Node */}
                    <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-violet-100 border-2 border-violet-500 z-10 flex items-center justify-center">
                      <svg aria-hidden="true" className="w-3 h-3 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    {/* Extensibility Card */}
                    <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-xl p-5 md:p-6 ml-2">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-violet-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          Future-Proof
                        </span>
                        <h5 className="text-violet-900 font-serif text-lg md:text-xl font-semibold">
                          {version.extensibility.headline}
                        </h5>
                      </div>
                      <p className="text-violet-800 text-sm md:text-base mb-4">
                        {version.extensibility.body}
                      </p>

                      {/* Future Integrations Grid */}
                      <div className="bg-white/60 rounded-lg p-4 border border-violet-100 mb-4">
                        <p className="font-mono text-violet-600 text-xs uppercase tracking-wider mb-3">
                          {'// FUTURE_INTEGRATIONS'}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {version.extensibility.futureIntegrations.map((item: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-violet-400">→</span>
                              <span className="text-slate-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Design Principle */}
                      <div className="bg-slate-900 rounded-lg p-4">
                        <p className="font-mono text-violet-400 text-xs uppercase tracking-wider mb-2">
                          {'// DESIGN_PRINCIPLE'}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {version.extensibility.principle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Validation Callout (for V1) */}
                {'validation' in version && version.validation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative pl-12 md:pl-20 py-4"
                  >
                    {/* Validation Node */}
                    <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-emerald-100 border-2 border-emerald-500 z-10 flex items-center justify-center">
                      <svg aria-hidden="true" className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    {/* Validation Card */}
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5 md:p-6 ml-2">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          Validated
                        </span>
                        <h5 className="text-emerald-900 font-serif text-lg md:text-xl font-semibold">
                          {version.validation.headline}
                        </h5>
                      </div>
                      <p className="text-emerald-800 text-sm md:text-base mb-4">
                        {version.validation.body}
                      </p>
                      <div className="bg-white/60 rounded-lg p-4 border border-emerald-100">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          <span className="font-mono text-emerald-600 text-xs uppercase tracking-wider block mb-2">
                            {'// DESIGN_INSTINCT'}
                          </span>
                          {version.validation.insight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Pivot Connector (between cards) */}
                {!isLast && version.pivotReason && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="relative pl-12 md:pl-20 py-6"
                  >
                    {/* Pivot Node */}
                    <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-amber-100 border-2 border-amber-400 z-10 flex items-center justify-center">
                      <ArrowDown className="w-3 h-3 text-amber-600" />
                    </div>

                    {/* Pivot Label */}
                    <div className="flex items-center gap-3 ml-2">
                      <span className="text-slate-400 text-sm font-mono">
                        {version.pivotReason}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          imageCaption={lightboxImage.caption}
          images={lightboxImages.length > 0 ? lightboxImages : undefined}
          currentIndex={lightboxCurrentIndex}
          onNavigate={lightboxImages.length > 0 ? handleLightboxNavigate : undefined}
        />
      )}
    </div>
  )
}
