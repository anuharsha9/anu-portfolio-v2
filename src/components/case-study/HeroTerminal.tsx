'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLightbox } from '@/contexts/LightboxContext'

interface HeroTerminalProps {
  imageSrc: string
  fileName: string
  accentColor?: string
  alt?: string
  disableLightbox?: boolean
}

export default function HeroTerminal({
  imageSrc,
  fileName,
  accentColor = 'var(--accent-teal)',
  alt = 'System interface',
  disableLightbox = false
}: HeroTerminalProps) {
  const { openLightbox } = useLightbox()
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleClick = () => {
    if (!disableLightbox) {
      openLightbox([{ src: imageSrc, alt }], 0)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disableLightbox && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div
      className={`rounded-tl-xl overflow-hidden border-t border-l border-slate-700 bg-slate-900 group h-full ${disableLightbox ? '' : 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:ring-offset-2'}`}
      style={{
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px ${accentColor}20, 0 20px 40px -20px ${accentColor}40`
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disableLightbox ? -1 : 0}
      role={disableLightbox ? undefined : 'button'}
      aria-label={disableLightbox ? undefined : `View ${alt} in fullscreen`}
    >
      {/* Header Bar - Dark */}
      <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-4">
        {/* Traffic Lights - Always colored */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* File Name */}
        <span className="text-xs text-slate-400 font-mono tracking-wide">
          {fileName}
        </span>
      </div>

      {/* Image Area */}
      <div className="relative w-full bg-slate-800">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" aria-hidden="true" />
        )}

        <Image
          src={imageSrc}
          alt={alt}
          width={1200}
          height={800}
          className={`w-full h-auto object-cover object-top transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority
          onLoad={() => setImageLoaded(true)}
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  )
}

