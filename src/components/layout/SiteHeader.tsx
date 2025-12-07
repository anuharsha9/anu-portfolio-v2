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

  // Always visible on case study pages, otherwise start hidden
  const [isVisible, setIsVisible] = useState(isCaseStudyPage)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

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
      } else {
        // On desktop, hide nav initially and let scroll manager handle visibility
        setIsVisible(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [hasShadow, setHasShadow] = useState(false)

  // Use centralized scroll manager - simplified for light theme
  useScrollManager((scrollY) => {
    const hasScrolled = scrollY > 0
    setIsVisible(hasScrolled)
    setHasShadow(hasScrolled)
  }, [isLandingPage, isCaseStudyPage])

  // Scroll to archive section
  const scrollToArchive = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window === 'undefined') return
    
    // If on landing page, scroll to section
    if (isLandingPage) {
      const element = document.getElementById('work-archive')
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
        window.history.pushState(null, '', '#work-archive')
      }
    } else {
      // Navigate to home with hash
      window.location.href = '/#work-archive'
    }
  }

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
      <nav className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 flex items-center justify-center relative">
        {/* Logo - positioned absolutely on the left */}
        <Link
          href="/"
          className="absolute left-4 xs:left-5 sm:left-6 md:left-8 lg:left-12 xl:left-16 flex items-center transition-colors group"
        >
          <div className="w-[33.6px] h-[33.6px] text-slate-900 group-hover:text-[#0BA2B5] transition-all duration-300">
            <AnimatedSignatureLogo
              className="w-full h-full"
              duration={16000}
              pauseDuration={2000}
            />
          </div>
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Navigation - Work, Me, Archive */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Work - with dropdown */}
            <CaseStudiesDropdown
              className={`font-sans font-medium transition-colors ${
                isLandingPage 
                  ? 'text-slate-900' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            />
            
            {/* Me */}
            <Link
              href="/me"
              className={`font-sans font-medium transition-colors relative ${
                isAboutPage 
                  ? 'text-slate-900' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Me
              {/* Active indicator dot */}
              {isAboutPage && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0BA2B5]" />
              )}
            </Link>

            {/* Archive */}
            <a
              href="/#work-archive"
              onClick={scrollToArchive}
              className="font-sans font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Archive
            </a>
          </div>
        </div>

        {/* Resume Button - Pill Style CTA */}
        <a
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackResumeDownload()}
          className="absolute right-4 xs:right-5 sm:right-6 md:right-8 lg:right-12 xl:right-16 hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium transition-all duration-300 hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0BA2B5] shadow-sm"
          aria-label="View Resume"
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Resume</span>
        </a>

        {/* Mobile Menu */}
        <div className="lg:hidden absolute right-4 xs:right-5 sm:right-6 md:right-8 z-[60]">
          <MobileMenu isLandingPage={isLandingPage} isLightBackground={true} />
        </div>
      </nav>
    </header>
  )
}
