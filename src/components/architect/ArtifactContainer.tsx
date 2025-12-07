'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Expand } from 'lucide-react'

interface ArtifactContainerProps {
  src: string
  alt: string
  caption: string
  label?: string // Technical label (e.g., "FIG_01", "DIAGRAM_A")
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide'
  isBlurred?: boolean
  onClick?: () => void
  className?: string
}

const aspectRatioClass = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
}

/**
 * Artifact Container - Image wrapper with technical caption bar
 * 
 * Wraps screenshots/diagrams with consistent styling.
 * Includes a border-t caption bar with monospace labels.
 * 
 * @example
 * <ArtifactContainer
 *   src="/images/wireframe.png"
 *   alt="Initial wireframe concept"
 *   caption="V1 Wireframe showing modal-based creation flow"
 *   label="FIG_01"
 * />
 */
export default function ArtifactContainer({
  src,
  alt,
  caption,
  label,
  aspectRatio = 'video',
  isBlurred = false,
  onClick,
  className = '',
}: ArtifactContainerProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-slate-50 border border-slate-200 rounded-xl overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div 
        className={`relative ${aspectRatioClass[aspectRatio]} bg-slate-100 cursor-pointer group`}
        onClick={onClick}
      >
        {!hasError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-all duration-500 ${
              isBlurred && !isHovered ? 'blur-sm scale-105' : 'blur-none scale-100'
            } group-hover:scale-[1.02]`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-slate-400">// IMAGE_NOT_FOUND</span>
          </div>
        )}

        {/* Hover Overlay */}
        {onClick && (
          <div className={`absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center`}>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                <Expand className="w-5 h-5 text-slate-700" />
              </div>
            </div>
          </div>
        )}

        {/* Blur reveal hint */}
        {isBlurred && !isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 bg-white/90 px-3 py-1.5 rounded-full">
              Hover to reveal
            </span>
          </div>
        )}
      </div>

      {/* Caption Bar */}
      <div className="border-t border-slate-200 px-4 py-3 bg-white">
        <div className="flex items-start justify-between gap-4">
          {/* Caption */}
          <p className="text-slate-600 text-sm leading-relaxed flex-1">
            {caption}
          </p>
          
          {/* Technical Label */}
          {label && (
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest flex-shrink-0">
              // {label}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

