'use client'

import Link from 'next/link'

interface IQLearningTransformationProps {
  isLightBackground?: boolean
}

export default function IQLearningTransformation({ isLightBackground = false }: IQLearningTransformationProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const journey = [
    {
      phase: 'Starting Point',
      state: 'After ML Functions — applying patterns to broader DSML ecosystem',
    },
    {
      phase: 'Design Phase',
      state: 'Balancing four personas, progressive disclosure, dual-layer UX',
    },
    {
      phase: 'Translation Phase',
      state: 'Translating technical complexity into accessible experiences',
    },
    {
      phase: 'Ownership Phase',
      state: 'Leading complex initiative, building reusable patterns',
    },
  ]

  const learnings = [
    {
      skill: 'Leading Complex Initiatives',
      description: 'IQ required coordinating multiple features, personas, and stakeholders. It taught me to think systemically and communicate clearly across disciplines.',
      icon: '🎯',
    },
    {
      skill: 'Balancing Technical Depth with Intuitive Design',
      description: 'Working with data scientists and engineers while designing for non-technical users forced me to translate between technical and user language constantly.',
      icon: '⚖️',
    },
    {
      skill: 'Dual-Persona Design',
      description: 'Designing for both data scientists and everyday business users became a core strength — I can design experiences that serve experts without excluding beginners.',
      icon: '👥',
    },
  ]

  const patterns = [
    {
      id: 'ml',
      name: 'ML Functions',
      pattern: '4-step guided flows',
      description: 'Progressive disclosure for complex ML workflows',
      link: '/work/ml-functions',
    },
    {
      id: 'iq',
      name: 'IQ Plugin',
      pattern: 'Progressive disclosure, dual-layer UX',
      description: 'Applied ML patterns to broader DSML ecosystem',
      link: null, // Current case study, no link
    },
    {
      id: 'rc',
      name: 'ReportCaster',
      pattern: 'Right-click entry points',
      description: 'Natural platform patterns for workflow initiation',
      link: '/work/reportcaster',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Reflection & What IQ Made Me Learn
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            IQ didn&apos;t just centralize DSML features — it changed how I think about designing advanced capabilities for real people. The project demonstrated that advanced capability doesn&apos;t have to mean advanced pain, and that thoughtful UX architecture can serve both technical experts and everyday business users.
          </p>
        </div>

        {/* Journey Timeline - 2x2 grid */}
        <div>
          <h4 className={`${textColor} text-lg font-semibold mb-4 text-center`}>The IQ Journey</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {journey.map((phase, index) => (
              <div
                key={index}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                style={{ borderColor: accentColor + '40' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div>
                      <h5 className={`${textColor} text-base font-semibold`}>{phase.phase}</h5>
                      <p className={`${textColor} text-xs font-medium`} style={{ color: accentColor }}>{phase.state}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learnings Grid */}
        <div className="mt-8">
          <h4 className={`${textColor} text-lg font-semibold mb-4 text-center`}>Key Learnings</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learnings.map((learning, index) => (
              <div
                key={index}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                style={{ borderColor: accentColor + '40' }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{learning.icon}</span>
                    <h4 className={`${textColor} text-lg font-semibold`}>{learning.skill}</h4>
                  </div>
                  <p className={`${mutedColor} text-sm leading-relaxed`}>{learning.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patterns That Became Reusable */}
        <div className="mt-8">
          <h4 className={`${textColor} text-lg font-semibold mb-4 text-center`}>Patterns That Became Reusable</h4>
          <p className={`${mutedColor} text-sm text-center mb-6 max-w-3xl mx-auto`}>
            The patterns I developed in IQ became part of my design vocabulary and directly influenced how I approach complex, multi-persona design challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {patterns.map((pattern) => {
              const CardContent = (
                <div
                  className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${pattern.link ? 'cursor-pointer' : ''
                    }`}
                  style={{ borderColor: accentColor }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className={`${textColor} text-lg font-semibold`}>{pattern.name}</h4>
                      {pattern.link && (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`${mutedColor} flex-shrink-0 group-hover:animate-pulse transition-all duration-300`}
                        >
                          <path
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <p className={`${textColor} text-sm font-medium`} style={{ color: accentColor }}>
                      {pattern.pattern}
                    </p>
                    <p className={`${mutedColor} text-xs leading-relaxed`}>
                      {pattern.description}
                    </p>
                  </div>
                </div>
              )

              if (pattern.link) {
                return (
                  <Link key={pattern.id} href={pattern.link} className="group">
                    {CardContent}
                  </Link>
                )
              }

              return <div key={pattern.id}>{CardContent}</div>
            })}
          </div>
        </div>

        {/* Final Note */}
        <div className={`${bgColor} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-sm leading-relaxed text-center italic`}>
            This work also reinforced something I learned in ML Functions: I don&apos;t need to be the domain expert to design responsibly. I need to understand enough to translate between technical complexity and human understanding — and that&apos;s exactly what IQ required.
          </p>
        </div>
      </div>
    </div>
  )
}

