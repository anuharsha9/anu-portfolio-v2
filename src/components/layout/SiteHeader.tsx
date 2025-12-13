'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import { trackResumeDownload } from '@/components/analytics/GoogleAnalytics'
import { useScrollManager } from '@/hooks/useScrollManager'
import MobileMenu from './MobileMenu'
import CaseStudiesDropdown from './CaseStudiesDropdown'

export default function SiteHeader() {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'
  const isCaseStudyPage = pathname?.startsWith('/work/') ?? false
  const isAboutPage = pathname === '/me' || pathname === '/me/'

  // Always visible on case study pages, otherwise start hidden (desktop only)
  const [isVisible, setIsVisible] = useState(isCaseStudyPage)

  // Keep track of whether we're on mobile to control visibility behavior
  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateVisibilityForViewport = () => {
      const isMobile = window.innerWidth < 1024 // lg breakpoint
      if (isMobile) {
        // On mobile, header should always be visible for hamburger access
        setIsVisible(true)
      } else {
        // On desktop, start hidden and let scroll manager handle visibility
        setIsVisible(false)
      }
    }

    updateVisibilityForViewport()
    window.addEventListener('resize', updateVisibilityForViewport)

    return () => {
      window.removeEventListener('resize', updateVisibilityForViewport)
    }
  }, [])

  const [hasShadow, setHasShadow] = useState(false)

  // Use centralized scroll manager
  useScrollManager((scrollY) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      // On mobile: header always visible, only toggle shadow
      setIsVisible(true)
      setHasShadow(scrollY > 0)
      return
    }

    // On desktop: show header only after scrolling
    const hasScrolled = scrollY > 0
    setIsVisible(hasScrolled)
    setHasShadow(hasScrolled)
  }, [isLandingPage, isCaseStudyPage])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-500 ${isVisible
        ? 'opacity-100 translate-y-0 h-auto'
        : 'opacity-0 -translate-y-full pointer-events-none invisible h-0 overflow-hidden'
        } ${hasShadow ? 'shadow-sm' : ''}`}
      style={{
        zIndex: 10000,
        isolation: 'isolate',
        position: 'fixed',
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-4 flex items-center justify-center relative min-h-[56px] sm:min-h-[60px]">
        {/* Logo - positioned absolutely on the left */}
        <Link
          href="/"
          className="absolute left-4 xs:left-5 sm:left-6 md:left-8 lg:left-12 xl:left-16 flex items-center transition-colors group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 text-slate-900 group-hover:text-[var(--accent-teal)] transition-all duration-300">
            <AnimatedSignatureLogo
              className="w-full h-full"
              duration={16000}
              pauseDuration={2000}
            />
          </div>
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Navigation - Work, Me */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Work - with dropdown */}
            <CaseStudiesDropdown
              className={`font-sans font-medium transition-colors ${isLandingPage
                ? 'text-slate-900'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            />

            {/* Me */}
            <Link
              href="/me"
              className={`font-sans font-medium transition-colors relative ${isAboutPage
                ? 'text-slate-900'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              Me
              {/* Active indicator dot */}
              {isAboutPage && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-teal)]" />
              )}
            </Link>
          </div>
        </div>

        {/* Right Side CTAs */}
        <div className="absolute right-4 xs:right-5 sm:right-6 md:right-8 lg:right-12 xl:right-16 hidden lg:flex items-center gap-3">
          {/* Let's Talk - Primary CTA */}
          <Link
            href="/#lets-talk"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-teal)] text-white text-sm font-medium transition-all duration-300 hover:bg-[var(--accent-teal-700)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)] shadow-sm"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Resume - Secondary CTA */}
          <a
            href="/assets/Anuja Harsha Nimmagadda - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResumeDownload()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-sm font-medium transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
            aria-label="Download Resume PDF"
          >
            <span>Resume</span>
            <svg
              className="w-3.5 h-3.5"
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
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden absolute right-4 xs:right-5 sm:right-6 md:right-8 z-[60]">
          <MobileMenu isLandingPage={isLandingPage} isLightBackground={true} />
        </div>
      </nav>
    </header>
  )
}
