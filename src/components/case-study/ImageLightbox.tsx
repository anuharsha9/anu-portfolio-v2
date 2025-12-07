'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
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
  images?: ImageItem[]
  currentIndex?: number
  onNavigate?: (index: number) => void
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
  const [isZoomed, setIsZoomed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Store scroll position in ref to persist across re-renders
  const scrollPositionRef = useRef<number>(0)
  // Track if scroll was locked (to properly restore on close)
  const wasLockedRef = useRef(false)

  // Navigation state
  const hasNavigation = images && images.length > 1 && onNavigate
  const canGoPrev = hasNavigation && currentIndex > 0
  const canGoNext = hasNavigation && currentIndex < images.length - 1

  // Touch gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !hasNavigation) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && canGoNext && onNavigate) {
      onNavigate(currentIndex + 1)
    }
    if (isRightSwipe && canGoPrev && onNavigate) {
      onNavigate(currentIndex - 1)
    }
  }

  // Reset zoom when image changes
  useEffect(() => {
    setIsZoomed(false)
    setImageLoaded(false)
  }, [imageSrc])

  // Scroll lock - properly tracks open/close state
  useEffect(() => {
    if (isOpen && !wasLockedRef.current) {
      // Opening - capture scroll position and lock
      scrollPositionRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      wasLockedRef.current = true
    } else if (!isOpen && wasLockedRef.current) {
      // Closing - restore scroll position
      const scrollY = scrollPositionRef.current
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      wasLockedRef.current = false
      // Restore scroll position after styles are cleared
      window.scrollTo(0, scrollY)
    }
  }, [isOpen])

  // Keyboard navigation - separate effect to avoid scroll issues
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'z' || e.key === 'Z') {
        setIsZoomed(prev => !prev)
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
    }
  }, [isOpen, hasNavigation, canGoPrev, canGoNext, currentIndex, onNavigate, onClose])

  const handlePrev = useCallback(() => {
    if (canGoPrev && onNavigate) {
      onNavigate(currentIndex - 1)
    }
  }, [canGoPrev, currentIndex, onNavigate])

  const handleNext = useCallback(() => {
    if (canGoNext && onNavigate) {
      onNavigate(currentIndex + 1)
    }
  }, [canGoNext, currentIndex, onNavigate])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop - Dark with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Top Bar - Technical Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/80 to-transparent"
          >
            {/* Technical Label */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
                // SYSTEM_INSPECTION
              </span>
              {hasNavigation && (
                <span className="font-mono text-xs text-slate-400">
                  [{String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}]
                </span>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Zoom Toggle */}
              <button
                onClick={() => setIsZoomed(prev => !prev)}
                className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
              >
                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className="absolute inset-0 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-image"
          >
            {/* Navigation Arrows */}
            {hasNavigation && canGoPrev && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-10 p-3 md:p-4 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 rounded-xl border border-slate-700/50 hover:border-slate-600 backdrop-blur-sm transition-all duration-200 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform" />
              </motion.button>
            )}

            {hasNavigation && canGoNext && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-10 p-3 md:p-4 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 rounded-xl border border-slate-700/50 hover:border-slate-600 backdrop-blur-sm transition-all duration-200 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col items-center px-4 md:px-20 py-20 max-w-full ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(prev => !prev)}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Image Wrapper with Border */}
              <div 
                className={`relative bg-slate-900 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50 transition-all duration-500 ${
                  isZoomed ? 'max-w-none' : 'max-w-6xl'
                }`}
              >
                {/* Loading State */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                    <div className="w-8 h-8 border-2 border-slate-700 border-t-[var(--accent-teal)] rounded-full animate-spin" />
                  </div>
                )}

                {/* The Image */}
                <div 
                  className={`relative transition-all duration-500 ${
                    isZoomed 
                      ? 'w-[95vw] h-[90vh]' 
                      : 'w-[90vw] md:w-[85vw] lg:w-[80vw] h-[60vh] md:h-[70vh] lg:h-[75vh]'
                  }`}
                >
                  <Image
                    id="lightbox-image"
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${
                      isZoomed ? 'object-contain' : 'object-contain'
                    }`}
                    sizes="100vw"
                    priority
                    quality={100}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>

              {/* Caption - Technical Style */}
              {imageCaption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mt-6 text-center max-w-3xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="font-mono text-sm text-slate-400 leading-relaxed">
                    {imageCaption}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Bottom Hint Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center px-6 py-4 bg-gradient-to-t from-slate-950/80 to-transparent"
          >
            <div className="flex items-center gap-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">ESC</kbd>
                Close
              </span>
              <span className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">Z</kbd>
                Zoom
              </span>
              {hasNavigation && (
                <span className="flex items-center gap-2">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">←</kbd>
                  <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">→</kbd>
                  Navigate
                </span>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
