'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GripVertical } from 'lucide-react'

interface ImpactDiffProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  isLightBackground?: boolean
}

export default function ImpactDiff({
  beforeImage = '/images/case-study/ReportCaster/legacy-scheduler.png',
  afterImage = '/images/case-study/ReportCaster/unified-scheduler.png',
  beforeAlt = 'Legacy ReportCaster interface',
  afterAlt = 'Unified ReportCaster interface',
  isLightBackground = true,
}: ImpactDiffProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percentage = (x / rect.width) * 100
      setSliderPosition(percentage)
    },
    []
  )

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* The Diff Container */}
      <div
        ref={containerRef}
        className="w-full aspect-[16/10] max-h-[700px] relative overflow-hidden rounded-xl border border-slate-200 shadow-2xl select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        {/* Browser Bar Header */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-slate-900 text-slate-400 text-xs font-mono py-3 px-4 flex justify-between items-center">
          {/* Left Label */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>// LEGACY</span>
          </div>
          {/* Right Label */}
          <div className="flex items-center gap-2">
            <span>// MODERN</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        {/* After Image (Base Layer) */}
        <div className="absolute inset-0 pt-10">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Before Image (Overlay - Clipped) */}
        <div
          className="absolute inset-0 pt-10 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-10 bottom-0 z-10 cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          {/* Vertical Line */}
          <div className="w-1 h-full bg-[var(--accent-blue)] shadow-lg"></div>

          {/* Drag Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--accent-blue)] rounded-full flex items-center justify-center shadow-xl border-2 border-white cursor-ew-resize hover:scale-110 transition-transform">
            <GripVertical className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-center text-slate-500 text-sm font-mono mt-4">
        {'<'} Drag to compare {'>'}
      </p>
    </motion.div>
  )
}

