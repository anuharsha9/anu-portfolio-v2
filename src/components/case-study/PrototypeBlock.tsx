'use client'

import MotionSection from '@/components/ui/MotionSection'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import BeforeAfterVideo from './BeforeAfterVideo'
import MultiBeforeAfterVideo from './MultiBeforeAfterVideo'

interface PrototypeBlockProps {
  prototypeMedia?: {
    title: string
    description?: string
    figmaEmbedUrl?: string
    videoEmbedUrl?: string // YouTube embed URL
    videoUrl?: string // Self-hosted video URL (MP4)
    videoPoster?: string // Poster/thumbnail for self-hosted videos
    // Before/After video comparison
    beforeAfter?: {
      before: {
        title: string
        videoUrl?: string
        videoEmbedUrl?: string // YouTube embed URL (public)
        videoPoster?: string
        description?: string
      }
      after: {
        title: string
        videoUrl: string
        videoPoster?: string
        description?: string
        isPublic?: boolean // If true, video is public (e.g., Figma prototype, not from sandbox)
      }
      comparisonNotes?: {
        before: string[]
        after: string[]
      }
    }
    // Multiple before videos (for IQ Plugin - 3 old workflows)
    multiBeforeAfter?: {
      before: {
        title: string
        videos: {
          title: string
          videoUrl: string
          videoPoster?: string
          description?: string
        }[]
      }
      after: {
        title: string
        videoUrl: string
        videoPoster?: string
        description?: string
      }
      comparisonNotes?: {
        before: string[]
        after: string[]
      }
    }
  }
  caseStudySlug?: string
  isLightBackground?: boolean
  password?: string
}

export default function PrototypeBlock({
  prototypeMedia,
  caseStudySlug,
  isLightBackground = false,
  password = 'anu-access',
}: PrototypeBlockProps) {
  if (!prototypeMedia) {
    return null
  }

  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'

  return (
    <MotionSection 
      id="prototype" 
      className={`py-16 md:py-24 ${isLightBackground ? 'bg-white' : 'surface-dark'} border-t ${isLightBackground ? 'border-black/10' : 'border-white/5'}`}
    >
      <div className="space-y-8">
        {/* Multi Before/After Video Comparison - For IQ Plugin (3 old workflows vs 1 new) */}
        {prototypeMedia.multiBeforeAfter ? (
          <MultiBeforeAfterVideo
            before={prototypeMedia.multiBeforeAfter.before}
            after={prototypeMedia.multiBeforeAfter.after}
            isLightBackground={isLightBackground}
            comparisonNotes={prototypeMedia.multiBeforeAfter.comparisonNotes}
            password={password}
            caseStudySlug={caseStudySlug}
          />
        ) : prototypeMedia.beforeAfter ? (
          <BeforeAfterVideo
            before={prototypeMedia.beforeAfter.before}
            after={prototypeMedia.beforeAfter.after}
            isLightBackground={isLightBackground}
            comparisonNotes={prototypeMedia.beforeAfter.comparisonNotes}
            password={password}
            caseStudySlug={caseStudySlug}
          />
        ) : (
          <>
            {/* Header - Only show for single video */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className={`h-px flex-1 ${isLightBackground ? 'bg-[var(--accent-teal)]/20' : 'bg-[var(--accent-teal)]/30'}`}></div>
                <h2 className={`${textColor} text-4xl md:text-5xl font-serif`}>{prototypeMedia.title}</h2>
                <div className={`h-px flex-1 ${isLightBackground ? 'bg-[var(--accent-teal)]/20' : 'bg-[var(--accent-teal)]/30'}`}></div>
              </div>
              {prototypeMedia.description && (
                <p className={`${mutedColor} text-lg md:text-xl leading-relaxed max-w-3xl mx-auto`}>
                  {prototypeMedia.description}
                </p>
              )}
            </div>
          </>
        )}

        {/* Single Video Walkthrough - Fallback */}
        {!prototypeMedia.beforeAfter && !prototypeMedia.multiBeforeAfter && prototypeMedia.videoUrl && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className={`${textColor} text-2xl font-serif font-semibold`}>Video Walkthrough</h3>
              <p className={`${mutedColor} text-base max-w-2xl mx-auto`}>
                This is an actual video walkthrough created and narrated by me. Watch to see how the final design works in practice.
              </p>
            </div>
            <div className="max-w-[1200px] mx-auto">
              <div className={`relative w-full aspect-video rounded-2xl border-2 ${isLightBackground ? 'border-[var(--accent-teal)]/30' : 'border-[var(--accent-teal)]/50'} bg-gradient-to-br from-[var(--bg-dark-alt)] to-[var(--bg-dark)] overflow-hidden shadow-2xl`}>
                <CustomVideoPlayer
                  src={prototypeMedia.videoUrl}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* YouTube embed */}
        {!prototypeMedia.beforeAfter && prototypeMedia.videoEmbedUrl && !prototypeMedia.videoUrl && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className={`${textColor} text-2xl font-serif font-semibold`}>Video Walkthrough</h3>
              <p className={`${mutedColor} text-base max-w-2xl mx-auto`}>
                Watch the walkthrough to see how the final design works in practice.
              </p>
            </div>
            <div className="max-w-[1200px] mx-auto">
              <div className={`relative w-full aspect-video rounded-2xl border-2 ${isLightBackground ? 'border-[var(--accent-teal)]/30' : 'border-[var(--accent-teal)]/50'} bg-[var(--bg-dark-alt)] overflow-hidden shadow-2xl`}>
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
      </div>
    </MotionSection>
  )
}

