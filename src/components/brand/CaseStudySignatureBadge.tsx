'use client'

import React from 'react'
import AnimatedSignatureLogo from './AnimatedSignatureLogo'

interface CaseStudySignatureBadgeProps {
  className?: string
}

/**
 * Case study footer signature.
 * Elegant sign-off at the end of each case study - 15 years of branding.
 */
export default function CaseStudySignatureBadge({ className = '' }: CaseStudySignatureBadgeProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Decorative line */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-px bg-slate-300" />
        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
          Designed by
        </span>
        <div className="w-12 h-px bg-slate-300" />
      </div>
      
      {/* Animated Signature - larger and more prominent */}
      <div className="w-16 h-16 md:w-20 md:h-20 text-slate-600 hover:text-[#0BA2B5] transition-colors duration-500">
        <AnimatedSignatureLogo 
          className="w-full h-full"
          duration={8000}
          pauseDuration={4000}
        />
      </div>
      
      {/* Name */}
      <p className="font-mono text-xs text-slate-500 tracking-wide">
        Anuja Harsha Nimmagadda
      </p>
    </div>
  )
}

