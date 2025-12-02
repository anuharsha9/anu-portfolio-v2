'use client'

import Image from 'next/image'

interface PersonaCardsProps {
  isLightBackground?: boolean
}

export default function PersonaCards({ isLightBackground = false }: PersonaCardsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const personas = [
    {
      name: 'BI Developer',
      image: '/images/case-study/ReportCaster/Persona - BI Developer - No Data.png',
      role: 'Technical User',
      description: 'Developers who need to schedule reports but may not have existing data infrastructure',
      goals: [
        'Schedule reports reliably',
        'Understand system behavior',
        'Integrate with existing workflows',
      ],
      painPoints: [
        'Fragmented interfaces',
        'Unclear system behavior',
        'Complex configuration',
      ],
      needs: [
        'Clear, predictable workflows',
        'Documentation and guidance',
        'Consistent patterns',
      ],
    },
    {
      name: 'Reporting Guru',
      image: '/images/case-study/ReportCaster/Persona - Reporting Guru.png',
      role: 'Power User',
      description: 'Power users who understand the system deeply but still struggle with the fragmented interface',
      goals: [
        'Efficient schedule management',
        'Advanced configuration options',
        'Quick access to all features',
      ],
      painPoints: [
        'Multiple tabs and dialogs',
        'Context switching',
        'Hidden features',
      ],
      needs: [
        'Unified interface',
        'Fast workflows',
        'Advanced controls accessible',
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
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            Personas and journey maps were created by a previous researcher. I inherited this foundational work and used it to guide design decisions throughout the redesign.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              {/* Persona Image */}
              <div className="mb-4 relative w-full h-48 rounded-lg border overflow-hidden" style={{ borderColor: borderColor.replace('border-', '').includes('black') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
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
                    Needs
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

        {/* Note */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-sm leading-relaxed`}>
            <span className="font-semibold">Note:</span> These personas were created by a user researcher who left the company before I joined. I inherited this foundational work and built upon it, using the personas to guide design decisions while supplementing with insights from Customer Support and customer reps.
          </p>
        </div>
      </div>
    </div>
  )
}

