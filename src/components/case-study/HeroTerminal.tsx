'use client'

import Image from 'next/image'
import { useLightbox } from '@/contexts/LightboxContext'

interface HeroTerminalProps {
  imageSrc: string
  fileName: string
  accentColor?: string
  alt?: string
}

export default function HeroTerminal({
  imageSrc,
  fileName,
  accentColor = 'var(--accent-teal)',
  alt = 'System interface'
}: HeroTerminalProps) {
  const { openLightbox } = useLightbox()

  return (
    <div
      className="rounded-tl-xl overflow-hidden border-t border-l border-slate-700 bg-slate-900 cursor-pointer group h-full"
      style={{
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px ${accentColor}20, 0 20px 40px -20px ${accentColor}40`
      }}
      onClick={() => openLightbox([{ src: imageSrc, alt }], 0)}
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
        <Image
          src={imageSrc}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover object-top"
          priority
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  )
}

