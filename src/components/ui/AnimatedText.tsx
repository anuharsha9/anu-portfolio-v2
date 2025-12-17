'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

// Gradient text with optional animation
interface GradientTextProps {
  children: ReactNode
  gradient?: string
  animate?: boolean
  className?: string
}

export function GradientText({
  children,
  gradient = 'from-slate-900 via-[var(--accent-teal)] to-slate-900',
  animate = false,
  className = '',
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${animate ? 'animate-gradient-x bg-[length:200%_auto]' : ''
        } ${className}`}
    >
      {children}
    </span>
  )
}

// Word-by-word reveal animation
interface WordRevealProps {
  text: string
  className?: string
  wordClassName?: string
  delay?: number // Base delay in ms
  stagger?: number // Delay between words in ms
  threshold?: number
}

export function WordReveal({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 80,
  threshold = 0.2,
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } ${wordClassName}`}
          style={{
            transitionDelay: `${delay + index * stagger}ms`,
          }}
        >
          {word}
          {index < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

// Letter hover effect - each letter reacts to hover
interface LetterHoverProps {
  text: string
  className?: string
  hoverClassName?: string
}

export function LetterHover({
  text,
  className = '',
  hoverClassName = 'text-[var(--accent-teal)]',
}: LetterHoverProps) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-200 hover:-translate-y-1 hover:${hoverClassName}`}
          style={{ transitionDelay: `${index * 10}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

// Typewriter effect
interface TypewriterProps {
  text: string
  className?: string
  speed?: number // ms per character
  delay?: number // initial delay
  cursor?: boolean
}

export function Typewriter({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const timeout = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          // Blink cursor a few times then hide
          if (cursor) {
            setTimeout(() => setShowCursor(false), 2000)
          }
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [hasStarted, text, speed, delay, cursor])

  return (
    <span ref={ref} className={className}>
      {displayText}
      {cursor && showCursor && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

// Highlight text on scroll
interface HighlightOnScrollProps {
  children: ReactNode
  highlightColor?: string
  className?: string
}

export function HighlightOnScroll({
  children,
  highlightColor = 'var(--accent-teal)',
  className = '',
}: HighlightOnScrollProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={`relative inline ${className}`}
    >
      <span
        className="absolute inset-0 -z-10 transition-transform duration-700 ease-out origin-left"
        style={{
          backgroundColor: `${highlightColor}20`,
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
      {children}
    </span>
  )
}

// Split text with staggered color change
interface ColorWaveProps {
  text: string
  baseColor?: string
  waveColor?: string
  className?: string
}

export function ColorWave({
  text,
  baseColor = 'inherit',
  waveColor = 'var(--accent-teal)',
  className = '',
}: ColorWaveProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-colors duration-300"
          style={{
            color: isVisible ? waveColor : baseColor,
            transitionDelay: `${index * 30}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
