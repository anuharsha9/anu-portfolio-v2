'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface WebFOCUSInitiativeRowProps {
  overline: string
  title: string
  bullets: string[]
  impact: string
  ctaText: string
  ctaHref: string
  hoverMicrocopy?: string
  orientation: 'image-left' | 'image-right'
  visualImage?: string
  index: number
}

export default function WebFOCUSInitiativeRow({
  overline,
  title,
  bullets,
  impact,
  ctaText,
  ctaHref,
  hoverMicrocopy,
  orientation,
  visualImage,
  index,
}: WebFOCUSInitiativeRowProps) {
  const isImageLeft = orientation === 'image-left'

  // Image placeholder with gradient if no image provided
  const ImageContent = visualImage ? (
    <div className="relative w-full h-full">
      <Image
        src={visualImage}
        alt={title}
        fill
        className="object-contain group-hover/image:scale-[1.02] transition-transform duration-500"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))' }}
      />
    </div>
  ) : (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
      style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06, // Stagger: 0ms, 60ms, 120ms
      }}
      className="group relative"
    >
      <div
        className={`flex flex-col ${
          isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        } gap-8 md:gap-12 items-center md:items-start`}
      >
        {/* Image */}
        <Link href={ctaHref} className="relative w-full md:w-1/2 flex-shrink-0 flex items-center justify-center group/image overflow-visible">
          <div className="relative w-full" style={{ aspectRatio: '16/10', minHeight: '300px' }}>
            {ImageContent}
          </div>
        </Link>

        {/* Text Content */}
        <div className="flex-1 space-y-5">
          {/* Overline */}
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted-light)] font-medium">
            {overline}
          </p>

          {/* Title */}
          <Link href={ctaHref} className="block group/title">
            <h3 
              className="text-[var(--text-primary-light)] text-2xl md:text-3xl lg:text-4xl font-serif transition-all duration-300 relative group-hover/title:text-[var(--accent-teal)]"
            >
              {title}
            </h3>
          </Link>

          {/* Body Bullets */}
          <ul className="space-y-3 text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
            {bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="flex items-start gap-3 group/bullet">
                <span className="text-[var(--accent-teal)] mt-1.5 font-bold opacity-40 group-hover/bullet:opacity-100 transition-opacity duration-300">•</span>
                <span className="group-hover/bullet:text-[var(--text-primary-light)] transition-colors duration-300">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Impact Line */}
          <p className="text-[var(--text-primary-light)] text-base md:text-lg leading-relaxed font-medium pt-3 border-t border-black/10">
            {impact}
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-x-2 rounded-full border border-black/20 text-[var(--text-primary-light)] px-6 py-3 text-sm font-medium transition-all duration-300 group/cta hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10 hover:text-[var(--accent-teal)] relative overflow-hidden"
              title={hoverMicrocopy}
            >
              <span className="relative z-10">{ctaText}</span>
              <span className="relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
              <span className="absolute inset-0 bg-[var(--accent-teal)]/5 scale-x-0 group-hover/cta:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

