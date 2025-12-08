'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { useLightbox } from '@/components/lightbox/LightboxContext'

interface InteractiveImageProps {
  src: string
  alt: string
  caption?: string
  aspectRatio?: string // e.g., "16/9", "4/3"
  className?: string
  priority?: boolean
}

/**
 * InteractiveImage - Elegant image component with subtle hover invitation
 * Integrates with the site lightbox for expansion
 */
export default function InteractiveImage({
  src,
  alt,
  caption,
  aspectRatio = '16/9',
  className = '',
  priority = false
}: InteractiveImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { openLightbox } = useLightbox()

  const handleClick = () => {
    openLightbox([{ src, alt, caption }], 0)
  }

  return (
    <figure className={`group ${className}`}>
      <motion.div
        className="relative overflow-hidden rounded-xl border border-slate-200 cursor-pointer bg-slate-100"
        style={{ aspectRatio }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority={priority}
        />
        
        {/* Subtle gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Expand icon hint */}
        <motion.div
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Maximize2 className="w-4 h-4 text-slate-700" />
        </motion.div>
      </motion.div>
      
      {/* Caption */}
      {caption && (
        <figcaption className="mt-3 text-center">
          <span className="text-slate-500 text-sm">{caption}</span>
        </figcaption>
      )}
    </figure>
  )
}

