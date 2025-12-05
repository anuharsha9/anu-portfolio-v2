'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface CaseStudiesDropdownProps {
  className?: string
  onNavigate?: () => void
}

export default function CaseStudiesDropdown({ className = '', onNavigate }: CaseStudiesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Ensure component only renders on client to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isMounted) return

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, isMounted])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // Small delay to prevent flickering when moving to dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Close dropdown when a link is clicked
    setIsOpen(false)
    if (onNavigate) {
      onNavigate()
    }
  }

  // Don't render until mounted on client
  if (!isMounted) {
    return (
      <Link
        href="/#work-overview"
        className={className}
      >
        Work
      </Link>
    )
  }

  const caseStudies = [
    { label: 'Recent Work Overview', href: '/#work-overview' },
    { label: 'ReportCaster', href: '/work/reportcaster' },
    { label: 'ML Functions', href: '/work/ml-functions' },
    { label: 'IQ Plugin', href: '/work/iq-plugin' },
  ]

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/#work-overview"
        className={className}
        onClick={() => {
          // Close dropdown when clicking the main link
          setIsOpen(false)
          if (onNavigate) {
            onNavigate()
          }
        }}
      >
        Work
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 bg-[var(--bg-dark)] border border-refined-dark rounded-lg shadow-lg min-w-[200px] z-50"
            style={{ zIndex: 10001 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <nav className="py-2" aria-label="Case studies navigation">
              {caseStudies.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClick}
                  className="block px-4 py-2.5 text-white text-sm hover:bg-white/10 hover:text-[var(--accent-teal)] transition-colors first:rounded-t-lg last:rounded-b-lg"
                  style={{
                    animationDelay: `${index * 0.03}s`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

