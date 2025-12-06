'use client'

import { motion } from 'framer-motion'
import { FrameworkConnection as FrameworkConnectionType } from '@/types/caseStudy'
import Link from 'next/link'
import { getTheme } from '@/lib/design-system'

interface FrameworkConnectionProps {
  data: FrameworkConnectionType
  isLightBackground?: boolean
  sectionMappings?: Record<string, string>
}

export default function FrameworkConnection({ data, isLightBackground = false, sectionMappings }: FrameworkConnectionProps) {
  const t = getTheme(isLightBackground)

  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-3"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px flex-1 bg-[var(--accent-teal)]/30"></div>
          <h2 className={`${t.text} text-xl md:text-2xl font-serif leading-tight`}>The D.E.S.I.G.N. Framework in Action</h2>
          <div className="h-px flex-1 bg-[var(--accent-teal)]/30"></div>
        </div>
        <p className={`${t.textMuted} text-sm md:text-base leading-relaxed max-w-2xl mx-auto`}>How I applied my design framework to this project</p>
        <Link href="/#executive-summary" className={`inline-flex items-center gap-2 ${t.textAccent} hover:opacity-80 text-xs md:text-sm transition-opacity duration-300`}>
          <span>Learn about the full framework</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {data.principles.map((principle, index) => {
          const firstLetter = principle.title.charAt(0)
          const restOfTitle = principle.title.slice(1)
          const sectionId = sectionMappings?.[principle.letter]

          const handleClick = (e: React.MouseEvent) => {
            if (sectionId) {
              e.preventDefault()
              const element = document.getElementById(sectionId)
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }

          const cardContent = (
            <div className="space-y-3.5">
              <div className="flex items-baseline gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`h-px flex-1 ${t.divider}`}></div>
                <div className="h-px w-6 bg-[var(--accent-teal)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className={`${t.text} text-base md:text-lg font-serif font-medium leading-tight flex items-baseline transition-colors duration-300`}>
                <span className={`${t.textAccent} text-xl md:text-2xl font-bold font-serif leading-none mr-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>{firstLetter}</span>
                <span>{restOfTitle}</span>
              </h3>

              <p className={`${t.textMuted} text-xs md:text-sm leading-relaxed`}>{principle.description}</p>

              {sectionId && (
                <div className={`mt-3 flex items-center gap-2 ${t.textAccent} text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span>View section</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          )

          return (
            <motion.div key={principle.letter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
              {sectionId ? (
                <a href={`#${sectionId}`} onClick={handleClick} className={`${t.bg} rounded-xl p-5 md:p-6 border ${t.border} ${isLightBackground ? 'border-t-2 border-t-[var(--accent-teal)]/30' : 'border-t-2 border-t-white/10'} hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,162,183,0.05)] hover:border-[var(--accent-teal)]/30 transition-all duration-300 group cursor-pointer block`}>
                  {cardContent}
                </a>
              ) : (
                <div className={`${t.bg} rounded-xl p-5 md:p-6 border ${t.border} ${isLightBackground ? 'border-t-2 border-t-[var(--accent-teal)]/30' : 'border-t-2 border-t-white/10'} hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,162,183,0.05)] hover:border-[var(--accent-teal)]/30 transition-all duration-300 group`}>
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
