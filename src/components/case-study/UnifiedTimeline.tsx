'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLightbox } from '@/contexts/LightboxContext'

interface TimelinePhase {
  id: string
  phase: string
  title: string
  body: string
  status: 'COMPLETED' | 'IN_PROGRESS' | 'REJECTED'
  isCriticalPivot?: boolean
  image?: {
    src: string
    alt: string
    caption?: string
    isBlurred?: boolean
  }
}

interface UnifiedTimelineProps {
  phases: TimelinePhase[]
  header?: {
    tag: string
    title: string
    subtitle: string
  }
  footer?: {
    tag: string
    body: string
  }
  accentColor?: 'teal' | 'amber' | 'violet'
}

export default function UnifiedTimeline({ 
  phases, 
  header = {
    tag: '// PROJECT_EVOLUTION',
    title: 'Project Timeline',
    subtitle: 'Key phases from discovery to delivery.'
  },
  footer,
  accentColor = 'teal'
}: UnifiedTimelineProps) {
  const { openLightbox } = useLightbox()

  const accentClasses = {
    teal: {
      tag: 'text-[var(--accent-teal)]',
      line: 'from-slate-300 via-slate-300 to-[var(--accent-teal)]',
      completed: 'bg-emerald-500 border-emerald-500',
      inProgress: 'bg-amber-500 border-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]',
      rejected: 'bg-red-400 border-red-400',
    },
    amber: {
      tag: 'text-amber-600',
      line: 'from-slate-300 via-slate-300 to-amber-400',
      completed: 'bg-emerald-500 border-emerald-500',
      inProgress: 'bg-amber-500 border-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]',
      rejected: 'bg-red-400 border-red-400',
    },
    violet: {
      tag: 'text-violet-600',
      line: 'from-slate-300 via-slate-300 to-violet-400',
      completed: 'bg-emerald-500 border-emerald-500',
      inProgress: 'bg-violet-500 border-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]',
      rejected: 'bg-red-400 border-red-400',
    },
  }

  const accent = accentClasses[accentColor]

  const getStatusColor = (status: string, isCriticalPivot?: boolean) => {
    if (isCriticalPivot) return accent.inProgress
    if (status === 'COMPLETED') return accent.completed
    if (status === 'IN_PROGRESS') return accent.inProgress
    if (status === 'REJECTED') return accent.rejected
    return 'bg-white border-slate-400'
  }

  const getStatusTextColor = (status: string) => {
    if (status === 'COMPLETED') return 'text-emerald-600'
    if (status === 'IN_PROGRESS') return 'text-amber-600'
    if (status === 'REJECTED') return 'text-red-500'
    return 'text-slate-500'
  }

  const allImages = phases
    .filter(p => p.image)
    .map(p => ({
      src: p.image!.src,
      alt: p.image!.alt,
      caption: p.image?.caption || p.title
    }))

  return (
    <div className="max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className={`font-mono ${accent.tag} text-xs tracking-widest uppercase`}>
              {header.tag}
            </span>
            <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
          </div>
          <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
            {header.title}
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
            {header.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b ${accent.line}`}></div>

          {/* Phase Nodes */}
          <div className="space-y-0">
            {phases.map((phase, index) => {
              const imageIndex = allImages.findIndex(img => img.src === phase.image?.src)
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-16 py-6 group"
                >
                  {/* Node Dot */}
                  <div className={`absolute left-2.5 md:left-4.5 top-7 w-3 h-3 rounded-full border-2 ${getStatusColor(phase.status, phase.isCriticalPivot)}`}></div>

                  {/* Content */}
                  <div className={`space-y-4 ${phase.isCriticalPivot ? 'pl-4 border-l-2 border-amber-400 -ml-4' : ''}`}>
                    {/* Phase Tag & Title Row */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`font-mono text-[10px] uppercase tracking-widest ${phase.isCriticalPivot ? 'text-amber-600' : 'text-slate-400'}`}>
                        Phase {phase.phase}
                      </span>
                      <span className={`font-mono text-xs uppercase tracking-widest font-semibold ${phase.isCriticalPivot ? 'text-amber-700' : 'text-slate-700'}`}>
                        {phase.title}
                      </span>
                      {phase.isCriticalPivot && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                          CRITICAL_PIVOT
                        </span>
                      )}
                      {phase.status === 'REJECTED' && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-red-500 bg-red-50 px-2 py-0.5 rounded">
                          REJECTED
                        </span>
                      )}
                    </div>

                    {/* Body & Image Row */}
                    <div className={`grid gap-6 ${phase.image ? 'grid-cols-1 md:grid-cols-[2fr_1fr]' : 'grid-cols-1'}`}>
                      {/* Body */}
                      <div className="space-y-3">
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {phase.body}
                        </p>

                        {/* Status Badge */}
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest ${getStatusTextColor(phase.status)}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              phase.status === 'IN_PROGRESS' 
                                ? 'bg-amber-500 animate-pulse' 
                                : phase.status === 'REJECTED'
                                  ? 'bg-red-400'
                                  : 'bg-emerald-500'
                            }`}></span>
                            STATUS: {phase.status}
                          </span>
                        </div>
                      </div>

                      {/* Image */}
                      {phase.image && (
                        <div 
                          className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer group/img hover:shadow-lg transition-all duration-300"
                          onClick={() => openLightbox(phase.image!.src, phase.image!.alt, phase.image?.caption || phase.title, allImages, imageIndex)}
                        >
                          <Image
                            src={phase.image.src}
                            alt={phase.image.alt}
                            fill
                            className={`object-cover transition-all duration-300 group-hover/img:scale-105 ${phase.image.isBlurred ? 'blur-sm group-hover/img:blur-none' : ''}`}
                          />
                          {phase.image.isBlurred && (
                            <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center opacity-100 group-hover/img:opacity-0 transition-opacity">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 bg-white/80 px-2 py-1 rounded">
                                Hover to reveal
                              </span>
                            </div>
                          )}
                          <div className="absolute bottom-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-white bg-slate-900/70 px-2 py-1 rounded">
                              Click to expand
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        {footer && (
          <div className="bg-slate-900 text-slate-300 p-6 rounded-lg mt-8">
            <div className="space-y-2">
              <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase block">
                &gt; {footer.tag}
              </span>
              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                {footer.body}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

