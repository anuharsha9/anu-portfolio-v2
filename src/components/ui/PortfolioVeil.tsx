'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import { WordReveal, GradientText } from '@/components/ui/AnimatedText'

const VEIL_SESSION_KEY = 'portfolio_veil_dismissed'

export default function PortfolioVeil() {
  const pathname = usePathname()
  const [showVeil, setShowVeil] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  // Check if veil was already dismissed in this session
  useEffect(() => {
    setHasMounted(true)

    // Only show veil on homepage
    if (pathname !== '/') {
      setShowVeil(false)
      setShouldRender(false)
      return
    }

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
  }, [pathname])

  // Hide body scroll when veil is visible
  useEffect(() => {
    if (showVeil && shouldRender) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showVeil, shouldRender])

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
      <div className="fixed inset-0 z-[10001] bg-white" />
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
          className="fixed inset-0 z-[10001] bg-white overflow-hidden"
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
          {/* Main Content Container - Mobile-first, fits iPhone 15 Pro */}
          <div
            className="h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
            style={{
              paddingTop: 'max(env(safe-area-inset-top), 16px)',
              paddingBottom: 'max(env(safe-area-inset-bottom), 16px)'
            }}
          >
            <div className="max-w-[1440px] mx-auto w-full relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* Logo mark at top */}
                <motion.div
                  className="mb-1 sm:mb-2 md:mb-3 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[var(--accent-teal)]">
                    <AnimatedSignatureLogo
                      className="w-full h-full"
                      duration={10000}
                      pauseDuration={5000}
                    />
                  </div>
                </motion.div>

                {/* Main headline with word reveal */}
                <h1 className="font-serif text-slate-900 text-[22px] sm:text-2xl md:text-4xl lg:text-5xl leading-tight mb-1.5 sm:mb-2 md:mb-4">
                  <WordReveal text="52 seconds." delay={300} stagger={100} /><br />
                  <span className="text-slate-500">
                    <WordReveal text="That's all I ask." delay={600} stagger={80} />
                  </span>
                </h1>

                {/* Video - Compact on all screens */}
                <div className="w-full max-w-[180px] sm:max-w-[240px] md:max-w-sm lg:max-w-md mx-auto mb-2 sm:mb-3 md:mb-4">
                  <div className="relative bg-white border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
                    {/* Window Header Bar */}
                    <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 bg-slate-100 border-b border-slate-200">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="flex gap-0.5 sm:gap-1 md:gap-1.5">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
                        </div>
                        <span className="font-mono text-slate-500 text-[8px] sm:text-[10px] md:text-xs hidden sm:inline">
                          meet_anuja.mp4
                        </span>
                      </div>
                      <span className="font-mono text-[var(--accent-teal)] text-[9px] sm:text-[10px] md:text-xs tracking-wider">
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

                {/* Story beats - with gradient accent */}
                <div className="max-w-sm sm:max-w-xl md:max-w-4xl mx-auto mb-2 sm:mb-3 md:mb-4">
                  <p className="text-slate-700 text-[12px] sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    <span className="text-slate-900 font-medium">The goal?</span> <span className="text-slate-500">A portfolio.</span>
                    <span className="mx-1.5 sm:mx-2 md:mx-3 text-slate-300">·</span>
                    <span className="text-slate-900 font-medium">The discovery?</span>{' '}
                    <GradientText gradient="from-[var(--accent-teal)] to-[var(--accent-violet)]" className="font-medium">
                      Cursor + AI.
                    </GradientText>
                    <span className="mx-1.5 sm:mx-2 md:mx-3 text-slate-300">·</span>
                    <span className="text-slate-900 font-medium">The result?</span> <span className="text-slate-500">This.</span>
                  </p>
                </div>

                {/* Tool pills - Always visible */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mb-3 sm:mb-4 md:mb-5"
                >
                  <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
                    {[
                      { name: 'Cursor' },
                      { name: 'Claude' },
                      { name: 'GPT' },
                      { name: 'AWS' },
                    ].map((tool) => (
                      <span
                        key={tool.name}
                        className="inline-flex items-center px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[9px] sm:text-[10px] md:text-xs font-mono"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA - Scales up on desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <button
                    onClick={handleEnter}
                    disabled={!showVeil}
                    className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-[var(--accent-teal-800)] text-white text-xs sm:text-sm md:text-base font-medium hover:bg-[var(--accent-teal-900)] active:scale-[0.98] transition-all sm:hover:scale-105 shadow-lg md:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Enter my Portfolio</span>
                    <motion.svg
                      aria-hidden="true"
                      className="w-4 h-4"
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

            {/* Subtle background pattern - Hidden on mobile for cleaner look */}
            <div className="absolute inset-0 pointer-events-none hidden sm:block">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-teal)]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-100 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
