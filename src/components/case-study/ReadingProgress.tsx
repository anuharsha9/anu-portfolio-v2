'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      
      // Calculate progress percentage
      const scrollableHeight = documentHeight - windowHeight
      const progressPercentage = scrollableHeight > 0 
        ? Math.min(100, (scrollTop / scrollableHeight) * 100)
        : 0
      
      setProgress(progressPercentage)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress() // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  if (progress === 0) return null

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-black/5 z-50">
      <div
        className="h-full bg-[var(--accent-teal)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

