'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackPWAInstall, trackPWAInstallPrompt } from '@/components/analytics/GoogleAnalytics'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Check if user previously dismissed the prompt
    const dismissed = sessionStorage.getItem('pwa-install-dismissed')
    if (dismissed === 'true') {
      setIsDismissed(true)
      return
    }

    let timer: NodeJS.Timeout | null = null

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the default mini-infobar from appearing
      e.preventDefault()
      // Store the event for later use
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Show prompt after a delay (e.g., after user has been on site for 30 seconds)
      timer = setTimeout(() => {
        setShowPrompt(true)
        trackPWAInstallPrompt()
      }, 30000) // 30 seconds delay
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowPrompt(false)
      setDeferredPrompt(null)
      trackPWAInstall()
    }

    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Show the install prompt
    await deferredPrompt.prompt()

    // Wait for the user to respond
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
      setShowPrompt(false)
      setDeferredPrompt(null)
    } else {
      console.log('User dismissed the install prompt')
      // Store dismissal in sessionStorage
      sessionStorage.setItem('pwa-install-dismissed', 'true')
      setIsDismissed(true)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    sessionStorage.setItem('pwa-install-dismissed', 'true')
    setIsDismissed(true)
    setShowPrompt(false)
  }

  // Don't show if already installed, dismissed, or no prompt available
  if (isInstalled || isDismissed || !showPrompt || !deferredPrompt) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        role="dialog"
        aria-labelledby="install-prompt-title"
        aria-describedby="install-prompt-description"
      >
        <div className="bg-white rounded-lg border border-black/10 shadow-lg p-4 md:p-6 space-y-4">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[var(--accent-teal)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                id="install-prompt-title"
                className="text-[var(--text-primary-light)] text-lg font-serif font-semibold mb-1"
              >
                Install Portfolio App
              </h3>
              <p
                id="install-prompt-description"
                className="text-[var(--text-muted-light)] text-sm leading-relaxed"
              >
                Add this portfolio to your home screen for quick access and an app-like experience.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[var(--text-muted-light)] hover:text-[var(--text-primary-light)] transition-colors"
              aria-label="Dismiss install prompt"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleInstallClick}
              className="flex-1 px-4 py-2.5 rounded-full bg-[var(--accent-teal)] text-white font-medium hover:bg-[var(--accent-teal)]/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
              aria-label="Install portfolio app"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2.5 rounded-full border border-black/10 text-[var(--text-primary-light)] font-medium hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
            >
              Not now
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

