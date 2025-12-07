'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface InlinePasswordGateProps {
  // Content to unlock
  children: React.ReactNode
  
  // Title for the locked banner
  title?: string
  
  // Description for the locked banner
  description?: string
  
  // Password for unlocking
  password?: string
  
  // Case study slug for session storage
  caseStudySlug?: string
  
  // Callback when unlocked
  onUnlock?: () => void
  
  // Whether this is already unlocked (controlled mode)
  isUnlocked?: boolean
}

export default function InlinePasswordGate({
  children,
  title = 'Deep Dive: Protected Content',
  description = 'Detailed artifacts and sensitive diagrams are available for authorized reviewers.',
  password = 'anu-access',
  caseStudySlug = 'default',
  onUnlock,
  isUnlocked: propIsUnlocked,
}: InlinePasswordGateProps) {
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [inputPassword, setInputPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  // Check unlock status on mount and listen for changes
  useEffect(() => {
    if (propIsUnlocked === true) {
      setIsUnlocked(true)
      return
    }
    
    if (propIsUnlocked === false) {
      setIsUnlocked(false)
      return
    }

    const checkUnlockStatus = () => {
      if (typeof window === 'undefined') return

      const storageKey = `case-study-unlocked-${caseStudySlug}`
      const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'

      if (caseStudySlug === 'iq-plugin') {
        setIsUnlocked(caseUnlocked)
      } else {
        const globalUnlocked = sessionStorage.getItem('portfolio-globally-unlocked') === 'true'
        setIsUnlocked(globalUnlocked || caseUnlocked)
      }
    }

    checkUnlockStatus()

    const handleUnlockEvent = () => checkUnlockStatus()
    
    window.addEventListener('storage', handleUnlockEvent)
    window.addEventListener('portfolio-unlocked', handleUnlockEvent)

    return () => {
      window.removeEventListener('storage', handleUnlockEvent)
      window.removeEventListener('portfolio-unlocked', handleUnlockEvent)
    }
  }, [propIsUnlocked, caseStudySlug])

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setError('')
    setSuccess(false)

    if (!inputPassword.trim()) {
      setError('Please enter a password.')
      return
    }

    const trimmedPassword = inputPassword.trim().toLowerCase()
    const correctPassword = password.toLowerCase()

    if (trimmedPassword === correctPassword) {
      setError('')
      setSuccess(true)

      if (typeof window !== 'undefined') {
        const storageKey = `case-study-unlocked-${caseStudySlug}`

        if (caseStudySlug === 'iq-plugin') {
          sessionStorage.setItem(storageKey, 'true')
        } else {
          sessionStorage.setItem('portfolio-globally-unlocked', 'true')
          sessionStorage.setItem(storageKey, 'true')
          window.dispatchEvent(new CustomEvent('portfolio-unlocked'))
        }
      }

      setTimeout(() => {
        setIsUnlocked(true)
        setShowPasswordModal(false)
        setSuccess(false)
        setInputPassword('')
        setError('')
        if (onUnlock) onUnlock()
      }, 1000)
    } else {
      setError('Incorrect password. Please try again.')
      setSuccess(false)
      setInputPassword('')
    }
  }

  // If unlocked, show children
  if (isUnlocked) return <>{children}</>

  return (
    <>
      {/* Locked Insight Banner with Hover Glow */}
      <div className="bg-[var(--accent-teal-50)] border-l-4 border-[var(--accent-teal)] p-4 my-8 rounded-r-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--highlight-active)] hover:bg-[var(--accent-teal-100)]/80 cursor-pointer group"
        onClick={() => setShowPasswordModal(true)}>
        <div className="flex items-start gap-4">
          {/* Lock Icon */}
          <span className="text-2xl flex-shrink-0">🔒</span>
          
          <div className="flex-1 space-y-2">
            {/* Headline */}
            <h4 className="font-serif text-[var(--text-heading)] text-lg font-semibold">
              {title}
            </h4>
            
            {/* Description */}
            <p className="text-[var(--text-body)] text-sm leading-relaxed">
              {description}
            </p>
            
            {/* Ghost Button */}
            <button 
              onClick={() => setShowPasswordModal(true)} 
              className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium text-[var(--accent-teal)] border border-[var(--accent-teal)]/30 rounded-lg hover:bg-[var(--accent-teal-soft)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Enter Password
            </button>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setShowPasswordModal(false)} 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }} 
              className="relative bg-[var(--bg-secondary)] rounded-2xl border-2 border-[var(--border-primary)] p-8 max-w-md w-full shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowPasswordModal(false)} 
                className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-body)] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-[var(--text-heading)] text-2xl font-serif">Unlock Content</h3>
                  <p className="text-[var(--text-muted)] text-sm">Enter password to view sensitive content</p>
                  {caseStudySlug !== 'iq-plugin' && (
                    <p className="text-[var(--accent-teal)] text-xs font-medium mt-2">
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
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                        error 
                          ? 'border-[var(--color-error)]' 
                          : success 
                            ? 'border-[var(--color-success)]' 
                            : 'border-[var(--border-primary)] focus:border-[var(--accent-teal)]'
                      } bg-[var(--bg-secondary)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus:outline-none`}
                      autoFocus
                      disabled={success}
                    />
                    {error && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="mt-2 text-sm text-[var(--color-error)] flex items-center gap-2"
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
                        className="mt-2 text-sm text-[var(--color-success)] flex items-center gap-2"
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
                    className={`w-full text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-75 disabled:cursor-not-allowed ${
                      success 
                        ? 'bg-[var(--color-success)] hover:bg-[var(--color-success)]' 
                        : 'bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-700)]'
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

