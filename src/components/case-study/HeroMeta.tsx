'use client'

import Image from 'next/image'
import { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import { SignatureLogo } from '@/components/brand'
import CaseStudyNav from './CaseStudyNav'

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
      <header className="relative min-h-[80vh] flex items-center py-16 md:py-24">
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
            <SignatureLogo className="w-full h-full text-white" />
          </div>
        </div>

        <div className="relative z-10 w-full">
          {/* 2-Column Bento Grid Layout - 40% text, 60% image */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-20 items-center">

            {/* Left Column: Text Content */}
            <div className="space-y-6 lg:space-y-7">
              {/* Case Study Navigation - Links to other case studies */}
              <CaseStudyNav />
              
              {/* Main Title - Single Line */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[0.95] tracking-tighter whitespace-nowrap">
                {heroTitle}
              </h1>

              {/* Subtitle */}
              {heroSubheading && (
                <p className="text-gray-400 text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed">
                  {heroSubheading}
                </p>
              )}

              {/* Subtitle Text */}
              <p className="text-gray-400 text-lg md:text-xl font-serif italic leading-relaxed">
                {heroSubtitle}
              </p>

              {/* Metadata - Restructured for Better Visual Alignment */}
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-4">
                  {/* First Row: Role & Company */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="text-gray-500 text-xs uppercase tracking-wider font-sans font-medium">
                        Role
                      </div>
                      <div className="text-white text-sm font-sans leading-snug">
                        {role}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-500 text-xs uppercase tracking-wider font-sans font-medium">
                        Company
                      </div>
                      <div className="text-white text-sm font-sans leading-snug">
                        {company}
                      </div>
                    </div>
                  </div>

                  {/* Second Row: Timeframe */}
                  <div className="space-y-1">
                    <div className="text-gray-500 text-xs uppercase tracking-wider font-sans font-medium">
                      Timeframe
                    </div>
                    <div className="text-white text-sm font-sans">
                      {timeframe}
                    </div>
                  </div>

                  {/* Third Row: Scope */}
                  <div className="space-y-2">
                    <div className="text-gray-500 text-xs uppercase tracking-wider font-sans font-medium">
                      Scope
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {scope.map((item, index) => (
                        <span
                          key={index}
                          className="text-gray-400 text-xs uppercase tracking-widest font-sans px-3 py-1 rounded-full border border-gray-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Demo Buttons - Subtle Style */}
                  {(demoVideoUrl || demoVideoUrl2 || hasPrototype) && (
                    <div className="pt-4 flex flex-wrap gap-3">
                      {demoVideoUrl && (
                        <a
                          href={demoVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white text-sm font-medium group"
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
                      )}
                      {demoVideoUrl2 && (
                        <a
                          href={demoVideoUrl2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white text-sm font-medium group"
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
                      )}
                      {hasPrototype && (
                        <a
                          href={`#prototype`}
                          onClick={(e) => {
                            e.preventDefault()
                            // Check if password content is unlocked
                            if (typeof window !== 'undefined' && caseStudySlug) {
                              const storageKey = `case-study-unlocked-${caseStudySlug}`
                              const isUnlocked = sessionStorage.getItem(storageKey) === 'true'
                              if (!isUnlocked) {
                                // Scroll to password gate first
                                const passwordGate = document.getElementById('password-gate')
                                if (passwordGate) {
                                  passwordGate.scrollIntoView({ behavior: 'smooth' })
                                  return
                                }
                              }
                            }
                            // Scroll to prototype section
                            const prototypeSection = document.getElementById('prototype')
                            if (prototypeSection) {
                              prototypeSection.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white text-sm font-medium group"
                        >
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Laptop Visual - Macro Photography Feel */}
            {coverImage && (
              <div className="relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center lg:justify-start -mx-6 md:-mx-10 lg:mx-0 lg:ml-12 overflow-visible">
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

                {/* Laptop Container - Macro Scale with Bleed */}
                <div
                  className="relative w-full lg:w-auto scale-125 animate-float cursor-pointer hover:opacity-90 transition-opacity -mr-0 lg:-mr-20 laptop-macro-scale"
                  onClick={() => openLightbox(coverImage.src, coverImage.alt)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '16/10', minHeight: '300px' }}>
                    <Image
                      src={coverImage.src}
                      alt={coverImage.alt}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      style={{
                        filter: 'drop-shadow(0 20px 60px rgba(67, 56, 202, 0.3))',
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

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
