'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2 } from 'lucide-react'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'
import { getTheme } from '@/lib/design-system'

interface BeforeAfterVideoProps {
  before: { title: string; videoUrl?: string; videoEmbedUrl?: string; videoPoster?: string; description?: string }
  after: { title: string; videoUrl: string; videoPoster?: string; description?: string; isPublic?: boolean }
  isLightBackground?: boolean
  comparisonNotes?: { before: string[]; after: string[] }
  password?: string
  caseStudySlug?: string
}

export default function BeforeAfterVideo({ before, after, isLightBackground = false, comparisonNotes, password = 'anu-access', caseStudySlug = 'default' }: BeforeAfterVideoProps) {
  const t = getTheme(true)
  const [activeVideo, setActiveVideo] = useState<'before' | 'after' | 'both'>('both')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageKey = `case-study-unlocked-${caseStudySlug}`
      const caseUnlocked = sessionStorage.getItem(storageKey) === 'true'

      if (caseStudySlug === 'iq-plugin') {
        setIsUnlocked(caseUnlocked)
      } else {
        const globalUnlocked = sessionStorage.getItem('portfolio-globally-unlocked') === 'true'
        setIsUnlocked(globalUnlocked || caseUnlocked)
      }
    }
  }, [caseStudySlug])

  const handleUnlock = () => {
    const trimmedPassword = passwordInput.trim().toLowerCase()
    const correctPassword = password.toLowerCase()

    if (trimmedPassword === correctPassword) {
      setPasswordError('')
      if (typeof window !== 'undefined') {
        const storageKey = `case-study-unlocked-${caseStudySlug}`

        if (caseStudySlug === 'iq-plugin') {
          sessionStorage.setItem(storageKey, 'true')
        } else {
          sessionStorage.setItem('portfolio-globally-unlocked', 'true')
          sessionStorage.setItem(storageKey, 'true')
        }

        setIsUnlocked(true)
        setShowPasswordModal(false)
        window.dispatchEvent(new CustomEvent('case-study-unlocked', { detail: { slug: caseStudySlug } }))
      }
    } else {
      setPasswordError('Incorrect password. Please try again.')
    }
  }

  const isBeforeVideoPublic = !!before.videoEmbedUrl
  const isAfterVideoPublic = !!after.isPublic

  const handleVideoClick = (e: React.MouseEvent, isBefore: boolean) => {
    if (isBefore && isBeforeVideoPublic) return
    if (!isBefore && isAfterVideoPublic) return
    if (!isUnlocked) {
      e.preventDefault()
      e.stopPropagation()
      setShowPasswordModal(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`${t.monitor.bg} py-section-mobile md:py-section-tablet lg:py-section-desktop -mx-4 xs:-mx-5 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16`}
    >
      <div className="max-w-[1440px] mx-auto space-y-space-10">
        {/* ============================================
            HEADER (The Hook)
            ============================================ */}
        <div className="text-center space-y-space-6">
          {/* Audio Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`inline-flex items-center gap-space-2 bg-blue-600/20 text-blue-400 border border-[var(--accent-teal)]/50 rounded-full px-space-4 py-space-1.5`}
          >
            <Volume2 className="w-4 h-4" />
            <span className="text-sm font-medium">Sound On · Director&apos;s Commentary</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white text-4xl md:text-5xl font-serif"
          >
            The Transformation
          </motion.h2>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`${t.monitor.textMuted} text-base md:text-lg leading-relaxed max-w-2xl mx-auto`}
          >
            Narrated walkthrough of the Legacy friction vs. the Modern unified workflow.
          </motion.p>

          {/* Pro Video Control Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`inline-flex ${t.monitor.bgAlt} border ${t.monitor.border} rounded-lg p-space-1`}
          >
            <button
              onClick={() => setActiveVideo('before')}
              className={`px-space-5 py-space-2 rounded-md text-sm font-medium transition-all duration-200 ${activeVideo === 'before'
                ? `${t.monitor.bgSurface} ${t.monitor.text} shadow-lg`
                : `${t.monitor.textDim} hover:${t.monitor.text}`
                }`}
            >
              Before
            </button>
            <button
              onClick={() => setActiveVideo('both')}
              className={`px-space-5 py-space-2 rounded-md text-sm font-medium transition-all duration-200 ${activeVideo === 'both'
                ? `${t.monitor.bgSurface} ${t.monitor.text} shadow-lg`
                : `${t.monitor.textDim} hover:${t.monitor.text}`
                }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveVideo('after')}
              className={`px-space-5 py-space-2 rounded-md text-sm font-medium transition-all duration-200 ${activeVideo === 'after'
                ? `${t.monitor.bgSurface} ${t.monitor.text} shadow-lg`
                : `${t.monitor.textDim} hover:${t.monitor.text}`
                }`}
            >
              After
            </button>
          </motion.div>
        </div>

        {/* ============================================
            VIDEO STAGE (The Monitors)
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`${t.monitor.bgSurface} rounded-2xl p-space-4 md:p-space-6 lg:p-space-8 border ${t.monitor.border}`}
        >
          <div
            className={`grid gap-space-6 ${activeVideo === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'
              }`}
          >
            {/* BEFORE Video */}
            {(activeVideo === 'before' || activeVideo === 'both') && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse flex-shrink-0"></div>
                  <h3 className="text-white text-lg font-serif font-semibold">{before.title}</h3>
                </div>
                {before.description && (
                  <p className={`${t.monitor.textMuted} text-sm leading-relaxed`}>{before.description}</p>
                )}
                <div
                  className={`relative w-full aspect-video rounded-lg border-4 ${t.monitor.border} overflow-hidden shadow-2xl shadow-red-900/20 cursor-pointer group`}
                  onClick={(e) => handleVideoClick(e, true)}
                >
                  {!isBeforeVideoPublic && !isUnlocked ? (
                    /* Locked State */
                    <div className={`absolute inset-0 ${t.monitor.bgAlt}`}>
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(45deg, var(--border-monitor) 25%, transparent 25%),
                            linear-gradient(-45deg, var(--border-monitor) 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, var(--border-monitor) 75%),
                            linear-gradient(-45deg, transparent 75%, var(--border-monitor) 75%)
                          `,
                          backgroundSize: '20px 20px',
                          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <div className={`w-16 h-16 mx-auto rounded-full ${t.monitor.bgAlt} border ${t.monitor.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <svg aria-hidden="true" className={`w-8 h-8 ${t.monitor.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <p className={`${t.monitor.text} text-sm font-medium`}>Password Required</p>
                          <p className={`${t.monitor.textDim} text-xs`}>Click to unlock legacy workflow</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {before.videoEmbedUrl ? (
                        <iframe
                          src={before.videoEmbedUrl}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={before.title}
                        />
                      ) : (
                        before.videoUrl && (
                          <CustomVideoPlayer src={before.videoUrl} className="rounded-none" />
                        )
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* AFTER Video */}
            {(activeVideo === 'after' || activeVideo === 'both') && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[var(--accent-teal)] animate-pulse flex-shrink-0"></div>
                  <h3 className="text-white text-lg font-serif font-semibold">{after.title}</h3>
                </div>
                {after.description && (
                  <p className="text-slate-400 text-sm leading-relaxed">{after.description}</p>
                )}
                <div
                  className={`relative w-full aspect-video rounded-lg border-4 ${t.monitor.border} overflow-hidden shadow-2xl shadow-blue-900/20 cursor-pointer group`}
                  onClick={(e) => handleVideoClick(e, false)}
                >
                  {!isUnlocked && !isAfterVideoPublic ? (
                    <div className={`absolute inset-0 ${t.monitor.bgAlt} flex items-center justify-center`}>
                      <div className="text-center space-y-3">
                        <div className={`w-16 h-16 mx-auto rounded-full ${t.bgAccent} border ${t.borderAccent} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <svg aria-hidden="true" className={`w-8 h-8 ${t.textAccent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <p className={`${t.monitor.text} text-sm font-medium`}>Password Required</p>
                        <p className={`${t.monitor.textDim} text-xs`}>Click to unlock redesigned workflow</p>
                      </div>
                    </div>
                  ) : (
                    <CustomVideoPlayer src={after.videoUrl} className="rounded-none" />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ============================================
              KEY DIFFERENCES (Dark Theme Specs)
              ============================================ */}
          {comparisonNotes && (
            <div className={`mt-space-8 pt-space-8 border-t ${t.monitor.border}`}>
              <h4 className={`${t.monitor.text} font-serif text-lg font-semibold mb-space-6 text-center`}>
                Key Differences
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6">
                {/* Before Column */}
                <div className={`${t.monitor.bgAlt} rounded-xl p-space-5 border ${t.monitor.border}`}>
                  <div className="flex items-center gap-space-2 mb-space-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <span className="text-red-400 text-xs font-mono uppercase tracking-widest font-semibold">
                      Before
                    </span>
                  </div>
                  <ul className={`${t.monitor.text} text-sm space-y-space-2.5`}>
                    {comparisonNotes.before.map((note, index) => (
                      <li key={index} className="flex items-start gap-space-2">
                        <span className="text-red-400 mt-0.5 font-bold">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After Column */}
                <div className={`${t.monitor.bgAlt} rounded-xl p-space-5 border ${t.monitor.border}`}>
                  <div className="flex items-center gap-space-2 mb-space-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest font-semibold">
                      After
                    </span>
                  </div>
                  <ul className={`${t.monitor.text} text-sm space-y-space-2.5`}>
                    {comparisonNotes.after.map((note, index) => (
                      <li key={index} className="flex items-start gap-space-2">
                        <span className="text-emerald-400 mt-0.5 font-bold">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* ============================================
          PASSWORD MODAL
          ============================================ */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`${t.monitor.bgAlt} rounded-2xl p-8 max-w-md w-full border ${t.monitor.border} shadow-2xl`}
          >
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className={`w-16 h-16 mx-auto rounded-full ${t.bgAccent} flex items-center justify-center mb-4`}>
                  <svg aria-hidden="true" className={`w-8 h-8 ${t.textAccent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className={`${t.monitor.text} text-2xl font-serif font-semibold`}>Unlock Videos</h3>
                <p className={`${t.monitor.textMuted} text-sm`}>
                  Enter the password to view the actual video walkthroughs.
                </p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleUnlock() }} className="space-y-4">
                <label htmlFor="video-password-input" className="sr-only">Password</label>
                <input
                  id="video-password-input"
                  type="password"
                  value={passwordInput}
                  onChange={(e) => { setPasswordInput(e.target.value); setPasswordError('') }}
                  placeholder="Enter password"
                  aria-label="Enter password to unlock video"
                  className={`w-full px-4 py-3 rounded-lg border ${t.monitor.border} ${t.monitor.bgSurface} ${t.monitor.text} placeholder:${t.monitor.textDim} focus:outline-none focus:border-[var(--accent-teal)]/50 focus:ring-2 focus:ring-[var(--accent-teal)]/20 transition-all`}
                  autoFocus
                />
                {passwordError && <p role="alert" className="text-red-400 text-sm">{passwordError}</p>}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => { setShowPasswordModal(false); setPasswordInput(''); setPasswordError('') }}
                    className={`flex-1 px-4 py-3 rounded-lg border ${t.monitor.border} ${t.monitor.textMuted} hover:${t.monitor.bgAlt} transition-colors`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 px-4 py-3 rounded-lg ${t.textAccent === 'text-[var(--accent-teal)]' ? 'bg-[var(--accent-teal)]' : 'bg-slate-700'} text-white hover:opacity-90 transition-colors font-medium`}
                  >
                    Unlock
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
