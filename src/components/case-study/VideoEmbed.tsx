'use client'

import { useState } from 'react'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'

interface VideoChapter {
  time: number // in seconds
  label: string
}

interface VideoEmbedProps {
  src: string
  poster?: string
  title?: string
  description?: string
  chapters?: VideoChapter[]
  isLightBackground?: boolean
}

export default function VideoEmbed({
  src,
  poster,
  title,
  description,
  chapters,
  isLightBackground = false,
}: VideoEmbedProps) {
  const [currentTime, setCurrentTime] = useState(0)
  const videoRef = useState<HTMLVideoElement | null>(null)

  // Video ref will be handled by CustomVideoPlayer

  const labelColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-white/50' : 'bg-white/5'

  return (
    <div className="space-y-4">
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h3 className={`${labelColor} text-lg md:text-xl font-serif font-semibold`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`${mutedColor} text-sm md:text-base leading-relaxed`}>
              {description}
            </p>
          )}
        </div>
      )}

      <div className="relative w-full rounded-lg overflow-hidden border border-black/10 bg-black/5">
        <CustomVideoPlayer src={src} poster={poster} />
      </div>

      {/* Chapter Markers */}
      {chapters && chapters.length > 0 && (
        <div className={`${bgColor} rounded-lg p-4 md:p-5 border ${borderColor}`}>
          <div className="space-y-3">
            <div className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>
              Jump to:
            </div>
            <div className="flex flex-wrap gap-2">
              {chapters.map((chapter, index) => {
                const formatTime = (seconds: number) => {
                  const mins = Math.floor(seconds / 60)
                  const secs = Math.floor(seconds % 60)
                  return `${mins}:${secs.toString().padStart(2, '0')}`
                }

                return (
                  <button
                    key={index}
                    onClick={() => {
                      // Jump to time - would need video ref
                      const video = document.querySelector('video')
                      if (video) {
                        video.currentTime = chapter.time
                        video.play()
                      }
                    }}
                    className={`${isLightBackground ? 'bg-black/5 hover:bg-black/10' : 'bg-white/10 hover:bg-white/20'} ${labelColor} text-xs px-3 py-1.5 rounded border ${borderColor} hover:border-[var(--accent-teal)]/50 transition-all duration-200 font-medium`}
                  >
                    <span className="text-[var(--accent-teal)]">{formatTime(chapter.time)}</span>
                    {' '}
                    <span>{chapter.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

