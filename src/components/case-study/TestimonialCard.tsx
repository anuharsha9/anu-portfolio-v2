'use client'

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
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  return (
    <div className={`${bgColor} rounded-2xl p-6 md:p-8 border ${borderColor} hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group`}>
      <blockquote className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
          <div className="h-px flex-1 bg-white/10"></div>
          <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
        </div>
        <p className={`${textColor} text-base md:text-lg leading-relaxed italic`}>
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="pt-4 border-t border-white/10">
          <p className={`${textColor} font-semibold group-hover:text-[var(--accent-teal)] transition-colors`}>{name}</p>
          <p className={`${mutedColor} text-sm`}>
            {role} {company && `at ${company}`}
          </p>
        </footer>
      </blockquote>
    </div>
  )
}

