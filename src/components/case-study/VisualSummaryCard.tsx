'use client'

import { ReactNode } from 'react'
import { getTheme } from '@/lib/design-system'

interface VisualSummaryCardProps {
  icon?: ReactNode
  title: string
  summary: string
  metric?: string
  isLightBackground?: boolean
}

export default function VisualSummaryCard({ icon, title, summary, metric, isLightBackground = false }: VisualSummaryCardProps) {
  const t = getTheme(isLightBackground)

  return (
    <div className={`${t.bgAlt} rounded-lg p-5 md:p-6 border ${t.border} border-l-4`} style={{ borderLeftColor: t.accentVar }}>
      <div className="space-y-3">
        {icon && <div className={t.textAccent}>{icon}</div>}
        <div className="space-y-2">
          <h3 className={`${t.text} text-base md:text-lg font-serif font-semibold`}>{title}</h3>
          {metric && <div className={`${t.textAccent} text-sm font-semibold`}>{metric}</div>}
          <p className={`${t.textMuted} text-sm md:text-base leading-relaxed`}>{summary}</p>
        </div>
      </div>
    </div>
  )
}
