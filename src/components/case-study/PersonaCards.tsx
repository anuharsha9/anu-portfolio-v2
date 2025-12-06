'use client'

import Image from 'next/image'
import { getTheme } from '@/lib/design-system'

interface PersonaCardsProps {
  isLightBackground?: boolean
}

export default function PersonaCards({ isLightBackground = false }: PersonaCardsProps) {
  const t = getTheme(isLightBackground)
  const subtleBorder = isLightBackground ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'

  const personas = [
    {
      name: 'BI Developer',
      image: '/images/case-study/ReportCaster/Persona - BI Developer - No Data.png',
      role: 'Technical User',
      description: 'Developers who need to schedule reports but may not have existing data infrastructure',
      goals: ['Schedule reports reliably', 'Understand system behavior', 'Integrate with existing workflows'],
      painPoints: ['Fragmented interfaces', 'Unclear system behavior', 'Complex configuration'],
      needs: ['Clear, predictable workflows', 'Documentation and guidance', 'Consistent patterns'],
    },
    {
      name: 'Reporting Guru',
      image: '/images/case-study/ReportCaster/Persona - Reporting Guru.png',
      role: 'Power User',
      description: 'Power users who understand the system deeply but still struggle with the fragmented interface',
      goals: ['Efficient schedule management', 'Advanced configuration options', 'Quick access to all features'],
      painPoints: ['Multiple tabs and dialogs', 'Context switching', 'Hidden features'],
      needs: ['Unified interface', 'Fast workflows', 'Advanced controls accessible'],
    },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>User Personas</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-2xl mx-auto`}>
            Personas and journey maps were created by a previous researcher. I inherited this foundational work and used it to guide design decisions throughout the redesign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((p, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border ${t.border} p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
              <div className="mb-4 relative w-full h-48 rounded-lg border overflow-hidden" style={{ borderColor: subtleBorder }}>
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
                  <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-2 block`}>Needs</span>
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

        <div className={`${t.cardBg} rounded-lg p-6 border ${t.border} mt-8`}>
          <p className={`${t.text} text-sm leading-relaxed`}>
            <span className="font-semibold">Note:</span> These personas were created by a user researcher who left the company before I joined. I inherited this foundational work and built upon it, using the personas to guide design decisions while supplementing with insights from Customer Support and customer reps.
          </p>
        </div>
      </div>
    </div>
  )
}
