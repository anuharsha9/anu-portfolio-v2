'use client'

import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled past hero section (approximately 80vh)
      const heroHeight = window.innerHeight * 0.8
      if (window.scrollY > heroHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility() // Initial check

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-8 right-8 z-50 bg-[var(--accent-teal)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--accent-teal)]/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:ring-offset-2"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}

