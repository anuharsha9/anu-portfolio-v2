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
    sessionStorage.setItem(VEIL_SESSION_KEY, 'true')
    setShowVeil(false)
  }, [])

  const handleAnimationComplete = useCallback(() => {
    setShouldRender(false)
  }, [])

  // Don't render during SSR to avoid hydration mismatch
  if (!hasMounted) {
    return <div className="fixed inset-0 z-[10001] bg-white" />
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
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{ pointerEvents: showVeil ? 'auto' : 'none' }}
        >
          {/* Full viewport container - everything must fit */}
          <div
            className="h-[100dvh] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
            style={{
              paddingTop: 'env(safe-area-inset-top, 0px)',
              paddingBottom: 'env(safe-area-inset-bottom, 0px)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center w-full max-w-4xl"
            >
              {/* Logo */}
              <motion.div
                className="mb-1 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 text-[var(--accent-teal)]">
                  <AnimatedSignatureLogo className="w-full h-full" duration={10000} pauseDuration={5000} />
                </div>
              </motion.div>

              {/* Headline */}
              <h1 className="font-serif text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 md:mb-8">
                <WordReveal text="52 seconds." delay={300} stagger={100} /><br />
                <span className="text-slate-500">
                  <WordReveal text="That's all I ask." delay={600} stagger={80} />
                </span>
              </h1>

              {/* Video - Takes up available space */}
              <div className="w-full flex justify-center mb-4 md:mb-6">
                <div className="w-auto h-[55vh] md:h-[58vh] aspect-[9/16] relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl">
                  {/* Window Header Bar */}
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-slate-100/95 backdrop-blur-sm border-b border-slate-200 z-10">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
                      </div>
                      <span className="font-mono text-slate-500 text-[10px] md:text-xs hidden sm:inline">
                        meet_anuja.mp4
                      </span>
                    </div>
                    <span className="font-mono text-[var(--accent-teal)] text-[10px] md:text-xs tracking-wider">
                      52s
                    </span>
                  </div>

                  {/* Video */}
                  <CustomVideoPlayer src="/videos/intro-video.mp4" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Story beats */}
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-5">
                <span className="text-slate-900 font-medium">The goal?</span>{' '}
                <span className="text-slate-500">A portfolio.</span>
                <span className="mx-2 md:mx-3 text-slate-300">·</span>
                <span className="text-slate-900 font-medium">The discovery?</span>{' '}
                <GradientText gradient="from-[var(--accent-teal)] to-[var(--accent-violet)]" className="font-medium">
                  Cursor + AI.
                </GradientText>
                <span className="mx-2 md:mx-3 text-slate-300">·</span>
                <span className="text-slate-900 font-medium">The result?</span>{' '}
                <span className="text-slate-500">This.</span>
              </p>

              {/* Tool pills */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-5 md:mb-6"
              >
                <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
                  {[
                    { name: 'Cursor', desc: 'IDE' },
                    { name: 'Claude', desc: 'AI' },
                    { name: 'GPT', desc: 'AI' },
                    { name: 'Gemini', desc: 'AI' },
                    { name: 'AWS', desc: 'Deploy' },
                  ].map((tool) => (
                    <span
                      key={tool.name}
                      className="inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs md:text-sm font-mono"
                    >
                      <span className="text-slate-900">{tool.name}</span>
                      <span className="text-slate-400 text-[10px] md:text-xs">{tool.desc}</span>
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <button
                  onClick={handleEnter}
                  disabled={!showVeil}
                  className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-[var(--accent-teal-800)] text-white text-sm md:text-base font-medium hover:bg-[var(--accent-teal-900)] active:scale-[0.98] transition-all hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Enter my Portfolio</span>
                  <motion.svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </button>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
