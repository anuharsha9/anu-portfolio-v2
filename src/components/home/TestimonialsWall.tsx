'use client'

import { motion } from 'framer-motion'
import { Recommendation } from '@/data/home'
import { SignatureLogo, SectionDivider } from '@/components/brand'

interface TestimonialsWallProps {
  recommendations: Recommendation[]
}

// Editorial grid layout - varying sizes for visual rhythm
// Format: { cols: grid column span, rows: grid row span, isSpotlight: boolean }
// Balanced layout: no two large cards beside each other
// Updated to ensure tiles fill the grid properly without gaps
const cardLayouts = [
  { cols: 'md:col-span-2', rows: 'md:row-span-1', isSpotlight: true },   // Wide spotlight (2x1) - Vijay Raman
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Small (1x1)
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Small (1x1)
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Regular (1x1) - Aniket Awchare
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Small (1x1)
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Small (1x1)
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Small (1x1)
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Small (1x1)
  { cols: 'md:col-span-1', rows: 'md:row-span-1', isSpotlight: false }, // Small (1x1) - Vedavyas
]

export default function TestimonialsWall({
  recommendations,
}: TestimonialsWallProps) {
  if (!recommendations || recommendations.length === 0) {
    return null
  }

  return (
    <section
      id="testimonials"
      className="py-12 md:py-14 lg:py-16 relative"
      style={{
        backgroundColor: '#F5F4F1',
      }}
    >
      {/* Section Divider */}
      <SectionDivider isLightBackground={true} />
      
      {/* Subtle Logo Watermark - Top Right Corner */}
      <div className="absolute top-8 right-8 opacity-[0.02] pointer-events-none hidden lg:block">
        <div className="w-24 h-24">
          <SignatureLogo className="w-full h-full text-black" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-[#1A1A1A] text-2xl md:text-3xl lg:text-4xl font-serif leading-tight tracking-tight">
            People I&apos;ve worked with say…
          </h2>
        </motion.div>

        {/* Editorial Grid - Staggered 2-3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 auto-rows-fr">
          {recommendations.map((rec, index) => {
            const layout = cardLayouts[index % cardLayouts.length]
            const staggerDelay = index * 0.1

            return (
              <motion.div
                key={`${rec.name}-${index}`}
                initial={{ opacity: 0, visibility: 'hidden' as const }}
                whileInView={{ opacity: 1, visibility: 'visible' as const }}
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
                style={{ willChange: 'opacity', opacity: 0, visibility: 'hidden' }}
                transition={{
                  duration: 0.5,
                  delay: staggerDelay,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`${layout.cols} ${layout.rows} group`}
              >
                {/* Frame - compact card with minimal padding, no empty space */}
                <div
                  className="h-full p-4 md:p-5 lg:p-5 bg-white flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 rounded-2xl"
                  style={{
                    border: layout.isSpotlight 
                      ? '1px solid rgba(13, 148, 136, 0.2)' 
                      : '1px solid rgba(26, 26, 26, 0.08)',
                    boxShadow: layout.isSpotlight
                      ? '0 2px 12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(13, 148, 136, 0.15)'
                      : '0 1px 8px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  {/* Accent indicator for spotlight cards */}
                  {layout.isSpotlight && (
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  {/* Compact decorative quotation mark */}
                  <div
                    className="mb-2"
                    style={{
                      fontSize: layout.isSpotlight ? '40px' : '32px',
                      lineHeight: '1',
                      fontFamily: 'serif',
                      color: layout.isSpotlight ? 'var(--accent-teal)' : '#1A1A1A',
                      opacity: layout.isSpotlight ? 0.15 : 0.1,
                      transform: 'translateY(0.1em)',
                      pointerEvents: 'none',
                    }}
                  >
                    &ldquo;
                  </div>

                  {/* Quote - Regular body text - compact, no extra space */}
                  <blockquote className="flex-1 flex flex-col space-y-2 md:space-y-3 min-h-0">
                    <p
                      className="text-[#1A1A1A] leading-relaxed font-sans flex-1"
                      style={{
                        fontSize: layout.isSpotlight
                          ? 'clamp(0.9375rem, 1.3vw, 1.0625rem)'
                          : 'clamp(0.875rem, 1.1vw, 0.9375rem)',
                        lineHeight: '1.6',
                        letterSpacing: '0',
                      }}
                    >
                      {rec.quote}
                    </p>

                    {/* Attribution - Sans-serif typography - compact, pushed to bottom */}
                    <footer className="pt-2 md:pt-3 border-t border-[#1A1A1A]/8 mt-auto flex-shrink-0">
                      <p
                        className="text-[#1A1A1A] font-medium tracking-tight"
                        style={{
                          fontSize: layout.isSpotlight
                            ? 'clamp(0.75rem, 0.95vw, 0.8125rem)'
                            : 'clamp(0.6875rem, 0.85vw, 0.75rem)',
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                        }}
                      >
                        {rec.name}
                      </p>
                      <p
                        className="text-[#1A1A1A]/65 mt-0.5 tracking-wide"
                        style={{
                          fontSize: layout.isSpotlight
                            ? 'clamp(0.6875rem, 0.85vw, 0.75rem)'
                            : 'clamp(0.625rem, 0.75vw, 0.6875rem)',
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                        }}
                      >
                        {rec.role} {rec.company && `at ${rec.company}`}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* Section Divider at bottom */}
      <div className="pt-8 md:pt-10">
        <SectionDivider isLightBackground={true} />
      </div>
    </section>
  )
}

