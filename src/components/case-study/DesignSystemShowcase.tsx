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

const designSystemImages = [
  { src: '/images/design-system/Color Palette.png', alt: 'Color Palette', title: 'Color Palette' },
  { src: '/images/design-system/Typography.png', alt: 'Typography', title: 'Typography' },
  { src: '/images/design-system/Buttons.png', alt: 'Buttons', title: 'Buttons' },
  { src: '/images/design-system/Form Elements.png', alt: 'Form Elements', title: 'Form Elements' },
  { src: '/images/design-system/Modals.png', alt: 'Modals', title: 'Modals' },
  { src: '/images/design-system/Dialog Design Specifications.png', alt: 'Dialog Design Specifications', title: 'Dialog Design Specifications' },
  { src: '/images/design-system/Alert Dialogs.png', alt: 'Alert Dialogs', title: 'Alert Dialogs' },
  { src: '/images/design-system/Confirmation Dialogs.png', alt: 'Confirmation Dialogs', title: 'Confirmation Dialogs' },
  { src: '/images/design-system/Navigation Bars.png', alt: 'Navigation Bars', title: 'Navigation Bars' },
  { src: '/images/design-system/Headers & Dividers.png', alt: 'Headers & Dividers', title: 'Headers & Dividers' },
  { src: '/images/design-system/Accordions & Tabs.png', alt: 'Accordions & Tabs', title: 'Accordions & Tabs' },
  { src: '/images/design-system/Informational Tooltips.png', alt: 'Informational Tooltips', title: 'Informational Tooltips' },
  { src: '/images/design-system/Tooltip usage.png', alt: 'Tooltip usage', title: 'Tooltip Usage' },
  { src: '/images/design-system/Messaging.png', alt: 'Messaging', title: 'Messaging' },
  { src: '/images/design-system/Chips UI.png', alt: 'Chips UI', title: 'Chips UI' },
  { src: '/images/design-system/Paging.png', alt: 'Paging', title: 'Paging' },
  { src: '/images/design-system/Grid: Tabular Data.png', alt: 'Grid: Tabular Data', title: 'Grid: Tabular Data' },
  { src: '/images/design-system/Hub Asset Tiles.png', alt: 'Hub Asset Tiles', title: 'Hub Asset Tiles' },
  { src: '/images/design-system/DSML Model Tiles.png', alt: 'DSML Model Tiles', title: 'DSML Model Tiles' },
  { src: '/images/design-system/Nodes.png', alt: 'Nodes', title: 'Nodes' },
  { src: '/images/design-system/Designer UI.png', alt: 'Designer UI', title: 'Designer UI' },
  { src: '/images/design-system/Settings Panel Spacing guide.png', alt: 'Settings Panel Spacing guide', title: 'Settings Panel Spacing Guide' },
  { src: '/images/design-system/Content Guidelines.png', alt: 'Content Guidelines', title: 'Content Guidelines' },
  { src: '/images/design-system/Samples.png', alt: 'Samples', title: 'Samples' },
]

export default function DesignSystemShowcase({ isLightBackground = true, caseStudySlug }: DesignSystemShowcaseProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title?: string } | null>(null)
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; alt: string; title?: string }>>([])
  const [lightboxCurrentIndex, setLightboxCurrentIndex] = useState(0)

  const openLightbox = (src: string, alt: string, title?: string, index?: number) => {
    setLightboxImage({ src, alt, title })
    setLightboxImages(designSystemImages.map(img => ({ src: img.src, alt: img.alt, title: img.title })))
    setLightboxCurrentIndex(index ?? designSystemImages.findIndex(img => img.src === src))
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxImages([])
  }

  const handleLightboxNavigate = (index: number) => {
    setLightboxCurrentIndex(index)
    if (lightboxImages[index]) {
      setLightboxImage(lightboxImages[index])
    }
  }

  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-white' : 'bg-black/10'

  return (
    <LockedContent
      password="anu-access"
      caseStudySlug={caseStudySlug}
      unlockMessage="Password required to view design system documentation"
      isLightBackground={isLightBackground}
    >
      <div className="space-y-6">
        {/* Subtle Header - Not Prominent */}
        <div className="text-center space-y-2">
          <h3 className={`${textColor} text-lg md:text-xl font-serif font-medium`}>
            Design System Components
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            Shared design system used across all three case studies
          </p>
        </div>

        {/* Grid of Design System Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {designSystemImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className={`${bgColor} rounded-lg border ${borderColor} p-3 cursor-pointer overflow-hidden group hover:shadow-lg hover:border-[var(--accent-teal)]/30`}
              whileHover={{ 
                scale: 1.02,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(image.src, image.alt, image.title, index)}
            >
              <div className="relative w-full aspect-square mb-2 bg-black/5 rounded overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <p className={`${textColor} text-xs font-medium text-center truncate group-hover:text-[var(--accent-teal)] transition-colors`}>
                {image.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
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

