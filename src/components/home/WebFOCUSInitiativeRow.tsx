'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface WebFOCUSInitiativeRowProps {
  overline: string
  title: string
  bullets: string[]
  impact: string
  ctaText: string
  ctaHref: string
  hoverMicrocopy?: string
  orientation: 'image-left' | 'image-right'
  visualImage?: string
  index: number
}

export default function WebFOCUSInitiativeRow({
  overline,
  title,
  bullets,
  impact,
  ctaText,
  ctaHref,
  hoverMicrocopy,
  orientation,
  visualImage,
  index,
}: WebFOCUSInitiativeRowProps) {
  const isImageLeft = orientation === 'image-left'
  const isIQPlugin = ctaHref === '/work/iq-plugin'
  
  // Check if IQ plugin is unlocked
  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window !== 'undefined' && isIQPlugin) {
      const storageKey = 'case-study-unlocked-iq-plugin'
      return sessionStorage.getItem(storageKey) === 'true'
    }
    return false
  })
  
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  useEffect(() => {
    if (isIQPlugin && typeof window !== 'undefined') {
      const storageKey = 'case-study-unlocked-iq-plugin'
      
      // Listen for unlock events
      const handleUnlock = () => {
        const unlocked = sessionStorage.getItem(storageKey) === 'true'
        setIsUnlocked(unlocked)
      }
      
      window.addEventListener('storage', handleUnlock)
      window.addEventListener('portfolio-unlocked', handleUnlock)
      
      // Poll for changes (in case unlocked in same tab)
      const interval = setInterval(() => {
        const unlocked = sessionStorage.getItem(storageKey) === 'true'
        setIsUnlocked(unlocked)
      }, 500)
      
      return () => {
        window.removeEventListener('storage', handleUnlock)
        window.removeEventListener('portfolio-unlocked', handleUnlock)
        clearInterval(interval)
      }
    }
  }, [isIQPlugin])
  
  const handlePasswordSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }
    
    const trimmedPassword = password.trim().toLowerCase()
    const correctPassword = 'anu-access'
    
    if (trimmedPassword === correctPassword) {
      setError('')
      if (typeof window !== 'undefined') {
        const storageKey = 'case-study-unlocked-iq-plugin'
        sessionStorage.setItem(storageKey, 'true')
        setIsUnlocked(true)
        setPassword('')
        window.dispatchEvent(new CustomEvent('portfolio-unlocked'))
      }
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  // Image placeholder with gradient if no image provided
  const ImageContent = visualImage ? (
    <div className="relative w-full h-full">
      <Image
        src={visualImage}
        alt={title}
        fill
        className="object-contain group-hover/image:scale-[1.02] transition-transform duration-500"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))' }}
      />
    </div>
  ) : (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />
  )

  // For IQ Plugin: Show locked content with blur if not unlocked
  if (isIQPlugin && !isUnlocked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
        whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
        viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
        style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.06,
        }}
        className="group relative"
        id="iq-plugin-tile"
      >
        <div
          className={`flex flex-col ${
            isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
          } gap-8 md:gap-12 items-center md:items-start relative`}
        >
          {/* Blurred Background Content */}
          <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(20px)', opacity: 0.7 }}>
            <div className={`flex flex-col ${
              isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 md:gap-12 items-center md:items-start w-full`}>
              {/* Image */}
              <div className="relative w-full md:w-1/2 flex-shrink-0 flex items-center justify-center overflow-visible">
                <div className="relative w-full" style={{ aspectRatio: '16/10', minHeight: '300px' }}>
                  {ImageContent}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-5">
                {/* Overline */}
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted-light)] font-medium">
                  {overline}
                </p>

                {/* Title */}
                <h3 className="text-[var(--text-primary-light)] text-2xl md:text-3xl lg:text-4xl font-serif transition-all duration-300 relative">
                  {title}
                </h3>

                {/* Body Bullets */}
                <ul className="space-y-3 text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
                  {bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <span className="text-[var(--accent-teal)] mt-1.5 font-bold opacity-40">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Impact Line */}
                <p className="text-[var(--text-primary-light)] text-base md:text-lg leading-relaxed font-medium pt-3 border-t border-black/10">
                  {impact}
                </p>
              </div>
            </div>
          </div>

          {/* Visible Content - Password Input Overlay */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center gap-6 py-8 md:py-12">
            <div className="text-center space-y-2">
              <h3 className="text-[var(--text-primary-light)] text-xl md:text-2xl font-serif">
                {title}
              </h3>
              <p className="text-[var(--text-muted-light)] text-sm">
                Enter password to unlock case study
              </p>
            </div>

            {/* Password Input with Circular Button */}
            <form onSubmit={handlePasswordSubmit} className="w-full max-w-md">
              <div className="flex items-center gap-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handlePasswordSubmit()
                    }
                  }}
                  placeholder="Enter password"
                  className="flex-1 px-4 py-3 rounded-full border border-black/20 text-[var(--text-primary-light)] bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:border-transparent placeholder:text-[var(--text-muted-light)] shadow-sm"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent-teal)] text-white flex items-center justify-center hover:bg-[var(--accent-teal-soft)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:ring-offset-2 shadow-md"
                  aria-label="Submit password"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
      style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06, // Stagger: 0ms, 60ms, 120ms
      }}
      className="group relative"
      id={isIQPlugin ? 'iq-plugin-tile' : undefined}
    >
      <div
        className={`flex flex-col ${
          isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        } gap-8 md:gap-12 items-center md:items-start`}
      >
        {/* Image */}
        <Link href={ctaHref} className="relative w-full md:w-1/2 flex-shrink-0 flex items-center justify-center group/image overflow-visible">
          <div className="relative w-full" style={{ aspectRatio: '16/10', minHeight: '300px' }}>
            {ImageContent}
          </div>
        </Link>

        {/* Text Content */}
        <div className="flex-1 space-y-5">
          {/* Overline */}
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted-light)] font-medium">
            {overline}
          </p>

          {/* Title */}
          <Link href={ctaHref} className="block group/title">
            <h3 
              className="text-[var(--text-primary-light)] text-2xl md:text-3xl lg:text-4xl font-serif transition-all duration-300 relative group-hover/title:text-[var(--accent-teal)]"
            >
              {title}
            </h3>
          </Link>

          {/* Body Bullets */}
          <ul className="space-y-3 text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
            {bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="flex items-start gap-3 group/bullet">
                <span className="text-[var(--accent-teal)] mt-1.5 font-bold opacity-40 group-hover/bullet:opacity-100 transition-opacity duration-300">•</span>
                <span className="group-hover/bullet:text-[var(--text-primary-light)] transition-colors duration-300">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Impact Line */}
          <p className="text-[var(--text-primary-light)] text-base md:text-lg leading-relaxed font-medium pt-3 border-t border-black/10">
            {impact}
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-x-2 rounded-full border border-black/20 text-[var(--text-primary-light)] px-6 py-3 text-sm font-medium transition-all duration-300 group/cta hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10 hover:text-[var(--accent-teal)] relative overflow-hidden"
              title={hoverMicrocopy}
            >
              <span className="relative z-10">{ctaText}</span>
              <span className="relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
              <span className="absolute inset-0 bg-[var(--accent-teal)]/5 scale-x-0 group-hover/cta:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

