'use client'

interface AhaMomentProps {
  children: React.ReactNode
  isLightBackground?: boolean
}

export default function AhaMoment({ children, isLightBackground = false }: AhaMomentProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const borderColor = isLightBackground ? 'border-[var(--accent-teal)]/30' : 'border-[var(--accent-teal)]/50'
  const bgColor = isLightBackground ? 'bg-[var(--accent-teal)]/5' : 'bg-[var(--accent-teal)]/10'

  return (
    <div className={`${bgColor} rounded-lg border-l-4 ${borderColor} p-6 my-6 shadow-sm`} style={{ borderLeftColor: 'var(--accent-teal)', borderLeftWidth: '4px' }}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-teal)' + '20' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--accent-teal)]"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <p className={`${textColor} text-base md:text-lg leading-relaxed italic`}>
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}


