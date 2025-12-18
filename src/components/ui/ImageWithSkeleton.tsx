'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ImageWithSkeletonProps extends Omit<ImageProps, 'onLoad'> {
  skeletonClassName?: string
}

export default function ImageWithSkeleton({
  className = '',
  skeletonClassName = '',
  alt,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
