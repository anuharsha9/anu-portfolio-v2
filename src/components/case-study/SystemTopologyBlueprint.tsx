'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLightbox } from '@/contexts/LightboxContext'

interface SystemTopologyBlueprintProps {
  isLightBackground?: boolean
}

export default function SystemTopologyBlueprint({ isLightBackground = true }: SystemTopologyBlueprintProps) {
  const { openLightbox } = useLightbox()

  const blueprints = {
    wireframes: {
      src: '/images/case-study/ml-functions/Machine learning functions-handdrawn-wireframes.png',
      alt: 'Hand-drawn wireframes - Early ideation sketches for ML workflow',
      caption: '// FIG_00: EARLY_IDEATION',
      note: 'Hand-drawn wireframes capturing initial thoughts, exploring different approaches, and mapping out the user journey before moving to digital tools.',
    },
    master: {
      src: '/images/case-study/ml-functions/1. ML UI Structure.png',
      alt: 'ML UI Structure - How the redesign fits into WebFOCUS shell',
      caption: '// FIG_01: UI_STRUCTURE',
      note: 'How the ML workflow redesign would be structured within the existing WebFOCUS shell and navigation system.',
    },
    flowchart1: {
      src: '/images/case-study/ml-functions/Overview of ML workflow based on user.png',
      alt: 'ML workflow based on user type',
      caption: '// FIG_02: USER_WORKFLOW_MAP',
      note: 'ML workflow by user type — how Train Model and Run Model connect and flow into each other.',
    },
    flowchart2: {
      src: '/images/case-study/ml-functions/ML functions inital workflow.png',
      alt: 'ML workflow in IQ Plugin',
      caption: '// FIG_03: IQ_PLUGIN_FLOW',
      note: 'The ML workflow as it exists within the IQ Plugin — entry points, data selection, and training steps.',
    },
    systemMap: {
      src: '/images/case-study/ml-functions/all model types architecture map.png',
      alt: 'All model types architecture map',
      caption: '// FIG_04: MODEL_TAXONOMY',
      note: 'Complete system architecture for all ML model types supported.',
    },
  }

  const allImages = [
    blueprints.wireframes,
    blueprints.master,
    blueprints.flowchart1,
    blueprints.flowchart2,
    blueprints.systemMap,
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Section Header - Centered */}
      <div className="space-y-4 text-center">
        <span className="inline-block font-mono text-xs text-[var(--accent-blue)] uppercase tracking-widest">
          // ARTIFACT_SET: ARCHITECTURE_MAPS
        </span>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif leading-tight">
          System Topology & Logic
        </h3>
        <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto">
          Before designing pixels, I mapped the physical constraints of the WebFOCUS platform. 
          These blueprints defined how the new ML wizard would inherit responsive behaviors 
          from the existing 3rd-level navigation system.
        </p>
      </div>

      {/* Early Ideation - Hand-Drawn Wireframes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white border border-slate-200 rounded-xl overflow-hidden"
      >
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-600 uppercase tracking-widest">
              // PHASE_00: EARLY_IDEATION
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">
            Hand-drawn exploration
          </span>
        </div>
        <div 
          className="relative aspect-[16/9] cursor-zoom-in group bg-white"
          onClick={() => openLightbox(blueprints.wireframes, allImages, 0)}
        >
          <Image
            src={blueprints.wireframes.src}
            alt={blueprints.wireframes.alt}
            fill
            className="object-contain p-6 group-hover:scale-[1.02] transition-transform duration-300"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-mono text-xs text-slate-600 shadow-sm">
              Click to inspect wireframes
            </span>
          </div>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 p-4">
          <span className="font-mono text-xs text-slate-500 block mb-1">
            {blueprints.wireframes.caption}
          </span>
          <p className="text-slate-600 text-sm leading-relaxed">
            {blueprints.wireframes.note}
          </p>
        </div>
      </motion.div>

      {/* Blueprint Grid - Technical Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Master Spec (spans 2 columns on large screens) */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden h-full">
            {/* Blueprint Image */}
            <div 
              className="relative aspect-[16/10] cursor-zoom-in group"
              onClick={() => openLightbox(blueprints.master, allImages, 1)}
            >
              <Image
                src={blueprints.master.src}
                alt={blueprints.master.alt}
                fill
                className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-mono text-xs text-slate-600 shadow-sm">
                  Click to inspect
                </span>
              </div>
            </div>
            {/* Caption */}
            <div className="bg-white border-t border-slate-200 p-4">
              <span className="font-mono text-xs text-slate-500 block mb-1">
                {blueprints.master.caption}
              </span>
              <p className="text-slate-600 text-sm leading-relaxed">
                {blueprints.master.note}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Logic Stack */}
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Card 1 - Information Architecture */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex-1">
            <div 
              className="relative aspect-[4/3] cursor-zoom-in group"
              onClick={() => openLightbox(blueprints.flowchart1, allImages, 2)}
            >
              <Image
                src={blueprints.flowchart1.src}
                alt={blueprints.flowchart1.alt}
                fill
                className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
            </div>
            <div className="bg-white border-t border-slate-200 p-3">
              <span className="font-mono text-[10px] text-slate-500 block">
                {blueprints.flowchart1.caption}
              </span>
            </div>
          </div>

          {/* Card 2 - Logic Branching */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex-1">
            <div 
              className="relative aspect-[4/3] cursor-zoom-in group"
              onClick={() => openLightbox(blueprints.flowchart2, allImages, 3)}
            >
              <Image
                src={blueprints.flowchart2.src}
                alt={blueprints.flowchart2.alt}
                fill
                className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
            </div>
            <div className="bg-white border-t border-slate-200 p-3">
              <span className="font-mono text-[10px] text-slate-500 block">
                {blueprints.flowchart2.caption}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-Width System Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
      >
        <div 
          className="relative aspect-[21/9] cursor-zoom-in group"
          onClick={() => openLightbox(blueprints.systemMap, allImages, 4)}
        >
          <Image
            src={blueprints.systemMap.src}
            alt={blueprints.systemMap.alt}
            fill
            className="object-contain p-4 group-hover:scale-[1.01] transition-transform duration-300"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-mono text-xs text-slate-600 shadow-sm">
              Click to inspect full taxonomy
            </span>
          </div>
        </div>
        <div className="bg-white border-t border-slate-200 p-4 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs text-slate-500 block mb-1">
              {blueprints.systemMap.caption}
            </span>
            <p className="text-slate-600 text-sm">
              {blueprints.systemMap.note}
            </p>
          </div>
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest hidden md:block">
            // FULL_WIDTH_SPEC
          </span>
        </div>
      </motion.div>

      {/* Technical Note Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-slate-900 rounded-lg p-5"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-emerald-400 text-sm">&gt;</span>
          <div>
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-2">
              // SYSTEM_INSIGHT
            </span>
            <p className="font-mono text-sm text-slate-300 leading-relaxed">
              These architecture maps weren't just documentation—they became the shared language 
              between UX, Engineering, and Data Science. Every design decision could be traced 
              back to a constraint identified in these blueprints.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

