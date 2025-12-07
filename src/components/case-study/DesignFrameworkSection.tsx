'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface DesignFrameworkSectionProps {
  // Framework letter (D, E, S, I, G, N)
  letter: string
  
  // Section title (e.g., "Discover Deeply")
  title: string
  
  // TL;DR summary
  tldr?: string
  
  // Methodologies/capabilities - will be rendered as [Tag] format
  methodologies?: string[]
  
  // Section ID for navigation
  sectionId?: string
  
  // Children content
  children?: ReactNode
}

// Convert method names to tag-friendly format
function toTagFormat(method: string): string {
  return method
    .replace(/\s+/g, '_')
    .replace(/[()]/g, '')
    .replace(/-/g, '_')
}

export default function DesignFrameworkSection({
  letter,
  title,
  tldr,
  methodologies = [],
  sectionId,
  children,
}: DesignFrameworkSectionProps) {
  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="py-12 md:py-16 lg:py-20"
    >
      {/* Section Header */}
      <div className="space-y-6 relative mb-8 md:mb-12">
        {/* Drop Cap - Subtle watermark style */}
        <div className="relative">
          {/* Large watermark letter behind */}
          <span className="absolute -left-2 -top-4 text-[120px] md:text-[160px] font-serif font-bold text-slate-100 select-none pointer-events-none leading-none z-0">
            {letter}
          </span>
          
          {/* Section Title - On top of watermark */}
          <div className="relative z-10 pt-8">
            {/* Small framework indicator */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[var(--accent-teal)] text-sm font-mono uppercase tracking-widest font-semibold">
                {letter}
              </span>
              <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
            </div>
            
            {/* Section Title */}
            <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* TL;DR - System Note style */}
        {tldr && (
          <div className="border-l-2 border-slate-300 pl-4 py-2 mt-6">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
              TL;DR
            </span>
            <p className="font-mono text-sm text-slate-600 leading-relaxed">
              {tldr}
            </p>
          </div>
        )}

        {/* Capabilities Tags - Monospace Spec Style */}
        {methodologies.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-1 gap-y-2 mt-6">
            <span className="text-[var(--accent-teal)] text-xs font-mono uppercase tracking-widest mr-2">
              // CAPABILITIES:
            </span>
            {methodologies.map((method, index) => (
              <span 
                key={index} 
                className="text-slate-500 text-xs font-mono uppercase tracking-widest"
              >
                [{toTagFormat(method)}]
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Section Content - Visuals come immediately after TL;DR */}
      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </motion.section>
  )
}
