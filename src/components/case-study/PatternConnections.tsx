'use client'

import Link from 'next/link'
import { getTheme } from '@/lib/design-system'

interface PatternConnectionsProps {
    isLightBackground?: boolean
}

export default function PatternConnections({ isLightBackground = false }: PatternConnectionsProps) {
    const t = getTheme(isLightBackground)
    const borderClass = isLightBackground ? 'border-refined-light' : 'border-refined-dark'

    const patterns = [
        { id: 'rc', name: 'ReportCaster', pattern: 'Modal-based creation flows', description: 'Unified modal workflows from + menu', link: null },
        { id: 'ml', name: 'ML Functions', pattern: 'Step-by-step model training', description: 'Applied modal pattern for complex workflows', link: '/work/ml-functions' },
        { id: 'iq', name: 'IQ Plugin', pattern: 'Explorer-as-filtered-view', description: 'Asset filtering approach inspired by RC Explorer', link: '/work/iq-plugin' },
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
                    <p className={`${t.textMuted} text-base md:text-lg max-w-2xl mx-auto`}>
                        The architectural patterns I developed in ReportCaster became part of my design vocabulary and directly influenced my other projects.
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

                <div className={`${t.cardBg} rounded-lg border ${borderClass} elevation-sm p-6 mt-6`}>
                    <p className={`${t.text} text-sm leading-relaxed text-center`}>
                        These weren&apos;t just one-off solutions — they became <span className={`font-semibold ${t.textAccent}`}>reusable patterns</span> for handling enterprise complexity across multiple projects.
                    </p>
                </div>
            </div>
        </div>
    )
}
