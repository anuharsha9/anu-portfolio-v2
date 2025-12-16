'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'
import { GearInspectorItem } from '@/data/gear-inspector'

interface GearBottomSheetProps {
  gear: GearInspectorItem | null
  isOpen: boolean
  onClose: () => void
}

/**
 * Mobile Bottom Sheet for Gear Inspector
 * iOS-style sheet that slides up when tapping a gear
 */
export default function GearBottomSheet({ gear, isOpen, onClose }: GearBottomSheetProps) {
  if (!gear) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - tap to dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              // If dragged down more than 100px, close
              if (info.offset.y > 100) {
                onClose()
              }
            }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-white rounded-t-3xl overflow-hidden max-h-[85vh] shadow-2xl"
            style={{ touchAction: 'none' }}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-slate-300 rounded-full" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="px-5 pb-8 pt-2">
              {/* Thought Quote */}
              <div className="mb-4">
                <p className="text-slate-500 text-sm italic leading-relaxed">
                  "{gear.thought}"
                </p>
              </div>

              {/* Preview Image */}
              {gear.image && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 border border-slate-200">
                  <Image
                    src={gear.image}
                    alt={gear.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                </div>
              )}

              {/* Title & Insight */}
              <div className="space-y-2 mb-6">
                <h3
                  className="text-slate-900 text-xl font-serif font-medium"
                  style={{ color: gear.accentColor }}
                >
                  {gear.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {gear.insight}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href={gear.link}
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-white font-medium transition-all active:scale-[0.98]"
                style={{ backgroundColor: gear.accentColor }}
              >
                <span>{gear.linkLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Case Study Badge */}
              {gear.caseStudy && gear.caseStudy !== 'me' && (
                <p className="text-center text-slate-400 text-xs mt-4 font-mono uppercase tracking-wider">
                  // {gear.caseStudy.replace('-', '_').toUpperCase()}
                </p>
              )}
            </div>

            {/* Safe area padding for iPhone */}
            <div className="h-safe-area-inset-bottom" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

