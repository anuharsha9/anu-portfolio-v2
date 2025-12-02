'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useFocusTrap } from '@/hooks/useFocusTrap'

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  imageCaption?: string
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  imageCaption,
}: ImageLightboxProps) {
  const containerRef = useFocusTrap(isOpen)

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Lightbox Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              ref={containerRef as React.RefObject<HTMLDivElement>}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-image"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 z-10 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative flex-1 w-full bg-black/20 rounded-lg overflow-hidden">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    id="lightbox-image"
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                    priority
                  />
                </div>
              </div>

              {/* Caption */}
              {imageCaption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="mt-4 text-center"
                >
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                    {imageCaption}
                  </p>
                </motion.div>
              )}

              {/* Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-2 text-center"
              >
                <p className="text-white/40 text-xs">
                  Press ESC to close
                </p>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

