'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LightboxImage from '@/components/ui/LightboxImage'
import { useLightbox } from '@/contexts/LightboxContext'
import LockedContent from './LockedContent'

interface SystemArchaeologyProps {
  isLightBackground?: boolean
  caseStudySlug?: string
}

export default function SystemArchaeology({ isLightBackground = true, caseStudySlug = 'reportcaster' }: SystemArchaeologyProps) {
  const { openLightbox } = useLightbox()

  const auditFiles = [
    {
      filename: 'LEGACY_SCHEDULER.EXE',
      status: 'FRAGMENTED',
      statusColor: 'text-red-600',
      image: '/images/case-study/ReportCaster/RC legacy schedule dialog properties.png',
      alt: 'Legacy Schedule Dialog Properties',
      annotation: '// UX_FAILURE: 5 distinct interfaces required for 1 workflow.',
    },
    {
      filename: 'DISTRIBUTION_MODULE.DLL',
      status: 'UNDOCUMENTED',
      statusColor: 'text-amber-600',
      image: '/images/case-study/ReportCaster/RC legacy distribution list UI.png',
      alt: 'Legacy Distribution List',
      annotation: '// UX_FAILURE: Separate screen for a sub-task of scheduling.',
    },
    {
      filename: 'ACCESS_CONTROL.SYS',
      status: 'HIDDEN',
      statusColor: 'text-purple-600',
      image: '/images/case-study/ReportCaster/RC legacy access list UI.png',
      alt: 'Legacy Access List',
      annotation: '// UX_FAILURE: Critical security settings buried in separate app.',
    },
    {
      filename: 'RC_EXPLORER.EXE',
      status: 'SCATTERED',
      statusColor: 'text-blue-600',
      image: '/images/case-study/ReportCaster/RC legacy explorer.png',
      alt: 'Legacy RC Explorer',
      annotation: '// UX_FAILURE: Disconnected asset browser with no hub integration.',
    },
    {
      filename: 'RC_ADMIN.SYS',
      status: 'ISOLATED',
      statusColor: 'text-orange-600',
      image: '/images/case-study/ReportCaster/RC legacy admin status.png',
      alt: 'Legacy RC Admin Status',
      annotation: '// UX_FAILURE: Admin functions siloed in completely separate tool.',
    },
  ]

  const handleImageClick = (image: { src: string; alt: string; caption?: string }, index: number) => {
    const allImages = auditFiles.map(f => ({
      src: f.image,
      alt: f.alt,
      caption: f.annotation,
    }))
    openLightbox(image, allImages, index)
  }

  // Legacy images grid component (to be locked)
  const LegacyImagesGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {auditFiles.map((file, index) => (
        <motion.div
          key={file.filename}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
          className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          {/* Header Bar */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex justify-between items-center">
            <span className="font-mono text-xs text-slate-500 truncate">
              FILE: {file.filename}
            </span>
            <span className={`font-mono text-[10px] uppercase tracking-widest ${file.statusColor}`}>
              [{file.status}]
            </span>
          </div>

          {/* Image */}
          <div
            className="relative aspect-[4/3] cursor-pointer group"
            onClick={() => handleImageClick({ src: file.image, alt: file.alt, caption: file.annotation }, index)}
          >
            <Image
              src={file.image}
              alt={file.alt}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300 blur-sm"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                <svg aria-hidden="true" className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Caption / Annotation */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <p className="font-mono text-xs text-slate-600 leading-relaxed">
              {file.annotation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* THE NARRATIVE: Challenge Block - PUBLIC */}
      <div className="bg-[var(--accent-blue-soft)] border-l-4 border-[var(--accent-blue)] p-6 rounded-r-xl">
        <span className="font-mono text-[var(--accent-blue)] text-xs uppercase tracking-widest mb-2 block">
          {'// UNDOCUMENTED_LEGACY'}
        </span>
        <h3 className="font-serif text-slate-900 text-xl md:text-2xl mb-3">
          50-year-old black box. Zero documentation.
        </h3>
        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
          Project deferred for years — I asked for it. Reverse-engineered the system from sandboxes, tribal knowledge, and the customer support lead who was the real SME. Weeks of discovery before any design.
        </p>
      </div>

      {/* THE EVIDENCE GRID: Legacy Audit Files - LOCKED */}
      <LockedContent
        password="anu-access"
        caseStudySlug={caseStudySlug}
        unlockMessage="Password required to view legacy sandbox UI screenshots"
        isLightBackground={isLightBackground}
      >
        <LegacyImagesGrid />
      </LockedContent>

      {/* THE INSIGHT FOOTER: Dark Mode System Insight - PUBLIC */}
      <div className="bg-slate-900 rounded-xl p-6 md:p-8">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
          <span className="ml-2 font-mono text-xs text-slate-500">discovery.log</span>
        </div>

        {/* Content */}
        <div className="font-mono text-sm leading-relaxed">
          <span className="text-emerald-400">&gt; DISCOVERY_INSIGHT:</span>
          <p className="text-slate-300 mt-2">
            I realized ReportCaster wasn&apos;t one product — it was <strong className="text-white">five disparate subsystems masquerading as one</strong>. Unifying them required not just a UI refresh, but a complete architectural convergence.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

