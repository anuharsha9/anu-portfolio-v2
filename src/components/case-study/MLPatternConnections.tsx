'use client'

import Link from 'next/link'
import { getTheme } from '@/lib/design-system'

interface MLPatternConnectionsProps {
  isLightBackground?: boolean
}

export default function MLPatternConnections({ isLightBackground = false }: MLPatternConnectionsProps) {
  const t = getTheme(isLightBackground)
  const borderClass = isLightBackground ? 'border-refined-light' : 'border-refined-dark'

  const patterns = [
    { id: 'ml', name: 'ML Functions', pattern: '4-step guided flows', description: 'Progressive disclosure for complex ML workflows', link: null },
    { id: 'iq', name: 'IQ Plugin', pattern: 'Applied ML patterns to DSML', description: '4-step flow pattern became foundation for broader ML ecosystem', link: '/work/iq-plugin' },
    { id: 'rc', name: 'ReportCaster', pattern: 'Right-click entry points', description: 'Natural platform patterns for workflow initiation', link: '/work/reportcaster' },
  ]

  const CardContent = ({ name, pattern, description }: { name: string; pattern: string; description: string }) => (
    <div className="space-y-3">
      <h4 className={`${t.text} text-lg font-semibold`}>{name}</h4>
      <p className={`${t.textAccent} text-sm font-medium`}>{pattern}</p>
      <p className={`${t.textMuted} text-xs leading-relaxed`}>{description}</p>
    </div>
  )

  return (
    <div className={`${t.bg} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Patterns That Became Reusable</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            The patterns I developed in ML Functions became part of my design vocabulary and directly influenced my other projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {patterns.map((p) =>
            p.link ? (
              <Link key={p.id} href={p.link} className={`${t.cardBg} rounded-lg border ${borderClass} p-6 md:p-8 h-full block hover-lift transition-all duration-normal`}>
                <CardContent {...p} />
              </Link>
            ) : (
              <div key={p.id} className={`${t.cardBg} rounded-lg border ${borderClass} elevation-sm p-6 md:p-8 h-full`}>
                <CardContent {...p} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
