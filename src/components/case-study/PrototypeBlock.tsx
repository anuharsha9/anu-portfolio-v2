'use client'

import MotionSection from '@/components/ui/MotionSection'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'

interface PrototypeBlockProps {
  prototypeMedia?: {
    title: string
    description?: string
    figmaEmbedUrl?: string
    videoEmbedUrl?: string // YouTube embed URL
    videoUrl?: string // Self-hosted video URL (MP4)
    videoPoster?: string // Poster/thumbnail for self-hosted videos
  }
}

export default function PrototypeBlock({
  prototypeMedia,
}: PrototypeBlockProps) {
  if (!prototypeMedia) {
    return null
  }

  return (
    <MotionSection id="prototype" className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-white text-3xl md:text-4xl font-serif">{prototypeMedia.title}</h2>
        {prototypeMedia.description && (
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            {prototypeMedia.description}
          </p>
        )}
      </div>

      {/* Self-hosted video */}
      {prototypeMedia.videoUrl && (
        <div className="space-y-4 mt-8">
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold">Video Walkthrough</h3>
            {prototypeMedia.description ? (
              <p className="text-white/60 text-sm max-w-2xl">{prototypeMedia.description}</p>
            ) : (
              <p className="text-white/60 text-sm max-w-2xl">
                Watch the walkthrough to see how the final design works in practice.
              </p>
            )}
          </div>
          <div className="max-w-[1200px] mx-auto">
            <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-[var(--bg-dark-alt)] overflow-hidden">
              <CustomVideoPlayer
                src={prototypeMedia.videoUrl}
                poster={prototypeMedia.videoPoster}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* YouTube embed */}
      {prototypeMedia.videoEmbedUrl && !prototypeMedia.videoUrl && (
        <div className="space-y-4 mt-8">
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold">Video Walkthrough</h3>
            {prototypeMedia.description ? (
              <p className="text-white/60 text-sm max-w-2xl">{prototypeMedia.description}</p>
            ) : (
              <p className="text-white/60 text-sm max-w-2xl">
                Watch the walkthrough to see how the final design works in practice.
              </p>
            )}
          </div>
          <div className="max-w-[1200px] mx-auto">
            <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-[var(--bg-dark-alt)] overflow-hidden">
              <iframe
                src={prototypeMedia.videoEmbedUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video Walkthrough"
              />
            </div>
          </div>
        </div>
      )}
    </MotionSection>
  )
}

