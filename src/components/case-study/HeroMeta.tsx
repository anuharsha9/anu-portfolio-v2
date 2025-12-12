'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageLightbox from './ImageLightbox'
import HeroTerminal from './HeroTerminal'
import SignatureLogo from '@/components/brand/SignatureLogo'
import CaseStudyNav from './CaseStudyNav'
import SocialShareButtons from '@/components/sharing/SocialShareButtons'
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
  validationLinks?: Array<{
    url: string
    label: string
  }>
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
  validationLinks,
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

  // Get case study number for eyebrow
  const getCaseStudyNumber = () => {
    if (caseStudySlug === 'reportcaster') return '001'
    if (caseStudySlug === 'ml-functions') return '002'
    if (caseStudySlug === 'iq-plugin') return '003'
    return '001'
  }

  return (
    <>
      <motion.header
        className="relative min-h-[70vh] xs:min-h-[75vh] sm:min-h-[80vh] flex items-center py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >


        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Case Study Navigation - Above Blueprint */}
          <div className="text-center mb-6 md:mb-8">
            <CaseStudyNav />
          </div>

          {/* ============================================
              PHASE 1: THE BLUEPRINT CONTAINER
              ============================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 lg:p-12 mx-0 md:mx-4 shadow-sm"
          >
            {/* 2-Column Grid: Text Left (45%), Laptop Right (55%) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 xl:gap-16 items-center">

              {/* Left Column: Typography */}
              <div className="space-y-5 md:space-y-6">
                {/* Eyebrow */}
                <motion.div
                  variants={heroSubVariant}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-3"
                >
                  <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest font-semibold">
                    Case Study {getCaseStudyNumber()}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
                </motion.div>

                {/* H1 - Primary Headline */}
                <motion.h1
                  variants={heroTitleVariant}
                  initial="hidden"
                  animate="visible"
                  className="text-slate-900 text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight"
                >
                  {caseStudySlug === 'reportcaster'
                    ? 'Modernizing a 50-Year-Old Enterprise Scheduler'
                    : caseStudySlug === 'ml-functions'
                      ? 'Democratizing Machine Learning for Everyone'
                      : caseStudySlug === 'iq-plugin'
                        ? 'Driving Data Science Adoption in Enterprise BI'
                        : heroTitle}
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                  variants={heroSubVariant}
                  initial="hidden"
                  animate="visible"
                  className="text-slate-600 text-base md:text-lg leading-relaxed"
                >
                  {caseStudySlug === 'reportcaster'
                    ? 'Consolidating 5 disparate subsystems into one unified experience for 20M+ weekly schedules.'
                    : caseStudySlug === 'ml-functions'
                      ? 'Turning a black-box data science process into a guided, 4-step workflow.'
                      : (
                        <>
                          {heroSubheading && <>{heroSubheading} </>}
                          {heroSubtitle}
                        </>
                      )
                  }
                </motion.p>

                {/* System Status Bar */}
                {status && (
                  <motion.div
                    variants={heroSubVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 pt-2"
                  >
                    {status.variant === 'shipping' ? (
                      // Shipping status - Amber badge style (signals "In Progress")
                      <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="font-mono text-xs text-amber-700 uppercase tracking-wider">
                          // STATUS: {status.label.toUpperCase().replace(/\s+/g, '_')}
                        </span>
                      </div>
                    ) : (
                      // Live or other status - Default style
                      <>
                        <span className={`w-2 h-2 rounded-full ${status.variant === 'live' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                          }`}></span>
                        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                          {status.label}
                        </span>
                      </>
                    )}
                  </motion.div>
                )}

                {/* Data Sheet Link */}
                {dataSheetUrl && (
                  <motion.div
                    variants={heroSubVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <a
                      href={dataSheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[var(--accent-teal)] transition-colors text-sm font-mono"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{dataSheetLabel || 'View Data Sheet'}</span>
                    </a>
                  </motion.div>
                )}

                {/* Validation Links - Third-party proof */}
                {validationLinks && validationLinks.length > 0 && (
                  <motion.div
                    variants={heroSubVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-x-4 gap-y-1"
                  >
                    {validationLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[var(--accent-teal)] transition-colors text-sm font-mono"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}

                {/* Technical Spec Tags */}
                {scope.length > 0 && (
                  <motion.div
                    variants={heroSubVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {scope.map((item, index) => (
                      <span
                        key={index}
                        className="font-mono text-[10px] text-slate-500 uppercase tracking-wider px-2 py-1 bg-white border border-slate-200 rounded"
                      >
                        {item.replace(/\s+/g, '_')}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Right Column: System Window with Bleed Effect */}
              {coverImage && (
                <motion.div
                  className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden rounded-xl"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* The "Cut" Effect - Terminal bleeds off edges */}
                  <div
                    className="absolute top-0 left-0 transform translate-y-2 sm:translate-y-4 lg:translate-y-6 translate-x-2 sm:translate-x-4 lg:translate-x-8 scale-[1.02] sm:scale-105 lg:scale-110 origin-top-left"
                    style={{ width: 'calc(100% + 40px)' }}
                  >
                    <HeroTerminal
                      imageSrc={coverImage.src}
                      fileName={
                        caseStudySlug === 'iq-plugin'
                          ? 'iq_hub_unified_view.tsx'
                          : caseStudySlug === 'ml-functions'
                            ? 'ml_wizard_pipeline.py'
                            : 'legacy_scheduler_refactor.js'
                      }
                      accentColor={
                        caseStudySlug === 'iq-plugin'
                          ? 'var(--accent-violet)' // Violet for IQ
                          : caseStudySlug === 'ml-functions'
                            ? 'var(--accent-teal)' // Teal for ML
                            : 'var(--accent-amber)' // Amber for RC
                      }
                      alt={coverImage.alt}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Project Meta Strip - Inside the card */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm">
                {/* Role */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Role:
                  </span>
                  <span className="font-medium text-slate-700">{role}</span>
                </div>

                <div className="hidden md:block w-px h-4 bg-slate-200"></div>

                {/* Company */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Company:
                  </span>
                  <span className="font-medium text-slate-700">{company}</span>
                </div>

                <div className="hidden md:block w-px h-4 bg-slate-200"></div>

                {/* Timeframe */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Timeline:
                  </span>
                  <span className="font-medium text-slate-700">{timeframe}</span>
                </div>
              </div>
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
