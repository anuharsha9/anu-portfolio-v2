'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AutoSequenceDataViewer from './AutoSequenceDataViewer'

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

  // Map phases to viewer images
  const sequenceImages = evolutionStages.map(stage => ({
    src: stage.image,
    alt: stage.title,
    caption: `// ${stage.label}: ${stage.description}`
  }))

  return (
    <div className={`w-full py-10 md:py-12 ${isLightBackground ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest mb-3 block">
            {'// DESIGN_EVOLUTION'}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">
            From Concept to Production
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Watch the design mature through 4 major iterations.
          </p>
        </div>

        {/* Streaming Platform Layout */}
        <div className="space-y-8">
          {/* 1. Synchronized Tabs */}
          <div className="flex items-center justify-center">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide max-w-full px-4 snap-x">
              {evolutionStages.map((stage, index) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(index)}
                  className={`
                     flex flex-col items-center px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 snap-center min-w-[120px]
                     ${activeStage === index
                      ? 'bg-[var(--accent-teal)] text-white shadow-md transform scale-105'
                      : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'}
                   `}
                >
                  <span className="font-mono tracking-widest opacity-80 text-[10px] mb-0.5">{stage.label}</span>
                  <span className="font-sans font-semibold text-sm">{stage.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Full Screen Viewer (Controlled) */}
          <div className="max-w-5xl mx-auto">
            <AutoSequenceDataViewer
              images={sequenceImages}
              title="Design Evolution"
              externalIndex={activeStage}
              onIndexChange={setActiveStage}
            />

            {/* Dynamic Caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center mt-4 px-4"
              >
                <p className="text-slate-600 font-medium">
                  {evolutionStages[activeStage].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
