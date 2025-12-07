'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { GitBranch, XCircle, CheckCircle, AlertTriangle, Merge } from 'lucide-react'

interface BranchData {
  id: string
  version: string
  title: string
  status: 'rejected' | 'merged'
  tagColor: string
  logic: string
  constraint: string
  outcome?: string
  images?: {
    src: string
    alt: string
    caption?: string
    sensitive?: boolean
  }[]
}

interface ArchitecturalBranchingProps {
  v1Data?: BranchData
  v2Data?: BranchData
  v3Data?: BranchData
  isLightBackground?: boolean
}

/**
 * ARCHITECTURAL BRANCHING - Git Branch Log Pattern
 * 
 * Transforms the iteration tabs into a 'Branch Resolution' matrix
 * that proves evaluation of architecture against constraints, not just aesthetics.
 */
export default function ArchitecturalBranching({ 
  v1Data,
  v2Data,
  v3Data,
  isLightBackground = true 
}: ArchitecturalBranchingProps) {
  const [expandedBranch, setExpandedBranch] = useState<string | null>('v3')
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  const branches: BranchData[] = [
    {
      id: 'v1',
      version: 'BRANCH_V1',
      title: 'STANDALONE_PRODUCT',
      status: 'rejected',
      tagColor: 'text-red-500',
      logic: "I designed RC as a distinct product app (like Data Flow). It offered maximum canvas space but violated the new 'Hub-Centrality' mandate.",
      constraint: 'Constraint: Leadership required all workflows to be nested within the Hub.',
      images: v1Data?.images || [],
    },
    {
      id: 'v2',
      version: 'BRANCH_V2',
      title: 'HUB_PLUGIN',
      status: 'rejected',
      tagColor: 'text-red-500',
      logic: "I embedded RC as a nested plugin. It satisfied the Hub mandate but created 'Navigation Tunneling'—users lost context of where they were.",
      constraint: 'Constraint: Navigation depth exceeded 3 levels, causing disorientation.',
      images: v2Data?.images || [],
    },
    {
      id: 'v3',
      version: 'BRANCH_V3',
      title: 'MODAL_SYSTEM',
      status: 'merged',
      tagColor: 'text-emerald-600',
      logic: "The Breakthrough. By using a 'Modal-Over-Hub' pattern, we kept the user in their context while allowing complex scheduling. It satisfied both Power (Capabilities) and Simplicity (Context).",
      outcome: 'Outcome: Shipped in WebFOCUS 9.3.',
      images: v3Data?.images || [],
    },
  ]

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <GitBranch className="w-5 h-5 text-slate-400" />
          <span className="font-mono text-slate-400 text-[10px] tracking-widest uppercase">
            // ITERATION_LOG
          </span>
        </div>
        
        <h2 className="font-serif text-slate-900 text-3xl md:text-4xl">
          Architectural Branching
        </h2>
        
        <p className="text-slate-600 text-base md:text-lg max-w-3xl">
          Evaluating 3 system topologies against platform constraints. Each rejection taught me 
          something different about the system's true requirements.
        </p>
      </motion.div>

      {/* Branch Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {branches.map((branch, index) => {
          const isRejected = branch.status === 'rejected'
          const isMerged = branch.status === 'merged'
          const isExpanded = expandedBranch === branch.id

          return (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setExpandedBranch(isExpanded ? null : branch.id)}
              className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${
                isMerged
                  ? 'bg-white border-2 border-emerald-500 shadow-xl scale-[1.02] z-10'
                  : `bg-slate-50 border border-red-200 ${isExpanded ? '' : 'opacity-75 grayscale hover:grayscale-0 hover:opacity-100'}`
              }`}
            >
              {/* Header */}
              <div className={`px-6 py-4 border-b ${isMerged ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs ${branch.tagColor} uppercase tracking-wider`}>
                    // {branch.version}: {branch.title}
                  </span>
                  
                  {/* Status Badge */}
                  {isRejected ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                      <XCircle className="w-3 h-3" />
                      <span className="font-mono text-[9px] uppercase">REJECTED</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                      <Merge className="w-3 h-3" />
                      <span className="font-mono text-[9px] uppercase">MERGED_TO_MAIN</span>
                    </span>
                  )}
                </div>
                
                {/* Version Label */}
                <h3 className={`font-serif text-xl ${isMerged ? 'text-emerald-900' : 'text-slate-700'}`}>
                  Version {index + 1}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Logic */}
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-2">
                    // THE_LOGIC
                  </span>
                  <p className={`text-sm leading-relaxed ${isMerged ? 'text-slate-700' : 'text-slate-600'}`}>
                    {branch.logic}
                  </p>
                </div>

                {/* Constraint or Outcome */}
                <div className={`border-l-4 ${isRejected ? 'border-amber-400 bg-amber-50' : 'border-emerald-400 bg-emerald-50'} p-4 rounded-r-lg`}>
                  <div className="flex items-start gap-2">
                    {isRejected ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    )}
                    <p className={`text-sm ${isRejected ? 'text-amber-800' : 'text-emerald-800'}`}>
                      {branch.constraint || branch.outcome}
                    </p>
                  </div>
                </div>

                {/* Image Preview (if available and expanded) */}
                {branch.images && branch.images.length > 0 && (
                  <div className="pt-4 border-t border-slate-100">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block mb-3">
                      // ARTIFACTS ({branch.images.length})
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {branch.images.slice(0, 2).map((img, imgIdx) => (
                        <div 
                          key={imgIdx}
                          className="relative aspect-video bg-slate-100 rounded overflow-hidden"
                          onMouseEnter={() => setHoveredImage(`${branch.id}-${imgIdx}`)}
                          onMouseLeave={() => setHoveredImage(null)}
                        >
                          {/* Placeholder - images are sensitive */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-mono text-[8px] text-slate-400">
                              [LOCKED]
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {branch.images.length > 2 && (
                      <p className="font-mono text-[9px] text-slate-400 mt-2 text-center">
                        +{branch.images.length - 2} more artifacts
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Summary - Git Diff Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-slate-900 rounded-xl p-6 overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
          <span className="ml-2 font-mono text-xs text-slate-500">git log --oneline</span>
        </div>
        
        {/* Git Log Output */}
        <div className="font-mono text-sm space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-red-400">×</span>
            <span className="text-slate-500">2892e4f</span>
            <span className="text-slate-400">branch: v1-standalone</span>
            <span className="text-red-400/60">(rejected: hub-centrality)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400">×</span>
            <span className="text-slate-500">4f1a7bc</span>
            <span className="text-slate-400">branch: v2-plugin</span>
            <span className="text-red-400/60">(rejected: navigation-depth)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">✓</span>
            <span className="text-emerald-500">a8c3d2e</span>
            <span className="text-slate-300">main</span>
            <span className="text-emerald-400">(HEAD → shipped/v9.3)</span>
          </div>
        </div>
        
        {/* Outcome */}
        <div className="mt-4 pt-4 border-t border-slate-800">
          <span className="text-emerald-400">&gt; MERGE_RESULT:</span>
          <p className="text-slate-300 mt-1">
            Modal-based architecture adopted as platform standard. Pattern reused across ML Functions, IQ Plugin, and Data Flows.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

