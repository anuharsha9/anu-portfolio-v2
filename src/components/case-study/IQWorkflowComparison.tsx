'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLightbox } from '@/contexts/LightboxContext'

interface IQWorkflowComparisonProps {
  isLightBackground?: boolean
}

interface ComparisonData {
  id: string
  title: string
  beforeLabel: string
  afterLabel: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  insight: string
}

export default function IQWorkflowComparison({ isLightBackground = false }: IQWorkflowComparisonProps) {
  const { openLightbox } = useLightbox()

  const comparisons: ComparisonData[] = [
    {
      id: 'nlq',
      title: 'Natural Language Query (NLQ)',
      beforeLabel: 'CURRENT: PLUS_MENU → EXPLORE_DATA',
      afterLabel: 'IQ_PLUGIN: ONE_CLICK_ACCESS',
      beforeImage: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Empty State Illustration 1.png',
      afterImage: '/images/case-study/iq-plugin/IQ - Ask a Question _ Data Selected 1.png',
      beforeAlt: 'Current NLQ - Buried in Plus Menu',
      afterAlt: 'IQ Plugin NLQ - Direct Access',
      insight: '2 clicks from Plus menu → 1 click from IQ Hub',
    },
    {
      id: 'insights',
      title: 'Automated Insights',
      beforeLabel: 'CURRENT: PLUS_MENU → INSIGHTS',
      afterLabel: 'IQ_PLUGIN: ONE_CLICK_ACCESS',
      beforeImage: '/images/case-study/iq-plugin/Insights - Results - Tile View 1.png',
      afterImage: '/images/case-study/iq-plugin/IQ - Insights - Tile View 1.png',
      beforeAlt: 'Current Insights - Standalone',
      afterAlt: 'IQ Plugin Insights - Unified Hub',
      insight: 'Same feature, now discoverable alongside NLQ and ML',
    },
    {
      id: 'ml',
      title: 'Machine Learning (Predict Data)',
      beforeLabel: 'CURRENT: REPORTING_SERVER → ML',
      afterLabel: 'IQ_PLUGIN: ONE_CLICK_ACCESS',
      beforeImage: '/images/case-study/ml-functions/1. Predict Data - Train Models - Empty State.png',
      afterImage: '/images/case-study/iq-plugin/IQ - Predict Data - Train Models - landing page - model tile view.png',
      beforeAlt: 'Current ML - Hidden in Reporting Server',
      afterAlt: 'IQ Plugin ML - Same Hub as NLQ and Insights',
      insight: 'Completely different context → Now lives with NLQ and Insights',
    },
  ]

  return (
    <div className={`w-full py-10 md:py-12 ${isLightBackground ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest mb-3 block">
            // BEFORE_AFTER: WORKFLOW_COMPARISON
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">
            Current vs. IQ Plugin
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Three features, three different entry points → One unified hub. Drag the slider to compare.
          </p>
        </div>

        {/* Comparison Sliders */}
        <div className="space-y-12">
          {comparisons.map((comparison) => (
            <ComparisonSlider
              key={comparison.id}
              data={comparison}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ComparisonSliderProps {
  data: ComparisonData
  openLightbox: (images: { src: string; alt: string }[], startIndex: number) => void
}

function ComparisonSlider({ data, openLightbox }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg"
    >
      {/* Title Bar */}
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs text-white/90">{data.title}</span>
        </div>
        <span className="font-mono text-[10px] text-slate-400">{data.insight}</span>
      </div>

      {/* Labels */}
      <div className="flex justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
            {data.beforeLabel}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
            {data.afterLabel}
          </span>
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* Slider Container */}
      <div
        className="relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image (Full width, clipped) */}
        <div className="absolute inset-0">
          <Image
            src={data.beforeImage}
            alt={data.beforeAlt}
            fill
            className="object-cover object-center"
            onClick={() => openLightbox([{ src: data.beforeImage, alt: data.beforeAlt }], 0)}
          />
        </div>

        {/* After Image (Clipped by slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image
            src={data.afterImage}
            alt={data.afterAlt}
            fill
            className="object-cover object-center"
            onClick={() => openLightbox([{ src: data.afterImage, alt: data.afterAlt }], 0)}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-slate-200">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

