'use client'

interface MLLearningJourneyProps {
  isLightBackground?: boolean
}

export default function MLLearningJourney({ isLightBackground = false }: MLLearningJourneyProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const learningMethods = [
    {
      method: 'Competitive Analysis',
      description: 'Studied Power BI, Tableau, Qlik Sense in depth',
      details: ['What worked', 'What failed', 'Where we could differentiate'],
      icon: '📊',
    },
    {
      method: 'ML Courses',
      description: 'Self-learned core ML concepts',
      details: ['Model training fundamentals', 'Evaluation metrics', 'Feature engineering'],
      icon: '📚',
    },
    {
      method: 'Principal Data Scientist',
      description: 'Constant collaboration and questions',
      details: ['Model training logic', 'Evaluation metrics', 'Feature sets', 'Domain expertise'],
      icon: '👨‍🔬',
    },
    {
      method: 'Workflow Mapping',
      description: 'Mapped existing black-box workflows',
      details: ['Data selection patterns', 'Training configuration', 'Model execution', 'Results interpretation'],
      icon: '🗺️',
    },
    {
      method: 'Translation Exercise',
      description: 'Translated DS language into UX language',
      details: ['Technical terms → plain language', 'ML logic → user understanding', 'Domain expertise → accessible patterns'],
      icon: '🔄',
    },
    {
      method: 'AI Tools',
      description: 'Filled knowledge gaps with AI assistance',
      details: ['Concept clarification', 'Terminology understanding', 'Quick learning acceleration'],
      icon: '🤖',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg p-6 md:p-8`}>
      <div className="space-y-5">
        {/* Compact integrated header and body text */}
        <div className="space-y-3">
          <div className={`${mutedColor} text-sm md:text-base leading-relaxed`}>
            <p className="mb-3">
              After accepting the project, I faced a critical challenge: I came in with no ML background and had to learn fast enough to design responsibly.
            </p>
            <p className="mb-3">
              I learned that ML wasn&apos;t just about algorithms — it was about data selection and preparation, model training and evaluation, interpreting results and understanding confidence, and handling edge cases and errors gracefully.
            </p>
            <p>
              This wasn&apos;t academic learning. It was practical, design-focused learning. I needed to understand enough to design responsibly, not become a data scientist. I became the bridge between technical complexity and human understanding.
            </p>
          </div>
        </div>

        {/* Learning Methods Grid - Integrated seamlessly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningMethods.map((method, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{method.icon}</span>
                  <h4 className={`${textColor} text-base font-semibold`}>{method.method}</h4>
                </div>
                <p className={`${mutedColor} text-xs leading-relaxed`}>{method.description}</p>
                <ul className="space-y-1.5">
                  {method.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                      <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-tight">{detail}</span>
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

