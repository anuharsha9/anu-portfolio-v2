'use client'

import { motion } from 'framer-motion'

interface DataGridItem {
  value: string | number
  label: string
  prefix?: string // e.g., "≈", "~", "+"
  suffix?: string // e.g., "%", "x", "+"
}

interface DataGridProps {
  items: DataGridItem[]
  columns?: 2 | 3 | 4 | 5 | 6
  className?: string
  showDividers?: boolean
}

/**
 * Data Grid - Strict metrics grid with visible dividers
 * 
 * Never use floating cards for metrics. Uses huge monospace numbers
 * with small monospace labels and divide-x dividers.
 * 
 * @example
 * <DataGrid 
 *   items={[
 *     { value: '75', suffix: '%', label: 'Fewer Clicks' },
 *     { value: '5', suffix: '→1', label: 'Systems Unified' },
 *   ]}
 *   columns={3}
 * />
 */
export default function DataGrid({ 
  items, 
  columns = 3,
  className = '',
  showDividers = true,
}: DataGridProps) {
  const colsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5',
    6: 'grid-cols-3 md:grid-cols-6',
  }[columns]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`grid ${colsClass} ${showDividers ? 'divide-x divide-slate-200' : 'gap-6'} bg-white border border-slate-200 rounded-xl overflow-hidden ${className}`}
    >
      {items.map((item, index) => (
        <div 
          key={index}
          className="p-6 md:p-8 text-center"
        >
          {/* Value - Huge Monospace */}
          <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tabular-nums">
            {item.prefix && <span className="text-slate-400">{item.prefix}</span>}
            {item.value}
            {item.suffix && <span className="text-[var(--accent-teal)]">{item.suffix}</span>}
          </div>
          
          {/* Label - Small Monospace */}
          <div className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-2">
            {item.label}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

