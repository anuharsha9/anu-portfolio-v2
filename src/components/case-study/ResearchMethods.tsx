'use client'

// SVG Icon Components (Line Art Style)
const BookOpenIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const UsersIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const SearchIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
)

const CpuIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

const ChartBarIcon = () => (
  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

export default function ResearchMethods() {
  const methods = [
    {
      category: 'Existing Research',
      description: 'Personas, journey maps, and findings from previous researcher',
      Icon: BookOpenIcon
    },
    {
      category: 'Proxy User Research',
      description: 'Customer Support embedded — primary source for real pain points',
      Icon: UsersIcon
    },
    {
      category: 'System Investigation',
      description: 'Sandbox exploration, screenshots, workflow mapping',
      Icon: SearchIcon
    },
    {
      category: 'SME Knowledge',
      description: 'Legacy engineer + QA interviews for tribal knowledge',
      Icon: CpuIcon
    },
    {
      category: 'Competitive Analysis',
      description: 'Enterprise scheduler patterns and opportunities',
      Icon: ChartBarIcon
    },
  ]

  return (
    <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-primary)] p-6 md:p-8 shadow-sm">
      <div className="space-y-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[var(--text-heading)] text-lg md:text-xl font-serif">
            Research Methods
          </h3>
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            // NO_DIRECT_ACCESS
          </span>
        </div>

        {/* Methods Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {methods.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[var(--border-primary)] p-4 hover:border-[var(--accent-teal)]/30 transition-colors"
            >
              <div className="text-[var(--accent-teal)] mb-2">
                <m.Icon />
              </div>
              <h4 className="text-[var(--text-heading)] text-sm font-medium mb-1">
                {m.category}
              </h4>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Insight - Compact */}
        <div className="mt-6 pt-4 border-t border-slate-200 text-sm text-slate-600">
          <strong className="text-slate-900">Key:</strong> Customer Support became my proxy for user voice. They surfaced the real pain points.
        </div>
      </div>
    </div>
  )
}
