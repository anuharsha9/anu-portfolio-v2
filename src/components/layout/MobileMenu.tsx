'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import { trackResumeDownload } from '@/components/analytics/GoogleAnalytics'

interface MobileMenuProps {
  isLandingPage?: boolean
}

export default function MobileMenu({ isLandingPage = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Landing page section links
  const landingPageSections = [
    { label: 'Executive Summary', href: '/#executive-summary' },
    { label: 'Work Overview', href: '/#work-overview' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Work Archive', href: '/#work-archive' },
    { label: 'Contact', href: '/#contact' },
  ]

  // Check if we're on landing page
  const isOnLandingPage = pathname === '/'

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Hamburger Button - Hide when menu is open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 relative pointer-events-auto"
            style={{ zIndex: 10001 }}
            aria-label="Open menu"
            aria-expanded={false}
            type="button"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9998,
                isolation: 'isolate'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel - Full Screen Overlay */}
            <motion.div
              className="fixed inset-0 bg-[var(--bg-dark)] lg:hidden flex flex-col"
              style={{
                height: '100vh',
                maxHeight: '100vh',
                zIndex: 9999,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                isolation: 'isolate'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - Centered */}
              <div className="p-8 border-b border-refined-dark flex-shrink-0 text-center">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex-1"></div>
                  <div className="w-12 h-12 mx-auto">
                    <AnimatedSignatureLogo
                      className="w-full h-full text-white"
                      duration={16000}
                      pauseDuration={2000}
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-serif font-medium hover:text-[var(--accent-teal)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Anuja Harsha Nimmagadda
                </Link>
                <p className="text-white/60 text-sm mt-2">Principal UX Designer</p>
              </div>

              {/* Navigation Links - Scrollable */}
              <nav className="flex-1 overflow-y-auto overflow-x-hidden p-8 space-y-2" style={{ minHeight: 0 }} aria-label="Main navigation">
                {/* Main Navigation */}
                <div className="mb-8">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-4 px-2">
                    Navigation
                  </p>

                  <Link
                    href="/#work-overview"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 rounded-lg text-white text-lg font-medium hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Case Studies
                  </Link>

                  <Link
                    href="/me"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 rounded-lg text-white text-lg font-medium hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Me
                  </Link>

                  <Link
                    href="/#lets-talk"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 rounded-lg text-white text-lg font-medium hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Contact
                  </Link>

                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackResumeDownload()
                      setIsOpen(false)
                    }}
                    className="block px-6 py-4 rounded-lg text-white text-lg font-medium hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-2 border-[var(--accent-teal)]/50 bg-[var(--accent-teal)]/10 mt-4"
                    aria-label="View Resume"
                  >
                    View Resume
                  </a>
                </div>

                {/* Landing Page Sections */}
                {isOnLandingPage && (
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-4 px-2">
                      Sections
                    </p>
                    {landingPageSections.map((section) => (
                      <Link
                        key={section.href}
                        href={section.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-3 rounded-lg text-white/80 text-base hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                )}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-refined-dark flex-shrink-0">
                <p className="text-white/40 text-xs text-center">
                  © {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

