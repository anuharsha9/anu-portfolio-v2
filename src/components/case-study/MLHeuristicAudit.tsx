'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

interface AuditItem {
  src: string
  alt: string
  errorCode: string
  painPoint: string
  caption?: string
}

interface MLHeuristicAuditProps {
  isLightBackground?: boolean
}

export default function MLHeuristicAudit({ isLightBackground = true }: MLHeuristicAuditProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null)
  
  // Legacy UI screenshots with error annotations
  const auditItems: AuditItem[] = [
    {
      src: '/images/case-study/ml-functions/Legacy Train Model UI.png',
      alt: 'Legacy ML Interface - Scattered Flow',
      errorCode: '> UX_FAIL: SCATTERED_FLOW',
      painPoint: 'Users navigate 4+ disconnected screens to train a single model',
      caption: 'Data Flow canvas: ML features buried in complex node-based interface',
    },
    {
      src: '/images/case-study/ml-functions/Legacy Train Model Resuls UI.png',
      alt: 'Legacy ML Interface - Hidden Controls',
      errorCode: '> ERROR: HIDDEN_HYPERPARAMETERS',
      painPoint: 'Advanced settings only accessible via right-click menus after training',
      caption: 'Configuration popup: Critical hyperparameters hidden behind context menus',
    },
    {
      src: '/images/case-study/ml-functions/Legacy Run Model Landing Page.png',
      alt: 'Legacy ML Interface - No Feedback',
      errorCode: '> ERROR: NO_FEEDBACK',
      painPoint: '"Results not generated" with no explanation of why or how to fix',
      caption: 'Dead-end error state: No guidance on resolution or next steps',
    },
  ]

  const openLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxImage({ src, alt, caption })
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
          // HEURISTIC_AUDIT
        </span>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
          The Baseline: A Fragmented Experience
        </h3>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          Before redesigning, I documented every usability violation in the existing ML workflow.
        </p>
      </motion.div>

      {/* Audit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {auditItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-4 hover:shadow-md transition-shadow"
          >
            {/* Screenshot */}
            <div 
              className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 cursor-pointer group"
              onClick={() => openLightbox(item.src, item.alt, item.caption)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                  🔍 Inspect
                </span>
              </div>
            </div>

            {/* Error Code Annotation */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <code className="font-mono text-xs text-red-600 font-semibold">
                {item.errorCode}
              </code>
              <p className="text-red-700 text-sm mt-1 leading-relaxed">
                {item.painPoint}
              </p>
            </div>

            {/* Caption */}
            {item.caption && (
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Summary Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="font-mono text-sm">
          <span className="text-red-400">&gt; AUDIT_RESULT:</span>
          <p className="text-slate-300 mt-2 leading-relaxed">
            Documented 12+ heuristic violations including: hidden navigation, missing feedback, cognitive overload, and dead-end errors. These findings became the design requirements for the guided workflow.
          </p>
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          imageCaption={lightboxImage.caption}
        />
      )}
    </div>
  )
}

