'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { MousePointer, Workflow, Layout, BarChart3, Sparkles } from 'lucide-react'
import { getTheme } from '@/lib/design-system'
import AutoSequenceDataViewer from './AutoSequenceDataViewer'

interface DesignIterationLogProps {
  isLightBackground?: boolean
}

export interface TabImage {
  src: string
  alt: string
  caption: string
  figNumber: string
}

export interface TabQuote {
  text: string
  attribution: string
}

export interface Tab {
  id: string
  index: string
  label: string
  icon: React.ReactNode
  title: string
  description: string
  images: TabImage[]
  quote?: TabQuote
  isKey?: boolean
  specCaption?: string // Added to support IQ's extra caption
}

interface DesignIterationLogProps {
  isLightBackground?: boolean
  tabs?: Tab[]
  title?: string
  description?: string
  footerContent?: {
    label: string
    text: React.ReactNode
  }
}

export default function DesignIterationLog({
  isLightBackground = false,
  tabs: propTabs,
  title = "System Inspection: The Design Artifacts",
  description = "Navigate through the key design deliverables that emerged from 6–8 months of cross-functional iteration.",
  footerContent
}: DesignIterationLogProps) {
  const t = getTheme(true)
  const [activeTab, setActiveTab] = useState(propTabs ? propTabs[0].id : '01_ENTRY_POINTS')

  const defaultTabs: Tab[] = [
    {
      id: '01_ENTRY_POINTS',
      index: '01',
      label: 'Entry Points',
      icon: <MousePointer className="w-4 h-4" />,
      title: 'Multiple Entry Points from the Hub',
      description: 'Right-click context menus from the Hub, driven by the Techy Analyst persona. Users access Predict Data via right-click on dataset, folder, or +Data menu — all entry points found in SME testing.',
      images: [
        {
          src: '/images/case-study/ml-functions/1. Predict Data - Train Models - Empty State.png',
          alt: 'Predict Data - Empty State',
          caption: 'Empty State: Initial landing when no models exist',
          figNumber: 'FIG_04',
        },
        {
          src: '/images/case-study/ml-functions/Launch ML from the HUB - right click dataset.png',
          alt: 'Launch ML from HUB - right click dataset',
          caption: 'Right-click on dataset: Direct access to Predict Data',
          figNumber: 'FIG_05',
        },
        {
          src: '/images/case-study/ml-functions/Launch ML from the HUB - right click folder.png',
          alt: 'Launch ML from HUB - right click folder',
          caption: 'Right-click on folder: Context menu integration',
          figNumber: 'FIG_06',
        },
        {
          src: '/images/case-study/ml-functions/Launch ML from the HUB - right click +Data button.png',
          alt: 'Launch ML from HUB - +Data button',
          caption: '+Data menu: First-class feature exposure',
          figNumber: 'FIG_07',
        },
      ],
    },
    {
      id: '03_CORE_WORKFLOW',
      index: '03',
      label: 'Core Workflow',
      icon: <Workflow className="w-4 h-4" />,
      title: 'The 4-Step Guided Wizard',
      description: 'Structured guided flow: problem type → target → predictors → hyperparameters. Based on our domain expert\'s answer to "What do you absolutely need?" — making ML feel like a guided tour, not a black box.',
      images: [
        {
          src: '/images/case-study/ml-functions/4. Train Model Workflow - Step 1 - Select Problem Type.png',
          alt: 'Step 1 - Select Problem Type',
          caption: 'Step 1: Select Problem Type (classification/regression)',
          figNumber: 'FIG_08',
        },
        {
          src: '/images/case-study/ml-functions/5. Train Model Workflow - Step 2 - Specify Problem.png',
          alt: 'Step 2 - Specify Problem',
          caption: 'Step 2: Specify Problem details and target',
          figNumber: 'FIG_09',
        },
        {
          src: '/images/case-study/ml-functions/6. Train Model Workflow - Step 3 - Select Predictors.png',
          alt: 'Step 3 - Select Predictors',
          caption: 'Step 3: Select Predictors and features',
          figNumber: 'FIG_10',
        },
        {
          src: '/images/case-study/ml-functions/7. Train Model Workflow - Step 4 - Configure Hyperparameters.png',
          alt: 'Step 4 - Configure Hyperparameters',
          caption: 'Step 4: Configure Hyperparameters (optional for experts)',
          figNumber: 'FIG_11',
        },
      ],
    },
    {
      id: '04_DESIGN_SYSTEM',
      index: '04',
      label: 'Design System',
      icon: <Layout className="w-4 h-4" />,
      title: 'ML-Specific Component Architecture',
      description: 'A comprehensive design system built for ML workflows: responsive grids, table styling specifications, and component-level precision for model cards. Every pixel decision was documented.',
      images: [
        {
          src: '/images/case-study/ml-functions/1. ML UI Structure.png',
          alt: 'ML UI Structure',
          caption: 'UI Architecture: Overall layout structure',
          figNumber: 'FIG_12',
        },
        {
          src: '/images/case-study/ml-functions/12 Column Grid for the Step Workflow.png',
          alt: '12 Column Grid for Step Workflow',
          caption: 'Step Workflow Grid: Responsive 12-column system',
          figNumber: 'FIG_13',
        },
        {
          src: '/images/case-study/ml-functions/Important Styling and Structure Decisions w/12 Column Grid in Train Model UI.png',
          alt: '12 Column Grid in Train Model UI',
          caption: 'Train Model Grid: Applied grid in context',
          figNumber: 'FIG_14',
        },
        {
          src: '/images/case-study/ml-functions/Important Styling and Structure Decisions w/Table Styling Guide.png',
          alt: 'Table Styling Guide',
          caption: 'Table Styling: Color specs for predictors & columns',
          figNumber: 'FIG_15',
        },
        {
          src: '/images/case-study/ml-functions/Important Styling and Structure Decisions w/Model Tile UI Guide.png',
          alt: 'Model Tile UI Guide',
          caption: 'Model Tile: Component-level specs for model cards',
          figNumber: 'FIG_16',
        },
      ],
    },
    {
      id: '05_ADVANCED_METRICS',
      index: '05',
      label: 'Advanced Metrics',
      icon: <BarChart3 className="w-4 h-4" />,
      title: 'Balancing DS Needs with Readability',
      description: 'Advanced metrics screens that balance data scientist needs (comprehensive metrics) with user needs (scannable, understandable results). The tension between depth and clarity produced the best outcomes.',
      images: [
        {
          src: '/images/case-study/ml-functions/10. Binary Classfication - ROC Precision.png',
          alt: 'Binary Classification - ROC Precision',
          caption: 'ROC Precision: Comprehensive yet scannable metrics',
          figNumber: 'FIG_17',
        },
        {
          src: '/images/case-study/ml-functions/17. Optimize Model Popup.png',
          alt: 'Optimize Model Popup',
          caption: 'Optimize Model: Expert controls with clear affordances',
          figNumber: 'FIG_18',
        },
      ],
    },
    {
      id: '06_KEY_INTERACTIONS',
      index: '06',
      label: 'Key Interactions',
      icon: <Sparkles className="w-4 h-4" />,
      title: 'The Confusion Matrix & Explainability',
      description: 'The confusion matrix went through 10+ iterations with our domain expert. Balanced DS priorities (metrics, accuracy) with UX priorities (clarity, scan-ability).',
      isKey: true,
      quote: {
        text: "This is the best screen in the entire UX revamp — I couldn't have designed it better.",
        attribution: 'Principal Data Scientist',
      },
      images: [
        {
          src: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
          alt: 'Confusion Matrix screen',
          caption: 'Confusion Matrix: 10+ iterations to perfect',
          figNumber: 'FIG_19',
        },
        {
          src: '/images/case-study/ml-functions/8. Train Model Workflow - Compare Models.png',
          alt: 'Compare Models screen',
          caption: 'Model comparison: Cards replace legacy tables',
          figNumber: 'FIG_20',
        },
        {
          src: '/images/case-study/ml-functions/6. Run Model - Explainability Popup.png',
          alt: 'Explainability Popup',
          caption: 'Explainability: Making ML trustworthy',
          figNumber: 'FIG_21',
        },
      ],
    },
  ]

  const tabs = propTabs || defaultTabs
  const activeTabData = tabs.find(t => t.id === activeTab)

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <span className={`font-mono text-xs ${t.textAccent} uppercase tracking-widest`}>
          {'// DESIGN_EVOLUTION'}
        </span>
        <h3 className={`font-serif ${t.text} text-3xl md:text-4xl lg:text-5xl`}>
          {title}
        </h3>
        <p className={`${t.textMuted} text-lg max-w-3xl mx-auto leading-relaxed`}>
          {description}
        </p>
      </motion.div>

      {/* Streaming Platform Layout */}
      <div className="space-y-8">
        {/* 1. Top Navigation Pills */}
        <div className="flex items-center justify-center">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide max-w-full px-4 snap-x">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                   flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 snap-center
                   ${activeTab === tab.id
                    ? `${t.bgAccent === 'bg-[var(--accent-teal-soft)]' ? 'bg-[var(--accent-teal)]' : t.bgAccent} text-white shadow-md transform scale-105`
                    : `${t.bgAlt} pl-3 border ${t.border} ${t.textMuted} hover:border-[var(--border-secondary)]`}
                 `}
              >
                <span className={activeTab === tab.id ? 'text-white' : t.textMuted}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                {tab.isKey && activeTab !== tab.id && (
                  <span className="ml-1 flex-shrink-0 bg-amber-100 text-amber-700 text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded">
                    Key
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Content Stage */}
        <AnimatePresence mode="wait">
          {activeTabData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Feature Title */}
              <div className="text-center max-w-4xl mx-auto space-y-3">
                <div className="flex items-center justify-center gap-3">
                  {activeTabData.specCaption && (
                    <span className={`font-mono text-xs ${t.textAccent} uppercase tracking-widest`}>
                      {'// '}{activeTabData.specCaption}
                    </span>
                  )}
                </div>
                <h4 className={`font-serif text-2xl md:text-3xl ${t.text}`}>
                  {activeTabData.title}
                </h4>
                <p className={`${t.textMuted} leading-relaxed`}>
                  {activeTabData.description}
                </p>

                {/* Quote Block */}
                {activeTabData.quote && (
                  <div className={`mt-4 inline-block ${t.bgAccent} border-l-4 ${t.borderAccent === 'border-[var(--accent-teal)]/30' ? 'border-[var(--accent-teal)]' : t.borderAccent} px-6 py-3 rounded-r-lg max-w-2xl mx-auto text-left`}>
                    <p className={`font-serif italic text-lg ${t.text} opacity-80 mb-1`}>
                      &quot;{activeTabData.quote.text}&quot;
                    </p>
                    <span className={`font-mono text-xs ${t.textAccent} uppercase tracking-widest block text-right`}>
                      — {activeTabData.quote.attribution}
                    </span>
                  </div>
                )}
              </div>

              {/* The Viewer */}
              <AutoSequenceDataViewer
                images={activeTabData.images.map(img => ({
                  src: img.src,
                  alt: img.alt,
                  caption: `// ${img.figNumber}: ${img.caption}`
                }))}
                title={activeTabData.title}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* System Outcome Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${t.monitor.bg} rounded-xl p-6`}
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-sm text-emerald-400 flex-shrink-0">
            {footerContent ? footerContent.label : '> ITERATION_INSIGHT:'}
          </span>
          {footerContent ? (
            <div className="text-slate-300 text-sm leading-relaxed">
              {footerContent.text}
            </div>
          ) : (
            <p className="text-slate-300 text-sm leading-relaxed">
              The tension between <span className="text-emerald-400 font-medium">data scientist depth</span> and <span className="text-emerald-400 font-medium">user clarity</span> produced the best results.
              From hand-drawn wireframes to pixel-perfect specs — 21 key artifacts documenting 6–8 months of cross-functional iteration.
            </p>
          )}
        </div>
      </motion.div>

    </div>
  )
}
