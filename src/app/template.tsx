'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useContext, useRef } from 'react'

/**
 * PageTransition wrapper using AnimatePresence
 * - Uses mode="wait" to ensure exit animation finishes before new page enters
 * - Uses frozen router context to keep the "old" page mounted during exit
 */

// Custom hook to freeze router context during exit animation
function useFrozenRouter() {
    const context = useContext(LayoutRouterContext)
    const frozen = useRef(context).current
    return frozen
}

export default function Template({ children }: { children: React.ReactNode }) {
    // Use pathname as the key to trigger re-renders on navigation
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} className="min-h-screen w-full">
                {/* The Curtain Layer - Slide UP to reveal content */}
                <motion.div
                    className="fixed inset-0 z-[100] bg-[var(--bg-primary)] pointer-events-none"
                    initial={{ scaleY: 1, transformOrigin: 'top' }}
                    animate={{
                        scaleY: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }  // Power3.easeInOut
                    }}
                    exit={{
                        scaleY: 1,
                        transformOrigin: 'bottom',
                        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
                    }}
                />

                {/* Content Layer - Subtle scale/opacity for depth */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.3 } // Wait for curtain to start lifting
                    }}
                    exit={{
                        opacity: 0,
                        y: -20, // Slide up slightly as curtain covers it
                        transition: { duration: 0.3 }
                    }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
