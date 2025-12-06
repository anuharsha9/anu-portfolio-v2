'use client'

import { getTheme } from '@/lib/design-system'

interface PullQuoteProps {
  quote: string
  author?: string
  isLightBackground?: boolean
}

export default function PullQuote({ quote, author, isLightBackground = false }: PullQuoteProps) {
  const t = getTheme(isLightBackground)

  return (
    <div className={`my-8 md:my-12 border-l-4 ${t.borderAccent} pl-6 md:pl-8 py-4`}>
      <blockquote className="space-y-3">
        <p className={`${t.text} text-lg md:text-xl font-serif italic leading-relaxed`}>{quote}</p>
        {author && <cite className={`${t.textMuted} text-sm not-italic`}>— {author}</cite>}
      </blockquote>
    </div>
  )
}
