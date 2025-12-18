'use client'

import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const ringPosition = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })
  const animationFrame = useRef<number | null>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const [isClicking, setIsClicking] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    // Only enable on desktop with fine pointer (mouse)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const hasFineMouse = window.matchMedia('(pointer: fine)').matches

    if (isTouchDevice || !hasFineMouse) {
      setIsEnabled(false)
      return
    }

    setIsEnabled(true)

    // Animate ring to follow with smooth easing
    const animateRing = () => {
      const ease = 0.15 // Lower = slower/smoother trailing
      ringPosition.current.x += (targetPosition.current.x - ringPosition.current.x) * ease
      ringPosition.current.y += (targetPosition.current.y - ringPosition.current.y) * ease

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosition.current.x - 16}px, ${ringPosition.current.y - 16}px)`
      }

      animationFrame.current = requestAnimationFrame(animateRing)
    }

    animationFrame.current = requestAnimationFrame(animateRing)

    // Update cursor position
    const updatePosition = (e: MouseEvent) => {
      // Dot moves instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      }

      // Ring follows with animation (update target)
      targetPosition.current = { x: e.clientX, y: e.clientY }

      setIsHidden(false)

      // Check what element is under cursor
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      if (hoveredElement) {
        const isClickable =
          hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.closest('a') ||
          hoveredElement.closest('button') ||
          (hoveredElement as HTMLElement).style.cursor === 'pointer'
        setIsPointer(!!isClickable)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener('mousemove', updatePosition, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  // Don't render anything until we know if cursor should be enabled
  if (!isEnabled) {
    return null
  }

  // Calculate scale based on state
  const dotScale = isClicking ? 0.7 : isPointer ? 1.3 : 1
  const ringScale = isClicking ? 0.8 : isPointer ? 1.5 : 1

  return (
    <>
      {/* Hide default cursor via CSS */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Custom cursor dot - instant movement */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none will-change-transform"
        style={{
          opacity: isHidden ? 0 : 1,
          transition: 'opacity 0.15s ease',
        }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: isPointer ? 'var(--accent-teal)' : 'var(--text-heading)',
            transform: `scale(${dotScale})`,
            transition: 'transform 0.15s ease, background-color 0.15s ease',
          }}
        />
      </div>

      {/* Cursor ring - smooth trailing animation */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none will-change-transform"
        style={{
          opacity: isHidden ? 0 : 0.5,
          transition: 'opacity 0.15s ease',
        }}
      >
        <div
          className="w-8 h-8 rounded-full border-2"
          style={{
            borderColor: isPointer ? 'var(--accent-teal)' : 'var(--text-muted)',
            transform: `scale(${ringScale})`,
            transition: 'transform 0.2s ease, border-color 0.15s ease',
          }}
        />
      </div>
    </>
  )
}
