'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import LockedContent from './LockedContent'
import ImageLightbox from './ImageLightbox'

interface DesignSystemShowcaseProps {
  isLightBackground?: boolean
  caseStudySlug?: string
}

// Each image has a size hint for Bento layout
const designSystemImages = [
  { src: '/images/design-system/Color Palette.png', alt: 'Color Palette', title: 'Color Palette', size: 'lg' },
  { src: '/images/design-system/Typography.png', alt: 'Typography', title: 'Typography', size: 'lg' },
  { src: '/images/design-system/Buttons.png', alt: 'Buttons', title: 'Buttons', size: 'md' },
  { src: '/images/design-system/Form Elements.png', alt: 'Form Elements', title: 'Form Elements', size: 'md' },
  { src: '/images/design-system/Modals.png', alt: 'Modals', title: 'Modals', size: 'sm' },
  { src: '/images/design-system/Dialog Design Specifications.png', alt: 'Dialog Design Specifications', title: 'Dialog Specs', size: 'sm' },
  { src: '/images/design-system/Alert Dialogs.png', alt: 'Alert Dialogs', title: 'Alert Dialogs', size: 'sm' },
  { src: '/images/design-system/Confirmation Dialogs.png', alt: 'Confirmation Dialogs', title: 'Confirmation Dialogs', size: 'sm' },
  { src: '/images/design-system/Navigation Bars.png', alt: 'Navigation Bars', title: 'Navigation Bars', size: 'md' },
  { src: '/images/design-system/Headers & Dividers.png', alt: 'Headers & Dividers', title: 'Headers & Dividers', size: 'sm' },
  { src: '/images/design-system/Accordions & Tabs.png', alt: 'Accordions & Tabs', title: 'Accordions & Tabs', size: 'md' },
  { src: '/images/design-system/Informational Tooltips.png', alt: 'Informational Tooltips', title: 'Tooltips', size: 'sm' },
  { src: '/images/design-system/Tooltip usage.png', alt: 'Tooltip usage', title: 'Tooltip Usage', size: 'sm' },
  { src: '/images/design-system/Messaging.png', alt: 'Messaging', title: 'Messaging', size: 'sm' },
  { src: '/images/design-system/Chips UI.png', alt: 'Chips UI', title: 'Chips UI', size: 'sm' },
  { src: '/images/design-system/Paging.png', alt: 'Paging', title: 'Paging', size: 'sm' },
  { src: '/images/design-system/Grid: Tabular Data.png', alt: 'Grid: Tabular Data', title: 'Grid: Tabular Data', size: 'lg' },
  { src: '/images/design-system/Hub Asset Tiles.png', alt: 'Hub Asset Tiles', title: 'Hub Asset Tiles', size: 'md' },
  { src: '/images/design-system/DSML Model Tiles.png', alt: 'DSML Model Tiles', title: 'DSML Model Tiles', size: 'sm' },
  { src: '/images/design-system/Nodes.png', alt: 'Nodes', title: 'Nodes', size: 'sm' },
  { src: '/images/design-system/Designer UI.png', alt: 'Designer UI', title: 'Designer UI', size: 'md' },
  { src: '/images/design-system/Settings Panel Spacing guide.png', alt: 'Settings Panel Spacing guide', title: 'Spacing Guide', size: 'sm' },
  { src: '/images/design-system/Content Guidelines.png', alt: 'Content Guidelines', title: 'Content Guidelines', size: 'sm' },
  { src: '/images/design-system/Samples.png', alt: 'Samples', title: 'Samples', size: 'sm' },
]

export default function DesignSystemShowcase({ caseStudySlug }: DesignSystemShowcaseProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title?: string } | null>(null)
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; alt: string; title?: string }>>([])
  const [lightboxCurrentIndex, setLightboxCurrentIndex] = useState(0)

  const openLightbox = (src: string, alt: string, title?: string, index?: number) => {
    setLightboxImage({ src, alt, title })
    setLightboxImages(designSystemImages.map((img) => ({ src: img.src, alt: img.alt, title: img.title })))
    setLightboxCurrentIndex(index ?? designSystemImages.findIndex((img) => img.src === src))
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxImages([])
  }

  const handleLightboxNavigate = (index: number) => {
    setLightboxCurrentIndex(index)
    if (lightboxImages[index]) setLightboxImage(lightboxImages[index])
  }

  return (
    <LockedContent 
      password="anu-access" 
      caseStudySlug={caseStudySlug} 
      unlockMessage="Password required to view design system documentation" 
      isLightBackground={true}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
            <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
              Component Library
            </span>
            <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
          </div>
          <h3 className="text-[var(--text-heading)] text-lg md:text-xl font-serif font-medium">
            Design System Components
          </h3>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mx-auto">
            Shared design system used across all three case studies. Click any component to enlarge.
          </p>
        </div>

        {/* Bento Grid - Sticker Sheet Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {designSystemImages.map((image, index) => {
            // Determine span based on size
            const spanClass = image.size === 'lg' 
              ? 'md:col-span-2 md:row-span-2' 
              : image.size === 'md' 
                ? 'md:col-span-1 md:row-span-1' 
                : ''
            
            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.3) }}
                className={`bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-primary)] p-2 cursor-pointer overflow-hidden group hover:shadow-[var(--shadow-lg)] hover:border-[var(--accent-teal)]/30 hover:-translate-y-0.5 transition-all duration-300 ${spanClass}`}
                onClick={() => openLightbox(image.src, image.alt, image.title, index)}
              >
                <div className="relative w-full h-full min-h-[100px] bg-[var(--bg-primary)] rounded overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" 
                  />
                </div>
                <p className="text-[var(--text-body)] text-[10px] md:text-xs font-medium text-center truncate mt-2 group-hover:text-[var(--accent-teal)] transition-colors">
                  {image.title}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center pt-4">
          <p className="font-mono text-slate-400 text-xs">
            {designSystemImages.length} components · Click to explore
          </p>
        </div>
      </div>

      {lightboxImage && (
        <ImageLightbox 
          isOpen={!!lightboxImage} 
          onClose={closeLightbox} 
          imageSrc={lightboxImage.src} 
          imageAlt={lightboxImage.alt} 
          imageCaption={lightboxImage.title} 
          images={lightboxImages} 
          currentIndex={lightboxCurrentIndex} 
          onNavigate={handleLightboxNavigate} 
        />
      )}
    </LockedContent>
  )
}
