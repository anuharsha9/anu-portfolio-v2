'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLightbox } from '@/contexts/LightboxContext'

interface IQEvolutionProps {
  isLightBackground?: boolean
}

const evolutionStages = [
  {
    id: '01',
    label: 'PHASE_01',
    title: 'Early Concept',
    description: 'Initial exploration of unified DSML entry point',
    image: '/images/case-study/iq-plugin/Early concept - 1.png',
  },
  {
    id: '02',
    label: 'PHASE_02',
    title: 'Mid-Iteration',
    description: 'Structure taking shape—navigation patterns emerging',
    image: '/images/case-study/iq-plugin/Mid-Iteration.png',
  },
  {
    id: '03',
    label: 'PHASE_03',
    title: 'Refined Layout',
    description: 'Card-based navigation with clearer feature hierarchy',
    image: '/images/case-study/iq-plugin/Mid-Iteration-1.png',
  },
  {
    id: '04',
    label: 'FINAL',
    title: 'Production Design',
    description: 'Final polished design ready for engineering handoff',
    image: '/images/case-study/iq-plugin/Final Look.png',
  },
]

export default function IQEvolution({ isLightBackground = false }: IQEvolutionProps) {
  const [activeStage, setActiveStage] = useState(0)
  const { openLightbox } = useLightbox()

  const allImages = evolutionStages.map(stage => ({
    src: stage.image,
    alt: stage.title,
  }))

  return (
    <div className={`w-full py-10 md:py-12 ${isLightBackground ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest mb-3 block">
            {'// DESIGN_EVOLUTION'}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">
            From Concept to Production
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            4 major iterations. Each one refined through testing and stakeholder feedback.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Mobile: Horizontal Scrollable Pills */}
          <div className="lg:hidden -mx-4 px-4 sm:-mx-6 sm:px-6">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 min-w-max pb-2">
                {evolutionStages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(index)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeStage === index
                      ? 'bg-[var(--accent-teal)] text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                      }`}
                  >
                    <span className={`font-mono font-bold ${activeStage === index ? 'text-white' : 'text-slate-300'}`}>
                      {stage.id}
                    </span>
                    <span>{stage.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Stage Selector - Left Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-2">
            {evolutionStages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${activeStage === index
                  ? 'border-[var(--accent-teal)] bg-[var(--accent-teal-50)] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`font-mono text-2xl font-bold ${activeStage === index ? 'text-[var(--accent-teal)]' : 'text-slate-200'
                      }`}
                  >
                    {stage.id}
                  </span>
                  <div>
                    <span
                      className={`font-mono text-[9px] uppercase tracking-widest block mb-1 ${activeStage === index ? 'text-[var(--accent-teal)]' : 'text-slate-400'
                        }`}
                    >
                      {'// '}{stage.label}
                    </span>
                    <h4
                      className={`font-serif text-sm ${activeStage === index ? 'text-slate-900' : 'text-slate-600'
                        }`}
                    >
                      {stage.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Preview Area - Right Side */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
              {/* Header Bar */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-white/90">
                    {evolutionStages[activeStage].title}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {evolutionStages[activeStage].label}
                </span>
              </div>

              {/* Image Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10] bg-slate-100 cursor-pointer"
                  onClick={() => openLightbox(allImages, activeStage)}
                >
                  <Image
                    src={evolutionStages[activeStage].image}
                    alt={evolutionStages[activeStage].title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Description Footer */}
              <div className="bg-slate-50 border-t border-slate-200 px-4 py-3">
                <p className="text-sm text-slate-600">
                  {evolutionStages[activeStage].description}
                </p>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {evolutionStages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`w-12 h-1 rounded-full transition-all ${activeStage === index ? 'bg-[var(--accent-teal)]' : 'bg-slate-200'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

