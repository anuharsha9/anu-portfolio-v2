'use client'

import Image from 'next/image'
import LockedContent from './LockedContent'

interface SensitiveImageProps {
  src: string
  alt: string
  caption?: string
  fullWidth?: boolean
  sensitive?: boolean
  isUnlocked: boolean
  password?: string
  caseStudySlug?: string
  isLightBackground?: boolean
  onClick?: () => void
  className?: string
  imageClassName?: string
  width?: number
  height?: number
  sizes?: string
  fill?: boolean
  aspectRatio?: string
}

export default function SensitiveImage({
  src,
  alt,
  caption,
  fullWidth,
  sensitive = false,
  isUnlocked,
  password,
  caseStudySlug,
  isLightBackground = false,
  onClick,
  className = '',
  imageClassName = '',
  width,
  height,
  sizes,
  fill = false,
  aspectRatio,
}: SensitiveImageProps) {
  const imageElement = fill ? (
    <Image
      src={src}
      alt={alt}
      fill
      className={imageClassName}
      sizes={sizes}
      onClick={onClick}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={imageClassName}
      sizes={sizes}
      onClick={onClick}
    />
  )

  const imageWithCaption = (
    <>
      {imageElement}
      {caption && (
        <p className={`${isLightBackground ? 'text-[#666666]' : 'text-white/70'} text-sm leading-relaxed mt-3`}>
          {caption}
        </p>
      )}
    </>
  )

  if (sensitive && !isUnlocked) {
    return (
      <LockedContent
        isUnlocked={isUnlocked}
        password={password}
        caseStudySlug={caseStudySlug}
        isLightBackground={isLightBackground}
        unlockMessage="Password required to view this image"
      >
        <div className={className}>
          {imageWithCaption}
        </div>
      </LockedContent>
    )
  }

  return <div className={className}>{imageWithCaption}</div>
}


