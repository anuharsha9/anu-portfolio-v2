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
  accentColor = '#0BA2B5',
  alt = 'System interface'
}: HeroTerminalProps) {
  const { openLightbox } = useLightbox()

  return (
    <div 
      className="rounded-t-xl overflow-hidden border-t border-x border-slate-200 bg-white cursor-pointer group h-full"
      style={{
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px ${accentColor}10, 0 20px 40px -20px ${accentColor}30`
      }}
      onClick={() => openLightbox([{ src: imageSrc, alt }], 0)}
    >
      {/* Header Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-4">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-yellow-400 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors" />
        </div>
        
        {/* File Name */}
        <span className="text-xs text-slate-500 font-mono tracking-wide">
          {fileName}
        </span>
      </div>
      
      {/* Image Area */}
      <div className="relative w-full bg-slate-100">
        <Image
          src={imageSrc}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover object-top"
          priority
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  )
}

