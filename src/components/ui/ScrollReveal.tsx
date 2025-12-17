'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

type AnimationVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur'

interface ScrollRevealProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number // in ms
  duration?: number // in ms
  threshold?: number // 0-1
  once?: boolean
  className?: string
  as?: 'div' | 'section' | 'article' | 'span'
}

const variantStyles: Record<AnimationVariant, { initial: string; visible: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'scale': {
    initial: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  'blur': {
    initial: 'opacity-0 blur-sm',
    visible: 'opacity-100 blur-0',
  },
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
  className = '',
  as: Component = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  const styles = variantStyles[variant]

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transform transition-all ease-out ${isVisible ? styles.visible : styles.initial} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  )
}

// Staggered children reveal
interface StaggerRevealProps {
  children: ReactNode[]
  staggerDelay?: number // delay between each child in ms
  variant?: AnimationVariant
  duration?: number
  threshold?: number
  className?: string
  childClassName?: string
}

export function StaggerReveal({
  children,
  staggerDelay = 100,
  variant = 'fade-up',
  duration = 600,
  threshold = 0.1,
  className = '',
  childClassName = '',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
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
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const styles = variantStyles[variant]

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transform transition-all ease-out ${isVisible ? styles.visible : styles.initial} ${childClassName}`}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

// Text character reveal (for headlines)
interface TextRevealProps {
  text: string
  className?: string
  charDelay?: number // delay between each character
  duration?: number
  threshold?: number
}

export function TextReveal({
  text,
  className = '',
  charDelay = 30,
  duration = 400,
  threshold = 0.2,
}: TextRevealProps) {
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
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transform transition-all ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * charDelay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode
  speed?: number // -1 to 1 (negative = opposite direction)
  className?: string
}

export function Parallax({
  children,
  speed = 0.2,
  className = '',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const distanceFromCenter = elementCenter - windowHeight / 2
      setOffset(distanceFromCenter * speed * -1)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}
