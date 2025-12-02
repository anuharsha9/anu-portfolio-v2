'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageLightbox from './ImageLightbox'
import { SignatureLogo } from '@/components/brand'
import CaseStudyNav from './CaseStudyNav'
import Button from '@/components/ui/Button'
import { heroTitleVariant, heroSubVariant, heroButtonsVariant, fadeIn, buttonHover, buttonTap } from '@/lib/animations'

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
}: HeroMetaProps) {
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
            <SignatureLogo className="w-full h-full text-[var(--text-primary-dark)]" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* 2-Column Bento Grid Layout - 40% text, 60% image */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

            {/* Left Column: Text Content */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {/* Case Study Navigation - Links to other case studies */}
              <CaseStudyNav />
              
              {/* Main Title - Single Line */}
              <motion.h1 
                variants={heroTitleVariant}
                initial="hidden"
                animate="visible"
                className="text-[var(--text-primary-dark)] text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[0.95] tracking-tighter break-words"
              >
                {heroTitle}
              </motion.h1>

              {/* Subtitle */}
              {heroSubheading && (
                <motion.p 
                  variants={heroSubVariant}
                  initial="hidden"
                  animate="visible"
                  className="text-[var(--text-muted-dark)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed"
                >
                  {heroSubheading}
                </motion.p>
              )}

              {/* Subtitle Text */}
              <motion.p 
                variants={heroSubVariant}
                initial="hidden"
                animate="visible"
                className="text-[var(--text-muted-dark)] text-base sm:text-lg md:text-xl font-serif italic leading-relaxed"
              >
                {heroSubtitle}
              </motion.p>

              {/* Metadata - Lightened Presentation */}
              <div className="pt-6 sm:pt-7 md:pt-8 space-y-4 sm:space-y-5 md:space-y-6">
                {/* First Row: Role & Company */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div className="space-y-1.5">
                    <div className="text-[var(--text-muted-dark)] text-xs uppercase tracking-wider font-sans font-medium opacity-50">
                      Role
                    </div>
                    <div className="text-[var(--text-primary-dark)] text-sm font-sans leading-snug">
                      {role}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[var(--text-muted-dark)] text-xs uppercase tracking-wider font-sans font-medium opacity-50">
                      Company
                    </div>
                    <div className="text-[var(--text-primary-dark)] text-sm font-sans leading-snug">
                      {company}
                    </div>
                  </div>
                </div>

                {/* Second Row: Timeframe */}
                <div className="space-y-1.5">
                  <div className="text-[var(--text-muted-dark)] text-xs uppercase tracking-wider font-sans font-medium opacity-50">
                    Timeframe
                  </div>
                  <div className="text-[var(--text-primary-dark)] text-sm font-sans">
                    {timeframe}
                  </div>
                </div>

                {/* Third Row: Scope */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {scope.map((item, index) => (
                      <span
                        key={index}
                        className="text-[var(--text-muted-dark)] text-[11px] uppercase tracking-widest font-sans px-2.5 py-1 rounded-full border border-[var(--accent-teal)]/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                  {/* Demo Buttons - Using Button Component for Consistency */}
                  {(demoVideoUrl || demoVideoUrl2 || hasPrototype) && (
                    <motion.div 
                      variants={heroButtonsVariant}
                      initial="hidden"
                      animate="visible"
                      className="pt-4 flex flex-row flex-wrap gap-3"
                    >
                      {demoVideoUrl && (
                        <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                          <a
                            href={demoVideoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--text-primary-dark)]/20 bg-transparent hover:bg-[var(--accent-teal)]/10 hover:border-[var(--accent-teal)]/30 transition-all duration-300 text-[var(--text-primary-dark)] text-sm md:text-base font-medium"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            <span>{demoVideoLabel || 'Public Demo'}</span>
                          </a>
                        </motion.div>
                      )}
                      {demoVideoUrl2 && (
                        <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                          <a
                            href={demoVideoUrl2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--text-primary-dark)]/20 bg-transparent hover:bg-[var(--accent-teal)]/10 hover:border-[var(--accent-teal)]/30 transition-all duration-300 text-[var(--text-primary-dark)] text-sm md:text-base font-medium"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            <span>{demoVideoLabel2 || 'Public Demo'}</span>
                          </a>
                        </motion.div>
                      )}
                      {hasPrototype && (
                        <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                          <a
                            href={`#prototype`}
                            onClick={(e) => {
                              e.preventDefault()
                              // Check if case study is unlocked
                              if (typeof window !== 'undefined' && caseStudySlug) {
                                const storageKey = `case-study-unlocked-${caseStudySlug}`
                                const isUnlocked = sessionStorage.getItem(storageKey) === 'true'
                                if (!isUnlocked) {
                                  // Set flag to indicate user wants to go to prototype after unlocking
                                  sessionStorage.setItem(`redirect-to-prototype-${caseStudySlug}`, 'true')
                                  // Scroll to the main password gate (same one that unlocks the case study)
                                  const passwordGate = document.getElementById('password-gate')
                                  if (passwordGate) {
                                    passwordGate.scrollIntoView({ behavior: 'smooth' })
                                    return
                                  }
                                } else {
                                  // Case study is unlocked, scroll to prototype section
                                  const prototypeSection = document.getElementById('prototype')
                                  if (prototypeSection) {
                                    prototypeSection.scrollIntoView({ behavior: 'smooth' })
                                  }
                                }
                              } else {
                                // Fallback: try to scroll to prototype
                                const prototypeSection = document.getElementById('prototype')
                                if (prototypeSection) {
                                  prototypeSection.scrollIntoView({ behavior: 'smooth' })
                                }
                              }
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--text-primary-dark)]/20 bg-transparent hover:bg-[var(--accent-teal)]/10 hover:border-[var(--accent-teal)]/30 transition-all duration-300 text-[var(--text-primary-dark)] text-sm md:text-base font-medium"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>Video Walkthrough</span>
                          </a>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
              </div>
            </div>

            {/* Right Column: Laptop Visual - Macro Photography Feel */}
            {coverImage && (
              <motion.div 
                className="relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center lg:justify-start -mx-6 md:-mx-10 lg:mx-0 lg:ml-12 overflow-visible"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Enhanced Glow Effect - Larger and More Visible */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(67, 56, 202, 0.4) 0%, rgba(37, 99, 235, 0.3) 30%, rgba(30, 27, 75, 0.2) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                    width: '80%',
                    height: '80%',
                  }}
                />

                {/* Laptop Container - Macro Scale with Bleed - Reduced by 25% */}
                <div
                  className="relative cursor-pointer hover:opacity-90 transition-opacity laptop-macro-scale animate-float"
                  style={{
                    '--laptop-scale': '1.4625',
                    transformOrigin: 'center center',
                    width: '100%',
                    maxWidth: 'none',
                  } as React.CSSProperties}
                  onClick={() => openLightbox(coverImage.src, coverImage.alt)}
                >
                  <div 
                    className="relative"
                    style={{ 
                      aspectRatio: '16/10', 
                      minHeight: '300px',
                      width: '100%',
                    }}
                  >
                    <Image
                      src={coverImage.src}
                      alt={coverImage.alt}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      style={{
                        filter: 'drop-shadow(0 20px 60px rgba(67, 56, 202, 0.3))',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
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
