'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageLightbox from './ImageLightbox'
import CaseStudyNav from './CaseStudyNav'
import HeroTerminal from './HeroTerminal'
import { heroTitleVariant, heroSubVariant, fadeIn } from '@/lib/animations'

interface CaseStudyHeroProps {
  // Core content
  title: string
  subtitle: string
  scaleMetric?: string // e.g., "Powering 20M+ weekly jobs for the Fortune 500."
  
  // Hero image
  heroImage?: {
    src: string
    alt: string
  }
  
  // Terminal style config (new)
  terminalConfig?: {
    fileName: string
    accentColor: string
  }
  
  // Status badge
  status?: {
    label: string
    variant?: 'live' | 'shipping' | 'development'
  }
  
  // Scope tags
  scopeTags?: string[]
  
  // External links
  dataSheetUrl?: string
  dataSheetLabel?: string
}

export default function CaseStudyHero({
  title,
  subtitle,
  scaleMetric,
  heroImage,
  terminalConfig,
  status,
  scopeTags = [],
  dataSheetUrl,
  dataSheetLabel,
}: CaseStudyHeroProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt })
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <>
      <motion.header
        className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Case Study Navigation */}
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <CaseStudyNav />
          </div>

          {/* Hero Headlines */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-4">
            {/* Primary Headline */}
            <motion.h1
              variants={heroTitleVariant}
              initial="hidden"
              animate="visible"
              className="text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight"
            >
              {title}
            </motion.h1>
            
            {/* Scale Metric - Monospace */}
            {scaleMetric && (
              <motion.p
                variants={heroSubVariant}
                initial="hidden"
                animate="visible"
                className="font-mono text-slate-500 text-lg md:text-xl tracking-wide"
              >
                {scaleMetric}
              </motion.p>
            )}
          </div>

          {/* 2-Column Layout - Content and Hero Image */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7">
              {/* Subtitle */}
              <motion.p
                variants={heroSubVariant}
                initial="hidden"
                animate="visible"
                className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed"
              >
                {subtitle}
              </motion.p>

              {/* Status Badge */}
              {status && (
                <motion.div
                  variants={heroSubVariant}
                  initial="hidden"
                  animate="visible"
                  className="pt-2"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans font-medium ${
                      status.variant === 'live'
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : status.variant === 'shipping'
                          ? 'bg-[var(--accent-teal-100)] text-[var(--accent-teal-700)] border border-[var(--accent-teal-300)]'
                          : 'bg-amber-100 text-amber-700 border border-amber-300'
                    }`}
                  >
                    {status.variant === 'live' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                    )}
                    {status.variant === 'shipping' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)]"></span>
                    )}
                    {status.variant === 'development' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    )}
                    {status.label}
                  </span>
                </motion.div>
              )}

              {/* Data Sheet Link */}
              {dataSheetUrl && (
                <motion.div
                  variants={heroSubVariant}
                  initial="hidden"
                  animate="visible"
                  className="pt-2"
                >
                  <a
                    href={dataSheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#0BA2B5] transition-colors duration-300 text-sm sm:text-base font-sans"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>{dataSheetLabel || 'View Data Sheet'}</span>
                  </a>
                </motion.div>
              )}

              {/* Scope Tags */}
              {scopeTags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 sm:pt-5 md:pt-6">
                  {scopeTags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-slate-700 text-[11px] uppercase tracking-widest font-sans px-2.5 py-1 rounded-full border border-[#0BA2B5]/50 bg-[#0BA2B5]/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Hero Image */}
            {heroImage && (
              <motion.div
                className={`relative ${terminalConfig ? 'h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden' : 'flex flex-col items-center justify-center -mx-6 md:-mx-10 lg:mx-0 lg:ml-8 overflow-visible'}`}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {terminalConfig ? (
                  /* Terminal Style with Bleed Effect */
                  <div 
                    className="absolute top-0 left-0 right-0 transform translate-y-4 lg:translate-y-8 translate-x-4 lg:translate-x-12 scale-105 lg:scale-110 origin-top-left"
                    style={{ width: 'calc(100% + 60px)' }}
                  >
                    <HeroTerminal
                      imageSrc={heroImage.src}
                      fileName={terminalConfig.fileName}
                      accentColor={terminalConfig.accentColor}
                      alt={heroImage.alt}
                    />
                  </div>
                ) : (
                  /* Original Style */
                  <>
                    {/* Shadow glow */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.08) 30%, rgba(0, 0, 0, 0.04) 50%, transparent 70%)',
                        filter: 'blur(60px)',
                        width: '85%',
                        height: '85%',
                      }}
                    />

                    {/* Image Container */}
                    <div
                      className="relative cursor-pointer hover:opacity-90 transition-opacity w-full z-10"
                      style={{ maxWidth: '650px' }}
                      onClick={() => openLightbox(heroImage.src, heroImage.alt)}
                    >
                      <div
                        className="relative w-full"
                        style={{ aspectRatio: '16/10', width: '100%', maxWidth: '650px' }}
                      >
                        <Image
                          src={heroImage.src}
                          alt={heroImage.alt}
                          fill
                          className="object-contain"
                          priority
                          sizes="(max-width: 1024px) 100vw, 600px"
                        />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
        />
      )}
    </>
  )
}

