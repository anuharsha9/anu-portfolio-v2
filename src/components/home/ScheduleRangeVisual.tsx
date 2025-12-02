'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScheduleRangeVisual() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('schedule-visual')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div id="schedule-visual" className="w-full">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-baseline justify-center gap-1"
        >
          <span className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--accent-teal)' }}>
            20M
          </span>
          <span className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--accent-teal)' }}>
            +
          </span>
        </motion.div>
      </div>
    </div>
  )
}

