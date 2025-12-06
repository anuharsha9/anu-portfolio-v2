'use client'

import { useState, useEffect, useCallback } from 'react'

/**
 * Hydration-safe hook for sessionStorage access
 * Prevents hydration mismatches by always starting with initialValue on server
 * and only reading from sessionStorage after mount
 * 
 * @param key - The sessionStorage key
 * @param initialValue - Default value (used on server and before hydration)
 * @returns [value, setValue, isLoaded] - Current value, setter function, and whether storage has been loaded
 */
export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  // Always start with initialValue to prevent hydration mismatch
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [isLoaded, setIsLoaded] = useState(false)

  // Read from sessionStorage after mount (client-side only)
  useEffect(() => {
    try {
      const item = sessionStorage.getItem(key)
      if (item !== null) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      // sessionStorage not available or JSON parse error
      console.warn(`Error reading sessionStorage key "${key}":`, error)
    }
    setIsLoaded(true)
  }, [key])

  // Setter that updates both state and sessionStorage
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        // Allow value to be a function (like useState)
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)

        if (typeof window !== 'undefined') {
          sessionStorage.setItem(key, JSON.stringify(valueToStore))
        }
      } catch (error) {
        console.warn(`Error setting sessionStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  return [storedValue, setValue, isLoaded]
}

/**
 * Simple boolean version for common unlock/toggle patterns
 * @param key - The sessionStorage key
 * @param initialValue - Default boolean value
 */
export function useSessionStorageBoolean(
  key: string,
  initialValue: boolean = false
): [boolean, (value: boolean) => void, boolean] {
  const [value, setValue, isLoaded] = useSessionStorage<boolean>(key, initialValue)
  return [value, setValue, isLoaded]
}

/**
 * Hook specifically for case study unlock status
 * Handles both global and case-specific unlock keys
 */
export function useCaseStudyUnlock(caseStudySlug: string): {
  isUnlocked: boolean
  setUnlocked: (unlocked: boolean, global?: boolean) => void
  isLoaded: boolean
} {
  const globalKey = 'portfolio-globally-unlocked'
  const caseKey = `case-study-unlocked-${caseStudySlug}`

  const [globalUnlocked, setGlobalUnlocked, globalLoaded] = useSessionStorageBoolean(globalKey, false)
  const [caseUnlocked, setCaseUnlocked, caseLoaded] = useSessionStorageBoolean(caseKey, false)

  // IQ Plugin doesn't respect global unlock
  const isUnlocked = caseStudySlug === 'iq-plugin'
    ? caseUnlocked
    : (globalUnlocked || caseUnlocked)

  const setUnlocked = useCallback((unlocked: boolean, global: boolean = false) => {
    setCaseUnlocked(unlocked)
    if (global && caseStudySlug !== 'iq-plugin') {
      setGlobalUnlocked(unlocked)
    }
  }, [caseStudySlug, setCaseUnlocked, setGlobalUnlocked])

  return {
    isUnlocked,
    setUnlocked,
    isLoaded: globalLoaded && caseLoaded
  }
}
