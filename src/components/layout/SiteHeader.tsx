'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatedSignatureLogo } from '@/components/brand'
import { trackResumeDownload } from '@/components/analytics/GoogleAnalytics'
import { useScrollManager } from '@/hooks/useScrollManager'
import MobileMenu from './MobileMenu'

export default function SiteHeader() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const isLandingPage = pathname === '/'

  // Always show header on /me page, otherwise use scroll behavior
  const alwaysVisible = pathname === '/me'

  useEffect(() => {
    if (alwaysVisible) {
      setIsVisible(true)
      return
    }

    // Always show header on mobile (for hamburger menu access)
    const isMobile = window.innerWidth < 1024 // lg breakpoint
    if (isMobile) {
      setIsVisible(true)
      return
    }

    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1024
      if (isMobileNow) {
        setIsVisible(true)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [alwaysVisible])

  // Use centralized scroll manager
  useScrollManager((scrollY) => {
    if (alwaysVisible || (typeof window !== 'undefined' && window.innerWidth < 1024)) return
    // Show header when user scrolls down more than 100px
    setIsVisible(scrollY > 100)
  }, [alwaysVisible])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-[var(--bg-dark)] backdrop-blur-md shadow-lg transition-all duration-500 ${isVisible
          ? 'opacity-100 translate-y-0 border-b border-white/10 h-auto'
          : 'opacity-0 -translate-y-full pointer-events-none invisible h-0 overflow-hidden border-b border-transparent'
        }`}
      style={{ zIndex: 10000, isolation: 'isolate', position: 'fixed' }}
    >
      <nav className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center transition-colors group"
        >
          <div className="w-7 h-7 text-white/90 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
            <AnimatedSignatureLogo
              className="w-full h-full"
              duration={8000}
              pauseDuration={2000}
            />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 md:gap-6">
            <Link
              href="/#work-overview"
              className="text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                if (pathname === '/') {
                  // Already on homepage, just scroll
                  const section = document.getElementById('work-overview')
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' })
                  }
                } else {
                  // On other pages (case studies, /me), navigate to home with hash
                  window.location.href = '/#work-overview'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-teal)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
              }}
            >
              Work
            </Link>
            <Link
              href="/me"
              className="text-white transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-teal)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
              }}
            >
              Me
            </Link>
            <Link
              href="/#lets-talk"
              className="text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                if (pathname === '/') {
                  // Already on homepage, just scroll
                  const section = document.getElementById('lets-talk')
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' })
                  }
                } else {
                  // On other pages (case studies, /me), navigate to home with hash
                  window.location.href = '/#lets-talk'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-teal)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
              }}
            >
              Contact
            </Link>
            <a
              href="/assets/Anuja-Nimmagadda-2025.pdf"
              download="Anuja-Nimmagadda-Resume-2025.pdf"
              onClick={() => trackResumeDownload()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              aria-label="Download Resume"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </a>
          </div>
          {/* Mobile Menu - Always visible on mobile, even when header is transitioning */}
          <div className="lg:hidden relative z-[60]">
            <MobileMenu isLandingPage={isLandingPage} />
          </div>
        </div>
      </nav>
    </header>
  )
}

