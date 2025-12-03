'use client'

import { useState, useEffect } from 'react'
import CustomVideoPlayer from '@/components/video/CustomVideoPlayer'

interface MultiBeforeAfterVideoProps {
  before: {
    title: string
    videos: {
      title: string
      videoUrl: string
      videoPoster?: string
      description?: string
    }[]
  }
  after: {
    title: string
    videoUrl: string
    videoPoster?: string
    description?: string
  }
  isLightBackground?: boolean
  comparisonNotes?: {
    before: string[]
    after: string[]
  }
  password?: string
  caseStudySlug?: string
}

export default function MultiBeforeAfterVideo({
  before,
  after,
  isLightBackground = false,
  comparisonNotes,
  password = 'anu-access',
  caseStudySlug = 'default',
}: MultiBeforeAfterVideoProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Check if case study is already unlocked
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageKey = `case-study-unlocked-${caseStudySlug}`
      const unlocked = sessionStorage.getItem(storageKey) === 'true'
      setIsUnlocked(unlocked)
    }
  }, [caseStudySlug])

  const handleUnlock = () => {
    const trimmedPassword = passwordInput.trim().toLowerCase()
    const correctPassword = password.toLowerCase()
    
    if (trimmedPassword === correctPassword) {
      setPasswordError('')
      // Unlock the entire case study
      if (typeof window !== 'undefined') {
        const storageKey = `case-study-unlocked-${caseStudySlug}`
        sessionStorage.setItem(storageKey, 'true')
        setIsUnlocked(true)
        setShowPasswordModal(false)
        // Dispatch custom event to notify parent components
        window.dispatchEvent(new CustomEvent('case-study-unlocked', { detail: { slug: caseStudySlug } }))
      }
    } else {
      setPasswordError('Incorrect password. Please try again.')
    }
  }

  const handleVideoClick = (e: React.MouseEvent) => {
    if (!isUnlocked) {
      e.preventDefault()
      e.stopPropagation()
      setShowPasswordModal(true)
    }
  }

  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className={`h-px flex-1 ${isLightBackground ? 'bg-[var(--accent-teal)]/20' : 'bg-[var(--accent-teal)]/30'}`}></div>
          <h2 className={`${textColor} text-3xl md:text-4xl font-serif`}>
            Transformation in Motion
          </h2>
          <div className={`h-px flex-1 ${isLightBackground ? 'bg-[var(--accent-teal)]/20' : 'bg-[var(--accent-teal)]/30'}`}></div>
        </div>
        <p className={`${mutedColor} text-base md:text-lg leading-relaxed max-w-2xl mx-auto`}>
          Compare the fragmented workflows with the new unified design. These are actual video walkthroughs — the prototype walkthrough is created and narrated by me.
        </p>
      </div>

      {/* Video Container - 3 Old vs 1 New */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before - Multiple Fragmented Workflows */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></div>
            <h3 className={`${textColor} text-xl font-serif font-semibold`}>{before.title}</h3>
          </div>
          <div className="space-y-4">
            {before.videos.map((video, index) => (
              <div key={index} className="space-y-2">
                <h4 className={`${textColor} text-sm font-medium`}>{video.title}</h4>
                {video.description && (
                  <p className={`${mutedColor} text-xs leading-relaxed`}>{video.description}</p>
                )}
                <div 
                  className="relative w-full aspect-video rounded-lg border-2 border-red-500/30 bg-gradient-to-br from-[var(--bg-dark-alt)] to-[var(--bg-dark)] overflow-hidden shadow-lg cursor-pointer group"
                  onClick={handleVideoClick}
                >
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center z-10">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-6 h-6 text-white"
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
                        <p className={`${textColor} text-xs font-medium`}>Password Required</p>
                        <p className={`${mutedColor} text-[10px]`}>Click to unlock video</p>
                      </div>
                    </div>
                  )}
                  {isUnlocked && (
                    <CustomVideoPlayer
                      src={video.videoUrl}
                      className="rounded-lg"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After - Unified Workflow */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
            <h3 className={`${textColor} text-xl font-serif font-semibold`}>{after.title}</h3>
          </div>
          {after.description && (
            <p className={`${mutedColor} text-sm leading-relaxed`}>{after.description}</p>
          )}
          <div 
            className="relative w-full aspect-video rounded-xl border-2 border-[var(--accent-teal)] bg-gradient-to-br from-[var(--bg-dark-alt)] to-[var(--bg-dark)] overflow-hidden shadow-lg cursor-pointer group"
            onClick={handleVideoClick}
          >
            {!isUnlocked && (
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
                  <p className={`${textColor} text-sm font-medium`}>Password Required</p>
                  <p className={`${mutedColor} text-xs`}>Click to unlock video</p>
                </div>
              </div>
            )}
            {isUnlocked && (
              <CustomVideoPlayer
                src={after.videoUrl}
                className="rounded-xl"
              />
            )}
          </div>
        </div>
      </div>

      {/* Comparison Notes - Optional */}
      {comparisonNotes && (
        <div className={`${bgColor} rounded-xl p-6 border ${borderColor} mt-8`}>
          <h4 className={`${textColor} font-semibold mb-3`}>Key Differences</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className={`${mutedColor} text-sm font-medium`}>Before</span>
              </div>
              <ul className={`${mutedColor} text-sm space-y-1 ml-4`}>
                {comparisonNotes.before.map((note, index) => (
                  <li key={index}>• {note}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)]"></div>
                <span className={`${mutedColor} text-sm font-medium`}>After</span>
              </div>
              <ul className={`${mutedColor} text-sm space-y-1 ml-4`}>
                {comparisonNotes.after.map((note, index) => (
                  <li key={index}>• {note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`${isLightBackground ? 'bg-white' : 'bg-[var(--bg-dark)]'} rounded-2xl p-8 max-w-md w-full border ${isLightBackground ? 'border-black/10' : 'border-white/10'} shadow-2xl`}>
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent-teal)]/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-[var(--accent-teal)]"
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
                <h3 className={`${textColor} text-2xl font-serif font-semibold`}>Unlock Videos</h3>
                <p className={`${mutedColor} text-sm`}>
                  Enter the password to view the actual video walkthroughs and unlock the full case study. The prototype walkthrough is created and narrated by me.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleUnlock()
                }}
                className="space-y-4"
              >
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value)
                    setPasswordError('')
                  }}
                  placeholder="Enter password"
                  className={`w-full px-4 py-3 rounded-lg border ${isLightBackground ? 'border-black/20 bg-black/5' : 'border-white/20 bg-white/5'} ${textColor} placeholder:${mutedColor} focus:outline-none focus:border-[var(--accent-teal)]/50 transition-colors`}
                  autoFocus
                />
                {passwordError && (
                  <p className="text-red-400 text-sm">{passwordError}</p>
                )}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPasswordModal(false)
                      setPasswordInput('')
                      setPasswordError('')
                    }}
                    className={`flex-1 px-4 py-3 rounded-lg border ${borderColor} ${mutedColor} hover:opacity-90 transition-opacity`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 rounded-lg bg-[var(--accent-teal)] text-white hover:bg-[var(--accent-teal)]/90 transition-colors font-medium"
                  >
                    Unlock
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

