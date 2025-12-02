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
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
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
    { label: 'Work', href: '/#selected-work' },
    { label: 'Me', href: '/me' },
    { label: 'Contact', href: '/#contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 z-[60] relative pointer-events-auto"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        type="button"
      >
        <motion.span
          className="w-6 h-0.5 bg-white rounded-full"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white rounded-full"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white rounded-full"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-[var(--bg-dark)] border-l border-white/10 z-[80] lg:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8">
                    <AnimatedSignatureLogo
                      className="w-full h-full text-white"
                      duration={8000}
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
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
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
              <div className="p-6 border-t border-white/10 flex-shrink-0">
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

