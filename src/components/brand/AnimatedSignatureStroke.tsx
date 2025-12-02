'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedSignatureStrokeProps {
  className?: string
  delay?: number
  once?: boolean
}

/**
 * Logo with stroke draw animation for hero / About page.
 * Animates from fully hidden to fully drawn using strokeDasharray/offset.
 */
export default function AnimatedSignatureStroke({
  className = '',
  delay = 0,
  once = true,
}: AnimatedSignatureStrokeProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
    }
  }, [])

  return (
    <motion.svg
      viewBox="0 0 449 526"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <g id="anu-sign">
        <motion.path
          ref={pathRef}
          id="Vector_20"
          d="M165.51,328.44c-6.84.4,24.01-59.95,26.26-64.59M191.76,263.85c.92-1.9,1.86-3.85,2.8-5.84M191.76,263.85c-6.63.27-12.92.52-18.73.77M191.76,263.85c14.52-.59,30.69-1.23,47.12-1.9M194.57,258.02c-7.34,2.23-14.61,4.45-21.54,6.6M194.57,258.02c16.36-4.97,33.13-9.99,47.56-14.48M194.57,258.02c59.09-112.31,80.8-280.21,47.56-14.48M242.12,243.53c-.99,5.86-2.07,11.98-3.24,18.42M242.12,243.53c25.94-8.08,53.29-15.76,75.95-31.15M238.88,261.96c17.35-.7,34.97-1.43,51.25-2.14M238.88,261.96c-5.13,28.16-11.09,56.17-17.31,84.11M221.57,346.07c30.4-20.54,50.18-55.43,68.56-86.26M221.57,346.07c-30.06,134.96-215.51-11.86-136.56-49.9M221.57,346.07c-38.96,26.33-145.63,9.02-136.56-49.9M85.02,296.17c27.97-13.48,58.4-22.35,88.02-31.55M85.02,296.17c5.68-36.91,64.18-30.56,88.02-31.55M318.08,212.38c-8.81,14.98-19.01,32.43-27.95,47.43M318.08,212.38c59.48-40.34,49.71-84.53,0,0ZM290.13,259.81c42.97-1.88,25.93-1.71,68.86-3.51"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            pathLength: {
              duration: 2.2,
              delay,
              ease: [0.22, 1, 0.36, 1], // ease-out
            },
            opacity: {
              duration: 0.3,
              delay,
            },
          }}
        />
      </g>
    </motion.svg>
  )
}

