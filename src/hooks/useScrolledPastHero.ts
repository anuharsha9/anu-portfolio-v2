'use client'

import { useState, useEffect } from 'react'

export function useScrolledPastHero(threshold: number = 1.7) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      // Hero section is 200vh tall
      // Show nav after ~85% of hero section (when hero headline appears)
      // That's approximately 1.7 viewport heights
      setScrolledPastHero(scrollY > viewportHeight * threshold)
    }

    // Check on mount
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolledPastHero
}

