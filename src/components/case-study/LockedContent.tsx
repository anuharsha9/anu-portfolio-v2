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
  unlockMessage = 'Password required to view internal discovery details',
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

  // Modal styling based on background
  const bgColor = isLightBackground ? 'bg-white' : 'bg-[var(--bg-dark)]'
  const borderColor = isLightBackground ? 'border-gray-200' : 'border-white/20'
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'

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

    // Clear previous errors
    setError('')
    setSuccess(false)

    // Validation: Check if password is empty
    if (!inputPassword.trim()) {
      setError('Please enter a password.')
      return
    }

    const trimmedPassword = inputPassword.trim().toLowerCase()
    const correctPassword = password.toLowerCase()

    if (trimmedPassword === correctPassword) {
      // Success state
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

      // Wait a moment to show success message, then unlock and close modal
      setTimeout(() => {
        setIsUnlocked(true)
        setShowPasswordModal(false)
        setSuccess(false)
        setInputPassword('')
        setError('')
        // Call onUnlock callback if provided
        if (onUnlock) {
          onUnlock()
        }
      }, 1500)
    } else {
      // Error state - incorrect password
      setError('Incorrect password. Please try again.')
      setSuccess(false)
      setInputPassword('')
    }
  }

  // If unlocked, show content
  if (isUnlocked) {
    return <>{children}</>
  }

  return (
    <>
      {/* Lock UI - No content rendered, just the lock card */}
      <div className="flex flex-col items-center justify-center py-16 md:py-20">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200/50 px-8 py-12 max-w-md w-full text-center">
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-16 h-16 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Heading */}
          <h3 className="text-gray-900 font-bold text-lg mb-3">
            {unlockMessage}
          </h3>

          {/* Descriptive Text */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            This content contains company-specific information and requires password access.
          </p>

          {/* Unlock Link */}
          <button
            onClick={() => setShowPasswordModal(true)}
            className="text-[var(--accent-teal)] hover:text-[var(--accent-teal-700)] underline text-sm font-medium transition-colors"
          >
            Unlock
          </button>
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
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${error
                          ? 'border-red-400 focus:border-red-500'
                          : success
                            ? 'border-green-400 focus:border-green-500'
                            : `${borderColor} focus:border-[var(--accent-teal)]`
                        } ${isLightBackground ? 'bg-white text-[#1A1A1A]' : 'bg-white/10 text-white'} ${isLightBackground ? 'placeholder:text-[#999999]' : 'placeholder:text-white/50'} focus:outline-none`}
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
