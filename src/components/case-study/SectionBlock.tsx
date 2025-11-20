import Image from 'next/image'
import { CaseStudySection } from '@/types/caseStudy'

interface SectionBlockProps {
  section: CaseStudySection
}

export default function SectionBlock({ section }: SectionBlockProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Main content column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="text-muted text-sm font-mono">{section.index}</span>
            <h2 className="text-text text-3xl font-serif">{section.title}</h2>
          </div>

          <div className="text-muted leading-relaxed whitespace-pre-line">
            {section.body}
          </div>

          {section.bullets && section.bullets.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-muted">
              {section.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>

        {/* "What this reveals" aside */}
        {section.revealsPoints && section.revealsPoints.length > 0 && (
          <aside className="lg:col-span-1">
            <div className="bg-surface/50 rounded-lg p-6 border border-surface/50 backdrop-blur-sm">
              <h3 className="text-text text-sm font-medium mb-4">
                What this reveals
              </h3>
              {section.revealsTitle && (
                <p className="text-muted text-sm mb-4 font-medium">
                  {section.revealsTitle}
                </p>
              )}
              <ul className="space-y-2">
                {section.revealsPoints.map((point, index) => (
                  <li key={index} className="text-muted text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>

      {/* Images */}
      {section.images && section.images.length > 0 && (
        <div className="mt-8">
          {section.images.length === 1 ? (
            // Single image - center with max width
            section.images[0].fullWidth ? (
              // Full width edge-to-edge
              <div className="w-screen relative left-[calc(50%-50vw)]">
                <div className="relative w-full aspect-video">
                  <Image
                    src={section.images[0].src}
                    alt={section.images[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {section.images[0].caption && (
                  <p className="text-muted text-sm text-center mt-4 px-6">
                    {section.images[0].caption}
                  </p>
                )}
              </div>
            ) : (
              // Centered with max width
              <div className="max-w-3xl mx-auto">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={section.images[0].src}
                    alt={section.images[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {section.images[0].caption && (
                  <p className="text-muted text-sm text-center mt-4">
                    {section.images[0].caption}
                  </p>
                )}
              </div>
            )
          ) : (
            // Multiple images - responsive grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, index) =>
                image.fullWidth ? (
                  <div
                    key={index}
                    className="col-span-full w-screen relative left-[calc(50%-50vw)]"
                  >
                    <div className="relative w-full aspect-video">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-muted text-sm text-center mt-4 px-6">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ) : (
                  <div key={index} className="space-y-2">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-muted text-sm">{image.caption}</p>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

