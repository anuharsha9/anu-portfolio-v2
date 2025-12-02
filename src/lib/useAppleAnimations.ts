/**
 * Apple-like Animation Hooks
 * 
 * Utility hooks for consistent, elegant animations throughout the site
 */

import { useEffect, useRef, useState } from 'react'

/**
 * Hook to trigger animation when element enters viewport
 * Uses Intersection Observer for performance
 */
export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const { once, ...observerOptions } = options || {}

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Optionally disconnect after first trigger
          if (once !== false) {
            observer.disconnect()
          }
        }
      },
      {
        threshold: 0.2,
        ...observerOptions,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, isInView }
}

/**
 * Hook for staggered list animations
 */
export function useStaggeredAnimation(delay: number = 0.06) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const triggerItem = (index: number) => {
    setTimeout(() => {
      setVisibleItems((prev) => new Set([...prev, index]))
    }, index * delay * 1000)
  }

  const isVisible = (index: number) => visibleItems.has(index)

  return { triggerItem, isVisible }
}

