'use client'

import { useEffect, useState } from 'react'
import GearContact from '@/assets/gear-contact.svg'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loading screen after page loads
    const handleLoad = () => {
      // Small delay for smooth transition
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[9999] bg-[var(--bg-dark)] flex items-center justify-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Rotating Gear SVG */}
          <div
            className="w-24 h-24 md:w-32 md:h-32 gear-loading"
          >
            <GearContact className="w-full h-full text-white" />
          </div>
        </div>
      </div>
    </>
  )
}

