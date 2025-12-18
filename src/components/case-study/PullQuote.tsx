'use client'

import { motion } from 'framer-motion'
import { getTheme } from '@/lib/design-system'

interface PullQuoteProps {
  quote: string
  author?: string
  isLightBackground?: boolean
}

export default function PullQuote({ quote, author, isLightBackground = false }: PullQuoteProps) {
  const t = getTheme(isLightBackground)

  return (
    <motion.div
      className={`my-8 md:my-12 border-l-4 ${t.borderAccent} pl-6 md:pl-8 py-4`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <blockquote className="space-y-3">
        <p className={`${t.text} text-lg md:text-xl font-serif italic leading-relaxed`}>{quote}</p>
        {author && <cite className={`${t.textMuted} text-sm not-italic`}>— {author}</cite>}
      </blockquote>
    </motion.div>
  )
}
