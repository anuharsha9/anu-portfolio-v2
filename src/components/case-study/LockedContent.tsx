'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LockedContentProps {
  children: React.ReactNode
  isUnlocked?: boolean // Optional - if not provided, checks sessionStorage
  onUnlock?: () => void
  password?: string
  caseStudySlug?: string
  unlockMessage?: string
  isLightBackground?: boolean
}

export default function LockedContent({
  children,
  isUnlocked: propIsUnlocked,
  onUnlock,
  password = 'anu-access',
  caseStudySlug = 'default',
  unlockMessage = 'Password required to view sensitive content',
  isLightBackground = false,
}: LockedContentProps) {
  // If propIsUnlocked is explicitly false, always lock (ignore sessionStorage)
  // If propIsUnlocked is undefined, check sessionStorage
  // If propIsUnlocked is true, always unlock
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [inputPassword, setInputPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  // If propIsUnlocked is explicitly false, always lock (ignore sessionStorage)
  // If propIsUnlocked is undefined, check sessionStorage
  // If propIsUnlocked is true, always unlock
  useEffect(() => {
    if (propIsUnlocked === false) {
      setIsUnlocked(false)
      return
    }

    // If explicitly true, always unlock
    if (propIsUnlocked === true) {
      setIsUnlocked(true)
      return
    }

    // Otherwise (undefined), check sessionStorage
    const checkUnlockStatus = () => {
      if (typeof window === 'undefined') return

      const storageKey = `case-study-unlocked-${caseStudySlug}`
      const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'

      // IQ Plugin requires its own specific unlock (doesn't respect global unlock)
      if (caseStudySlug === 'iq-plugin') {
        setIsUnlocked(caseUnlocked)
      } else {
        // Other case studies respect both global and case-specific unlock
        const globalUnlocked = sessionStorage.getItem('portfolio-globally-unlocked') === 'true'
        setIsUnlocked(globalUnlocked || caseUnlocked)
      }
    }

    // Check on mount
    checkUnlockStatus()

    // Listen for storage changes (when other tabs/components unlock)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'portfolio-globally-unlocked' || e.key?.startsWith('case-study-unlocked-')) {
        checkUnlockStatus()
      }
    }

    // Listen for custom unlock event (when same-tab components unlock)
    const handleUnlockEvent = () => {
      checkUnlockStatus()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('portfolio-unlocked', handleUnlockEvent)

    // Poll less frequently for better performance (reduced from 500ms to 2000ms)
    // Storage events handle cross-tab changes, polling is just a fallback
    const interval = setInterval(checkUnlockStatus, 2000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('portfolio-unlocked', handleUnlockEvent)
      clearInterval(interval)
    }
  }, [propIsUnlocked, caseStudySlug])

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }

    if (!inputPassword.trim()) {
      setError('Please enter a password.')
      return
    }

    const trimmedPassword = inputPassword.trim().toLowerCase()
    const correctPassword = password.toLowerCase()

    if (trimmedPassword === correctPassword) {
      setError('')
      setSuccess(true)

      // Set sessionStorage
      if (typeof window !== 'undefined') {
        const storageKey = `case-study-unlocked-${caseStudySlug}`

        // IQ Plugin only sets its own unlock (doesn't set global unlock)
        if (caseStudySlug === 'iq-plugin') {
          sessionStorage.setItem(storageKey, 'true')
        } else {
          // Other case studies set both global unlock and case-specific unlock
          sessionStorage.setItem('portfolio-globally-unlocked', 'true')
          sessionStorage.setItem(storageKey, 'true')
          // Dispatch custom event to notify all components
          window.dispatchEvent(new CustomEvent('case-study-unlocked', { detail: { slug: caseStudySlug } }))
          window.dispatchEvent(new CustomEvent('portfolio-unlocked'))
        }
      }

      // Wait a moment to show success, then unlock
      setTimeout(() => {
        setIsUnlocked(true)
        setShowPasswordModal(false)
        setSuccess(false)
        setInputPassword('')
        // Call onUnlock callback if provided
        if (onUnlock) {
          onUnlock()
        }
      }, 1000)
    } else {
      setError('Incorrect password. Please try again.')
      setSuccess(false)
      setInputPassword('')
    }
  }

  // If unlocked, show content
  if (isUnlocked) {
    return <>{children}</>
  }

  const bgColor = isLightBackground ? 'bg-white/90' : 'bg-[var(--bg-dark)]/60'
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const borderColor = isLightBackground ? 'border-black/20' : 'border-white/20'

  return (
    <>
      <div className="relative">
        {/* Blurred Content - 70% blur (strong blur with some visibility) */}
        <div className="pointer-events-none select-none" style={{ filter: 'blur(25px)', opacity: 0.3 }}>
          {children}
        </div>

        {/* Lock Overlay */}
        <div className={`absolute inset-0 ${bgColor} backdrop-blur-sm flex flex-col items-center justify-center p-8 rounded-lg border-2 ${borderColor}`}>
          <div className="text-center space-y-4 max-w-md">
            {/* Lock Icon */}
            <div className="flex justify-center">
              <svg
                className={`w-12 h-12 ${isLightBackground ? 'text-[#1A1A1A]' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ strokeWidth: isLightBackground ? 2.5 : 2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={isLightBackground ? 2.5 : 2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <p className={`${textColor} font-semibold text-lg ${isLightBackground ? 'drop-shadow-sm' : ''}`}>
                {unlockMessage}
              </p>
              <p className={`${isLightBackground ? 'text-[#4A4A4A]' : 'text-white/70'} text-sm ${isLightBackground ? 'drop-shadow-sm' : ''}`}>
                This content contains company-specific information and requires password access.
              </p>
            </div>

            <button
              onClick={() => setShowPasswordModal(true)}
              className={`${isLightBackground ? 'bg-[#1A1A1A] text-white hover:bg-[#333333]' : 'bg-white text-[#1A1A1A] hover:bg-white/90'} px-6 py-3 rounded-lg font-medium transition-colors`}
            >
              Enter Password
            </button>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPasswordModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative ${bgColor} rounded-2xl border-2 ${borderColor} p-8 max-w-md w-full shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPasswordModal(false)}
                className={`absolute top-4 right-4 ${isLightBackground ? 'text-[#1A1A1A] hover:text-[#666666]' : 'text-white hover:text-white/70'} transition-colors`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className={`${textColor} text-2xl font-serif`}>Unlock Content</h3>
                  <p className={`${isLightBackground ? 'text-[#666666]' : 'text-white/70'} text-sm`}>
                    Enter password to view sensitive content
                  </p>
                  {caseStudySlug !== 'iq-plugin' && (
                    <p className={`${isLightBackground ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-teal)]'} text-xs font-medium mt-2`}>
                      ✓ Unlocking this section will unlock all protected content across the entire website
                    </p>
                  )}
                </div>

                <form onSubmit={handleUnlock} className="space-y-4">
                  <div>
                    <input
                      type="password"
                      value={inputPassword}
                      onChange={(e) => {
                        setInputPassword(e.target.value)
                        setError('')
                        setSuccess(false)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          handleUnlock(e)
                        }
                      }}
                      placeholder="Enter password"
                      className={`w-full px-4 py-3 rounded-lg border-2 ${error ? 'border-red-400' : success ? 'border-green-400' : borderColor} ${isLightBackground ? 'bg-white text-[#1A1A1A]' : 'bg-white/10 text-white'} placeholder:${isLightBackground ? 'text-[#999999]' : 'text-white/50'} focus:outline-none focus:border-[var(--accent-teal)] transition-colors`}
                      autoFocus
                      disabled={success}
                    />
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                      </motion.p>
                    )}
                    {success && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-green-400 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Password correct! Unlocking content...
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={success}
                    className={`w-full text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-75 disabled:cursor-not-allowed ${success
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/90'
                      }`}
                  >
                    {success ? 'Unlocking...' : 'Unlock Content'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
