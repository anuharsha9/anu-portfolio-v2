'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLightbox } from '@/contexts/LightboxContext'
import { MousePointer, Workflow, Layout, BarChart3, Sparkles } from 'lucide-react'

interface DesignIterationLogProps {
  isLightBackground?: boolean
}

interface TabImage {
  src: string
  alt: string
  caption: string
  figNumber: string
}

interface TabQuote {
  text: string
  attribution: string
}

interface Tab {
  id: string
  index: string
  label: string
  icon: React.ReactNode
  title: string
  description: string
  images: TabImage[]
  quote?: TabQuote
  isKey?: boolean
}

export default function DesignIterationLog({ isLightBackground = false }: DesignIterationLogProps) {
  const [activeTab, setActiveTab] = useState('01_ENTRY_POINTS')
  const { openLightbox } = useLightbox()

  const tabs: Tab[] = [
    {
      id: '01_ENTRY_POINTS',
      index: '01',
      label: 'Entry Points',
      icon: <MousePointer className="w-4 h-4" />,
      title: 'Multiple Entry Points from the Hub',
      description: 'Right-click context menus from the Hub, driven by the Techy Analyst persona. Users access Predict Data via right-click on dataset, folder, or +Data menu — achieving 100% discoverability in SME testing.',
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
      title: 'The Confusion Matrix & Explanability',
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
          src: '/images/case-study/ml-functions/6. Run Model -  Explanability Popup.png',
          alt: 'Explanability Popup',
          caption: 'Explanability: Making ML trustworthy',
          figNumber: 'FIG_21',
        },
      ],
    },
  ]

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
        <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-widest">
          // DESIGN_ITERATION_LOG
        </span>
        <h3 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl">
          System Inspection: The Design Artifacts
        </h3>
        <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
          Navigate through the key design deliverables that emerged from 6–8 months of cross-functional iteration.
        </p>
      </motion.div>

      {/* IDE Layout - Large Feature Display */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row">

          {/* Mobile Tabs - Horizontal Scrollable Pills */}
          <div className="lg:hidden border-b border-slate-200 bg-slate-50/30">
            <div className="px-4 pt-4 pb-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                // ITERATION_LOG
              </span>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 px-4 pb-4 min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                      ${activeTab === tab.id
                        ? 'bg-[var(--accent-teal)] text-white shadow-md'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'}
                    `}
                  >
                    <span className={activeTab === tab.id ? 'text-white' : 'text-slate-400'}>
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar - File Tree */}
          <div className="hidden lg:block w-[22%] border-r border-slate-200 p-6 bg-slate-50/30">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-6">
              // ITERATION_LOG
            </span>

            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    w-full text-left py-4 px-4 border-l-2 transition-all duration-200 rounded-r-lg flex items-center gap-3
                    ${activeTab === tab.id
                      ? 'border-[var(--accent-teal)] bg-[var(--accent-teal-50)] text-slate-900'
                      : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                  `}
                >
                  <span className={`flex-shrink-0 ${activeTab === tab.id ? 'text-[var(--accent-teal)]' : 'text-slate-400'}`}>
                    {tab.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-xs opacity-50 mr-2">{tab.index}</span>
                    <span className="font-sans font-medium text-sm">{tab.label}</span>
                  </div>
                  {tab.isKey && (
                    <span className="flex-shrink-0 bg-amber-100 text-amber-700 text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded">
                      Key
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Preview Pane - The Stage */}
          <div className="flex-1 p-4 md:p-6 lg:p-10 min-h-[400px] lg:min-h-[650px]">
            <AnimatePresence mode="wait">
              {activeTabData && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Content Header */}
                  <div className="mb-10">
                    <h4 className="font-serif text-3xl md:text-4xl text-slate-900 mb-3">
                      {activeTabData.title}
                    </h4>
                    <p className="text-slate-500 text-base leading-relaxed max-w-3xl">
                      {activeTabData.description}
                    </p>

                    {/* Quote Block */}
                    {activeTabData.quote && (
                      <div className="mt-6 bg-[var(--accent-teal-50)] border-l-4 border-[var(--accent-teal)] p-4 rounded-r-lg">
                        <p className="font-serif italic text-lg text-slate-700 mb-2">
                          &quot;{activeTabData.quote.text}&quot;
                        </p>
                        <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-widest">
                          — {activeTabData.quote.attribution}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Mobile: Horizontal Scroll Images */}
                  <div className="md:hidden -mx-4 px-4">
                    <div className="overflow-x-auto scrollbar-hide">
                      <div className="flex gap-4 min-w-max pb-4">
                        {activeTabData.images.map((img, i) => {
                          const galleryImages = activeTabData.images.map(image => ({
                            src: image.src,
                            alt: image.alt,
                            caption: `// ${image.figNumber}: ${image.caption}`
                          }))

                          return (
                            <div
                              key={i}
                              className="group cursor-pointer w-[280px] flex-shrink-0"
                              onClick={() => openLightbox(
                                { src: img.src, alt: img.alt, caption: `// ${img.figNumber}: ${img.caption}` },
                                galleryImages,
                                i
                              )}
                              role="button"
                              tabIndex={0}
                              aria-label={`View ${img.alt} in fullscreen`}
                            >
                              <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
                                <div className="relative aspect-[4/3]">
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="280px"
                                  />
                                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
                                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                                      Tap to expand
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-2 line-clamp-2">
                                // {img.figNumber}: {img.caption}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {activeTabData.images.length > 1 && (
                      <p className="text-center text-slate-400 text-xs mt-1">← Swipe to see more →</p>
                    )}
                  </div>

                  {/* Desktop: Grid Display */}
                  <div className={`hidden md:grid gap-6 ${activeTabData.images.length === 1 ? 'grid-cols-1' : activeTabData.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 xl:grid-cols-3'}`}>
                    {activeTabData.images.map((img, i) => {
                      const galleryImages = activeTabData.images.map(image => ({
                        src: image.src,
                        alt: image.alt,
                        caption: `// ${image.figNumber}: ${image.caption}`
                      }))

                      return (
                        <div
                          key={i}
                          className="group cursor-pointer"
                          onClick={() => openLightbox(
                            { src: img.src, alt: img.alt, caption: `// ${img.figNumber}: ${img.caption}` },
                            galleryImages,
                            i
                          )}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              openLightbox(
                                { src: img.src, alt: img.alt, caption: `// ${img.figNumber}: ${img.caption}` },
                                galleryImages,
                                i
                              )
                            }
                          }}
                          aria-label={`View ${img.alt} in fullscreen`}
                        >
                          <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50 group-hover:shadow-lg group-hover:border-[var(--accent-teal-300)] transition-all duration-300">
                            <div className="relative aspect-[4/3]">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                sizes="(max-width: 1200px) 50vw, 40vw"
                              />
                              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                                    <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
                                      Click to expand
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-3">
                            // {img.figNumber}: {img.caption}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* System Outcome Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-sm text-emerald-400 flex-shrink-0">
            &gt; ITERATION_INSIGHT:
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            The tension between <span className="text-emerald-400 font-medium">data scientist depth</span> and <span className="text-emerald-400 font-medium">user clarity</span> produced the best results.
            From hand-drawn wireframes to pixel-perfect specs — 21 key artifacts documenting 6–8 months of cross-functional iteration.
          </p>
        </div>
      </motion.div>

    </div>
  )
}
