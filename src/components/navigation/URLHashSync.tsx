'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Sections to track for URL hash updates
const landingPageSections = [
  'executive-summary',
  'work-overview',
  'testimonials',
  'work-archive',
  'contact',
]

export default function URLHashSync() {
  const pathname = usePathname()

  useEffect(() => {
    // Only run on landing page
    if (pathname !== '/') return

    // Always start at top on initial load, regardless of hash
    // Clear any hash and scroll to top
    window.history.replaceState(null, '', window.location.pathname)
    window.scrollTo({ top: 0, behavior: 'instant' })

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null
    let hasInitialized = false
    let userHasScrolled = false

    const updateHash = () => {
      if (isScrolling || !hasInitialized || !userHasScrolled) return

      // Don't update hash if we're at the top (hero section)
      if (window.scrollY < 100) {
        // If we're at the top, clear hash or set to empty
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname)
        }
        return
      }

      // Find which section is currently in view
      const scrollPosition = window.scrollY + window.innerHeight * 0.3

      for (const sectionId of landingPageSections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = window.scrollY + rect.top

          // Check if this section is in the viewport
          if (elementTop <= scrollPosition && elementTop + rect.height > scrollPosition) {
            const newHash = `#${sectionId}`
            if (window.location.hash !== newHash) {
              // Use replaceState to avoid adding to history
              window.history.replaceState(null, '', newHash)
            }
            break
          }
        }
      }
    }

    const handleScroll = () => {
      // Mark that user has scrolled
      if (!userHasScrolled) {
        userHasScrolled = true
      }

      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      scrollTimeout = setTimeout(() => {
        updateHash()
      }, 150) // Throttle updates
    }

    // Delay initial hash update to prevent scroll jump
    // Don't update hash on initial load - only on user scroll
    setTimeout(() => {
      hasInitialized = true
      window.addEventListener('scroll', handleScroll, { passive: true })
      // Don't call updateHash() on initial load - let user scroll first
    }, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [pathname])

  return null // This component doesn't render anything
}
