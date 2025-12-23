'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ImageLightbox from './ImageLightbox'

interface SystemMappingBreakdownProps {
  isLightBackground?: boolean
}

export default function SystemMappingBreakdown({ isLightBackground = true }: SystemMappingBreakdownProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const categories = [
    {
      category: 'WORKFLOWS & NAVIGATION',
      glyph: '//',
      items: [
        { label: 'Every scheduling workflow', detail: 'From schedule creation to distribution to monitoring' },
        { label: 'Every entry point', detail: 'Where users could access RC features (inconsistent across product)' },
        { label: 'Every dialog and branching path', detail: 'Understanding when users saw what, and why' },
      ],
    },
    {
      category: 'SYSTEM CAPABILITIES',
      glyph: '{ }',
      items: [
        { label: 'Every admin capability', detail: 'System configuration, permissions, settings' },
        { label: 'Every explorer interaction', detail: 'How users viewed and filtered existing schedules' },
        { label: 'Every job-health pattern', detail: 'How users monitored scheduled jobs, failure states' },
      ],
    },
    {
      category: 'RELIABILITY & LOGIC',
      glyph: '⚠️',
      items: [
        { label: 'Every failure & recovery rule', detail: 'Critical for enterprise reliability' },
        { label: 'Burst, retention, blackout logic', detail: 'Undocumented rules users relied on' },
        { label: 'Invisible UI behaviors', detail: 'Rules in code that were never surfaced' },
      ],
    },
  ]

  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-primary)] overflow-hidden shadow-sm">

      {/* System Map Image with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-64 md:h-96 bg-[var(--bg-tertiary)] cursor-pointer group"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src="/images/case-study/ReportCaster/ReportCaster Basic Map Workflow.png"
          alt="RC mental-model map: Complete system diagram"
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />

        {/* Click to Explore Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-lg">🔍</span>
            <span className="text-[var(--text-heading)] font-medium text-sm">Explore Architecture</span>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-wider">
            {'// SYSTEM_MAP'}
          </span>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="p-8 md:p-12 space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            {'// SYSTEM_ARCHITECTURE'}
          </span>
          <h3 className="text-[var(--text-heading)] text-xl md:text-2xl font-serif">
            What I Mapped: The Complete System
          </h3>
          <p className="text-[var(--text-body)] text-sm md:text-base max-w-2xl mx-auto">
            The categories below show the scope of mapping required to understand the complete system.
          </p>
        </motion.div>

        {/* Spec Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[var(--border-primary)] rounded-xl p-5 hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header with Glyph */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl text-[var(--accent-teal)] flex-shrink-0">
                    {cat.glyph}
                  </span>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-[var(--accent-teal)]">
                    {cat.category}
                  </h4>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="text-[var(--border-secondary)] font-mono text-xs flex-shrink-0 mt-1">→</span>
                      <div className="flex-1">
                        <p className="text-[var(--text-heading)] text-sm font-medium leading-tight">
                          {item.label}
                        </p>
                        <p className="text-[var(--text-muted)] text-xs mt-0.5 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal Output Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-900 rounded-xl p-5 md:p-6 border border-slate-700"
        >
          <div className="flex items-start gap-3">
            {/* Terminal Icon */}
            <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <svg aria-hidden="true" className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Terminal Output */}
            <div className="flex-1">
              <p className="font-mono text-sm text-emerald-400 leading-relaxed">
                <span className="text-slate-500">&gt;</span>{' '}
                <span className="text-amber-400">SYSTEM_STATUS:</span>{' '}
                This mapping produced the first complete mental model in RC&apos;s 50-year history — a foundation that enabled the unified architecture.
              </p>

              {/* Additional Terminal Lines */}
              <div className="mt-3 pt-3 border-t border-slate-700/50 space-y-1">
                <p className="font-mono text-xs text-slate-400">
                  <span className="text-slate-500">&gt;</span>{' '}
                  <span className="text-emerald-400">subsystems_mapped:</span> 5
                </p>
                <p className="font-mono text-xs text-slate-400">
                  <span className="text-slate-500">&gt;</span>{' '}
                  <span className="text-emerald-400">undocumented_rules_identified:</span> 12+
                </p>
                <p className="font-mono text-xs text-slate-400">
                  <span className="text-slate-500">&gt;</span>{' '}
                  <span className="text-emerald-400">knowledge_transfer_status:</span>{' '}
                  <span className="text-emerald-300">COMPLETE</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc="/images/case-study/ReportCaster/ReportCaster Basic Map Workflow.png"
        imageAlt="RC mental-model map: Complete system diagram"
        imageCaption="The complete system diagram showing the unified workflow that replaced five independent subsystems with one coherent mental model."
      />
    </div>
  )
}
