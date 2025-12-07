'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  roleTag?: string // Technical classification tag e.g., 'ENGINEERING_PARTNER'
  isLightBackground?: boolean
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  roleTag,
  isLightBackground = true,
}: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 border border-slate-200 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent-teal)]/30 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Giant Quotation Mark - Subtle Watermark */}
      <span className="absolute top-4 right-6 text-[80px] md:text-[100px] text-[var(--accent-teal-100)] font-serif leading-none select-none pointer-events-none">
        &ldquo;
      </span>

      <blockquote className="space-y-5 flex-1 flex flex-col relative z-10">
        {/* Quote Body - Editorial Style */}
        <p className="font-serif italic text-lg text-slate-700 leading-relaxed flex-1">
          {quote}
        </p>

        {/* Author Footer */}
        <footer className="pt-4 border-t border-slate-200 space-y-2">
          {/* Role Tag - Technical Classification */}
          {roleTag && (
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-teal)] block">
              [{roleTag}]
            </span>
          )}
          
          {/* Author Name */}
          <p className="font-sans font-bold text-slate-900 group-hover:text-[var(--accent-teal)] transition-colors">
            {name}
          </p>
          
          {/* Job Title & Company */}
          <p className="font-sans text-sm text-slate-500">
            {role} {company && `· ${company}`}
          </p>
        </footer>
      </blockquote>
    </motion.div>
  )
}
