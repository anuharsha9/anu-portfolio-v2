'use client'

import { motion } from 'framer-motion'
import { FrameworkConnection as FrameworkConnectionType } from '@/types/caseStudy'
import Link from 'next/link'

interface FrameworkConnectionProps {
  data: FrameworkConnectionType
  isLightBackground?: boolean
  sectionMappings?: Record<string, string>
}

// Technical Reality notes for each D.E.S.I.G.N. principle
const technicalRealityNotes: Record<string, string> = {
  D: 'if (context === unknown) return error; // I don\'t design until I map the system dependencies.',
  E: 'import { Engineering_Constraints } from \'team\'; // A beautiful UI that breaks the backend is a failed design.',
  S: 'const complexity = reduce(noise); // I treat UI like data modeling: normalize the inputs.',
  I: 'while (!stable) { feedback.loop(); } // Code reviews for design. No surprises in the PR.',
  G: 'function optimize(limit) { return creative_solution; } // The tightest constraints breed the cleanest systems.',
  N: 'deploy(vision, production_reality); // I ship alongside the team. The job ends at \'Live\'.',
}

export default function FrameworkConnection({ data, sectionMappings }: FrameworkConnectionProps) {
  return (
    <div className="space-y-10">
      {/* ============================================
          HEADER
          ============================================ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-4"
      >
        <h2 className="text-slate-900 text-2xl md:text-3xl font-serif leading-tight">
          The D.E.S.I.G.N. Framework in Action
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          How I applied my design framework to this project
        </p>
        <Link 
          href="/me#design-framework" 
          className="inline-flex items-center gap-2 text-[#0BA2B5] hover:text-[#0990A2] text-xs md:text-sm transition-colors duration-300"
        >
          <span>Learn about the full framework</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </motion.div>

      {/* ============================================
          FRAMEWORK CARDS GRID
          ============================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {data.principles.map((principle, index) => {
          const sectionId = sectionMappings?.[principle.letter]
          const technicalNote = technicalRealityNotes[principle.letter]

          const handleClick = (e: React.MouseEvent) => {
            if (sectionId) {
              e.preventDefault()
              const element = document.getElementById(sectionId)
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }

          const cardContent = (
            <div className="h-full flex flex-col">
              {/* Card Header with Letter Lockup */}
              <div className="flex items-center gap-3 mb-4">
                {/* Letter Badge */}
                <span className="font-mono text-2xl md:text-3xl font-bold text-[#0BA2B5]">
                  {principle.letter}
                </span>
                <span className="text-slate-300 font-light">—</span>
                {/* Title */}
                <h3 className="text-slate-900 text-lg md:text-xl font-serif font-medium group-hover:text-[#0BA2B5] transition-colors">
                  {principle.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {principle.description}
              </p>

              {/* Technical Reality Code Block */}
              {technicalNote && (
                <div className="bg-slate-900 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <code className="font-mono text-xs text-slate-400 leading-relaxed">
                      <span className="text-emerald-400">{'//'} Technical Reality:</span>{' '}
                      {technicalNote.replace('// ', '')}
                    </code>
                  </div>
                </div>
              )}

              {/* Section Link (hover state) */}
              {sectionId && (
                <div className="mt-4 flex items-center gap-2 text-[#0BA2B5] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View section</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          )

          return (
            <motion.div 
              key={principle.letter} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.3 }} 
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {sectionId ? (
                <a 
                  href={`#${sectionId}`} 
                  onClick={handleClick} 
                  className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-[#0BA2B5]/30 transition-all duration-300 group cursor-pointer block h-full"
                >
                  {cardContent}
                </a>
              ) : (
                <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-[#0BA2B5]/30 transition-all duration-300 group h-full">
                  {cardContent}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
