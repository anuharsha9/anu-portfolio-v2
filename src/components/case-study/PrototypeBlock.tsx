'use client'

import MotionSection from '@/components/ui/MotionSection'

interface PrototypeBlockProps {
  prototypeMedia?: {
    title: string
    description?: string
    figmaEmbedUrl?: string
    videoEmbedUrl?: string
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
      <div>
        <h2 className="text-text text-3xl font-serif">{prototypeMedia.title}</h2>
        {prototypeMedia.description && (
          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            {prototypeMedia.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {prototypeMedia.figmaEmbedUrl && (
          <div className="space-y-4">
            <h3 className="text-text text-sm font-medium">
              Interactive Prototype
            </h3>
            <iframe
              src={prototypeMedia.figmaEmbedUrl}
              className="w-full h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-[var(--color-surface)]"
              allowFullScreen
            />
          </div>
        )}

        {prototypeMedia.videoEmbedUrl && (
          <div className="space-y-4">
            <h3 className="text-text text-sm font-medium">
              Prototype Walkthrough
            </h3>
            <iframe
              src={prototypeMedia.videoEmbedUrl}
              className="w-full h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-[var(--color-surface)]"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </MotionSection>
  )
}

