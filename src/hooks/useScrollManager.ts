'use client'

import { useEffect, useRef, useCallback } from 'react'

type ScrollCallback = (scrollY: number, viewportHeight: number) => void

// Global scroll manager to consolidate all scroll listeners
class ScrollManager {
  protected callbacks = new Set<ScrollCallback>()
  protected ticking = false
  protected lastScrollY = 0
  protected viewportHeight = 0

  constructor() {
    if (typeof window !== 'undefined') {
      this.viewportHeight = window.innerHeight
      this.lastScrollY = window.scrollY
      this.handleScroll = this.handleScroll.bind(this)
      window.addEventListener('scroll', this.handleScroll, { passive: true })
      window.addEventListener('resize', this.handleResize.bind(this), { passive: true })
    }
  }

  private handleResize = () => {
    if (typeof window !== 'undefined') {
      this.viewportHeight = window.innerHeight
    }
  }

  private handleScroll = () => {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        if (typeof window !== 'undefined') {
          this.lastScrollY = window.scrollY
          this.callbacks.forEach((callback) => {
            callback(this.lastScrollY, this.viewportHeight)
          })
          this.ticking = false
        }
      })
      this.ticking = true
    }
  }

  subscribe(callback: ScrollCallback) {
    this.callbacks.add(callback)
    // Immediately call with current values
    if (typeof window !== 'undefined') {
      callback(this.lastScrollY, this.viewportHeight)
    }
    return () => this.unsubscribe(callback)
  }

  unsubscribe(callback: ScrollCallback) {
    this.callbacks.delete(callback)
  }

  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
    this.callbacks.clear()
  }
}

// Singleton instance
let scrollManagerInstance: ScrollManager | null = null

function getScrollManager(): ScrollManager {
  if (typeof window === 'undefined') {
    // Return a dummy manager for SSR - create a minimal instance
    class DummyScrollManager extends ScrollManager {
      constructor() {
        super()
      }
    }
    return new DummyScrollManager()
  }

  if (!scrollManagerInstance) {
    scrollManagerInstance = new ScrollManager()
  }
  return scrollManagerInstance
}

/**
 * Centralized scroll manager hook
 * Consolidates all scroll listeners into a single throttled handler
 */
export function useScrollManager(callback: ScrollCallback, deps: React.DependencyList = []) {
  const callbackRef = useRef(callback)
  const managerRef = useRef<ScrollManager | null>(null)

  // Update callback ref when it changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const manager = getScrollManager()
    managerRef.current = manager

    const wrappedCallback: ScrollCallback = (scrollY, viewportHeight) => {
      callbackRef.current(scrollY, viewportHeight)
    }

    const unsubscribe = manager.subscribe(wrappedCallback)

    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Only destroy if no more callbacks (last component unmounting)
      if (managerRef.current && managerRef.current['callbacks']?.size === 0) {
        managerRef.current.destroy()
        scrollManagerInstance = null
      }
    }
  }, [])
}

