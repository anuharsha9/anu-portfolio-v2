'use client'

import Link from 'next/link'

interface PatternConnectionsProps {
    isLightBackground?: boolean
}

export default function PatternConnections({ isLightBackground = false }: PatternConnectionsProps) {
    const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
    const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
    const borderColor = isLightBackground ? 'border-refined-light' : 'border-refined-dark'
    const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
    const accentColor = 'var(--accent-teal)'

    const patterns = [
        {
            id: 'rc',
            name: 'ReportCaster',
            pattern: 'Modal-based creation flows',
            description: 'Unified modal workflows from + menu',
            link: null, // Current case study, no link
        },
        {
            id: 'ml',
            name: 'ML Functions',
            pattern: 'Step-by-step model training',
            description: 'Applied modal pattern for complex workflows',
            link: '/work/ml-functions',
        },
        {
            id: 'iq',
            name: 'IQ Plugin',
            pattern: 'Explorer-as-filtered-view',
            description: 'Asset filtering approach inspired by RC Explorer',
            link: '/work/iq-plugin',
        },
    ]

    return (
        <div className={`${bgColor} p-8 md:p-12`}>
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                    <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
                        Patterns That Became Reusable
                    </h3>
                    <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
                        The architectural patterns I developed in ReportCaster became part of my design vocabulary and directly influenced my other projects.
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
                                    className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} p-6 md:p-8 h-full block hover-lift transition-all duration-normal`}
                                >
                                    {content}
                                </Link>
                            )
                        }

                        return (
                            <div
                                key={pattern.id}
                                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} elevation-sm p-6 md:p-8 h-full`}
                            >
                                {content}
                            </div>
                        )
                    })}
                </div>

                {/* Summary */}
                <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} elevation-sm p-6 mt-6`}>
                    <p className={`${textColor} text-sm leading-relaxed text-center`}>
                        These weren&apos;t just one-off solutions — they became <span className="font-semibold" style={{ color: accentColor }}>reusable patterns</span> for handling enterprise complexity across multiple projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

