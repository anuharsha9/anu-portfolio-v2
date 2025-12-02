'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface EditorialTileProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  visualImage?: string
  orientation: 'left' | 'right'
  index: number
}

export default function EditorialTile({
  title,
  description,
  ctaText,
  ctaLink,
  visualImage,
  orientation,
  index,
}: EditorialTileProps) {
  const isImageLeft = orientation === 'left'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
      style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08 // Stagger: 0ms, 80ms, 160ms
      }}
      className="group hover-lift"
    >
      <Link
        href={ctaLink}
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center rounded-2xl border border-black/5 bg-[var(--bg-light-alt)] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] hover:border-[rgba(13,148,136,0.3)]"
      >
        {/* Image */}
        {visualImage && (
          <div
            className={`relative w-full md:w-96 flex-shrink-0 aspect-video rounded-lg overflow-hidden ${
              isImageLeft ? 'md:order-1' : 'md:order-2'
            }`}
          >
            <Image
              src={visualImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div
          className={`flex-1 space-y-4 ${
            isImageLeft ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <h3 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
            {description}
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-x-2 text-sm md:text-base font-medium text-[var(--accent-teal)] group-hover:underline transition-all">
              {ctaText} →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

