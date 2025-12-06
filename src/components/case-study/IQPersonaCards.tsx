'use client'

import Image from 'next/image'
import { getTheme } from '@/lib/design-system'

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
  const t = getTheme(isLightBackground)

  const personas = [
    {
      name: 'Mark Bennett',
      title: 'The Tech Visionary (Technical Business User)',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru-technical 1.png',
      quote: 'I focus on driving innovation through data and creating scalable, secure solutions',
      goals: ['Drive technological innovation and integration', 'Leverage data to optimize business processes'],
      painPoints: ['Ensuring seamless integration of various data sources', 'Managing and securing large volumes of data'],
      needs: ['Powerful, scalable solutions', 'Advanced controls and configuration options'],
    },
    {
      name: 'Lisa Carter',
      title: 'The Financial Strategist (Non-Technical Business User)',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru 1.png',
      quote: 'I focus on making informed financial decisions that drive profitability and ensure compliance.',
      goals: ['Enhance financial planning and forecasting', 'Monitor key financial metrics'],
      painPoints: ['Difficulty accessing and interpreting complex financial data', 'Reliance on IT for data extraction and report generation'],
      needs: ['Intuitive tools for data analysis', 'Automation of data processing tasks'],
    },
    {
      name: 'Dan',
      title: 'The Analytics Innovator (BI Developer)',
      image: '/images/case-study/iq-plugin/Persona - BI Developer - With Data 1.png',
      quote: "Sometimes it takes a long time before you realize you could have done something... you didn't know about",
      goals: ['Provide innovative and user-friendly experiences', 'Ensure consistent data with 100% quality'],
      painPoints: ['Data quality issues', 'Troubleshooting issues'],
      needs: ['Advanced controls and configuration options', 'Better system support for high-value tasks'],
    },
    {
      name: 'Jamie',
      title: 'The Techy Analyst (Business Analyst)',
      image: '/images/case-study/iq-plugin/Persona - Techy Analyst 1.png',
      quote: "They rely on us because they can't wrap their heads around the tools",
      goals: ['Change culture and push data-driven decision making', 'Enable others to self-serve and explore'],
      painPoints: ['Manual data cleansing', 'Ad hoc requests from others'],
      needs: ['Self-sufficient, motivated, detail-oriented, resourceful', 'Tools to enable self-service and exploration'],
    },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>{title}</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((p, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="mb-4 relative w-full h-48 rounded-lg border overflow-hidden" style={{ borderColor: `${t.accentVar}40` }}>
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className={`${t.text} text-xl font-serif mb-1`}>{p.name}</h4>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider block mb-2`}>{p.title}</span>
                  <p className={`text-sm italic mb-3 ${t.textAccent}`}>&quot;{p.quote}&quot;</p>
                </div>

                <div>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Goals</span>
                  <ul className="space-y-1">
                    {p.goals.map((g, j) => (
                      <li key={j} className={`${t.text} text-xs flex items-start gap-2`}>
                        <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Pain Points</span>
                  <ul className="space-y-1">
                    {p.painPoints.map((pp, j) => (
                      <li key={j} className={`${t.textMuted} text-xs flex items-start gap-2`}>
                        <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>×</span>
                        <span>{pp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Design Needs</span>
                  <ul className="space-y-1">
                    {p.needs.map((n, j) => (
                      <li key={j} className={`${t.text} text-xs flex items-start gap-2`}>
                        <span className={`${t.textAccent} mt-0.5 flex-shrink-0`}>→</span>
                        <span>{n}</span>
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
