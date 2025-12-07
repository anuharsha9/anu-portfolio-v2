'use client'

import { motion } from 'framer-motion'

interface ResearchMethodsProps {
  isLightBackground?: boolean
}

// SVG Icon Components (Line Art Style)
const BookOpenIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
)

const CpuIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

const ChartBarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

export default function ResearchMethods({ isLightBackground = true }: ResearchMethodsProps) {
  const methods = [
    { 
      category: 'Existing Research', 
      description: 'Inherited foundational work from previous researcher', 
      items: ['User personas', 'User journey maps', 'Initial research findings'], 
      Icon: BookOpenIcon 
    },
    { 
      category: 'User Research (Proxy)', 
      description: "Customer Support team and customer reps — primary sources for user pain points", 
      items: ['Customer Support insights (Gold A7 team)', 'Customer rep 1:1s', 'Support ticket analysis', 'Real-world usage patterns', 'Workaround behaviors'], 
      Icon: UsersIcon 
    },
    { 
      category: 'System Investigation', 
      description: 'Black-box reverse engineering of the undocumented legacy system', 
      items: ['Sandbox exploration', 'Hundreds of screenshots', 'Workflow mapping', 'Dialog and state documentation', 'Mind map creation'], 
      Icon: SearchIcon 
    },
    { 
      category: 'Technical Understanding', 
      description: 'Tribal knowledge from the original engineer and subject matter experts', 
      items: ['Legacy engineer conversations', 'QA & SME interviews', 'System behavior rationale', 'Legacy logic explanation', 'Edge case behaviors'], 
      Icon: CpuIcon 
    },
    { 
      category: 'Competitive Analysis', 
      description: 'Studying how other enterprise schedulers handled similar complexity', 
      items: ['Industry scheduler study', 'Pattern identification', 'Opportunity mapping'], 
      Icon: ChartBarIcon 
    },
  ]

  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-primary)] p-8 md:p-12 shadow-sm">
      <div className="space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            // DATA_SOURCES
          </span>
          <h3 className="text-[var(--text-heading)] text-2xl md:text-3xl font-serif">
            Research Methods & Tools
          </h3>
          <p className="text-[var(--text-body)] text-base md:text-lg max-w-2xl mx-auto">
            How I reconstructed an undocumented 50-year-old system when direct user research wasn&apos;t allowed.
          </p>
        </motion.div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl border border-[var(--border-primary)] p-6 hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
            >
              {/* Icon & Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="text-[var(--accent-teal)] flex-shrink-0">
                  <m.Icon />
                </div>
                <div>
                  <h4 className="text-[var(--text-heading)] text-lg font-serif leading-tight">
                    {m.category}
                  </h4>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">
                {m.description}
              </p>
              
              {/* Items List */}
              <ul className="space-y-1.5">
                {m.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[var(--border-secondary)] font-mono text-xs mt-0.5 flex-shrink-0">→</span>
                    <span className="font-mono text-xs text-[var(--text-body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* System Constraint Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-amber-50 border-l-4 border-amber-400 p-4 md:p-5 mt-8 rounded-r-lg"
        >
          <div className="flex items-start gap-3">
            {/* Warning Icon */}
            <span className="text-amber-500 text-xl flex-shrink-0">⚠</span>
            
            <div className="flex-1">
              {/* Label */}
              <div className="font-mono text-xs text-amber-600 uppercase tracking-wider mb-2">
                CONSTRAINT: NO_DIRECT_ACCESS
              </div>
              
              {/* Body */}
              <p className="text-[var(--text-body)] text-sm leading-relaxed">
                Customer Support and customer reps became proxies for understanding user pain points — they were the voice of customers who couldn&apos;t speak directly to design. This approach, combined with existing research and system investigation, provided a comprehensive understanding despite enterprise research constraints.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
