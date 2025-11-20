'use client'

import { motion } from 'framer-motion'
import { sectionReveal } from '@/lib/animations'
import { ReactNode } from 'react'

interface MotionSectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export default function MotionSection({
  id,
  className,
  children,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  )
}

