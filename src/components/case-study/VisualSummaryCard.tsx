'use client'

import { ReactNode } from 'react'

interface VisualSummaryCardProps {
  icon?: ReactNode
  title: string
  summary: string
  metric?: string
  isLightBackground?: boolean
}

export default function VisualSummaryCard({
  icon,
  title,
  summary,
  metric,
  isLightBackground = false,
}: VisualSummaryCardProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-white/50' : 'bg-white/5'

  return (
    <div className={`${bgColor} rounded-lg p-5 md:p-6 border ${borderColor} border-l-4`} style={{ borderLeftColor: 'var(--accent-teal)' }}>
      <div className="space-y-3">
        {icon && (
          <div className="text-[var(--accent-teal)]">
            {icon}
          </div>
        )}
        <div className="space-y-2">
          <h3 className={`${textColor} text-base md:text-lg font-serif font-semibold`}>
            {title}
          </h3>
          {metric && (
            <div className={`text-[var(--accent-teal)] text-sm font-semibold`}>
              {metric}
            </div>
          )}
          <p className={`${mutedColor} text-sm md:text-base leading-relaxed`}>
            {summary}
          </p>
        </div>
      </div>
    </div>
  )
}

