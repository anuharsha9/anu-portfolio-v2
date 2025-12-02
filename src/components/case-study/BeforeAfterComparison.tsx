'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterComparisonProps {
  beforeImage: {
    src: string
    alt: string
    caption?: string
  }
  afterImage: {
    src: string
    alt: string
    caption?: string
  }
  beforeLabel?: string
  afterLabel?: string
  isLightBackground?: boolean
}

export default function BeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  isLightBackground = false,
}: BeforeAfterComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as EventListener)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleMouseMove as EventListener)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as EventListener)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleMouseMove as EventListener)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const imageShadow = isLightBackground
    ? 'shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
    : ''
  const imageBorderRadius = 'rounded-[10px]'
  const imageOutline = isLightBackground
    ? 'outline outline-1 outline-black/5 outline-offset-[-1px]'
    : 'outline outline-1 outline-white/5 outline-offset-[-1px]'
  const labelColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-col-resize select-none`}
        style={{ minHeight: '400px' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (background) - determines container size */}
        <div className="relative w-full">
          <Image
            src={afterImage.src}
            alt={afterImage.alt}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>

        {/* Before Image (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage.src}
            alt={beforeImage.alt}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)] z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-[var(--accent-teal)] shadow-lg flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[var(--accent-teal)]"
              >
                <path
                  d="M8 2L4 6L8 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[var(--accent-teal)]"
              >
                <path
                  d="M4 2L8 6L4 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded text-white text-sm font-medium">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded text-white text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Captions */}
      {(beforeImage.caption || afterImage.caption) && (
        <div className="space-y-2">
          {beforeImage.caption && (
            <p className={`${mutedColor} text-sm`}>
              <span className={`${labelColor} font-medium`}>Before: </span>
              {beforeImage.caption}
            </p>
          )}
          {afterImage.caption && (
            <p className={`${mutedColor} text-sm`}>
              <span className={`${labelColor} font-medium`}>After: </span>
              {afterImage.caption}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

