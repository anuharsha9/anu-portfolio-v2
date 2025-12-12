'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GripVertical, Play } from 'lucide-react'
import Link from 'next/link'

/**
 * TransformationShowcase - A dramatic before/after slider for the landing page
 * Shows the most impactful transformation: 50-year legacy to modern UI
 */
export default function TransformationShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  const handleStart = () => setIsDragging(true)
  const handleEnd = () => setIsDragging(false)

  return (
    <section className="bg-slate-900 py-20 md:py-28 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest block mb-4">
            // SINGLE-HANDED MODERNIZATION
          </span>
          <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            50 years of legacy.<br />
            <span className="text-[var(--accent-teal)]">One designer.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            I drove the entire modernization of WebFOCUS DSML capabilities and enterprise scheduling—from fragmented legacy tools to unified, intelligent workflows.
          </p>
        </motion.div>

        {/* The Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={containerRef}
            className="w-full aspect-[16/10] max-h-[600px] relative overflow-hidden rounded-xl border border-slate-700 shadow-2xl select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
          >
            {/* Browser Bar Header */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-slate-950 text-slate-500 text-xs font-mono py-3 px-4 flex justify-between items-center border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-slate-600">reportcaster_legacy.exe</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-600">reportcaster_modern.tsx</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-teal)]"></span>
                </div>
              </div>
            </div>

            {/* After Image (Base Layer - Modern) */}
            <div className="absolute inset-0 pt-11">
              <Image
                src="/images/case-study/ReportCaster/After.png"
                alt="Modern ReportCaster interface"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Before Image (Overlay - Legacy - Clipped) */}
            <div
              className="absolute inset-0 pt-11 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/case-study/ReportCaster/Before.png"
                alt="Legacy ReportCaster interface"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-11 bottom-0 z-10 cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              {/* Vertical Line */}
              <div className="w-0.5 h-full bg-[var(--accent-teal)] shadow-lg shadow-[var(--accent-teal)]/50"></div>

              {/* Drag Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--accent-teal)] rounded-full flex items-center justify-center shadow-xl shadow-[var(--accent-teal)]/30 border-2 border-white cursor-ew-resize hover:scale-110 transition-transform">
                <GripVertical className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Labels on sides */}
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-slate-900/90 backdrop-blur-sm text-slate-300 text-xs font-mono px-3 py-1.5 rounded-full border border-slate-700">
                LEGACY
              </span>
            </div>
            <div className="absolute bottom-4 right-4 z-20">
              <span className="bg-[var(--accent-teal)]/90 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-full">
                MODERN
              </span>
            </div>
          </div>

          {/* Instruction + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <p className="text-slate-500 text-sm font-mono">
              {'<'} Drag to compare {'>'}
            </p>

            {/* Watch Demo Button */}
            <a
              href="https://www.youtube.com/watch?v=NvNFN6sz41M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/80 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </a>

            <div className="flex items-center gap-4">
              <Link
                href="/work/reportcaster"
                className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-white text-sm font-medium transition-colors"
              >
                <span>ReportCaster</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-slate-600">·</span>
              <Link
                href="/work/ml-functions"
                className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-white text-sm font-medium transition-colors"
              >
                <span>ML Functions</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-slate-600">·</span>
              <Link
                href="/work/iq-plugin"
                className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-white text-sm font-medium transition-colors"
              >
                <span>DSML Hub</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

