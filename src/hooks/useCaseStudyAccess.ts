'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseCaseStudyAccessProps {
    slug: string
    passwordGate?: {
        password?: string
    }
}

interface UseCaseStudyAccessReturn {
    isUnlocked: boolean
    unlock: () => void
    validatePassword: (password: string) => boolean
    shouldRedirectToPrototype: boolean
    clearRedirectFlag: () => void
    isGloballyUnlocked: boolean
}

export function useCaseStudyAccess({ slug, passwordGate }: UseCaseStudyAccessProps): UseCaseStudyAccessReturn {
    const [isUnlocked, setIsUnlocked] = useState(true)
    const [isGloballyUnlocked, setIsGloballyUnlocked] = useState(false)
    const [shouldRedirectToPrototype, setShouldRedirectToPrototype] = useState(false)

    // Environment variable for password (fallback to 'anu-access' if not set)
    // note: NEXT_PUBLIC_ variables are exposed to the browser
    const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD || 'anu-access'

    // Initialize state
    useEffect(() => {
        if (!passwordGate) {
            setIsUnlocked(true)
            return
        }

        // IQ Plugin is special: always starts locked, ignores global unlock initially (per original logic)
        if (slug === 'iq-plugin') {
            setIsUnlocked(false)
        } else {
            // Others: check session storage immediately
            if (typeof window !== 'undefined') {
                try {
                    const storageKey = `case-study-unlocked-${slug}`
                    const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'
                    const globalUnlocked = sessionStorage.getItem('portfolio-globally-unlocked') === 'true'
                    setIsUnlocked(globalUnlocked || caseUnlocked)
                } catch (e) {
                    setIsUnlocked(false)
                }
            }
        }
    }, [slug, passwordGate])

    // Monitor unlock status (including from other tabs/global unlock)
    useEffect(() => {
        if (typeof window === 'undefined') return

        const checkStatus = () => {
            // Update global unlock status
            const globalUnlocked = sessionStorage.getItem('portfolio-globally-unlocked') === 'true'
            setIsGloballyUnlocked(globalUnlocked)

            // If no password gate, we are done
            if (!passwordGate) {
                setIsUnlocked(true)
                return
            }

            const storageKey = `case-study-unlocked-${slug}`
            const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'

            // IQ Plugin logic specific override
            if (slug === 'iq-plugin') {
                // IQ plugin only cares about its own key for the main "isUnlocked" state initially?
                // Original logic: setShowPasswordContent(caseUnlocked)
                if (caseUnlocked) setIsUnlocked(true)
            } else {
                // Others respect global
                if (globalUnlocked || caseUnlocked) setIsUnlocked(true)
            }
        }

        // Check immediately
        checkStatus()

        // Listen for events
        const handleStorageChange = () => checkStatus()
        window.addEventListener('storage', handleStorageChange)
        window.addEventListener('portfolio-unlocked', handleStorageChange)

        // Poll for safety (some browsers don't fire storage events on same page)
        const interval = setInterval(checkStatus, 2000)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('portfolio-unlocked', handleStorageChange)
            clearInterval(interval)
        }
    }, [slug, passwordGate])

    // Check for redirect flag
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const redirect = sessionStorage.getItem(`redirect-to-prototype-${slug}`) === 'true'
            setShouldRedirectToPrototype(redirect)
        }
    }, [slug])

    const unlock = useCallback(() => {
        if (typeof window === 'undefined') return

        const storageKey = `case-study-unlocked-${slug}`

        // IQ Plugin specific: only sets its own key
        if (slug === 'iq-plugin') {
            sessionStorage.setItem(storageKey, 'true')
        } else {
            // Others set global unlock too
            sessionStorage.setItem('portfolio-globally-unlocked', 'true')
            sessionStorage.setItem(storageKey, 'true')
        }

        // Trigger event for other components
        window.dispatchEvent(new Event('portfolio-unlocked'))
        setIsUnlocked(true)
    }, [slug])

    const validatePassword = useCallback((inputPassword: string): boolean => {
        const trimmedInput = inputPassword.trim().toLowerCase()
        // Use the prop password if strictly defined, otherwise env/default
        // The original code used `data.passwordGate.password` if available, else 'anu-access'
        // But then consistent logic used 'anu-access' for ML/RC
        // We'll standardize: try specific password first, then common logic
        const specificPassword = passwordGate?.password ? passwordGate.password.toLowerCase() : CORRECT_PASSWORD.toLowerCase()

        // For IQ Plugin, the original code checked `passwordGate?.password || 'anu-access'`
        // For ML/RC, it checked hardcoded 'anu-access'
        // We can unify this by saying: if passwordGate provide a password, use it. Else use env.

        // However, to match original behavior strictly:
        // IQ Plugin used: `data.passwordGate?.password || 'anu-access'`
        // ML/RC used: `'anu-access'`

        // We will use the valid password source
        const targetPassword = passwordGate?.password || CORRECT_PASSWORD

        if (trimmedInput === targetPassword.toLowerCase()) {
            return true
        }
        return false
    }, [passwordGate, CORRECT_PASSWORD])

    const clearRedirectFlag = useCallback(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(`redirect-to-prototype-${slug}`)
            setShouldRedirectToPrototype(false)
        }
    }, [slug])

    return {
        isUnlocked,
        unlock,
        validatePassword,
        shouldRedirectToPrototype,
        clearRedirectFlag,
        isGloballyUnlocked
    }
}
