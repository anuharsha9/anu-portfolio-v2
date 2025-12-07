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
      pivotReason: 'Pivot: Leadership mandated Hub integration'
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
      pivotReason: 'Pivot: Engineering constraints forced simplification'
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
      pivotReason: null
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
          // DESIGN_EVOLUTION
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
                  <div className={`absolute left-2 md:left-6 w-5 h-5 rounded-full border-2 ${
                    isSuccess 
                      ? 'bg-emerald-500 border-emerald-500' 
                      : 'bg-white border-slate-300'
                  } z-10 flex items-center justify-center`}>
                    {isSuccess && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <div className={`grid gap-4 ${version.section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                              {version.section.images.slice(0, isSuccess ? 4 : 2).map((image, idx) => (
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
                                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw" 
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
                          )}

                          {/* Subsections for V3 (Shipped) */}
                          {isSuccess && version.section.subsections && version.section.subsections.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-slate-200">
                              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-4">
                                Key Screens ({version.section.subsections.length} workflows)
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                                          sizes="(max-width: 768px) 50vw, 20vw" 
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
