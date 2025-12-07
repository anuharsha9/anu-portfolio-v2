'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollManager } from '@/hooks/useScrollManager'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'design-framework', label: 'Framework' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'social-proof', label: 'Testimonials' },
  { id: 'outside-of-work', label: 'Personal' },
]

export default function AboutMeSectionNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const navRef = useRef<HTMLElement>(null)

  // Only show on /me page
  const isAboutMePage = pathname === '/me' || pathname === '/me/'

  // Show on any scroll
  useScrollManager((scrollY) => {
    if (!isAboutMePage) return
    const hasScrolled = scrollY > 0
    setIsVisible(hasScrolled)
  }, [isAboutMePage])

  // Track active section
  useEffect(() => {
    if (!isAboutMePage) return

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          observer.unobserve(element)
        }
      })
      observer.disconnect()
    }
  }, [isAboutMePage])

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.querySelector('header')
      const sectionNav = navRef.current
      const mainNavHeight = header ? header.getBoundingClientRect().height : 64
      const sectionNavHeight = sectionNav ? sectionNav.getBoundingClientRect().height : 40
      const offset = mainNavHeight + sectionNavHeight + 20
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  // Calculate main nav height dynamically
  const [mainNavHeight, setMainNavHeight] = useState(64)

  useEffect(() => {
    if (typeof window === 'undefined' || !isAboutMePage) return

    const updateNavHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        const height = header.getBoundingClientRect().height
        setMainNavHeight(height > 0 ? height : 64)
      }
    }

    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)

    const observer = new MutationObserver(updateNavHeight)
    const header = document.querySelector('header')
    if (header) {
      observer.observe(header, { attributes: true, attributeFilter: ['class', 'style'] })
    }

    return () => {
      window.removeEventListener('resize', updateNavHeight)
      observer.disconnect()
    }
  }, [isAboutMePage, isVisible])

  if (!isAboutMePage || !isVisible) return null

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 right-0 bg-slate-50 border-b border-slate-200 transition-all duration-500 ${isVisible
        ? 'opacity-100 translate-y-0 h-auto'
        : 'opacity-0 -translate-y-full pointer-events-none invisible h-0 overflow-hidden'
        }`}
      style={{
        top: `${mainNavHeight}px`,
        zIndex: 9999,
        isolation: 'isolate',
        position: 'fixed',
      }}
      aria-label="About Me section navigation"
    >
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex gap-1 md:gap-2 py-2 justify-center overflow-x-auto">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 md:px-4 py-1.5 whitespace-nowrap transition-all duration-200 font-mono text-xs uppercase tracking-widest focus:outline-none rounded-md ${
                  isActive
                    ? 'text-[#0BA2B5] font-semibold bg-[#0BA2B5]/10'
                    : 'text-slate-500 hover:text-[#0BA2B5] hover:bg-slate-100'
                }`}
                aria-label={`Navigate to ${section.label}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {section.label}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
