'use client'

import { useState, useRef, useEffect } from 'react'
import { SignatureLogo } from '@/components/brand'

interface CustomVideoPlayerProps {
  src: string
  poster?: string
  className?: string
  onPlay?: () => void
}

export default function CustomVideoPlayer({
  src,
  poster,
  className = '',
  onPlay,
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => {
      setIsPlaying(true)
      onPlay?.()
    }
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
      setCurrentTime(0)
    }
    const handleTimeUpdate = () => {
      if (video.duration) {
        setCurrentTime(video.currentTime)
        setProgress((video.currentTime / video.duration) * 100)
      }
    }
    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Show controls on hover, hide after 3 seconds of no hover
  useEffect(() => {
    if (isHovered) {
      setShowControls(true)
    } else {
      const timer = setTimeout(() => {
        setShowControls(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        preload="metadata"
        playsInline
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback poster if video poster doesn't load */}
      {!isPlaying && !poster && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-dark)] to-[var(--bg-dark-alt)] flex items-center justify-center">
          <div className="text-white/40 text-sm">Video thumbnail</div>
        </div>
      )}

      {/* Custom Play Button - Only show when paused */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center z-20 bg-black/10 hover:bg-black/20 transition-colors duration-300 group"
          aria-label="Play video"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* Custom Controls - Show on hover */}
      {showControls && isHovered && (
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 transition-opacity duration-300">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-[var(--accent-teal)] transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Progress Bar */}
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[var(--accent-teal)] transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Time Display */}
            <span className="text-white text-xs font-mono min-w-[80px] text-right">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      )}

      {/* Logo Watermark - Bottom Right */}
      <div className="absolute bottom-4 right-4 pointer-events-none z-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-white/10">
          <SignatureLogo className="w-6 h-6 text-white/80" />
        </div>
      </div>
    </div>
  )
}

