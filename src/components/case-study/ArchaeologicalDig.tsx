'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FileCode, AlertTriangle, Eye } from 'lucide-react'

interface ArchaeologicalDigProps {
  isLightBackground?: boolean
}

/**
 * THE ARCHAEOLOGICAL DIG
 * 
 * Section 1 component for ReportCaster - Shows the legacy system audit
 * with "Audit File" grid styling and technical annotations.
 */
export default function ArchaeologicalDig({ isLightBackground = true }: ArchaeologicalDigProps) {
  const [hoveredAudit, setHoveredAudit] = useState<number | null>(null)
  
  const auditFiles = [
    {
      id: 'legacy-scheduler',
      fileName: 'LEGACY_SCHEDULER.EXE',
      status: 'FRAGMENTED',
      image: '/images/case-study/ReportCaster/legacy-scheduler.png',
      annotation: '// UX_FAILURE: 5 distinct interfaces required for 1 workflow.',
      description: '50 years of accumulated technical debt. Zero documentation. Every feature was a mystery wrapped in an enigma.',
    },
    {
      id: 'distribution-lists',
      fileName: 'DISTRIBUTION_LISTS.DAT',
      status: 'ORPHANED',
      image: '/images/case-study/ReportCaster/distribution-lists.png',
      annotation: '// CONTEXT_LOSS: Lists exist without visible linkage to schedules.',
      description: 'Distribution lists floated in their own namespace—users couldn\'t see how they connected to the rest of the system.',
    },
    {
      id: 'admin-console',
      fileName: 'ADMIN_CONSOLE.SYS',
      status: 'BURIED',
      image: '/images/case-study/ReportCaster/admin-console.png',
      annotation: '// DISCOVERY_FAILURE: Admin buried 4 menu levels deep.',
      description: 'Critical system management capabilities hidden behind nested menus. Even power users didn\'t know they existed.',
    },
  ]

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        {/* Technical Tag */}
        <span className="font-mono text-slate-400 text-[10px] tracking-widest uppercase">
          // SECTION_01: DISCOVERY
        </span>
        
        {/* Editorial Headline */}
        <h2 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl">
          The Archaeological Dig
        </h2>
        
        {/* Narrative */}
        <div className="max-w-3xl">
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            ReportCaster was a <span className="font-semibold text-slate-800">50-year-old black box</span> with zero documentation. 
            I had to reverse-engineer the logic from code and tribal knowledge—becoming the system archaeologist 
            before I could be the system architect.
          </p>
        </div>
      </motion.div>

      {/* System Brief - TL;DR */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="border-l-4 border-blue-500 bg-blue-50/50 pl-6 py-4 rounded-r-lg"
      >
        <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2">
          // DETECTIVE_STORY
        </span>
        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
          No onboarding. No spec. No design file. No historical rationale. Just: "Here's the sandbox. Figure it out."
          I pieced together the system from fragments: hundreds of screenshots, support tickets, conversations 
          with the one engineer who knew it end-to-end, and patterns I discovered by using it myself.
        </p>
      </motion.div>

      {/* Audit File Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {auditFiles.map((audit, index) => (
          <motion.div
            key={audit.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.1 }}
            onMouseEnter={() => setHoveredAudit(index)}
            onMouseLeave={() => setHoveredAudit(null)}
            className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Header Bar - File Info */}
            <div className="bg-white border-b border-slate-200 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-slate-400" />
                  <span className="font-mono text-xs text-slate-600 truncate">
                    FILE: {audit.fileName}
                  </span>
                </div>
                <span className={`font-mono text-[9px] px-2 py-0.5 rounded ${
                  audit.status === 'FRAGMENTED' ? 'bg-red-100 text-red-600' :
                  audit.status === 'ORPHANED' ? 'bg-amber-100 text-amber-600' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  [{audit.status}]
                </span>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
              {/* Placeholder - replace with actual images when available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="text-center p-4">
                  <AlertTriangle className={`w-8 h-8 mx-auto mb-2 ${
                    hoveredAudit === index ? 'text-red-500' : 'text-slate-400'
                  } transition-colors`} />
                  <span className="font-mono text-[10px] text-slate-500">
                    // LEGACY_INTERFACE
                  </span>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300 ${
                hoveredAudit === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="text-white text-sm text-center leading-relaxed">
                  {audit.description}
                </p>
              </div>
            </div>

            {/* Technical Annotation */}
            <div className="bg-red-50 border-t border-red-100 px-4 py-3">
              <span className="font-mono text-xs text-red-600">
                {audit.annotation}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Authority Card - Zero to One */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
          {/* Metric */}
          <div className="text-center md:text-left md:pr-8 md:border-r md:border-slate-200">
            <div className="font-mono text-5xl md:text-6xl font-bold text-blue-600 tabular-nums">
              0→1
            </div>
            <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-2">
              THE_SYSTEM_AUTHORITY
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Others held fragments of tribal knowledge. <span className="font-semibold text-slate-900">I was the first to investigate, map, 
              and document the complete end-to-end ecosystem</span>—turning 40 years of oral history into a single source of truth.
            </p>
            <div className="flex items-center gap-2 text-emerald-600">
              <Eye className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">
                First comprehensive documentation in 50 years
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

