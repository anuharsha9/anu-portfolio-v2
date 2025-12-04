'use client'

import Link from 'next/link'

interface IQPatternConnectionsProps {
  isLightBackground?: boolean
}

export default function IQPatternConnections({ isLightBackground = false }: IQPatternConnectionsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const patterns = [
    {
      id: 'iq',
      name: 'IQ Plugin',
      pattern: 'Unified DSML entry point',
      description: 'Centralized Automated Insights, NLQ, and Predict Data',
      link: null,
    },
    {
      id: 'ml',
      name: 'ML Functions',
      pattern: 'Progressive disclosure patterns',
      description: 'Guided flows with advanced options for experts',
      link: '/work/ml-functions',
    },
    {
      id: 'rc',
      name: 'ReportCaster',
      pattern: 'Explorer-as-filtered-view',
      description: 'Asset discovery and filtering approach',
      link: '/work/reportcaster',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Patterns That Became Reusable
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            The patterns I developed in IQ Plugin became part of my design vocabulary and directly influenced my other projects.
          </p>
        </div>

        {/* 3 Side-by-Side Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {patterns.map((pattern) => {
            const content = (
              <div className="space-y-3">
                <h4 className={`${textColor} text-lg font-semibold`}>{pattern.name}</h4>
                <p className={`${textColor} text-sm font-medium`} style={{ color: accentColor }}>
                  {pattern.pattern}
                </p>
                <p className={`${mutedColor} text-xs leading-relaxed`}>
                  {pattern.description}
                </p>
              </div>
            )
            
            if (pattern.link) {
              return (
                <Link
                  key={pattern.id}
                  href={pattern.link}
                  className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-2xl border-2 p-6 md:p-8 h-full transition-all duration-300 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] block`}
                  style={{ borderColor: accentColor }}
                >
                  {content}
                </Link>
              )
            }
            
            return (
              <div
                key={pattern.id}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-2xl border-2 p-6 md:p-8 h-full transition-all duration-300 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)]`}
                style={{ borderColor: accentColor }}
              >
                {content}
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-6`}>
          <p className={`${textColor} text-sm leading-relaxed text-center`}>
            These weren&apos;t just one-off solutions — they became <span className="font-semibold" style={{ color: accentColor }}>reusable patterns</span> for handling enterprise complexity across multiple projects.
          </p>
        </div>
      </div>
    </div>
  )
}

