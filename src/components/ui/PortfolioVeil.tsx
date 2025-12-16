'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'

const VEIL_SESSION_KEY = 'portfolio_veil_dismissed'

export default function PortfolioVeil() {
  const [showVeil, setShowVeil] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  // Check if veil was already dismissed in this session
  useEffect(() => {
    setHasMounted(true)

    // Allow ?veil=reset to force show the veil for testing
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('veil') === 'reset') {
      sessionStorage.removeItem(VEIL_SESSION_KEY)
      return
    }

    const dismissed = sessionStorage.getItem(VEIL_SESSION_KEY)
    if (dismissed === 'true') {
      setShowVeil(false)
      setShouldRender(false)
    }
  }, [])

  const handleEnter = useCallback(() => {
    // Store in session so it doesn't show again during same session
    sessionStorage.setItem(VEIL_SESSION_KEY, 'true')
    // Trigger exit animation
    setShowVeil(false)
  }, [])

  const handleAnimationComplete = useCallback(() => {
    // Fully remove from DOM after animation completes
    setShouldRender(false)
  }, [])

  // Don't render during SSR to avoid hydration mismatch
  if (!hasMounted) {
    return (
      <div className="fixed inset-0 z-[9998] bg-white" />
    )
  }

  // Already dismissed - don't render anything
  if (!shouldRender) {
    return null
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
      {showVeil && (
        <motion.div
          key="portfolio-veil"
          className="fixed inset-0 z-[9998] bg-white overflow-y-auto"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: '-100%',
          }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1], // Smooth ease-in-out
          }}
          style={{
            pointerEvents: showVeil ? 'auto' : 'none',
          }}
        >
          {/* Main Content Container */}
          <div className="min-h-screen flex items-center justify-center py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* Logo mark at top */}
                <motion.div
                  className="mb-6 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="w-12 h-12 text-[var(--accent-teal)]">
                    <AnimatedSignatureLogo
                      className="w-full h-full"
                      duration={10000}
                      pauseDuration={5000}
                    />
                  </div>
                </motion.div>

                {/* Main headline */}
                <h1 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                  52 seconds.<br />
                  <span className="text-slate-500">That&apos;s all I ask.</span>
                </h1>

                {/* Video - THE HERO (compact) */}
                <div className="max-w-sm mx-auto mb-8">
                  <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
                    {/* Window Header Bar */}
                    <div className="flex items-center justify-between px-3 py-2 bg-slate-100 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        <span className="font-mono text-slate-500 text-[10px]">
                          meet_anuja.mp4
                        </span>
                      </div>
                      <span className="font-mono text-[var(--accent-teal)] text-[10px] tracking-widest">
                        52s
                      </span>
                    </div>

                    {/* Video */}
                    <CustomVideoPlayer
                      src="/videos/intro-video.mp4"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Text block - narrative flow */}
                <div className="max-w-4xl mx-auto mb-6 space-y-3">
                  <p className="text-slate-600 text-base leading-relaxed">
                    Principal Product Designer with 13 years of experience designing with vision, craft, and systems thinking.
                  </p>
                  <p className="text-slate-700 text-base whitespace-nowrap">
                    <span className="text-slate-900 font-medium">The goal?</span> <span className="text-slate-500">A portfolio website.</span>
                    <span className="mx-3 text-slate-300">·</span>
                    <span className="text-slate-900 font-medium">The discovery?</span> <span className="text-slate-500">Cursor + AI.</span>
                    <span className="mx-3 text-slate-300">·</span>
                    <span className="text-slate-900 font-medium">The result?</span> <span className="text-slate-500">You&apos;re looking at it.</span>
                  </p>
                </div>

                {/* Tool pills */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {[
                      { name: 'Cursor', desc: 'IDE' },
                      { name: 'Claude', desc: 'AI' },
                      { name: 'GPT', desc: 'AI' },
                      { name: 'Gemini', desc: 'AI' },
                      { name: 'AWS', desc: 'Deploy' },
                    ].map((tool) => (
                      <span
                        key={tool.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono hover:border-[var(--accent-teal)]/50 hover:text-slate-900 transition-colors"
                      >
                        <span className="text-slate-900">{tool.name}</span>
                        <span className="text-slate-400 text-[10px]">{tool.desc}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA - Enter Portfolio */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <button
                    onClick={handleEnter}
                    disabled={!showVeil}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--accent-teal-800)] text-white text-base font-medium hover:bg-[var(--accent-teal-900)] transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Enter my Portfolio</span>
                    <motion.svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-teal)]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-100 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
