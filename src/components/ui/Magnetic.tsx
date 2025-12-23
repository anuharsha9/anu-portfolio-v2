'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticProps {
    children: React.ReactNode
    className?: string
    strength?: number // How strong the pull is (higher = moves further)
}

export default function Magnetic({
    children,
    className = '',
    strength = 0.5
}: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 }

        // Calculate distance from center
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)

        // Apply strength factor
        setPosition({ x: middleX * strength, y: middleY * strength })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
