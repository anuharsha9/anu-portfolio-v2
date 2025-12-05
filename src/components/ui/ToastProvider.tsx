'use client'

import { createContext, useContext, ReactNode, useEffect, useState } from 'react'
import { useToast } from '@/hooks/useToast'
import { ToastContainer } from './Toast'

interface ToastContextType {
    success: (message: string, duration?: number) => string
    error: (message: string, duration?: number) => string
    info: (message: string, duration?: number) => string
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToastContext() {
    const context = useContext(ToastContext)
    // Provide safe fallback functions if context is not available (e.g., during SSR)
    if (!context) {
        if (typeof window !== 'undefined') {
            // Only throw error on client side if context is truly missing
            console.warn('useToastContext called outside ToastProvider')
        }
        return {
            success: () => '',
            error: () => '',
            info: () => '',
        }
    }
    return context
}

interface ToastProviderProps {
    children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
    const { toasts, removeToast, success, error, info } = useToast()
    const [isMounted, setIsMounted] = useState(false)

    // Prevent hydration mismatch by only rendering ToastContainer on client
    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <ToastContext.Provider value={{ success, error, info }}>
            {children}
            {isMounted && <ToastContainer toasts={toasts} onRemove={removeToast} />}
        </ToastContext.Provider>
    )
}

