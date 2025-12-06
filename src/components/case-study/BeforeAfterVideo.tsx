'use client'

import { useState, useEffect } from 'react'
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
  const [activeVideo, setActiveVideo] = useState<'before' | 'after' | 'both'>('both')
  const [beforePlaying, setBeforePlaying] = useState(false)
  const [afterPlaying, setAfterPlaying] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const t = getTheme(isLightBackground)

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

  const handleBeforePlay = () => {
    setBeforePlaying(true)
    if (activeVideo === 'after') {
      setActiveVideo('both')
    }
  }

  const handleAfterPlay = () => {
    setAfterPlaying(true)
    if (activeVideo === 'before') {
      setActiveVideo('both')
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className={`h-px flex-1 ${isLightBackground ? 'bg-[var(--accent-teal)]/20' : 'bg-[var(--accent-teal)]/30'}`}></div>
          <h2 className={`${t.text} text-3xl md:text-4xl font-serif`}>Transformation in Motion</h2>
          <div className={`h-px flex-1 ${isLightBackground ? 'bg-[var(--accent-teal)]/20' : 'bg-[var(--accent-teal)]/30'}`}></div>
        </div>
        <p className={`${t.textMuted} text-base md:text-lg leading-relaxed max-w-2xl mx-auto`}>
          Compare the old workflow with the new design side-by-side. These are actual video walkthroughs — the prototype walkthrough is created and narrated by me.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button onClick={() => setActiveVideo('before')} className={`px-6 py-2 rounded-lg border transition-all duration-300 ${activeVideo === 'before' ? `bg-[var(--accent-teal)]/20 border-[var(--accent-teal)]/50 ${t.text} font-semibold` : `${t.border} ${t.textMuted} hover:opacity-90`}`}>
          Before Only
        </button>
        <button onClick={() => setActiveVideo('both')} className={`px-6 py-2 rounded-lg border transition-all duration-300 ${activeVideo === 'both' ? `bg-[var(--accent-teal)]/20 border-[var(--accent-teal)]/50 ${t.text} font-semibold` : `${t.border} ${t.textMuted} hover:opacity-90`}`}>
          Side-by-Side
        </button>
        <button onClick={() => setActiveVideo('after')} className={`px-6 py-2 rounded-lg border transition-all duration-300 ${activeVideo === 'after' ? `bg-[var(--accent-teal)]/20 border-[var(--accent-teal)]/50 ${t.text} font-semibold` : `${t.border} ${t.textMuted} hover:opacity-90`}`}>
          After Only
        </button>
      </div>

      {/* Video Container */}
      <div
        className={`grid gap-6 ${activeVideo === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
          }`}
      >
        {(activeVideo === 'before' || activeVideo === 'both') && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></div>
              <h3 className={`${t.text} text-xl font-serif font-semibold`}>{before.title}</h3>
            </div>
            {before.description && <p className={`${t.textMuted} text-sm leading-relaxed`}>{before.description}</p>}
            <div
              className="relative w-full aspect-video rounded-xl border-2 border-red-500/30 bg-black overflow-hidden shadow-lg cursor-pointer group"
              onClick={(e) => handleVideoClick(e, true)}
            >
              {!isBeforeVideoPublic && !isUnlocked && (
                <>
                  {/* Plain black background - no poster image */}
                  <div className="absolute inset-0 bg-black group-hover:bg-black/90 transition-colors flex items-center justify-center z-10">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <p className={`${t.text} text-sm font-medium`}>Password Required</p>
                      <p className={`${t.textMuted} text-xs`}>Click to unlock video</p>
                    </div>
                  </div>
                </>
              )}
              {(isBeforeVideoPublic || isUnlocked) && (
                <>
                  {before.videoEmbedUrl ? (
                    <iframe
                      src={before.videoEmbedUrl}
                      className="absolute inset-0 w-full h-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={before.title}
                    />
                  ) : (
                    before.videoUrl && (
                      <CustomVideoPlayer
                        src={before.videoUrl}
                        className="rounded-xl"
                        onPlay={handleBeforePlay}
                      // No poster prop - don't show poster when unlocked
                      />
                    )
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {(activeVideo === 'after' || activeVideo === 'both') && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
              <h3 className={`${t.text} text-xl font-serif font-semibold`}>{after.title}</h3>
            </div>
            {after.description && <p className={`${t.textMuted} text-sm leading-relaxed`}>{after.description}</p>}
            <div
              className="relative w-full aspect-video rounded-xl border-2 border-[var(--accent-teal)] bg-gradient-to-br from-[var(--bg-dark-alt)] to-[var(--bg-dark)] overflow-hidden shadow-lg cursor-pointer group"
              onClick={(e) => handleVideoClick(e, false)}
            >
              {!isUnlocked && !isAfterVideoPublic && (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center z-10">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <p className={`${t.text} text-sm font-medium`}>Password Required</p>
                    <p className={`${t.textMuted} text-xs`}>Click to unlock video</p>
                  </div>
                </div>
              )}
              {(isUnlocked || isAfterVideoPublic) && (
                <CustomVideoPlayer
                  src={after.videoUrl}
                  className="rounded-xl"
                  onPlay={handleAfterPlay}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {comparisonNotes && (
        <div className={`${t.bg} rounded-xl p-6 border ${t.border} mt-8`}>
          <h4 className={`${t.text} font-semibold mb-3`}>Key Differences</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className={`${t.textMuted} text-sm font-medium`}>Before</span>
              </div>
              <ul className={`${t.textMuted} text-sm space-y-1 ml-4`}>
                {comparisonNotes.before.map((note, index) => (
                  <li key={index}>• {note}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)]"></div>
                <span className={`${t.textMuted} text-sm font-medium`}>After</span>
              </div>
              <ul className={`${t.textMuted} text-sm space-y-1 ml-4`}>
                {comparisonNotes.after.map((note, index) => (
                  <li key={index}>• {note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`${t.cardBg} rounded-2xl p-8 max-w-md w-full border ${t.border} shadow-2xl`}>
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent-teal)]/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className={`${t.text} text-2xl font-serif font-semibold`}>Unlock Videos</h3>
                <p className={`${t.textMuted} text-sm`}>Enter the password to view the actual video walkthroughs and unlock the full case study. The prototype walkthrough is created and narrated by me.</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleUnlock() }} className="space-y-4">
                <input type="password" value={passwordInput} onChange={(e) => { setPasswordInput(e.target.value); setPasswordError('') }} placeholder="Enter password" className={`w-full px-4 py-3 rounded-lg border ${t.border} ${t.bg} ${t.text} focus:outline-none focus:border-[var(--accent-teal)]/50 transition-colors`} autoFocus />
                {passwordError && <p className="text-red-400 text-sm">{passwordError}</p>}
                <div className="flex gap-3">
                  <button type="button" onClick={() => { setShowPasswordModal(false); setPasswordInput(''); setPasswordError('') }} className={`flex-1 px-4 py-3 rounded-lg border ${t.border} ${t.textMuted} hover:opacity-90 transition-opacity`}>Cancel</button>
                  <button type="submit" className="flex-1 px-4 py-3 rounded-lg bg-[var(--accent-teal)] text-white hover:bg-[var(--accent-teal)]/90 transition-colors font-medium">Unlock</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

