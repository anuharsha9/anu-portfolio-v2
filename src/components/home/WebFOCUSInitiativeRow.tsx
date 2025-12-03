'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
  const isLocked = title === 'IQ Plugin'
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [inputPassword, setInputPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // Check if unlocked - IQ Plugin requires its own specific unlock
  useEffect(() => {
    if (typeof window !== 'undefined' && isLocked) {
      const checkUnlock = () => {
        // IQ Plugin requires its own specific unlock (doesn't respect global unlock)
        const storageKey = 'case-study-unlocked-iq-plugin'
        const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'
        setIsUnlocked(caseUnlocked)
      }
      checkUnlock()
      
      // Listen for storage changes (only for IQ Plugin specific unlock)
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'case-study-unlocked-iq-plugin') {
          checkUnlock()
        }
      }
      
      window.addEventListener('storage', handleStorageChange)
      
      // Poll periodically to catch same-tab unlocks
      const interval = setInterval(checkUnlock, 500)
      
      return () => {
        window.removeEventListener('storage', handleStorageChange)
        clearInterval(interval)
      }
    }
  }, [isLocked])

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }

    if (!inputPassword.trim()) {
      setError('Please enter a password.')
      return
    }

    const trimmedPassword = inputPassword.trim().toLowerCase()
    const correctPassword = 'anu-access'
    
    if (trimmedPassword === correctPassword) {
      setError('')
      setSuccess(true)
      
      // Set sessionStorage - IQ Plugin only sets its own unlock (doesn't set global unlock)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('case-study-unlocked-iq-plugin', 'true')
        // Don't dispatch global unlock event for IQ Plugin
      }
      
      // Wait a moment to show success, then unlock
      setTimeout(() => {
        setIsUnlocked(true)
        setShowPasswordModal(false)
        setSuccess(false)
        setInputPassword('')
      }, 1000)
    } else {
      setError('Incorrect password. Please try again.')
      setSuccess(false)
      setInputPassword('')
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

      {/* Lock Overlay for IQ Plugin */}
      {isLocked && !isUnlocked && (
        <div 
          className="absolute inset-0 bg-white/80 backdrop-blur-xl z-10 flex items-center justify-center rounded-lg cursor-pointer"
          onClick={() => setShowPasswordModal(true)}
        >
          <div className="text-center space-y-4 px-8">
            <div className="flex justify-center">
              <svg
                className="w-16 h-16 text-[var(--accent-teal)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <p className="text-[var(--text-primary-light)] text-lg font-medium">
              This case study is locked
            </p>
            <p className="text-[var(--text-muted-light)] text-sm">
              Confidential company information
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowPasswordModal(true)
              }}
              className="mt-4 px-6 py-2 rounded-full border border-[var(--accent-teal)]/50 bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] font-medium hover:bg-[var(--accent-teal)]/20 transition-all duration-300"
            >
              Unlock with password
            </button>
          </div>
        </div>
      )}

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowPasswordModal(false)
              setError('')
              setInputPassword('')
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="w-12 h-12 text-[var(--accent-teal)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1A1A1A] mb-2">
                    Unlock IQ Plugin Case Study
                  </h3>
                  <p className="text-sm text-[#666666] mb-1">
                    This case study is locked due to confidential company information.
                  </p>
                  <p className="text-xs text-[var(--accent-teal)] font-medium">
                    ✓ Unlocking this section will unlock all protected content across the entire website
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleUnlock()
                  }}
                  className="space-y-4"
                >
                  <div>
                    <input
                      type="password"
                      value={inputPassword}
                      onChange={(e) => {
                        setInputPassword(e.target.value)
                        setError('')
                      }}
                      placeholder="Enter password"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                        error
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : success
                          ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
                          : 'border-[var(--accent-teal)]/30 focus:border-[var(--accent-teal)] focus:ring-[var(--accent-teal)]/20'
                      } focus:outline-none focus:ring-4 text-[#1A1A1A]`}
                      autoFocus
                    />
                    {error && (
                      <p className="mt-2 text-sm text-red-600">{error}</p>
                    )}
                    {success && (
                      <p className="mt-2 text-sm text-green-600">✓ Unlocking...</p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowPasswordModal(false)
                        setError('')
                        setInputPassword('')
                        setSuccess(false)
                      }}
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-black/20 text-[#1A1A1A] font-medium hover:bg-black/5 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={handleUnlock}
                      className="flex-1 px-4 py-3 rounded-lg bg-[var(--accent-teal)] text-white font-medium hover:bg-[var(--accent-teal)]/90 transition-all duration-300"
                    >
                      {success ? 'Unlocking...' : 'Unlock Content'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

