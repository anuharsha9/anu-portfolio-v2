'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ImageLightbox from './ImageLightbox'

interface WorkflowStep {
  number: number
  src: string
  alt: string
  caption: string
  description?: string
}

interface WorkflowPrototypeProps {
  title: string
  description?: string
  steps: WorkflowStep[]
  workflowType: 'train' | 'run'
  isLightBackground?: boolean
}

export default function WorkflowPrototype({
  title,
  description,
  steps,
  workflowType,
  isLightBackground = false,
}: WorkflowPrototypeProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null)

  const openLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxImage({ src, alt, caption })
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Fix invalid currentStep if needed
  useEffect(() => {
    if (steps && Array.isArray(steps) && steps.length > 0) {
      if (currentStep >= steps.length || currentStep < 0) {
        setCurrentStep(0)
      }
    }
  }, [currentStep, steps])

  const goToStep = (stepIndex: number) => {
    setCurrentStep(Math.max(0, Math.min(stepIndex, steps.length - 1)))
    if (isPlaying) {
      setIsPlaying(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const startAutoPlay = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    
    setIsPlaying(true)
    let stepIndex = currentStep
    
    intervalRef.current = setInterval(() => {
      stepIndex++
      if (stepIndex >= steps.length) {
        // Reached the end, stop and reset
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setIsPlaying(false)
        setCurrentStep(0)
      } else {
        setCurrentStep(stepIndex)
      }
    }, 3000) // 3 seconds per step
  }

  const stopAutoPlay = () => {
    setIsPlaying(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if workflow prototype is in view
      const workflowElement = document.querySelector('[data-workflow-prototype]')
      if (!workflowElement) return

      const rect = workflowElement.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0

      if (!isInView) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          if (currentStep > 0) {
            prevStep()
          }
          break
        case 'ArrowRight':
          e.preventDefault()
          if (currentStep < steps.length - 1) {
            nextStep()
          }
          break
        case 'Home':
          e.preventDefault()
          goToStep(0)
          break
        case 'End':
          e.preventDefault()
          goToStep(steps.length - 1)
          break
        case ' ': // Spacebar to play/pause
          e.preventDefault()
          if (isPlaying) {
            stopAutoPlay()
          } else {
            startAutoPlay()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, steps.length, isPlaying])

  // Safety check: ensure steps array is valid and not empty
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    console.warn('WorkflowPrototype: Invalid steps array', { steps, isArray: Array.isArray(steps), length: steps?.length })
    return (
      <div className="p-4 border border-red-500 rounded-lg">
        <p className="text-red-500 text-sm">Workflow prototype has no valid steps</p>
      </div>
    )
  }

  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const buttonBg = isLightBackground ? 'bg-black/10 hover:bg-black/20' : 'bg-white/10 hover:bg-white/20'
  const imageShadow = isLightBackground ? 'shadow-[0_4px_12px_rgba(0,0,0,0.15)]' : ''
  const imageOutline = isLightBackground
    ? 'outline outline-1 outline-black/5 outline-offset-[-1px]'
    : 'outline outline-1 outline-white/5 outline-offset-[-1px]'

  // Ensure currentStep is within bounds and get current step data
  const safeCurrentStep = Math.max(0, Math.min(currentStep, steps.length - 1))
  const currentStepData = steps[safeCurrentStep]
  
  // Safety check: ensure currentStepData exists
  if (!currentStepData) {
    return null
  }

  return (
    <div className="space-y-6" data-workflow-prototype>
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>
            {workflowType === 'train' ? 'Train Model' : 'Run Model'} Workflow
          </span>
          <div className={`h-px flex-1 ${isLightBackground ? 'bg-black/10' : 'bg-white/10'}`}></div>
        </div>
        <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>{title}</h3>
        {description && (
          <p className={`${mutedColor} text-base leading-relaxed max-w-3xl`}>{description}</p>
        )}
        <p className={`${mutedColor} text-xs mt-2`}>
          Keyboard shortcuts: ← → to navigate, Space to play/pause, Home/End to jump to first/last step
        </p>
      </div>

      {/* Interactive Prototype Container */}
      <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`} role="region" aria-label={`${workflowType === 'train' ? 'Train Model' : 'Run Model'} workflow prototype`}>
        {/* Step Counter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className={`${mutedColor} text-sm font-mono`}>
              Step {currentStep + 1} of {steps.length}
            </span>
            <div className={`h-2 flex-1 max-w-xs ${isLightBackground ? 'bg-black/10' : 'bg-white/10'} rounded-full overflow-hidden`}>
              <div
                className={`h-full bg-[var(--accent-teal)] transition-all duration-300 ease-in-out`}
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!isPlaying ? (
              <button
                onClick={startAutoPlay}
                aria-label="Start auto-play workflow"
                className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              >
                ▶ Auto-play
              </button>
            ) : (
              <button
                onClick={stopAutoPlay}
                aria-label="Pause auto-play workflow"
                className={`${buttonBg} ${textColor} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
              >
                ⏸ Pause
              </button>
            )}
          </div>
        </div>

        {/* Main Image Display */}
        <div className="relative mb-6">
          <div 
            className={`relative w-full rounded-[10px] overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer hover:opacity-90 transition-opacity`}
            onClick={() => openLightbox(currentStepData.src, currentStepData.alt, currentStepData.caption)}
          >
            <Image
              src={currentStepData.src}
              alt={currentStepData.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain bg-white/5"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority={currentStep === 0}
            />
          </div>

          {/* Step Info */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className={`${textColor} font-semibold`}>
                {currentStepData.number}. {currentStepData.caption}
              </span>
            </div>
            {currentStepData.description && (
              <p className={`${mutedColor} text-sm leading-relaxed`}>
                {currentStepData.description}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            aria-label="Go to previous step"
            className={`${buttonBg} ${textColor} px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`}
          >
            ← Previous
          </button>

          {/* Step Dots */}
          <div className="flex items-center gap-2 flex-1 justify-center max-w-md overflow-x-auto px-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep
                    ? isLightBackground
                      ? 'bg-[var(--accent-teal)] w-8'
                      : 'bg-[var(--accent-teal)] w-8'
                    : isLightBackground
                      ? 'bg-black/20 hover:bg-black/40'
                      : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            aria-label="Go to next step"
            className={`${buttonBg} ${textColor} px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`}
          >
            Next →
          </button>
        </div>

        {/* Step List (Collapsible) */}
        <details className="mt-6">
          <summary className={`${textColor} text-sm font-medium cursor-pointer list-none`}>
            View all steps ({steps.length})
          </summary>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`text-left p-3 rounded-lg border transition-all ${
                  index === currentStep
                    ? `${isLightBackground ? 'border-[var(--accent-teal)] bg-[var(--accent-teal)]/10' : 'border-[var(--accent-teal)] bg-[var(--accent-teal)]/10'}`
                    : `${borderColor} ${bgColor} hover:opacity-90`
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-mono ${index === currentStep ? 'text-[var(--accent-teal)]' : mutedColor}`}>
                    {step.number}
                  </span>
                  <span className={`text-xs ${index === currentStep ? textColor : mutedColor} font-medium`}>
                    {step.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </details>
      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          imageCaption={lightboxImage.caption}
        />
      )}
    </div>
  )
}

