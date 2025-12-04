'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface NavDropdownItem {
  label: string
  href: string
  onClick?: () => void
}

interface NavDropdownProps {
  label: string
  items: NavDropdownItem[]
  className?: string
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function NavDropdown({ label, items, className = '', isOpen: controlledIsOpen, onOpenChange }: NavDropdownProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  
  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  
  // Clear any pending timeout
  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Open dropdown
  const openDropdown = () => {
    clearCloseTimeout()
    // If controlled, only open if parent allows it
    // If uncontrolled, use internal state
    if (onOpenChange) {
      // In controlled mode, parent manages state
      onOpenChange(true)
    } else {
      setInternalIsOpen(true)
    }
  }

  // Close dropdown with delay
  const closeDropdown = (delay: number = 200) => {
    clearCloseTimeout()
    timeoutRef.current = setTimeout(() => {
      if (onOpenChange) {
        onOpenChange(false)
      } else {
        setInternalIsOpen(false)
      }
    }, delay)
  }

  // Close dropdown immediately
  const closeDropdownImmediate = () => {
    clearCloseTimeout()
    if (onOpenChange) {
      onOpenChange(false)
    } else {
      setInternalIsOpen(false)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdownImmediate()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close dropdown when route changes
  useEffect(() => {
    closeDropdownImmediate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Respond to controlled state changes - if parent closes it, clear timeout
  useEffect(() => {
    if (controlledIsOpen !== undefined && !controlledIsOpen) {
      clearCloseTimeout()
    }
  }, [controlledIsOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearCloseTimeout()
    }
  }, [])

  const handleItemClick = (item: NavDropdownItem) => {
    if (item.onClick) {
      item.onClick()
    }
    closeDropdownImmediate()
  }

  return (
    <div 
      ref={dropdownRef} 
      className={`relative ${className}`}
      onMouseEnter={openDropdown}
      onMouseLeave={() => closeDropdown(300)}
    >
      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            closeDropdownImmediate()
          } else {
            openDropdown()
          }
        }}
        className="text-white transition-colors flex items-center gap-1.5 group hover:text-[var(--accent-teal)]"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-56 bg-[var(--bg-dark)] border border-white/10 rounded-lg shadow-xl overflow-hidden"
            style={{ zIndex: 10001, marginTop: '8px' }}
            onMouseEnter={openDropdown}
            onMouseLeave={() => closeDropdown(300)}
          >
            <div className="py-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => handleItemClick(item)}
                  className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/5 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

