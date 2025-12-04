'use client'

import { motion } from 'framer-motion'
import { Recommendation } from '@/data/home'

interface HeroTestimonialProps {
  testimonial: Recommendation
  className?: string
}

export default function HeroTestimonial({ testimonial, className = '' }: HeroTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={className}
    >
      <div className="bg-[var(--accent-teal)]/5 rounded-lg border border-[var(--accent-teal)]/20 p-6 md:p-8">
        <blockquote className="space-y-4">
          <p className="text-[var(--text-primary-light)] text-base md:text-lg leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="pt-3 border-t border-black/10">
            <p className="text-[var(--text-primary-light)] font-semibold text-sm md:text-base">
              {testimonial.name}
            </p>
            <p className="text-[var(--text-muted-light)] text-xs md:text-sm">
              {testimonial.role} {testimonial.company && `at ${testimonial.company}`}
            </p>
          </footer>
        </blockquote>
      </div>
    </motion.div>
  )
}

