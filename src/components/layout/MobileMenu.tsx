'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSignatureLogo } from '@/components/brand'

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

  const mainNavLinks = [
    { label: 'Work', href: '/#work-overview' },
    { label: 'Me', href: '/me' },
    { label: 'Contact', href: '/#lets-talk' },
  ]

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

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--bg-dark)] border-l border-refined-dark lg:hidden flex flex-col"
              style={{
                height: '100vh',
                maxHeight: '100vh',
                zIndex: 9999,
                position: 'fixed',
                top: 0,
                right: 0,
                isolation: 'isolate'
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-refined-dark flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8">
                    <AnimatedSignatureLogo
                      className="w-full h-full text-white"
                      duration={16000}
                      pauseDuration={2000}
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
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
                  className="text-white text-lg font-medium hover:text-[var(--accent-teal)] transition-colors"
                >
                  Anuja Harsha Nimmagadda
                </Link>
              </div>

              {/* Navigation Links - Scrollable */}
              <nav className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-1" style={{ minHeight: 0 }}>
                {/* Main Navigation */}
                <div className="mb-6">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-3 px-2">
                    Navigation
                  </p>
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="/assets/Anuja-Nimmagadda-2025.pdf"
                    download="Anuja-Nimmagadda-Resume-2025.pdf"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors"
                  >
                    Resume
                  </a>
                </div>

                {/* Landing Page Sections */}
                {isOnLandingPage && (
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-3 px-2">
                      Sections
                    </p>
                    {landingPageSections.map((section) => (
                      <Link
                        key={section.href}
                        href={section.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors"
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

