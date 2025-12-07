'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import InsightBadge from '@/components/ui/InsightBadge'
import { useState, useEffect } from 'react'

/**
 * IQPluginSection - The "Locked" Teaser
 * Layout: Video Left, Text Right (alternating from ML Functions)
 * Strategy: Show the value, lock the link - NOT blur the whole card
 */

const metrics = [
  {
    value: '4→1',
    label: 'View',
    note: 'tools consolidated',
  },
  {
    value: 'Zero',
    label: 'Context Switch',
    note: 'seamless workflow',
  },
  {
    value: 'Global',
    label: 'Deployment',
    note: 'enterprise scale',
  },
  {
    value: '↑',
    label: 'Adoption Boost',
    note: 'measurable increase',
  },
]

export default function IQPluginSection() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageKey = 'case-study-unlocked-iq-plugin'
      setIsUnlocked(sessionStorage.getItem(storageKey) === 'true')

      // Listen for unlock events
      const handleUnlock = () => {
        setIsUnlocked(sessionStorage.getItem(storageKey) === 'true')
      }

      window.addEventListener('storage', handleUnlock)
      window.addEventListener('portfolio-unlocked', handleUnlock)

      return () => {
        window.removeEventListener('storage', handleUnlock)
        window.removeEventListener('portfolio-unlocked', handleUnlock)
      }
    }
  }, [])

  const handlePasswordSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    const trimmedPassword = password.trim().toLowerCase()
    const correctPassword = 'anu-access'

    if (trimmedPassword === correctPassword) {
      setError('')
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('case-study-unlocked-iq-plugin', 'true')
        setIsUnlocked(true)
        setPassword('')
        window.dispatchEvent(new CustomEvent('portfolio-unlocked'))
      }
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <section id="iq-plugin" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Feature Card - Visual Left, Text Right */}
          {/* Distinct bg-slate-100 with frosted glass border to show it's special */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-slate-100 to-white rounded-3xl border border-slate-300/50 p-6 md:p-10 lg:p-12 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-500 group relative overflow-hidden">
            
            {/* Frosted glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
            
            {/* Left - Visual with Lock Icon Overlay */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-200 border border-slate-300 order-1">
              <Image
                src="/images/case-study/iq-plugin/iq-cover.png"
                alt="IQ Plugin AI Insights Hub"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Lock Icon Overlay in corner - only show if NOT unlocked */}
              {!isUnlocked && (
                <div className="absolute top-3 right-3 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
              
              {/* Checkmark if unlocked */}
              {isUnlocked && (
                <div className="absolute top-3 right-3 w-10 h-10 bg-[#0BA2B5] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-2 relative z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-wider font-semibold">
                  AI Insights Hub
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <InsightBadge variant="subtle" size="sm">
                  Data Science
                </InsightBadge>
                <InsightBadge variant="subtle" size="sm">
                  Browser Extension
                </InsightBadge>
                <InsightBadge variant="subtle" size="sm">
                  NLQ / DSML
                </InsightBadge>
              </div>

              {/* Title */}
              <h3 className="font-serif text-slate-900 text-3xl md:text-4xl leading-tight">
                IQ Plugin
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Consolidated 4 disparate data science tools into a single browser extension. Zero context switching, instant discoverability from the Hub.
              </p>

              {/* Metrics Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-white/80 border border-slate-200 rounded-lg p-3 hover:border-[#0BA2B5]/30 transition-colors duration-300"
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-[#0BA2B5] text-lg md:text-xl font-bold leading-none">
                        {metric.value}
                      </span>
                      <span className="text-slate-700 text-xs font-medium">
                        {metric.label}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">
                      {metric.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA - Request Access or View Case Study */}
              {isUnlocked ? (
                <a
                  href="/work/iq-plugin"
                  className="inline-flex items-center gap-2 text-[#0BA2B5] font-medium hover:text-[#0990A2] transition-colors duration-300 group/link"
                >
                  <span>View Case Study</span>
                  <svg 
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <div className="space-y-3">
                  <p className="text-slate-500 text-sm">
                    This case study contains confidential information.
                  </p>
                  <form onSubmit={handlePasswordSubmit} className="flex items-center gap-2">
                    <div className="relative flex-1 max-w-xs">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          setError('')
                        }}
                        placeholder="Enter password"
                        className="w-full px-4 py-2.5 pr-10 rounded-full border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0BA2B5] focus:border-transparent placeholder:text-slate-400 text-sm"
                      />
                      <svg 
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-[#0BA2B5] text-white rounded-full font-medium text-sm hover:bg-[#0990A2] transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>Request Access</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </form>
                  {error && (
                    <p className="text-red-500 text-xs">{error}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

