'use client'

import { motion } from 'framer-motion'
import { useMemo, memo } from 'react'
import { Recommendation } from '@/data/home'
import { SignatureLogo, SectionDivider } from '@/components/brand'
import TopQuoteIcon from '@/assets/top-quote.svg'
import BottomQuoteIcon from '@/assets/bottom-quote.svg'

interface TestimonialsWallProps {
  recommendations: Recommendation[]
}


// Memoized testimonial tile component to prevent unnecessary re-renders
const TestimonialTile = memo(function TestimonialTile({
  rec,
  index,
  wordCount,
  top3Shortest,
}: {
  rec: Recommendation
  index: number
  wordCount: number
  top3Shortest: number[]
}) {
  const staggerDelay = index * 0.08
  
  // Create more visual variety for Pinterest feel with varied sizes
  // SHORTER quotes get LARGER text, LONGER quotes get SMALLER text
  // More granular size categories for better visual play
  const isVeryShortQuote = wordCount <= 15  // Extra extra large text
  const isShortQuote = wordCount > 15 && wordCount <= 30  // Extra large text
  const isMediumQuote = wordCount > 30 && wordCount <= 50  // Large text
  const isLongQuote = wordCount > 50 && wordCount <= 75  // Medium text
  const isVeryLongQuote = wordCount > 75  // Small text
  
  // Varied padding for more organic mosaic - scaled down
  const paddingClass = isVeryShortQuote
    ? 'p-3 md:p-4'
    : isShortQuote
    ? 'p-4 md:p-5'
    : isMediumQuote
    ? 'p-5 md:p-6'
    : isLongQuote
    ? 'p-6 md:p-7'
    : 'p-7 md:p-8'
  
  // Varied typography sizes - INVERSE relationship with more granular steps (scaled down)
  const textSize = isVeryShortQuote
    ? 'text-xl md:text-2xl lg:text-3xl'  // Very short quotes get extra large text
    : isShortQuote
    ? 'text-lg md:text-xl lg:text-2xl'  // Short quotes get large text
    : isMediumQuote
    ? 'text-base md:text-lg lg:text-xl'  // Medium quotes get medium-large text
    : isLongQuote
    ? 'text-sm md:text-base lg:text-lg'  // Long quotes get medium text
    : 'text-xs md:text-sm lg:text-base'  // Very long quotes get smallest text
  
  // Varied font weights - only make the 3 shortest quotes bold
  // Use memoized top3Shortest
  const isOneOfShortest = top3Shortest.includes(wordCount)
  
  // Vijay Raman gets extra bold weight as leadership recommendation
  const isVijayRaman = rec.name === 'Vijay Raman'
  
  const fontWeight = isVijayRaman
    ? 'font-bold'  // Extra bold for leadership recommendation
    : isOneOfShortest 
    ? 'font-semibold' 
    : 'font-normal'
  
  // Add random offset for uneven tops - create organic feel at top and bottom
  // Use index to create pseudo-random but consistent offsets
  // Create more variation: some tiles start higher, some lower
  const offsetPattern = [0, -12, 24, -8, 16, -16, 8, -20, 12]
  const topOffset = offsetPattern[index % offsetPattern.length]

  return (
    <motion.div
      key={`${rec.name}-${index}`}
      initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
      style={{ 
        willChange: 'opacity, transform', 
        opacity: 0, 
        visibility: 'hidden',
        marginTop: `${topOffset}px`,
      }}
      transition={{
        duration: 0.5,
        delay: staggerDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full break-inside-avoid mb-3 md:mb-4 lg:mb-5 group inline-block"
    >
      {/* Tile - Consistent styling with rest of website, varied padding for organic feel */}
      <div
        className={`w-full ${paddingClass} rounded-xl border border-white/5 bg-white/5 flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:shadow-[0_4px_12px_rgba(13,148,136,0.075)] hover:-translate-y-0.5`}
      >
        {/* Decorative line element - similar to framework tiles */}
        <div className="flex items-baseline gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="h-px flex-1 bg-white/10"></div>
          <div className="h-px w-8 bg-[var(--accent-teal)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Opening quote icon */}
        <div className="relative mb-2" style={{ 
          paddingLeft: isVeryShortQuote || isShortQuote ? '1.3em' : '1.1em',
        }}>
          <TopQuoteIcon
            style={{
              position: 'absolute',
              left: '0',
              top: isVeryShortQuote || isShortQuote ? '-0.1em' : '-0.2em',
              width: isVeryShortQuote || isShortQuote ? '1.5em' : isMediumQuote ? '1.3em' : '1.2em',
              height: isVeryShortQuote || isShortQuote ? '1.5em' : isMediumQuote ? '1.3em' : '1.2em',
            }}
            className="text-[var(--accent-teal)]"
          />
        </div>

        {/* Quote */}
        <blockquote className="flex-1 flex flex-col space-y-4 mt-2">
          <p
            className={`text-white leading-relaxed font-sans flex-1 ${textSize} ${fontWeight} relative`}
            style={{
              lineHeight: isVeryShortQuote || isShortQuote 
                ? '1.3' 
                : isMediumQuote 
                ? '1.5' 
                : isLongQuote 
                ? '1.6' 
                : '1.7',
              paddingRight: '1.2em',
              paddingBottom: '2.4em',
              paddingLeft: isVeryShortQuote || isShortQuote ? '0.2em' : '0.1em',
            }}
          >
            {rec.quote}
            {/* Closing quote icon */}
            <BottomQuoteIcon
              style={{
                position: 'absolute',
                right: '0',
                bottom: '0',
                width: isVeryShortQuote || isShortQuote ? '1.5em' : isMediumQuote ? '1.3em' : '1.2em',
                height: isVeryShortQuote || isShortQuote ? '1.5em' : isMediumQuote ? '1.3em' : '1.2em',
              }}
              className="text-[var(--accent-teal)]"
            />
          </p>

          {/* Attribution */}
          <footer className="pt-4 border-t border-white/5 mt-auto flex-shrink-0">
            <p className={`text-white font-semibold ${isVeryLongQuote || isLongQuote ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
              {rec.name}
            </p>
            <p className={`text-white/70 mt-1 ${isVeryLongQuote || isLongQuote ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
              {rec.role} {rec.company && `at ${rec.company}`}
            </p>
            {rec.relationship && (
              <div className="mt-3 pt-3 border-t border-white/5">
                <p className={`text-white/90 mt-2 font-light italic ${isVeryLongQuote || isLongQuote ? 'text-xs md:text-sm' : 'text-xs'} leading-relaxed`}>
                  {rec.relationship}
                </p>
              </div>
            )}
          </footer>
        </blockquote>
      </div>
    </motion.div>
  )
})

export default function TestimonialsWall({
  recommendations,
}: TestimonialsWallProps) {
  // Memoize word count calculations to avoid recalculating on every render
  // Hooks must be called before any early returns
  const wordCounts = useMemo(() => {
    if (!recommendations || recommendations.length === 0) return []
    return recommendations.map(r => r.quote.trim().split(/\s+/).filter(word => word.length > 0).length)
  }, [recommendations])
  
  const sortedCounts = useMemo(() => {
    return [...wordCounts].sort((a, b) => a - b)
  }, [wordCounts])
  
  const top3Shortest = useMemo(() => {
    return sortedCounts.slice(0, 3)
  }, [sortedCounts])

  if (!recommendations || recommendations.length === 0) {
    return null
  }

  return (
    <section
      id="testimonials"
      className="surface-dark-alt py-10 md:py-12 lg:py-16 relative"
    >
      {/* Section Divider */}
      <SectionDivider isLightBackground={false} />
      
      {/* Subtle Logo Watermark - Top Right Corner */}
      <div className="absolute top-8 right-8 opacity-[0.02] pointer-events-none hidden lg:block">
        <div className="w-24 h-24">
          <SignatureLogo className="w-full h-full text-black" />
        </div>
      </div>
      
      <div className="max-w-[1125px] mx-auto px-6 md:px-8 lg:px-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-[var(--text-primary-light)] text-xl md:text-2xl lg:text-3xl font-serif leading-tight tracking-tight">
            People I&apos;ve worked with say…
          </h2>
        </motion.div>

        {/* Masonry Layout - Enhanced Pinterest style with more variation */}
        <div 
          className="columns-1 md:columns-2 lg:columns-3 gap-3 md:gap-4 lg:gap-5"
          style={{
            columnFill: 'balance' as const,
          }}
        >
          {recommendations.map((rec, index) => (
            <TestimonialTile
              key={`${rec.name}-${index}`}
              rec={rec}
              index={index}
              wordCount={wordCounts[index]}
              top3Shortest={top3Shortest}
            />
          ))}
        </div>
      </div>
      
      {/* Section Divider at bottom */}
      <div className="pt-8 md:pt-10">
        <SectionDivider isLightBackground={true} />
      </div>
    </section>
  )
}
