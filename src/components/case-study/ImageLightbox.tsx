'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useFocusTrap } from '@/hooks/useFocusTrap'

interface ImageItem {
  src: string
  alt: string
  caption?: string
}

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  imageCaption?: string
  images?: ImageItem[] // Array of all images in the current set
  currentIndex?: number // Current image index in the array
  onNavigate?: (index: number) => void // Callback for navigation
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  imageCaption,
  images,
  currentIndex = 0,
  onNavigate,
}: ImageLightboxProps) {
  const containerRef = useFocusTrap(isOpen)

  // Determine if navigation is available
  const hasNavigation = images && images.length > 1 && onNavigate
  const canGoPrev = hasNavigation && currentIndex > 0
  const canGoNext = hasNavigation && currentIndex < images.length - 1

  // Handle keyboard navigation and prevent scrolling
  useEffect(() => {
    if (!isOpen) return

    // Prevent body scroll when lightbox is open
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (hasNavigation) {
        if (e.key === 'ArrowLeft' && canGoPrev) {
          onNavigate(currentIndex - 1)
        } else if (e.key === 'ArrowRight' && canGoNext) {
          onNavigate(currentIndex + 1)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      // Restore scroll position
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
    }
  }, [isOpen, hasNavigation, canGoPrev, canGoNext, currentIndex, onNavigate, onClose])

  if (!isOpen) return null

  const handlePrev = () => {
    if (canGoPrev && onNavigate) {
      onNavigate(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (canGoNext && onNavigate) {
      onNavigate(currentIndex + 1)
    }
  }

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              ref={containerRef as React.RefObject<HTMLDivElement>}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-7xl max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-image"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-white/90 hover:text-white transition-colors p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
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

              {/* Previous Button */}
              {hasNavigation && canGoPrev && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-sm"
                  aria-label="Previous image"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {hasNavigation && canGoNext && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-sm"
                  aria-label="Next image"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}

              {/* Image Container */}
              <div className="relative w-full flex-shrink-0 bg-black/20 rounded-lg overflow-hidden" style={{ maxHeight: 'calc(85vh - 120px)' }}>
                <div className="relative w-full" style={{ aspectRatio: 'auto', minHeight: '300px', maxHeight: 'calc(85vh - 120px)' }}>
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

              {/* Image Counter */}
              {hasNavigation && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {currentIndex + 1} / {images.length}
                </div>
              )}

              {/* Caption */}
              {imageCaption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="mt-4 text-center flex-shrink-0 w-full"
                >
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-4">
                    {imageCaption}
                  </p>
                </motion.div>
              )}

              {/* Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-2 text-center flex-shrink-0"
              >
                <p className="text-white/40 text-xs">
                  {hasNavigation ? 'Press ESC to close • Use arrow keys to navigate' : 'Press ESC to close'}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
