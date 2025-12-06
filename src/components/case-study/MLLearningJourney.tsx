'use client'

import { getTheme } from '@/lib/design-system'

interface MLLearningJourneyProps {
  isLightBackground?: boolean
}

export default function MLLearningJourney({ isLightBackground = false }: MLLearningJourneyProps) {
  const t = getTheme(isLightBackground)

  const methods = [
    { method: 'Competitive Analysis', description: 'Studied Power BI, Tableau, Qlik Sense in depth', details: ['What worked', 'What failed', 'Where we could differentiate'], icon: '📊' },
    { method: 'ML Courses', description: 'Self-learned core ML concepts', details: ['Model training fundamentals', 'Evaluation metrics', 'Feature engineering'], icon: '📚' },
    { method: 'Principal Data Scientist', description: 'Constant collaboration and questions', details: ['Model training logic', 'Evaluation metrics', 'Feature sets', 'Domain expertise'], icon: '👨‍🔬' },
    { method: 'Workflow Mapping', description: 'Mapped existing black-box workflows', details: ['Data selection patterns', 'Training configuration', 'Model execution', 'Results interpretation'], icon: '🗺️' },
    { method: 'Translation Exercise', description: 'Translated DS language into UX language', details: ['Technical terms → plain language', 'ML logic → user understanding', 'Domain expertise → accessible patterns'], icon: '🔄' },
    { method: 'AI Tools', description: 'Filled knowledge gaps with AI assistance', details: ['Concept clarification', 'Terminology understanding', 'Quick learning acceleration'], icon: '🤖' },
  ]

  return (
    <div className={`${t.bg} rounded-lg p-6 md:p-8`}>
      <div className="space-y-3">
        <div className="space-y-2">
          <div className={`${t.textMuted} text-sm md:text-base leading-relaxed`}>
            <p className="mb-2">
              After accepting the project, I faced a critical challenge: I came in with no ML background and had to learn fast enough to design responsibly.
            </p>
            <p className="mb-2">
              I learned that ML wasn&apos;t just about algorithms — it was about data selection and preparation, model training and evaluation, interpreting results and understanding confidence, and handling edge cases and errors gracefully.
            </p>
            <p>
              This wasn&apos;t academic learning. It was practical, design-focused learning. I needed to understand enough to design responsibly, not become a data scientist. I became the bridge between technical complexity and human understanding.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {methods.map((m, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{m.icon}</span>
                  <h4 className={`${t.text} text-base font-semibold`}>{m.method}</h4>
                </div>
                <p className={`${t.textMuted} text-xs leading-relaxed`}>{m.description}</p>
                <ul className="space-y-1">
                  {m.details.map((d, j) => (
                    <li key={j} className={`${t.textMuted} text-xs flex items-start gap-1.5`}>
                      <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>•</span>
                      <span className="leading-tight">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
