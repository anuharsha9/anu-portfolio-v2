'use client'

import { motion } from 'framer-motion'
import { heroSubVariant } from '@/lib/animations'

interface ProjectDetails {
  role: string
  company: string
  timeframe: string
}

interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

interface ProjectMetaRowProps {
  details: ProjectDetails
  testimonial?: Testimonial
  maxQuoteLength?: number
}

export default function ProjectMetaRow({
  details,
  testimonial,
  maxQuoteLength = 180,
}: ProjectMetaRowProps) {
  // Truncate quote if too long
  const truncatedQuote = testimonial && testimonial.quote.length > maxQuoteLength
    ? testimonial.quote.substring(0, maxQuoteLength) + '...'
    : testimonial?.quote

  return (
    <motion.div
      variants={heroSubVariant}
      initial="hidden"
      animate="visible"
      className="mt-12 sm:mt-16 md:mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {/* Project Details Card */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <div className="space-y-4">
            {/* Role */}
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Role
              </span>
              <p className="font-semibold text-slate-900">{details.role}</p>
            </div>

            {/* Company */}
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Company
              </span>
              <p className="font-semibold text-slate-900">{details.company}</p>
            </div>

            {/* Timeframe */}
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Timeframe
              </span>
              <p className="font-semibold text-slate-900">{details.timeframe}</p>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        {testimonial && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
            <blockquote className="space-y-4">
              <p className="font-serif italic text-lg text-slate-800 leading-relaxed">
                &ldquo;{truncatedQuote}&rdquo;
              </p>
              <footer className="pt-2">
                <p className="font-sans font-bold text-sm text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-slate-500 text-xs">
                  {testimonial.role}
                  {testimonial.company && ` at ${testimonial.company}`}
                </p>
              </footer>
            </blockquote>
          </div>
        )}
      </div>
    </motion.div>
  )
}

