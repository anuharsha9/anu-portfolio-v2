'use client'

interface PullQuoteProps {
  quote: string
  author?: string
  isLightBackground?: boolean
}

export default function PullQuote({
  quote,
  author,
  isLightBackground = false,
}: PullQuoteProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-[var(--accent-teal)]/30' : 'border-[var(--accent-teal)]/40'

  return (
    <div className={`my-8 md:my-12 border-l-4 ${borderColor} pl-6 md:pl-8 py-4`}>
      <blockquote className="space-y-3">
        <p className={`${textColor} text-lg md:text-xl font-serif italic leading-relaxed`}>
          {quote}
        </p>
        {author && (
          <cite className={`${mutedColor} text-sm not-italic`}>
            — {author}
          </cite>
        )}
      </blockquote>
    </div>
  )
}

