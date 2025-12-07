'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import ImageLightbox from '@/components/case-study/ImageLightbox'

interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface LightboxContextType {
  openLightbox: (image: LightboxImage, images?: LightboxImage[], startIndex?: number) => void
  closeLightbox: () => void
  isOpen: boolean
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<LightboxImage | null>(null)
  const [imageSet, setImageSet] = useState<LightboxImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((image: LightboxImage, images?: LightboxImage[], startIndex?: number) => {
    setCurrentImage(image)
    if (images && images.length > 0) {
      setImageSet(images)
      setCurrentIndex(startIndex ?? images.findIndex(img => img.src === image.src) ?? 0)
    } else {
      setImageSet([image])
      setCurrentIndex(0)
    }
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    // Delay clearing the image to allow exit animation
    setTimeout(() => {
      setCurrentImage(null)
      setImageSet([])
      setCurrentIndex(0)
    }, 300)
  }, [])

  const handleNavigate = useCallback((index: number) => {
    if (index >= 0 && index < imageSet.length) {
      setCurrentIndex(index)
      setCurrentImage(imageSet[index])
    }
  }, [imageSet])

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox, isOpen }}>
      {children}
      
      {/* Global Lightbox Instance */}
      {currentImage && (
        <ImageLightbox
          isOpen={isOpen}
          onClose={closeLightbox}
          imageSrc={currentImage.src}
          imageAlt={currentImage.alt}
          imageCaption={currentImage.caption}
          images={imageSet.length > 1 ? imageSet : undefined}
          currentIndex={currentIndex}
          onNavigate={imageSet.length > 1 ? handleNavigate : undefined}
        />
      )}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  const context = useContext(LightboxContext)
  if (context === undefined) {
    throw new Error('useLightbox must be used within a LightboxProvider')
  }
  return context
}

