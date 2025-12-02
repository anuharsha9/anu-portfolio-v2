'use client'

import { useState } from 'react'
import { useScrollManager } from './useScrollManager'

export function useScrolledPastHero(threshold: number = 1.7) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  useScrollManager((scrollY, viewportHeight) => {
    // Hero section is 200vh tall
    // Show nav after ~85% of hero section (when hero headline appears)
    // That's approximately 1.7 viewport heights
    setScrolledPastHero(scrollY > viewportHeight * threshold)
  }, [threshold])

  return scrolledPastHero
}

