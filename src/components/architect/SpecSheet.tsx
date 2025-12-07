'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SpecItem {
  label: string
  value: string | string[]
}

interface SpecSheetProps {
  title: string
  subtitle?: string
  image?: {
    src: string
    alt: string
  }
  specs: SpecItem[]
  className?: string
}

/**
 * Spec Sheet - Horizontal persona/entity layout
 * 
 * Never use vertical bullet lists. Uses horizontal layout with
 * subject on the left and data grid on the right.
 * 
 * @example
 * <SpecSheet
 *   title="Business Analyst"
 *   subtitle="Primary User"
 *   image={{ src: '/personas/analyst.png', alt: 'Analyst persona' }}
 *   specs={[
 *     { label: 'Goals', value: ['Automate reports', 'Save time'] },
 *     { label: 'Pain Points', value: ['Manual exports', 'Scattered tools'] },
 *   ]}
 * />
 */
export default function SpecSheet({
  title,
  subtitle,
  image,
  specs,
  className = '',
}: SpecSheetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white border border-slate-200 rounded-xl overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
        {/* Left: Subject */}
        <div className="bg-slate-50 p-6 border-b md:border-b-0 md:border-r border-slate-200">
          {image && (
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-slate-200 mb-4 mx-auto md:mx-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <h4 className="font-serif text-lg text-slate-900 text-center md:text-left">
            {title}
          </h4>
          
          {subtitle && (
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1 text-center md:text-left">
              // {subtitle.toUpperCase().replace(/\s+/g, '_')}
            </p>
          )}
        </div>

        {/* Right: Data Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div key={index}>
              {/* Label */}
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2">
                {spec.label}
              </span>
              
              {/* Value(s) */}
              {Array.isArray(spec.value) ? (
                <ul className="space-y-1">
                  {spec.value.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="text-slate-300 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-700 text-sm">{spec.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

