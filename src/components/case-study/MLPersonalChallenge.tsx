'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, BookOpen, Users, Sparkles } from 'lucide-react'

interface MLPersonalChallengeProps {
  isLightBackground?: boolean
}

export default function MLPersonalChallenge({ isLightBackground = true }: MLPersonalChallengeProps) {
  const learningMethods = [
    {
      icon: BookOpen,
      label: 'Online Courses',
      description: 'ML fundamentals, model training, evaluation metrics',
    },
    {
      icon: Users,
      label: 'Domain Expert',
      description: 'Constant questions to Principal Data Scientist',
    },
    {
      icon: Sparkles,
      label: 'AI Tools',
      description: 'Used AI to fill knowledge gaps quickly',
    },
    {
      icon: BrainCircuit,
      label: 'Competitive Analysis',
      description: 'Studied Power BI, Tableau, Qlik approaches',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-blue-50 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-lg"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <BrainCircuit className="w-6 h-6 text-blue-600" />
          </div>
          <div className="space-y-2">
            <h4 className="font-mono text-sm uppercase tracking-widest text-blue-700">
              CHALLENGE: THE_KNOWLEDGE_GAP
            </h4>
            <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-serif">
              I entered this project with <span className="font-semibold text-blue-700">zero ML knowledge</span>. 
              I had to self-learn the domain to design the bridge.
            </p>
          </div>
        </div>

        {/* Learning Methods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {learningMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 rounded-lg p-4 border border-blue-100"
            >
              <method.icon className="w-5 h-5 text-blue-600 mb-2" />
              <h5 className="font-semibold text-slate-900 text-sm">{method.label}</h5>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">{method.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Outcome Note */}
        <div className="bg-white/50 rounded-lg p-4 border border-blue-100 mt-4">
          <p className="text-slate-700 text-sm leading-relaxed">
            <span className="font-mono text-blue-600 text-xs">&gt; OUTCOME:</span> Within weeks, I became the 
            <span className="font-semibold"> bridge between technical complexity and human understanding</span> — 
            translating data scientist requirements into accessible UX patterns.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

