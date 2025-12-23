'use client'

import React, { useState, useEffect } from 'react'

export default function SystemStatus() {
    const [time, setTime] = useState('')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const updateTime = () => {
            const austinTime = new Date().toLocaleTimeString('en-US', {
                timeZone: 'America/Chicago',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })
            setTime(austinTime)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex items-center gap-4 text-xs font-mono tracking-wider opacity-60">
            {/* Location & Time */}
            <div className="flex items-center gap-2">
                <span className="uppercase">Austin, TX</span>
                <span className="text-[var(--accent-teal)]">•</span>
                <span>{time}</span>
            </div>

            <div className="w-px h-3 bg-current opacity-20 hidden sm:block" />

            {/* System Status Indicator */}
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="uppercase">System Online</span>
            </div>
        </div>
    )
}
