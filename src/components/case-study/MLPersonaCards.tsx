'use client'

import Image from 'next/image'
import { getTheme } from '@/lib/design-system'

interface MLPersonaCardsProps {
  isLightBackground?: boolean
}

export default function MLPersonaCards({ isLightBackground = false }: MLPersonaCardsProps) {
  const t = getTheme(isLightBackground)

  const personas = [
    {
      name: 'The Techy Analyst',
      image: '/images/case-study/iq-plugin/Persona - Techy Analyst 1.png',
      role: 'Business Analyst',
      description: "Data Analyst, BI Analyst, Business Analyst. Self-sufficient, motivated, detail-oriented, resourceful. \"They rely on us because they can't wrap their heads around the tools\"",
      goals: ['Change culture and push data-driven decision making', 'Enable others to self-serve and explore'],
      painPoints: ['Manual data cleansing', 'Ad hoc requests from others', 'Data quality issues'],
      needs: ['Right-click dataset entry (natural workflow pattern)', 'Advanced controls accessible when needed'],
    },
    {
      name: 'The Financial Strategist',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru 1.png',
      role: 'Non-Technical Business User',
      description: 'Finance Leader, Budget Strategist, Performance Analyst. Goal-oriented, collaborative, analytical, proactive. "I focus on making informed financial decisions that drive profitability and ensure compliance."',
      goals: ['Enhance financial planning and forecasting with accurate data', 'Monitor key financial metrics and performance indicators'],
      painPoints: ['Difficulty accessing and interpreting complex data', 'Reliance on IT for data extraction and report generation'],
      needs: ['Guided 4-step workflow', 'Inline explanations and teaching', 'Clear error messaging'],
    },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>User Personas</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            Two distinct user types drove different aspects of the design: Techy Analyst (power users) and non-technical analysts. Each persona directly influenced specific design decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((p, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="mb-4 relative w-full h-48 rounded-lg border overflow-hidden" style={{ borderColor: `${t.accentVar}40` }}>
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className={`${t.text} text-xl font-serif mb-1`}>{p.name}</h4>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>{p.role}</span>
                  <p className={`${t.textMuted} text-sm mt-2 leading-relaxed`}>{p.description}</p>
                </div>

                <div>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Goals</span>
                  <ul className="space-y-1">
                    {p.goals.map((g, j) => (
                      <li key={j} className={`${t.text} text-sm flex items-start gap-2`}>
                        <span className={`${t.textAccent} mt-1`}>✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Pain Points</span>
                  <ul className="space-y-1">
                    {p.painPoints.map((pp, j) => (
                      <li key={j} className={`${t.textMuted} text-sm flex items-start gap-2`}>
                        <span className={`${t.textAccent} mt-1`}>×</span>
                        <span>{pp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Design Needs</span>
                  <ul className="space-y-1">
                    {p.needs.map((n, j) => (
                      <li key={j} className={`${t.text} text-sm flex items-start gap-2`}>
                        <span className={`${t.textAccent} mt-1`}>→</span>
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
