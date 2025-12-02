'use client'

import Image from 'next/image'

interface IQPersonaCardsProps {
  isLightBackground?: boolean
  title?: string
  description?: string
}

export default function IQPersonaCards({ 
  isLightBackground = false,
  title = 'Who I Designed IQ For',
  description = 'IQ needed to serve four distinct personas with different needs. The central tension: How do you keep the depth technical users need without overwhelming everyone else?'
}: IQPersonaCardsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const personas = [
    {
      name: 'Mark Bennett',
      title: 'The Tech Visionary (Technical Business User)',
      role: 'Solution Architect, Technology Leader, System Innovator',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru-technical 1.png', // Using available persona image
      description: 'A tech-savvy CTO with 18 years of experience, focused on driving efficiency, scaling systems, and integrating AI, machine learning, and data insights. He balances technical and business needs, ensuring data security, system scalability, and team productivity.',
      quote: 'I focus on driving innovation through data and creating scalable, secure solutions',
      goals: [
        'Drive technological innovation and integration',
        'Leverage data to optimize business processes',
        'Ensure data security and scalability',
        'Support data-driven decision-making',
      ],
      painPoints: [
        'Ensuring seamless integration of various data sources',
        'Managing and securing large volumes of data',
        'Balancing technical and business priorities',
        'Communicating complex technical insights to non-technical stakeholders',
        'Keeping up with evolving technology trends',
      ],
      needs: [
        'Powerful, scalable solutions',
        'Advanced controls and configuration options',
        'System integration capabilities',
        'Data security and governance',
      ],
    },
    {
      name: 'Lisa Carter',
      title: 'The Financial Strategist (Non-Technical Business User)',
      role: 'Finance Leader, Budget Strategist, Performance Analyst',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru 1.png', // Using available persona image
      description: 'A CFO with 20+ years of experience, focused on financial stability and profitability. She needs clear, actionable insights from data, preferring intuitive tools and digestible visualizations to drive growth and maintain financial health.',
      quote: 'I focus on making informed financial decisions that drive profitability and ensure compliance.',
      goals: [
        'Enhance financial planning and forecasting',
        'Monitor key financial metrics',
        'Make data-driven decisions to improve profitability',
        'Communicate financial insights effectively to stakeholders',
      ],
      painPoints: [
        'Difficulty accessing and interpreting complex financial data',
        'Reliance on IT for data extraction and report generation',
        'Limited technical skills to use advanced data analysis tools',
        'Time-consuming manual data processing tasks',
        'Need for clear, concise visualizations for stakeholders',
      ],
      needs: [
        'Intuitive tools for data analysis',
        'Automation of data processing tasks',
        'Digestible visualizations',
        'Clear, actionable financial insights',
      ],
    },
    {
      name: 'Dan',
      title: 'The Analytics Innovator (BI Developer)',
      role: 'BI Developer, BI Solutions Architect, BI Reporting Analyst, Information Analyst',
      image: '/images/case-study/iq-plugin/Persona - BI Developer - With Data 1.png', // Using available persona image
      description: 'A Developer with decades of TIBCO WebFOCUS experience, focused on delivering high-quality products. He deals with various issues from data quality to performance and data preparation. He seeks innovative ways to use WebFOCUS and desires better system support for high-value tasks.',
      quote: 'Sometimes it takes a long time before you realize you could have done something... you didn\'t know about',
      goals: [
        'Provide innovative and user-friendly experiences',
        'Ensure consistent data with 100% quality',
        'Collaborate with cross-functional teams',
        'Develop high-quality code',
      ],
      painPoints: [
        'Data quality issues',
        'Troubleshooting issues',
        'Preparing data',
        'Developing in a complex tool',
        'Learning what can be done',
        'Error messaging',
        'Performance issues',
        'Communicating WF concepts',
        'Surfacing relevant metadata',
        'Governance and visibility into version history',
      ],
      needs: [
        'Advanced controls and configuration options',
        'Better system support for high-value tasks',
        'Clear documentation and examples',
        'Innovative ways to use WebFOCUS',
      ],
    },
    {
      name: 'Jamie',
      title: 'The Techy Analyst (Business Analyst)',
      role: 'Data Analyst, BI Analyst, Business Analyst',
      image: '/images/case-study/iq-plugin/Persona - Techy Analyst 1.png', // Using available persona image
      description: 'A data analyst who writes queries and creates models, spending her days preparing data and fulfilling ad hoc requests. She is driven to enable others to use data confidently, conducting trainings, documenting best practices, and creating reusable assets to foster data-driven decisions.',
      quote: 'They rely on us because they can\'t wrap their heads around the tools',
      goals: [
        'Change culture and push data-driven decision making',
        'Enable others to self-serve and explore',
        'Create process improvements (sharing, reuse, notifications, automations)',
        'Ensure consistency',
      ],
      painPoints: [
        'Manual data cleansing',
        'Ad hoc requests from others',
        'Data quality and duplication of content',
        'Lack of data context & history',
        'Reliance on other teams for data',
        'Identifying data sources',
        'Maintaining versions for different groups',
        'Data volume, compliance & security',
        'Unnecessary meetings',
      ],
      needs: [
        'Self-sufficient, motivated, detail-oriented, resourceful',
        'Tools to enable self-service and exploration',
        'Process improvements for sharing, reuse, automation',
        'Consistent data and quality',
      ],
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            {title}
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            {description}
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
              <div className="space-y-3">
                <div>
                  <h4 className={`${textColor} text-xl font-serif mb-1`}>{persona.name}</h4>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider block mb-2`}>
                    {persona.title}
                  </span>
                  <p className={`${textColor} text-sm italic mb-3`} style={{ color: accentColor }}>
                    &quot;{persona.quote}&quot;
                  </p>
                </div>

                {/* Goals - Show only top 2 */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                    Goals
                  </span>
                  <ul className="space-y-1">
                    {persona.goals.slice(0, 2).map((goal, goalIndex) => (
                      <li key={goalIndex} className={`${textColor} text-xs flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">✓</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pain Points - Show only top 2 */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                    Pain Points
                  </span>
                  <ul className="space-y-1">
                    {persona.painPoints.slice(0, 2).map((pain, painIndex) => (
                      <li key={painIndex} className={`${mutedColor} text-xs flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">×</span>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Needs - Show only top 2 */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-2 block`}>
                    Design Needs
                  </span>
                  <ul className="space-y-1">
                    {persona.needs.slice(0, 2).map((need, needIndex) => (
                      <li key={needIndex} className={`${textColor} text-xs flex items-start gap-2`}>
                        <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">→</span>
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

