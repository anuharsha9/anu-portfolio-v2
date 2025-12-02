'use client'

import Image from 'next/image'

interface MLPersonaCardsProps {
  isLightBackground?: boolean
}

export default function MLPersonaCards({ isLightBackground = false }: MLPersonaCardsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const personas = [
    {
      name: 'The Techy Analyst',
      image: '/images/case-study/iq-plugin/Persona - Techy Analyst 1.png',
      role: 'Business Analyst',
      description: 'Data Analyst, BI Analyst, Business Analyst. Self-sufficient, motivated, detail-oriented, resourceful. "They rely on us because they can\'t wrap their heads around the tools"',
      goals: [
        'Change culture and push data-driven decision making',
        'Enable others to self-serve and explore',
        'Create process improvements (sharing, reuse, notifications, automations)',
        'Ensure consistency',
      ],
      painPoints: [
        'Manual data cleansing',
        'Ad hoc requests from others',
        'Data quality issues',
        'Duplication of content',
        'Lack of data context & history',
        'Reliance on other teams for data',
      ],
      needs: [
        'Right-click dataset entry (natural workflow pattern)',
        'Advanced controls accessible when needed',
        'Fast workflow execution',
        'Clear data context and history',
      ],
    },
    {
      name: 'The Financial Strategist',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru 1.png',
      role: 'Non-Technical Business User',
      description: 'Finance Leader, Budget Strategist, Performance Analyst. Goal-oriented, collaborative, analytical, proactive. "I focus on making informed financial decisions that drive profitability and ensure compliance."',
      goals: [
        'Enhance financial planning and forecasting with accurate data',
        'Monitor key financial metrics and performance indicators',
        'Make data-driven decisions to improve profitability',
        'Communicate financial insights effectively to stakeholders',
      ],
      painPoints: [
        'Difficulty accessing and interpreting complex data',
        'Reliance on IT for data extraction and report generation',
        'Limited technical skills to use advanced data analysis tools',
        'Time-consuming manual data processing tasks',
        'Need clear, concise visualizations for stakeholders',
      ],
      needs: [
        'Guided 4-step workflow',
        'Inline explanations and teaching',
        'Clear error messaging',
        'Intuitive, non-technical interface',
        'Automated processes where possible',
      ],
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            User Personas
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            Two distinct user types drove different aspects of the design: Techy Analyst (power users) and non-technical analysts. Each persona directly influenced specific design decisions.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              {/* Persona Image */}
              <div className="mb-4 relative w-full h-48 rounded-lg border overflow-hidden" style={{ borderColor: accentColor + '40' }}>
                <Image
                  src={persona.image}
                  alt={persona.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Persona Info */}
              <div className="space-y-4">
                <div>
                  <h4 className={`${textColor} text-xl font-serif mb-1`}>{persona.name}</h4>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>
                    {persona.role}
                  </span>
                  <p className={`${mutedColor} text-sm mt-2 leading-relaxed`}>{persona.description}</p>
                </div>

                {/* Goals */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                    Goals
                  </span>
                  <ul className="space-y-1">
                    {persona.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className={`${textColor} text-sm flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-1">✓</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pain Points */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                    Pain Points
                  </span>
                  <ul className="space-y-1">
                    {persona.painPoints.map((pain, painIndex) => (
                      <li key={painIndex} className={`${mutedColor} text-sm flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-1">×</span>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Needs */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                    Design Needs
                  </span>
                  <ul className="space-y-1">
                    {persona.needs.map((need, needIndex) => (
                      <li key={needIndex} className={`${textColor} text-sm flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-1">→</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

