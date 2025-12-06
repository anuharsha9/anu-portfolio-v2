'use client'

import TopQuoteIcon from '@/assets/top-quote.svg'
import BottomQuoteIcon from '@/assets/bottom-quote.svg'
import { getTheme } from '@/lib/design-system'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  isLightBackground?: boolean
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  isLightBackground = false,
}: TestimonialCardProps) {
  const theme = getTheme(isLightBackground)

  return (
    <div className={`${theme.bg} rounded-2xl p-6 md:p-8 border ${theme.border} hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group`}>
      <blockquote className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
          <div className={`h-px flex-1 ${theme.divider}`}></div>
          <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
        </div>
        {/* Quote with icons */}
        <div className="relative">
          {/* Opening quote icon */}
          <div className="relative mb-2" style={{ paddingLeft: '1.2em' }}>
            <TopQuoteIcon
              style={{
                position: 'absolute',
                left: '0',
                top: '-0.2em',
                width: '1.2em',
                height: '1.2em',
              }}
              className="text-[var(--accent-teal)]"
            />
          </div>
          <p className={`${theme.text} text-base md:text-lg leading-relaxed relative`} style={{ paddingRight: '1.2em', paddingBottom: '2em' }}>
            {quote}
            {/* Closing quote icon */}
            <BottomQuoteIcon
              style={{
                position: 'absolute',
                right: '0',
                bottom: '0',
                width: '1.2em',
                height: '1.2em',
              }}
              className="text-[var(--accent-teal)]"
            />
          </p>
        </div>
        <footer className={`pt-4 border-t ${theme.border}`}>
          <p className={`${theme.text} font-semibold group-hover:text-[var(--accent-teal)] transition-colors`}>{name}</p>
          <p className={`${theme.textMuted} text-sm`}>
            {role} {company && `at ${company}`}
          </p>
        </footer>
      </blockquote>
    </div>
  )
}
