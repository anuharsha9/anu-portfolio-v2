'use client'

import { motion } from 'framer-motion'
import { ADPListReview } from '@/data/home'
import TopQuoteIcon from '@/assets/top-quote.svg'
import BottomQuoteIcon from '@/assets/bottom-quote.svg'

interface ADPListReviewsDisplayProps {
  reviews: ADPListReview[]
  className?: string
}

export default function ADPListReviewsDisplay({ reviews, className = '' }: ADPListReviewsDisplayProps) {
  if (!reviews || reviews.length === 0) {
    return null
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {reviews.map((review, index) => {
          const wordCount = review.quote.split(' ').length
          const isShortQuote = wordCount <= 30
          const isMediumQuote = wordCount > 30 && wordCount <= 60
          
          const textSize = isShortQuote
            ? 'text-lg md:text-xl'
            : isMediumQuote
            ? 'text-base md:text-lg'
            : 'text-sm md:text-base'

          return (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/50 rounded-xl border border-black/10 p-6 md:p-8 hover:bg-white/70 hover:border-[var(--accent-teal)]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="relative">
                  <TopQuoteIcon
                    className="w-8 h-8 text-[var(--accent-teal)] opacity-70"
                    style={{
                      position: 'absolute',
                      left: '-0.5em',
                      top: '-0.5em',
                    }}
                  />
                </div>

                {/* Quote */}
                <blockquote className="space-y-4">
                  <p className={`text-[var(--text-primary-light)] ${textSize} leading-relaxed italic relative pl-4`}>
                    &ldquo;{review.quote}&rdquo;
                    <BottomQuoteIcon
                      className="w-6 h-6 text-[var(--accent-teal)] opacity-70 absolute bottom-0 right-0"
                    />
                  </p>
                </blockquote>

                {/* Author Info */}
                <footer className="pt-4 border-t border-black/10 mt-4">
                  <p className="text-[var(--text-primary-light)] font-semibold text-base md:text-lg">
                    {review.name}
                  </p>
                  {(review.role || review.company) && (
                    <p className="text-[var(--text-muted-light)] text-sm md:text-base mt-1">
                      {review.role && review.company
                        ? `${review.role} at ${review.company}`
                        : review.role || review.company}
                    </p>
                  )}
                  {review.rating && (
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating!
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </footer>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Link to full profile */}
      <div className="text-center pt-4">
        <a
          href="https://adplist.org/mentors/anuja-harsha-nimmagadda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-[var(--accent-teal)]/80 transition-colors text-sm font-medium"
          aria-label="View full ADPList mentor profile"
        >
          <span>View all reviews on ADPList</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

