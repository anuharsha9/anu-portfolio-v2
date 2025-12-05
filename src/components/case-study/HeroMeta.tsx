'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageLightbox from './ImageLightbox'
import SignatureLogo from '@/components/brand/SignatureLogo'
import CaseStudyNav from './CaseStudyNav'
import SocialShareButtons from '@/components/sharing/SocialShareButtons'
import HeroTestimonial from '@/components/home/HeroTestimonial'
import { heroTitleVariant, heroSubVariant, fadeIn } from '@/lib/animations'
import { recommendations } from '@/data/home'

interface HeroMetaProps {
  heroTitle: string
  heroSubheading?: string
  heroSubtitle: string
  coverImage?: {
    src: string
    alt: string
  }
  role: string
  company: string
  timeframe: string
  scope: string[]
  hasPrototype?: boolean
  caseStudySlug?: string
  demoVideoUrl?: string
  demoVideoLabel?: string
  demoVideoUrl2?: string
  demoVideoLabel2?: string
  publicDemoUrl?: string
  publicDemoLabel?: string
  dataSheetUrl?: string
  dataSheetLabel?: string
  status?: {
    label: string
    variant?: 'live' | 'shipping' | 'development'
  }
  shareUrl?: string
  testimonialName?: string // Name of testimonial to feature in hero
}

export default function HeroMeta({
  heroTitle,
  heroSubheading,
  heroSubtitle,
  coverImage,
  role,
  company,
  timeframe,
  scope,
  hasPrototype = false,
  caseStudySlug,
  demoVideoUrl,
  demoVideoLabel,
  demoVideoUrl2,
  demoVideoLabel2,
  publicDemoUrl,
  publicDemoLabel,
  dataSheetUrl,
  dataSheetLabel,
  status,
  shareUrl,
  testimonialName,
}: HeroMetaProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  // Find testimonial if name provided
  const testimonial = testimonialName
    ? recommendations.find((r) => r.name === testimonialName)
    : null

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt })
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <>
      <motion.header
        className="relative min-h-[70vh] xs:min-h-[75vh] sm:min-h-[80vh] flex items-center py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Subtle Logo Watermark - Top Right Corner */}
        <div className="absolute top-8 right-8 opacity-[0.03] pointer-events-none hidden lg:block">
          <div className="w-32 h-32">
            <SignatureLogo className="w-full h-full text-[var(--text-primary-light)]" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Social Share Buttons - Above case study nav, centered */}
          {shareUrl && (
            <div className="flex justify-center mb-3">
              <SocialShareButtons
                title={heroTitle}
                url={shareUrl}
                description={heroSubtitle}
              />
            </div>
          )}

          {/* Case Study Navigation - Above title, centered */}
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <CaseStudyNav />
          </div>

          {/* Centered Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.h1
              variants={heroTitleVariant}
              initial="hidden"
              animate="visible"
              className="text-[var(--text-primary-light)] text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight tracking-tight"
            >
              {heroTitle === 'REPORTCASTER' ? 'REPORT CASTER' : heroTitle}
            </motion.h1>
          </div>

          {/* 2-Column Layout - Content and Laptop */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">

            {/* Left Column: Text Content */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7">

              {/* Combined Subtitle - heroSubheading and heroSubtitle as one paragraph */}
              <motion.p
                variants={heroSubVariant}
                initial="hidden"
                animate="visible"
                className="text-[var(--text-muted-light)] text-base sm:text-lg md:text-xl font-serif italic leading-relaxed tracking-normal"
              >
                {heroSubheading && <>{heroSubheading} </>}
                {heroSubtitle}
              </motion.p>

              {/* Status Badge - Subtle, informational */}
              {status && (
                <motion.div
                  variants={heroSubVariant}
                  initial="hidden"
                  animate="visible"
                  className="pt-2"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans font-medium ${status.variant === 'live'
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : status.variant === 'shipping'
                          ? 'bg-blue-100 text-blue-700 border border-blue-300'
                          : 'bg-amber-100 text-amber-700 border border-amber-300'
                      }`}
                  >
                    {status.variant === 'live' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    )}
                    {status.variant === 'shipping' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    )}
                    {status.variant === 'development' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    )}
                    {status.label}
                  </span>
                </motion.div>
              )}

              {/* Data Sheet Link - Simple link style */}
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
                    className="inline-flex items-center gap-1.5 text-[var(--text-muted-light)] hover:text-[var(--accent-teal)] transition-colors duration-normal text-sm sm:text-base font-sans"
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
                    <span>{dataSheetLabel || 'ibi ReportCaster Data Sheet'}</span>
                  </a>
                </motion.div>
              )}

              {/* Scope Tags - Moved up */}
              {scope.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 sm:pt-5 md:pt-6">
                  {scope.map((item, index) => (
                    <span
                      key={index}
                      className="text-[var(--text-primary-light)]/80 text-[11px] uppercase tracking-widest font-sans px-2.5 py-1 rounded-full border border-[var(--accent-teal)]/50 bg-[var(--accent-teal)]/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Laptop Visual - Macro Photography Feel with Enhanced Composition */}
            {coverImage && (
              <motion.div
                className="relative flex flex-col items-center justify-center -mx-6 md:-mx-10 lg:mx-0 lg:ml-8 overflow-visible"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Subtle black shadow glow behind laptop for floating effect */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.08) 30%, rgba(0, 0, 0, 0.04) 50%, transparent 70%)',
                    filter: 'blur(60px)',
                    width: '85%',
                    height: '85%',
                  }}
                />

                {/* Laptop Container - Floating animation */}
                <div
                  className="relative cursor-pointer hover:opacity-90 transition-opacity laptop-macro-scale animate-float w-full z-10"
                  style={{
                    '--laptop-scale': '1.5',
                    transformOrigin: 'center center',
                    maxWidth: '650px',
                    width: '100%',
                  } as React.CSSProperties}
                  onClick={() => openLightbox(coverImage.src, coverImage.alt)}
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: '16/10',
                      width: '100%',
                      maxWidth: '650px',
                    }}
                  >
                    <Image
                      src={coverImage.src}
                      alt={coverImage.alt}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Testimonial and Role/Company/Timeframe Tile - Below 2-column layout */}
          <motion.div
            variants={heroSubVariant}
            initial="hidden"
            animate="visible"
            className="mt-12 sm:mt-16 md:mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Role/Company/Timeframe Tile */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-black/10 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-[var(--text-primary-light)] text-sm uppercase tracking-wider font-sans font-semibold mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-3 text-sm">
                    {/* Role */}
                    <div className="flex items-start gap-4">
                      <span className="text-[var(--text-muted-light)] text-xs uppercase tracking-wider font-sans font-medium w-[90px] flex-shrink-0">
                        Role
                      </span>
                      <span className="text-[var(--text-primary-light)] font-sans">{role}</span>
                    </div>

                    {/* Company */}
                    <div className="flex items-start gap-4">
                      <span className="text-[var(--text-muted-light)] text-xs uppercase tracking-wider font-sans font-medium w-[90px] flex-shrink-0">
                        Company
                      </span>
                      <span className="text-[var(--text-primary-light)] font-sans">{company}</span>
                    </div>

                    {/* Timeframe */}
                    <div className="flex items-start gap-4">
                      <span className="text-[var(--text-muted-light)] text-xs uppercase tracking-wider font-sans font-medium w-[90px] flex-shrink-0">
                        Timeframe
                      </span>
                      <span className="text-[var(--text-primary-light)] font-sans">{timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              {testimonial && (
                <div>
                  <HeroTestimonial testimonial={testimonial} />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Subtle Section Transition */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

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
